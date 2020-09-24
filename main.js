const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
function howmuch(str){
	let k=0;
for(let i=0; i<str.length; i++){
	if (str.charAt(i) == 'а'){
		k++;
	}
}
return k;
}
if(howmuch(firstRow)>=howmuch(secondRow)){
	console.log(firstRow);
}else{
	console.log(secondRow);
}
