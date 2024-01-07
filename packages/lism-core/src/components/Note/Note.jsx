import { Core } from '../Core';
import { Layouter } from '../Layouter';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

import getProps from './getProps';
// import NotePresets from './presets';

export default function Note({ isFlow, heading, children, ...props }) {
	props = getProps(props);

	const { icon, iconProps = {}, headProps = {}, bodyProps = {}, ...attrs } = props;

	if ('Flex' === headProps.as) {
		headProps.as = Flex;
	}

	return (
		<Layouter lismState={['is--colorbox']} radius='1' {...attrs}>
			{heading && (
				<Core lismClass={{ c: 'c--note__head' }} fw='bold' {...headProps}>
					{icon && <Icon lismClass={{ c: 'c--note__icon' }} icon={icon} {...iconProps} />}
					<span className='c--note__heading'>{heading}</span>
				</Core>
			)}
			<Layouter lismClass={{ c: 'c--note__body' }} isFlow={isFlow} {...bodyProps}>
				{children}
			</Layouter>
		</Layouter>
	);
}
