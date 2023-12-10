import { Layouter } from '../Layouter';

export default function Component({
	lismClass = {},
	name = 'component',
	variant,
	subvariant,
	as,
	passVariant,
	...props
}) {
	lismClass.c = `c--${name}`;
	// lismState.push(`d--${variant}`);

	if (variant) {
		lismClass.c += ` c--${name}--${variant}`;
	}
	if (subvariant) {
		lismClass.c += ` c--${name}--${subvariant}`;
	}

	const Component = as || Layouter;

	return <Component lismClass={lismClass} variant={passVariant} {...props} />;
}
