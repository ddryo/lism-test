/**
 * @Internal dependencies
 */
import {
	AlignContentControl,
	AlignItemsControl,
	JustifyContentControl,
	JustifyItemsControl,
} from '@/gutenberg/components';

export default function AlignJustifyControl({ values = {}, onChange }) {
	const onChangeValue = (key, value) => {
		const newValues = { ...values, [key]: value };
		onChange(newValues);
	};

	return (
		<div className='lism-alignJustifyControl'>
			<AlignContentControl
				value={values?.alignContent}
				onChange={(value) => {
					onChangeValue('alignContent', value);
				}}
			/>
			<JustifyContentControl
				value={values?.justifyContent}
				onChange={(value) => {
					onChangeValue('justifyContent', value);
				}}
			/>
			<AlignItemsControl
				value={values?.alignItems}
				onChange={(value) => {
					onChangeValue('alignItems', value);
				}}
			/>
			<JustifyItemsControl
				value={values?.justifyItems}
				onChange={(value) => {
					onChangeValue('justifyItems', value);
				}}
			/>
		</div>
	);
}
