describe("Operador toMatch",function(){
	it("Deve validar o uso toMatch",function(){
		var texto = "teste com Jasmine";
		expect(texto).toMatch("Jasmine");//Verificar a existência da palavra
		expect(texto).toMatch(/jasmine/i); //Verificar a existência da palavra (case sensitive)
		expect("73840-000").toMatch(/^\d{5}-\d{3}$/);
		expect("059.947.931-08").toMatch(/^\d{3}.\d{3}.\d{3}-\d{2}$/);
	});
});