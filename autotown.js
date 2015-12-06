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
				]
		} );
} );