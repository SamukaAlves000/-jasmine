describe("Operador toBeTruthy",function(){
	it("Deve validar o operador toBeTruthy",function(){

		var n1 = 10;
		var n2 = false;
		var n3 = 0;
		var n4 = '';
		var n5 = undefined;
		var n6 = null;
		var n7 = NaN;
		var n8 = true;
		var n9 = {};
		var n10 = 'Samuel';

		expect(n1).toBeTruthy();
		expect(n2).not.toBeTruthy();
		expect(n3).not.toBeTruthy();
		expect(n4).not.toBeTruthy();
		expect(n5).not.toBeTruthy();
		expect(n6).not.toBeTruthy();
		expect(n7).not.toBeTruthy();
		expect(n8).toBeTruthy();
		expect(n9).toBeTruthy();
		expect(n10).toBeTruthy();
	});
});


