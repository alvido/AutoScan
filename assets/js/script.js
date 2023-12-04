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

// Open modal window
function openModal() {
  // Получаем значение введенного номера машины
  var carNumber = document.getElementById("carNumber").value;

  // Открываем модальное окно
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  // Устанавливаем значение в input модального окна
  var modalCarNumberInput = document.getElementById("modalCarNumber");
  modalCarNumberInput.value = carNumber;
}

function closeModal() {
  // Закрываем модальное окно
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
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