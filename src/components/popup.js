import {popupZoom, imageZoom, captionZoom} from "./utils/constants.js";
import {resetValidationErrors} from "./validate.js";

//=========================================================================================================

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupEsc);
  resetValidationErrors(popup);
};

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_active');
    closePopup(popup);
  }
};

// Открытие попапа с картинкой
function openZoomPopup(evt) {
  imageZoom.src = evt.target.src;
  imageZoom.alt = evt.target.alt;
  captionZoom.textContent = evt.target.alt;
  openPopup(popupZoom);
};

//=========================================================================================================
  
export {openPopup, closePopup, closePopupEsc, openZoomPopup};