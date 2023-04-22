export default {
    //Estado
    state: {
        tituloTarea: '',
    },

    //Mutacion
    guardarTarea(titulo){
        this.state.tituloTarea = titulo;
    }
}