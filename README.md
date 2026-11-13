<h1 align="center">
  maimai.github.io
</h1>

<div align="center">
  Yuto Imai の履歴書サイト（Resume）
  <br />
  <br />
  <a href="https://yutojubako.github.io/maimai.github.io/"><strong>Webサイトを見る »</strong></a>
</div>

<div align="center">
<br />

[![Deploy to GitHub Pages](https://github.com/yutojubako/maimai.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/yutojubako/maimai.github.io/actions/workflows/deploy.yml)
[![Project license](https://img.shields.io/github/license/yutojubako/maimai.github.io.svg?style=flat-square)](LICENSE)

</div>

---

## About

Yuto Imaiの履歴書サイトです。SB Intuitions で日本語特化の視覚言語モデルの開発・評価に携わるリサーチエンジニアとしての経歴を紹介しています。

**公開URL**: <https://yutojubako.github.io/maimai.github.io/>

コンテンツのソースは [`resume.md`](resume.md) にも同等の内容があります。個人の技術ブログは [yutojubako/blog](https://github.com/yutojubako/blog) で別サイトとして公開しています。

## ローカルでの実行

```bash
git clone https://github.com/yutojubako/maimai.github.io.git
cd maimai.github.io
npm install
npm run dev
```

ブラウザで <http://localhost:4321/maimai.github.io/> にアクセス

## 編集のポイント

- 履歴書本体: `src/pages/index.astro`
- ランディングヒーロー: `src/components/ProfileHero.tsx`
- 履歴書カード: `src/components/ResumeCard.tsx`
- サイト設定（タイトル・ナビゲーション）: `src/site.config.ts`
- ファビコン: `public/favicon.svg`

## デプロイ

`master` への push で GitHub Actions（[withastro/action](https://docs.astro.build/ja/recipes/deploy-github-pages/)）が自動ビルドし、GitHub Pages にデプロイされます。

## Agent discovery (GitHub Pages)

`npm run build` regenerates `sitemap.xml`, `robots.txt`, `resume.md`, the
SHA-256-verified `.well-known/agent-skills/index.json`, and
`.well-known/ai-catalog.json`. The sitemap includes generated public pages,
excluding the 404 page and legacy redirect files. Edit `resume.md` alongside
the HTML résumé so both representations stay current. Run `npm test` to check
generation and base-path handling.

The homepage advertises these resources through HTML links and offers an
experimental, read-only `read_resume` WebMCP tool when the browser supports it.
Unsupported browsers continue to work normally.

### Crawl policy and origin-root requirements

Policy: **search=yes, ai-input=yes, ai-train=no**. Search and user-triggered
crawlers are allowed; named training crawlers are disallowed for this project.
Content Signals are advisory extensions, not access controls.

This deployment owns **`/maimai.github.io/`, not `/`** on
`https://yutojubako.github.io`. Consequently:

- `/maimai.github.io/robots.txt` is a policy copy, **not an effective robots.txt**.
  The origin owner's `yutojubako.github.io` repository must merge its rules into
  **`https://yutojubako.github.io/robots.txt`**. Preserve rules for other projects
  and include `Sitemap: https://yutojubako.github.io/maimai.github.io/sitemap.xml`.
  Merge the blog policy too, referencing `https://yutojubako.github.io/blog/sitemap.xml`.
- The `.well-known` files are project-scoped HTML-linked fallbacks. Origin-root
  discovery requires publishing or linking them from the origin owner's site.
- GitHub Pages cannot configure HTTP `Link` headers or negotiate Markdown via
  `Accept`. The explicit Markdown URL is a fallback, not content negotiation.
  A controllable proxy could send `Link: </maimai.github.io/resume.md>;
  rel="alternate"; type="text/markdown"`. Negotiation would also require
  `Vary: Accept` and `Content-Type: text/markdown` for Markdown responses.
- This repository cannot set the GitHub-owned domain's DNS/DNSSEC. DNS-AID
  requires a controlled domain and a real agent service; no records are fabricated.
- There are no APIs, OAuth issuers/protected resources, registration services,
  or MCP servers. API catalogs, OAuth discovery, auth.md, and MCP server cards
  are intentionally absent rather than advertising nonexistent capabilities.
- The ARD manifest is experimental and project-scoped. GitHub Pages controls
  response headers; its required CORS header must be checked after deployment.

After publishing, check status and MIME types with `curl -i` for the project
`robots.txt` (`text/plain`), `sitemap.xml` (XML), `resume.md`, and both discovery
JSON files (`application/json`). Static endpoint Response headers do not
configure GitHub Pages headers. A local preview is not proof of production
headers. Verify the origin-root robots.txt separately; root-based scanners may
continue to fail until the origin owner publishes it. No deployment or DNS
change is performed by this implementation.

## 技術スタック

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- [React](https://react.dev/) - Astryx コンポーネントの実行
- [Astryx](https://github.com/meta/astryx) - ヒーローと履歴書カードの UI コンポーネント
- [astro-theme-resume](https://github.com/srleom/astro-theme-resume) ベースのカスタムテーマ（Ivory & Ink）
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [GitHub Pages](https://pages.github.com/) - ホスティング

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) をご覧ください。
