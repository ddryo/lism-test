import React from 'react';
import { Lism } from '../Lism';
import { Stack } from '../Stack';
// import { getCommonProps } from '../../lib';
// import classnames from 'classnames';

export default function GlossaryItem({ children, term, ...props }) {
	return (
		<Stack gap={20} blockClass='b--glossary__item' {...props}>
			<Lism tag='dt' fw='bold' className='b--glossary__dt'>
				{term}
			</Lism>
			<Lism tag='dd' className='b--glossary__dd' m={{ left: 50 }} isFlow flowGap={40}>
				{children}
			</Lism>
		</Stack>
	);
}
