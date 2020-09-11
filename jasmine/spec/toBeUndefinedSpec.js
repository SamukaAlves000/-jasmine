describe("Operador toBeUndefined",function(){
	it("Deve validar o operador toBeUndefined",function(){
		var teste;
		var teste2 = "Samuel";
		expect(teste).toBeUndefined();
		expect(teste2).not.toBeUndefined();
	});
});