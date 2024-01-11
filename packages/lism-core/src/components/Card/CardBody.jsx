import { Layer } from '../Layer';
import { Stack } from '../Flex';

export default function CardBody({ lismClass = {}, isLayer, ...props }) {
	const Component = isLayer ? Layer : Stack;
	lismClass.c = 'c--card__body';
	return <Component lismClass={lismClass} p='box' gap={isLayer ? null : 20} {...props} />;
}
