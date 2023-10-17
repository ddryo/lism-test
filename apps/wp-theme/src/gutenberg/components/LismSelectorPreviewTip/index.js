/**
 * @WordPress dependencies
 */
import { Icon } from '@wordpress/components';

export default function LismSelectorPreviewTip ({ anchor = '', className = '', icon = null }) {
	const filteredClassNames = className.split(' ').filter((_classname) => !_classname.startsWith('is-style-')).join('.');

	if (!anchor && !filteredClassNames) return null;

	return (
		<span className='lismSelectorPreview'>
			{icon && <Icon icon={icon} className='__icon' />}
			<span className='__selectors'>
				{anchor && <span className='__id'>{`#${anchor}`}</span>}
				{filteredClassNames && <span className='__class'>{`.${filteredClassNames}`}</span>}
			</span>
		</span>
	);
};
