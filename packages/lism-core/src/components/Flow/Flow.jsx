// import React from 'react';
import { Layout } from '../Layout';

export default function Flow({ gap = true, ...props }) {
	return <Layout isFlow={gap} {...props} />;
}
