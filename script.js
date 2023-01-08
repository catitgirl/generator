calc.addEventListener('click', () => {
	let array = [];
	for(let i = 0; i < 10; i++) {
		array.push(Math.round(Math.random() * 10));
	}
	if(Math.random() > 0.5) {
		let i = 0;
		array[i] *= -1;
		array.push(Math.round(Math.random() * 10));
	}
	document.write('Случайные числа: ' + array + '<br>');
	document.write('Самое большое: ' + Math.max(...array) + '<br>');
	document.write('Самое маленькое: ' + Math.min(...array) + '<br>');

	function arrSum(array) {
		let sum = 0;
		let medium = 0;
		for(let i = 0; i < array.length; i++) {
			sum += array[i];
		}
		medium = (Math.round(sum / array.length));
		document.write('Сумма чисел: ' + sum + '<br>');
		document.write('Среднее арифметическое: ' + medium + '<br>');
	}
	arrSum(array);

	function arrProduct(array) {
		let product = 1;
		for(let i = 0; i < array.length; i++) {
			product *= array[i];
		}
		document.write('Произведение чисел: ' + product + '<br>');
	}
	arrProduct(array);
});