
//function converter(){;
    //const ngn= document.getElementById("Naira and kobo");
    //var dollar=document.getElementById("dollar");
    //var cur=document.getElementById("pesos").value;
     //let a=Number(ngn.value);
    //let b=Number(dollar.value);
    //console.log(cur )
    //if((cur=="naira to dollar")&&(ngn.value !=null)){
        //dollar.value=a/1400
    //}
  //}  else if ((cur=="dollar to naira")&&(dollar.value !=null)){
    //    ngn.value=b*1400;
     // }function converter(){;
      //  const ngn= document.getElementById("yuan and pounds");
        //var dollar=document.getElementById("yuan");
        //var cur=document.getElementById("pesos").value;
         //let a=Number(GPB.value);
        //let b=Number(RMB.value);
        //console.log(cur )
        //if((cur=="yuan to pounds")&&(RMB.value !=null)){
          //  yuan.value=a/1400
        //}
      //}  else if ((cur=="yuan to pounds")&&(yuan.value !=null)){
           // RMB.value=b*1400;
          //}
        //  for loop Syntax 
        // for(expression1;expression2;expression3){
        // blok of code to be execute
      //}
      //const cars=[{ name: "Volvo", model: 2019}, {name: "Toyota", model: 2014},{name: "Camrade", model: 2022}] 
      //var text="<table>";
      // text += cars[0] + "<br>";
      // text += cars[1] + "<br>";
      // text += cars[2] + "<br>";
     // text += "<tr><th>Car Name</th><th>Car Model</th></tr>";
      //for (let i=0; i < cars.length; i++) {
        //text += "<tr><td>" + cars[i].name +"<td>" + cars[i].model +"<td>" + "</tr>"
     // }
      //text += "</table>";
     // document.write(text);
      // while loop syntax
     // let i= 0;
     // while (i < cars.length) {
        // doable code goes here 
      //  text += "<tr><td>" + cars[i].name + "</td>" + "<tr><td>" + cars[i].model + "</td>" + "</tr>"
      //  i++
      //}
      //text += "</table>";
      //document.write(text);

 class car{
     constructor(name, model, year){
      this.carName = name;
      this.CarModel = model;
      this.ProductionYear = year;
     }
     age(c){
      return c-this.ProductionYear;
     }
 }
const car1 = new car("Toyota", "Toyota 201", 2016);
const car2 = new car("Volvo", 459, 2023);
console.log(car1.carname)
console.log(car1.ProductionYear)
console.log(car2.carName)
console.log(car2.ProductionYear)
let d= new Date();
let curYear = d.getFullYear();
console.log(car1.age(curYear))
// Concept of Inheritance
 class man{
    constructor(name,age, status){
      // construction method code goes here
      this.name = name;
      this.age = age;
      this.status = status;
    }
    old(){
      return this.name = "is" + this.age + "old";
    }
  }

 class woman extends man{
  constructor(name,age,status,address, phoneNumber){
    super(name,age,status);
    this.age = age;
    this.status = status;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
 }
   
let person1 = new woman("Mary", 24, "Single","Old CBN Block");
document.write(person1.old())

