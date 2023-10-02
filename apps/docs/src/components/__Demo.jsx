import { useState } from 'react';
// import Link from "next/link";
import classnames from 'classnames';
import MarkDown from '@/components/MarkDown';
import Code from '@/components/Code';
import { Box, Layer, Flex } from '@lism/core';

// import { renderToString } from "react-dom/server";

const getTabOffset = (code) => {
	const firstLessThanIndex = code.indexOf('<');
	// const importIndex = code.indexOf("import");
	if (firstLessThanIndex < 0) {
	}

	// '<' が存在する場合
	if (firstLessThanIndex !== -1) {
		// 先頭から '<' が現れるまでの部分文字列を取得
		// return code.substring(0, firstLessThanIndex);

		// 先頭から '<' が現れるまでの部分文字列を取得
		const substring = code.substring(0, firstLessThanIndex);

		// タブだけを抜き取る
		const tabs = substring.replace(/[^"\t"]/g, '');

		return tabs;
	}
	return '';
};

export default function Demo({
	children,
	alignfull,
	code,
	del,
	caption,
	resize,
	noframe,
	className,
	previewPadding,
	...attrs
}) {
	// useState
	const [isOpenCode, setIsOpenCode] = useState(false);

	if (code) {
		const delTabs = del || getTabOffset(code); //"\t";
		const reg = new RegExp(delTabs, 'gm');
		code = code.replace(reg, '');

		// 先頭と末尾の無駄な改行などを削除
		code = code.trim();
	}

	if (alignfull) {
		attrs.alignfull = true;
		attrs.isConstrained = true;
	}

	// codeカラー
	// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_PRISM.MD

	// console.log("previewPadding", previewPadding);
	return (
		<>
			<Box
				className={classnames(className, 'b--demoBox', {
					'-no-frame': noframe,
				})}
				{...attrs}
			>
				{caption && <MarkDown className='b--demoBox__caption'>{caption}</MarkDown>}
				<Box className='b--demoBox__content' alignfull>
					<Box
						isFlow
						className={classnames('b--demoBox__preview', { 'is--resize': resize })}
						p={previewPadding}
					>
						{children}
					</Box>
					{resize && (
						<Layer position='bottom right' className='b--demoBox__help -fz:xs'>
							リサイズ可能エリアです ↑
						</Layer>
					)}
				</Box>
				{code && (
					<Box p={20}>
						<Flex>
							<button
								className={classnames('b--demoBox__codeBtn -fz:s', {
									'-opened': isOpenCode,
								})}
								onClick={() => {
									setIsOpenCode(!isOpenCode);
								}}
							>
								{isOpenCode && '▲ ソースコードを閉じる'}
								{!isOpenCode && '▼ ソースコードを表示する'}
							</button>
						</Flex>
						{isOpenCode && <Code className='b--demoBox__code'>{code}</Code>}
					</Box>
				)}
			</Box>
		</>
	);
}
