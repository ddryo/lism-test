/**
 * @External dependencies
 */
import classnames from 'classnames';

/**
 * @WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	ButtonGroup,
	Flex,
	TextControl,
	TextareaControl,
	TabPanel,
	Modal,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import { formatSvg } from '@/gutenberg/utils';
import { Icon } from '@/gutenberg/components';
import { ICON_NAMESPACE, ICON_STYLE_LIST, ICON_STYLE_LABELS, ICON_CATEGORIES } from './config';

const IconBtns = ({ icons, value, onChange, isFilterd }) => {
	return (
		<ButtonGroup className='__iconList' data-filterd={isFilterd ? '1' : '0'}>
			{icons.map((iconName, idx) => {
				if (iconName.startsWith('--')) {
					if (isFilterd) return null;
					const catName = ICON_CATEGORIES[iconName] ?? iconName;
					return (
						<span key={idx} className='__iconCategory'>
							{catName}
						</span>
					);
				}
				return (
					<Button
						key={idx}
						variant={iconName === value ? 'primary' : ''}
						onClick={() => {
							onChange(iconName);
						}}
					>
						<Icon icon={iconName} size='20px' />
					</Button>
				);
			})}
		</ButtonGroup>
	);
};

const IconPickerTab = ({ value = '', onChange, searchValue }) => {
	const ICON_DATA = window[ICON_NAMESPACE] || {};
	const PICKER_LIST = ICON_DATA.list || {};
	let ICON_TABS = ICON_DATA.tabs || [];
	ICON_TABS = ICON_TABS.map((tabData) => {
		return {
			name: tabData.prefix,
			title: <Icon icon={tabData.icon} />,
		};
	});
	const INITIAL_TAB = ICON_TABS[0].name;

	let slectedTab = '';
	if (value.startsWith('Ls') || value.startsWith('Swl') || value.startsWith('swl')) {
		slectedTab = 'ls';
	} else if (value.startsWith('Io')) {
		slectedTab = 'io';
	} else if (value.startsWith('Fi')) {
		slectedTab = 'fi';
	} else if (value.startsWith('Ph')) {
		slectedTab = 'ph';
	} else if (value.startsWith('Fa') || value.startsWith('fa')) {
		slectedTab = 'fa';
	}

	const [currentTabName, setCurrentTabName] = useState(slectedTab || INITIAL_TAB);
	const theIconsList = PICKER_LIST[currentTabName] || {};

	const iconStyles = ICON_STYLE_LIST[currentTabName];
	const iconStyleOptions = iconStyles.map((_style) => {
		return {
			value: _style,
			label: ICON_STYLE_LABELS[_style] ?? _style,
		};
	});

	const [iconType, setIconType] = useState(iconStyles[0] || 'regular');

	const theIcons = theIconsList[iconType] || [];

	// フィルタ後のリスト
	let filteredIcons = null;

	// 検索ワードからアイコンを絞り込みしているとき
	if (searchValue) {
		filteredIcons = theIcons.filter((i) => i.toLowerCase().includes(searchValue.toLowerCase()));
	}

	return (
		<TabPanel
			className='lism-iconModal__tab'
			activeClass='is-active'
			onSelect={(tabName) => {
				setCurrentTabName(tabName);

				// タブ切り替え時に同じアイコンタイプがなければリセット
				if (!ICON_STYLE_LIST[tabName].includes(iconType)) {
					setIconType(ICON_STYLE_LIST[tabName][0]);
				}
			}}
			tabs={ICON_TABS}
			initialTabName={currentTabName}
		>
			{() => (
				<>
					<ButtonGroup className='__iconStyles'>
						<span className='__label'>{__('スタイル', 'lism-blocks')} : </span>
						{iconStyleOptions.map((_style, idx) => {
							return (
								<Button
									key={idx}
									variant={_style.value === iconType ? 'primary' : ''}
									onClick={() => {
										setIconType(_style.value);
									}}
								>
									{_style.label}
								</Button>
							);
						})}
					</ButtonGroup>
					{(() => {
						if (filteredIcons) {
							return filteredIcons.length ? (
								<IconBtns
									icons={filteredIcons}
									value={value}
									onChange={onChange}
									isFilterd={true}
								/>
							) : (
								<div className='__noIcon'>{__('Icon not found.', 'lism-blocks')}</div>
							);
						}
						return <IconBtns icons={theIcons} value={value} onChange={onChange} />;
					})()}
				</>
			)}
		</TabPanel>
	);
};

const SvgInputControl = ({ value, onSet, className }) => {
	const [enteredSvg, setEnteredSvg] = useState(value || '');

	return (
		<Flex className={classnames('lism-svgInput', className)}>
			<TextareaControl
				rows={2}
				value={enteredSvg || ''}
				placeholder={__(
		'You can enter SVG tags directly here (script tags are removed).',
		'lism-blocks'
	)}
				onChange={(val) => {
					setEnteredSvg(val);
				}}
			/>
			<Button
				text={_x('Insert', 'svg', 'lism-blocks')}
				className='__setBtn'
				variant='secondary'
				onClick={() => {
					const newSvg = formatSvg(enteredSvg);
					setEnteredSvg(newSvg);
					onSet(newSvg);
				}}
			/>
		</Flex>
	);
};

export default function IconModal({ value, help, onChange, onClose, svg, onSetSvg, position = 'sidebar' }) {
	const [searchValue, setSearchValue] = useState('');

	return (
		<Modal
			title={__('Select Icon', 'lism-blocks')}
			className={`lism-iconModal -position-${position}`}
			onRequestClose={() => {
				onClose();
				setSearchValue('');
			}}
		>
			<div className='lism-iconModal__inner'>
				<div className='lism-iconModal__top'>
					<TextControl
						placeholder={__('Search icon', 'lism-blocks')}
						className='lism-iconModal__s'
						value={searchValue}
						autoComplete='false'
						name='icon-search'
						onChange={(newSearchValue) => {
							setSearchValue(newSearchValue);
						}}
					/>
				</div>
				<IconPickerTab
					onChange={(val) => {
						onClose();
						onChange(val);
					}}
					{...{
						value,
						searchValue,
					}}
				/>
				<div className='lism-iconModal__bottom'>
					{onSetSvg && (
						<SvgInputControl
							value={svg || ''}
							onSet={(nweSvg) => {
								onSetSvg(nweSvg);
								onClose();
							}}
						/>
					)}
					{help && <div className='__helpText'>※ {help}</div>}
				</div>
			</div>
		</Modal>
	);
}
