import React from 'react';
import { Stack } from '../Box';
// import classnames from 'classnames';

export default function Glossary({ children, ...props }) {
	return (
		<Stack tag='dl' blockClass='b--glossary' gap={40} {...props}>
			{children}
		</Stack>
	);
}
