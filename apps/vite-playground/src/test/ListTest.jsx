import { Container, Box, Text, Media } from '@loos/lism-core';
export default function DecoratorTest() {
	return (
		<Container hasGutter isFlow isConstrained>
			<hr />
			<ul className='l--flex'>
				<li>Flex List</li>
				<li>
					List Item 2
					<ul>
						<li>Unordered List</li>
						<li>List Item 2</li>
					</ul>
				</li>
			</ul>

			<ul className='is-style-icon--dot'>
				<li>Unordered List</li>
				<li>
					List Item 2
					<ul>
						<li>Unordered List</li>
						<li>List Item 2</li>
					</ul>
				</li>
			</ul>

			<ul className='is-style-icon--check'>
				<li>Check List</li>
				<li>
					List Item 2
					<ul>
						<li>Unordered List</li>
						<li>List Item 2</li>
					</ul>
				</li>
			</ul>

			<ul className='is-style-icon--caret'>
				<li>Check List</li>
				<li>
					List Item 2
					<ul>
						<li>Unordered List</li>
						<li>List Item 2</li>
					</ul>
				</li>
			</ul>
			<ul className='mylist'>
				<li>Unordered List</li>
				<li>List Item 2</li>
				<li>
					List Item 3
					<ul>
						<li>Unordered List</li>
						<li>
							List Item 2
							<ul>
								<li>Unordered List</li>
								<li>
									List Item 2
									<ul>
										<li>Unordered List</li>
										<li>List Item 2</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>

			<ol>
				<li>Ordered List</li>
				<li>
					List Item 2
					<ul>
						<li>Unordered List</li>
						<li>
							List Item 2
							<ul>
								<li>Unordered List</li>
								<li>List Item 2</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					List Item 3
					<ol>
						<li>Ordered List</li>
						<li>
							List Item 2
							<ol>
								<li>Ordered List</li>
								<li>
									List Item 2
									<ol>
										<li>Ordered List</li>
										<li>List Item 2</li>
									</ol>
								</li>
							</ol>
						</li>
					</ol>
				</li>
			</ol>
		</Container>
	);
}
