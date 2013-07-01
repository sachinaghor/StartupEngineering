#!/usr/bin/env node

//print first 100 Prime Numbers to File
var primes = [];
var num = 2;
var fs = require('fs');
var outFile = "Primes.txt";
while(1){
	if(primes.length >= 100){
		break;
	}
	//Add Prime Numbers to Array
	if (isPrime(num)){
		primes.push(num);
	}
	num++;
}
console.log("Total Prime Numbers =" + primes.length + "\n");
console.log(primes.toString());
fs.writeFileSync(outFile, primes.toString());

function isPrime(num){
	var sqRt = Math.sqrt(num);
	if( num == 1 || num == 2 || num == 3){
		return true;
	}		
	for(var itr=2; itr< sqRt +1; itr++){
		if(num % itr == 0){
			return false;
		}
	}
	return true;
}
