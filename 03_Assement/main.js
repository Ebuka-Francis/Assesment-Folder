const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const genderSelect = document.querySelector('#cars');
const formResult = document.querySelector('#formResult');
const formAction = document.querySelector('form');
const goBackButton = document.querySelector('button');
goBackButton.style.display = 'none';

const myForm = document.querySelector('#myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if(firstName.value === '' || lastName.value === '' || genderSelect.value === 'gender') {
        alert('seriously ur not going to fill the form properly');
        return false;
    }else {
     formResult.innerHTML = `Firstname: ${firstName.value}, Lastname: ${lastName.value}, gender:${genderSelect.value}`;
    goBackButton.style.display = 'block';
     formAction.style.display = 'none';
     return false;
    }
})
const goBack = document.querySelector('#goBack').addEventListener('click', () => {
    formAction.style.display = 'block';
    firstName.value = '';
    lastName.value = '';
goBackButton.style.display = 'none';
})
