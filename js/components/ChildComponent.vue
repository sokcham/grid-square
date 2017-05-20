<template>
    <div class="my-child">
        <p>This is child <strong>{{ title }}</strong> component</p>
        <p v-if="childData">Data received from parent on created: {{ childData.text }}</p>
        <p v-if="hasDate">Received at: {{ childData.date }}</p>
        <p><button type="button" @click="onClick">Send data to parent</button></p>
        <slot><p>Note from Child</p></slot>
    </div>
</template>

<script>
    export default 
    {
        created: function () {
            this.initialize();
        },
        props: 
        {
            title: {
                type: String,
                required: true
            },
            childObject: {
                type: Object,
                required: false
            }
        },
        data: function () {
            return {
                childData: this.childObject
            };
        },
        methods: 
        {
            initialize: () => {
                let parameters = ""
                let filter = ""

                if (filter) {
                    parameters = "?username=" + filter
                }

                return parameters
            },
            onClick: function (event) {
                this.$emit("childClick", event, `A message sent from child ${this.title} at ` + Date())
            }
        },
        computed:
        {
            hasDate: function () {
                return this.childData && this.childData.hasOwnProperty('date')
            },
            hasText: function () {
                return this.childData && this.childData.text
            }
        }
    }
</script>

<style lang="sass">
    
</style>