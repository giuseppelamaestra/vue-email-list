const { createApp } = Vue

createApp({
  data() {
    return {
      mail: '',
    }
  },

  methods:{
    getNewRandomMail(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(response){
            const result = response.data
        }
        )
    }
  },
   


}).mount('#app')


//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista usando Vue e Axios 
//come visto a lezione.
