<template>
  <div>
    <ElTable :data="TableColumn">
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
  components: {},
  props: {},
  data () {
    return {
      tableData: []
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