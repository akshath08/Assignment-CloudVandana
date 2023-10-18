function resetForm() {
    document.getElementById("surveyForm").reset();
}

function submitForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var genderElements = document.getElementsByName("gender");
    var selectedGenders = [];
    genderElements.forEach(function(element) {
        if (element.checked) {
            selectedGenders.push(element.value);
        }
    });
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;


    if (!firstName || !lastName || !dob || country === "" || selectedGenders.length === 0 || !profession || !email || !mobile) {
        alert("Please fill in all required fields.");
        return;
    }


    var resultText = "First Name: " + firstName + "<br>" +
                     "Last Name: " + lastName + "<br>" +
                     "Date of Birth: " + dob + "<br>" +
                     "Country: " + country + "<br>" +
                     "Gender: " + selectedGenders.join(", ") + "<br>" +
                     "Profession: " + profession + "<br>" +
                     "Email: " + email + "<br>" +
                     "Mobile Number: " + mobile;

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("popup").style.visibility = "visible";
}

function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
}
