
function func(){
    const email = document.getElementById("exampleFormControlInput1").value;
    const pass= document.getElementById("exampleFormControlInput2").value;

    if(email == "admin" && pass == "admin"){
        window.location.assign("main.html");
    }else{
        alert("Invalid details")
    }
}