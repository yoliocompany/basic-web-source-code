

function verifName() {

    let myInput = document.getElementById('name');

    let myInputValue = myInput.value;

    if (myInputValue.length < 3) {

        myInput.style.border = '2px solid red';
        myInput.style.color = 'red';

    } else {

        myInput.style.border = '2px solid green';
        myInput.style.color = 'green';

    }


}


function verifEmail() {

    let myInput = document.getElementById('email');

    let myInputValue = myInput.value;

    if (myInputValue.indexOf('@') < 0) {

        myInput.style.border = '2px solid red';
        myInput.style.color = 'red';

    } else {

        myInput.style.border = '2px solid green';
        myInput.style.color = 'green';

    }


}



function verifSubject() {

    let myInput = document.getElementById('subject');

    let myInputValue = myInput.value;

    if (myInputValue.length < 10) {

        myInput.style.border = '2px solid red';
        myInput.style.color = 'red';

    } else {

        myInput.style.border = '2px solid green';
        myInput.style.color = 'green';

    }


}

function verifMessage() {

    let myInput = document.getElementById('message');

    let myInputValue = myInput.value;

    if (myInputValue.length < 10) {

        myInput.style.border = '2px solid red';
        myInput.style.color = 'red';

    } else {

        myInput.style.border = '2px solid green';
        myInput.style.color = 'green';

    }


}