import { Layouter } from '../Layouter';
import getProps from './getProps';
export default function Frame({ as, ...props }) {
	const Component = as || Layouter;
	return <Component {...getProps(props)} />;
}
