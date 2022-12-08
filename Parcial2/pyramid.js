function llamarValores(){
    if (document.getElementById('textVal').value == "" || document.getElementById('textVal').value == " "){
        document.getElementById('error').innerHTML = "*Ingrese los Valores de la Piramide";
    }
    else{
    let i;
    let x = document.form;
    i = x.textVal.value;
    return i.toString();  
    }
}

function llamarTamano(){
    if (document.getElementById('textTam').value == "" || document.getElementById('textTam').value == " "){
        document.getElementById('error').innerHTML = "*Ingrese El Tamaño de la Piramide";
    }
    else{
    let i;
    let x = document.form;
    i = x.textTam.value;
    return i.toString();  
    }
}