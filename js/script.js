const {createApp} = Vue;

createApp({
    data(){
        return {
            shopList: [
                {
                    text: 'pane',
                    completed: false
                },
                {
                    text: 'acqua',
                    completed: false
                }
            ],
            newIngredient: ''
        }
    },
    methods: {
        add(){
            if (this.newIngredient != ''){
                const newItem = {
                    text: this.newIngredient,
                    completed: false
                }
                this.shopList.push(newItem);
                this.newIngredient = '';
            }
        },  
        remove(i){
            this.shopList.splice(i, 1);
        },
        done(i){
            this.shopList[i].completed = true
        }
    }
}).mount('#app');