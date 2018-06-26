// modals javascript on projects page
// to apply to all, by God's Grace
$(document).ready(function(){
  console.log("Document is ready");

  $.fn.scrollAppear('.ju-section_projects-pg-hover-table');

// when the button/overlay is clicked
 $(".ju-hover-table_overlay").click(function(){
 var x = $(".ju-hover-table_overlay").index(this)
 console.log("x = " + x)

 // $( ".ju-modal_content" ).eq( x ).css( "background-color", "yellow" );


 var modalx = $(".ju-modal").eq(x);
//console.log("modalx = " + JSON.stringify(modalx));
 modalx.css("display", "block");
 $("#juHeader").hide();

 var spanx = $(".ju-modal_close").eq(x);

 $(".ju-modal_close").eq(x).click(function(){
 //console.log("spanx = " + JSON.stringify(spanx))
 modalx.css("display", "none");
 $("#juHeader").show();
 })

  /*$("button").click(function(){
    var x = $("button").index(this)
    console.log("x = " + x)

    var modalx = $("#juModal").eq(x);
    console.log("modalx = " + JSON.stringify(modalx));
    var spanx = $(".ju-modal_close").eq(x);
    console.log("spanx = " + spanx);*/
})

});
