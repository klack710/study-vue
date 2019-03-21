var app = new Vue({
  el: "#app",
  data: {
    link_list: {
      hello: {
        link_url: "hello/index.html",
        link_name: "hello"
      },
      bind_click: {
        link_url: "bind_click/index.html",
        link_name: "bind_click"
      },
      data: {
        link_url: "data/index.html",
        link_name: "data"
      }
    }
  }
});
