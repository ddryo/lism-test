// import React from 'react';
import { Core } from '../Core';
import { Stack } from '../Flex/Stack';

// import classnames from 'classnames';

// titleProps(termProps), descriptionProps,
// dtProps, ddProps
export default function GlossaryItem({ children, term, dtProps = {}, ddProps = {}, ...props }) {
	return (
		<Stack gap={20} blockClass='b--glossary__item' {...props}>
			<Core tag='dt' fw='bold' className='b--glossary__dt' {...dtProps}>
				{term}
			</Core>
			<Core tag='dd' className='b--glossary__dd' isFlow flowGap='s' ml={40} {...ddProps}>
				{children}
			</Core>
		</Stack>
	);
}
