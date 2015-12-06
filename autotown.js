$(document).ready(function() {
		$('#example').DataTable( {
				"ajax": "tunes.txt",
				"columns": [
						{ "data": "id" },
						{ "data": "timestamp" },
						{ "data": "country" },
						{ "data": "region" },
						{ "data": "city" },
						{ "data": "tuneData.identification.tau" },
						{ "data": "tuneData" }
				],
				"columnDefs": [
						{
								// The `data` parameter refers to the data for the cell (defined by the
								// `data` option, which defaults to the column being worked with, in
								// this case `data: 0`.
								"render": function ( data, type, row ) {
										return data*1000 + ' ms';
								},
								"targets": 5
						},
						{
							"render": function (data, type, row) {
									return moment(data);
							},
							"targets": 1
						}
				]
				
		} );
} );