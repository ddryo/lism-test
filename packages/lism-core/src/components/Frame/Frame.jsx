import { Layouter } from '../Layouter';

export default function Frame({ lismClass = {}, ...props }) {
	lismClass.b = 'b--frame';
	// if (aspect) {
	// 	props.css = Object.assign({}, props.css, { aspect });
	// }
	return <Layouter lismClass={lismClass} {...props} />;
}

// export default function Frame({ ...props }) {
// 	return <Layouter isFrame isObjectFit {...props} />;
// }
