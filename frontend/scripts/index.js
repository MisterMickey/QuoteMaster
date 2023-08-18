const letsGo = document.getElementById("submit");

//Greeting
const hours = new Date().getHours();
let greet = "";
if(hours<=17 & hours>=5){
    greet = hours<12?"Morning":"Afternoon";
}else{
    greet = hours<22?"Evening":"Night";
}




letsGo.addEventListener("click", function(){
    const userName = document.getElementById("userName").value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("greeting", greet);
    window.location.href = "/homepage";
})


