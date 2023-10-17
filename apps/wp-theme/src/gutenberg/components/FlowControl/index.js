/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */

const OPTIONS = [
	{
		label: __( 'S', 'lism-blocks' ),
		value: 's',
	},
	{
		label: __( 'M', 'lism-blocks' ),
		value: 'm',
	},
	{
		label: __( 'L', 'lism-blocks' ),
		value: 'l',
	},
];

const UNITS = [
	'px',
	'em',
	'rem',
]

export default function FlowControl({value, onChange}){
	const isCustomValue = value !== undefined && ! OPTIONS.some( ( option ) => option.value === value );

	const units = useCustomUnits( { availableUnits:UNITS } );

	return (
		<InspectorControls group="styles">
			<PanelBody title={ __( 'Layout' ) }>
				<ToggleControl
					__nextHasNoMarginBottom
					label={ __( 'Use flow layout', 'lism-blocks' ) }
					checked={value !== undefined}
					onChange={ ( value ) => {
						onChange( value ? 's' : undefined );
					}}
				/>
				{ value !== undefined && (
					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						label={ __( 'Flow gap', 'lism-blocks' ) }
						onChange={(value)=>{
							onChange( value === 'custom' ? '' : value)
						}}
						value={isCustomValue ? 'custom' : value}
					>
						{OPTIONS.map(({label, value}) => (
							<ToggleGroupControlOption
								key = {value}
								label={label}
								value={value}
							/>
						))}
						<ToggleGroupControlOption
							label={__( 'Custom', 'lism-blocks' )}
							value="custom"
						/>
					</ToggleGroupControl>
				)}
				{ isCustomValue && (
					<UnitControl
						size="__unstable-large"
						__nextHasNoMarginBottom
						label={ __( 'Custom' ) }
						labelPosition="top"
						hideLabelFromVision
						value={ value }
						onChange={ ( newValue ) => {
							onChange(newValue)

						} }
						units={ units }
						min={ 0 }
					/>
				)}
			</PanelBody>
		</InspectorControls>
	);
};
