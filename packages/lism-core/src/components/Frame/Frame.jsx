import { Layouter } from '../Layouter';

export default function Frame({ ...props }) {
	// lismState.l = 'l--frame';
	return <Layouter isFrame {...props} />;
}
