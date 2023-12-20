import React from 'react';
import { Layouter, Layer, Icon, Tabs, TabItem } from '@loos/lism-astro';
// import ResizeIcon from './icons/ResizeIcon.astro';
import { ArrowDownRight } from '@phosphor-icons/react';

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
