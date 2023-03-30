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
            newItem: ''
        }
    },
    methods: {
                
    }
}).mount('#app');