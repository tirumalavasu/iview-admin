<template>
  <div>
    <Card>
      <h2>ID: {{ $route.query.id }}</h2>
      <Button @click="close">Call the closeTag method to close this page</Button>
    </Card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'query',
  methods: {
    ...mapMutations([
      'closeTag'
    ]),
    close () {
      /**
        * If the closeTag method is called, the object parameters passed in the ordinary page only need to write the name field.
        * If it is a dynamic route and a parameter-based route, you need to pass in the query or params field to distinguish between the closed parameters and the number of pages.
        */
      this.closeTag({
        name: 'query',
        query: {
          id: this.$route.query.id
        }
      })
    }
  }
}
</script>

<style>

</style>
