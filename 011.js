let content= document.getElementById("div1")
content.innerHTML = "<h1>This content is to test innerHTML property</h1>"
// JS Can Change HTML Attribute value
// syntax
// element.attribute = "new attribute value"
function imagechange(){
    let imageElement = document.getElementById("img1")
    imageElement.src ="images/1.webp";
    imageElement.style.width = "150px";
    imageElement.style.height = "150px";
}
// JS can create HTML Element
// syntax
let element1=document.createElement("h1");
let text=document.createTextNode("This is to demonstrate how JS can create HTML")
element1.appendChild(text);
content.appendChild(element1)

let list1 = document.getElementById("fruit");
let item1 = document.getElementById("item1");
let item2= document.getElementById("item2");
list1.removeChild(item1);
let itemElement1=document.createElement("l1");
let itemText1=document.createTextNode("Apple");
itemElement1.appendChild(itemText1);
list1.insertBefore(itemElement1, item2);