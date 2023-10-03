import Link from "next/link";
import { Box, Flex, Text } from "@lism/core";

export default function Header() {
	return (
		<Box tag="header" className="a--header" isConstrained hasGutter p={{ Y: 40 }}>
			<Flex className="a--header__inner" jc="space-between">
				<div className="l--box">
					<h1 className="a--header__logo -c:main" style={{ lineHeight: "1.2" }}>
						Lism
					</h1>
					<Text className="-fz:xs -bgc:sub" ta="center" style={{ lineHeight: "1.2" }}>
						WordPressフレンドリーなWebフレームワーク
					</Text>
				</div>
				<Flex tag="nav" className="c--gNav" ai="center">
					<Flex tag="ul" className="c--gNav__list -lis:n" ai="center">
						<li className="c--gNav__item">
							<Link href="/">home</Link>
						</li>
						<li className="c--gNav__item">
							<Link href="/about">About Lism</Link>
						</li>
						<li className="c--gNav__item">
							<Link href="/page-1col">Page-1col</Link>
						</li>
						<li className="c--gNav__item">
							<Link href="/page-2col">Page-2col</Link>
						</li>
						<li className="c--gNav__item">
							<Link href="/page-c">Page-C</Link>
						</li>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}