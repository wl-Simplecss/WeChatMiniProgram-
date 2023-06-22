// pages/location/location.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    addressList:[],
    aa:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var currentPages=getCurrentPages();
      var prePages=currentPages[currentPages.length-2];
    var arr = wx.getStorageSync('addressList') || [];
    // 更新数据  
    this.setData({
      addressList: arr,
      nickName:"张三"
    });


  },
  /**
   * 生命周期函数--监听页面显示
   */
  onPullDownRefresh: function () {

      this.onRefresh();
  },

  onRefresh:function(){
      //导航条加载动画
      wx.showNavigationBarLoading();
      setTimeout(function () {
        wx.hideNavigationBarLoading();
        //停止下拉刷新
        wx.stopPullDownRefresh();
      }, 2000);
    },
  onShow: function () {
    this.onLoad();
  },
  onUnload: function () {
      var arr = this.data.addressList;
      wx.setStorageSync('addressList', arr);
  },
  change:function(e){
      var items = this.data.addressList;
      for (var i = 0; i < items.length; i++){
        if (items[i].mobile == this.data.aa){
          for (var j = 0; j < items.length; j++) {
            if (items[j].checked && j != i) {
                items[j].checked = false;
              }
          }
          items[i].checked = !(items[i].checked);
        }
      }
      this.setData({
        addressList: items
      });
  },
  addAddress:function(){
      if(this.data.nickName=='点击授权登录'){
          wx.showToast({
            title: '请登录',
            image:'/icon/interjective.png'
          })
          return
      }
    wx.navigateTo({ url: '/pages/addLocation/addLocation' });
  },
  radioChange: function (e) {
        this.data.aa = e.detail.value;
      },
  /* 删除item */
  delAddress: function (e) {
      var id = e.currentTarget.dataset.id//数组下标
    this.data.addressList.splice(id, 1);
    // 更新data数据对象  
    if (this.data.addressList.length > 0) {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', this.data.addressList);
    } else {
      this.setData({

        addressList: this.data.addressList
      })

      wx.setStorageSync('addressList', []);
    }
 

  }

})