# error

* 'v-for' directives require 'v-bind:key' directives.

* react 와 마찬가지로 배열을 loop 로 렌더링할시 key 값을 지정해줘야 된다.

```vue
<li v-for="(item , index) in items" :key="index">
    <a :href="item.path">
        {{item.name}}
    </a>
</li>
```

