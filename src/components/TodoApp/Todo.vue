<template>
    <li>        
        <input id="completed" type="checkbox" v-model="isComplted"/>
        <label for="completed">
          <icon :name="iconName"></icon>
        </label>
        <input type="text" v-model="text" :disabled="isComplted" :class="isComplted&&'underline'"/>
        <template v-if="!isComplted">
          <button v-if="!isEditable" v-on:click="handleEditable">
            <icon name="edit"></icon>
          </button>
          <template v-else-if="isEditable">
            <button v-on:click="handleEditable">
              <icon name="pencil"></icon>
            </button>
            <button v-on:click="handleEditable">
              <icon name="trash"></icon>
            </button>
          </template>
        </template>
    </li>
</template>

<script>
export default {
  name: "todolist",
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
  }
};
</script>

<style scoped>
icon{
  color: #e23565
}
input[type="checkbox"]{
  display: none
}
button{
  background: none;
  border :0;
}
input[type="text"]{
  background: none;
  border: 0;
}
li{
  border-bottom: 1px solid #9e9eca;
  margin : 10px 0;
  padding: 5px;
}
.underline{
  text-decoration: line-through;
}
</style>
