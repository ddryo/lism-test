import { Link } from 'react-router-dom';
import { Text, Flex, Container, Cluster } from '@loos/lism-core';
export default function Header() {
	return (
		<Container isConstrained hasGutter shadow='1'>
			<Flex py='30'>
				<Text tag='h1' fz={['m', 'l']}>
					Lism Playground @vite
				</Text>
				<Cluster tag='nav' gap={30} ms='auto'>
					<Link to={'/'}>TOP</Link>
					<Link to={'/page-one-column'}>Page One-Column</Link>
					<Link to={'/has-sidebar'}>Has Sidebar</Link>
					<Link to={'/test/container'}>Test</Link>
					<Link to={'/test/decorator'}>Test</Link>
					<Link to={'/test/gradation'}>Test</Link>
				</Cluster>
			</Flex>
		</Container>
	);
}
