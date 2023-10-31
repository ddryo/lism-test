import OneColumn from '@/layouts/one-column';
import {
	Container,
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
	Text,
	Flex,
	Lism,
	FAQ,
	Icon,
	LinkBox,
	NavMenuItem,
	NavMenuText,
	NavMenu,
	Badge,
	Box,
	Delimiter,
	Item,
	Button,
} from '@loos/lism-core';

const FolderIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='currentColor'
		viewBox='0 0 256 256'
	>
		<path d='M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33l27.74,20.8a16.12,16.12,0,0,0,9.6,3.2H216Z'></path>
	</svg>
);

export default function Index() {
	return (
		<OneColumn>
			<h1>Playground</h1>
			<a href='#reset' aria-label='aaa'>
				++++++++++++++
			</a>
			<LinkBox href='#boxlink01' isFlow='s' p='box' bgc='pale'>
				<Text fz='l'>このBox全体がリンクです。</Text>
				<p>...</p>
				<Text fz='s' ta='right' mbs={10}>
					More→
				</Text>
			</LinkBox>
			<LinkBox tag='div' href='#boxlink02' isFlow='s' p='box' bgc='pale'>
				<Text fz='l'>このBox全体がリンクです。</Text>
				<p>...</p>
				<p>
					<a href='#inner-link'>linkBox内にさらにリンク</a>を配置できる。
				</p>
				<Text fz='s' ta='right' mbs={10}>
					More→
				</Text>
			</LinkBox>
			<LinkBox tag='div' href='#boxlink02' isFlow='s' p='box' bgc='pale'>
				<Text fz='l'>このBox全体がリンクです。</Text>
				<p>...</p>
				<Button variant='outline' href='#inbtn'>
					Button
				</Button>
				<Flex>
					<Box>aaa</Box>
					<Button variant='outline' href='#inbtn'>
						Button
					</Button>
				</Flex>
			</LinkBox>
			<Box isFlow pos='r'>
				<div>aaa</div>
				<div className='is--skipFlow'>aaa</div>
				<div>aaa</div>
				<div>aaa</div>
			</Box>
			<Stack hasDivider provide={{ p: 'box', bgc: 'pale', c: 'blue' }}>
				<Lism consume={['p', 'bgc']}>aaa</Lism>
				<Lism consume={['p', 'bgc']}>bbb</Lism>
				<Lism consume={['p', 'bgc']}>ccc</Lism>
			</Stack>
			<Cluster hasDivider bd bdc='base' p='20'>
				<Box px={20}>ロレム・イプサムの座り雨</Box>
				<Box px={20}>トマ好き学習エリット</Box>
				<Box px={20}>しかし時と活力</Box>
				<Box px={20}>そのような躍動と楽しみ</Box>
				<Box px={20}>ブラインド行うには</Box>
				<Box px={20}>いくつかの重要な事柄に座ります</Box>
			</Cluster>
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
			<NavMenu>
				<NavMenuItem>
					<NavMenuText href='#menu1'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu2'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu2'>Lorem item</NavMenuText>
				</NavMenuItem>
			</NavMenu>
			<NavMenu hasDivider bd='block'>
				<NavMenuItem>
					<NavMenuText href='#menu1'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu2'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu2'>Lorem item</NavMenuText>
				</NavMenuItem>
			</NavMenu>
			<NavMenu hasDivider bd>
				<NavMenuItem>
					<NavMenuText href='#menu1' gap={20}>
						<Icon icon={FolderIcon} />
						Lorem item
						<Badge fz='12px' fw='700' color='dimgray' variant='outline' ms='auto'>
							New
						</Badge>
					</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu2' gap={20}>
						<Icon icon={FolderIcon} />
						Lorem item
					</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu3' gap={20}>
						<Icon icon={FolderIcon} />
						Lorem item
					</NavMenuText>
				</NavMenuItem>
			</NavMenu>
			{/* <NavMenu variant='outline'>
				<NavMenuItem href='#menu1' text='Lorem item' />
				<NavMenuItem href='#menu2' text='Lorem item' />
				<NavMenuItem href='#menu2' text='Lorem item' />
			</NavMenu> */}
			<NavMenu>
				<NavMenuItem>
					<NavMenuText href='#menu1'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu2'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu1'>Has Child</NavMenuText>
					<NavMenu nestLevel={1}>
						<NavMenuItem>
							<NavMenuText href='#menu1'>Lorem item</NavMenuText>
						</NavMenuItem>
						<NavMenuItem>
							<NavMenuText href='#menu2'>Lorem item</NavMenuText>
						</NavMenuItem>
						<NavMenuItem>
							<NavMenuText href='#has-child'>Has Child</NavMenuText>
							<NavMenu nestLevel={2}>
								<NavMenuItem>
									<NavMenuText href='#menu1'>Lorem item</NavMenuText>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuText href='#menu2'>Lorem item</NavMenuText>
								</NavMenuItem>
							</NavMenu>
						</NavMenuItem>
					</NavMenu>
				</NavMenuItem>
			</NavMenu>
			<NavMenu hasDivider bd='block'>
				<NavMenuItem>
					<NavMenuText href='#menu1'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu2'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<Accordion>
						<AccordionHeader py={0} pl={0} minH='unset'>
							<AccordionLabel>
								<NavMenuText href='#menu1'>Lorem item</NavMenuText>
							</AccordionLabel>
							<AccordionIcon isTrigger />
						</AccordionHeader>
						<AccordionBody p={0}>
							<NavMenu nestLevel={1} hasDivider bd='block-start'>
								<NavMenuItem>
									<NavMenuText href='#menu1'>Lorem item</NavMenuText>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuText href='#menu2'>Lorem item</NavMenuText>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuText href='#has-child'>Has Child</NavMenuText>
									<NavMenu nestLevel={2}>
										<NavMenuItem>
											<NavMenuText href='#menu1'>Lorem item</NavMenuText>
										</NavMenuItem>
										<NavMenuItem>
											<NavMenuText href='#menu2'>Lorem item</NavMenuText>
										</NavMenuItem>
									</NavMenu>
								</NavMenuItem>
							</NavMenu>
						</AccordionBody>
					</Accordion>
					{/* <NavMenuText href='#menu1'>Has Child</NavMenuText> */}
				</NavMenuItem>
			</NavMenu>
			<NavMenu isFlex hasDivider lh='xs' provide={{ p: '10 20' }}>
				<NavMenuItem>
					<NavMenuText href='#menu1'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuText href='#menu2'>Lorem item</NavMenuText>
				</NavMenuItem>
				<NavMenuItem>
					<Accordion>
						<AccordionHeader py={0} pl={0} gap={10} minH='unset'>
							<AccordionLabel>
								<NavMenuText href='#menu1'>Lorem item</NavMenuText>
							</AccordionLabel>
							<AccordionIcon isTrigger size='.75em' />
						</AccordionHeader>
						<AccordionBody p={0} shadow={3}>
							<NavMenu nestLevel={1} hasDivider>
								<NavMenuItem>
									<NavMenuText href='#menu1'>Lorem item</NavMenuText>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuText href='#menu2'>Lorem item</NavMenuText>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuText href='#has-child'>Has Child</NavMenuText>
									<NavMenu nestLevel={2} hasDivider bd='block-start'>
										<NavMenuItem>
											<NavMenuText href='#menu1'>Lorem item</NavMenuText>
										</NavMenuItem>
										<NavMenuItem>
											<NavMenuText href='#menu2'>Lorem item</NavMenuText>
										</NavMenuItem>
									</NavMenu>
								</NavMenuItem>
							</NavMenu>
						</AccordionBody>
					</Accordion>
					{/* <NavMenuText href='#menu1'>Has Child</NavMenuText> */}
				</NavMenuItem>
			</NavMenu>
			{/* 
			<Accordion blockClass='b--navMenu__accordion' {...accordionProps}>
				<AccordionHeader
					bgc='transparent'
					iconSize='1em'
					labelProps={{ p: 0 }}
					gap={10}
					{...accordionHeaderProps}
				>
					<Text {...linkProps}>{menuText}</Text>
				</AccordionHeader>
				<AccordionBody {...accordionBodyProps}>{children}</AccordionBody>
			</Accordion> */}
			<Spacer h={50} />
			<Spacer h={50} />
			<Spacer h={50} />
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
				<AccordionGroup
					gap={20}
					provide={{ p: 'box', bdc: 'b200', shadow: '1', radius: '3' }}
				>
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
		</OneColumn>
	);
}
