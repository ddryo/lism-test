import React from 'react';
import { Lism } from '../Lism';

export default function Center({ fit, ...props }) {
	// const blockProps = {
	// 	lismClass: 'l--center',
	// 	...props,
	// };
	// if(fit) {
	// 	blockProps
	// }
	return <Lism lismClass='l--center' data-fit={fit || null} {...props} />;
}
