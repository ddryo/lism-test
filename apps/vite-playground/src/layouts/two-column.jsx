// import { Link } from 'react-router-dom';
import { Container, Flow, FluidFix, Item } from '@loos/lism-core';

const DefaultSidebar = () => {
	return (
		<>
			<Flow>
				<p>Sidebar</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
				<p>
					Deleniti cum nostrum nemo, accusantium eius est ut voluptatibus excepturi unde
					repudiandae ea dolore odio laborum corrupti, totam perspiciatis odit.
					Laboriosam, amet.
				</p>
			</Flow>
		</>
	);
};
export default function TwoColumn({ sidebar, children }) {
	const Sidebar = sidebar || DefaultSidebar;
	return (
		<Container hasGutter py={50}>
			<FluidFix fix='last' fixW='240px' fluidMinW='40em' gap={50}>
				<Item>
					<Container isConstrained>{children}</Container>
				</Item>
				<Item bgc='pale' p='box'>
					<Sidebar />
				</Item>
			</FluidFix>
		</Container>
	);
}
