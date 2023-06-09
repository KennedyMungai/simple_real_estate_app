import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = ({
	purpose,
	imageUrl,
	title1,
	title2,
	desc1,
	buttonText,
	desc2,
	linkName
}: {
	purpose: string
	imageUrl: string
	title1: string
	title2: string
	desc1: string
	buttonText: string
	desc2: string
	linkName: string
}) => (
	<Flex
		flexWrap={'wrap'}
		justifyContent={'center'}
		alignItems={'center'}
		m={'10'}
	>
		<Image src={imageUrl} width={500} height={300} alt={'banner'} />
		<Box p={5}>
			<Text color={'gray.500'} fontSize='sm' fontWeight='medium'>
				{purpose}
			</Text>
			<Text fontSize='3xl' fontWeight='bold'>
				{title1}
				<br />
				{title2}
			</Text>
			<Text
				fontSize='lg'
				paddingY={'0.25rem'}
				fontWeight='medium'
				color={'gray.700'}
			>
				{desc1}
				<br />
				{desc2}
			</Text>
			<Button fontSize={'xl'} bg={'blue.300'} color='white'>
				<Link href={linkName}>{buttonText}</Link>
			</Button>
		</Box>
	</Flex>
)

export default function Home() {
	return (
		<Box>
			<Heading>Real Estate Bitches!!!</Heading>
			<Banner
				purpose={'Rent A Home'}
				title1={'Rental Homes for '}
				title2={'Everyone'}
				desc1={'Explore apartments, villas, homes'}
				desc2={'and more'}
				buttonText='Explore Renting'
				linkName='/search?purpose=for-rent'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
			/>
			<Flex flexWrap={'wrap'}>
				{/* Fetch the properties and map over them */}
			</Flex>
			<Banner
				purpose={'Buy A Home'}
				title1={'Find, Buy and Own your '}
				title2={'Dream Home'}
				desc1={'Explore apartments, villas, homes'}
				desc2={'and more'}
				buttonText='Explore Buying'
				linkName='/search?purpose=for-sale'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
			/>
			<Flex flexWrap={'wrap'}>
				{/* Fetch the properties and map over them */}
			</Flex>
		</Box>
	)
}
