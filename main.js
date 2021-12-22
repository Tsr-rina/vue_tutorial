// コンストラクタ関数Vueを使ってルートインスタンスを作成する
// アプリケーションで使用したいデータはdataオプションへ登録していく

// todo-itemよ呼ばれる新しいコンポーネントを定義
Vue.component('todo-item',{
    props: ["todo"],
    template: '<li>{{ todo.text }}</li>'
})

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
})

var app2 = new Vue({
    el:'#app-2',
    data:{
        message2:'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen: true
    }
})

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            { text: 'Learn JavaScript', id:'1' },
            { text: 'Learn Vue', id:'2' },
            { text: 'Build Something awesome', id:'3' }
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message: 'Hello Vue.js!'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data: {
        message:'Hello Vue!'
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList:[
            { id:0, text:'Vegetable'},
            { id:1, text:'Chese' },
            { id:2, text:"Whatever else humans are supposed to eat "}
        ]
    }
})




