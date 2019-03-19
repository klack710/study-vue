var app = new Vue({
    el: '#app',
    data: {
        list: ['りんご', 'ばなな', 'いちご'],
        message: 'ここに書き込んだ文字に変わるよ！',
        num: 0,
        is_show: false,
        transition_show: false
    },
    methods: {
        handleClick: function(event) {
            app.list.push('おれんじ')
        },
        showMessage: function(event) {
            app.is_show = true
        }
    }
})
