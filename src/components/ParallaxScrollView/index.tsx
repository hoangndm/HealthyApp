import React, {PureComponent} from 'react';
import {Dimensions} from 'react-native';

import {withTheme, ThemeProps} from 'react-native-elements';
import {Source} from 'react-native-fast-image';
import NavigationService from '@utils/navigation';
import QuickView from '../View/QuickView';
import {Image} from 'react-native';

const BaseParallaxScrollView = require('react-native-parallax-scroll-view');

interface ParallaxScrollViewProps {
  headerBackgroundColor?: string;
  contentBackgroundColor?: string;
  imageBackgroundColor?: string;
  parallaxHeaderHeight?: number;
  stickyHeaderHeight?: number;
  backgroundScrollSpeed?: number;
  fadeOutForeground?: boolean;
  onChangeHeaderVisibility?: (...params: any) => any;
  renderBackground?: () => any;
  renderContentBackground?: (...params: any) => any;
  renderFixedHeader?: (...params: any) => any;
  renderForeground?: (...params: any) => any;
  renderScrollComponent?: (...params: any) => any;
  renderStickyHeader?: (...params: any) => any;
  contentContainerStyle?: any;
  outputScaleValue?: number;
  scrollEvent?: (...params: any) => any;
  backgroundImageSource?: Source;
  children?: any;
  theme?: any;
}
class ParallaxScrollView extends PureComponent<ParallaxScrollViewProps> {
  static defaultProps = {
    backgroundScrollSpeed: 5,
    fadeOutForeground: true,
    outputScaleValue: 5,
  };

  renderBackground = () => {
    const {
      imageBackgroundColor: imageBackgroundColorProp,
      contentBackgroundColor: contentBackgroundColorProp,
      parallaxHeaderHeight: parallaxHeaderHeightProp,
      backgroundImageSource,
      theme: {ParallaxScrollView: theme},
    } = this.props;

    const contentBackgroundColor =
      contentBackgroundColorProp || theme.contentBackgroundColor;
    const parallaxHeaderHeight =
      parallaxHeaderHeightProp || theme.parallaxHeaderHeight;
    const imageBackgroundColor =
      imageBackgroundColorProp || theme.imageBackgroundColor;
    const windowWidth = Dimensions.get('window').width;

    const imageSource = backgroundImageSource || {
      uri: 'https://picsum.photos/1500/1500',
      cache: 'web',
    };
    return (
      <QuickView backgroundColor={contentBackgroundColor}>
        <Image
          source={{uri: imageSource.uri}}
          style={{
            width: windowWidth,
            height: parallaxHeaderHeight,
          }}
        />
        <QuickView
          position="absolute"
          top={0}
          width={windowWidth}
          height={parallaxHeaderHeight}
          backgroundColor={imageBackgroundColor}
        />
      </QuickView>
    );
  };

  renderForeground = () => <QuickView />;

  renderStickyHeader = () => <QuickView />;

  // renderFixedHeader = () => {
  //   const leftComponent: any = {
  //     icon: 'arrowleft',
  //     type: 'antdesign',
  //     size: 25,
  //     color: '#FFFFFF',
  //     onPress: () => NavigationService.goBack(),
  //     style: {
  //       width: 25,
  //       height: 25,
  //     },
  //     containerStyle: {
  //       padding: 8,
  //       backgroundColor: 'rgba(255, 255, 255, 0.7)',
  //       borderRadius: 20,
  //     },
  //   };
  //   return (
  //     <Header
  //       leftComponent={leftComponent}
  //       transparent
  //       position="absolute"
  //       top={-1}
  //       // backIcon
  //       // switchTheme
  //     />
  //   );
  // };

  render() {
    const {
      headerBackgroundColor: headerBackgroundColorProp,
      contentBackgroundColor: contentBackgroundColorProp,
      parallaxHeaderHeight: parallaxHeaderHeightProp,
      stickyHeaderHeight: stickyHeaderHeightProp,
      renderBackground,
      renderForeground,
      renderStickyHeader,
      renderFixedHeader,
      children,
      ...otherProps
    } = this.props;

    /**
     * Color & Dimensions
     */
    const headerBackgroundColor = headerBackgroundColorProp || '#FFFFFF';
    const contentBackgroundColor = contentBackgroundColorProp || '#FFFFFF';
    const parallaxHeaderHeight = parallaxHeaderHeightProp || '#FFFFFF';
    const stickyHeaderHeight = stickyHeaderHeightProp || '#FFFFFF';

    return (
      <BaseParallaxScrollView
        {...otherProps}
        backgroundColor={headerBackgroundColor}
        contentBackgroundColor={contentBackgroundColor}
        parallaxHeaderHeight={parallaxHeaderHeight}
        stickyHeaderHeight={stickyHeaderHeight}
        renderBackground={renderBackground || this.renderBackground}
        renderForeground={renderForeground || this.renderForeground}
        renderStickyHeader={renderStickyHeader || this.renderStickyHeader}
        renderFixedHeader={renderFixedHeader}>
        {children}
      </BaseParallaxScrollView>
    );
  }
}

export default withTheme(
  (ParallaxScrollView as unknown) as React.ComponentType<
    ParallaxScrollViewProps & ThemeProps<any>
  >,
);
