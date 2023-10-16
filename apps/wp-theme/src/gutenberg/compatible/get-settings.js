import { getSettings, __experimentalGetSettings } from '@wordpress/date';

/**
 * export getSettings
 */
const getSettingsCompatible =
	typeof GetSettings !== 'undefined' ? getSettings : __experimentalGetSettings;

export default getSettingsCompatible;
