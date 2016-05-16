// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry after all images have loaded
var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  }); 
});

$('.grid-item').on('click', function() {
  $(this).toggleClass('grid-item--gigante');
  $grid.masonry();
});
        



  
       
    
   