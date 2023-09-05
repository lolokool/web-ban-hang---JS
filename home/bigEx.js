$("document").ready(function () {
  $("#open-login").click(function () {
    $(".home").addClass("show1");
  });

  $(".close").click(function () {
    $(".home").removeClass("show1");
    $(".home").removeClass("active");
  });

  $("#signup").click(function () {
    $(".home").removeClass("show1");
    $(".home").addClass("active");
  });

  $("#Creat").click(function () {
    $(".home").removeClass("active");
    $(".home").addClass("show1");
  });

  $(".close").click(function () {
    $("#exampleInputEmail1").trigger("reset");
  });
});
