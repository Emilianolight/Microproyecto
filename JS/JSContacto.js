

var getData= function(){
    var name= document.getElementById("name").value;
    var numero= Number(document.getElementById("number").value);
    var mail= document.getElementById("mail").value;
    var msg= document.getElementById("msg").value;
    if(name=="" || numero=="" || mail=="" || msg=="" ){

        alert("No has llenado todos los campos");
    }else{

    console.log("El nombre es:" + name);
    console.log("El número es:"+numero);
    console.log("El email es:" + mail);
    console.log("El mensaje es:"+ msg);
alert("Su solicitud ha sido enviada");
    }

}