import { Item } from '../Item';
import { Grid } from '../Grid';

export default function HeroContent({ type, ...props }) {
	let defaultProps = {};
	if (type === 'top') {
		defaultProps.mb = 'auto';
	} else if (type === 'bottom') {
		defaultProps.mt = 'auto';
	} else if (type === 'center') {
		defaultProps = {
			my: 'auto',
			py: 60,
			// isFlow: true,
			isConstrained: true,
			hasGutter: true,
		};
		defaultProps.my = 'auto';
	} else if (type === 'strech') {
		// defaultProps.as = Grid;
		defaultProps = {
			as: Grid,
			ac: 'stretch',
			grow: '1',
			// py: 60,
			// isFlow: true,
			// isConstrained: true,
			// hasGutter: true,
		};
	}
	return <Item className='c--hero__content' {...defaultProps} {...props} />;
}
