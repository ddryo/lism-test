'use client';
import {
	Box,
	Container,
	Layer,
	Frame,
	Layouter,
	Text,
	Badge,
	Note,
	Stack,
	Flow,
	Spacer,
	AccordionGroup,
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionLabel,
	AccordionIcon,
	Cluster,
	Delimiter,
	Divider,
	Decorator,
	Grid,
	Core,
	Icon,
	Center,
	Reel,
	Flex,
} from '@loos/lism-core';
// import { FolderSimple } from '@phosphor-icons/react';
// import { ThumbsUp, SmileyXEyes } from '@phosphor-icons/react';

import './style.scss';
import './step.scss';

const FolderIcon = (props) => (
	<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' fill='currentColor' viewBox='0 0 256 256' {...props}>
		<path d='M248,216a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16H240A8,8,0,0,1,248,216Zm-24-24a8,8,0,0,0,8-8V148.32a40.13,40.13,0,0,0-29.28-38.54l-60.84-17-22.5-53.63a8,8,0,0,0-4.85-4.5l-5.47-1.82A16,16,0,0,0,88,48V77.39L58.13,68.88,47.52,39.51a8,8,0,0,0-5-4.87l-5.47-1.82A16,16,0,0,0,16,48v55.72a40.12,40.12,0,0,0,29.21,38.52L221.84,191.7A8,8,0,0,0,224,192Z'></path>
	</svg>
);

