import { Flex } from '../Flex';

export default function TabList({ as, lismClass = {}, variant, ...props }) {
	const TabList = as || Flex;

	lismClass.c = 'c--tabs_list';
	if (variant) {
		lismClass.c += ` c--tabs_list--${variant}`;
	}

	return <TabList lismClass={lismClass} jc='s' role='tablist' {...props} />;
}
