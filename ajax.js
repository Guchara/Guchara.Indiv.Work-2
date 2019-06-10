
function ajax(url ,method ,functionName ,dataArray){
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(requestData(dataArray));

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status  == 200){
            functionName(this.response);
        }
    }

}

function requestData(dataArr){
    let out = '';
    for(let key in dataArr){
        out += `${key} = ${dataArr[key]}&`;
    }
    return out;
}



// function f1(data){
//     console.log(data);
//     document.querySelector('#out').innerHTML = data;
// }

// let arr = {
//     'name':'Dima'
// }
// ajax('server.php','POST',f1,arr);