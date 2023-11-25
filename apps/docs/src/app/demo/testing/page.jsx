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
	Flow,
	Spacer,
	AccordionGroup,
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionLabel,
	AccordionIcon,
	Stack,
	Cluster,
	Flex,
	Lism,
	Icon,
	LinkBox,
	NavMenuItem,
	NavMenuLink,
	NavMenu,
	Delimiter,
} from '@loos/lism-core';
// import { FolderSimple } from '@phosphor-icons/react';
// import { ThumbsUp, SmileyXEyes } from '@phosphor-icons/react';

import './style.scss';

const FolderIcon = () => (
	<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 256 256'>
		<path d='M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33l27.74,20.8a16.12,16.12,0,0,0,9.6,3.2H216Z'></path>
	</svg>
);

export default function ContainerTest() {
	return (
		<Layouter isFlow hasGutter py={50} isConstrained='s' alignfull id='demo-wrapper'>
			<p>test...</p>
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
			<Cluster gap='10' rowGap={20}>
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
