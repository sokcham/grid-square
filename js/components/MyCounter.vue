<template>
    <div>
        <transition>
            <div class="counter" v-show='show'>
                Counter test {{ time }}
            </div>
        </transition>
        <button class="btn btn-default" @click="onClick">
            Click me
        </button>
        <slot>
            This is from counter component or can be replaced.
        </slot>
    </div>
</template>

<script>
    export default 
    {
        name: "mycounter-component",
        props: 
        {
            starttime: {
                type: Number,
                default: 100,
                required: false
            }
        },
        data: function () {
            return { 
                time: this.starttime,
                show: true
            };
        },
        created: function () {
            setInterval(() => {
                this.time++;
            }, 1000);
        },
        methods: 
        {
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