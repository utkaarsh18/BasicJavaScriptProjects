document.getElementById("submitBtn").onclick = function(){
    let temp;
    if(document.getElementById("cbtn").checked){
        temp = document.getElementById("temp").value;
        temp = Number(temp);
        temp = tocelsius(temp);
        document.getElementById("templabel").innerHTML = temp + "°C" 
    }
    else if(document.getElementById("fbtn").checked){
        temp = document.getElementById("temp").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("templabel").innerHTML = temp + "°F"
    }
    else{
        document.getElementById("templabel").innerHTML = "Select a Unit"
    }


}

temp = 32;
temp = tocelsius(temp);
console.log(temp)


function tocelsius(temp){
    return (temp-32) * (5/9);
}

function tofahrenheit(temp){
    return temp * 9/5 + 32
}