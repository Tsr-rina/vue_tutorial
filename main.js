// コンストラクタ関数Vueを使ってルートインスタンスを作成する
// アプリケーションで使用したいデータはdataオプションへ登録していく

// todo-itemよ呼ばれる新しいコンポーネントを定義
// グローバルに定義する
Vue.component('todo-item',{
    // Props→親コンポーネントから子コンポーネントに文字列、数値、配列やオブジェクトをなどの値を渡すことができる
    props: ["todo"],
    template: '<li>{{ todo.text }}</li>'
})

var data = { a:1 }

// 以下で設定すればデータの変更はされなくなる
// Object.freeze(data)

// vue関数で新しいVueインスタンスを作成することによって起動する
var vm = new Vue({
    data:data
})

const app = new Vue({
    el: '#app-1',
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

var myComponent = {
    template: '<p>MyLocalComponent</p>'
}

new Vue({
    el:'#local-component',
    components:{
        'my-component': myComponent
    }
})




