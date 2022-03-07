/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 */
 define(['N/error'],
 function(error) {
     function pageInit(context) {
       if (context.mode !== 'create')
         return;
       var currentRecord = context.currentRecord;
       currentRecord.setValue({
       fieldId: 'entity',
       value: 75
         
       });
     }
     function saveRecord(context) {
         var currentRecord = context.currentRecord;
         if (!currentRecord.getValue({
                 fieldId: 'entity'
             }) || currentRecord.getLineCount({
                 sublistId: 'item'
             }) < 1)
             throw error.create({
                 name: 'MISSING_REQ_ARG',
                 message: 'Please enter all the necessary fields on the salesorder before saving'
             });
         return true;
     }
     function validateField(context) {
            var currentRecord = context.currentRecord;
            var sublistName = context.sublistId;
            var sublistFieldName = context.fieldId;
            var line = context.line;
            if (sublistName === 'item') {
                if (sublistFieldName === 'quantity') {
                    if (currentRecord.getCurrentSublistValue({
                            sublistId: sublistName,
                            fieldId: sublistFieldName
                        }) < 3)
                        currentRecord.setValue({
                            fieldId: 'otherrefnum',
                            value: 'Quantity is less than 3'
                        });
                    else
                        currentRecord.setValue({
                            fieldId: 'otherrefnum',
                            value: 'Quantity accepted'
                        });
                }
            }
            return true;
        }
        function lineInit(context) {
            var currentRecord = context.currentRecord;
            var sublistName = context.sublistId;
            if (sublistName === 'partners')
                currentRecord.setCurrentSublistValue({
                    sublistId: sublistName,
                    fieldId: 'partner',
                    value: '55'
                });
        }
        function sublistChanged(context) {
            var currentRecord = context.currentRecord;
            var sublistName = context.sublistId;
            var op = context.operation;
            //if (sublistName === 'item')
                currentRecord.setValue({
                    fieldId: 'otherrefnum',
                    value:currentRecord.getValue({
                        fieldId: 'entity'
                    })
                });
        }
        return {
            pageInit:pageInit,
            saveRecord:saveRecord,
            validateField:validateField,
            sublistChanged:sublistChanged
          
        }

    });