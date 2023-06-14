const { createApp } = Vue

createApp({
  data() {
    return {
      mailList : [],
      numberOfMails : 0,
    }
  },

  methods:{
    addNewEmail(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (result) => {
           this.mailList.push(result.data.response);
                
        
          });

       },
     
       generateMailList(numberOfMails){
        this.numberOfMails = numberOfMails;
        for(let i=0; i < numberOfMails; i++){
         this.addNewEmail();
        }
       },
       
   },

  created(){
    this.generateMailList(10);
    
  
   
  }

}).mount('#app')


//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista usando Vue e Axios 
//come visto a lezione.
