const getDataElement = () => {
  const menuItems = document.querySelector('.menu-items');
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');
  const data = document.querySelector('.data');

  return {menuItems, menu, menuIcon, data};
}

const display = (payload) => {
  payload.menuItems.classList.remove('none');
  payload.menuItems.classList.add('block');
  payload.menuIcon.classList.add('black');
  payload.menu.classList.add('active');
  payload.data.classList.add('blur');
  isActive = true;
}
const hidden = (payload) => {
  payload.menuItems.classList.add('none');
  payload.menuItems.classList.remove('block');
  payload.menuIcon.classList.remove('black');
  payload.menu.classList.remove('active');
  payload.data.classList.remove('blur');
  isActive = false;
}

const displayMenu = () => {
  const payload = getDataElement();

  if ([...payload.menuItems.classList].includes('none')) {
    display(payload);
  } else {
    hidden(payload);
  }
};

const setBackgroundImage = (bgUrl) => {
  document.querySelector('.bg').style.backgroundImage = 'url(' + bgUrl + ')';
};
const setValueElement = (payload) => {
  let data = document.querySelector('.' + payload.class);
  let dataValue = defaultData[payload.key];
  if ('image' === payload.type) {
    data.setAttribute("src", dataValue);
  } else {
    data.innerHTML = dataValue;
  }
}

const clickOutsideToCloseMenu = () => {
  document.addEventListener('click', (event) => {
    if (!isActive || null === event.target.closest('.data')) {
      return;
    } else {
      hidden(getDataElement());
    }
  });
}

const edit = () => {
  updateValueModal('get');
}
const screenCapture = () => {
  hidden(getDataElement());
  capture();
}

const submit = () => {
  defaultData.content = $('#content').summernote('code');
  if (updateValueModal()) {
    return;
  }

  updateValueElement();
  setLocalStorage(defaultData);
  document.querySelector('.btn-close').click();
  hidden(getDataElement());

  displayPyro();
};

const updateValueElement = () => {
  classNames.forEach(cn => {
    setValueElement(cn);
  });
  setBackgroundImage(defaultData.backgroundImage);
}

const updateValueModal = (type = 'set') => {
  let check = false;
  modalIdNames.forEach((elementData) => {
    if ('text' !== elementData.type) {
      return;
    }

    const element = document.querySelector(`#${elementData.id}`);
    const elementValidator = element.parentElement.querySelector('.validator');

    if ('set' === type) {
      if ('' === element.value) {
        check = true;
        elementValidator.style.display = 'block';
        element.classList.add('required');
      } else {
        elementValidator.style.display = 'none';
        element.classList.remove('required');
      }
      
      if (!check) {
        defaultData[elementData.key] = element.value;
      }
    } else {
      element.value = defaultData[elementData.key];
      elementValidator.style.display = 'none';
      element.classList.remove('required');
    }
  });

  return check;
}

const displayPyro = () => {
  const pyro = document.querySelector('.pyro');
  pyro.style.display = 'block';
  setTimeout(() => {
    pyro.style.display = 'none';
  }, timeoutPyro);
}

(() => {
  updateLocalStorage();
  updateValueElement();
  clickOutsideToCloseMenu();
  uploadFileProcessor();
  displayPyro();
})();

document.querySelector('.menu-icon').addEventListener('click', displayMenu);
document.querySelector('#edit').addEventListener('click', edit);
document.querySelector('#screen-capture').addEventListener('click', screenCapture);
document.querySelector('.submit').addEventListener('click', submit);