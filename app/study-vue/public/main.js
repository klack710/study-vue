var app = new Vue({
  el: "#app",
  data: {
    link_list: {
      hello: {
        href: "hello/index.html",
        text: "hello"
      },
      bind_click: {
        href: "bind_click/index.html",
        text: "bind_click"
      },
      data: {
        href: "data/index.html",
        text: "data"
      },
      battle: {
        href: "battle/index.html",
        text: "battle"
      },
      computed: {
        href: "computed/index.html",
        text: "computed"
      },
      sort_list: {
        href: "sort_list/index.html",
        text: "sort_list"
      },
    }
  }
});
