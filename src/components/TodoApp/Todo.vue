<template>
    <li>
        <input type="text"/>  
    </li>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      text: "Welcomeasdasd to Your Vue.js App",
      toDoValue: "",
      isComplted: false,
      isEditable: true
    };
  }
};
</script>

<style scoped>

</style>
