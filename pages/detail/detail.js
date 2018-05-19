// pages/detail/detail.js
const app = getApp();//获取全局App

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageArray: [],
    present: [
      { "name": "绵云冷草", "price": 42, "id": 1 }, 
      { "name": "冷萃冰咖啡", "price": 36, "id": 2 }, 
      { "name": "焦糖玛奇朵", "price": 35, "id": 3 }, 
      { "name": "当季特饮", "price": 40, "id": 4 }, 
      { "name": "美式咖啡", "price": 27, "id": 5 }, 
      { "name": "摩卡", "price": 34, "id": 6 }
    ],
    selectCardIndex: -1, 
    toView: "",
    toLeft: 0,
    buyGift: [],
    totalPrice:0.0,
    totalNum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.mid;
    console.log(id);
    var title = app.globalData.imageArray[id].text;
    console.log(title);
    wx.setNavigationBarTitle({
    title: title,
    })
    this.setData({
      imageArray: app.globalData.imageArray
    });
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    

  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
   selectCard: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    this.setData({
      selectCardIndex: id, selectCardIndex: id,
      toView: "view" + id,
      toLeft: id * 70,
    });
   },
   clickAdd:function(event){
     const id = event.target.dataset.id;
     const { buyGift, present } = this.data;
     let newBuyGift;
     const index = buyGift.findIndex(item => item.id === id);
     const presentItem = present.find(item => item.id === id);
     if (index > -1) {
       const gift = buyGift[index];
       gift.num++;
       gift.totalPrice = gift.num * presentItem.price;
       newBuyGift = [...buyGift.slice(0, index), gift, ...buyGift.slice(index + 1)];
     } else {
       newBuyGift = buyGift.concat({ id: presentItem.id, num: 1, totalPrice: presentItem.price });
     }
     const totalPrice = newBuyGift.reduce((a, b) => a + b.totalPrice, 0.0);
     const totalNum = newBuyGift.reduce((a, b) => a + b.num, 0.0);
     console.log(newBuyGift, totalPrice);
     this.setData({ totalPrice, buyGift: newBuyGift, totalNum });
   }
})