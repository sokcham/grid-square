<template>
    <ul>
        <li v-for="item in items">
            <span>{{ item.title }}</span>
            <template v-if="item.children && item.children.length > 0">
                <name-it :items="item.children"></name-it>
            </template>
        </li>
    </ul>
</template>

<script>
    export default 
    {
        name: "nameIt",
        created: function () {
            this.initialize();
        },
        props: 
        {
            items: {
                type: Array
            }
        },
        data: function () {
            return {
                title: this.myTitle
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
            onClick: function () {
                this.show = !this.show;
            }
        }
    }
</script>

<style lang="sass">
    $blue: #3498db;

    $primary-backcolor: $blue;

    .my-child2
    {
        background-color: $primary-backcolor;
        padding: 10px;
    }
</style>