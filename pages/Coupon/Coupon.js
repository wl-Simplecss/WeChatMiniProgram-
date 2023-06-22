// pages/Coupon/Coupon.js
Page({

  /**
 1. 页面的初始数据
   */
  data: {
    items: [
      {value: '1', name: '话费充值抵用券',number:5,time:"截止2023.7.7"},
      {value: '2', name: '洗护用品抵用券',number:10, time:"截止2023.7.7",checked: 'false'},
      {value: '3', name: '电子产品抵用券',number:100,time:"截止2023.7.7"},
      {value: '4', name: '食物饮品抵用券',number:5,time:"截止2023.7.7"},
      {value: '5G', name: '家具产品抵用券',number:200,time:"截止2023.7.7"},
      {value: '6', name: '服饰服装抵用券',number:20,time:"截止2023.7.7"},
    ],
    resultvalue:0,
    coupname:" "
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    var resultvalue = this.data.resultvalue
    var coupname = this.data.coupname
    var res = 21
    var coupn = "hello"
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
      if(items[i].checked==1){
        res=items[i].number
        coupn=items[i].name
        console.log(coupname)
      }
    }

    this.setData({
      resultvalue:res,
      coupname:coupn
    })
  },

  storeCoupon:function(){
    var resultvalue = this.data.resultvalue
    var coupname = this.data.coupname
    if(resultvalue==0){
      wx.showToast({
        title: '领取失败',
        icon: 'none',
        duration:1500,
        mask: true
      })
    }else{
      wx.showToast({
        title: '领取成功',
        icon: 'none',
        duration:1500,
        mask: true
      })
      var myCoupon={value:resultvalue,name:coupname}
      wx.setStorageSync('myCoupon', myCoupon);

    }

  },
  /**
 2. 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
 3. 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
 4. 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
 5. 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
 6. 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
 7. 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
 8. 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
 9. 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
