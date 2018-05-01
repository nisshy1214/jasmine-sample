const FetchSample = require('./src/fetch.js');

describe('getMessage() が呼ばれた時に、"HelloWorld" が返る', () => {
	const sample = new FetchSample();
	it("execute", () => {
		expect( sample.getMessage() ).toBe('HelloWorld');
	});
});

describe('getJsonData() が呼ばれた時に、Object型で返ってくる', () => {

	beforeEach( function(){
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		//一つのテストについて、最大で 10s 待たせる。
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;
	});

	it('getJsonData() の実行', ( callback ) => {
		const sample = new FetchSample();

		sample.getJsonData()
		.then( function( result ){
			expect( typeof result === 'object' ).toBeTruthy();
			callback();
		});

	});

	afterEach( function() {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	});
});

//TODO: jquery が正しく読めるように調査する
// describe('jqueryの$.ajaxのテスト', () => {
// 	beforeEach( function(){
// 		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
// 		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
// 	});
//
// 	it('$.ajaxの実行', ( callback ) => {
// 		const sample = new FetchSample();
//
// 		sample.getJqueryAjax()
// 		.then( function( result ){
// 			expect( typeof result === 'object' ).toBeTruthy();
// 			callback();
// 		});
//
// 	});
//
// 	afterEach( function() {
// 		jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
// 	});
//
// });
