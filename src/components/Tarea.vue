<template>
    <div id="tarea">
        <div>
            <h3>{{ titulo }} <button @click="$emit('eliminarTarea')">Eliminar</button></h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tarea',
        props: ['titulo'],
    }
</script>