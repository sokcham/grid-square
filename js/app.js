
//import vueResource from 'vue-resource';

//Vue.use(vueResource);

//Vue.component('persons-grid', require('./components/PersonsGrid.vue'));

import { Book } from './Book.js'

import MyCounter from './components/MyCounter.vue'
import HelloVue from './components/HelloVue.vue'
import MyParent from './components/ParentComponent.vue'
import TreeVue from './components/ChildTwoComponent.vue'

new Vue({
  el: "#foo",
  components: {
    MyCounter
  },
  data: function () {
    return {
      messageApp: 'mymessage2',
      timeApp: 0
    }
  },
  methods: {
    doSomething: function (person) {
      /*alert('do something');*/
      console.log("call from doSomething");
      this.timeApp = person.name
    }
  }
});

new Vue({
  el: '#app',
  components: {
    TreeVue
  },
  data: function () {
    return {
      trees: [
        {title: 'one', children: [
          {title: 'one-a'},
          {title: 'one-b', children: [
            {title: 'one-b1'},
            {title: 'one-b2'}
          ]}
        ]},
        {title: 'two'},
        {title: 'three', children: [
          {title: 'three-a'}
        ]}
      ]
    };
  }
})

new Vue({
  el: "#my-element",
  components: {
    HelloVue,
    MyParent
  },
  data: function () {
    return {
      book1: new Book(12, new Date(), 'John Doe 3')
    }
  }
});