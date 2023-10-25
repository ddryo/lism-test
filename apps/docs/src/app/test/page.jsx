'use client';
import Image from 'next/image';

import { Box, Accordion, AccordionHeader, AccordionBody, Stack, Flex, Note } from '@loos/lism-core';

// import { Box, Accordion } from '@loos/lism-core'; // npm link 時: "module"に指定した方が読み込まれる

// import {
// 	Box,
// 	//Item,
// 	Columns,
// 	Accordion,
// } from '@loos/lism-core/next'; // npm link 時: "module"に指定した方が読み込まれる

// import {
// 	Accordion,
// 	AccordionHeader,
// 	AccordionBody,
// } from '@loos/lism-core/next/Accordion'; // npm link 時: "module"に指定した方が読み込まれる

export default function Home() {
	return (
		<main className='main'>
			<div className='center'>
				<p>aaa</p>
				<Accordion>
					<AccordionHeader>アコーディオンのタイトル</AccordionHeader>
					<AccordionBody>
						<p>アコーディオンのコンテンツ</p>
						<p>アコーディオンのコンテンツ</p>
					</AccordionBody>
				</Accordion>
				<Image className='log' src='/next.svg' alt='Next.js Logo' width={180} height={37} priority />
			</div>
		</main>
	);
}
