'use client';

import React, { useState } from 'react';
import { Box, Layer, Flex } from '@lism/core';
import Preview from './Preview';
import classnames from 'classnames';
import { renderToString } from 'react-dom/server';
// import Script from 'next/script';
// import ShadowDOM from 'react-shadow';

// codeカラーについて
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_PRISM.MD

const Demo = ({ children, alignfull, ...attrs }) => {
	if (alignfull) {
		attrs.alignfull = true;
		attrs.isConstrained = true;
	}

	return (
		<>
			{/* <Script src='/demo.js' /> */}
			<Box blockClass='b--demoBox' isConstrained alignfull {...attrs}>
				{children}
			</Box>
		</>
	);
};

// display: flex;
// align-items: center;
// gap: var(--space--20);
// margin-bottom: var(--space--10);

Demo.Title = ({ children }) => {
	return (
		<div className='b--demoBox__title l--flex -ai:c -gap:20 -mb:10'>
			<div className='b--demoBox__titleText -fz:s'>{children}</div>
		</div>
	);
};
Demo.Preview = ({
	isShadow,
	children,
	noframe,
	nogrid,
	resize,
	flowGap,
	isFlow = true,
	p,
	isConstrained,
	...props
}) => {
	let contentClass = 'b--demoBox__content';
	let previewClass = 'b--demoBox__preview';

	if (resize) {
		previewClass += ' is--resize';
	}
	if (noframe) {
		contentClass += ' -noframe';
	}
	if (nogrid) {
		contentClass += ' -nogrid';
	}

	isShadow = 1;
	return (
		<Box blockClass={contentClass} {...props}>
			{isShadow ? (
				<Box className={previewClass}>
					<Preview>
						<Box isFlow={isFlow} flowGap={flowGap} isConstrained={isConstrained} p={p}>
							{children}
						</Box>
					</Preview>
				</Box>
			) : (
				<Box isFlow={isFlow} flowGap={flowGap} isConstrained={isConstrained} className={previewClass} p={p}>
					{children}
				</Box>
			)}
			{resize && (
				<Layer position='bottom right' className='b--demoBox__help -fz:xs'>
					リサイズ可能エリアです ↑
				</Layer>
			)}
		</Box>
	);
};

Demo.Code = ({ children, isAcc, ...props }) => {
	if (!isAcc) {
		return (
			<Box className='b--demoBox__code' {...props}>
				{children}
			</Box>
		);
	}

	const [isOpenCode, setIsOpenCode] = useState(false);
	return (
		<Box p={20}>
			<Flex>
				<button
					className={classnames('b--demoBox__codeBtn -fz:s', {
						'-opened': isOpenCode,
					})}
					onClick={() => {
						setIsOpenCode(!isOpenCode);
					}}
				>
					{isOpenCode && '▲ ソースコードを閉じる'}
					{!isOpenCode && '▼ ソースコードを表示する'}
				</button>
			</Flex>
			{isOpenCode && <Box className='b--demoBox__code'>{children}</Box>}
		</Box>
	);
};

// Demo.Shadow = ({ children }) => {
// 	return (
// 		<root.div className='b--demoBox'>
// 			{/* <style></style> */}
// 			{children}
// 		</root.div>
// 	);
// };

// Demo.Frame = ({ children, useAccordion }) => {
// 	const src = renderToString(children);

// 	let assets = '<link href="/css/lism.css" type="text/css" rel="stylesheet" as="style">';
// 	assets += '<script src="/js/acc.js"></script>';
// 	const html = `
// 	<!DOCTYPE html>
// 	<html lang="ja"><head>
// 	<meta charset="utf-8">
// 	<title>Lism DEMO</title>
// 	<meta name="robots" content="noindex">
// 	<meta name="viewport" content="width=device-width, initial-scale=1">
// 	${assets}
// 	</head>
// 	<body>${src}</body></html>
// 	`;
// 	return <iframe className='b--demoBox__frame' srcDoc={html} width='400' height='200' />;
// };

export default Demo;