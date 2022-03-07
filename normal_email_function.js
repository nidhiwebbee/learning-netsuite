
/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 */
// define(['N/error'],
define(['N/email','N/error', 'N/runtime', 'N/ui/serverWidget'], 
function(email, runtime) {
    function saveRecord(context){
            var currentuser = runtime.getCurrentUser().id;
            var currentRecord=context.newRecord;
            var so_id = currentRecord.getValue({
                fieldId: 'tranid'
            });
            email.send({
                author:currentuser,
                recipients:'nidhi@webbeeglobal.com',
                subject:'order confirmation',
                body:'your sales order is created successfully'+ so_id,
            });
        }
        return {
            saveRecord: saveRecord
           };
      

});