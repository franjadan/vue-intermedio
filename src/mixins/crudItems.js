export const crudItemsMixin = {
    data() {
        return {
            items: [],
            nuevaItem: '',
            filtroItem: '',
        }
    },
    methods: {
        agregarItem(){
            this.items.unshift({title: this.nuevaItem});
            this.nuevaItem = '';
        },
        eliminarItem(indice){
            this.items.splice(indice, 1);
        }
    },
    computed: {
        itemsFiltradas(){
            return this.items.filter(item => { return item.title.includes(this.filtroItem) });
        }
    },
}