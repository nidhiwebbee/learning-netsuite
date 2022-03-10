/**
 *@NApiVersion 2.x
 *@NScriptType Portlet
 */
///author---NIDHI MALIK
// This sample creates a portlet with a simple list
define(['N/search'], function (search) {
   function render(params) {
      var portlet = params.portlet;
      portlet.title = "Estimate  List";
      portlet.addColumn({
         id: 'type',
         type: 'text',
         label: 'Type',
         align: 'LEFT'
      });
      portlet.addColumn({
         id: 'internalid',
         type: 'text',
         label: 'Internal ID',
         align: 'LEFT'
      });
      portlet.addColumn({
         id: 'entity',
         type: 'text',
         label: 'Name',
         align: 'LEFT'
      });

      portlet.addColumn({
         id: 'amount',
         type: 'currency',
         label: 'Amount',
         align: 'LEFT'
      });
      portlet.addColumn({
         id: 'item',
         type: 'text',
         label: 'Item',
         align: 'LEFT'
      });
      portlet.addColumn({
         id: 'transdate',
         type: 'date',
         label: 'Date',
         align: 'LEFT'
      });

      var estimateSearchObj = search.create({
         type: "estimate",
         filters:
            [
               ["type", "anyof", "Estimate"]
            ],
         columns:
            [
               search.createColumn({ name: "type", label: "Type" }),
               search.createColumn({ name: "internalid", label: "Internal ID" }),
               search.createColumn({ name: "entity", label: "Name" }),
               search.createColumn({ name: "amount", label: "Amount" }),
               search.createColumn({ name: "item", label: "Item" }),
               search.createColumn({ name: "trandate", label: "Date" })
            ]
      });
      var searchResultCount = estimateSearchObj.runPaged().count;
      log.debug("estimateSearchObj result count", searchResultCount);
      estimateSearchObj.run().each(function (result) {
         // .run().each has a limit of 4,000 results
         portlet.addRows({
            rows:
               [{
                  type: result.getValue('type'),
                  internalid: result.getValue("internalid"),
                  entity: result.getValue("entity"),
                  amount: result.getValue("amount"),
                  item: result.getValue("item"),
                  transdate: result.getValue("trandate")
               }]
         });
         log.debug("TYPE", result.getValue('type'));
         log.debug("ID", result.getValue("internalid"));
         log.debug("CUSTOMER", result.getValue("entity"));
         log.debug("AMOUNT", result.getValue("amount"));
         log.debug("ITEM", result.getValue("item"));
         log.debug("DATE", result.getValue("trandate"));
         return true;
      });
   }

   return {
      render: render
   };
});

////
// var itemSearchObj = search.create({
//     type: "item",
//     filters:
//     [
//        ["isinactive","is","F"], 
//        "AND", 
//        ["internalid","anyof","11264"]
//     ],
//     columns:
//     [
//        search.createColumn({
//           name: "itemid",
//           sort: search.Sort.ASC,
//           label: "Name"
//        }),
//        search.createColumn({name: "displayname", label: "Display Name"}),
//        search.createColumn({name: "manufacturer", label: "Manufacturer"}),
//        search.createColumn({name: "salesdescription", label: "Description"}),
//        search.createColumn({name: "upccode", label: "UPC Code"}),
//        search.createColumn({name: "class", label: "Class"})
//     ]
//  });
//  var searchResultCount = itemSearchObj.runPaged().count;
//  log.debug("itemSearchObj result count",searchResultCount);
//  itemSearchObj.run().each(function(result){
//     // .run().each has a limit of 4,000 results
//     return true;
//  });        


// /// id of search=customsearch_item_detail_search



// var itemSearchObj = search.create({
//     type: "item",
//     filters:
//     [
//        ["transaction.type","anyof","SalesOrd","PurchOrd"]
//     ],
//     columns:
//     [
//        search.createColumn({name: "internalid", label: "Internal ID"}),
//        search.createColumn({
//           name: "itemid",
//           sort: search.Sort.ASC,
//           label: "Name"
//        }),
//        search.createColumn({name: "displayname", label: "Display Name"}),
//        search.createColumn({
//           name: "type",
//           join: "transaction",
//           label: "Type"
//        }),
//        search.createColumn({
//           name: "internalid",
//           join: "transaction",
//           label: "Internal ID"
//        })
//     ]
//  });
//  var searchResultCount = itemSearchObj.runPaged().count;
//  log.debug("itemSearchObj result count",searchResultCount);
//  itemSearchObj.run().each(function(result){
//     // .run().each has a limit of 4,000 results
//     return true;
//  });
//  ///customsearch_item_transaction

//  ////
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
      // portlet.addColumn({
      //     id: "internalid",
      //     label: "Internal ID",
      //     type: serverWidget.FieldType.TEXT,
      //     align: 'LEFT'
      //});

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
               //search.createColumn({ name: "internalid", join: "transaction", label: "Internal ID" })
            ]
      });
      // var searchResultCount = itemSearchObj.runPaged().count;
      var myResultSet = itemSearchObj.run();
      log.debug("itemSearchObj result count", myResultSet);
      var results = myResultSet.getRange({ start: 0, end: 1000 });
      log.debug({ title: 'result', details: JSON.stringify(results) });

      //var number = results.length;



      // for (var i = 0; i < number; i++) {
      itemSearchObj.run().getRange({start: 0, end: 1000}).each(function (result) {
         // .run().each has a limit of 4,000 results
         portlet.addRows({
            rows:
               [{
                  type: result.getValue('type'),
                  internalid: result.getValue("internalid"),
                  displayname: result.getValue("displayname"),
                  itemid: result.getValue("itemid"),
               }]
         });
         //      log.debug("TYPE",result.getValue('type'));
         //      log.debug("ID",result.getValue("internalid"));
         //      log.debug("CUSTOMER",result.getValue("entity"));
         //      log.debug("AMOUNT",result.getValue("amount"));
         //      log.debug("ITEM",result.getValue("item"));
         //      log.debug("DATE",result.getValue("trandate"));
         return true;
      });
   }


   return {
      render: render
   };
});