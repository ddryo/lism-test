/**
 * @External dependencies
 */
import {
	Infinity,
	Activity,
	AddressBook,
	AirTrafficControl,
	Airplane,
	AirplaneInFlight,
	AirplaneLanding,
	AirplaneTakeoff,
	AirplaneTilt,
	Airplay,
	Alarm,
	Alien,
	AlignBottom,
	AlignBottomSimple,
	AlignCenterHorizontal,
	AlignCenterHorizontalSimple,
	AlignCenterVertical,
	AlignCenterVerticalSimple,
	AlignLeft,
	AlignLeftSimple,
	AlignRight,
	AlignRightSimple,
	AlignTop,
	AlignTopSimple,
	AmazonLogo,
	Anchor,
	AnchorSimple,
	AndroidLogo,
	AngularLogo,
	Aperture,
	AppStoreLogo,
	AppWindow,
	AppleLogo,
	ApplePodcastsLogo,
	Archive,
	ArchiveBox,
	ArchiveTray,
	Armchair,
	ArrowArcLeft,
	ArrowArcRight,
	ArrowBendDoubleUpLeft,
	ArrowBendDoubleUpRight,
	ArrowBendDownLeft,
	ArrowBendDownRight,
	ArrowBendLeftDown,
	ArrowBendLeftUp,
	ArrowBendRightDown,
	ArrowBendRightUp,
	ArrowBendUpLeft,
	ArrowBendUpRight,
	ArrowCircleDown,
	ArrowCircleDownLeft,
	ArrowCircleDownRight,
	ArrowCircleLeft,
	ArrowCircleRight,
	ArrowCircleUp,
	ArrowCircleUpLeft,
	ArrowCircleUpRight,
	ArrowClockwise,
	ArrowCounterClockwise,
	ArrowDown,
	ArrowDownLeft,
	ArrowDownRight,
	ArrowElbowDownLeft,
	ArrowElbowDownRight,
	ArrowElbowLeft,
	ArrowElbowLeftDown,
	ArrowElbowLeftUp,
	ArrowElbowRight,
	ArrowElbowRightDown,
	ArrowElbowRightUp,
	ArrowElbowUpLeft,
	ArrowElbowUpRight,
	ArrowFatDown,
	ArrowFatLeft,
	ArrowFatLineDown,
	ArrowFatLineLeft,
	ArrowFatLineRight,
	ArrowFatLineUp,
	ArrowFatLinesDown,
	ArrowFatLinesLeft,
	ArrowFatLinesRight,
	ArrowFatLinesUp,
	ArrowFatRight,
	ArrowFatUp,
	ArrowLeft,
	ArrowLineDown,
	ArrowLineDownLeft,
	ArrowLineDownRight,
	ArrowLineLeft,
	ArrowLineRight,
	ArrowLineUp,
	ArrowLineUpLeft,
	ArrowLineUpRight,
	ArrowRight,
	ArrowSquareDown,
	ArrowSquareDownLeft,
	ArrowSquareDownRight,
	ArrowSquareIn,
	ArrowSquareLeft,
	ArrowSquareOut,
	ArrowSquareRight,
	ArrowSquareUp,
	ArrowSquareUpLeft,
	ArrowSquareUpRight,
	ArrowUDownLeft,
	ArrowUDownRight,
	ArrowULeftDown,
	ArrowULeftUp,
	ArrowURightDown,
	ArrowURightUp,
	ArrowUUpLeft,
	ArrowUUpRight,
	ArrowUp,
	ArrowUpLeft,
	ArrowUpRight,
	ArrowsClockwise,
	ArrowsCounterClockwise,
	ArrowsDownUp,
	ArrowsHorizontal,
	ArrowsIn,
	ArrowsInCardinal,
	ArrowsInLineHorizontal,
	ArrowsInLineVertical,
	ArrowsInSimple,
	ArrowsLeftRight,
	ArrowsMerge,
	ArrowsOut,
	ArrowsOutCardinal,
	ArrowsOutLineHorizontal,
	ArrowsOutLineVertical,
	ArrowsOutSimple,
	ArrowsSplit,
	ArrowsVertical,
	Article,
	ArticleMedium,
	ArticleNyTimes,
	Asterisk,
	AsteriskSimple,
	At,
	Atom,
	Baby,
	Backpack,
	Backspace,
	Bag,
	BagSimple,
	Balloon,
	Bandaids,
	Bank,
	Barbell,
	Barcode,
	Barricade,
	Baseball,
	BaseballCap,
	Basket,
	Basketball,
	Bathtub,
	BatteryCharging,
	BatteryChargingVertical,
	BatteryEmpty,
	BatteryFull,
	BatteryHigh,
	BatteryLow,
	BatteryMedium,
	BatteryPlus,
	BatteryPlusVertical,
	BatteryVerticalEmpty,
	BatteryVerticalFull,
	BatteryVerticalHigh,
	BatteryVerticalLow,
	BatteryVerticalMedium,
	BatteryWarning,
	BatteryWarningVertical,
	Bed,
	BeerBottle,
	BeerStein,
	BehanceLogo,
	Bell,
	BellRinging,
	BellSimple,
	BellSimpleRinging,
	BellSimpleSlash,
	BellSimpleZ,
	BellSlash,
	BellZ,
	BezierCurve,
	Bicycle,
	Binoculars,
	Bird,
	Bluetooth,
	BluetoothConnected,
	BluetoothSlash,
	BluetoothX,
	Boat,
	Bone,
	Book,
	BookBookmark,
	BookOpen,
	BookOpenText,
	Bookmark,
} from '@phosphor-icons/react';

