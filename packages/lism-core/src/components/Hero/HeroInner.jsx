import { Grid } from '../Grid';

export default function HeroInner({ children, ...props }) {
	// Containerを使う
	return (
		<Grid blockClass='c--hero__inner -gta:tcb' {...props}>
			{children}
		</Grid>
	);
}
