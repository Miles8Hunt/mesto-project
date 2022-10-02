import {popupZoom, imageZoom, captionZoom} from "./utils/utils.js";

//=========================================================================================================

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
};

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_active');
    closePopup(popup);
  }
}

// закрытие попапа при нажатии на оверлей
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popup = document.querySelector('.popup_active');
    closePopup(popup);
  }
}

// Открытие попапа с картинкой
function openZoomPopup(evt) {
  imageZoom.src = evt.target.src;
  imageZoom.alt = evt.target.alt;
  captionZoom.textContent = evt.target.alt;
  openPopup(popupZoom);
};

//=========================================================================================================
  
export {openPopup, closePopup, closePopupEsc, closePopupOverlay, openZoomPopup};