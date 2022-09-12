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
    header =  "<thead><tr>"
    header += "<th>#</th>"
    if ( localStorage.getItem("show_class")   == "true" ) { header += "<th>ΜΑΘΗΜΑ</th>" }
    if ( localStorage.getItem("show_teacher") == "true" ) { header += "<th>ΚΑΘΗΓΗΤΗΣ</th>" }
    header += "<th>ΔΕΥΤΕΡΑ</th>"
    header += "<th>ΤΡΙΤΗ</th>"
    header += "<th>ΤΕΤΑΡΤΗ</th>"
    header += "<th>ΠΕΜΠΤΗ</th>"
    header += "<th>ΠΑΡΑΣΚΕΥΗ</th>"
    header += "</tr></thead>"

    $('#main_table').append(header)
}

function load_table_data () {
  // console.log($("#main_table"));

  $('#main_table').append("<tbody>")

  $.each(programma, function (index, data) {
    // console.log(data);

    line = '<tr>'
    line += '<td>' + data['class'] + '</td>'
    if ( localStorage.getItem("show_class")   == "true" ) { line += '<td>' + data['name'] + '</td>' }
    if ( localStorage.getItem("show_teacher") == "true" ) { line += '<td>' + data['teacher'] + '</td>' }
    line += '<td>' + data['monday'] + '</td>'
    line += '<td>' + data['tuesday'] + '</td>'
    line += '<td>' + data['wednesday'] + '</td>'
    line += '<td>' + data['thursday'] + '</td>'
    line += '<td>' + data['friday'] + '</td>'
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

$(document).ready(create_table_header)
$(document).ready(load_table_data)
$(document).ready(toggle_teacher_button_color)
$(document).ready(toggle_class_button_color)