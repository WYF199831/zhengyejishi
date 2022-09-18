// pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    show: false,
    dates:[],
    formatter(day) {
      const date = day.date.getDay();
      if (date === 1||date === 3||date === 5) {
        day.bottomInfo = `.`;
      }
      return day;
    },
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}年-${date.getMonth() + 1}月-${date.getDate()}日`;
  },
  onConfirm(event) {
    console.log(event);
    const map1=event.detail;
    // const map2=map1.map(item=>{
    //   return this.formatDate(item)
    // });
    // console.log(map2);
    this.setData({
      show: false,
      date: `选择了 ${event.detail.length} 个日期`,
      dates:map1.map(item=>{
        return this.formatDate(item)
      })
    });
    console.log(this.data.dates);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})