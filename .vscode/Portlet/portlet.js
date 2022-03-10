///author---NIDHI MALIK
/**
*@NApiVersion 2.x
*@NScriptType Portlet
*/
define(["N/search", "N/ui/serverWidget"], function (search, serverWidget) {
    function render(params) {
        var portlet = params.portlet;
        portlet.title = "Item Info";
        portlet.addColumn({
            id: "internalid",
            type: 'text',
            label: 'internalid',
            align: 'LEFT'
        });
        portlet.addColumn({
          id: "itemid",
          label: "Name",
          type: 'text',
          align: 'LEFT'
        });
        portlet.addColumn({
          id: "displayname",
          label: "Display Name",
          type: 'text',
          align: 'LEFT'
        });
        portlet.addColumn({
          id: 'type',
          type: 'text',
          label: 'Type',
          align: 'LEFT'
        });
        portlet.addColumn({
           id: "internalid",
           label: "Internal ID",
           type: serverWidget.FieldType.TEXT,
           align: 'LEFT'
        });
        ///using a save search
        var itemSearchObj = search.create({
            type: "item",
            filters:
            [
                ["transaction.type", "anyof", "SalesOrd", "PurchOrd"]
            ],
            columns:
            [
                search.createColumn({ name: "internalid", label: "Internal ID" }),
                search.createColumn({ name: "itemid", sort: search.Sort.ASC, label: "Name" }),
                search.createColumn({ name: "displayname", label: "Display Name" }),
                search.createColumn({ name: "type", join: "transaction", label: "Type" }),
                search.createColumn({ name: "internalid", join: "transaction", label: "Internal ID" })
            ]
        });
        //var searchResultCount = itemSearchObj.runPaged().count;
        var myResultSet = itemSearchObj.run();
        log.debug("itemSearchObj result count", myResultSet);
        var results = myResultSet.getRange({ start: 0, end: 1000 });
        log.debug({ title: 'result', details: JSON.stringify(results) });
 
        results.forEach(function (result) {   /// i am using for each because records have more than 4000 no. of data.
            portlet.addRows({
                rows:
                [{
                   type: result.getValue('type'),
                   internalid: result.getValue("internalid"),
                   displayname: result.getValue("displayname"),
                   itemid: result.getValue("itemid"),
                }]
            });
               log.debug("TYPE",result.getValue('type'));
               log.debug("ID",result.getValue("internalid"));
               log.debug("CUSTOMER",result.getValue("displayname"));
               log.debug("ITEM",result.getValue("itemid"));
          return true;
       });
    }
 
 
    return {
       render: render
    };
 });