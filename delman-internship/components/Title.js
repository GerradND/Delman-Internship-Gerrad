import React, { useState } from 'react';
import { Text } from '@chakra-ui/react';

const Title = ({ isClear, detail }) => {
	const [color, setColor] = useState();

	function getRandomColor() {
		const letters = '0123456789ABCDEF'.split('');
		let hex = '#';
		for (var i = 0; i < 6; i++) {
			hex += letters[Math.floor(Math.random() * 16)];
		}
		return hex;
	}

	if (!isClear) {
		setTimeout(() => {
			setColor(getRandomColor());
		}, 1000);
	} else {
		setTimeout(() => {
			setColor('#000000');
		});
	}

	return (
		<Text as="h1" fontSize="3xl" fontWeight="bold" m="2" color={color}>
			{detail}
		</Text>
	);
};

export default Title;
