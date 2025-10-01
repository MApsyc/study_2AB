define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		noSubmit:true, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: ' ',
		decline: false,
		autoFocus:true
	});
    /**
   * Question prototypes
   */
   API.addQuestionsSet('basicSelect',{
    type: 'selectOne',
    autoSubmit:'true',
    maxWidth: '60%'
  });
  
  
   API.addSequence([
    {
      inherit : 'basicPage',
      questions : [{
        type: 'info',
        stem: 
        '<p>Sei attualmente iscritta/o ad un corso di formazione universitaria in ambito STEM (Scienze, Tecnologie, Ingegneria, Matematica), ad esempio, Ingegneria, Matematica, Statistica, Analisi dei Dati, Data Science, Fisica, Chimica, Biologia, Biotecnologie, Geologia, Geoscienze, Astronomia, Informatica, Scienze e tecnologie ambientali o altre discipline STEM?</p>'
	   },
        

    // Note: Feel free to adapt language based on your consent form.
    {
        inherit : 'basicSelect',
        name: 'usercriterio2',
        description: '<b>Clicca due volte sul tasto per selezionare la tua risposta<p>',
        answers: [
            {text: 'Sì', value: true},
            {text: 'No', value: false}
        ]
      }
      ]
    }
    
      
     ]);
 return API.script;
});







