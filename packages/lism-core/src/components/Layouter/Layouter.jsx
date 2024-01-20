import { getLismProps, getAllLayoutStateData } from '../../lib';

// Staet系を getLismProps で処理すると全てに動作して過剰すぎるので、<Layouter> で処理する.
// getLismProps だけ処理したい場合は <Core /> を使う。
export default function Layouter({ children, as, asProps, tag, ...props }) {
	const lismProps = getLismProps(getAllLayoutStateData(props));

	const JSX = as || tag || 'div';
	return (
		<JSX {...lismProps} {...asProps}>
			{children}
		</JSX>
	);
}
