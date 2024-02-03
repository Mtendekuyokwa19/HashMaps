class Hashmaps{

  HashTable=new Array(16);

hash(key){

  let hashCode=0;
let primeNumber=31;

for (let i = 0; i < key.length; i++) {
  hashCode=hashCode*primeNumber+key.charCodeAt(i)
  
}
hashCode=hashCode%this.HashTable.length

 return hashCode
}

nodeMaker(key,value){


  return [key,value]
}



set(key,value){
  
  let Node=this.nodeMaker(this.hash(key),value);


  this.HashTable[this.hash(key)]=Node

  this.loadFactorCalc()
}

get(key){


return this.HashTable[this.hash(key)]

}


loadFactorCalc(){

let loadFactor=75;
let counter=0;

this.HashTable.forEach(node=>{

if (!(node===undefined)) {
  
  counter++;
}


})

let capacity=Math.floor((counter/this.HashTable.length)*100);


if (capacity>loadFactor) {

  this.createNewBucketList()
}

}


createNewBucketList(){

  let newBucketList=new Array(this.HashTable.length*2);

  let index=0
  this.HashTable.forEach(node=>{

    newBucketList[node.key]=node;

  })



this.HashTable=newBucketList;


}


has(string){

  let code=this.hash(string)
  if(code===this.HashTable[code][0]){

    return true
  }

  return false
}

remove(string){

  let code=this.hash(string)

  if (!(this.has(string))) {
    
    return false
  }
this.HashTable.splice(code,1)

return true
}

length(){

  let counter=0;

  for (let i = 0; i < this.HashTable.length; i++) {
   
    if (!(this.HashTable[i]===undefined)) {
      counter++;
      
    }
   
    return counter;
  }


  
}


clear(){


  
this.HashTable.splice(0,this.HashTable.length)
  


}

keys(){

  let keyArray=[];

  for (let i = 0; i < this.HashTable.length; i++) {
   if(!(this.HashTable[i]===undefined)){

    keyArray.push(this.HashTable[i][0])

   }
    
  }


  return keyArray
}

values(){
  let valueArray=[];

  for (let i = 0; i < this.HashTable.length; i++) {
   if(!(this.HashTable[i]===undefined)){

    valueArray.push(this.HashTable[i][1])

   }
    
  }


  return valueArray

}

entries(){

  let entriesArray=[];

  for (let i = 0; i < this.HashTable.length; i++) {
   if(!(this.HashTable[i]===undefined)){

    valueArray.push(this.HashTable[i])

   }
    
  }


  return entriesArray;

}

}






