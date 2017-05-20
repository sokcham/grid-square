<template>
  <div class="hello-vue">
    {{ message }}
    {{ from("John VI") }}
    {{ bar }}
  </div>
</template>

<script>
  export default
  {
    props: {
      bar: {
              type: String,
              default: "_abc",
              required: false
            }
    },
    data: function () {
      return {
        message: "Hello Vue!",
        from: (name) => " from " + name
      };
    }
  }
</script>

<style>
  .hello-vue
  {
    color: blue;
  }
</style>