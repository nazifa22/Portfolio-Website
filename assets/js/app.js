var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const getColorbar = document.querySelector('.color_bar')
const icon = document.querySelector('.icon')
const colors = document.querySelectorAll('.color')

icon.addEventListener('click', function() {
  getColorbar.classList.toggle('inout')
})

const colorMap = colors.forEach(function(color) {
  color.addEventListener('click', function() {
    getColorbar.classList.remove('inout')
  })
})

$(document).ready(function(){

  $("span.color-1").click(function(){
      $("body").removeClass().addClass("color-1-bar") ;
  });

  $("span.color-2").click(function(){
      $("body").removeClass().addClass("color-2-bar");
  });

  $("span.color-3").click(function(){
      $("body").removeClass().addClass("color-3-bar");
  });

  $("span.color-4").click(function(){
      $("body").removeClass().addClass("color-4-bar");
  });

  $("span.color-5").click(function(){
      $("body").removeClass().addClass("color-5-bar");
  });

  $("span.color-6").click(function(){
      $("body").removeClass().addClass("color-6-bar");
  });

  $("span.color-7").click(function(){
      $("body").removeClass().addClass("color-7-bar");
  });

  $("span.color-8").click(function(){
      $("body").removeClass().addClass("color-8-bar");
  });

  $("span.color-9").click(function(){
      $("body").removeClass().addClass("color-9-bar");
  });

});