$(document).ready(function () {
  $("#LABEL-NORD, #NORD").mouseover(function () {
    hideAll();
    $("#card_NORD").addClass("visible");
  });

  $("#LABEL-WEST, #WEST").mouseover(function () {
    hideAll();
    $("#card_WEST").addClass("visible");
  });

  $("#LABEL-SUD, #SUD").mouseover(function () {
    hideAll();
    $("#card_SUD").addClass("visible");
  });

  $("#LABEL-OST, #OST").mouseover(function () {
    hideAll();
    $("#card_OST").addClass("visible");
  });
});

function hideAll() {
  $("#card_NORD, #card_WEST, #card_SUD, #card_OST").removeClass("visible");
}
