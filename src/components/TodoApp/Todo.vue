<template>
    <li>        
        <input id="completed" type="checkbox" v-model="isComplted"/>
        <label for="completed">
          <icon :name="iconName"></icon>
        </label>
        <input type="text" v-bind:value="todo.toDoValue" :disabled="isComplted" :class="isComplted&&'underline'"/>
        <template v-if="!isComplted">
          <button v-if="!isEditable" @click="handleEditable">
            <icon name="edit"></icon>
          </button>
          <template v-else-if="isEditable">
            <button @click="handleEditable">
              <icon name="pencil"></icon>
            </button>
            <button @click="deleteTodo(todo.id)">
              <icon name="trash"></icon>
            </button>
          </template>
        </template>
    </li>
</template>

<script>
export default {
  name: "todolist",
  props: ["todo","deleteTodo"],
  data() {
    return {
      text: "할일",
      toDoValue: "",
      isComplted: false,
      isEditable: false,
      iconName: "circle"
    };
  },
  methods: {
    handleEditable: function() {
      this.isEditable = !this.isEditable;
    }
  },
  watch: {
    isComplted: function(val) {
      this.iconName = val ? "check-circle" : "circle";
    }
  },
  mounted: () => {
    console.log("todo mounted");
  }
};
</script>

<style scoped>
icon {
  color: #e23565;
}
input[type="checkbox"] {
  display: none;
}
button {
  background: none;
  border: 0;
}
input[type="text"] {
  background: none;
  border: 0;
}
li {
  border-bottom: 1px solid #9e9eca;
  margin: 10px 0;
  padding: 5px;
}
.underline {
  text-decoration: line-through;
}
</style>
