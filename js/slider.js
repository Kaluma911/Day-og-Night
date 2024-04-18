$(document).ready(function() {
    $('.slider').on('mousedown', function(event) {
      var slider = $(this);
      var startX = event.pageX - slider.offset().left;

      $(document).on('mousemove', function(event) {
        var offsetX = event.pageX - slider.parent().offset().left;
        var newPosition = offsetX - startX;
        if (newPosition >= 0 && newPosition <= slider.parent().width()) {
          slider.css('left', newPosition);
          slider.prev('img').css('width', newPosition);
        }
      });

      $(document).on('mouseup', function() {
        $(document).off('mousemove');
      });
    });
  });