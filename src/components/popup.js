import {popupZoom, imageZoom, captionZoom} from "./utils/constants.js";

//=========================================================================================================

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupEsc);
};

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_active');
    closePopup(popup);
  }
};

function clearInputs (popup) {
  popup.querySelectorAll('.popup__input').forEach(input => {
    input.value = null;
    input.classList.remove('popup__input_type_error');
    document.querySelector('.avatar-input-error').textContent = ' ';
  })
};

function profileClearError() {
  document.getElementById('userName-input').classList.remove('popup__input_type_error');
  document.getElementById('about-input').classList.remove('popup__input_type_error');
  document.querySelector('.userName-input-error').textContent = ' ';
  document.querySelector('.about-input-error').textContent = ' ';
}
function cardClearError() {
  document.getElementById('title-input').classList.remove('popup__input_type_error');
  document.getElementById('url-input').classList.remove('popup__input_type_error');
  document.querySelector('.title-input-error').textContent = ' ';
  document.querySelector('.url-input-error').textContent = ' ';
}

// Открытие попапа с картинкой
function openZoomPopup(evt) {
  imageZoom.src = evt.target.src;
  imageZoom.alt = evt.target.alt;
  captionZoom.textContent = evt.target.alt;
  openPopup(popupZoom);
};

//=========================================================================================================
  
export {openPopup, closePopup, closePopupEsc, openZoomPopup, clearInputs, profileClearError, cardClearError};