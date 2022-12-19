// Array of objects 
let arr1 = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}]

    let arr2 = [
        {id:4,name:"Siddhi",age:28,profession:"developer"},
        {id:5, name:"Vatsal",age:22, profession:"admin"},
        {id:6, name:"Smeet", age:21,profession:"admin"}];
// Spread operator to appen two arrays. the syntax is ... followed by the array tp append

   

    // Map function to change the age from string to number
    arr1.map(function (item){
        item.age = parseInt(item.age);
        
    })

    // For each to change johns age

    arr1.forEach(item=>{
        if(item.name=="john"){
            item.age = 19;
        }
    })

 arr1 = [...arr1,...arr2];

let cards = document.getElementsByClassName("cards")[0];
arr1.forEach((item)=>{
    let newdiv = document.createElement("div");
    newdiv.innerText = item.id + ". Name: "+  item.name + " Profession: "+ item.profession + " Age:"+item.age ;
    newdiv.style.color = "white";
    newdiv.className = "card";
    cards.append(newdiv);


})

let filterbtn = document.getElementById("filterbtn");
let dropdown = document.getElementById("dropdown");

function filter(){
 let value = dropdown.value;
 if(value=="Profession") {alert("Select a profession before clicking the button.");}
 else{
cards.innerHTML = "";
 arr1.forEach((item)=>{
    if(item.profession==value){
    let newdiv = document.createElement("div");
    newdiv.innerText = item.id + ". Name: "+  item.age + " Profession: "+ item.profession + " Age:"+item.age ;
    newdiv.style.color = "white";
    newdiv.className = "card";
    cards.append(newdiv);

    }
 })
 }
}

// WHen you  press button and you have to filter

filterbtn.onclick = filter;
// TO print the array details on the screen


