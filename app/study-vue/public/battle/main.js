var app = new Vue({
  el: "#app",
  data: {
    monster_list: {
      slime: {
        id: 1,
        name: "スライム",
        hp: "100",
      },
      goblin: {
        id: 2,
        name: "ゴブリン",
        hp: "200",
      },
      dragon: {
        id: 3,
        name: "ドラゴン",
        hp: "500",
      }
    }
  },
  methods: {
    doAttack: function (index) {
      this.monster_list[index].hp -= 10;
    },
  }
});
