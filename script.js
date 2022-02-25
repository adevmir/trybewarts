const getEmailId = document.getElementById('emailId');
const getPassId = document.getElementById('senhaId');
const getBtnId = document.getElementById('btnId');
const checkbox = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');


function formButton() {
  // console.log(getEmailId.value);
  // console.log(getPassId.value);
  // const valueGetEmailId = getEmailId.value;
  if (getEmailId.contains === '' || getPassId.value === '') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
getBtnId.addEventListener('click', formButton);

function enableEnviar() {
  if (this.checked) {
    buttonEnviar.removeAttribute('disabled');
  } else {
    buttonEnviar.setAttribute('disabled');
  }
}

checkbox.addEventListener('change', enableEnviar);

// https://www.youtube.com/watch?v=sRlgAjlwz0o
// Ajudou a realizar o requisito 20 com o keypress

const counterTextArea = document.getElementById('textArea');
const counterSpan = document.getElementById('counter');
counterTextArea.addEventListener('keypress', function(varx) {
  const textAreaLength = counterTextArea.value.length + 1;
  console.log(textAreaLength);
  const maxCharacteres = 501;
  if (textAreaLength >= maxCharacteres) {
    varx.preventDefault();
  }

  let valorDecre = maxCharacteres - textAreaLength;

  counterSpan.innerText = valorDecre;

});
