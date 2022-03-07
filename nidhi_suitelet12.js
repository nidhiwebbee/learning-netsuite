function getRecord(request, response) {
    if(request.getMethod()=="GET"){
    
    var rectype= request.getParameter('custpage_rec');
      nlapiLogExecution('DEBUG','rectype',rectype);
      var internalid= 14591;
      nlapiLogExecution('DEBUG','internalid',internalid);
    var filters= new Array();
      filters[0]= new nlobjSearchFilter('internalid',null,'is',internalid);
      var columns = new Array();
    columns[0] = new nlobjSearchColumn('firstname');
    columns[1] = new nlobjSearchColumn('phone');
    columns[2] = new nlobjSearchColumn('email');
    columns[3] = new nlobjSearchColumn('creditlimit');
    if(rectype!="" && internalid!= ""){
      var x = nlapiSearchRecord(rectype,null,filters,columns);
      nlapiLogExecution('DEBUG','Result:',JSON.stringify(x));
    
       // for ( var i = 0; x != null && i < x.length; i++ ) {
              
        //}
      var customerrecord = x[0];
    
    
    
         var form = nlapiCreateForm("Simple Form" );
    
         var resultField1 = form.addField('custpage_name', 'text', 'NAME: ' );  resultField1.setDefaultValue(customerrecord.getValue('firstname'));
        resultField1.setDisplayType('inline' );
    
         var resultField2 = form.addField('custpage_email', 'text', 'EMAIL: ' );
        resultField2.setDefaultValue(customerrecord.getValue('email'));
        resultField2.setDisplayType('inline' );
    
         var resultField3 = form.addField('custpage_phone', 'integer', 'PHONE: ' );
       resultField2.setDefaultValue( customerrecord.getValue('phone'));
       resultField2.setDisplayType('inline' );
         var resultField4= form.addField('custpage_creditlimit', 'integer', 'CREDITLIMIT: ' );
       resultField2.setDefaultValue(customerrecord.getValue('creditlimit'));
        resultField2.setDisplayType('inline' );
      form.addSubmitButton('Submit Form');
    
        response.writePage(form);
    }
    else{
    response.write('error');
    }
    
    
    }
    }