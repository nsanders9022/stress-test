$(document).ready(function(){
  $("form#stresssurvey").submit(function(event) {
    event.preventDefault();

    $(".stress-factors").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      $('#warning-signs').append(warningSigns + "<br>");
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      $('#health-symptoms').append(healthSymptoms + "<br>");
    });

    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      $('#coping-methods').append(copingMethods + "<br>");
    });

    $('#stresssurvey').hide();
  });
});
