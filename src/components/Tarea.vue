<template>
    <div id="tarea">
        <div>
            <h3>{{ titulo }} 
            <!--<button @click="$emit('eliminarItem')">Eliminar</button></h3>-->
            <button @click="mostrarDetalles(titulo)">Ver detalles</button></h3>
        </div>
    </div>
</template>

<script>
    //import EventBus from '@/EventBus';
    import state from '@/state';
    export default {
        name: 'Tarea',
        props: ['titulo'],
        methods: {
            //Acción
            mostrarDetalles(titulo){
                //EventBus.$emit('detalles', titulo);
                state.guardarTarea(titulo);
            }
        }
    }
</script>

<style lang="scss" scoped>
    h3{
        color: $corporativo;
    }

    button{
        background-color: $alternativo;
    }
</style>