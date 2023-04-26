import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = ({ purpose }: { purpose: string }) => (
	<Flex flexWrap={'wrap'} justify={'center'} align={'center'} m={'10'}>
		{purpose}
	</Flex>
)

export default function Home() {
	return (
		<Flex justify={'center'}>
			<Heading>Real Estate Bitches!!!</Heading>
		</Flex>
	)
}
