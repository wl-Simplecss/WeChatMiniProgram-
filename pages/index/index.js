//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    distanceSelectedIndex: -1,
    deliveryFeeSelectedIndex: -1,
    deliveryTimeSelectedIndex: -1,
    showFilter: false,
    // 筛选项可供选择的列表，距离、配送费、送达时间
    distanceOptions: ['1km内', '1km~2km', '2km或更远'],
    deliveryFeeOptions: ['3元以下', '3元~5元', '5元以上'],
    deliveryTimeOptions: ['20分钟内', '20分钟~30分钟', '30分钟及以上'],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    showFixed: false,
    sortHeight: 0,
    sortIndex: 0,
    sortListIndex: 0,
    showSort: false,
    scrollFixedTop: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sortItem: ['综合排序', '距离最近', '评分最高', '起送价最低', '配送费最低', '人均高到低', '人均低到高'],
    storeList: [{
      storeId: 1,
      storeName: '小柒粥铺',
      storeImgUrl: '/images/1.png',
      score: 4.4,
      saleMonth: 840,
      minDelPrice: 15,
      delPrice: 5,
      averagePrice: 15,
      delTime: 25,
      distance: 1.5,
      service: ['支持自取'],
      actives: [{
          activeId: 1,
          acticeText: '满20减10；满200减20；满1000减50；满1000减50'
        },
        {
          activeId: 2,
          acticeText: '本店新用户立减1元'
        },
        {
          activeId: 3,
          acticeText: '折扣商品9折起'
        }
      ]
    }, {
      storeId: 2,
      storeName: '亿德水饺',
      storeImgUrl: '/images/2.png',
      score: 4.2,
      saleMonth: 835,
      minDelPrice: 16,
      delPrice: 6,
      averagePrice: 25,
      delTime: 46,
      distance: 3.3,
      service: ['支持自取', '货到付款'],
      actives: [{
          activeId: 1,
          acticeText: '满20减10；满200减20'
        },
        {
          activeId: 2,
          acticeText: '本店新用户立减1元'
        }
      ]
    }, {
      storeId: 3,
      storeName: '终极味道排骨米饭',
      storeImgUrl: '/images/3.png',
      score: 4.7,
      saleMonth: 999,
      minDelPrice: 30,
      delPrice: 7,
      averagePrice: 60,
      delTime: 35,
      distance: 3.5,
      service: ['支持自取', '货到付款'],
      actives: [{
          activeId: 1,
          acticeText: '满20减10；满200减20'
        },
        {
          activeId: 2,
          acticeText: '本店新用户立减1元'
        }, {
          activeId: 3,
          acticeText: '折扣商品9折起'
        }, {
          activeId: 4,
          acticeText: '折扣商品9折起'
        }
      ]
    }, {
      storeId: 4,
      storeName: '张姐烤肉拌饭脆皮鸡',
      storeImgUrl: '/images/4.png',
      score: 4.5,
      saleMonth: 835,
      minDelPrice: 20,
      delPrice: 8,
      averagePrice: 30,
      delTime: 30,
      distance: 4.0,
      service: ['支持自取', '货到付款'],
      actives: [{
          activeId: 1,
          acticeText: '满20减10；满200减20'
        },
        {
          activeId: 2,
          acticeText: '本店新用户立减1元'
        }
      ]
    }]
  },
  getStoreList() {
    let storeList = [{
      storeId: 1,
      storeName: '小柒粥铺',
      storeImgUrl: '/images/1.png',
      score: 4.4,
      saleMonth: 840,
      minDelPrice: 15,
      delPrice: 5,
      averagePrice: 15,
      delTime: 25,
      distance: 1.5,
      service: ['支持自取'],
      actives: [{
          activeId: 1,
          acticeText: '满20减10；满200减20；满1000减50；满1000减50'
        },
        {
          activeId: 2,
          acticeText: '本店新用户立减1元'
        },
        {
          activeId: 3,
          acticeText: '折扣商品9折起'
        }
      ]
    }, {
      storeId: 2,
      storeName: '亿德水饺',
      storeImgUrl: '/images/2.png',
      score: 4.2,
      saleMonth: 835,
      minDelPrice: 16,
      delPrice: 6,
      averagePrice: 25,
      delTime: 46,
      distance: 3.3,
      service: ['支持自取', '货到付款'],
      actives: [{
          activeId: 1,
          acticeText: '满20减10；满200减20'
        },
        {
          activeId: 2,
          acticeText: '本店新用户立减1元'
        }
      ]
    }, {
      storeId: 3,
      storeName: '终极味道排骨米饭',
      storeImgUrl: '/images/3.png',
      score: 4.7,
      saleMonth: 999,
      minDelPrice: 30,
      delPrice: 7,
      averagePrice: 60,
      delTime: 35,
      distance: 3.5,
      service: ['支持自取', '货到付款'],
      actives: [{
          activeId: 1,
          acticeText: '满20减10；满200减20'
        },
        {
          activeId: 2,
          acticeText: '本店新用户立减1元'
        }, {
          activeId: 3,
          acticeText: '折扣商品9折起'
        }, {
          activeId: 4,
          acticeText: '折扣商品9折起'
        }
      ]
    }, {
      storeId: 4,
      storeName: '张姐烤肉拌饭脆皮鸡',
      storeImgUrl: '/images/4.png',
      score: 4.5,
      saleMonth: 835,
      minDelPrice: 20,
      delPrice: 8,
      averagePrice: 30,
      delTime: 30,
      distance: 4.0,
      service: ['支持自取', '货到付款'],
      actives: [{
          activeId: 1,
          acticeText: '满20减10；满200减20'
        },
        {
          activeId: 2,
          acticeText: '本店新用户立减1元'
        }
      ]
    }]; // 省略原始数据
    const {distanceSelectedIndex, deliveryFeeSelectedIndex, deliveryTimeSelectedIndex} = this.data;
    // 根据各种条件进行筛选
    if (distanceSelectedIndex !== -1) {
      switch (distanceSelectedIndex) {
        case 0:
          storeList = storeList.filter(item => item.distance <= 1);
          break;
        case 1:
          storeList = storeList.filter(item => item.distance > 1 && item.distance <= 2);
          break;
        case 2:
          storeList = storeList.filter(item => item.distance > 2);
          break;
        default:
          break;
      }
    }
    if (deliveryFeeSelectedIndex !== -1) {
      switch (deliveryFeeSelectedIndex) {
        case 0:
          storeList = storeList.filter(item => item.delPrice <= 3);
          break;
        case 1:
          storeList = storeList.filter(item => item.delPrice > 3 && item.delPrice <= 5);
          break;
        case 2:
          storeList = storeList.filter(item => item.delPrice > 5);
          break;
        default:
          break;
      }
    }
    if(deliveryTimeSelectedIndex!==-1){
      switch (deliveryTimeSelectedIndex) {
        case 0:
          storeList = storeList.filter(item => item.delTime <= 20);
          break;
        case 1:
          storeList = storeList.filter(item => item.delTime > 20 && item.delTime <= 30);
          break;
        case 2:
          storeList = storeList.filter(item => item.delTime > 30);
          break;
        default:
          break;
      }
    }
    return storeList;
  },
  //事件处理函数
  onPullDownRefresh: function () {
    console.log('下拉刷新');
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function (e) {
    let height;
    let res = wx.getSystemInfoSync();
    let winHeight = res.windowHeight;
    let query = wx.createSelectorQuery();
    query.select('.tabs').boundingClientRect();
    query.exec((res) => {
      height = res[0].height;
      this.setData({
        sortHeight: winHeight - height,
        scrollFixedTop: res[0].top
      })
    })
  },
  onPageScroll: function (e) {
    if (e.scrollTop >= this.data.scrollFixedTop && !this.data.showFixed) {
      this.setData({
        showFixed: true
      })
    } else if (e.scrollTop < this.data.scrollFixedTop && this.data.showFixed) {
      this.setData({
        showFixed: false
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  select(e) {
    wx.navigateTo({
      url: `../store/store?storeId=${e.currentTarget.dataset.id}`
    })
  },
  getTabsInfo(e) {
    wx.pageScrollTo({
      scrollTop: e.target.offsetTop - 1,
      duration: 300
    })
    setTimeout(() => {
      if (e.target.dataset.index == 0) {
        this.setData({
          showSort: !this.data.showSort
        })
      }
      if (e.target.dataset.index) {
        this.setData({
          showFixed: true,
          sortIndex: e.target.dataset.index
        })
      }
    }, 350)
  },
  getFixedTabsInfo(e) {
    if (e.target.dataset.index) {
      let sortIndex = e.target.dataset.index;
      let storeList = this.data.storeList;
      if (sortIndex == 2) { // 点击速度最快
        storeList.sort((a, b) => {
          return a.delTime - b.delTime;
        })
      }
      if (sortIndex == 1) { // 点击销量最高
        storeList.sort((a, b) => {
          return b.saleMonth - a.saleMonth;
        })
      }
      this.setData({
        sortIndex: sortIndex,
        storeList: storeList
      })
    }
    if (e.target.dataset.index == 0) {
      this.setData({
        showSort: !this.data.showSort
      })
    } else {
      this.setData({
        showSort: false
      })
    }
  },
  move() {},
  selectSort: function(e) {
    if (e.target.dataset.sortindex || e.target.dataset.sortindex == 0) {
    this.setData({
    sortListIndex: e.target.dataset.sortindex,
    showSort: false
    });
    // 根据选择的排序方式更新storeList的顺序
    let index = e.target.dataset.sortindex;
    let storeList = this.getStoreList();
    switch(index) {
    case 0:
      storeList.sort((a,b) => a.storeId - b.storeId);
    break;
    case 1:
      storeList.sort((a,b) => a.distance - b.distance);
    break;
    case 2:
      storeList.sort((a,b) => b.score - a.score);
    break;
    case 3:
      storeList.sort((a,b) => a.minDelPrice - b.minDelPrice);
    break;
    case 4:
      storeList.sort((a,b) => a.delPrice - b.delPrice);
    break;
    case 5:
      storeList.sort((a,b) => b.averagePrice - a.averagePrice);
    break;
    case 6:
      storeList.sort((a,b) => a.averagePrice - b.averagePrice);
    break;
    default:
    break;
    }
    this.setData({
    storeList: storeList
    });
    } else {
    this.setData({
    showSort: false
    })
    }
    },
     // 距离筛选
  onDistanceFilter(optionIndex) {
    let optionText = this.data.distanceOptions[optionIndex];
    const {distanceSelectedIndex} = this.data;
    if (distanceSelectedIndex === optionIndex) {
      // 如果已经选择了该项，则取消选择
      optionIndex = -1;
    }
    this.setData({distanceSelectedIndex: optionIndex});
  },

  // 配送费筛选
  onDeliveryFeeFilter(optionIndex) {
    let optionText = this.data.deliveryFeeOptions[optionIndex];
    const {deliveryFeeSelectedIndex} = this.data;
    if (deliveryFeeSelectedIndex === optionIndex) {
      // 如果已经选择了该项，则取消选择
      optionIndex = -1;
    }
    this.setData({deliveryFeeSelectedIndex: optionIndex});
  },

  // 送达时间筛选
  onDeliveryTimeFilter(optionIndex) {
    const {deliveryTimeSelectedIndex} = this.data;
    if (deliveryTimeSelectedIndex === optionIndex) {
      // 如果已经选择了该项，则取消选择
      optionIndex = -1;
    }
    this.setData({deliveryTimeSelectedIndex: optionIndex})
  },

  // 点击筛选按钮
  onFilterTap() {
    this.setData({showFilter: true})
  },

  // 点击筛选项
  onFilterOptionTap(event) {
    const {type, index} = event.currentTarget.dataset;
    switch(type) {
      case 'distance':
        this.onDistanceFilter(index);
        break;
      case 'deliveryFee':
        this.onDeliveryFeeFilter(index);
        break;
      case 'deliveryTime':
        this.onDeliveryTimeFilter(index);
        break;
    }
    // 更新店家列表
    this.setData({
      storeList: this.getStoreList(),
    });
  },

  // 点击空白区域或取消按钮时隐藏筛选层
  cancelFilter() {
    this.setData({showFilter: false})
  }
})