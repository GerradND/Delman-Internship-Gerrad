import { Heading, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Card = ({ title, desciprition, link }) => {
	return (
		<Link href={link}>
			<Box
				as="a"
				p="6"
				m="4"
				borderWidth="2px"
				rounded="lg"
				flexBasis="45%"
				height="24vh"
				overflow="hidden"
				_hover={{
					background: 'white',
					color: 'teal.500',
				}}
				cursor="pointer"
			>
				<Heading as="h3" size="lg" mb="2">
					{title} &rarr;
				</Heading>
				<Text fontSize="lg" mt="5">
					{desciprition}
				</Text>
			</Box>
		</Link>
	);
};

export default Card;
