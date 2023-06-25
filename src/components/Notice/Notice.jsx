import React from 'react';
import { Box } from '../index';
import classnames from 'classnames';

export default function Notice(props) {
	const { children, caption, type, className, ...attrs } = props;
	return (
		<Box
			className={classnames(className, 'b--noticeBox')}
			data-notice-type={type || 'point'}
			{...attrs}
		>
			{caption && <div className='b--noticeBox__caption'>{caption}</div>}
			<div className='b--noticeBox__content is--flow -innerGap--s'>{children}</div>
		</Box>
	);
}
