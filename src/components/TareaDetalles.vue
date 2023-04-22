<template>
    <div>
        <h1>Los detalles:</h1>
        <p>{{ detalles.tituloTarea }}</p>
    </div>
</template>

<script>
    //import EventBus from '@/EventBus';
    import state from '@/state';
    export default {
        name: 'TareaDetalles',
        created(){
            //EventBus.$on('detalles', recibido => this.detalles = recibido);
            this.detalles = state.state;
        },
        data() {
            return {
                detalles: '',
            }
        }
    }
</script>

<style scoped>
    div {
        position: fixed;
        width: 500px;
        height: 200px;
        top: 0;
        left: 0;
        padding: 20px;
        background: (255,255,255,.7);
        border: 1px solid black;
    }
</style>