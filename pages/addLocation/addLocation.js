// pages/addLocation/addLocation.js
var value = [0, 0, 0]; //数据位置下标
var addressList = null;
Page({
  data: {
    myregion: ["北京市", "市辖区", "东城区"],
    transportValues: ["时间不限", "下单一小时后", "下单一个半小时后"],
    transportIndex: 0,
    checked:false
  },
  /**

   * 生命周期函数--监听页面加载

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
  onLoad: function(options) {},
  
  /**

   * 生命周期函数--监听页面显示

   */
  onShow: function() {},

  bindTransportDayChange: function(e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      transportIndex: e.detail.value
    })
  },
  bindRegionChange:function(e){
    console.log(e)    //查看事件返回值
    this.setData({
        myregion:e.detail.value
    })    //重新复制给myregion
  },
 
  saveAddress: function(e) {

    var consignee = e.detail.value.consignee;

    var mobile = e.detail.value.mobile;

    var transportDay = e.detail.value.transportDay;

    var detailAddress = e.detail.value.detailAddress;
    if(consignee==''){
        wx.showToast({
          title: '请输入姓名',
          image:'/icon/error.png'
        })
        return
    }
    else if(mobile==''){
        wx.showToast({
          title: '请输入手机号',
          image:'/icon/error.png'
        })
        return
    }
    else if(detailAddress==''){
        wx.showToast({
          title: '请输入详细地址',
          image:'/icon/error.png'
        })
        return
    }
    else if(mobile.length!=11){
        wx.showToast({
            title: '手机号格式错误',
            image:'../../icons/error.png'
          })
          return
    }
    var arr = wx.getStorageSync('addressList') || [];
    console.log("arr,{}", arr);
    addressList = {
      consignee: consignee,
      mobile: mobile,
      myregion: this.data.myregion,
      detailAddress:detailAddress,
      transportDay: transportDay,
      checked:this.data.checked
    }
      arr.push(addressList);

    wx.setStorageSync('addressList', arr);
    wx.navigateBack({
    })
  }
})