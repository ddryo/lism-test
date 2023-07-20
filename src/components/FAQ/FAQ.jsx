import React from 'react';
import { Stack, Flex } from '../Box';
import { Item } from '../Item';
import { Badge } from '../Badge';

export default function FAQ({
	title,
	titleProps = {},
	qBadgeProps = {},
	aBadgeProps = {},
	children,
	flowGap,
	...props
}) {
	const blockProps = {
		blockClass: 'b--faq',

		gap: 40,
		// style,
		...props,
	};

	return (
		<Stack {...blockProps}>
			<Flex blockClass='b--faq__q' fxw='nowrap' gap={40} _util='-gap: -gap@sm:'>
				<Badge
					blockClass='b--faq__icon'
					tag='div'
					color='blue.400'
					// radius='1'
					isItem
					fxsh='0'
					fw={null}
					p={0}
					{...qBadgeProps}
				>
					Q
				</Badge>
				<Item blockClass='b--faq__qText' {...titleProps}>
					{title}
				</Item>
			</Flex>
			<Flex blockClass='b--faq__a' fxw='nowrap' gap={40} _util='-gap: -gap@sm:'>
				<Badge
					blockClass='b--faq__icon'
					tag='div'
					color='red.400'
					// radius='1'
					isItem
					fxsh='0'
					fw={null}
					p={0}
					{...aBadgeProps}
				>
					A
				</Badge>
				<Item blockClass='b--faq__aText' isFlow flowGap={flowGap || 40}>
					{children}
				</Item>
			</Flex>
		</Stack>
	);
}
