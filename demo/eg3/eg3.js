Vue.component('todo-item', {
    props: ['todo'],
    template:'<div class="comp"><h2>{{todo.head}}</h2><p>{{todo.para}}</div>'
  })
  
  var app7 = new Vue({
    el: '#app',
    data: {
      list: [
        { id: 0, head: 'This is heading 1', para: 'This is para 1' },
        { id: 1, head: 'This is heading 2', para: 'This is para 2' },
        { id: 2, head: 'This is heading 3', para: 'This is para 3' },
        { id: 3, head: 'This is heading 4', para: 'This is para 4' }

      ]
    }
  })