import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box, Stack } from '@loos/lism-core';

export default function Root() {
	return (
		<Stack minH='100dvh'>
			<Header />
			{/* <Box> */}
			<Outlet />
			{/* </Box> */}
			<Footer />
		</Stack>
	);
}
