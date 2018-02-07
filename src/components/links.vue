<template v-for="item in items">
    <b-nav-item :to="item.path">
        {{item.name}}
    </b-nav-item>
</template>

<script>
    export default {
        name: "Links",
        created() {
            this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name,
                path: route.path
            });
            });
        },
        data() {
            return {
            items: []
            };
        }
    };
</script>