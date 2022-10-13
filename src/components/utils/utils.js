const renderFormLoading = (load, submitButton) => {
  if(load) {
    submitButton.textContent = 'Coхранение...'
    console.log('сохраняю...');
  } else {
    submitButton.textContent = 'Сохранить'
    console.log('сохранил!');
  }
}

//===================================================================================================================

export {renderFormLoading};