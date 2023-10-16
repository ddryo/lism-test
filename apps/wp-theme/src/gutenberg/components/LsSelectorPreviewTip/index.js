import { Icon } from '@wordpress/components';
/**
 * ArkbSelectorPreviewTip
 */
export default ({ anchor = '', className = '', icon = null }) => {
	let classNames = '';
	if (className) {
		// クラスを配列化 : 完全一致させるため
		let nowClasses = className.split(' ');

		// .is-style-... は除外する
		nowClasses = nowClasses.filter((_classname) => !_classname.startsWith('is-style-'));
		classNames = nowClasses.join('.');
	}

	if (!anchor && !classNames) return null;

	return (
		<span className='lsSelectorPreview'>
			{icon && <Icon icon={icon} className='__icon' />}
			<span className='__selectors'>
				{anchor && <span className='__id'>{`#${anchor}`}</span>}
				{classNames && <span className='__class'>{`.${classNames}`}</span>}
			</span>
		</span>
	);
};
