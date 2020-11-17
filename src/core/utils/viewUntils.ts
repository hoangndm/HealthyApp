import {Platform, PixelRatio} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import _ from 'lodash';
import DeviceInfo from 'react-native-device-info';
import {Metrics} from '../themes';

const scaleValue = PixelRatio.get() / 2;

export const getHeaderHeight = () =>
  Platform.select({
    android: 30,
    default: 44,
  }) + getStatusBarHeight();

export const getBottomNavigationBarHeight = (): number =>
  DeviceInfo.hasNotch() ? 75 : 60;
export const getBottomUnsafeAreaHeight = () => (DeviceInfo.hasNotch() ? 15 : 0); // 15 || 30

export const getBodyPaddingHorizontal = () => 18;

export type ScrollMode = Array<
  'header' | 'safe-area-view' | 'bottom-navigation-bar'
>;

export const scrollEnabled = (
  contentWidth: number,
  contentHeight: number,
  scrollMode?: ScrollMode,
) => {
  let height = Metrics.screenHeight;
  if (
    _.includes(scrollMode, 'header') &&
    _.includes(scrollMode, 'safe-area-view')
  ) {
    height = height - getHeaderHeight() - getBottomUnsafeAreaHeight();
  } else {
    if (_.includes(scrollMode, 'header')) {
      height -= getHeaderHeight();
    }
    if (_.includes(scrollMode, 'safe-area-view')) {
      height -= getBottomUnsafeAreaHeight() + getStatusBarHeight();
    }
    if (_.includes(scrollMode, 'bottom-navigation-bar')) {
      height -= getBottomNavigationBarHeight();
    }
  }
  return contentHeight > height;
};

export const scaleWithPixel = (size: number, limitScale = 1.2) => {
  /* setting default upto 20% when resolution device upto 20% with defalt iPhone 7 */
  const value = scaleValue > limitScale ? limitScale : scaleValue;
  return size * value;
};

export const shadowView = {
  shadowColor: '#00358E',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
};
