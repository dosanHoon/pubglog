<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>
          <input type="text" v-model="nickname"/>
        <button v-on:click="searchLog(nickname)">조회</button>
        </p>
    <div>
</template>
