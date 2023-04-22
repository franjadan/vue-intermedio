<template>
    <div>
        <h1>Items</h1>
        <input type="text" placeholder="Añadir item" v-model="nuevaItem">
        <input type="button" value="Agregar item" @click="agregarItem">
        <br/>
        <br/>
        <input type="search" placeholder="Filtrar items" v-model="filtroItem">
        <Tarea 
            v-for="(item, $indice) in itemsFiltradas" 
            :key="item.id" 
            :titulo="item.title" 
            @eliminarItem="eliminarItem($indice)"
        ></Tarea>
        <TareaDetalles />
    </div>
</template>

<script>
    import todoService from '../services/todoService.js';
    import Tarea from '@/components/Tarea.vue';
    import TareaDetalles from './TareaDetalles.vue';
    import { crudItemsMixin } from '../mixins/crudItems.js';
    export default {
        name: 'Tareas',
        mixins: [
            crudItemsMixin
        ],
        created(){
            /*
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(respuesta => respuesta.json())
                    .then(datos => this.items = datos)
            .catch(error => console.error(error))
            */

            return todoService.get()
                .then(resultado => this.items = resultado.data);
        },
        components: {
            Tarea,
            TareaDetalles,
        }
    }
</script>