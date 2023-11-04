// var  secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// var  thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display="none";


// //Queryselectorall

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0;i < odd.length;i++)
// {
//    odd[i].style.backgroundColor = "lightgreen";
// }






var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
//parent Element
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
//children
//console.log(itemList.childNodes);//it gives the whole array with white spaces like in text form in array
// console.log(itemList.children);//it gives only items 
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
// //FIRST CHILD
// console.log(itemList.firstChild); //it gives output as itemlists including white spaces so output is text
// //FIRST ELEMENT CHILD 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'//the 1st item name is change to hello 1
//LAST CHILD
//console.log(itemList.lastChild); //it gives output as itemlists including white spaces so output is text
//LAST ELEMENT CHILD 
//  console.log(itemList.lastElementChild);//it gives last elemment
//  itemList.lastElementChild.textContent = 'Hello 4'//the last item name is change to hello 4
//nextSibling
// previous sibiling
// console.log(itemList.previousSibling);//text
// console.log(itemList.previousElementSibling); //<h2 class="title">items</h2>
// itemList.previousElementSibling.style.color = 'green';//item color covert in to green
//CreateElement 

//create div 
var newDiv = document.createElement('div');
//add a class
newDiv.className= 'Helllo';
// add id
newDiv.id= 'hello1';
// add attribute
newDiv.setAttribute('title','Hello div');
//create a text node
var newDivText = document.createTextNode('Hello');//create a text node for div
//add text to div\
newDiv.appendChild(newDivText);//hello world is added to the div
console.log(newDiv);
 var container  = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize = '30px';
console.log(newDiv);

var newList= document.createElement('li');
newList.className = 'list-group-item';
newList.id ='hello1';
var newListText = document.createTextNode('Hello');
newList.appendChild(newListText);

var main = document.querySelector('div .list-group');
var items =document.querySelector('div li');//i take
console.log(newList);
//console.log(newUlElement);
main.insertBefore(newList,items);










