Ext.define('Starter.view.crud.OrgModel', {
	extend: 'Ext.app.ViewModel',

	data: {
		selectedUser: null,
		nameFilter: null,
		departmentFilterCB: null
	},

	stores: {
		users: {
			model: 'Starter.model.Org',
			autoLoad: true,
			pageSize: 25,
			remoteSort: true,
			remoteFilter: true,
			autoSync: false,
			sorters: [{
				property: 'orgName',
				direction: 'ASC'
			}],
			filters: [{
				property: 'name',
				value: '{nameFilter}'
			}
			// {
			// 	property: 'department',
			// 	value: '{departmentFilterCB.value}'
			// }
			]
		}
	}

});