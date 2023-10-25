'use client';

import React from 'react';
// import { Lism } from '@loos/lism-core';

import { renderToString } from 'react-dom/server';

const Preview = ({ children }) => {
	// const dataFlow = isFlow ? flowGap : '';
	return <lism-demo src={renderToString(children)} />;
};

export default Preview;
