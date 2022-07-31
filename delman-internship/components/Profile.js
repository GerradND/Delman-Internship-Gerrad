import {
	VStack,
	Box,
	Flex,
	Image,
	Text,
	SkeletonCircle,
	SkeletonText,
} from '@chakra-ui/react';

const Profile = ({ userItem, isLoading, isClicked }) => {
	let color = '#4EA5D9';
	if (userItem?.gender === 'female') {
		color = '#F7ACCF';
	}

	return (
		<Box
			width="300px"
			height="336px"
			p="2"
			m="4"
			border={!isLoading && isClicked ? '4px' : '0'}
			borderColor={!isLoading ? color : '#00000'}
			boxShadow={isLoading || !isClicked ? 'xl' : 'xs'}
		>
			<Flex justifyContent="center" alignItems="center" flexDirection="column">
				<SkeletonCircle
					isLoaded={!isLoading && isClicked}
					size="128px"
					mt="2"
					mb="2"
				>
					<Box>
						<Image src={userItem?.picture.large} borderRadius="50%" />
					</Box>
				</SkeletonCircle>

				<SkeletonText
					isLoaded={!isLoading && isClicked}
					mt="2"
					mb="2"
					noOfLines={6}
					spacing="4"
				>
					<Flex
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Text fontSize="2xl" fontWeight="semibold">
							{userItem?.name.first} {userItem?.name.last}
						</Text>
						<Text>{userItem?.email}</Text>
					</Flex>

					<Flex width="100%" justifyContent="space-between">
						<VStack m="2" p="2" width="12vh">
							<Text>{userItem?.nat}</Text>
							<Text>Nationality</Text>
						</VStack>
						<VStack m="2" p="2" width="12vh">
							<Text>{userItem?.dob.age}</Text>
							<Text>Age</Text>
						</VStack>
					</Flex>
				</SkeletonText>
			</Flex>
		</Box>
	);
};

export default Profile;
