<template>
  <div style="background-color:#777777">
    <span>下方可拖拽</span>
    <draggable v-model="myArray"
               group="people"
               @start="drag=true"
               @end="drag=false">
      <div v-for="element in myArray"
           :key="element.id">{{element.name}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data () {
    return {
      myArray: [{
        id: 'o',
        name: '测试1'
      }, {
        id: 'two',
        name: '测试2'
      }, {
        id: 'three',
        name: '测试3'
      }]
    }
  }
}
</script>

<style>
</style>