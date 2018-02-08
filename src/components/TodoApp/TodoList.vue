<template>
    <div class="container">
        <input type="text"/>
        <ul>
            <Todo/>
        </ul>
    </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  name: "todolist",
  data() {
    return {
      text: "Welcomeasdasd to Your Vue.js App",
      toDoValue : "",
      isComplted : false,
      isEditable : true
    };
  },
  components : {
      Todo
  }
};
</script>

<style scoped>
.container{
    background-color:rgba(0, 0, 0, 0.5);
    border-radius: 20PX 20PX 0 0;
}
</style>
