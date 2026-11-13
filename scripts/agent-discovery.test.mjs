import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import test from 'node:test'
import agentDiscovery from './agent-discovery.mjs'

for (const base of ['/maimai.github.io/', '/']) {
	test(`generates current discovery resources with base ${base}`, async () => {
		const directory = await mkdtemp(join(tmpdir(), 'agent-discovery-'))
		const dir = pathToFileURL(`${directory}/`)
		try {
			const integration = agentDiscovery()
			integration.hooks['astro:config:done']({ config: { site: 'https://example.com', base } })
			await integration.hooks['astro:build:done']({
				dir,
				pages: [{ pathname: '' }, { pathname: 'new/' }, { pathname: '404.html' }]
			})
			const read = (path) => readFile(new URL(path, dir), 'utf8')
			const root = `https://example.com${base}`
			const sitemap = await read('sitemap.xml')
			assert.ok(sitemap.includes(`<loc>${root}</loc>`))
			assert.ok(sitemap.includes(`<loc>${root}new/</loc>`))
			assert.ok(!sitemap.includes('404'))
			const robots = await read('robots.txt')
			assert.ok(robots.includes(`Sitemap: ${root}sitemap.xml`))
			assert.ok(robots.includes(`User-agent: GPTBot\nDisallow: ${base}`))
			assert.ok(robots.includes(`User-agent: OAI-SearchBot\nAllow: ${base}`))
			assert.ok(robots.includes('Content-Signal: search=yes, ai-input=yes, ai-train=no'))
			assert.equal(
				await read('resume.md'),
				await readFile(new URL('../resume.md', import.meta.url), 'utf8')
			)
			const index = JSON.parse(await read('.well-known/agent-skills/index.json'))
			const skill = await readFile(
				new URL('../public/.well-known/agent-skills/read-resume/SKILL.md', import.meta.url)
			)
			assert.equal(
				index.skills[0].digest,
				`sha256:${createHash('sha256').update(skill).digest('hex')}`
			)
			assert.equal(new URL('../../../resume.md', index.skills[0].url).href, `${root}resume.md`)
			const catalog = JSON.parse(await read('.well-known/ai-catalog.json'))
			assert.equal(catalog.entries[0].url, index.skills[0].url)
			assert.ok(!('data' in catalog.entries[0]))
		} finally {
			await rm(directory, { recursive: true })
		}
	})
}
