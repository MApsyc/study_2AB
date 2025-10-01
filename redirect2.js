define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		noSubmit:true, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Grazie per la tua partecipazione!',
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
      questions : [
          {
            type: 'info',
            stem: 
            ' '
            }
        ] 
    }]);
 return API.script;
});









