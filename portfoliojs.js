function submitForm() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
if (validation())
{
document.getElementById("form_id").submit();
alert("Thank you for reaching me out " + name + ", I will get back to you as soon as possible. Have a great day!");
}
}

function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name === '' && email === '') 
    {
    alert("Please fill all fields!");
    return false;
    }
    else {
    return true;
    }
}
