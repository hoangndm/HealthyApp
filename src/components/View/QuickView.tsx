import React from 'react';
import {View, ImageBackgroundProps, ImageBackground} from 'react-native';

export interface QuickViewProps {
  width?: number | string;
  height?: number | string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderRadius?: number;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  center?: boolean;
  style?: any;
  children?: any;
  row?: boolean;
  column?: boolean;
  rowReverse?: boolean;
  columnReverse?: boolean;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  alignSelf?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline';
  alignItems?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline';
  backgroundColor?: string;
  flex?: number;
  backgroundImage?: ImageBackgroundProps;
}

const QuickView = (props: QuickViewProps) => {
  const quickViewStyle = [
    props.width && {width: props.width},
    props.height && {height: props.height},
    props.margin && {margin: props.margin},
    props.marginTop && {marginTop: props.marginTop},
    props.marginBottom && {marginBottom: props.marginBottom},
    props.marginLeft && {marginLeft: props.marginLeft},
    props.marginRight && {marginRight: props.marginRight},
    props.marginHorizontal && {marginHorizontal: props.marginHorizontal},
    props.marginVertical && {marginVertical: props.marginVertical},
    props.padding && {padding: props.padding},
    props.paddingTop && {paddingTop: props.paddingTop},
    props.paddingBottom && {paddingBottom: props.paddingBottom},
    props.paddingLeft && {paddingLeft: props.paddingLeft},
    props.paddingRight && {paddingRight: props.paddingRight},
    props.paddingHorizontal && {paddingHorizontal: props.paddingHorizontal},
    props.paddingVertical && {paddingVertical: props.paddingVertical},
    props.borderRadius && {borderRadius: props.borderRadius},
    props.position && {position: props.position},
    props.top && {top: props.top},
    props.bottom && {bottom: props.bottom},
    props.left && {left: props.left},
    props.right && {right: props.right},
    props.center && {
      alignSelf: props.alignSelf || 'center',
      alignItems: props.alignItems || 'center',
      justifyContent: props.justifyContent || 'center',
    },
    props.row && {
      flexDirection: 'row',
    },
    props.rowReverse && {
      flexDirection: 'row-reverse',
    },
    props.column && {
      flexDirection: 'column',
    },
    props.columnReverse && {
      flexDirection: 'column-reverse',
    },
    props.backgroundColor && {backgroundColor: props.backgroundColor},
    props.flex && {flex: props.flex},
    props.style,
  ];

  if (props.backgroundImage) {
    const backgroundStyle: any = [
      {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      props.backgroundImage.style,
    ];
    return (
      <ImageBackground style={backgroundStyle} {...props.backgroundImage}>
        <View {...props} style={quickViewStyle}>
          {props?.children}
        </View>
      </ImageBackground>
    );
  }
  return (
    <View {...props} style={quickViewStyle}>
      {props?.children}
    </View>
  );
};

export default QuickView;
