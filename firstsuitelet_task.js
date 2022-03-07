/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
 define(['N/ui/serverWidget','N/record','N/currentRecord'], function (serverWidget,record, currentRecord) {
    function onRequest(context) {
        if (context.request.method === 'GET') {
            var current_Record = currentRecord.get();

            

            //var recordtype = recordtype.Context.getrecordType();
            var objRecord = current_Record.load({
                type: record.Type.CUSTOMER,
                id: 14591,
                isDynamic: false,
            });

            var internal_id = objRecord.getValue({
                fieldId: 'internalid'
            });
            log.debug("internal id", internal_id);

            // var internal_id = currentContext.getUser();
            //var internal_id = 14591;
            //var internal_id = runtime.getCurrentUser().id;
            //var current_Record = currentRecord.get();


            if (recordtype == 'customer' && internal_id != null) {

                var name = current_Record.getValue({
                    fieldId: 'custentity1233'
                });

                var email = current_Record.getValue({
                    fieldId: 'email'
                });

                var email = current_Record.getValue({
                    fieldId: 'creditlimit'
                });


                var form = serverWidget.createForm({
                    title: 'customer_record_details'
                });

                var field = form.addField({
                    id: 'custpage_name',
                    type: serverWidget.FieldType.TEXT,
                    label: 'name',
                    setFieldValue: name,
                    setDisplayType: 'inline'

                });

                field.layoutType = serverWidget.FieldLayoutType.NORMAL;

                form.addField({
                    id: 'cust_email',
                    type: serverWidget.FieldType.EMAIL,
                    label: 'Email',
                    setFieldValue: email,
                    setDisplayType: 'inline'

                });
                form.addField({
                    id: 'cust_credit',
                    type: serverWidget.FieldType.INTEGER,
                    label: 'creditlimit',
                    setFieldValue: creditlimit,
                    setDisplayType: 'inline'

                });
            } 


                context.response.writePage(form);
            }
            else {
                context.response.writepage('error');
            }
        }
        return {
            onRequest: onRequest
        };
    });





/////



