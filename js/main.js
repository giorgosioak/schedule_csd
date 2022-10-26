if ( localStorage.getItem("show_teacher") == null ){
  localStorage.setItem("show_teacher",true);
}

if ( localStorage.getItem("show_class") == null ){
  localStorage.setItem("show_class",true);
}

if ( localStorage.getItem("sort_classes") == null ){
  localStorage.setItem("sort_classes",false);
  toggle_sorted_button_color()
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

  if(localStorage.getItem('sort_classes') == "true")
    // sort primarily on the time score and secondarily on the first day of the week with class
    programma.sort((c1, c2) => c1.time_score - c2.time_score || date_score(c1) - date_score(c2) );
  else
    // sort based on the class codes (e.g. HY-100)
    programma.sort((c1, c2) => c1.class.localeCompare(c2.class) );
  
  let unpinned_count = 0;
  $.each(programma, function (index, data) {
    // console.log(data);

    if(localStorage.getItem('pinned_view') == "true" && localStorage.getItem(data['class']) == null) {
      if(++unpinned_count == programma.length) {
        toggle_pinned_view();
        reload_table();
      }
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

// Sort classes based on the class code or the date/time
function toggle_sort(){
  var sorted = localStorage.getItem("sort_classes") == "false" ? true : false
  localStorage.setItem("sort_classes",sorted);
  toggle_sorted_button_color()
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

function toggle_sorted_button_color(){
  if ( localStorage.getItem("sort_classes") == "true" ) {
    $('#sort_classes').removeClass("btn-outline-secondary")
    $('#sort_classes').addClass("btn-outline-success")
  } else {
    $('#sort_classes').removeClass("btn-outline-success")
    $('#sort_classes').addClass("btn-outline-secondary")
  }
}


// pin staff
function enable_pin() {
  $('#show_pin').html('Save')
  localStorage.setItem("show_pin", true);
  enable_pin_button_color();
}

function disable_pin() {
  $('#show_pin').html('Manage Classes')
  localStorage.setItem("show_pin", false)
  disable_pin_button_color();
}

function enable_pin_button_color() {
  $('#show_pin').addClass("btn-primary")
  $('#show_pin').removeClass("btn-secondary")
}

function disable_pin_button_color() {
  $('#show_pin').removeClass("btn-primary")
  $('#show_pin').addClass("btn-secondary")
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

function enable_pinned_view_button_color() {
  $('#pinned_view').removeClass("btn-outline-secondary")
  $('#pinned_view').addClass("btn-outline-success")
}

function disable_pinned_view_button_color() {
  $('#pinned_view').removeClass("btn-outline-success")
  $('#pinned_view').addClass("btn-outline-secondary")
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


// Manage Classes rework

let manage_classes_clicked = false;
let saved_pinned_view_state = false;
function manage_pinned_view_state() {

  if(!manage_classes_clicked) {
    // save old state of pinned classes
    let p_v_state = localStorage.getItem("pinned_view") == "true" ? true : false;
    saved_pinned_view_state = p_v_state;

    // force disable pinned view
    localStorage.setItem("pinned_view", false);
    disable_pinned_view_button_color();

    //change the button text to "Save" and enable pins
    enable_pin();
    manage_classes_clicked = true;
  }
  else {
    // revert to the saved state
    localStorage.setItem("pinned_view", saved_pinned_view_state);
    if(saved_pinned_view_state)
      enable_pinned_view_button_color();
    else 
      disable_pinned_view_button_color();
  
      //change the button text to "Manage Classes" and disable
      disable_pin();
      manage_classes_clicked = false;
    }
}

// return a score (for sorting classes) based on the first day of class 
function date_score(lesson){
  if (lesson.monday)
      return 1;
  else if (lesson.tuesday)
      return 2;
  else if (lesson.wednesday)
      return 3;
  else if (lesson.thursday)
      return 4;
  else if (lesson.friday)
      return 5;
  return 0;
}

function clear_cache() {
  localStorage.clear();
  window.location.reload();
}

$(document).ready(() => {
  create_table_header();
  load_table_data();
  toggle_teacher_button_color();
  toggle_class_button_color();
  disable_pin();
  toggle_pinned_view_button_color();
  reload_table();
  $('#csd_version').html(csd_version)
  $('[data-bs-toggle="tooltip"]').tooltip({trigger : 'hover'});
});