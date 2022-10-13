if ( localStorage.getItem("show_teacher") == null ){
  localStorage.setItem("show_teacher",true);
}

if ( localStorage.getItem("show_class") == null ){
  localStorage.setItem("show_class",true);
}

function reload_table() {

    $('#main_table thead').remove();
    $('#main_table tbody').remove();
    create_table_header();
    load_table_data();

}

function create_table_header() {
    header =  '<thead><tr>'
    if ( localStorage.getItem("show_pin") == "true" ) { header +=  '<th>Pin</th>' }
    header += '<th>#</th>'
    if ( localStorage.getItem("show_class")   == "true" ) { header += '<th>ΜΑΘΗΜΑ</th>' }
    if ( localStorage.getItem("show_teacher") == "true" ) { header += '<th>ΚΑΘΗΓΗΤΗΣ</th>' }
    header += '<th class="text-center">ΔΕΥΤΕΡΑ</th>'
    header += '<th class="text-center">ΤΡΙΤΗ</th>'
    header += '<th class="text-center">ΤΕΤΑΡΤΗ</th>'
    header += '<th class="text-center">ΠΕΜΠΤΗ</th>'
    header += '<th class="text-center">ΠΑΡΑΣΚΕΥΗ</th>'
    header += '</tr></thead>'

    $('#main_table').append(header)
}

function load_table_data () {
  // console.log($("#main_table"));

  $('#main_table').append('<tbody class="table-group-divider">')

  $.each(programma, function (index, data) {
    // console.log(data);

    if(localStorage.getItem('pinned_view') == "true" && localStorage.getItem(data['class']) == null) {
      return;
    }

    line = '<tr>'
    if ( localStorage.getItem("show_pin") == "true" ) { line += '<td>' + return_pin_button(data['class']) + '</td>' }
    line += '<td>' + data['class'] + '</td>'
    if ( localStorage.getItem("show_class")   == "true" ) { line += '<td>' + data['name'] + '</td>' }
    if ( localStorage.getItem("show_teacher") == "true" ) { line += '<td>' + data['teacher'] + '</td>' }
    line += '<td class="text-center">' + data['monday'] + '</td>'
    line += '<td class="text-center">' + data['tuesday'] + '</td>'
    line += '<td class="text-center">' + data['wednesday'] + '</td>'
    line += '<td class="text-center">' + data['thursday'] + '</td>'
    line += '<td class="text-center">' + data['friday'] + '</td>'
    line += '</tr>'
    $('#main_table').append(line)
  })

  $('#main_table').append("</tbody>")

}

// Hide Class Name column from table
function toggle_teacher(){
  var show_teacher = localStorage.getItem("show_teacher") == "false" ? true : false
  localStorage.setItem("show_teacher",show_teacher);
  toggle_teacher_button_color()
}

// Hide Teacher column from table
function toggle_class(){
  var show_class = localStorage.getItem("show_class") == "false" ? true : false
  localStorage.setItem("show_class",show_class);
  toggle_class_button_color();
}
function toggle_teacher_button_color(){
  if ( localStorage.getItem("show_teacher") == "true" ) {
    $('#show_teacher').removeClass("btn-outline-secondary")
    $('#show_teacher').addClass("btn-outline-success")
  } else {
    $('#show_teacher').removeClass("btn-outline-success")
    $('#show_teacher').addClass("btn-outline-secondary")
  }
}

function toggle_class_button_color(){
  if ( localStorage.getItem("show_class") == "true" ) {
    $('#show_class').removeClass("btn-outline-secondary")
    $('#show_class').addClass("btn-outline-success")
  } else {
    $('#show_class').removeClass("btn-outline-success")
    $('#show_class').addClass("btn-outline-secondary")
  }
}



// pin staff

function toggle_pin(){
  var show_pin = localStorage.getItem("show_pin") == "false" ? true : false
  localStorage.setItem("show_pin",show_pin);
  toggle_pin_button_color()  
}

function toggle_pin_button_color(){
  if ( localStorage.getItem("show_pin") == "true" ) {
    $('#show_pin').addClass("btn-light")
    $('#show_pin').removeClass("btn-secondary")
  } else {
    $('#show_pin').removeClass("btn-light")
    $('#show_pin').addClass("btn-secondary")
  }
}

function toggle_pinned_view() {
  var pinned_view = localStorage.getItem("pinned_view") == "false" ? true : false
  localStorage.setItem("pinned_view",pinned_view);
  toggle_pinned_view_button_color()  
}

function toggle_pinned_view_button_color(){
  if ( localStorage.getItem("pinned_view") == "true" ) {
    $('#pinned_view').removeClass("btn-outline-secondary")
    $('#pinned_view').addClass("btn-outline-success")
  } else {
    $('#pinned_view').removeClass("btn-outline-success")
    $('#pinned_view').addClass("btn-outline-secondary")
  }
}

let pstate = false;
function manage_pinned_view() {
  if(!pstate) { // pstate is false
    if(localStorage.getItem("pinned_view") == "true") {
      toggle_pinned_view();
    }
    pstate = true;
  }
  else { // pstate is true
    if(localStorage.getItem("pinned_view") == "false") {
      toggle_pinned_view();
    }
    pstate = false;
  }
   
}

function return_pin_button(lclass){
  let vl = ""
  if(localStorage.getItem(lclass) == "true") {
    vl = "checked"
  }
  return '<input type="checkbox" ' + vl + ' onclick="add_to_Pinned(`' + lclass + '`);" /> ';
}

function add_to_Pinned(lclass) {
  
  if(localStorage.getItem(lclass)) { 
    localStorage.removeItem(lclass)
    return;
  }
  localStorage.setItem(lclass, true);
}




$(document).ready(() => {
  create_table_header();
  load_table_data();
  toggle_teacher_button_color();
  toggle_class_button_color();
  toggle_pin_button_color();
  toggle_pinned_view_button_color();
  $('[data-bs-toggle="tooltip"]').tooltip({trigger : 'hover'});
});