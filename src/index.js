import './pages/index.css';

import {content, profile, popupEdit, popupAdd, 
        editOpen, addOpen, closeButtons,
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
  openPopup(popupEdit); // открываем попап редактирования
});
addOpen.addEventListener('click', function () {
  openPopup(popupAdd); // открываем попап добавления
});
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
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