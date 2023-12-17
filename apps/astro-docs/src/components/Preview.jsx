import React from 'react';
import { Layouter, Layer, Icon, Tabs, TabItem } from '@loos/lism-core';
// import ResizeIcon from './icons/ResizeIcon.astro';
import { ArrowDownRight } from '@phosphor-icons/react';

export const Preview = (props) => {
	return <Layouter className='c--preview' {...props} />;
};

export const PreviewTitle = ({ children }) => {
	return (
		<div className='c--preview_title l--flex -ai:c -gap:20 -mb:10'>
			<span className='__decorator l--center'>↓</span>
			<div className='c--previewTitle__text -fz:s -fx:1'>{children}</div>
		</div>
	);
};

export const PreviewArea = ({
	children,
	resize,
	nogrid = false,
	bg = 'u:grid',
	isFlow = true,
	p = 'em2',
}) => {
	const lismState = [];
	if (resize) lismState.push('is--resize');

	return (
		<Layouter className='c--preview_area -hov:pass'>
			<Layouter
				className='c--preview_inner'
				lismState={lismState}
				isFlow={isFlow}
				bg={!nogrid && bg}
				p={p}
			>
				{children}
				{resize && (
					<Layer
						className='c--preview_help -d:f -lh:1 -p:em5 -gap:em3 -bdrs:2 -hov:get:show'
						position='bottom right'
					>
						リサイズ可能 <Icon as={ArrowDownRight} weight='fill' />
					</Layer>
				)}
			</Layouter>
		</Layouter>
	);
};

export const PreviewCode = (props) => {
	if (React.Children.count(props.children) > 1) {
		return <Tabs className='c--preview_code' {...props} />;
	} else {
		return <Layouter className='c--preview_code' {...props} />;
	}
};

// tabItemの時はlabel渡ってくる
export const CodeTab = ({ label, ...props }) => {
	return <TabItem label={label} {...props} />;
};
