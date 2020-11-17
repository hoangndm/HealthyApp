import React, {Component} from 'react';
import {
  FlatListProps as RNFlatListProps,
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import {QuickView} from '@src/components';
import {Icon} from 'react-native-elements';

export interface FlatlistProps
  extends Omit<RNFlatListProps<any>, 'data' | 'renderItem'> {
  loading?: boolean;
  data: any;
  total?: number;
  renderItem: ({item, index}: {item: any; index: number}) => any;
  loadMore?: () => any;
  refreshData?: () => any;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  backgroundColor?: string;
}
interface State {
  refreshing: boolean;
  isReady: boolean;
  unhandledError: boolean;
}
export class Flatlist extends Component<FlatlistProps, State> {
  private flatListRef: any;

  private viewabilityConfig: any;

  constructor(props: FlatlistProps) {
    super(props);
    this.state = {isReady: false, refreshing: false, unhandledError: false};
    this.viewabilityConfig = {
      waitForInteraction: true,
      itemVisiblePercentThreshold: 50,
    };
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.loading && !prevState.refreshing && !prevState.isReady) {
      return {
        isReady: true,
        refreshing: false,
      };
    }
    if (!nextProps.loading && prevState.refreshing) {
      return {
        refreshing: false,
      };
    }
    return null;
  }

  rollToTop = () => {
    if (this.flatListRef) {
      this.flatListRef.scrollToIndex({
        animated: true,
        index: 0,
      });
    }
  };

  _onEndReached = () => {
    const {data, loading, total} = this.props;
    if (loading) {
      return;
    }
    const len = (data && data.length) || 0;

    // if (len < 10) {
    //   return;
    // }
    if (total) {
      if (len < total) {
        if (this.props.loadMore) {
          this.props.loadMore();
        } else {
        }
      }
    } else {
    }
  };

  _onRefresh = () => {
    this.setState({isReady: true});
    this.setState({
      refreshing: true,
    });
    if (this.props.refreshData) {
      this.props.refreshData();
    } else {
    }
  };

  _renderFooter = () => {
    if (this.props.loadMore) {
      if (this.state.refreshing) {
        return <View style={styles.footerFlatlist} />;
      }
      const {total, data, loading} = this.props;

      if (loading) {
        return (
          <View style={styles.footerFlatlist}>
            <ActivityIndicator />
          </View>
        );
      }

      const len = data && data.length;
      const isEndOfList = len === total;

      if (len && isEndOfList) {
        return (
          <TouchableOpacity onPress={this.rollToTop}>
            <View style={styles.footerFlatlist}>
              <Icon
                name="up"
                type="antdesign"
                size={30}
                color="#696969"
                style={styles.footerIcon}
              />
            </View>
          </TouchableOpacity>
        );
      }
    }
    return <View style={styles.footerFlatlist} />;
  };

  _renderEmpty = () => {
    const {horizontal} = this.props;
    if (!horizontal) {
      return (
        <QuickView center>
          <Text>Danh sách rỗng</Text>
        </QuickView>
      );
    }
    return null;
  };

  render() {
    const {
      data,
      renderItem,
      onEndReached,
      ListEmptyComponent,
      ListFooterComponent,
      refreshData,
      keyExtractor,
      refreshing,
      extraData,
      viewabilityConfig,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginHorizontal,
      marginVertical,
      backgroundColor,
    } = this.props;
    const style = StyleSheet.flatten([
      {
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginHorizontal,
        marginVertical,
        backgroundColor,
      },
      this.props.style,
    ]);
    if (!this.state.isReady) {
      setTimeout(() => {
        this.setState({unhandledError: true});
      }, 2000);
      if (!this.state.unhandledError) {
        return (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        );
      }
      return (
        <View>
          <Text style={[styles.emptyText, styles.errorColor]}>
            Đã xảy ra lỗi. Vui lòng thử lại
          </Text>
          <TouchableOpacity
            style={styles.reloadButton}
            activeOpacity={0.7}
            onPress={this._onRefresh}>
            <Text style={styles.reloadText}>Tải lại trang</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <FlatList
        {...this.props}
        ref={(ref) => {
          this.flatListRef = ref;
        }}
        style={style}
        data={data}
        keyExtractor={keyExtractor || ((item, index) => index.toString())}
        ListEmptyComponent={ListEmptyComponent || this._renderEmpty}
        renderItem={renderItem}
        onEndReached={onEndReached || this._onEndReached}
        ListFooterComponent={ListFooterComponent || this._renderFooter}
        refreshControl={
          refreshData ? (
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
              // tintColor="#007aff"
              // colors={['#007aff']}
            />
          ) : undefined
        }
        viewabilityConfig={viewabilityConfig || this.viewabilityConfig}
        refreshing={refreshing || this.state.refreshing}
        extraData={extraData || this.props.loading || this.props.data}
      />
    );
  }

  static defaultProps = {
    initialNumToRender: 10,
    onEndReachedThreshold: 0.5,
    showsVerticalScrollIndicator: false,
  };
}
const styles = StyleSheet.create({
  loading: {
    marginTop: 20,
  },
  emptyText: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#0051FF',
    fontSize: 20,
    textAlign: 'center',
  },
  footerFlatlist: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    marginVertical: 5,
  },
  reloadButton: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#006BFF',
    padding: 8,
    borderRadius: 5,
  },
  reloadText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  errorColor: {
    color: '#FF3232',
  },
});

export default Flatlist;
