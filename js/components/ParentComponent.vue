<template>
    <div class="my-parent">
        <p>{{ title }}</p>
        <p>Book: {{ myBook.author }}</p>
        <p>{{ dataForChildOne.date }}</p>
        <div v-if="childMessage">
            <p>{{ childMessage }}</p>
        </div>
        <p><button type="button" @click="onClickSendToChild($event, 1)">Send data to child One</button></p>
        <my-child title="One" :child-object="dataForChildOne" @childClick="onChildClick">Note replace by parent</my-child>
        <my-child title="Two" @childClick="onChildClick"></my-child>
        <a-new-component :items="trees"></a-new-component>
        <input type="text" v-model="currentView" value="currentView">
        <component v-bind:is="currentView" title="This One"></component>
    </div>
</template>
<!-- Comment -->
<script>
    import { useThisMixin } from './myMixins.js'
    import { Book } from '../Book.js'

    import MyChild from './ChildComponent.vue'
    import ANewComponent from './ChildTwoComponent.vue'

    export default 
    {
        components:
        {
            MyChild,
            ANewComponent
        },
        mixins: [useThisMixin],
        created: function () {
            this.initialize();
        },
        // other properties
        props: 
        {
            myTitle: {
                type: String,
                default: "",
                required: false
            },
            myBook: {
                type: Book
            },
            // one type validation only
            myProp1: Date,
            // multiple types validation
            myProp2: [String, Number],
            // with specific validation
            myProp3: {
                type: Number,
                default: 100,
                required: false,
                validator: function (value) {
                    return value < 50 || value > 70
                }
            }
            /* 
            TYPE can be one of these values:
            String
            Number
            Boolean
            Function
            Object
            Array
            */
        },
        data: function () {
            return {
                title: this.myProp1,
                dataForChildOne: {
                    date: this.myBook.title, //Date.now(),
                    text: "Pass value to child One through props"
                },
                childMessage: "",
                currentView: "",
                trees: null,
            };
        },
        methods: 
        {
            foo: function () {
                console.log('foo from parent')
            },
            initialize: function () {
                let parameters = ""
                let filter = ""
                let x = filter ? 'df' : 'fs'
                if (filter) {
                    parameters = "?username=" + filter
                }
                this.foo()

                this.trees = [
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

                return parameters
            },
            onClick: function () {
                this.show = !this.show;
            },
            onClickSendToChild(event, text) {
                this.dataForChildOne.date = new Date()
            },
            onChildClick(event, text) {
                this.childMessage = text
            }
        }
    }
</script>

<style lang="sass">
    
</style>