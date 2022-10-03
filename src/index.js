import './pages/index.css';

import {content, profile, popupEdit, popupAdd, 
        editOpen, addOpen, popups,
        formEdit, profileName, profileAbout, editNameInput, editAboutInput,
        UpHellyAa, DayZero, ScarletSails, BurningMan1, Venice, BurningMan2, initialCards} from "./components/utils/utils.js";

import {enableValidation} from "./components/validate.js";
import {handleAddFormSubmit, createNewCard, initializeList} from "./components/card.js";
import {openPopup, closePopup, closePopupEsc, closePopupOverlay} from "./components/popup.js";

//=========================================================================================================

// Добавление события на кнопки 
editOpen.addEventListener('click', function () {
  editNameInput.value = profileName.textContent;
  editAboutInput.value = profileAbout.textContent;
  const buttonEdit = document.querySelector('.popup__submit-edit');
  disableButton(buttonEdit);
  openPopup(popupEdit); // открываем попап редактирования
});
addOpen.addEventListener('click', function () {
  const buttonAdd = document.querySelector('.popup__submit-add');
  disableButton(buttonAdd);
  openPopup(popupAdd); // открываем попап добавления
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
  closePopup(popupEdit);
};
formEdit.addEventListener('submit', handleProfileFormSubmit);

//=========================================================================================================

// Инициализация заготовленных карточек
initializeList(initialCards);

enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active' 
});