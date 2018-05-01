const fetch = require('node-fetch');
const $     = require('jquery');

module.exports = class FetchSample {
	getJsonData(){
		return fetch('http://localhost:3000/sample')
			.then( function( res ){
				return res.json();
			})
			.then( function( json ){
				return json;
			});
	}

	getJqueryAjax(){
		const deferred = $.Deferred();
		const params   = {
				url : 'http://localhost:3000/sample',
				dataType : 'json',
				method: 'GET',
				success: deferred.resolve(),
				error: deferred.reject()
			};

		$.ajax( params );
		return deferred.promise();
	}

	getMessage(){
		return "HelloWorld";
	}
};
