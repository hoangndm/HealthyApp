import React from 'react';
import {getBodyPaddingHorizontal, ScrollMode} from '@src/core/utils/viewUntils';
import SafeAreaView from 'react-native-safe-area-view';
import QuickView, {QuickViewProps} from './QuickView';
import ScrollView, {ScrollViewProps} from '../ScrollView';

export interface BodyProps
  extends Pick<ScrollViewProps, 'scrollMode' | 'scrollBottomOffset'>,
    QuickViewProps {
  type?:
    | 'full-view'
    | 'full-width'
    | 'full-height'
    | 'with-bottom-navigation'
    | 'with-header'
    | 'with-header-safe-area'
    | 'with-header-bottom-navigation';
  scroll?: boolean;
}

const Body = (props: BodyProps) => {
  const {
    scroll,
    scrollMode,
    paddingHorizontal,
    type,
    backgroundColor,
    style,
  } = props;

  const quickViewStyle = [
    // marginBottom || {
    //   marginBottom:
    //     type === 'with-bottom-navigation'
    //       ? getBottomNavigationBarHeight() - (DeviceInfo.hasNotch() ? 25 : -10)
    //       : 0,
    // },
    paddingHorizontal && {
      paddingHorizontal:
        type === 'full-width' || type === 'full-view' ? 0 : paddingHorizontal,
    },
    style,
  ];
  const safeAreaViewStyle = {
    backgroundColor: backgroundColor || '#FFFFFF',
    flex: 1,
  };
  const customScrollMode: ScrollMode = [];
  switch (props.type) {
    case 'full-width':
      customScrollMode.push('safe-area-view');
      break;
    case 'with-bottom-navigation':
      customScrollMode.push('bottom-navigation-bar');
      break;
    case 'with-header':
      customScrollMode.push('header');
      break;
    case 'with-header-safe-area':
      customScrollMode.push('header', 'safe-area-view');
      break;
    case 'with-header-bottom-navigation':
      customScrollMode.push('header', 'bottom-navigation-bar');
      break;
  }

  if (props.type === 'full-height' || props.type === 'full-view') {
    return scroll ? (
      <ScrollView
        {...props}
        style={quickViewStyle}
        scrollMode={scrollMode || customScrollMode}>
        {props?.children}
      </ScrollView>
    ) : (
      <QuickView {...props} flex={1} style={quickViewStyle}>
        {props?.children}
      </QuickView>
    );
  }
  return scroll ? (
    <SafeAreaView style={safeAreaViewStyle}>
      <ScrollView
        {...props}
        style={quickViewStyle}
        scrollMode={scrollMode || customScrollMode}>
        {props?.children}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={safeAreaViewStyle}>
      <QuickView {...props} style={quickViewStyle}>
        {props?.children}
      </QuickView>
    </SafeAreaView>
  );
};
Body.defaultProps = {
  paddingHorizontal: getBodyPaddingHorizontal(),
  backgroundColor: '#FFFFFF',
  type: 'with-header-safe-area',
};

export default Body;
