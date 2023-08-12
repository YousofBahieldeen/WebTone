let signed = false;

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("activate");
}
function toggleUpdates(){
    document.getElementById("update-1").classList.toggle("updateA");
}

function toggleNews(){
    document.getElementById("new-1").classList.toggle("newA");
}
if (signed == false){
    document.getElementById("games").style.visibility = 'hidden';
    document.getElementById("signs").onclick = function(){togglePopup();}
}
document.getElementById("submit-1").onclick = function(){
    const usename = document.getElementById("username-1").value;
    const password = document.getElementById("password-1").value;

    if (usename == "Yousof" && password == "1234"){
        document.getElementById("username-1").style.borderColor = "lightgreen";
        document.getElementById("password-1").style.borderColor = "lightgreen";
        togglePopup();
        signed = true;
        dowhilesined();
    }else {
        
        document.getElementById("username-1").classList.toggle("incorrect");
        document.getElementById("password-1").classList.toggle("incorrect");
    }

    if (username == "admin" && password == "12") {
        document.getElementById("username-1").style.borderColor = "lightgreen";
        document.getElementById("password-1").style.borderColor = "lightgreen";
        signed = true;
        dowhileadmin();
    }else {
        document.getElementById("username-1").classList.toggle("incorrect");
        document.getElementById("password-1").classList.toggle("incorrect");
    }
}



function dowhilesined() {
    if(signed == true){
        document.getElementById("signs").innerText = "Yousof";
        document.getElementById("signs").onclick = function(){}
        document.getElementById("games").style.visibility = 'visible';
    }
}

function dowhileadmin(){ 
    if(signed == true){
        document.getElementById("signs").innerText = "Admin";
        document.getElementById("signs").onclick = function(){}
        document.getElementById("games").style.visibility = 'visible';
    }
}