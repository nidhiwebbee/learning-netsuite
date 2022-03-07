/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
 define(['N/ui/serverWidget'], function(serverWidget) {
  function onRequest(context) {
      if (context.request.method === 'GET') {

          // Section One - Forms - See 'Steps for Creating a Custom Form' in topic 'Sample Custom Form Script'
          var form = serverWidget.createForm({
              title: 'Customer Information'
          });

          var usergroup = form.addFieldGroup({
              id: 'usergroup',
              label: 'User Information'
          });
          usergroup.isSingleColumn = true;


          var fname = form.addField({
              id: 'fnamefield',
              type: serverWidget.FieldType.TEXT,
              label: 'First Name',
              container: 'usergroup'
          });
          fname.isMandatory = true;

          var credit = form.addField({
              id: 'creditfield',
              type: serverWidget.FieldType.INTEGER,
              label: 'Credit Limit',
              container: 'usergroup'
          });
          credit.isMandatory = true;

          form.addField({
              id: 'emailfield',
              type: serverWidget.FieldType.EMAIL,
              label: 'Email',
              container: 'usergroup'
          });
          form.addSubmitButton({
              label: 'Submit'
          });
         

          context.response.writePage(form);
      } else {
        var form = serverWidget.createForm({
            title: 'Customer Information'
        });
          // Section Four - Output - Used in all sections
        //   var delimiter = /\u0001/;
        form.addField({
            id: 'email',
            type: serverWidget.FieldType.EMAIL,
            label: 'Email',
            setFieldValue: emailField,
            container: 'usergroup',
            setDisplayType: 'inline'
        });
	      

        form.addField({
            id: 'custpage_fname',
            type: serverWidget.FieldType.TEXT,
            label: 'First Name',
            setFieldValue: fnameField,
            container: 'usergroup',
            setDisplayType: 'inline'

        });

        form.addField({
            id: 'custpage_lname',
            type: serverWidget.FieldType.INTEGER,
            label: 'Credit Limit',
            setFieldValue: creditField,
            container: 'usergroup',
            setDisplayType: 'inline'

        });

          var fnameField = context.request.parameters.fnamefield;
          var creditField = context.request.parameters.creditfield;
          var emailField = context.request.parameters.emailfield;
          
          context.response.writePage(form);
        //   context.response.write('You have entered:'
        //       + '<br/>  Name: ' + fnameField + ' ' + lnameField
        //       + '<br/>  Email: ' + emailField
        //       );
      }
  }
  return {
      onRequest: onRequest
  };
});



form.addField('custpage_field3', 'integer','CREDIT-LIMIT' ).setDefaultValue(20);

var resultField1 = form.addField('custpage_res1', 'text', 'USER NAME ' );
	    resultField1.setDefaultValue(request.getParameter('custpage_field1' ));
	    resultField1.setDisplayType('inline' );
	      




/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
 define(['N/ui/serverWidget'], function(serverWidget) {
    function onRequest(context) {
        if (context.request.method === 'GET') {
  
            // Section One - Forms - See 'Steps for Creating a Custom Form' in topic 'Sample Custom Form Script'
            var form = serverWidget.createForm({
                title: 'Customer Information'
            });
  
            var usergroup = form.addFieldGroup({
                id: 'usergroup',
                label: 'User Information'
            });
            usergroup.isSingleColumn = true;
  
  
            var fname = form.addField({
                id: 'fnamefield',
                type: serverWidget.FieldType.TEXT,
                label: 'First Name',
                container: 'usergroup'
            });
            fname.isMandatory = true;
  
            var lname = form.addField({
                id: 'lnamefield',
                type: serverWidget.FieldType.TEXT,
                label: 'Last Name',
                container: 'usergroup'
            });
            lname.isMandatory = true;
  
            form.addField({
                id: 'emailfield',
                type: serverWidget.FieldType.EMAIL,
                label: 'Email',
                container: 'usergroup'
            });
            form.addSubmitButton({
                label: 'Submit'
            });
  
            context.response.writePage(form);
        } else {
            // Section Four - Output - Used in all sections
            var delimiter = /\u0001/;
            var fnameField = context.request.parameters.fnamefield;
            var lnameField = context.request.parameters.lnamefield;
            var emailField = context.request.parameters.emailfield;
            
            context.response.writePage(form);
            
            /*context.response.write('You have entered:'
                + '<br/>  Name: ' + fnameField + ' ' + lnameField
                + '<br/>  Email: ' + emailField
                );*/
        }
    }
    return {
        onRequest: onRequest
    };
  });