import data from './data';

// {path: d}
export default function PresetIcon({ name, size = '1em', ...props }) {
	const iconData = data[name] || {};
	const { viewBox = '0 0 256 256', path = '' } = iconData;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox={viewBox}
			width={size}
			height={size}
			{...props}
		>
			<path d={path}></path>
		</svg>
	);
}
