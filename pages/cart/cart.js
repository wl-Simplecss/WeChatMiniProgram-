// pages/cart/cart.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1:[
      { length:2,
        orderNumber:32451,
        status:3,
        actualTotal:21.2,
        orderItemDtos:{ 
          item1:{
            prodName:"麻辣香锅",
            skuName:"加麻加辣",
            pic:"../../images/malaxiangguo.png" ,
            price:21.2 ,
            prodCount: 2
          },
          item2:{
            prodName:"麻辣香锅",
            skuName:"加麻加辣",
            pic:"../../images/malaxiangguo.png" ,
            price:21.2 ,
            prodCount: 2
          }
       }
      },
      { length:1,
        orderNumber:32452,
        status:3,
        actualTotal:21.2,
        orderItemDtos:{ 
          item1:{
            prodName:"麻辣香锅",
            skuName:"加麻加辣",
            pic:"../../images/malaxiangguo.png" ,
            price:21.2 ,
            prodCount: 2
          }
       }
      }
    ],

    list:[
      { length:1,
        orderNumber:32451,
        status:3,
        actualTotal:21.2,
        orderItemDtos:{ 
          item1:{
            prodName:"麻辣香锅",
            skuName:"加麻加辣",
            pic:"../../images/malaxiangguo.png" ,
            price:21.2 ,
            prodCount: 2
          }
       }
      },
      { length:1,
        orderNumber:32452,
        status:3,
        actualTotal:21.2,
        orderItemDtos:{ 
          item1:{
            prodName:"麻辣香锅",
            skuName:"加麻加辣",
            pic:"../../images/malaxiangguo.png" ,
            price:21.2 ,
            prodCount: 2
          }
       }
      }
    ],
    current: 1,
    pages: 1,
    sts: 0,
    flag:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      let storeinfor=wx.getStorageInfoSync();
      console.log("information1:",storeinfor)
      if(storeinfor.keys.indexOf("myOrder")==-1){
        wx.setStorageSync('myOrder', this.data.list)
      }
      console.log("test2",this.data.list)
      this.setData({
        flag:1
      });

    if (options.sts) {
      this.setData({
        sts: options.sts
      });
      this.loadOrderData(options.sts);
    } else {
      this.loadOrderData(0);
    }
  },

  /**
   * 状态点击事件
   */
  onStsTap: function(e) {
    var sts = e.currentTarget.dataset.sts;
    console.log("onStsTap:"+sts)
    this.setData({
      sts: sts
    });
    this.loadOrderData(sts, 1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.current < this.data.pages) {
      this.loadOrderData(this.data.sts, this.data.current + 1);
    }
  },




  /**
   * 取消订单
   */
  onCancelOrder: function(e) {
    var ths=this
    var list=wx.getStorageSync('myOrder') || [];
    for (var i = 0; i < list.length; i++) {
      console.log(list[i].orderNumber);
      if (list[i].orderNumber == e.currentTarget.dataset.ordernum) {
        list[i].status = 4;
        console.log("订单状态已修改为 4");
        break;
      }
    }
    if (i === list.length) {
      console.log("未找到指定的订单");
    }
    this.setData({
      list: list
    });
    ths.loadOrderData(ths.data.sts)
    wx.setStorageSync('myOrder',list)

  },

  /**
   * 付款
   */
  onPayAgain: function(e) {
    var ths=this
    var list=wx.getStorageSync('myOrder') || [];
    for (var i = 0; i < list.length; i++) {
      console.log(list[i].orderNumber);
      if (list[i].orderNumber == e.currentTarget.dataset.ordernum) {
        list[i].status = 2;
        console.log("订单状态已修改为 2");
        break;
      }
    }
    if (i === list.length) {
      console.log("未找到指定的订单");
    }

    this.setData({
      list: list
    });
    ths.loadOrderData(ths.data.sts)
    wx.setStorageSync('myOrder',list)
    
  },



  /**
   * 确认收货
   */
  onConfirmReceive: function(e) {
    var ths = this;
    wx.showModal({
      title: '',
      content: '我已收到货？',
      confirmColor: "#eb2444",
      success(res) {
        if (res.confirm) {
          var list=wx.getStorageSync('myOrder') || [];
          for (var i = 0; i < list.length; i++) {
            console.log(list[i].orderNumber);
            if (list[i].orderNumber == e.currentTarget.dataset.ordernum) {
              list[i].status = 5;
              console.log("订单状态已修改为 5");
              break;
            }
          }
          if (i === list.length) {
            console.log("未找到指定的订单");
          }
          ths.setData({
            list: list
          });

          wx.setStorageSync('myOrder',list)

          ths.loadOrderData(ths.data.sts)
        
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

//删除已完成||已取消的订单
  delOrderList: function(e) {
    var ths = this
    wx.showModal({
      title: '',
      content: '确定要删除此订单吗？',
      confirmColor: "#eb2444",
      success(res) {
        if (res.confirm) {
          var list=wx.getStorageSync('myOrder') || [];
          var index = -1;
          for (var i = 0; i < list.length; i++) {
            if (list[i].orderNumber === e.currentTarget.dataset.ordernum) {
              index = i;
              break;
            }
          }
          if (index >= 0) {
            console.log("订单已删除",list.length);
            list.splice(index, 1);
            console.log("订单已删除",list.length);
          } else {
            console.log("未找到指定的订单");
          }

          ths.setData({
            list: list
          });
          wx.setStorageSync('myOrder',list)
          ths.loadOrderData(ths.data.sts)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  loadOrderData: function(sts) {
    var list1=wx.getStorageSync('myOrder')||[];
    var filteredList = [];  
    for (var i = 0; i < list1.length; i++) {
      if (list1[i].status == sts||sts==0) {
        filteredList.push(list1[i]);
      }
    }
   var pagnumber=this.data.pagnumber;
   var curr=this.data.current;
    this.setData({
      list: filteredList,
      pages: pagnumber,
      current: curr
    });
  },
})