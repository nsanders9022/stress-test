$(document).ready(function(){
  $("form#stresssurvey").submit(function(event) {
    event.preventDefault();
    $("#stress-factors").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#stress-factors').append(workTransportationMode + "<br>");
    });
    $('#stresssurvey').hide();
  });
});
