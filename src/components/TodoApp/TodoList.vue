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
    background-color:rgba(255, 255, 255, 0.8);
    border-radius: 20PX 20PX 0 0;
    width: 50%;
    flex: 1;
    position: relative;
    margin: 0 auto;
    height: 100%;
    align-items : center;
    /* min-height: 950px; */
}
</style>
