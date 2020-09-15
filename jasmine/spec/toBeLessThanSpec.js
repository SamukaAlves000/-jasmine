describe("Operador toBeLessThan",function(){
	it("Deve validar o operador toBeLessThan",function(){
		expect(20).toBeLessThan(30);
		expect(20).not.toBeLessThan(10);
	});
});