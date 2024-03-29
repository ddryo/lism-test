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
		<Layouter isFlow hasGutter py={50} isConstrained alignfull id='demo-wrapper'>
			<p>test...</p>
			<NavMenu>
				<NavMenuItem>
					<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
				</NavMenuItem>
			</NavMenu>
			<NavMenu hasDivider bd='block'>
				<NavMenuItem>
					<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
				</NavMenuItem>
			</NavMenu>
			<NavMenu hasDivider bd>
				<NavMenuItem>
					<NavMenuLink href='#menu1' gap={20}>
						<Icon icon={FolderIcon} />
						Lorem item
						<Badge fz='12px' fw='700' color='dimgray' variant='outline' ms='auto'>
							New
						</Badge>
					</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu2' gap={20}>
						<Icon icon={FolderIcon} />
						Lorem item
					</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu3' gap={20}>
						<Icon icon={FolderIcon} />
						Lorem item
					</NavMenuLink>
				</NavMenuItem>
			</NavMenu>
			{/* <NavMenu variant='outline'>
				<NavMenuItem href='#menu1' text='Lorem item' />
				<NavMenuItem href='#menu2' text='Lorem item' />
				<NavMenuItem href='#menu2' text='Lorem item' />
			</NavMenu> */}
			<NavMenu>
				<NavMenuItem>
					<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu1'>Has Child</NavMenuLink>
					<NavMenu nestLevel={1}>
						<NavMenuItem>
							<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavMenuLink href='#has-child'>Has Child</NavMenuLink>
							<NavMenu nestLevel={2}>
								<NavMenuItem>
									<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
								</NavMenuItem>
							</NavMenu>
						</NavMenuItem>
					</NavMenu>
				</NavMenuItem>
			</NavMenu>
			<NavMenu hasDivider bd='block'>
				<NavMenuItem>
					<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<Accordion>
						<AccordionHeader py={0} pl={0} minH='unset'>
							<AccordionLabel>
								<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
							</AccordionLabel>
							<AccordionIcon isTrigger />
						</AccordionHeader>
						<AccordionBody p={0}>
							<NavMenu nestLevel={1} hasDivider bd='block-start'>
								<NavMenuItem>
									<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuLink href='#has-child'>Has Child</NavMenuLink>
									<NavMenu nestLevel={2}>
										<NavMenuItem>
											<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
										</NavMenuItem>
										<NavMenuItem>
											<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
										</NavMenuItem>
									</NavMenu>
								</NavMenuItem>
							</NavMenu>
						</AccordionBody>
					</Accordion>
					{/* <NavMenuLink href='#menu1'>Has Child</NavMenuLink> */}
				</NavMenuItem>
			</NavMenu>
			<NavMenu isFlex hasDivider lh='xs' provide={{ p: '10 20' }}>
				<NavMenuItem>
					<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<Accordion>
						<AccordionHeader py={0} pl={0} gap={0} minH='unset'>
							<AccordionLabel>
								<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
							</AccordionLabel>
							<AccordionIcon isTrigger size='.875em' />
						</AccordionHeader>
						<AccordionBody p={0} shadow={3}>
							<NavMenu nestLevel={1} hasDivider>
								<NavMenuItem>
									<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
								</NavMenuItem>
								<NavMenuItem>
									<NavMenuLink href='#has-child'>Has Child</NavMenuLink>
									<NavMenu nestLevel={2} hasDivider bd='block-start'>
										<NavMenuItem>
											<NavMenuLink href='#menu1'>Lorem item</NavMenuLink>
										</NavMenuItem>
										<NavMenuItem>
											<NavMenuLink href='#menu2'>Lorem item</NavMenuLink>
										</NavMenuItem>
									</NavMenu>
								</NavMenuItem>
							</NavMenu>
						</AccordionBody>
					</Accordion>
					{/* <NavMenuLink href='#menu1'>Has Child</NavMenuLink> */}
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
			<Spacer h='20rem' />

			<Spacer h={40} />
		</Layouter>
	);
}
