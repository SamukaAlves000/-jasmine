describe("Operador toBeFalsy",function(){
	it("Deve validar o operador toBeFalsy",	function(){
		
		var n1 = false;
		var n2 = 0;
		var n3 = "";
		var n4 = undefined;
		var n5 = null;
		var n6 = NaN;


		expect(n1).toBeFalsy();
		expect(n2).toBeFalsy();
		expect(n3).toBeFalsy();
		expect(n4).toBeFalsy();
		expect(n5).toBeFalsy();
		expect(n6).toBeFalsy();
		

	});
});