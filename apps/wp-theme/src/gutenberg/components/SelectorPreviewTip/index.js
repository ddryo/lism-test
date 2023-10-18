/**
 * @WordPress dependencies
 */
import { Icon } from '@wordpress/components';

export default function SelectorPreviewTip({ anchor = '', className = '', icon = null }) {
	const filteredClassNames = className
		.split(' ')
		.filter((_classname) => !_classname.startsWith('is-style-'))
		.join('.');

	if (!anchor && !filteredClassNames) return null;

	return (
		<span className='lism-selectorPreviewTip'>
			{icon && <Icon icon={icon} className='__icon' />}
			<span className='__selectors'>
				{anchor && <span className='__id'>{`#${anchor}`}</span>}
				{filteredClassNames && <span className='__class'>{`.${filteredClassNames}`}</span>}
			</span>
		</span>
	);
}
