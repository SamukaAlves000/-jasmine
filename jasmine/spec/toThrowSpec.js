describe("Operador toThrow",function(){
	it("Deve validar o operador toThrow",function(){
		expect(function(){
			onlyNumbers('argumento errado');
		}).toThrow();

		function multiplicar(){
			numero * 10;
		};

		function somar(n1,n2){
			return n1 + n2 + n3;
		};


		expect(multiplicar).toThrow();
		expect(somar).toThrow();
	});
});