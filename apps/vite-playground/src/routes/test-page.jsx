import OneColumn from '@/layouts/one-column';
import { Container, Box, Stack, Flow, Cluster, Spacer } from '@lism/core';
import DecoratorTest from '@/test/DecoratorTest';
import ContainerTest from '@/test/ContainerTest';
import GradationTest from '@/test/GradationTest';
import HTMLTest from '@/test/HTMLTest';
import TableTest from '@/test/TableTest';
import ListTest from '@/test/ListTest';
import ImgTest from '@/test/ImgTest';

import { Link, useParams } from 'react-router-dom';

const TestComponents = {
	decorator: DecoratorTest,
	container: ContainerTest,
	gradation: GradationTest,
	html: HTMLTest,
	list: ListTest,
	table: TableTest,
	img: ImgTest,
};

const TestLinks = () => {
	const testpages = Object.keys(TestComponents).map((componentName) => {
		return (
			<a key={componentName} href={`/test/${componentName}`}>
				{componentName} test→
			</a>
		);
	});

	return (
		<Cluster tag='nav' gap={20}>
			{testpages}
		</Cluster>
	);
};

const NotFound = () => (
	<>
		<h1>Not Found</h1>
		<p>You can see..</p>

		<TestLinks />
	</>
);

export default function Index() {
	// Route で設定したパラメータを取得
	const { slug } = useParams();

	const Content = TestComponents[slug] || NotFound;

	return (
		<>
			<Spacer h={50} />
			<Container isConstrained hasGutter>
				<Stack gap={20}>
					<h1>Test Page: {slug}</h1>
					<TestLinks />
				</Stack>
			</Container>
			<Flow>
				<Spacer h={40} />
				<Content />
			</Flow>
			<Spacer h={50} />
		</>
	);
}
