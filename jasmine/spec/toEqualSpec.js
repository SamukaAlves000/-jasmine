describe("Comparador toEqual",function(){
	it("Deve validar o uso do toEqual",function(){
		var obj1 = { valor:true };
		var obj2 = { valor:true };

		var aluno = {
			id:1,
			nome:"Samuel"
		};

		var aluno2 = {
			id:1,
			nome:"Samuel Alves"
		};


		expect(obj1).toEqual(obj2);
		expect(aluno).not.toEqual(aluno2);
	});
});