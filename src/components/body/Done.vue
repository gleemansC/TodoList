<template>
  <div>

    <span>该做的</span>
    <ElTable :data="doneData">
      <ElTableColumn label="想干啥"></ElTableColumn>
      <ElTableColumn label="干到哪"></ElTableColumn>
      <ElTableColumn label="哪天"></ElTableColumn>
      <ElTableColumn label="急不急"></ElTableColumn>
    </ElTable>
  </div>
</template>

<script>

export default {
  name: "",
  components: {

  },
  props: {},
  data () {
    return {
      doneData: [],
      myArray: [{
        id: 'o',
        name: 'c1'
      },
      {
        id: 'n',
        name: 'c2'
      }, {
        id: 'e',
        name: 'c3'
      }]
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