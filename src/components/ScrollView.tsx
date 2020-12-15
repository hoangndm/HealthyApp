import React, {Component} from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
  StyleSheet,
} from 'react-native';
import {scrollEnabled, ScrollMode} from '@src/core/utils/viewUntils';
import {QuickViewProps} from './View/QuickView';

export interface ScrollViewProps
  extends Pick<
      QuickViewProps,
      | 'margin'
      | 'marginTop'
      | 'marginBottom'
      | 'marginLeft'
      | 'marginRight'
      | 'marginHorizontal'
      | 'marginVertical'
      | 'flex'
    >,
    RNScrollViewProps {
  scrollMode?: ScrollMode;
  scrollBottomOffset?: number;
}
interface State {
  scrollEnabled: boolean;
}
class ScrollView extends Component<ScrollViewProps, State> {
  static defaultProps = {
    scrollMode: ['header', 'bottom-navigation-bar'],
    showsVerticalScrollIndicator: false,
  };

  constructor(props: ScrollViewProps) {
    super(props);
    this.state = {scrollEnabled: false};
  }

  onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    const {scrollMode, scrollBottomOffset} = this.props;
    const additionHeight = scrollBottomOffset || 0;
    contentHeight += additionHeight;
    this.setState({
      scrollEnabled: scrollEnabled(contentWidth, contentHeight, scrollMode),
    });
  };

  render() {
    const {
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginHorizontal,
      marginVertical,
      flex,
    } = this.props;
    const scrollViewStyle = StyleSheet.flatten([
      {
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginHorizontal,
        marginVertical,
        flex,
      },
      this.props.style,
    ]);
    return (
      <RNScrollView
        {...this.props}
        style={scrollViewStyle}
        // scrollEnabled={this.state.scrollEnabled}
        scrollEnabled
        onContentSizeChange={this.onContentSizeChange}>
        {this.props?.children}
      </RNScrollView>
    );
  }
}

export default ScrollView;
