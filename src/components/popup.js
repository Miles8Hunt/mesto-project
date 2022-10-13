import {popupZoom, imageZoom, captionZoom} from "./utils/constants.js";

//===================================================================================================================

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

function openZoomPopup(evt) {
  imageZoom.src = evt.target.src;
  imageZoom.alt = evt.target.alt;
  captionZoom.textContent = evt.target.alt;
  openPopup(popupZoom);
};

//===================================================================================================================
  
export {openPopup, closePopup, closePopupEsc, openZoomPopup};