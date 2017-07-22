// @flow

import DeviceInfo from 'react-native-device-info';
import I18n from 'i18n-js';

import en from 'locales/en';
import ru from 'locales/ru';

I18n.fallbacks = true;
I18n.locale = DeviceInfo.getDeviceLocale().split('-')[0];
I18n.translations = {
    en,
    ru
};

export const __ = I18n.t.bind(I18n);

export default I18n;
