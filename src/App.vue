<template>
  <component :is="layout"></component>
</template>

<script>

   import Layout from './components/Layout.vue'
   import { mapState } from 'vuex'

   export default {
    components: { Layout },
    computed: mapState(['layout'])
   }

</script>