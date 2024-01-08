import { Grid } from '../Grid';
import { Item } from '../Item';

export default function HeroContent({ type, ...props }) {
	let defProps = {};
	if (type === 'top') {
		defProps.mb = 'auto';
	} else if (type === 'bottom') {
		defProps.mt = 'auto';
	} else if (type === 'center') {
		defProps = {
			my: 'auto',
			py: 60,
			// isFlow: true,
			isConstrained: true,
			hasGutter: true,
		};
		defProps.my = 'auto';
	} else if (type === 'stretch') {
		// defProps.as = Grid;
		defProps = {
			as: Grid,
			ac: 'stretch',
			fxg: '1',
			// py: 60,
			// isFlow: true,
			// isConstrained: true,
			// hasGutter: true,
		};
	}

	return <Item className='c--hero__content' {...defProps} {...props} />;
}
