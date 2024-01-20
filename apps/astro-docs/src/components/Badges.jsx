import { Badge } from '@loos/lism-core';

export const MemoBadge = ({ children, ...props }) => {
	return (
		<Badge fz='11px' lh='1' p='10' variant='subtle' boxcolor='orange' {...props}>
			{children}
		</Badge>
	);
};
export const PropBadge = ({ type = '', ...props }) => {
	let boxcolor = 'blue';
	if (type === 'attr') {
		boxcolor = 'green';
	} else if (type === 'cssvar') {
		boxcolor = 'purple';
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
			boxcolor={boxcolor}
			{...props}
		/>
	);
};
