/**
 *@NApiVersion 2.x
 *@NScriptType Portlet
 */

// This sample creates a portlet with a simple list
define(['N/search'], function (search) {
    function render(params) {
        var portlet = params.portlet;
        portlet.title = "Item Info";

        portlet.addColumn({
            id: "internalid",
            type: 'text',
            label: 'Internal ID',
            align: 'LEFT'
        });
        portlet.addColumn({
            id: "tranid",
            label: "item FulfillmentId",
            type: 'text',
            align: 'LEFT'

        });

        portlet.addColumn({
            id: "statusref",
            label: "item fulfillmentStatus",
            type: 'text',
            align: 'LEFT'
        });
        portlet.addColumn({
            id: 'type',
            type: 'text',
            label: 'item fulfillmentType',
            align: 'LEFT'
        });
        // portlet.addColumn({
        //     id: "internalid",
        //     label: "Internal ID",
        //     type: serverWidget.FieldType.TEXT,
        //     align: 'LEFT'
        // });

        var itemfulfillmentSearchObj = search.create({
            type: "itemfulfillment",
            filters:
                [
                    ["type", "anyof", "ItemShip"],
                    "AND",
                    ["status", "anyof", "ItemShip:B", "ItemShip:A", "ItemShip:C"],
                    "AND",
                    ["mainline", "is", "T"],
                    "AND",
                    ["internalid", "anyof", "@ALL@"],
                    "AND",
                    ["createdfrom.type", "anyof", "SalesOrd"],
                    "AND",
                    ["createdfrom.type", "anyof", "SalesOrd", "TrnfrOrd"],
                    "AND",
                    ["createdfrom.status", "anyof", "SalesOrd:B", "TrnfrOrd:B"]
                ],
            columns:
                [
                    search.createColumn({ name: "internalid", label: "InternalId" }),
                    search.createColumn({ name: "tranid", label: "item FulfillmentId" }),
                    search.createColumn({ name: "type", label: "item fulfillmentType" }),
                    search.createColumn({ name: "statusref", label: "item fulfillmentStatus" }),
                    search.createColumn({
                        name: "tranid",
                        join: "createdFrom",
                        label: "ParentRecord Id"
                    }),
                    search.createColumn({
                        name: "statusref",
                        join: "createdFrom",
                        label: "ParentRecord Status"
                    }),
                    search.createColumn({
                        name: "type",
                        join: "createdFrom",
                        label: "ParentRecord Type"
                    })
                ]
        });
        //var searchResultCount = itemfulfillmentSearchObj.runPaged().count;
        //log.debug("itemfulfillmentSearchObj result count", searchResultCount);
        

        var myResultSet = itemfulfillmentSearchObj.run();

        log.debug({ title: 'Search result', details: JSON.stringify(myResultSet) });

        var results = myResultSet.getRange({ start: 0, end: 1000 });

        var number = results.length;

        log.debug({ title: 'result number', details: number });
        log.debug({ title: 'result', details: JSON.stringify(results) });

        //var data = {};

        //for (var i = 0; i < number; i++) {
        // .run().each has a limit of 4,000 results
        //var searchResultCount = itemSearchObj.runPaged().count;
           //log.debug("itemSearchObj result count",searchResultCount);
           itemfulfillmentSearchObj.run().each(function(result){
               portlet.addRows({
                   rows:
                   [{
                    internalid: result.getValue("internalid"),
                    tranid: result.getValue("tranid"),
                    statusref: result.getValue("statusref"),
                    type: result.getValue('type'),
                    // internalid: results.getValue("internalid"),
               }]
                 
        });
      
        //log.debug("TYPE", result.getValue('type'));
        //log.debug("ID", result.getValue("internalid"));
        //    log.debug("CUSTOMER",result.getValue("entity"));
        //    log.debug("AMOUNT",result.getValue("amount"));
        //    log.debug("ITEM",result.getValue("item"));
        //    log.debug("DATE",result.getValue("trandate"));
        return true;
    });
}
    return {
        render: render
    };
});
