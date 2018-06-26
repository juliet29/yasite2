//make useable for all section_values
// defining the cool scrolling function
$.fn.scrollAppear = function(className) {
  // cool scrolling thing

  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    if (wScroll > $(className).offset().top - ($(window).height() / 1.1)) {
      //console.log($(className).find(".ju-scroll"))
      $(className).find(".ju-scroll").each(function(i) {
        setTimeout(function() {
          $(className).find(".ju-scroll").eq(i).addClass('is-showing');
        }, 150 * (i + 1));
        //console.log("now showing " + wScroll)
      });
    } else if (wScroll < ($('.ju-hero_newIdea').offset().top)) {
      $('.ju-scroll').removeClass('is-showing');
      //console.log("no longer showing " + wScroll)
    }

  });

}


// loading Page
function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 1000);

  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function() {
  show('page', true);
  show('loading', false);
});
