import React from 'react';
import ScrollView, {ScrollViewProps} from '../ScrollView';
import QuickView, {QuickViewProps} from './QuickView';

export interface ContainerProps
  extends Pick<ScrollViewProps, 'scrollMode'>,
    QuickViewProps {
  scroll: boolean;
}

const Container = (props: ContainerProps) => {
  const {scroll, scrollMode} = props;
  if (scroll) {
    return (
      <ScrollView {...props} scrollMode={scrollMode || []} flex={1}>
        {props?.children}
      </ScrollView>
    );
  }
  return (
    <QuickView {...props} flex={1}>
      {props?.children}
    </QuickView>
  );
};

Container.defaultProps = {
  backgroundColor: '#FFFFFF',
  scroll: false,
};
export default Container;
