function suitelet(request, response)
{

	  if (request.getMethod() == 'GET' )
	  {
	    //Create the form and add fields to it 
	    var form = nlapiCreateForm("Suitelet - GET call" );
	    form.addField('custpage_field1', 'text', 'CUSTOMER NAME' ).setDefaultValue('nidhi malik' );
	    form.addField('custpage_field2', 'email', 'E-MAIL' ).setDefaultValue('nidhi@webbeegmail.com');
	    form.addField('custpage_field3', 'integer','CREDIT-LIMIT' ).setDefaultValue(20);
	    form.addPageLink('crosslink', 'JavaTpoint', 'https://www.javatpoint.com'); 
        
	    form.addSubmitButton('SUBMIT' );
	      form.addResetButton("RESET"); 
        form.addSubList('custpage_sublist','list','mylist');
	    response.writePage(form);
	    }
	  //POST call
	  else
	  {
	    var form = nlapiCreateForm("Suitelet - POST call" );
	      
	    //create the fields on the form and populate them with values from the previous screen 
	    var resultField1 = form.addField('custpage_res1', 'text', 'CUSTOMER NAME ' );
	    resultField1.setDefaultValue(request.getParameter('custpage_field1' ));
	    resultField1.setDisplayType('inline' );
	      
	    var resultField2 = form.addField('custpage_res2', 'email', 'E-MAIL ' );
	    resultField2.setDefaultValue(request.getParameter('custpage_field2' ));
	    resultField2.setDisplayType('inline' );
	      
	    var resultField3 = form.addField('custpage_res3', 'integer',  'CREDIT-LIMIT' );
	    resultField3.setDefaultValue(request.getParameter('custpage_field3' ));
	    resultField3.setDisplayType('inline' );
	      
	    response.writePage(form);
	  }


}
