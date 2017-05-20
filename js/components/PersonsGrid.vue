<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="item in items">
                <tr class="vsc-table-row-head">
                    <td>
                        {{ item.id }}
                    </td>
                    <td>
                        {{ item.name }}
                    </td>
                    <td>
                        {{ item.username }}
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default 
    {
        created: function () {
            this.getItems(this.filterKey);
        },
        props: 
        {
            header: {
                type: Array,
                required: false
            },
            filterKey: {
                type: String,
                default: "",
                required: false
            }
        },
        data: function () {
            return {
                items: Array
            };
        },
        methods: 
        {
            getItems: function (filter) {
                let url = 'https://jsonplaceholder.typicode.com/users' + this.buildParameters(filter)
                this.$http.get(url).then(
                    (response) => {
                        if (response.data) {
                            if (Array.isArray(response.data)) {
                                this.items = response.data
                            }
                            else {
                                this.items = [response.data]
                            }
                        }
                    }
                );
            },
            buildParameters: (filter) => {
                let parameters = ""

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
    $pink: #ff1493;
    .counter
    {
        color: $pink;
    }
</style>