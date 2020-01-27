// minus and plus buttons
var count = 0;

var countEl = document.getElementById("count");
var countE2 = document.getElementById("count1");


function plus() {
    count++;
    countEl.value = count;
    countE2.value = count;
    sum();
}

function minus() {
    if (count > 0) {
        count--;
        countEl.value = count;
        countE2.value = count;
        sum1();
    }
}


var price = 14.99;
var total = 14.99;
// adding and subtracting

function sum() {
    if (count > 1) {
        total = price + total;
        total = Math.round(total * 100) / 100
        sum2()
    }
}

function sum1() {
    if (count > 0) {
        total = total - price;
        total = Math.round(total * 100) / 100
        sum2()
    }
}

function sum2() {
    document.getElementById('output').innerHTML = "$" + parseFloat(total);
    document.getElementById('output2').innerHTML = "$" + parseFloat(total);

}
// add colors to the details

function addToCart1() {
    var cartRow = document.createElement("li")
    var cartItems = document.getElementsById("my-list")[0]
    var cartRowContent = '<div class="cartItem"> <input class="colorButton" data-image="black" type="radio" id="black" name="color" value="black" onclick="plus()"> <label for="black"><span></span></label>  </div>'
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)

    cartItem.insert(cartRow, cartRow)
}

function addProduct() {
    // this is just a product placeholder
    var productAdded = '<li class="cd-cart__product"><div class="cartItem"> <input class="colorButton" data-image="red" type="radio" id="red" name="color" value="red" onclick="plus()"><label for="red"><span></span></label></div> </li> '
    cartList.insertAdjacentHTML('beforeend', productAdded);
}
// from Add to cart to Checkout
function change() {
    document.querySelector('#btn-change').textContent = 'Check Out';
    document.querySelector('#exampleModalLongTitle').innerHTML = 'Check Out';
    document.querySelector('#input_div').innerHTML = 'Total : R' + total;

    document.querySelector('#m-footer').innerHTML = '<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="reload()">CheckOut</button> <button type="button" class="btn btn-secondary" data-dismiss="modal">Home</button>';

}
// Reload the page
function reload() {
    location.reload();
}