export default function ContainerTest() {
	return (
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper'>
			<p>test...</p>
			<h2>Timeline</h2>
			<Stack className='c--timeline'>
				<Grid className='c--timeline__item'>
					<Decorator className='c--timeline__line' />
					<Decorator className='c--timeline__line' />
					<Decorator
						className='c--timeline__shape -empasis'
						aspect='1/1'
						radius='99'
						c='opposite'
						bgc='opposite'
					></Decorator>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリース</Text>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
						</p>
					</Core>
				</Grid>
				<Grid className='c--timeline__item'>
					<Decorator className='c--timeline__line' />
					<Decorator className='c--timeline__line' />
					<Center className='c--timeline__shape' aspect='1/1' radius='99' c='opposite' bgc='opposite'>
						<Icon icon={FolderIcon}></Icon>
					</Center>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリース</Text>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
						</p>
					</Core>
				</Grid>
				<Grid className='c--timeline__item'>
					<Decorator className='c--timeline__line' />
					<Decorator className='c--timeline__line' />
					<Center className='c--timeline__shape' aspect='1/1' radius='99' c='opposite' bgc='opposite'>
						{/* <Icon icon={FolderIcon}></Icon> */}
					</Center>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリース</Text>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
						</p>
					</Core>
				</Grid>
			</Stack>

			<p>最初と最後のラインを消す</p>
			<Stack className='c--timeline'>
				<Grid className='c--timeline__item' style={{ '--start--space': 0 }}>
					<Decorator className='c--timeline__line -as:e' h='50%' />
					<Decorator className='c--timeline__line' />
					<Decorator
						className='c--timeline__shape -empasis'
						aspect='1/1'
						radius='99'
						c='opposite'
						bgc='opposite'
					></Decorator>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリース</Text>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
						</p>
					</Core>
				</Grid>
				<Grid className='c--timeline__item'>
					<Decorator className='c--timeline__line' />
					<Decorator className='c--timeline__line' />
					<Center className='c--timeline__shape' aspect='1/1' radius='99' c='opposite' bgc='opposite'>
						<Icon icon={FolderIcon}></Icon>
					</Center>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリース</Text>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
						</p>
					</Core>
				</Grid>
				<Grid className='c--timeline__item'>
					<Decorator className='c--timeline__line' h='50%' />
					{/* <Decorator className='c--timeline__line' /> */}
					<Center
						className='c--timeline__shape'
						aspect='1/1'
						radius='99'
						c='opposite'
						bgc='opposite'
					></Center>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリース</Text>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
						</p>
					</Core>
				</Grid>
			</Stack>
			<h2>Timeline - reel</h2>
			{/* <Reel> */}
			<Reel className='c--timeline'>
				<Grid className='c--timeline__item'>
					<Decorator className='c--timeline__line' />
					<Decorator className='c--timeline__line' />
					<Decorator
						className='c--timeline__shape -empasis'
						aspect='1/1'
						radius='99'
						c='opposite'
						bgc='opposite'
					></Decorator>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリースした日。</Text>
					</Core>
				</Grid>
				<Grid className='c--timeline__item'>
					<Decorator className='c--timeline__line' />
					<Decorator className='c--timeline__line' />
					<Center className='c--timeline__shape' aspect='1/1' radius='99' c='opposite' bgc='opposite'>
						<Icon icon={FolderIcon}></Icon>
					</Center>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリースした日。</Text>
					</Core>
				</Grid>
				<Grid className='c--timeline__item'>
					<Decorator className='c--timeline__line' />
					<Decorator className='c--timeline__line' />
					<Center className='c--timeline__shape' aspect='1/1' radius='99' c='opposite' bgc='opposite'>
						{/* <Icon icon={FolderIcon}></Icon> */}
					</Center>
					<Core className='c--timeline__head' my='5' fz='s' lh='xs'>
						<span className='c--timeline__label'>2022年5月24日</span>
					</Core>
					<Core className='c--timeline__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリースした日。</Text>
					</Core>
				</Grid>
			</Reel>

			<h2>Step</h2>
			<Reel className='c--step'>
				<Grid className='c--step__item'>
					{/* <Decorator className='c--step__line' /> */}
					<Decorator
						className='c--step__ct -empasis'
						aspect='1/1'
						radius='99'
						c='opposite'
						bgc='opposite'
					></Decorator>
					<Core className='c--step__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリースした日。</Text>
					</Core>
					<Decorator className='c--step__line' />
				</Grid>
				<Grid className='c--step__item'>
					<Decorator className='c--step__line' />
					<Center className='c--step__ct' aspect='1/1' radius='99' c='opposite' bgc='opposite'>
						<Icon icon={FolderIcon}></Icon>
					</Center>
					<Core className='c--step__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリースした日。</Text>
					</Core>
					<Decorator className='c--step__line' />
				</Grid>
				<Grid className='c--step__item'>
					<Decorator className='c--step__line' />
					<Center className='c--step__ct' aspect='1/1' radius='99' c='opposite' bgc='opposite'>
						{/* <Icon icon={FolderIcon}></Icon> */}
					</Center>
					<Core className='c--step__body ark-keep-mt--s'>
						<Text>WordPress 6.0 がリリースした日。</Text>
					</Core>
					<Decorator className='c--step__line' />
				</Grid>
			</Reel>
			{/* </Reel> */}
			<Text
				bg={{ clip: 'text' }}
				gradient='linear-gradient(to top, #78d4d0 0%, #b9a6da 50%, #ff8cb2 100%)'
				className='test'
				ta='c'
				fz='3xl'
				fw='bold'
			>
				Lorem Ipsum
			</Text>
			<Accordion>
				<AccordionHeader>
					<AccordionLabel>Accordionヘッダー1</AccordionLabel>
					<AccordionIcon />
				</AccordionHeader>
				<AccordionBody isFlow='s'>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
					<p>
						先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
					</p>
				</AccordionBody>
			</Accordion>
			<Accordion>
				<AccordionHeader>
					<AccordionLabel>Accordionヘッダー1</AccordionLabel>
					<AccordionIcon icon='svg-caret-down' />
				</AccordionHeader>
				<AccordionBody isFlow='s'>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
					<p>
						先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
					</p>
				</AccordionBody>
			</Accordion>
			<hr />
			<Cluster gap='10' rowg={20}>
				<Delimiter>|</Delimiter>
				<Box>ロレム・イプサムの座り雨</Box>
				<Delimiter>|</Delimiter>
				<Box>Tomato</Box>
				<Delimiter>|</Delimiter>
				<Box>しかし時と活力</Box>
				<Delimiter>|</Delimiter>
				<Box>そのような躍動と楽しみ</Box>
				<Delimiter>|</Delimiter>
				<Box>ブラインド行うには</Box>
				<Delimiter>|</Delimiter>
				<Box>いくつかの重要な事柄に座ります</Box>
				<Delimiter>|</Delimiter>
			</Cluster>
			<Box bd='block-start'>aaa</Box>
			<Accordion>
				<AccordionHeader>
					<AccordionLabel>
						<a href='#acc'>アコーディオンのタイトル</a>
					</AccordionLabel>
					<AccordionIcon isTrigger />
				</AccordionHeader>
				<AccordionBody>
					<p>........</p>
				</AccordionBody>
			</Accordion>

			<Flow gap='s'>
				<p>
					ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
				</p>
				<ul>
					<li>list</li>
					<li>list</li>
					<li>list</li>
				</ul>
				<Accordion bgc='pale' shadow='2' radius='2'>
					<AccordionHeader>
						<AccordionLabel>Accordionヘッダー1</AccordionLabel>
						<AccordionIcon />
					</AccordionHeader>
					<AccordionBody isFlow='s'>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
						</p>
						<p>
							先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
						</p>
					</AccordionBody>
				</Accordion>
				<Accordion bgc='pale' duration='.5s'>
					<AccordionHeader>
						<AccordionIcon icon='Q' />
						<AccordionLabel>Accordionヘッダー1</AccordionLabel>
					</AccordionHeader>
					<AccordionBody>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
						</p>
					</AccordionBody>
				</Accordion>
				<hr />
				<AccordionGroup hasDivider>
					<Accordion>
						<AccordionHeader>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
					<Accordion>
						<AccordionHeader>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
					<Accordion>
						<AccordionHeader>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
				</AccordionGroup>
				<AccordionGroup hasDivider bd radius='3' duration='.4s' allowMultiple={0}>
					<Accordion>
						<AccordionHeader>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
					<Accordion>
						<AccordionHeader>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
					<Accordion>
						<AccordionHeader>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
				</AccordionGroup>
				<hr />
				<AccordionGroup gap={20} provide={{ p: 'box', bdc: 'b200', shadow: '1', radius: '3' }}>
					<Accordion
						bgc='pale'
						//shadow='1' radius='3'
						consume='shadow radius'
					>
						<AccordionHeader consume='p'>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody bd='t' consume='p bdc'>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
					<Accordion
						bgc='pale'
						//shadow='1' radius='3'
						consume='shadow radius'
					>
						<AccordionHeader consume='p'>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody bd='t' consume='p bdc'>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
					<Accordion
						bgc='pale'
						//shadow='1' radius='3'
						consume='shadow radius'
					>
						<AccordionHeader consume='p'>
							<AccordionLabel>Accordionヘッダー1</AccordionLabel>
							<AccordionIcon />
						</AccordionHeader>
						<AccordionBody bd='t' consume='p bdc'>
							<p>
								ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
							</p>
						</AccordionBody>
					</Accordion>
				</AccordionGroup>
				<p>
					ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
				</p>
			</Flow>
			<Spacer h={40} />
		</Layouter>
	);
}
