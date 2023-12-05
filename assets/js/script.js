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


// Open modal window
// function openModal() {
//   // Получаем элемент с идентификатором "carNumber"
//   var carNumberElement = document.getElementById("carNumber");

//   // Проверяем, существует ли элемент
//   if (carNumberElement) {
//     // Получаем значение введенного номера машины
//     var carNumber = carNumberElement.value;
//   } else {
//     // Если элемент не существует, устанавливаем carNumber как пустую строку или другое значение по умолчанию
//     var carNumber = "";
//   }

//   // Переходим на страницу form.html
//   window.location.href = "form.html";

//   // Устанавливаем значение в input модального окна
//   var modalCarNumberInput = document.getElementById("modalCarNumber");

//   // Используем execCommand для вставки данных в поле ввода
//   modalCarNumberInput.focus();
//   document.execCommand('insertText', false, carNumber);

//   // Закрываем модальное окно (если необходимо)
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// Open modal window
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


function closeModal() {
  // Закрываем модальное окно
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


//



// drag and drop

//


//
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


//
function enablePlateInput() {
  var plateInput = document.getElementById('plate');
  var formEdit = document.querySelector('.form-edit');

  // Переключаем класс
  formEdit.classList.toggle('edit');

  // Инвертируем состояние disabled
  plateInput.disabled = !plateInput.disabled;
}
//


//input plate
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