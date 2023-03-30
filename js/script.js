const {createApp} = Vue;

createApp({
    data(){
        return {
            shopList: [
                {
                    name: 'pane',
                    completed: false
                },
                {
                    name: 'acqua',
                    completed: false
                }
            ],
            newIngredient: ''
        }
    },
    methods: {
        add(){
            const newItem = {
                name: this.newIngredient,
                completed: false
            }
            this.shopList.push(newItem);
        }  
    }
}).mount('#app');