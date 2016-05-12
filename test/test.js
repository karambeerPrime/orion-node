var request = require("request"),
assert = require('assert-plus'),
//helloWorld = require("./../orion/route.js"),
base_url  ="http://localhost:3000/orion";
//first block is What You are testing and contain other testing apis
describe("Hello World Server", function(){
	//The first test is to make sure our server is returning an 		HTTP status of 200, or OK	
	describe("GET /",function(){
	//expected return
	it("returns status code 200", function(done) {
		request.get(base_url,function(error,response,body){
			//expect(response.statusCode).toBe(200);
			console.log("response code is"+response.statusCode);
			assert.equal(200, response.statusCode);
			done();		
		});
    	});
	 it("returns Hello World", function(done) {
	      request.get(base_url, function(error, response, body) {
	        //expect(body).toBe("Hello World");
	        assert.equal("Hello World", body);
	        //helloWorld.closeServer();
	        done();
	      });
	    });
	
	
	});
});
