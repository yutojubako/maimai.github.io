import { Card } from '@astryxdesign/core/Card'
import { Heading } from '@astryxdesign/core/Heading'
import { HStack } from '@astryxdesign/core/HStack'
import { Text } from '@astryxdesign/core/Text'
import { VStack } from '@astryxdesign/core/VStack'
import { Theme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'

interface ProfileHeroProps {
	imageSrc: string
}

export function ProfileHero({ imageSrc }: ProfileHeroProps) {
	return (
		<Theme theme={neutralTheme}>
			<Card width='100%' padding={6} variant='transparent' className='profile-hero'>
				<VStack gap={4} align='center'>
					<img
						src={imageSrc}
						alt='Yuto Imai'
						className='profile-hero-image'
						width='112'
						height='112'
						loading='eager'
					/>
					<VStack gap={2} align='center'>
						<Heading level={1} type='display-3' justify='center' className='font-serif'>
							Yuto Imai
						</Heading>
						<Text
							as='p'
							type='large'
							color='secondary'
							justify='center'
							className='profile-hero-role'
						>
							Multimodal AI Research Engineer
						</Text>
						<Text as='p' type='supporting' justify='center' textWrap='balance'>
							Building and evaluating Japanese-specialized vision-language models at SB Intuitions.
						</Text>
					</VStack>
					<HStack gap={5} wrap='wrap' justify='center'>
						<a className='profile-hero-link' href='mailto:yuto.imai@sbintuitions.co.jp'>
							yuto.imai@sbintuitions.co.jp
						</a>
						<a
							className='profile-hero-link'
							href='https://github.com/yutojubako'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
					</HStack>
				</VStack>
			</Card>
		</Theme>
	)
}
