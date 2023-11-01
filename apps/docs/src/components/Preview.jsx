'use client';

import React from 'react';
import { renderToString } from 'react-dom/server';

const Preview = ({ children }) => {
	return <lism-demo src={renderToString(children)} />;
};

export default Preview;
