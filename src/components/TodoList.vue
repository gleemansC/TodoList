<template>
  <div>
    <Thingdo></Thingdo>
    <Done></Done>
  </div>
</template>

<script>
import Thingdo from './body/Thingdo.vue'
import Done from './body/Done.vue'
export default {
  name: "",
  components: {
    Thingdo,
    Done
  },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style>
</style>