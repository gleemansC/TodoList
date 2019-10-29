<template>
  <div id="app">
    <TodoList></TodoList>
    <Dra1></Dra1>
    <Dra2></Dra2>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import Dra1 from './components/test/dragger1'
import Dra2 from './components/test/dragger2'

export default {
  name: 'app',
  components: {
    TodoList,
    Dra1,
    Dra2
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
