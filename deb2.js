const fnamelm = document.getElementById("fname");
const lnamelm = document.getElementById("lname");
// const language = ["JS","Python","GO","Kotlin"]; 

// document.getElementById("frut").innerHTML = language; 

greet = () => {
    fname = fnamelm.value; 
    lname = lnamelm.value; 
    debugger;
    alert(`Hey,${fname} ${lname}`); 
    fnamelm.value = ""; 
    lnamelm.value = ""; 

}
handlesubmit =() =>{
    greet(); 
}

doo = () => {
    alert("this is Rayhan"); 
 }


 
 rok = () => {
     alert("the age is: 23"); 
 }

 const fruits = ["orange","apple","mango","graps"]; 

  document.getElementById("frut").innerHTML= fruits; 

ro = () => {
    fruits.push("banana");
    
    document.getElementById("frut").innerHTML= fruits;
}

doco = () => {
    fruits.pop();
    document.getElementById("frut").innerHTML= fruits;
}