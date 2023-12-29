import { Badge } from '@loos/lism-core';

export const MemoBadge = ({ children, ...props }) => {
	return (
		<Badge fz='11px' lh='1' p='10' variant='subtle' keycolor='orange' {...props}>
			{children}
		</Badge>
	);
};
export const PropBadge = ({ type = '', ...props }) => {
	let keycolor = 'blue';
	if (type === 'attr') {
		keycolor = 'green';
	} else if (type === 'cssvar') {
		keycolor = 'purple';
	}
	return (
		<Badge
			fz='xs'
			ff='mono'
			lh='1'
			p='em2'
			m='em2'
			whs='nw'
			// d='if'
			variant='subtle'
			keycolor={keycolor}
			{...props}
		/>
	);
};
