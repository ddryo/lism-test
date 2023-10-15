import { Container, Box, Note } from '@lism/core';

function TableDemo({ trCount = 5, is4col, children }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Header 1</th>
					<th>Header 2</th>
					<th>Header 3</th>
					<th>Header 4</th>
					{!is4col && <th>Header 5</th>}
				</tr>
			</thead>
			<tbody>
				{children}
				{[...Array(trCount)].map((_, i) => {
					return (
						<tr key={i}>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>Division 3</td>
							<td>Division 4</td>
							{!is4col && <td>Division 5</td>}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
export default function DecoratorTest() {
	return (
		<Container hasGutter isConstrained size='s'>
			<Box maxW='30rem' isFlow>
				<Note heading='Memo'>
					<p>ボーダーはtableにはつけない。td,thにつける。</p>
					<ul>
						<li>
							`border-collapse:collapse;`にしてセルにボーダーつければきれいに全部1pxになる。
						</li>
						<li>captionタグのことも考慮</li>
						<li>
							特定のセルだけのボーダー強調したりするカスタマイズもしやすい(collapseだから2px以上ないと上部borderは見えないが...)
						</li>
					</ul>
				</Note>
				<Note heading='Memo'>
					<p>
						`collapse`なのでスクロールして要素を sticky
						にするとボーダーが見えないバグがある
					</p>
					<ul>
						<li>
							borderをinline,blockに分離して指定し、sticky要素には疑似要素で同じborderをつけることで対応。
						</li>
						<li>
							（ボーダー1pxだけで決まっていれば border→outline にするとかでもあり）
						</li>
					</ul>
				</Note>
				<table>
					<tbody>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>Division 3</td>
						</tr>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>
								Division 3<br />
								text
							</td>
						</tr>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>...</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th>Footer 1</th>
							<td>Footer 2</td>
							<td>Footer 3</td>
						</tr>
					</tfoot>
				</table>

				{/* <figure> */}
				{/* <caption>セルの余白大きめ（table--relaxed）</caption> */}
				<table className='table--relaxed'>
					<caption>セルの余白大きめ（table--relaxed）</caption>
					<thead>
						<tr>
							<th>Table Header 1</th>
							<th>Table Header 2</th>
							<th>Table Header 3</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>Division 3</td>
						</tr>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>Division 3</td>
						</tr>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>...</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th>Footer 1</th>
							<td>Footer 2</td>
							<td>Footer 3</td>
						</tr>
					</tfoot>
				</table>
				{/* </figure> */}

				{/* <!-- color: var(--th--c, inherit); background-color: var(--th--bgc, transparent); --> */}
				<table>
					<thead style={{ '--th--c': '#fff', '--th--bgc': 'black' }}>
						<tr>
							<th>Table Header 1</th>
							<th>Table Header 2</th>
							<th>Table Header 3</th>
						</tr>
					</thead>
					<tbody style={{ '--th--bgc': '#f8f9fa' }}>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>Division 3</td>
						</tr>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>
								Division 3<br />
								text
							</td>
						</tr>
						<tr>
							<th>Division 1</th>
							<td>Division 2</td>
							<td>...</td>
						</tr>
					</tbody>
					<tfoot style={{ '--th--c': 'rgb(234, 62, 28)' }}>
						<tr>
							<th>Total</th>
							<td>Table Header 2</td>
							<td>Table Header 3</td>
						</tr>
					</tfoot>
				</table>

				<h2>Scrollable</h2>
				<p>↓scroll</p>
				<figure className='table--scrollable'>
					<TableDemo />
				</figure>

				<p>↓scroll, 1列目FIX</p>
				<figure className='table--scrollable table--fix-column1'>
					<TableDemo />
				</figure>

				<p>↓scroll, 1列目FIX,結合あり</p>
				<figure className='table--scrollable table--fix-column1'>
					<TableDemo trCount={2}>
						<tr>
							<th rowSpan={2}>Division 1</th>
							<td>Division 2</td>
							<td>Division 3</td>
							<td>Division 4</td>
							<td>Division 5</td>
						</tr>
						<tr>
							{/* <th>Division 1</th> */}
							<td className='cell--nofix'>Division 2</td>
							<td>
								Division 3<br />
								lorem iupsum text
							</td>
							<td>Division 4</td>
							<td>Division 5</td>
						</tr>
					</TableDemo>
				</figure>

				<p>↓scroll, thead固定</p>
				<figure
					className='table--fix-thead table--relaxed'
					style={{ '--th--bgc': '#f8f9fa', maxHeight: '300px' }}
				>
					<TableDemo trCount={7} is4col />
				</figure>

				<p>↓scroll, table--fix-column1, table--fix-thead, solid</p>

				<figure
					className='table--scrollable table--fix-column1 table--fix-thead table--relaxed is-style-table--solid'
					data-table='scrollable fix-column1 fix-thead'
					style={{ '--th--bgc': '#f1f3fa', maxHeight: '300px' }}
				>
					<TableDemo>
						<tr>
							<th rowSpan={2}>Division 1</th>
							<td>Division 2</td>
							<td>Division 3</td>
							<td>Division 4</td>
							<td>Division 5</td>
						</tr>
						<tr>
							{/* <th>Division 1</th> */}
							<td className='cell--nofix'>Division 2</td>
							<td>Division 3</td>
							<td>Division 4</td>
							<td>Division 5</td>
						</tr>
					</TableDemo>
				</figure>

				<h2>入れ子</h2>
				<table className='table table-striped table-bordered'>
					<thead style={{ '--th--bgc': '#f8f9fa' }}>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>First</th>
							<th scope='col'>Last</th>
							<th scope='col'>Handle</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td colSpan='4'>
								<table className='table mb-0'>
									<thead>
										<tr>
											<th scope='col'>Header</th>
											<th scope='col'>Header</th>
											<th scope='col'>Header</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope='row'>A</th>
											<td>First</td>
											<td>Last</td>
										</tr>
										<tr>
											<th scope='row'>B</th>
											<td>First</td>
											<td>Last</td>
										</tr>
										<tr>
											<th scope='row'>C</th>
											<td>First</td>
											<td>Last</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<th scope='row'>3</th>
							<td>Larry</td>
							<td>the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</table>
			</Box>
		</Container>
	);
}
