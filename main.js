let buttonAdd = document.querySelector('.add-ajax');
let buttonCreate = document.querySelector('.create-btn');


let inp_ProductName = document.querySelector('.product-name');
let inp_ProductNumber = document.querySelector('.product-number');
let inp_ProductQuantity = document.querySelector('.product-quantity');
let inp_ProductImage = document.querySelector('.product-img');

let radio = document.querySelectorAll('.check');
let nameArr = document.querySelectorAll('.name');
let numberArr = document.querySelectorAll('.number');
let kolArr = document.querySelectorAll('.kol');
let imgArr = document.querySelectorAll('.img');

let selectStar = { 'select': 'select_data' };
ajax('server.php', 'POST', out, selectStar);

let check = document.querySelectorAll('.tr .check');
for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
        console.log(check[i].parentElement.parentElement);
    }
}

function out(data) {
    data = JSON.parse(data);

    for (let i = 0; i < data.length; i++) {
        for (let nm = 0; nm < nameArr.length; nm = nm + 1) {
            nameArr[0].innerHTML = data[0].name;
            nameArr[1].innerHTML = data[1].name;
            nameArr[2].innerHTML = data[2].name;
            nameArr[3].innerHTML = data[3].name;
            nameArr[4].innerHTML = data[4].name;
            nameArr[5].innerHTML = data[5].name;
        }

        for (let num = 0; num < numberArr.length; num = num + 1) {
            numberArr[0].innerHTML = data[0].number;
            numberArr[1].innerHTML = data[1].number;
            numberArr[2].innerHTML = data[2].number;
            numberArr[3].innerHTML = data[3].number;
            numberArr[4].innerHTML = data[4].number;
            numberArr[5].innerHTML = data[5].number;
        }

        for (let kol = 0; kol < kolArr.length; kol = kol + 1) {
            kolArr[0].innerHTML = data[0].kol;
            kolArr[1].innerHTML = data[1].kol;
            kolArr[2].innerHTML = data[2].kol;
            kolArr[3].innerHTML = data[3].kol;
            kolArr[4].innerHTML = data[4].kol;
            kolArr[5].innerHTML = data[5].kol;
        }
        for (let img = 0; img < imgArr.length; img = img + 1) {
            imgArr[0].innerHTML = data[0].img;
            imgArr[1].innerHTML = data[1].img;
            imgArr[2].innerHTML = data[2].img;
            imgArr[3].innerHTML = data[3].img;
            imgArr[4].innerHTML = data[4].img;
            imgArr[5].innerHTML = data[5].img;
        }


    }

}

buttonCreate.onclick = function () {

    let dataProduct = {
        'ProductName': inp_ProductName.value,
        'ProductNumber': inp_ProductNumber.value,
        'ProductQuantity': inp_ProductQuantity.value,
        'ProductImage': inp_ProductImage.value,
    }



    let childTd = document.querySelector('td');
    let paretnt;
    let create_name;
    let create_number;
    let create_kol;
    let create_img;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            paretnt = radio[i].parentElement.parentElement;
            // console.log(paretnt);
            let child = paretnt.children;
            // console.log(child);
            for (let j = 0; j < child.length; j++) {
                if (child[j] = childTd) {
                    if (child[j].classList.contains('name') == true) {
                        console.log(child[j].innerHTML);
                        create_name = child[j].innerHTML;
                    }
                }
            }
            for (let j = 0; j < child.length; j++) {
                if (child[j] = childTd) {
                    if (child[j].classList.contains('number') == true) {
                        console.log(child[j].innerHTML);
                        create_number = child[j].innerHTML;
                    }
                }
            }
            for (let j = 0; j < child.length; j++) {
                if (child[j] = childTd) {
                    if (child[j].classList.contains('kol') == true) {
                        console.log(child[j].innerHTML);
                        create_kol = child[j].innerHTML;
                    }
                }
            }
            for (let j = 0; j < child.length; j++) {
                if (child[j] = childTd) {
                    if (child[j].classList.contains('img') == true) {
                        console.log(child[j].innerHTML);
                        create_img = child[j].innerHTML;
                    }
                }
            }
        }
    }

    let createArray = {
        'name': create_name,
        'number': create_number,
        'kol': create_kol,
        'img': create_img,
    }

    console.log(createArray);

    ajax('create.php', 'POST', outCreateData, createArray);

    function outCreateData(data) {
        data = JSON.parse(data);
        console.log(data);
        create_name.innerHTML = data.name;
        create_number.innerHTML = data.number;
        create_kol.innerHTML = data.kol;
        create_img.innerHTML = data.img;
    }

}

// ---------ДОбавление-----------------

if (localStorage.getItem('data') !== null) {
    Adddata();
}


buttonAdd.onclick = Adddata;
function Adddata() {

    const dataProduct = {
        'ProductName': inp_ProductName.value,
        'ProductNumber': inp_ProductNumber.value,
        'ProductQuantity': inp_ProductQuantity.value,
        'ProductImage': inp_ProductImage.value,
    }

    let tr = document.createElement('tr');
    tr.classList.add('tr');

    let th = document.createElement('th');
    th.setAttribute('scope', 'row');
    // th.innerHTML = 7;

    let tdRadio = document.createElement('td')
    let tdCheckInput = document.createElement('input');
    tdCheckInput.setAttribute('type', 'radio');
    tdCheckInput.classList.add('check');
    tdCheckInput.setAttribute('name', 'product');
    tdCheckInput.setAttribute('value', 'c-7');
    tdRadio.appendChild(tdCheckInput);

    let tdName = document.createElement('td');
    tdName.classList.add('name');
    tdName.innerHTML = 'NAME';

    let tdNumber = document.createElement('td');
    tdNumber.classList.add('number');
    tdNumber.innerHTML = "NUMBER";

    let tdKol = document.createElement('td');
    tdKol.classList.add('kol');
    tdKol.innerHTML = "KOLLL";

    let tdImg = document.createElement('td');
    tdImg.classList.add('img');
    tdImg.innerHTML = 'IMG';

    let tBody = document.querySelector('.t-body');
    tBody.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(tdRadio);
    tr.appendChild(tdName);
    tr.appendChild(tdNumber);
    tr.appendChild(tdKol);
    tr.appendChild(tdImg);


    function outDataAdd(data) {
        data = JSON.parse(data);
        tdName.innerHTML = data.name;
        tdNumber.innerHTML = data.number;
        tdKol.innerHTML = data.quantity;
        tdImg.innerHTML = data.image;
        console.log(data);
    }

    localStorage.setItem('data', 'row');

    ajax('test.php', 'POST', outDataAdd, dataProduct);



}

document.querySelector('.search-data').oninput = function () {
    console.log(this.value);
    let val = this.value.trim();
    let dataList = document.querySelectorAll('td');
    if (val != '') {
        dataList.forEach(function (element) {
            if (element.innerText.search(val) == -1){
                // element.classList.add('hide');
            }
            else{
                // element.classList.remove('hide');
            }
        });
    }
    else{
        dataList.forEach(function(element){
            element.classList.remove('hide');
        });
    }
}