const ICONS = {
	Infinity,
	Activity,
	AddressBook,
	AirTrafficControl,
	Airplane,
	AirplaneInFlight,
	AirplaneLanding,
	AirplaneTakeoff,
	AirplaneTilt,
	Airplay,
	Alarm,
	Alien,
	AlignBottom,
	AlignBottomSimple,
	AlignCenterHorizontal,
	AlignCenterHorizontalSimple,
	AlignCenterVertical,
	AlignCenterVerticalSimple,
	AlignLeft,
	AlignLeftSimple,
	AlignRight,
	AlignRightSimple,
	AlignTop,
	AlignTopSimple,
	AmazonLogo,
	Anchor,
	AnchorSimple,
	AndroidLogo,
	AngularLogo,
	Aperture,
	AppStoreLogo,
	AppWindow,
	AppleLogo,
	ApplePodcastsLogo,
	Archive,
	ArchiveBox,
	ArchiveTray,
	Armchair,
	ArrowArcLeft,
	ArrowArcRight,
	ArrowBendDoubleUpLeft,
	ArrowBendDoubleUpRight,
	ArrowBendDownLeft,
	ArrowBendDownRight,
	ArrowBendLeftDown,
	ArrowBendLeftUp,
	ArrowBendRightDown,
	ArrowBendRightUp,
	ArrowBendUpLeft,
	ArrowBendUpRight,
	ArrowCircleDown,
	ArrowCircleDownLeft,
	ArrowCircleDownRight,
	ArrowCircleLeft,
	ArrowCircleRight,
	ArrowCircleUp,
	ArrowCircleUpLeft,
	ArrowCircleUpRight,
	ArrowClockwise,
	ArrowCounterClockwise,
	ArrowDown,
	ArrowDownLeft,
	ArrowDownRight,
	ArrowElbowDownLeft,
	ArrowElbowDownRight,
	ArrowElbowLeft,
	ArrowElbowLeftDown,
	ArrowElbowLeftUp,
	ArrowElbowRight,
	ArrowElbowRightDown,
	ArrowElbowRightUp,
	ArrowElbowUpLeft,
	ArrowElbowUpRight,
	ArrowFatDown,
	ArrowFatLeft,
	ArrowFatLineDown,
	ArrowFatLineLeft,
	ArrowFatLineRight,
	ArrowFatLineUp,
	ArrowFatLinesDown,
	ArrowFatLinesLeft,
	ArrowFatLinesRight,
	ArrowFatLinesUp,
	ArrowFatRight,
	ArrowFatUp,
	ArrowLeft,
	ArrowLineDown,
	ArrowLineDownLeft,
	ArrowLineDownRight,
	ArrowLineLeft,
	ArrowLineRight,
	ArrowLineUp,
	ArrowLineUpLeft,
	ArrowLineUpRight,
	ArrowRight,
	ArrowSquareDown,
	ArrowSquareDownLeft,
	ArrowSquareDownRight,
	ArrowSquareIn,
	ArrowSquareLeft,
	ArrowSquareOut,
	ArrowSquareRight,
	ArrowSquareUp,
	ArrowSquareUpLeft,
	ArrowSquareUpRight,
	ArrowUDownLeft,
	ArrowUDownRight,
	ArrowULeftDown,
	ArrowULeftUp,
	ArrowURightDown,
	ArrowURightUp,
	ArrowUUpLeft,
	ArrowUUpRight,
	ArrowUp,
	ArrowUpLeft,
	ArrowUpRight,
	ArrowsClockwise,
	ArrowsCounterClockwise,
	ArrowsDownUp,
	ArrowsHorizontal,
	ArrowsIn,
	ArrowsInCardinal,
	ArrowsInLineHorizontal,
	ArrowsInLineVertical,
	ArrowsInSimple,
	ArrowsLeftRight,
	ArrowsMerge,
	ArrowsOut,
	ArrowsOutCardinal,
	ArrowsOutLineHorizontal,
	ArrowsOutLineVertical,
	ArrowsOutSimple,
	ArrowsSplit,
	ArrowsVertical,
	Article,
	ArticleMedium,
	ArticleNyTimes,
	Asterisk,
	AsteriskSimple,
	At,
	Atom,
	Baby,
	Backpack,
	Backspace,
	Bag,
	BagSimple,
	Balloon,
	Bandaids,
	Bank,
	Barbell,
	Barcode,
	Barricade,
	Baseball,
	BaseballCap,
	Basket,
	Basketball,
	Bathtub,
	BatteryCharging,
	BatteryChargingVertical,
	BatteryEmpty,
	BatteryFull,
	BatteryHigh,
	BatteryLow,
	BatteryMedium,
	BatteryPlus,
	BatteryPlusVertical,
	BatteryVerticalEmpty,
	BatteryVerticalFull,
	BatteryVerticalHigh,
	BatteryVerticalLow,
	BatteryVerticalMedium,
	BatteryWarning,
	BatteryWarningVertical,
	Bed,
	BeerBottle,
	BeerStein,
	BehanceLogo,
	Bell,
	BellRinging,
	BellSimple,
	BellSimpleRinging,
	BellSimpleSlash,
	BellSimpleZ,
	BellSlash,
	BellZ,
	BezierCurve,
	Bicycle,
	Binoculars,
	Bird,
	Bluetooth,
	BluetoothConnected,
	BluetoothSlash,
	BluetoothX,
	Boat,
	Bone,
	Book,
	BookBookmark,
	BookOpen,
	BookOpenText,
	Bookmark,
};

export default ICONS;