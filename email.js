/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
/**
 * A simple Suitelet for building an email form and sending out an email
 * from the current user to the recipient email address specified on the form.
 */
 define(['N/email', 'N/runtime', 'N/ui/serverWidget'], function(email, runtime, serverWidget) {
    function onRequest(context) {
        if (context.request.method === 'GET') {
            var form = serverWidget.createForm({
                title: 'Email Form'
            });

            var subject = form.addField({
                id: 'subject',
                type: serverWidget.FieldType.TEXT,
                label: 'Subject'});
            subject.layoutType = serverWidget.FieldLayoutType.NORMAL;
            subject.updateBreakType = serverWidget.FieldBreakType.STARTCOL;
            subject.isMandatory = true;

            var recipient = form.addField({
                id: 'recipient',
                type: serverWidget.FieldType.EMAIL,
                label: 'Recipient email'
            });
            recipient.isMandatory = true;

            var message = form.addField({
                id: 'message',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Message'
            });
            message.updateDisplaySize({
                height: 10,
                width : 60
            });

            form.addSubmitButton({
                label: 'Send Email'
            });

            context.response.writePage(form);
        }
        else
        {
            var request = context.request;
            var currentuser = runtime.getCurrentUser().id;
            var subject = request.parameters.subject;
            var recipient = request.parameters.recipient;
            var message = request.parameters.message;
            email.send({
                author: currentuser,
                recipients: recipient,
                subject: subject,
                body: message
            });
        }
    }

    return {
        onRequest: onRequest
    };
});