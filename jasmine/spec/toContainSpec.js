describe("Operador toBeContain",function(){
	it("Deve validar o operador toContain",function(){


		expect('Samuel Alves dos Santos').toContain('dos');
		expect('Samuel Alves dos Santos').toContain('o');

		expect([1,3,5,7,9]).toContain(1);
		expect([1,3,5,7,9]).not.toContain(2);

		expect([[1,3,5,7,9],[2,4,6,8,10]]).toContain([2,4,6,8,10]);
		expect([[1,3,5,7,9],[2,4,6,8,10]]).not.toContain([1,3,5,7]);


	});
});