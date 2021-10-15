$(document).ready(function(){
    $('.sidenav').sidenav({edge:"right"});
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.datepicker').datepicker({
      fromat: "dd mmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n:{
        done: "Select"
      }
    });
  });
