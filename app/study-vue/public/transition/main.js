var app = new Vue({
  el: "#app",
  data: {
    show: true,
    list: [{
        id: 1,
        name: 'りんご',
        price: 100
      },
      {
        id: 2,
        name: 'ばなな',
        price: 200
      },
      {
        id: 3,
        name: 'いちご',
        price: 400
      },
      {
        id: 4,
        name: 'おれんじ',
        price: 300
      },
      {
        id: 5,
        name: 'めろん',
        price: 500
      }
    ],
    order: false,
  },
  computed: {
    sortedList: function () {
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    },
  }
});
