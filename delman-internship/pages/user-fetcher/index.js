import { Button, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Profile from '../../components/Profile';

function UserFetcher({ initialData }) {
	const [data, setData] = useState(initialData);
	const [isLoading, setIsLoading] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const fetchData = async () => {
		const req = await fetch('https://randomuser.me/api');
		const res = await req.json();
		setIsLoading(false);
		return setData(res.results[0]);
	};

	const handleClick = () => {
		setIsLoading(true);
		fetchData();
	};

	console.log(isLoading);
	return (
		<Flex flexDirection="column" justifyContent="center" alignItems="center">
			<Profile userItem={data} isLoading={isLoading} isClicked={isClicked} />
			<Button
				onClick={() => {
					handleClick();
					setIsClicked(true);
				}}
				disabled={isLoading}
				mt="4"
			>
				{isClicked && (
					<>{!isLoading ? <Text>Refetch User</Text> : <Spinner size="sm" />}</>
				)}
				{!isClicked && <Text>Fetch</Text>}
			</Button>
		</Flex>
	);
}

export default UserFetcher;

UserFetcher.getInitialProps = async () => {
	const req = await fetch('https://randomuser.me/api');
	const res = await req.json();

	return { initialData: res.results[0] };
};
