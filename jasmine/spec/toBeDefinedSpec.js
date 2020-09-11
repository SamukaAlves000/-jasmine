describe("Operador toBeDefined",function(){
	it("Deve validar o operador toBeDefined",function(){
		var texto = "Samuel";
		var texto2;
		expect(texto).toBeDefined();
		expect(texto2).not.toBeDefined();//Usar o toBeUndefined;
	});
});