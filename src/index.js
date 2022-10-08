import './pages/index.css';

import {popupEdit, popupAdd, popupAvatar, 
        editOpen, addOpen, popups, buttonEdit, buttonAdd, avatarOpen, buttonAvatar,
        formEdit, profileName, profileAbout, editNameInput, editAboutInput} from "./components/utils/utils.js";

import {enableValidation} from "./components/validate.js";
import {initializeList} from "./components/card.js";
import {openPopup, closePopup} from "./components/popup.js";

import {pushAvatar, getEdit, pushEdit, getInitialCards} from "./components/api.js";

const profileAvatar = document.querySelector('.profile__avatar');
const formAvatar = document.querySelector('.popup__form-avatar'); 
const avatarInput = document.querySelector('#avatar-input');
const avatarLoad = document.querySelector('.popup__submit-avatar');
const editLoad = document.querySelector('.popup__submit-edit');

//=========================================================================================================

// Добавление события на кнопки 
editOpen.addEventListener('click', function () {
  editNameInput.value = profileName.textContent;
  editAboutInput.value = profileAbout.textContent;
  disableButton(buttonEdit);
  openPopup(popupEdit); // открываем попап редактирования
});
addOpen.addEventListener('click', function () {
  disableButton(buttonAdd);
  openPopup(popupAdd); // открываем попап добавления
});
avatarOpen.addEventListener('click', function () {
  disableButton(buttonAvatar);
  openPopup(popupAvatar); // открываем попап аватара
});

//Функция не активности кнопки submit
function disableButton (button) {
  button.disabled = true;
  button.classList.add('popup__submit_inactive');
};

// обработчики оверлея и крестиков
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_active')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

//=========================================================================================================

// Форма редактирования имени и информации о себе
function handleProfileFormSubmit(evt) {   
  evt.preventDefault();
  profileName.textContent = editNameInput.value;
  profileAbout.textContent = editAboutInput.value;
  editLoad.textContent = "Сохранение...";
  pushEdit(editNameInput.value, editAboutInput.value);
  editLoad.textContent = "Сохраненить";
  closePopup(popupEdit);
};
formEdit.addEventListener('submit', handleProfileFormSubmit);

// Форма редактирования Аватара
function handleAvatarFormSubmit(evt) {   
  evt.preventDefault();
  profileAvatar.src = avatarInput.value;
  avatarLoad.textContent = "Сохранение...";
  pushAvatar(avatarInput.value)
  avatarLoad.textContent = "Сохраненить";
  closePopup(popupAvatar);
};
formAvatar.addEventListener('submit', handleAvatarFormSubmit);

//=========================================================================================================

function profileEdit () {
  getEdit()
  .then(data => {
    profileName.textContent = data.name;
    profileAbout.textContent = data.about;
    profileAvatar.src = data.avatar;
  });
}
profileEdit();

getInitialCards()
  .then(res => {
    initializeList(res);
  });

enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active' 
});