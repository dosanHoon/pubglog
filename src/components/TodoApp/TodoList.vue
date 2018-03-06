<template>
    <div class="container">
        <input type="text" v-model="toDoValue"/>
        <Button @click="addTodo">등록</Button>
        <ul>
            <Todo v-bind:todo="todo" v-bind:deleteTodo="deleteTodo" v-for="todo in todoList" :key="todo.id"/>
        </ul>
    </div>
</template>

<script>
import Todo from "./Todo.vue";
import uuidv1 from "uuid/v1";
import Vue from 'vue'

export default {
  name: "todolist",
  data() {
    return {
      toDoValue: "",
      todoList: {}
    };
  },
  methods: {
    addTodo() {
      let todoList = this.todoList;
      todoList = !todoList ? {} : todoList;
      const id = uuidv1();
      let newTodo = {};

      newTodo[id] = {
        id: id,
        toDoValue: this.toDoValue,
        registedDate: new Date(),
        updateDate: new Date(),
        idComplted: false
      };

      let newTodoList = {
        ...todoList,
        ...newTodo
      };

      localStorage.setItem("todoList", JSON.stringify(newTodoList));

      this.todoList = newTodoList;
    },
    deleteTodo(todoID) {
            
      Vue.delete(this.todoList, todoID);
      
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    }
  },
  watch: {
    todoList: function(val) {
      console.log("change",val)
    }
  },
  mounted: function() {
    this.todoList = JSON.parse(localStorage.getItem("todoList"));
  },
  components: {
    Todo
  }
};
</script>

<style scoped>
.container {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px 20px 0 0;
  width: 50%;
  flex: 1;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  height: 100%;
  align-items: center;
  /* min-height: 950px; */
}
</style>
