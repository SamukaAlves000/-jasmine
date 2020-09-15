describe("Operador toBeGreaterThan",function(){
	it("Deve validar o operador toBeGreaterThan",function(){

		expect(10).toBeGreaterThan(5);
		expect(10).not.toBeGreaterThan(20);
		expect('10').toBeGreaterThan(5);
	});
});