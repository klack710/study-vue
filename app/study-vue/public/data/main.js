var app = new Vue({
  el: "#app",
  data: {
    init_message: "初期文字",
    text_content_prop: "text-contentにpropでバインド",
    link_name: "topに戻る"
  },
  methods: {
    handleClick: function (event) {
      app.list.push("おれんじ");
    }
  }
});
