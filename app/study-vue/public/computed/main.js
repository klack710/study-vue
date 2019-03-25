var app = new Vue({
  el: "#app",
  data: {
    x: 800,
    y: 400
  },
  computed: {
    halfX: function () {
      return this.x / 2;
    },
    halfY: {
      get: function () {
        return this.y / 2;
      },
      set: function (value) {
        this.y = value;
      }
    }
  }
});
