import { Flex, Button, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Title from '../../components/Title';

function TitleTransformer() {
	const [isClear, setIsClear] = useState(false);
	const [title, setTitle] = useState('Clear Color');
	const [myArray, setMyArray] = useState(['Intership Program - 1']);
	const [number, setNumber] = useState(2);

	useEffect(() => {
		if (isClear) {
			setTitle('Randomize Color');
		} else {
			setTitle('Clear Color');
		}
	}, [isClear]);

	return (
		<>
			<Flex alignItems="center" justifyContent="center" flexDirection="column">
				{myArray.map((detail) => {
					return <Title isClear={isClear} detail={detail} key={detail} />;
				})}
				<Flex mt="6">
					<Text>Title Count: {number - 1}</Text>
				</Flex>
				<Flex mt="6">
					<Button onClick={() => setIsClear(!isClear)}>{title}</Button>
					<Button
						onClick={() => {
							if (number < 6) {
								setNumber(number + 1);
								setMyArray((myArray) => [
									...myArray,
									'Intership Program - ' + number.toString(),
								]);
							}
						}}
						disabled={number == 6}
					>
						Add Title
					</Button>
					<Button
						onClick={() => {
							if (number > 2) {
								setNumber(number - 1);
								setMyArray(myArray.slice(0, -1));
							}
						}}
						disabled={number == 2}
					>
						Remove Title
					</Button>
				</Flex>
			</Flex>
		</>
	);
}

export default TitleTransformer;
