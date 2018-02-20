<template>
    <li>        
        <input type="checkbox" v-model="isComplted"/>
        <input type="text" v-model="text" :disabled="isComplted || !isEditable"/>
        <button v-if="!isComplted && !isEditable" v-on:click="isEditable = !isEditable">수정</button>
        <template v-else-if="!isComplted && isEditable">
          <button v-on:click="isEditable = !isEditable">등록</button>
          <button v-on:click="isEditable = !isEditable">삭제</button>
        </template>
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
      isEditable: false,
      inputCondition: this.isComplted && this.isEditable
    };
  }
};
</script>

<style scoped>
li {
}
</style>
