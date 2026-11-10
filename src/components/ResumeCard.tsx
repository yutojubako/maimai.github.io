import type { ReactNode } from 'react'
import { Card } from '@astryxdesign/core/Card'
import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'
import { VStack } from '@astryxdesign/core/VStack'
import { Theme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'

interface ResumeCardProps {
	className?: string
	href?: string
	heading: string
	subheading?: string
	date?: string
	children?: ReactNode
}

export function ResumeCard({
	className = '',
	href,
	heading,
	subheading,
	date,
	children
}: ResumeCardProps) {
	const card = (
		<Card width='100%' padding={4} variant='transparent' className={`resume-card ${className}`}>
			<VStack gap={2} align='start'>
				{date && (
					<Text type='supporting' color='accent' weight='medium'>
						{date}
					</Text>
				)}
				<Heading level={3} className='font-serif' textWrap='pretty'>
					{heading}
				</Heading>
				{subheading && (
					<Text as='p' type='supporting' textWrap='pretty' className='resume-card-subheading'>
						{subheading}
					</Text>
				)}
				{children && <div className='resume-card-content'>{children}</div>}
			</VStack>
		</Card>
	)

	return (
		<Theme theme={neutralTheme}>
			{href ? (
				<a
					className='resume-card-link'
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`${heading} (opens in a new tab)`}
				>
					{card}
				</a>
			) : (
				card
			)}
		</Theme>
	)
}
