import { Layouter } from '../Layouter';

export default function Frame({ lismClass = {}, variant, ...props }) {
	lismClass.l = 'l--frame';
	if (variant) lismClass.l += ` l--frame--${variant}`;
	return <Layouter lismClass={lismClass} {...props} />;
}

// export default function Frame({ ...props }) {
// 	return <Layouter isFrame isObjectFit {...props} />;
// }
