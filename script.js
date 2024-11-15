//Create a 'click' function on the submit button
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  //Add a required attribute to the first todo input
  const toDo = document.getElementById('toDoList');
  toDo.setAttribute('required', '');

  //Give the input an error message if it is empty
  if (toDo.value.trim() === '') {
    const existingError = document.getElementById('err-message');
    if (!existingError) {
      const errMessage = document.createElement('h1');
      errMessage.id = 'err-message';
      errMessage.innerHTML = 'Please write something you wish to do!';
      document.getElementById('section-1').appendChild(errMessage);
    }
    return;
  }

  //Get the 'ul' element and create a new 'li' and 'input'
  const ulTag = document.querySelector('ul');
  const newList = document.createElement('li');
  const newInput = document.createElement('input');

  //Give the new 'input' the first todo inputs value and make it disabled
  newInput.setAttribute('value', toDo.value);
  newInput.setAttribute('class', 'newInputClass');
  newInput.setAttribute('disabled', '');

  newList.className = 'myList';

  //Create 3 new buttons
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  const btn3 = document.createElement('button');

  //Add the description of the buttons
  btn1.innerText = 'Ändra';
  btn2.innerText = 'Färdig';
  btn3.innerText = 'Radera';

  //Give the buttons new classes
  btn1.className = 'change-Btn';
  btn2.className = 'done-Btn';
  btn3.className = 'delete-Btn';

  //Append the items to the 'li' element and the list to the 'ul' element
  newList.appendChild(newInput);
  newList.appendChild(btn1);
  newList.appendChild(btn2);
  newList.appendChild(btn3);
  ulTag.appendChild(newList);

  //Remove the error messages if the input is not empty
  const errDisplay = document.querySelectorAll('#err-message');
  errDisplay.forEach(errorMessages => errorMessages.remove());

  class AllButtons {
    firstButton = function () {
      //Change the first button to say 'Spara' instead of 'Ändra'
      btn1.addEventListener('click', function () {
        //If the new input is empty write the error message.
        if (newInput.value.trim() === '') {
          let errorExists = document.getElementById('error-message');
          if (!errorExists) {
            const para = document.createElement('p');
            para.id = 'error-message';
            para.innerHTML = 'Please write a to do!';
            document.getElementById('section-2').appendChild(para);
          }
        } else {
          const errorExists = document.getElementById('error-message');
          if (errorExists) {
            errorExists.remove();
          }
          if (this.innerText === 'Ändra') {
            newInput.removeAttribute('disabled');
            this.innerText = 'Spara';
          } else if (this.innerText === 'Spara') {
            newInput.setAttribute('disabled', '');
            this.innerText = 'Ändra';
          }
        }
      });
    };

    thirdButton = function () {
      //Remove the new input
      btn3.addEventListener('click', function () {
        this.parentNode.remove();
      });
    };
    secondButton = function () {
      //Send the input to the 'Färdiga' section
      btn2.addEventListener('click', function () {
        const secondList = document.createElement('li');
        const section3 = document.getElementById('section-3');
        section3.appendChild(secondList);
        secondList.append(newInput, btn1, btn2, btn3);
        this.remove();
      });
    };
  }
  const buttons = new AllButtons();
  buttons.firstButton();
  buttons.secondButton();
  buttons.thirdButton();
});

const form = document.getElementsByTagName('form');
const restoreBtn = document.createElement('button');
restoreBtn.id = 'restore-btn';
restoreBtn.innerText = 'Återställ';
form[0].appendChild(restoreBtn);
