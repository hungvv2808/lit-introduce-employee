function processFileUploaderSelection(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    const inputId = input.id;

    reader.onloadend = function (e) {
      let dropzone = document.querySelector(`.dropzone__${inputId}`);
      let imageUpload = e.target.result;
      dropzone.src = imageUpload;
      defaultData[snakeToCamel(inputId)] = imageUpload;
    }

    reader.readAsDataURL(input.files[0]);
  }
}

function uploadFileProcessor() {
  modalIdNames.forEach((elementData) => {
    if ('image' !== elementData.type) {
      return;
    }

    const dropzone = document.querySelector(`.dropzone__${elementData.id}`);
    dropzone.addEventListener('click', () => {
      document.querySelector(`#${elementData.id}`).click();
    });
  });
}