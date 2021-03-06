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
				],
				"order": [[ 2, "desc" ]],
				"columnDefs": [
						{
								// The `data` parameter refers to the data for the cell (defined by the
								// `data` option, which defaults to the column being worked with, in
								// this case `data: 0`.
								"render": function ( data, type, row ) {
										return Math.round((data*1000)*100)/100 + ' ms';
								},
								"targets": 5
						},
						{
							"render": function (data, type, row) {
									return moment(data).format('lll');
							},
							"targets": 1
						},
						{
							"render": function (data, type, row) {
								return row[4] + ', ' + data;
							},
							"targets": 3
						},
						{ "visible" : false , "targets": [4]}
				]
				
		} );
} );