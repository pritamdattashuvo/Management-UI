Ext.define('Starter.view.crud.UserGrid', {
	extend: 'Ext.grid.Panel',
	
	requires: [ 'Ext.grid.plugin.RowEditing' ],

	controller: {
		xclass: 'Starter.view.crud.UserController'
	},
	viewModel: {
		xclass: 'Starter.view.crud.UserModel'
	},

	title: 'Management UI',
	bind: {
		store: '{users}',
		selection: '{selectedUser}'
	},

	listeners: {
		canceledit: 'onCancelEdit',
		edit: 'onEdit'
	},

	columns: [ {
		dataIndex: 'issueName',
		text: 'Issue Name',
		flex: 1

		// editor: {
		// 	xtype: 'textfield',
		// 	allowBlank: false
		// }
	}, {
		dataIndex: 'issueDescription',
		text: 'Issue Description',
		flex: 1
		// editor: {
		// 	xtype: 'textfield',
		// 	allowBlank: false
		// }
	}, {
		dataIndex: 'submittedby',
		text: 'submittedby',
		flex: 1
		// editor: {
		// 	xtype: 'textfield',
		// 	allowBlank: false,
		// 	vtype: 'submittedby'
		// }
	},{
          text: 'Resolve',
           align: 'center',
           stopSelection: true,
           xtype: 'widgetcolumn',
           widget: {
                  xtype: 'button',
                  _btnText: "resolved",
                  defaultBindProperty: null, //important
                  handler: function(widgetColumn) {
                        var record = widgetColumn.getWidgetRecord();
                        // console.log("Got data!", record);
                        // Ext.Msg.alert('Resolved','problem is solved');
                        //widgetColumn.hide();

                        Ext.MessageBox.confirm(
                        'Confirm', 'Are you sure you want to do this ?', callbackFunction);
                     function callbackFunction(btn) {
                        if(btn == 'yes') {
                           widgetColumn.disable();
                        } else {
                           widgetColumn.enable();
                        }
                     };
                  },
                  listeners: {
                        beforerender: function(widgetColumn){
                            var record = widgetColumn.getWidgetRecord();
                            widgetColumn.setText( widgetColumn._btnText ); //can be mixed with the row data if needed
                        }
                  }
            }
        }
	//  {
	// 	dataIndex: 'departmentId',
	// 	text: 'Department',
	// 	flex: 1,
	// 	renderer: 'departmentRenderer',
	// 	editor: {
	// 		xtype: 'combobox',
	// 		store: 'Departments',
	// 		queryMode: 'local',
	// 		displayField: 'name',
	// 		valueField: 'id'
	// 	}
	// }
	],

	// plugins: {
	// 	ptype: 'rowediting',
	// 	pluginId: 'storePanelRowEditing'
	// },

	dockedItems: [ {
		xtype: 'toolbar',
		dock: 'top',
		items: [ {
			iconCls: 'x-fa fa-plus',
			handler: 'newUser'
		}, {
			text: 'Delete',
			handler: 'deleteUser',
			bind: {
				disabled: '{!selectedUser}'
			}
		}, '->', {
			emptyText: 'Search',
			xtype: 'textfield',
			listeners: {
				change: {
					fn: 'onNamefilterChange',
					buffer: 350
				}
			},
			triggers: {
				clear: {
					cls: 'x-form-clear-trigger',
					weight: 1,
					handler: function(tf) {
						tf.reset();
					}
				}
			}
		}
		// {
		// 	xtype: 'combobox',
		// 	reference: 'departmentFilterCB',
		// 	emptyText: 'Departments Filter',
		// 	store: 'Departments',
		// 	width: 200,
		// 	queryMode: 'local',
		// 	displayField: 'name',
		// 	valueField: 'id',
		// 	publishes: 'value',
		// 	triggers: {
		// 		clear: {
		// 			cls: 'x-form-clear-trigger',
		// 			weight: 1,
		// 			handler: function(cb) {
		// 				cb.reset();
		// 			}
		// 		}
		// 	}
		// }
		]
	}, {
		xtype: 'pagingtoolbar',
		reference: 'pagingtoolbar',
		dock: 'bottom',
		displayInfo: true,
		bind: {
			store: '{users}'//it will display those data which are stored on backend side
		}
	} ]

});