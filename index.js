$( document ).ready(function(){
console.log('hi')
// $('#from').autocomplete({
//     source: ["Киев","Львов","Одесса"]
// })
// $('#to').autocomplete({
//     source: ["Киев","Львов","Одесса"]
// })


inp = document.querySelector('#from')
inp_to = document.querySelector('#to')
function autocomp(inp, arr) {

  var currentFocus;

  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      arr = ["Киев","Львов","Одесса","Огород","Луганск","Кривой-рог"];
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;

      a = document.createElement("div");
      wrap = document.createElement("div")
      topp = document.createElement("div")
  
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      wrap.setAttribute("class", "autocomplete-wraper");
      console.log(wrap)
      // console.log(topp)
      // topp.setAttribute("class", "top");
      // topp.append("Для поиска введите необходимый город");
      // wrap.append(top)
      wrap.appendChild(a);
      document.querySelector('.tickets').appendChild(wrap);
      

      for (i = 0; i < arr.length; i++) {

        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

          b = document.createElement("div");

          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);

          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {

              inp.value = this.getElementsByTagName("input")[0].value;

          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      console.log(x)
      if (x) x = x.getElementsByTagName("div");
      console.log(x)
      if (e.keyCode == 40) {

        currentFocus++;

        addActive(x);
      } else if (e.keyCode == 38) { 

        currentFocus--;
   
        addActive(x);
      } else if (e.keyCode == 13) {

        e.preventDefault();
        if (currentFocus > -1) {

          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    
    if (!x) return false;
    
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);

    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {

    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {

    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}



autocomp(inp);
autocomp(inp_to);

$('.btt').click(function(){

  inpForm = $('#from, #to, #date'), form={};
  console.log(inpForm)
  for ( i = 0; i<inpForm.length; i++){
    var arr = inpForm[i].name, tmp = form;
    console.log(arr)
    for( k=1;k<arr.length-1;k++){
      !tmp[arr[k]] && (tmp[arr[k]] = {}); tmp = tmp[arr[k]]
    }
    tmp[arr[k]] = inpForm[i].value
  }
  console.log(form)
})










$('#from').blur(()=>{
  console.log('alrt_from')
  if (inp.value == ""){
    
    $('.alrt_from').css({'display':'flex'})
  }
});
$('#from').on('keyup',()=>{

  if (inp.value){
    $('.alrt_from').css({'display':'none'})
  }
  else{
    $('.alrt_from').css({'display':'flex'})
  }
})


$('#to').blur(()=>{
  console.log('alrt_to')
  if (inp_to.value == ""){
  
    $('.alrt_to').css({'display':'flex'})
  }
});
$('#to').on('keyup',()=>{

  if (inp_to.value){
    $('.alrt_to').css({'display':'none'})
  }
  else{
    $('.alrt_to').css({'display':'flex'})
  }
})


$('.swipe').click(function(){
   from = $('#from').val()
   to = $('#to').val()

  $('#to').val(from)
  $('#from').val(to) 
})








$('#datepicker').datepicker($.extend({
    inline: true,
    changeYear: true,
    changeMonth: true,
},
 $.datepicker.regional['ru']
));
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '&#x3c;Пред',
    nextText: 'След&#x3e;',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd M, D.',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$('#date').datepicker({
});   

$('#sub').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });
})