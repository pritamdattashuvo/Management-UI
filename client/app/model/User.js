Ext.define("Starter.model.User",
{
  extend : "Ext.data.Model",
  requires : [ "Ext.data.identifier.Negative", "Ext.data.proxy.Direct", "Ext.data.validator.Presence" ],
  identifier : "negative",
  fields : [ "issueName", {
    name : "issueDescription"
  }, {
    name : "submittedby"
  },"id" ],
  proxy : {
    type : "direct",
    api : {
      read : "userService.read",
      create : "userService.create",
      update : "userService.update",
      destroy : "userService.destroy"
    },
    reader : {
      rootProperty : "records"
    },
    writer : {
      writeAllFields : true
    }
  }
});