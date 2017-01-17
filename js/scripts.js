$(document).ready(function(){
  $("form#stresssurvey").submit(function(event) {
    event.preventDefault();

    $(".stress-factors").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      $('#warning-signs').append(warningSigns + "<br>");
      number += 1;
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      $('#health-symptoms').append(healthSymptoms + "<br>");
      number += 1;
    });

    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      $('#coping-methods').append(copingMethods + "<br>");
      number -= 1;
    });

    $('#stresssurvey').hide();
    $("#recommendations").append(result());

  });
});

var number = 0;

var result  = function() {
  if (number <= 3) {
    return ("Yay! You have low stress!")
  } else if (number >= 4 && number <= 7) {
    return ("You need a drink!")
  } else {
    return ("Dear god, go to the doctor!")
  }
}
