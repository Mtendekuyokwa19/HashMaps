class Hashmaps{

  HashTable=[];

hash(key){

  let hashCode=0;
let primeNumber=31;

for (let i = 0; i < key.length; i++) {
  hashCode=hashCode*primeNumber+key.charCodeAt(i)
  
}
hashCode=hashCode%16

 return hashCode
}

nodeMaker(key,value){


  return{key,value}
}



set(key,value){
  let Node=this.nodeMaker(key,value);


  this.HashTable[key]=Node
}


loadFactorCalc(){

let loadFactor=75;
let counter=0;
this.HashTable.forEach(node=>{

if (!(node===null)) {
  
  counter++;
}


})

let currentFactor=Math.floor(counter/this.HashTable.length)



}

addLinkedList(){

  
}



}


let trialOfclass=new Hashmaps();

console.log(trialOfclass.hash("kcaj"))