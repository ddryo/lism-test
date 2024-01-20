import { Layouter } from '../Layouter';

export default function Frame({ lismStyle = {}, lismState = [], as, objectPosition, ...props }) {
	lismState.push('is--frame');
	const Component = as || Layouter;

	if (objectPosition) {
		lismStyle['--objectPosition'] = objectPosition;
	}

	return <Component lismState={lismState} lismStyle={lismStyle} {...props} />;
}

// export default function Frame({ ...props }) {
// 	return <Layouter isFrame isObjectFit {...props} />;
// }
