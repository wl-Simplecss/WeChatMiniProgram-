// components/store-list/store-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    storeInfo: {
      'type': Object,
      'value': null,
      observer(newVal, oldVal) {
        // 在 storeInfo 发生变化时重新调用 getStars 方法
        this.getStars();
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: [],
    showAll: false,
    activesInfo: {
      1: {
        class: 'manjian',
        text: '减'
      },
      2: {
        class: 'xindian',
        text: '新'
      },
      3: {
        class: 'zhekou',
        text: '折'
      },
      4: {
        class: 'daijinquan',
        text: '券'
      },
      5: {
        class: 'xinyonghu',
        text: '新'
      },
      6: {
        class: 'peisong',
        text: '配'
      },
      7: {
        class: 'lingdaijin',
        text: '领'
      },
      8: {
        class: 'zengsong',
        text: '赠'
      },
    }
  },
  attached() {
    this.getStars();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getStars: function() {
      let score = this.data.storeInfo.score;
      let intNum = parseInt(score);
      let starsinfo = [];
      let i = 0;
      for (i = 0; i < intNum; i++) {
        starsinfo.push('icon-xingxing-copy');
      }
      let floatNum = score - intNum;
      if (floatNum > 0) {
        starsinfo.push('icon-xing1');
        i++;
      } else {
        starsinfo.push('icon-xingxing-copy-copy');
        i++;
      }
      for (; i < 5; i++) {
        starsinfo.push('icon-xingxing-copy-copy');
      }
      this.setData({
        stars: starsinfo
      })
    },
    showActive() {
      if (this.data.storeInfo.actives.length > 2) {
        this.setData({
          showAll: !this.data.showAll
        })
      } else {
        this.triggerEvent('select', this.data.storeInfo.storeId);
      }
    },
    selectStore() {
      this.triggerEvent('select', this.data.storeInfo.storeId);
    }
  }
})