describe("Operador toBeNull",function(){
	it("Deve validar o operador toBeNull",function(){
		var n1 = null;
		var n2 = undefined;
		var n3 = 10;

		expect(n1).toBeNull();
		expect(n2).not.toBeNull();
		expect(n3).not.toBeNull();

	});
});