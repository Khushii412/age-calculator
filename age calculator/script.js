
function calculateAge(){
    var birthDateValue = document.getElementById('age').value;
    if(!birthDateValue){
        alert('please enter your DOB');
        return;
    }

    var birthDate = new Date(birthDateValue);
    var today = new Date();

    var year = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    if(month < 0 || (month === 0 && days < 0)){
        year--;
        month += 12;
    }
     
    if(days < 0){
        var lastmonth = new Date(getFullYear(), getMonth() - 1, 0);
        days +=lastmonth.getDate();
    }

    var displayAge = document.getElementById('display-age');
    displayAge.innerText = `your age is ${year} years ${month} months ${days} days`;
    displayAge.style.color = 'white';
    displayAge.style.fontFamily = 'san-sarif'
}
