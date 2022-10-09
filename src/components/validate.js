// import {formElement, formInput} from "./utils/constants.js";

//=========================================================================================================

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
 
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;

};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  
  // заменяет стандартное сообщение об ошибке
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  // Если поле не проходит валидацию, покажем ошибку
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, {inputErrorClass, errorClass});
  } else {
    hideInputError(formElement, inputElement, {inputErrorClass, errorClass});
  }
};

// Функция, которая добавит слушатель событий для всех полей ввода внутри формы и добавит нужные обработчики
const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {

  // Находим все поля внутри формы, сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, {inactiveButtonClass});
  document.querySelector('.popup__form').reset();
  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {

    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {

      // Внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, {inputErrorClass, errorClass});

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement, {inactiveButtonClass});
    });
  });
}; 

// Функция enableValidation найдёт на странице и обработает все формы
const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {

  // Найдём все формы с указанным классом в DOM, сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
    setEventListeners(formElement, {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass});
  });
};

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
}; 

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {

  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {

    // сделай кнопку неактивной
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);

  // иначе сделай кнопку активной
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(inactiveButtonClass);
  }
}; 

//Функция не активности кнопки submit
function disableSubmitButton (button) {
  button.disabled = true;
  button.classList.add('popup__submit_inactive');
};

//=========================================================================================================

export {enableValidation, disableSubmitButton, hideInputError};