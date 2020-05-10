// const submitBtn = document.querySelector('.submit-btn');

// const getData = (e) => {


//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'feedbackform.php?firstname=Adil', true);

//     xhr.onload = () => {
//         console.log(this.responseText);
//     }

//     xhr.send();
// }

// submitBtn.addEventListener('click', getData);



// const getData = (e) => {
//     e.preventDefault();

//     let firstname = document.getElementById('firstname').value;
//     let firstnamefield = document.getElementById('firstname');
//     console.log(firstname)

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'feedbackform.php?firstname='+firstname, true);

//     xhr.onload = () => {
//         console.log(xhr.responseText);
//     }

//     xhr.send();

//     feedbackform.reset();
// }

// feedbackform.addEventListener('submit', getData);


const feedbackform = document.querySelector('#feedbackForm');

const getData = (e) => {
    e.preventDefault();

    const submitConfirm = document.querySelector('.submit-confirm');
    const submitClose = submitConfirm.querySelector('.submit-confirm-close');
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    let message = document.getElementById('message').value;
    let params = 'firstname=' + firstname + '&lastname=' +lastname + '&email=' + email + '&contact=' + contact + '&message=' +message;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'feedbackform.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = () => {
        console.log(xhr.responseText);
        
    }

    submitConfirm.style.display = 'block';

    submitClose.addEventListener('click', e=> {
        submitConfirm.style.display = 'none';
    });
    xhr.send(params);

    feedbackform.reset();
}

feedbackform.addEventListener('submit', getData);

