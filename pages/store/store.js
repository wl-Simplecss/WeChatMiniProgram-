// pages/store/store.js
const app = getApp();
let timer;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title1: '商家地址',
    title2: '食品安全许可证书',
    zanwushuju: '暂无数据',
    rotated: false,
    showContent: false,
    rotated1: false,
    showContent1: false,
    viewTo: "",
    viewToLeft: "",
    listHeight: 300,
    activeIndex: 0,
    tabIndex: 0,
    showModal: false,
    showCart: false,
    heigthArr: [],
    cart: [],
    totalMoney: 0,
    activesInfo: {
      1: {
        class: "manjian",
        text: "减"
      },
      2: {
        class: "xindian",
        text: "新"
      },
      3: {
        class: "zhekou",
        text: "折"
      },
      4: {
        class: "daijinquan",
        text: "券"
      },
      5: {
        class: "xinyonghu",
        text: "新"
      },
      6: {
        class: "peisong",
        text: "配"
      },
      7: {
        class: "lingdaijin",
        text: "领"
      },
      8: {
        class: "zengsong",
        text: "赠"
      }
    },
    storeInfo: {
      //服务端获取信息
      storeId: 1,
      storeName: "小柒粥铺",
      storeImgUrl: "/images/1.png",
      score: 4.4,
      saleMonth: 840,
      minDelPrice: 15,
      delPrice: 5,
      averagePrice: 15,
      delTime: 30,
      distance: 3.2,
      address: "吉林省长春市朝阳区前进大街2699号",
      service: ["支持自取"],
      actives: [{
        activeId: 1,
        acticeText: "满20减10；满200减20；满1000减50；满1000减50；满1000减50"
      },
      {
        activeId: 2,
        acticeText: "本店新用户立减1元"
      },
      {
        activeId: 3,
        acticeText: "折扣商品9折起"
      }
      ],
      publicMsg: "欢迎光临本店,都是日新购配送，超过一个小时没打电话可以去楼下找一下"
    },
    food: [{
      titleId: "title1",
      title: "推荐",
      foodCount: 0,
      items: [{
        foodId: 1,
        name: "五香茶叶蛋",
        foodImgUrl: '/images/1_1.png',
        price: 2,
        monthNum: 200,
        note: "优质蛋白",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 2,
        name: "韭菜盒子",
        foodImgUrl: '/images/1_2.png',
        price: 4,
        monthNum: 76,
        note: "馅料十足",
        zan: 76,
        count: 0,
        classify: []
      },
      {
        foodId: 3,
        name: "皮蛋瘦肉粥",
        foodImgUrl: '/images/1_3.png',
        price: 4,
        monthNum: 34,
        note: "味道很好,欢迎品尝",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 8
        },
        {
          describe: "中份",
          price: 6
        },
        {
          describe: "小份",
          price: 4
        }
        ]
      }
      ]
    },
    {
      titleId: "title2",
      title: "粥类 咸鸭蛋",
      foodCount: 0,
      items: [{
        foodId: 4,
        name: "五香茶叶蛋",
        foodImgUrl: '/images/1_1.png',
        price: 2,
        monthNum: 200,
        note: "优质蛋白",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 5,
        name: "冰糖绿豆粥",
        foodImgUrl: '/images/1_4.png',
        price: 4,
        monthNum: 100,
        note: "门店销量第三名",
        zan: 100,
        count: 0,
        classify: []
      },
      {
        foodId: 6,
        name: "黑米粥",
        foodImgUrl: '/images/1_5.png',
        price: 4,
        monthNum: 34,
        note: "易消化",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title3",
      title: "拇指生煎",
      foodCount: 0,
      items: [{
        foodId: 7,
        name: "小小拇指生煎包",
        foodImgUrl: '/images/1_6.png',
        price: 10,
        monthNum: 34,
        note: "这家包子绝绝子",
        zan: 34,
        count: 0,
        classify: []
      },
      ]
    },
    {
      titleId: "title4",
      title: "馅饼 煎饺",
      foodCount: 0,
      items: [{
        foodId: 8,
        name: "小份玉米煎饺",
        foodImgUrl: '/images/1_8.png',
        price: 4,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 9,
        name: "大份玉米机鲜肉煎饺",
        foodImgUrl: '/images/!_9.png',
        price: 8,
        monthNum: 34,
        note: "店内好评第二名",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 10,
        name: "鸡蛋卷",
        foodImgUrl: '/images/1_10.png',
        price: 4,
        monthNum: 34,
        note: "一口一个",
        zan: 34,
        count: 0,
        classify: []
      }
      ]
    },
    {
      titleId: "title5",
      title: "包子",
      foodCount: 0,
      items: [{
        foodId: 11,
        name: "奶黄包",
        foodImgUrl: '/images/1_11.png',
        price: 3.5,
        monthNum: 34,
        note: "点评网友推荐",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 12,
        name: "糯米烧麦",
        foodImgUrl: '/images/1_12.png',
        price: 3.5,
        monthNum: 34,
        note: "清香可口",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 13,
        name: "牛肉萝卜包",
        foodImgUrl: '/images/1_13.png',
        price: 2.5,
        monthNum: 34,
        note: "新鲜干净",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title6",
      title: "三明治",
      foodCount: 0,
      items: [{
        foodId: 14,
        name: "鸡蛋蔬菜三明治",
        foodImgUrl: '/images/1_7.png',
        price: 11,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 15,
        name: "鸡蛋火腿蔬菜三明治",
        foodImgUrl: '/images/1_7.png',
        price: 12,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 16,
        name: "厚蛋三明治",
        foodImgUrl: '/images/1_20.png',
        price: 15,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title7",
      title: "冰饮豆奶品",
      foodCount: 0,
      items: [{
        foodId: 17,
        name: "小青柠",
        foodImgUrl: '/images/1_14.png',
        price: 4,
        monthNum: 34,
        note: "柠檬",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 18,
        name: "原味甜豆奶",
        foodImgUrl: '/images/1_15.png',
        price: 4,
        monthNum: 34,
        note: "好喝",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 19,
        name: "芝士豆奶",
        foodImgUrl: '/images/1_16.png',
        price: 4,
        monthNum: 34,
        note: "停不下来",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title8",
      title: "吉祥馄沌",
      foodCount: 0,
      items: [{
        foodId: 20,
        name: "玉米鲜肉混沌",
        foodImgUrl: '/images/1_17.png',
        price: 16,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 21,
        name: "虾仁三鲜混沌",
        foodImgUrl: '/images/1_17.png',
        price: 19,
        monthNum: 34,
        note: "肉质肥美",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 22,
        name: "虾仁鲜肉混沌",
        foodImgUrl: '/images/1_17.png',
        price: 19,
        monthNum: 34,
        note: "鲜香美味",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title9",
      title: "汤圆",
      foodCount: 0,
      items: [{
        foodId: 23,
        name: "黑芝麻汤圆",
        foodImgUrl: '/images/1_18.png',
        price: 10,
        monthNum: 34,
        note: "香甜",
        zan: 34,
        count: 0,
        classify: []
      }
      ]
    },
    {
      titleId: "title10",
      title: "榨菜",
      foodCount: 0,
      items: [{
        foodId: 24,
        name: "榨菜",
        foodImgUrl: '/images/1_19.png',
        price: 1.2,
        monthNum: 34,
        note: "解油腻",
        zan: 34,
        count: 0,
        classify: []
      }
      ]
    }
    ]
  },

  getStoreInfo2: function () {
    let storeInfo1 = {
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
      address: "吉林省长春市朝阳区前进大街2699号",
      service: ['支持自取', '货到付款'],
      actives: [{
        activeId: 1,
        acticeText: '满20减10；满200减20'
      },
      {
        activeId: 2,
        acticeText: '本店新用户立减1元'
      }
      ],
      publicMsg: "欢迎光临本店,都是日新购配送，超过一个小时没打电话可以去楼下找一下"
    };
    return storeInfo1;
  },
  getStoreInfo3: function () {
    let storeInfo1 = {
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
      address: "吉林省长春市朝阳区前进大街2699号",
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
      ],
      publicMsg: "欢迎光临本店,都是日新购配送，超过一个小时没打电话可以去楼下找一下"
    };
    return storeInfo1;
  },
  getStoreInfo4: function () {
    let storeInfo1 = {
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
      address: "吉林省长春市朝阳区前进大街2699号",
      service: ['支持自取', '货到付款'],
      actives: [{
        activeId: 1,
        acticeText: '满20减10；满200减20'
      },
      {
        activeId: 2,
        acticeText: '本店新用户立减1元'
      }
      ],
      publicMsg: "欢迎光临本店,都是日新购配送，超过一个小时没打电话可以去楼下找一下"
    };
    return storeInfo1;
  },
  getfood2: function () {
    let food2 = [{
      titleId: "title1",
      title: "推荐",
      foodCount: 0,
      items: [{
        foodId: 1,
        name: "韭菜鸡蛋馅",
        foodImgUrl: '/images/2_1.png',
        price: 17,
        monthNum: 69,
        note: "店内复购第三名",
        zan: 69,
        count: 0,
        classify: []
      },
      {
        foodId: 2,
        name: "猪肉虾仁",
        foodImgUrl: '/images/2_2.png',
        price: 18,
        monthNum: 76,
        note: "店内销量第一名",
        zan: 76,
        count: 0,
        classify: []
      },
      {
        foodId: 3,
        name: "猪肉白菜",
        foodImgUrl: '/images/2_3.png',
        price: 17,
        monthNum: 34,
        note: "店内销量第二名",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 8
        },
        {
          describe: "中份",
          price: 6
        },
        {
          describe: "小份",
          price: 4
        }
        ]
      }
      ]
    },
    {
      titleId: "title2",
      title: "水饺",
      foodCount: 0,
      items: [{
        foodId: 4,
        name: "牛肉香菜",
        foodImgUrl: '/images/2_4.png',
        price: 19,
        monthNum: 200,
        note: "好吃不腻",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 5,
        name: "猪肉茴香",
        foodImgUrl: '/images/2_5.png',
        price: 4,
        monthNum: 100,
        note: "门店销量第三名",
        zan: 100,
        count: 0,
        classify: []
      },
      {
        foodId: 6,
        name: "猪肉白菜",
        foodImgUrl: '/images/2_3.png',
        price: 4,
        monthNum: 34,
        note: "易消化",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title3",
      title: "蒸饺",
      foodCount: 0,
      items: [{
        foodId: 7,
        name: "猪肉酸菜蒸饺",
        foodImgUrl: '/images/2_6.png',
        price: 10,
        monthNum: 34,
        note: "这家饺子绝绝子",
        zan: 34,
        count: 0,
        classify: []
      },
      ]
    },
    {
      titleId: "title4",
      title: "煎饺",
      foodCount: 0,
      items: [{
        foodId: 8,
        name: "猪肉玉米煎饺",
        foodImgUrl: '/images/2_7.png',
        price: 4,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      }
      ]
    },
    {
      titleId: "title5",
      title: "饮品",
      foodCount: 0,
      items: [{
        foodId: 9,
        name: "甜牛奶",
        foodImgUrl: '/images/2_8.png',
        price: 3,
        monthNum: 34,
        note: "点评网友推荐",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 10,
        name: "红枣豆浆",
        foodImgUrl: '/images/2_9.png',
        price: 3,
        monthNum: 34,
        note: "清香可口",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 11,
        name: "原味豆浆",
        foodImgUrl: '/images/2_10.png',
        price: 3,
        monthNum: 34,
        note: "浓香顺滑",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    }
    ];
    return food2;
  },
  getfood3: function () {
    let food2 = [{
      titleId: "title1",
      title: "原味排骨米饭",
      foodCount: 0,
      items: [{
        foodId: 1,
        name: "原味排骨米饭小份",
        foodImgUrl: '/images/3_1.png',
        price: 15,
        monthNum: 200,
        note: "优质蛋白",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 2,
        name: "原味排骨米饭中份",
        foodImgUrl: '/images/3_2.png',
        price: 19,
        monthNum: 76,
        note: "馅料十足",
        zan: 76,
        count: 0,
        classify: []
      },
      {
        foodId: 3,
        name: "原味排骨米饭大份",
        foodImgUrl: '/images/3_3.png',
        price: 24,
        monthNum: 34,
        note: "味道很好,欢迎品尝",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 8
        },
        {
          describe: "中份",
          price: 6
        },
        {
          describe: "小份",
          price: 4
        }
        ]
      }
      ]
    },
    {
      titleId: "title2",
      title: "香辣排骨米饭",
      foodCount: 0,
      items: [{
        foodId: 4,
        name: "香辣排骨米饭小份",
        foodImgUrl: '/images/3_4.png',
        price: 16,
        monthNum: 200,
        note: "优质蛋白",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 5,
        name: "香辣排骨米饭中份",
        foodImgUrl: '/images/3_5.png',
        price: 20,
        monthNum: 100,
        note: "门店销量第三名",
        zan: 100,
        count: 0,
        classify: []
      },
      {
        foodId: 6,
        name: "香辣排骨米饭大份",
        foodImgUrl: '/images/3_6.png',
        price: 25,
        monthNum: 34,
        note: "易消化",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title3",
      title: "麻辣排骨米饭",
      foodCount: 0,
      items: [{
        foodId: 7,
        name: "麻辣排骨米饭小份",
        foodImgUrl: '/images/3_7.png',
        price: 16,
        monthNum: 200,
        note: "优质蛋白",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 8,
        name: "麻辣排骨米饭中份",
        foodImgUrl: '/images/3_8.png',
        price: 20,
        monthNum: 100,
        note: "门店销量第三名",
        zan: 100,
        count: 0,
        classify: []
      },
      {
        foodId: 9,
        name: "麻辣排骨米饭大份",
        foodImgUrl: '/images/3_9.png',
        price: 25,
        monthNum: 34,
        note: "易消化",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title4",
      title: "糖醋排骨米饭",
      foodCount: 0,
      items: [{
        foodId: 10,
        name: "糖醋排骨米饭小份",
        foodImgUrl: '/images/3_10.png',
        price: 16,
        monthNum: 200,
        note: "优质蛋白",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 11,
        name: "糖醋排骨米饭中份",
        foodImgUrl: '/images/3_11.png',
        price: 20,
        monthNum: 100,
        note: "门店销量第三名",
        zan: 100,
        count: 0,
        classify: []
      },
      {
        foodId: 12,
        name: "糖醋排骨米饭大份",
        foodImgUrl: '/images/3_12.png',
        price: 25,
        monthNum: 34,
        note: "易消化",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    }
    ];
    return food2;
  },
  getfood4: function () {
    let food2 = [{
      titleId: "title1",
      title: "推荐",
      foodCount: 0,
      items: [{
        foodId: 1,
        name: "五香茶叶蛋",
        foodImgUrl: '/images/1_1.png',
        price: 2,
        monthNum: 200,
        note: "优质蛋白",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 2,
        name: "韭菜盒子",
        foodImgUrl: '/images/1_2.png',
        price: 4,
        monthNum: 76,
        note: "馅料十足",
        zan: 76,
        count: 0,
        classify: []
      },
      {
        foodId: 3,
        name: "皮蛋瘦肉粥",
        foodImgUrl: '/images/1_3.png',
        price: 4,
        monthNum: 34,
        note: "味道很好,欢迎品尝",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 8
        },
        {
          describe: "中份",
          price: 6
        },
        {
          describe: "小份",
          price: 4
        }
        ]
      }
      ]
    },
    {
      titleId: "title2",
      title: "粥类 咸鸭蛋",
      foodCount: 0,
      items: [{
        foodId: 4,
        name: "五香茶叶蛋",
        foodImgUrl: '/images/1_1.png',
        price: 2,
        monthNum: 200,
        note: "优质蛋白",
        zan: 200,
        count: 0,
        classify: []
      },
      {
        foodId: 5,
        name: "冰糖绿豆粥",
        foodImgUrl: '/images/1_4.png',
        price: 4,
        monthNum: 100,
        note: "门店销量第三名",
        zan: 100,
        count: 0,
        classify: []
      },
      {
        foodId: 6,
        name: "黑米粥",
        foodImgUrl: '/images/1_5.png',
        price: 4,
        monthNum: 34,
        note: "易消化",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title3",
      title: "拇指生煎",
      foodCount: 0,
      items: [{
        foodId: 7,
        name: "小小拇指生煎包",
        foodImgUrl: '/images/1_6.png',
        price: 10,
        monthNum: 34,
        note: "这家包子绝绝子",
        zan: 34,
        count: 0,
        classify: []
      },
      ]
    },
    {
      titleId: "title4",
      title: "馅饼 煎饺",
      foodCount: 0,
      items: [{
        foodId: 8,
        name: "小份玉米煎饺",
        foodImgUrl: '/images/1_8.png',
        price: 4,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 9,
        name: "大份玉米机鲜肉煎饺",
        foodImgUrl: '/images/!_9.png',
        price: 8,
        monthNum: 34,
        note: "店内好评第二名",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 10,
        name: "鸡蛋卷",
        foodImgUrl: '/images/1_10.png',
        price: 4,
        monthNum: 34,
        note: "一口一个",
        zan: 34,
        count: 0,
        classify: []
      }
      ]
    },
    {
      titleId: "title5",
      title: "包子",
      foodCount: 0,
      items: [{
        foodId: 11,
        name: "奶黄包",
        foodImgUrl: '/images/1_11.png',
        price: 3.5,
        monthNum: 34,
        note: "点评网友推荐",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 12,
        name: "糯米烧麦",
        foodImgUrl: '/images/1_12.png',
        price: 3.5,
        monthNum: 34,
        note: "清香可口",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 13,
        name: "牛肉萝卜包",
        foodImgUrl: '/images/1_13.png',
        price: 2.5,
        monthNum: 34,
        note: "新鲜干净",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title6",
      title: "三明治",
      foodCount: 0,
      items: [{
        foodId: 14,
        name: "鸡蛋蔬菜三明治",
        foodImgUrl: '/images/1_7.png',
        price: 11,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 15,
        name: "鸡蛋火腿蔬菜三明治",
        foodImgUrl: '/images/1_7.png',
        price: 12,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 16,
        name: "厚蛋三明治",
        foodImgUrl: '/images/1_20.png',
        price: 15,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title7",
      title: "冰饮豆奶品",
      foodCount: 0,
      items: [{
        foodId: 17,
        name: "小青柠",
        foodImgUrl: '/images/1_14.png',
        price: 4,
        monthNum: 34,
        note: "柠檬",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 18,
        name: "原味甜豆奶",
        foodImgUrl: '/images/1_15.png',
        price: 4,
        monthNum: 34,
        note: "好喝",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 19,
        name: "芝士豆奶",
        foodImgUrl: '/images/1_16.png',
        price: 4,
        monthNum: 34,
        note: "停不下来",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title8",
      title: "吉祥馄沌",
      foodCount: 0,
      items: [{
        foodId: 20,
        name: "玉米鲜肉混沌",
        foodImgUrl: '/images/1_17.png',
        price: 16,
        monthNum: 34,
        note: "咸鲜",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 21,
        name: "虾仁三鲜混沌",
        foodImgUrl: '/images/1_17.png',
        price: 19,
        monthNum: 34,
        note: "肉质肥美",
        zan: 34,
        count: 0,
        classify: []
      },
      {
        foodId: 22,
        name: "虾仁鲜肉混沌",
        foodImgUrl: '/images/1_17.png',
        price: 19,
        monthNum: 34,
        note: "鲜香美味",
        zan: 34,
        count: 0,
        classify: [{
          describe: "大份",
          price: 30
        },
        {
          describe: "中份",
          price: 23
        },
        {
          describe: "小份",
          price: 15
        }
        ]
      }
      ]
    },
    {
      titleId: "title9",
      title: "汤圆",
      foodCount: 0,
      items: [{
        foodId: 23,
        name: "黑芝麻汤圆",
        foodImgUrl: '/images/1_18.png',
        price: 10,
        monthNum: 34,
        note: "香甜",
        zan: 34,
        count: 0,
        classify: []
      }
      ]
    },
    {
      titleId: "title10",
      title: "榨菜",
      foodCount: 0,
      items: [{
        foodId: 24,
        name: "榨菜",
        foodImgUrl: '/images/1_19.png',
        price: 1.2,
        monthNum: 34,
        note: "解油腻",
        zan: 34,
        count: 0,
        classify: []
      }
      ]
    }
    ];
    return food2;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.storeId === '2') { // 假设storeId为uniqueStoreId才需要更新
      let storeInfo2 = this.getStoreInfo2();
      let food2 = this.getfood2();
      this.setData({
        storeInfo: storeInfo2,// 将storeInfo更新为storeInfo1
        food: food2
      })
    }
    if (options.storeId === '3') { // 假设storeId为uniqueStoreId才需要更新
      let storeInfo3 = this.getStoreInfo3();
      let food3 = this.getfood3();
      this.setData({
        storeInfo: storeInfo3,// 将storeInfo更新为storeInfo1
        food: food3
      })
    }
    if (options.storeId === '4') { // 假设storeId为uniqueStoreId才需要更新
      let storeInfo4 = this.getStoreInfo4();
      let food4 = this.getfood4();
      this.setData({
        storeInfo: storeInfo4,// 将storeInfo更新为storeInfo1
        food: food4
      })
    }
    wx.setNavigationBarTitle({
      title: this.data.storeInfo.storeName
    });
  },

  onReady: function () {
    let height1, height2;
    let res = wx.getSystemInfoSync();
    let winHeight = res.windowHeight;
    let query = wx.createSelectorQuery();
    query.select(".head").boundingClientRect();
    query.exec(res => {
      height1 = res[0].height;
      let query1 = wx.createSelectorQuery();
      query1.select(".tab").boundingClientRect();
      query1.exec(res => {
        height2 = res[0].height;
        this.setData({
          listHeight: winHeight - height1 - height2
        });
        this.calculateHeight();
      });
    });
  },

  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
  selectFood(e) {
    this.setData({
      activeIndex: e.target.dataset.index,
      viewTo: e.target.dataset.titleid
    });
  },
  calculateHeight() {
    let heigthArr = [];
    let height = 0;
    heigthArr.push(height);
    var query = wx.createSelectorQuery();
    query.selectAll(".title-group").boundingClientRect();
    query.exec(res => {
      for (let i = 0; i < res[0].length; i++) {
        console.log(res[0][i])
        height += parseInt(res[0][i].height);
        heigthArr.push(height);
      }
      this.setData({
        heigthArr: heigthArr
      });
    });
  },
  // 手机端有延迟 节流函数效果不好 用防抖函数凑合
  scroll(e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      let srollTop = e.detail.scrollTop;
      for (let i = 0; i < this.data.heigthArr.length; i++) {
        if (
          srollTop >= this.data.heigthArr[i] &&
          srollTop < this.data.heigthArr[i + 1] &&
          this.data.activeIndex != i
        ) {
          this.setData({
            activeIndex: i
          });
          if (i < 3) {
            this.setData({
              viewToLeft: 'title1left'
            })
          } else {
            this.setData({
              viewToLeft: 'title' + (i - 2) + 'left'
            })
          }
          return;
        }
      }
    }, 100)
  },
  add(e) {
    let groupindex = e.target.dataset.groupindex;
    let index = e.target.dataset.index;
    let countMsg =
      "food[" +
      groupindex +
      "].items[" +
      index +
      "].count";
    let count = this.data.food[groupindex].items[
      index
    ].count;
    let foodCountMsg = "food[" + groupindex + "].foodCount";
    let foodCount = this.data.food[groupindex].foodCount;
    let foodId = this.data.food[groupindex].items[
      index
    ].foodId;
    count += 1;
    foodCount += 1;
    this.setData({
      [countMsg]: count,
      [foodCountMsg]: foodCount
    });

    // 查找购物车数组，如果已经存在该商品则将其数量加 1
    let cart = this.data.cart;
    let found = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].foodId === foodId) {
        cart[i].count++;
        found = true;
        break;
      }
    }

    // 如果购物车数组中不存在该商品，则添加新的商品到购物车数组
    if (!found) {
      const food = this.data.food[groupindex].items[index];
      const newItem = { ...food, count: 1, groupindex };
      cart.push(newItem);
    }

    // 更新总金额
    let totalMoney = this.data.totalMoney;
    totalMoney += this.data.food[groupindex].items[
      index
    ].price;
    this.setData({
      cart: cart,
      totalMoney: totalMoney
    });
  },
  reduce(e) {
    let groupindex = e.target.dataset.groupindex;
    let index = e.target.dataset.index;
    let countMsg =
      "food[" +
      groupindex +
      "].items[" +
      index +
      "].count";
    let count = this.data.food[groupindex].items[
      index
    ].count;
    let foodCountMsg = "food[" + groupindex + "].foodCount";
    let foodCount = this.data.food[groupindex].foodCount;
    let foodId = this.data.food[groupindex].items[
      index
    ].foodId;
    count -= 1;
    foodCount -= 1;
    this.setData({
      [countMsg]: count,
      [foodCountMsg]: foodCount
    });
    let cart = this.data.cart;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].foodId == foodId) {
        if (cart[i].count == 1) {
          cart.splice(i, 1);
        } else {
          cart[i].count--;
        }
        break;
      }
    }
    let totalMoney = this.data.totalMoney;
    totalMoney -= this.data.food[groupindex].items[
      index
    ].price;
    this.setData({
      cart: cart,
      totalMoney: totalMoney
    });
  },
  listCart() {
    if (this.data.cart.length > 0) {
      this.setData({
        showCart: !this.data.showCart
      })
    }
  },
  selectTabItem(e) {
    if (e.target.dataset.index) {
      this.setData({
        tabIndex: e.target.dataset.index
      });
    }
  },
  preventScrollSwiper() {
    return false;
  },
  showStoreDetail() {
    this.setData({
      showModal: true
    });
  },
  closeModal(e) {
    this.setData({
      showModal: false
    });
  },
  toggleContent() {
    this.setData({
      rotated: !this.data.rotated,
      showContent: !this.data.showContent,
    });
  },
  toggleContent1() {
    this.setData({
      rotated1: !this.data.rotated1,
      showContent1: !this.data.showContent1,
    });
  },
  cartAdd(e){
    let foodId=e.target.dataset.id;
    let cart = this.data.cart;
    let food = this.data.food;
    let totalMoney = this.data.totalMoney;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].foodId === foodId) {
        cart[i].count++;
        totalMoney +=cart[i].price;
        break;
      }
    }
    
    for (let i = 0; i < food.length; i++) {
      for (let j = 0; j < food[i].items.length; j++) {
        if (foodId === food[i].items[j].foodId) {
          food[i].foodCount++;
          food[i].items[j].count++;
        }
      }
    }

    this.setData({
      cart: cart,
      totalMoney: totalMoney,
      food: food
    })
  },
  cartReduce(e){
    let foodId=e.target.dataset.id;
    let cart = this.data.cart;
    let food = this.data.food;
    let totalMoney = this.data.totalMoney;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].foodId == foodId) {
        if (cart[i].count == 1) {
          cart.splice(i, 1);
        } else {
          cart[i].count--;
        }
        totalMoney -= cart[i].price;
        break;
      }
    }
    for (let i = 0; i < food.length; i++) {
      for (let j = 0; j < food[i].items.length; j++) {
        if (foodId === food[i].items[j].foodId) {
          food[i].foodCount--;
          food[i].items[j].count--;
        }
      }
    }
    this.setData({
      cart: cart,
      totalMoney: totalMoney,
      food: food
    })
  },
  clearCart: function(){
    let cart = [];
    let food = this.data.food;
    let totalMoney = 0;
    for (let i = 0; i < food.length; i++) {
      food[i].foodCount = 0;
      for (let j = 0; j < food[i].items.length; j++) {
        food[i].items[j].count = 0;
      }
    }
    this.setData({
      cart: cart,
      totalMoney: totalMoney,
      food: food
    })
  },
  startDel() {
    if (this.data.totalMoney >= this.data.storeInfo.minDelPrice && this.data.cart.length > 0) {
      let cart = this.data.cart;
      let totalMoney = this.data.totalMoney;
      var list = wx.getStorageSync('myOrder')||[];
      let num = 32451;
      for(let i=0; i<list.length; i++){
        num++;
      }
      let newData = {
        length: 0,
        orderNumber: num,
        status: 1,
        actualTotal: totalMoney,
        orderItemDtos: {
        }
      };
      for(let i=0; i<cart.length; i++){
        if(cart[i].count>0){
          newData.length++;
          let newItem = {
            prodName: cart[i].name,
            skuName: cart[i].note,
            pic: cart[i].foodImgUrl,
            price: cart[i].price,
            prodCount: cart[i].count
          };
          let j = i+1;
          let itemMSG="item"+j;
          newData.orderItemDtos[itemMSG] = newItem;
        }
        console.log(newData.orderItemDtos)
      }
      
      list.push(newData);
      wx.setStorageSync('myOrder', list);
      wx.switchTab({
        url: '/pages/cart/cart'
      });
    }
  }
});
