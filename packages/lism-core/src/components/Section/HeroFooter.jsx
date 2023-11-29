import { Layouter } from '../Layouter';

export default function HeroFooter({ children, ...props }) {
	return (
		<Layouter blockClass='b--section__footer' gridItem={{ area: 'bottom' }} {...props}>
			{children}
		</Layouter>
	);
}
