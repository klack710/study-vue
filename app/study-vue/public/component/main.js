Vue.component('my-component', {
  template: '<p>MyComponent</p>'
});

var myComponentInApp = {
  template: '<p>MyComponentInApp</p>'
}

var myComponentWithData = {
  template: '<p>{{ message }}</p>',
  data: () => {
    return {
      message: 'messageだよ！'
    }
  }
}

var compChild = {
  template: '<p>{{ val }}</p>',
  props: ['val']
}

var monsterTemplate = {
  template: '<li>{{ name }} HP.{{ hp }}',
  props: ['name', 'hp']
}

var app = new Vue({
  el: "#app",
  data: {
    value: 'valだよ！',
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
  components: {
    'my-component-in-app': myComponentInApp,
    'my-component-with-data': myComponentWithData,
    'comp-child': compChild,
    'monster-template': monsterTemplate,
  }
});
