

function add(){

    let myInputValue = document.getElementById('todo').value;

    let myList = document.getElementById('list');

    let listItem = document.createElement('li');

    listItem.textContent = myInputValue;

    myList.appendChild( listItem );


}