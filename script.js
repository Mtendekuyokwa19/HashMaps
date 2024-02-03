function node() {


  return{value:null,nextNode:null}
}




let lastItem=node();
lastItem.value="lastItem";

let thirdItem=node();
thirdItem.value="thirdItem";
thirdItem.nextNode=lastItem;

let secondItem=node()
secondItem.value="secondItem";
secondItem.nextNode=thirdItem;

let Head=node();
Head.value="Head";
Head.nextNode=secondItem;


let extraItem=node()
extraItem.value="sade";


class LinkedList{

  Head=Head;
  tail=this.transverse()

append(newNode){

  if(Head===undefined){
    Head=newNode

    return 
  }

  newNode.nextNode=null;
this.transverse(Head).nextNode=newNode;



}
prepend(node){

  node.nextNode=Head;
  this.Head=node;


}

size(node=this.Head,length=1){

if(node.nextNode===null){

  return length;
}

length++;
return this.size(node.nextNode,length)


}

transverse(Head=this.Head){

  if(Head.nextNode===null){

    return Head
  }

 
  return this.transverse(Head.nextNode)


}

at(index,locatetPos=1,node=this.Head){

  if (index==locatetPos) {

    return node
  }

  else if(node.nextNode==null){
    return "not found"
  }
  locatetPos++;

  return this.at(index,locatetPos,node.nextNode)


}

 pop(){
let beforeLastnode=this.at(this.size()-1)
beforeLastnode.nextNode=null


 }

 contains(value,node=this.Head){

  if (node.value===value) {

    return true
  }

  else if(node.nextNode===null){

    return false
  }


return this.contains(value,node.nextNode)

 }

 find(value,node=this.Head,length=1){

  if (node.value===value) {

    return length
  }

  else if(node.nextNode===null){

    return "not found"
  }

length++
return this.find(value,node.nextNode,length)


 }

 toString(node=this.Head,stringFormat=""){

  if(node.nextNode===null){

    return stringFormat=stringFormat+node.value
  }


  return this.toString(node.nextNode,stringFormat=stringFormat+node.value+" >> ")

 }

 removesAt(index){

  let nodeBefore=this.at(index-1)
  let nodeAfter=this.at(index+1)
  nodeBefore.nextNode=nodeAfter;
 }
}

let LinkedListFunctionalities=new LinkedList();



console.log(LinkedListFunctionalities.pop())

// LinkedListFunctionalities.removesAt(2)
console.log(LinkedListFunctionalities.size())