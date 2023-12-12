import { Layouter } from '../Layouter';

export default function Frame({ lismClass = {}, ...props }) {
	lismClass.b = 'b--frame';
	return <Layouter lismClass={lismClass} isObjectFit {...props} />;
}

// export default function Frame({ ...props }) {
// 	return <Layouter isFrame isObjectFit {...props} />;
// }
