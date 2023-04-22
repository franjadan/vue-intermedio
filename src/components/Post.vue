<template>
    <div>
        <p>Esto es un post con id {{ this.$route.params.id }}</p>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route.params.id);
            console.log(this.$route.meta.auth);
        }
    }
</script>