import { Container, Box, Text } from '@loos/lism-core';
export default function DecoratorTest() {
	return (
		<Container hasGutter isFlow isConstrained>
			<hgroup>
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
				<p>Paragraph</p>
			</hgroup>

			<hr />
			<h2 id='text'>Text</h2>
			<p>
				Lorem ipsum dolor sit amet,
				<a href='#' title='test link'>
					test link
				</a>{' '}
				adipiscing elit.
			</p>

			<h3 id='inline-tags'>inline tags</h3>
			<p>
				Lorem <sup>sup</sup> dolor <sub>sub</sub> amet.
			</p>
			<p>
				<b>b tag</b>|<strong>strong tag</strong>|<em>em tag</em>|<i>i tag</i>|
				<small>small tag</small>|<abbr title='Avenue'>AVE</abbr>|
				<q cite='...'>q tag text</q>|<code>code tag</code>|<kbd>kbd tag</kbd>|
				<mark>mark tag</mark>|<dfn>dfn tag</dfn>|<samp>samp tag</samp>|
			</p>

			<h4 id='ruby'>Ruby</h4>
			<p>
				<ruby>
					紫陽花<rt>あじさい</rt>
				</ruby>{' '}
				/
				<ruby>
					踝<rt>くるぶし</rt>
				</ruby>{' '}
				/
				<ruby>
					聖剣
					<rp>(</rp>
					<rt>エクスカリバー</rt>
					<rp>)</rp>
				</ruby>
			</p>

			<h3>Pre</h3>
			<pre>
				Lorem ipsum dolor sit amet, Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam
				libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis,
				massa quis luctus fermentum.
			</pre>

			<hr />
			<h2>Blockquote</h2>

			<blockquote>
				<p>Lorem ipsum dolor sit amet, Nunc iaculis suscipit dui.</p>
				<cite>- cite...</cite>
			</blockquote>

			<p>↓with figure</p>
			<figure>
				<blockquote>
					<p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
				</blockquote>
				<figcaption>
					First sentence in
					<cite>
						<a href='http://www.george-orwell.org/1984/0.html'> Nineteen Eighty-Four</a>
					</cite>
					by George Orwell (Part 1, Chapter 1).
				</figcaption>
			</figure>

			<p>
				<small>
					<a href='#wrapper'>[top]</a>
				</small>
			</p>
			<hr />

			<h2 id='list_types'>List</h2>
			{/* <!-- <h3>Description List</h3> --> */}
			<dl>
				<dt>Description List</dt>
				<dd>This is a Description list division.</dd>
				<dt>Description List Title</dt>
				<dd>This is a Description list division.</dd>
			</dl>
			<dl>
				<div>
					<dt>Description List with div</dt>
					<dd>This is a Description list division.</dd>
				</div>
				<div>
					<dt>Description List Title</dt>
					<dd>This is a Description list division.</dd>
				</div>
			</dl>
			{/* <!-- <h3>Ordered List</h3> --> */}
			<ol>
				<li>Ordered List</li>
				<li>List Item 2</li>
				<li>
					List Item 3
					<ol>
						<li>Ordered List</li>
						<li>List Item 2</li>
						<li>List Item 3</li>
					</ol>
				</li>
			</ol>
			{/* <!-- <h3>Unordered List</h3> --> */}
			<ul>
				<li>Unordered List</li>
				<li>List Item 2</li>
				<li>
					List Item 3
					<ul>
						<li>Unordered List</li>
						<li>List Item 2</li>
						<li>List Item 3</li>
					</ul>
				</li>
			</ul>
			<p>
				<small>
					<a href='#wrapper'>[top]</a>
				</small>
			</p>

			<hr />
			<h2 id='tables'>Tables</h2>
			<table>
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
						<td>
							Division 3<br />
							text
						</td>
					</tr>
					<tr>
						<th>Division 1</th>
						<td>Division 2</td>
						<td>
							<img
								src='http://via.placeholder.com/40x40'
								alt=''
								width='40'
								height='40'
							/>
						</td>
					</tr>
				</tbody>
			</table>

			<h2 id='media'>Media</h2>
			<figure>
				<img src='https://via.placeholder.com/800x400' alt='' width='800' height='400' />
				<figcaption>figcaption...</figcaption>
			</figure>

			<picture>
				<source
					srcSet='https://via.placeholder.com/240x240?text=240x240'
					media='(max-width: 600px)'
				/>

				<img src='https://via.placeholder.com/800x400?text=<picture>' alt='' />
			</picture>

			<video controls width='800'>
				<source
					src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
					type='video/mp4'
				/>
				Placeholder text...
			</video>

			{/* <!-- frameborder='0' は非推奨？ --> */}
			<iframe
				width='960'
				height='540'
				src='https://www.youtube.com/embed/ZRtdQ81jPUQ?si=YoJuIkcOW1f2VuD0'
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
			></iframe>
			<iframe
				id='inlineFrameExample'
				title='Inline Frame Example'
				width='600'
				height='200'
				src='https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik'
			></iframe>

			<figure>
				<audio
					controls
					src='https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
				>
					<a href='https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'>
						Download audio
					</a>
				</audio>
				<figcaption>Listen to the T-Rex:</figcaption>
			</figure>

			<p>
				inline image:
				<img src='http://via.placeholder.com/40x40' alt='' width='40' height='40' />
			</p>

			<h3>SVG</h3>
			<Box c='green'>
				<svg
					viewBox='0 0 100 50'
					width='400px'
					height='200px'
					xmlns='http://www.w3.org/2000/svg'
					stroke='red'
					fill='blue'
				>
					<rect width='100' height='50' strokeWidth='2'></rect>
				</svg>
				<p>fill:blue</p>
			</Box>
			<Box c='green'>
				<svg
					viewBox='0 0 100 50'
					width='400px'
					height='200px'
					xmlns='http://www.w3.org/2000/svg'
					stroke='red'
				>
					<rect width='100' height='50' strokeWidth='2'></rect>
				</svg>
				<p>fill:なし</p>
			</Box>

			<Text c='green'>
				inline svg
				<svg viewBox='0 0 10 10' x='200' width='1em' height='1em'>
					<circle cx='5' cy='5' r='4'></circle>
				</svg>
			</Text>

			<p>
				<small>
					<a href='#wrapper'>[top]</a>
				</small>
			</p>

			<hr />

			<h2 id='misc'>misc</h2>

			<address>address tag</address>

			<div>
				<p>meter tag:</p>
				<meter min='0' max='100' low='33' high='66' optimum='80' value='30'>
					{' '}
					at 30/100
				</meter>
				<br />
				<meter min='0' max='100' low='33' high='66' optimum='80' value='50'>
					{' '}
					at 50/100
				</meter>
				<br />
				<meter min='0' max='100' low='33' high='66' optimum='80' value='80'>
					{' '}
					at 80/100
				</meter>
			</div>

			<p>
				<small>
					<a href='#wrapper'>[top]</a>
				</small>
				<br />
			</p>
		</Container>
	);
}
