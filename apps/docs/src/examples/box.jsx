import React from 'react';
import { Box } from '@loos/lism-core';
import Demo from '@/components/Demo';

export const Demo01 = () => (
	<Box p={20} bgc='darkgray' c='white' shadow='2' radius='2'>
		<p>Box</p>
	</Box>
);

export const Demo01_Code = `
<Box p={20} bgc='darkgray' c='white' shadow='2' radius='2'>
	<p>Box</p>
</Box>`;

export const Demo02 = () => (
	<Demo>
		<Demo.Title>単純なBoxの例</Demo.Title>
		<Demo.Preview resize p={20}>
			<Box tag='section' isFlow px={50} py={40} bgc='whitesmoke'>
				<h3>Heading</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit, numquamdicta repellat ipsa
					autem eos iure ducimus consequatur vel.
				</p>
			</Box>
		</Demo.Preview>
	</Demo>
);
