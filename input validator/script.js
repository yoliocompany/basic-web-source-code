


function verif(){

    let myInput = document.getElementById('name');

    let myInputValue = myInput.value;

    let myDiv = document.getElementById('alert');

    if(myInputValue.length < 3){

        myDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
           invalid name
        </div>
        `;

    }else{

        myDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            valid name
        </div>

        `;

    }

}