import { Item } from '../Item';

export default function HeroBody({ lismClass = {}, children, ...props }) {
	// Containerを使う

	lismClass.c = 'c--hero__body';
	return (
		<Item
			lismClass={lismClass}
			gridItem={{ area: 'center' }}
			isFlow
			isConstrained
			hasGutter
			{...props}
		>
			{children}
		</Item>
	);
}
