import { Layouter } from '../Layouter';

export default function HeroHeader({ children, ...props }) {
	// Containerを使う
	return (
		<Layouter blockClass='b--section__header' gridItem={{ area: 'top' }} {...props}>
			{children}
		</Layouter>
	);
}
