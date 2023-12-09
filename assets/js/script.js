// Header Burger
// Добавляем обработчик события клика на элемент "burger"
document.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('#burger');
  let navigation = document.querySelector('.navigation');
  let body = document.querySelector('body');
  if (burger) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burger.classList.toggle('active');
      navigation.classList.toggle('active');
      body.classList.toggle('lock');
    });
  }
  // Обработчик события click для всего документа
  document.addEventListener('click', function (e) {
    if (!navigation.contains(e.target)) {
      // Проверяем, кликнули ли вне области navigation и burger
      burger.classList.remove('active');
      navigation.classList.remove('active');
      body.classList.remove('lock');
    }
  });
});
//


// smooth scroll
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scroll to all internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
          behavior: "smooth"
        });
      }
    });
  });
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
});
//


// Slider
$(document).ready(function () {
  if ($('.slider').length) {
    $('#cars__slider').slick({
      //prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none"><path d="M4 8.25H16.17L10.58 4.0575L12 3L20 9L12 15L10.59 13.9425L16.17 9.75H4V8.25Z" fill="none"/></svg></button>',
      //nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none"><path d="M4 8.25H16.17L10.58 4.0575L12 3L20 9L12 15L10.59 13.9425L16.17 9.75H4V8.25Z" fill="none"/></svg></button>',
      centerMode: true,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
});
// slider


// enable Plate Input
function enablePlateInput() {
  var plateInput = document.getElementById('plate');
  var formEdit = document.querySelector('.form-edit');

  // Переключаем класс
  formEdit.classList.toggle('edit');

  // Инвертируем состояние disabled
  plateInput.disabled = !plateInput.disabled;
}
//


//input plate format//
function formatInput(input) {
  // Удаляем все символы, не являющиеся буквами или цифрами
  var formattedValue = input.value.replace(/[^A-Za-z0-9]/g, '');

  // Ограничиваем первые два символа латинскими буквами
  var letters = formattedValue.substring(0, 2).replace(/[^A-Za-z]/g, '');

  // Ограничиваем цифры до 6
  var numbers = formattedValue.substring(2, 8).replace(/\D/g, '');

  // Формируем новое значение
  formattedValue = letters + '-' + numbers;

  // Перезаписываем значение в поле ввода
  input.value = formattedValue;

  // Проверка ввода по регулярному выражению
  var pattern = /^[A-Za-z]{2}-\d{6}$/;
  if (!pattern.test(input.value)) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
}
//


// Open Form page window
function openModal() {
  // Получаем элемент с идентификатором "carNumber"
  var carNumberElement = document.getElementById("carNumber");

  // Проверяем, существует ли элемент
  if (carNumberElement) {
    // Получаем значение введенного номера машины
    var carNumber = carNumberElement.value;

    // Сохраняем значение введенного номера машины в localStorage
    localStorage.setItem("carNumber", carNumber);

    // Логируем значение введенного номера машины в консоль
  }

  // Переходим на страницу form.html
  window.location.href = "form.html";
}


document.addEventListener("DOMContentLoaded", function () {
  // Получаем значение из localStorage
  var carNumber = localStorage.getItem("carNumber");
  console.log('carNumber:', carNumber);

  // Устанавливаем значение в input модального окна
  var modalCarNumberInput = document.getElementById("modalCarNumber");

  if (modalCarNumberInput) {
    modalCarNumberInput.value = carNumber || "";  // Проверяем, есть ли значение carNumber, иначе устанавливаем пустую строку
  }
});
//


// go to next step in information__form--step
function nextStep(button) {
  // Находим ближайший родительский элемент с классом "information__form--step"
  var currentStepElement = button.closest('.information__form--step');

  // Если найден, добавляем класс "done" и убираем класс "active"
  if (currentStepElement) {
    currentStepElement.classList.add('done');
    currentStepElement.classList.remove('active');

    // Находим следующий элемент с классом "information__form--step"
    var nextStepElement = currentStepElement.nextElementSibling;

    // Если найден, добавляем класс "active"
    if (nextStepElement) {
      nextStepElement.classList.add('active');
    }
  }
}
//


// edit information__form--step
function toggleClasses(button) {
  // Находим ближайший родительский элемент с классом "information__form--step"
  var stepElement = button.closest('.information__form--step');

  // Если найден, добавляем класс "active" и убираем класс "done"
  if (stepElement) {
    stepElement.classList.add('active');
    stepElement.classList.remove('done');
  }
}
//


// upload files drag and drop
const dropFileZone = document.getElementById("inputWrapper");
const statusText = document.getElementById("uploadForm_Status");
const sizeText = document.getElementById("uploadForm_Size");
const uploadInput = document.getElementById("fileInput");
const itemList = document.getElementById("itemList");
const formDropContainer = document.querySelector('.information__form--step-drop-container'); // Новая строка

let selectedFiles = [];

let setStatus = (text) => {
  statusText.textContent = text;
};

const uploadUrl = "/unicorns";

["dragover", "drop"].forEach(function (event) {
  document.addEventListener(event, function (evt) {
    evt.preventDefault();
    return false;
  });
});

dropFileZone.addEventListener("dragenter", function () {
  dropFileZone.classList.add("_active");
});

dropFileZone.addEventListener("dragleave", function () {
  dropFileZone.classList.remove("_active");
});

dropFileZone.addEventListener("drop", function () {
  dropFileZone.classList.remove("_active");

  const newFiles = Array.from(event.dataTransfer?.files);

  selectedFiles = selectedFiles.concat(newFiles);

  updateFileList();

  // Вызываем функцию для добавления/удаления класса
  addImagesClass();
});

uploadInput.addEventListener("change", (event) => {
  const newFiles = Array.from(uploadInput.files);

  selectedFiles = selectedFiles.concat(newFiles);

  updateFileList();

  // Вызываем функцию для добавления/удаления класса
  addImagesClass();
});

function processingUploadFile(file) {
  if (file) {
    const dropZoneData = new FormData();
    const xhr = new XMLHttpRequest();

    dropZoneData.append("file", file);

    xhr.open("POST", uploadUrl, true);

    xhr.send(dropZoneData);

    xhr.onload = function () {
      if (xhr.status == 200) {
        setStatus("All upload");

        updateFileList();

        // Вызываем функцию для добавления/удаления класса
        addImagesClass();
      } else {
        setStatus("Error");
      }
      HTMLElement.style.display = "none";
    };
  }
}

function updateFileList() {
  itemList.innerHTML = "";

  selectedFiles.forEach((file, index) => {
    const listItem = document.createElement("li");

    const spanElement = document.createElement("span");
    spanElement.textContent = `${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
    
    listItem.appendChild(spanElement);


    // Создаем новый элемент svg для иконки "icon-check"
    const checkIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    checkIcon.setAttribute("class", "icon icon-check");
    checkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    checkIcon.setAttribute("height", "16");
    checkIcon.setAttribute("width", "14");
    checkIcon.setAttribute("viewBox", "0 0 448 512");

    // Создаем новый элемент path для иконки "icon-check"
    const checkPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    checkPath.setAttribute("d", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z");
    
    // Добавляем path в svg
    checkIcon.appendChild(checkPath);

    // Добавляем svg в span
    spanElement.prepend(checkIcon);

    // Создаем новый элемент svg для иконки "icon-remove"
    const removeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    removeIcon.setAttribute("class", "icon icon-remove");
    removeIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    removeIcon.setAttribute("height", "16");
    removeIcon.setAttribute("width", "14");
    removeIcon.setAttribute("viewBox", "0 0 448 512");

    const removePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    removePath.setAttribute("d", "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z");

    removeIcon.appendChild(removePath);

    removeIcon.addEventListener("click", function () {
      selectedFiles.splice(index, 1);

      updateFileList();

      // Вызываем функцию для добавления/удаления класса
      addImagesClass();
    });

    listItem.appendChild(removeIcon);

    itemList.appendChild(listItem);
  });
}

// Функция для добавления/удаления класса
function addImagesClass() {
  if (selectedFiles.length > 0) {
    formDropContainer.classList.add('has-images');
  } else {
    formDropContainer.classList.remove('has-images');
  }
}
//


