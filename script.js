function firstNonRepeatedChar(str) {
 // Write your code here
	let obj={};
	for(let i=0;i<str.length;i++){
		obj[str[i]]=(obj[str[i]] || 0)+1;
	}
	for(let [key,value] of Object.entries(obj)){
		if(value===1){
			return key;
		}	
	}
	return null;	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
