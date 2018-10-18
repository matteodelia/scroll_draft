$( document ).ready(function() {
    zoom_instagram ();
    zoom_behance ();
    zoom_vimeo ();
});

function zoom_instagram () {
$(".instagram").mouseover(function(){
  $(".instagram").removeClass("unhovered");
  $(".instagram").addClass("hovered");
});
$(".instagram").mouseout(function(){
  $(".instagram").removeClass("hovered");
  $(".instagram").addClass("unhovered");
});
}

function zoom_behance () {
$(".behance").mouseover(function(){
  $(".behance").removeClass("unhovered01");
  $(".behance").addClass("hovered01");
});
$(".behance").mouseout(function(){
  $(".behance").removeClass("hovered01")
  $(".behance").addClass("unhovered01");
});
}

function zoom_vimeo () {
$(".vimeo").mouseover(function(){
  $(".vimeo").removeClass("unhovered");
  $(".vimeo").addClass("hovered");
});
$(".vimeo").mouseout(function(){
  $(".vimeo").removeClass("hovered")
  $(".vimeo").addClass("unhovered");
});
}
