import Flex from './Flex';
import { getSideFlexProps } from './getProps';

export default function SideFlex({ side = 'last', ...props }) {
	return <Flex _flex='sideFlex' data-side={side} {...getSideFlexProps(props)} />;
}
