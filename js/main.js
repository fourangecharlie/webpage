function main() {

  $('.about').hide();

  $('.aboutbutton').on('click', function() {
		$('.about').slideToggle(400);
    $(this).toggleClass('active');

  });
}

$(document).ready(main);
