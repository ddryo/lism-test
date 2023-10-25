// 'use client';
// import Image from "next/image";
// import { Box } from "@loos/lism-core/components/Box";
// import { Box, Center } from '@loos/lism-core';
import { Box, Accordion, AccordionHeader, AccordionBody } from '@loos/lism-next';
// import { Box } from '@loos/lism-core/components/Box';
// import styles from './page.module.css';
// import './globals.css';

export default function Home() {
	return (
		<Box isFlow>
			<Box p={40} bgc='pale' h='20vh'>
				あaaaaaaああ
				{/* <Center size='cover'>
					<p>aaa</p>
				</Center> */}
			</Box>
			<Accordion>
				<AccordionHeader>アコーディオンのタイトル</AccordionHeader>
				<AccordionBody>
					<p>bbb</p>
				</AccordionBody>
			</Accordion>
		</Box>
	);
}
