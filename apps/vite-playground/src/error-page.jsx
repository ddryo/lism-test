import { useRouteError } from 'react-router-dom';
import {
	//Container, Grid, Item,Flow,
	Stack,
	Center,
} from '@loos/lism-core';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	// 100dvh
	return (
		<Stack h='100dvh'>
			<Header />
			<Center flexItem={{ fxg: '1' }}>
				<h2>Oops!</h2>
				<p>{error.statusText || error.message}</p>
			</Center>
			<Footer />
		</Stack>
	);
}
