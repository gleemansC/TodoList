<template>
  <div>
    <ElTable :data="tableData"
             @cell-mouse-enter="mouseEnter"
             @cell-click="colClick">
      <ElTableColumn label="想干啥"
                     prop="todo">
        <template slot-scope="scope">
          <ElInput @keydown.native="keydown($event, scope.row)"
                   v-if="scope.row.todoEdit"
                   v-model="scope.row.todo"></ElInput>
          <ElInput v-else
                   disabled
                   v-model="scope.row.todo"></ElInput>
        </template>

      </ElTableColumn>
      <ElTableColumn label="干到哪"
                     prop="status"></ElTableColumn>
      <ElTableColumn label="哪天"
                     prop="dueDate"></ElTableColumn>
      <ElTableColumn label="急不急"
                     prop="priority"></ElTableColumn>
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
      tableData: [
        { todo: "1", status: "1", dueDate: "1", priority: "1", todoEdit: false },
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    mouseEnter (row, column, cell, event) {
      console.log(row);
      console.log(column);
      console.log(cell);
      console.log(event);
    },
    colClick (row) {
      row.todoEdit = true
    },
    keydown (event, row) {
      if (event.keyCode === 13) {
        row.todoEdit = false
      }
    }
  },
  created () { },
  mounted () { }
};
</script>
<style>
</style>