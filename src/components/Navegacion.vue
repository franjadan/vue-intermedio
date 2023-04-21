<template>
    <div>
        <Logo></Logo>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue'
    export default {
        components: {
            Logo
        }
    }
</script>