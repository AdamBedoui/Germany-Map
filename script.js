$(document).ready(function () {
  $("#LABEL-NORD, #NORD").mouseover(function () {
    $("#card_NORD").addClass("visible");
  });
  $("#LABEL-NORD, #NORD").mouseout(function () {
    $("#card_NORD").removeClass("visible");
  });

  $("#LABEL-WEST, #WEST").mouseover(function () {
    $("#card_WEST").addClass("visible");
  });
  $("#LABEL-WEST, #WEST").mouseout(function () {
    $("#card_WEST").removeClass("visible");
  });

  $("#LABEL-SUD, #SUD").mouseover(function () {
    $("#card_SUD").addClass("visible");
  });
  $("#LABEL-SUD, #SUD").mouseout(function () {
    $("#card_SUD").removeClass("visible");
  });

  $("#LABEL-OST, #OST").mouseover(function () {
    $("#card_OST").addClass("visible");
  });
  $("#LABEL-OST, #OST").mouseout(function () {
    $("#card_OST").removeClass("visible");
  });
});
