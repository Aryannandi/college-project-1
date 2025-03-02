
function func(){
    const email = document.getElementById("exampleFormControlInput1").value;
    const pass= document.getElementById("exampleFormControlInput2").value;

    if(email == "rohitmakam9@gmail.com" && pass == "Groupnumber3"){
        window.location.assign("main.html");
    }else{
        alert("Invalid details")
    }
}