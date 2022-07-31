import { Heading, Flex, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<header>
			<nav>
				<Flex m="4">
					<Box mr="4" ml="4">
						<Heading fontSize="2xl" fontWeight="semibold">
							delman.io
						</Heading>
					</Box>
					<Box ml="4" mr="4">
						<Link href="/">
							<Text fontSize="xl" cursor="pointer">
								Internship Program
							</Text>
						</Link>
					</Box>
				</Flex>
				{children}
			</nav>
		</header>
	);
};

export default Layout;
