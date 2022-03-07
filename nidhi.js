/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 */
 define(['N/ui/dialog'], 
    function(dialog) {
    function showUserInformation(context) {
        var currentRecord = context.currentRecord;
        var customerName = currentRecord.getValue({
           fieldId: 'otherrefnum'
       });
       var customerEmail = currentRecord.getValue({
           fieldId: 'memo'
       });
    dialog.alert({
         title: 'Order Confirmation',
         message: 'CustomerName:' + customerName + '\n' + 'Customer Email:' + customerEmail
       });
         return true;
     }
     return{
         saveRecord: showUserInformation
     };
 });