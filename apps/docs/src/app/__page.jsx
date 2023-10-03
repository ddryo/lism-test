'use client';
import Image from 'next/image';
import Home from '@/components/Home';

import { Box, Accordion, AccordionHeader, AccordionBody, Stack, Flex, Note } from '@lism/core';

// import { Box, Accordion } from '@lism/core'; // npm link 時: "module"に指定した方が読み込まれる

// import {
// 	Box,
// 	//Item,
// 	Columns,
// 	Accordion,
// } from '@lism/core/next'; // npm link 時: "module"に指定した方が読み込まれる

// import {
// 	Accordion,
// 	AccordionHeader,
// 	AccordionBody,
// } from '@lism/core/next/Accordion'; // npm link 時: "module"に指定した方が読み込まれる

export default function HomePage() {
	return <Home />;
}
