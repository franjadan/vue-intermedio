<template>
    <div>
        <h1>Items</h1>
        <input type="text" placeholder="Añadir item" v-model="nuevaItem">
        <input type="button" value="Agregar item" @click="agregarItem">
        <br/>
        <br/>
        <input type="search" placeholder="Filtrar items" v-model="filtroItem">
        <ul>
            <li 
            v-for="(item, $indice) in itemsFiltradas" 
            :key="item.id" 
            @click="verPost(item.id)"
            @eliminarItem="eliminarItem($indice)">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    import postService from '../services/postService';
    import { crudItemsMixin } from '../mixins/crudItems.js';

    export default {
        name: 'PostsList',
        mixins: [
            crudItemsMixin
        ],
        created(){
            return postService.get()
                .then(resultado => this.items = resultado.data);
        },
        methods: {
            verPost(postId) {
                this.$router.push({
                    name: 'post',
                    params: {
                        id: postId
                    }
                });
            }
        }
    }
</script>

<style scoped>
    li {
        cursor: pointer;
    }
</style>