const result_p = document.getElementById('result');
let e1 = document.getElementById('e1');
let e2 = document.getElementById('e2');
let e3 = document.getElementById('e3');
let e4 = document.getElementById('e4');
let e5 = document.getElementById('e5');
let e6 = document.getElementById('e6');
let e7 = document.getElementById('e7');
let e8 = document.getElementById('e8');
let e9 = document.getElementById('e9');
let userChoice = 0;
let flag = new Array(0,0,0,0,0,0,0,0,0);

function game(userChoice){
	if(flag[userChoice-1]!=1){
		let str = "e" + userChoice;
		const imgElement = document.getElementById(str);
		// imgElement.classList.add("image");
		imgElement.style.backgroundColor = "green";
	}
}

function main(){
	e1.addEventListener("click", function (){
		game(1);
		flag[0] = 1;
	});
	e2.addEventListener("click", function (){
		game(2);
		flag[1] = 1;
	});
	e3.addEventListener("click", function (){
		game(3);
		flag[2] = 1;
	});
	e4.addEventListener("click", function (){
		game(4);
		flag[3] = 1;
	});
	e5.addEventListener("click", function (){
		game(5);
		flag[4] = 1;
	});
	e6.addEventListener("click", function (){
		game(6);
		flag[5] = 1;
	});
	e7.addEventListener("click", function (){
		game(7);
		flag[6] = 1;
	});
	e8.addEventListener("click", function (){
		game(8);
		flag[7] = 1;
	});
	e9.addEventListener("click", function (){
		game(9);
		flag[8] = 1;
	});
}

main();