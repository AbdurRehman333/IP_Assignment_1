function beforeSubmit() {
    var error = false;
    //Validation Part
    for (let i = 1; i < 5; i++) {
        var total = document.getElementById(`${i}_total`).value;
        var obtained = document.getElementById(`${i}_obtained`).value;
        if (parseInt(obtained) > parseInt(total)) {
            error = true;
        }
    }
    //Error Check
    if (error) {
        // Nothing Happends
    } else {
        document.getElementById('formid').submit();
    }
}

function validation(arg) {
    var This_id = arg.getAttribute('data-id');
    if (This_id == 1) {
        var total = document.getElementById('1_total').value;
        var obtained = document.getElementById('1_obtained').value;
        var name = document.getElementById('1_name').value;
        var error = document.getElementById('err_no_1');
        if (parseInt(obtained) > parseInt(total)) {
            error.classList.add("block");
            error.innerHTML = `(Error) In Subject ${name} , Obtained > Total`;
        } else {
            error.classList.remove("block");
        }
    }
    if (This_id == 2) {
        var total = document.getElementById('2_total').value;
        var obtained = document.getElementById('2_obtained').value;
        var name = document.getElementById('2_name').value;
        var error = document.getElementById('err_no_2');
        if (parseInt(obtained) > parseInt(total)) {
            error.classList.add("block");
            error.innerHTML = `(Error) In Subject ${name} , Obtained > Total`;
        } else {
            error.classList.remove("block");
        }
    }
    if (This_id == 3) {
        var total = document.getElementById('3_total').value;
        var obtained = document.getElementById('3_obtained').value;
        var name = document.getElementById('3_name').value;
        var error = document.getElementById('err_no_3');
        if (parseInt(obtained) > parseInt(total)) {
            error.classList.add("block");
            error.innerHTML = `(Error) In Subject ${name} , Obtained > Total`;
        } else {
            error.classList.remove("block");
        }
    }
    if (This_id == 4) {
        var total = document.getElementById('4_total').value;
        var obtained = document.getElementById('4_obtained').value;
        var name = document.getElementById('4_name').value;
        var error = document.getElementById('err_no_4');
        if (parseInt(obtained) > parseInt(total)) {
            error.classList.add("block");
            error.innerHTML = `(Error) In Subject ${name} , Obtained > Total`;
        } else {
            error.classList.remove("block");
        }
    }
}