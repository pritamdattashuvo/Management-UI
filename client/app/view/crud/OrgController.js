Ext.define('Starter.view.crud.OrgController', {
	extend: 'Ext.app.ViewController',

	onNamefilterChange(field, newValue) {
		this.getViewModel().set('nameFilter', newValue);
	},

	// deleteUser() {
	// 	Ext.Msg.confirm('Really delete?', 'Are you sure?', this.onDeleteUserConfirm, this);
	// },

	// departmentRenderer(value) {
	// 	if (value) {
	// 		return Ext.getStore('Departments').getById(value).get('name');
	// 	}
	// 	return value;
	// },

	// onDeleteUserConfirm(choice) {
	// 	if (choice === 'yes') {
	// 		const selectedUser = this.getViewModel().get('selectedUser');
	// 		selectedUser.erase({
	// 			callback: e => {
	// 				Ext.toast({
	// 					html: 'User deleted',
	// 					title: 'Info',
	// 					width: 200,
	// 					align: 't',
	// 					shadow: true
	// 				});
	// 				this.getStore('users').load();
	// 			}
	// 		});
	// 	}
	// },

	// onCancelEdit(editor, context, eOpts) {
	// 	if (context.record.phantom) {
	// 		this.getStore('users').remove(context.record);
	// 	}
	// },

	// onEdit() {
	// 	this.getStore('users').sync();
	// },

	newOrg() {
		
			// issueName: 'issue Name',
			// issueDescription: 'Description',
			// submittedby:'Submittedby'
			// submittedby: 'new@submittedby.com'
			// department: 'Customer Service'
			
		// issueName: varissuename,
		// issueDescription: varissuedescription,
		// submittedby:varissuesubmittedby
		
		win = Ext.create('Ext.Window', {
                 extend: 'Ext.window.Window',
                 title: 'Add Organization',
                 iconCls: 'x-fa fa-plus',
                 layout:'form',
                 xtype:'form',
                 width:400,
                 plain: true,
                 items: [{
                      xtype : 'textfield',
                      fieldLabel: 'Organization Name',
                      name:'orgName'
                    },{
                      xtype : 'textarea',
                      fieldLabel: 'Contact Number',
                      name:'orgNumber'
                    }
               ],
               dockedItems:[//buttons replaced by dockedItems
               {
                  xtype:'toolbar',
                  dock: 'bottom',
                  ui:'footer',
                  items:[
                    {
                      xtype:'button',
                      text:'Cancel',
                      handler:function(){
                        win.close();
                      }
                    },'->',{
                      xtype:'button',
                      text:'Save',
                      //Saving an issue starts from here
                      listeners:{
                      click:function()
                      {
                        var varorgname = this.up('window').down('textfield[name=orgName]').getValue();
                        var varorgnumber = this.up('window').down('textfield[name=orgNumber]').getValue();
                        

                        Ext.toast("Issue Name: "+varorgname+"<br>Description: "+varorgnumber);
                        // alert("Data: \n"+varissuename+"\n"+varissuedescription+"\n"+varissuesubmittedby);
                        // dataStore.add({issueName:varissuename},{issueDescription:varissuedescription},{submittedby:varissuesubmittedby});
                        
                        }
                      }
                      //saving an issue ends here
                    }
                  ]
                }
               ]
                }).show();
		// issueName: varissuename,
		// issueDescription: varissuedescription,
		// submittedby:varissuesubmittedby
		this.getStore('users').insert(0, newUser);
		this.getView().getPlugin('storePanelRowEditing').startEdit(0, 0);
	},
	updateOrg(){
		win2 = Ext.create('Ext.Window', {
                 extend: 'Ext.window.Window',
                 title: 'Update Organization',
                 iconCls: 'x-fa fa-refresh',
                 layout:'form',
                 xtype:'form',
                 width:400,
                 plain: true,
                 items: [{
                      xtype : 'textfield',
                      fieldLabel: 'Organization Name',
                      name:'orgName'
                    },{
                      xtype : 'textarea',
                      fieldLabel: 'Contact Number',
                      name:'orgNumber'
                    }
               ],
               dockedItems:[//buttons replaced by dockedItems
               {
                  xtype:'toolbar',
                  dock: 'bottom',
                  ui:'footer',
                  items:[
                    {
                      xtype:'button',
                      text:'Cancel',
                      handler:function(){
                        win.close();
                      }
                    },'->',{
                      xtype:'button',
                      text:'Save',
                      //Saving an issue starts from here
                      listeners:{
                      click:function()
                      {
                        var varorgname = this.up('window').down('textfield[name=orgName]').getValue();
                        var varorgnumber = this.up('window').down('textfield[name=orgNumber]').getValue();
                        

                        Ext.toast("Issue Name: "+varorgname+"<br>Description: "+varorgnumber);
                        // alert("Data: \n"+varissuename+"\n"+varissuedescription+"\n"+varissuesubmittedby);
                        // dataStore.add({issueName:varissuename},{issueDescription:varissuedescription},{submittedby:varissuesubmittedby});
                        
                        }
                      }
                      //saving an issue ends here
                    }
                  ]
                }
               ]
                }).show();
		// issueName: varissuename,
		// issueDescription: varissuedescription,
		// submittedby:varissuesubmittedby
		this.getStore('users').insert(0, newUser);
		this.getView().getPlugin('storePanelRowEditing').startEdit(0, 0);
	}

});