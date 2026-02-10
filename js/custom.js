
(function ($) {

  "use strict";

  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

  $(window).on('scroll', function () {
    function isScrollIntoView(elem, index) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(window).height() * .5;
      if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
        $(elem).addClass('active');
      }
      if (!(elemBottom <= docViewBottom)) {
        $(elem).removeClass('active');
      }
      var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
      var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height() * .5;
      $(MainTimelineContainer).find('.inner').css('height', MainTimelineContainerBottom + 'px');
    }
    var timeline = $('#vertical-scrollable-timeline li');
    Array.from(timeline).forEach(isScrollIntoView);
  });

})(window.jQuery);


// DARK MODE TOGGLE
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlElement = document.documentElement;

  // Load saved theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);

  // Toggle theme on button click
  themeToggle.addEventListener('click', function () {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });

  // Update icon based on theme
  function updateIcon(theme) {
    if (theme === 'dark') {
      themeIcon.classList.remove('bi-moon-fill');
      themeIcon.classList.add('bi-sun-fill');
    } else {
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-fill');
    }
  }
});

