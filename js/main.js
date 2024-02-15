if ( localStorage.getItem("show_teacher") == null ){
  localStorage.setItem("show_teacher",true);
}

if ( localStorage.getItem("show_class") == null ){
  localStorage.setItem("show_class",true);
}

  if (localStorage.getItem("pinned_classes") == null) {
    localStorage.setItem("pinned_classes", JSON.stringify({}));
    toggle_sorted_button_color()
  }
}

function reload_table(schedule) {
  $('#main_table thead').remove();
  $('#main_table tbody').remove();
  create_table_header();
  load_table_data(schedule);
}

function create_table_header() {
  header = '<thead><tr>'
  if (localStorage.getItem("show_pin") == "true") { header += '<th>Pin</th>' }
    header += '<th>#</th>'
  if (localStorage.getItem("show_class") == "true") { header += '<th>ΜΑΘΗΜΑ</th>' }
  if (localStorage.getItem("show_teacher") == "true") { header += '<th>ΚΑΘΗΓΗΤΗΣ</th>' }
    header += '<th class="text-center">ΔΕΥΤΕΡΑ</th>'
    header += '<th class="text-center">ΤΡΙΤΗ</th>'
    header += '<th class="text-center">ΤΕΤΑΡΤΗ</th>'
    header += '<th class="text-center">ΠΕΜΠΤΗ</th>'
    header += '<th class="text-center">ΠΑΡΑΣΚΕΥΗ</th>'
    header += '</tr></thead>'

    $('#main_table').append(header)
}
function truncateString(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit)
  } else {
    return string
  }
}

function getPreviousDateWithDay(day) {
  let today = new Date();
  let daysToPreviousDay = (today.getDay() - day + 7) % 7;

  today.setDate(today.getDate() - daysToPreviousDay);

  return today;
}

function compare_time_score(lesson1, lesson2) {
  let lesson1_time_score = 0;
  let lesson2_time_score = 0;
  for (day of ["monday", "tuesday", "wednesday", "thursday", "friday"]) {
    if (day in lesson1.teaching_slots) {
      lesson1_time_score = lesson1.teaching_slots[day].start;
      break
    }
  }
  for (day of ["monday", "tuesday", "wednesday", "thursday", "friday"]) {
    if (day in lesson2.teaching_slots) {
      lesson2_time_score = lesson2.teaching_slots[day].start;
      break
    }
  }

  return lesson1_time_score - lesson2_time_score;
}

function load_table_data(schedule) {
  // console.log($("#main_table"));
  $('#main_table').append('<tbody class="table-group-divider">')

  if (localStorage.getItem('sort_classes') == "true")
    // sort primarily on the time score and secondarily on the first day of the week with class
    schedule.sort((c1, c2) => compare_time_score(c1, c2) || date_score(c1) - date_score(c2) || c1.code.localeCompare(c2.code));
  else
    // sort based on the class codes (e.g. HY-100)
    schedule.sort((c1, c2) => c1.code.localeCompare(c2.code));

  let unpinned_count = 0;
  $.each(schedule, function (index, lesson) {
    //console.log(data);
    //console.log(Date());

    if (localStorage.getItem('pinned_view') == "true" && localStorage.getItem(lesson.code) == null) {
      if (++unpinned_count == schedule.length) {
        toggle_pinned_view();
        reload_table(schedule);
      }
      return;
    }


    if (localStorage.getItem('pinned_view') == 'true') {
      Object.entries(lesson.teaching_slots).forEach(([day, slot]) => {
        if (!lessons_read[day].has(lesson.title)) {
          let closest_previous_day = getPreviousDateWithDay(day_name_to_int[day]);

          let start_date = new Date(closest_previous_day);
          start_date.setHours(slot.start, 0);

          let end_date = new Date(closest_previous_day);
          end_date.setHours(slot.end, 0);

          calendar.addEvent(
            lesson.code,
            truncateString(lesson.title, 62),
            '',
            start_date,
            end_date,
            { freq: 'WEEKLY', until: CALENDAR_END_DATE, byday: [day.slice(0, 2).toUpperCase()] }
          );

          lessons_read[day].add(lesson.title);
        }
      })
    }
    line = '<tr>'
    if (localStorage.getItem("show_pin") == "true") { line += '<td>' + return_pin_button(lesson.code) + '</td>' }
    line += '<td>' + lesson.code + '</td>'
    if (localStorage.getItem("show_class") == "true") { line += '<td>' + lesson.title + '</td>' }
    if (localStorage.getItem("show_teacher") == "true") { line += '<td>' + lesson.teacher + '</td>' }

    for (day of ["monday", "tuesday", "wednesday", "thursday", "friday"]) {
      line += '<td class="text-center">'
      if (day in lesson.teaching_slots) {
        let slot = lesson.teaching_slots[day];
        line += slot.start + "-" + slot.end + "<br>" + slot.classroom;
        if ("comment" in slot)
          line += " " + slot.comment
      }
      line += '</td>';

    }

    line += '</tr>'
    $('#main_table').append(line)
  })

  $('#main_table').append("</tbody>")
}

// Hide Class Name column from table
function toggle_teacher() {
  var show_teacher = localStorage.getItem("show_teacher") == "false" ? true : false
  localStorage.setItem("show_teacher", show_teacher);
  toggle_teacher_button_color()
}

// Hide Teacher column from table
function toggle_class() {
  var show_class = localStorage.getItem("show_class") == "false" ? true : false
  localStorage.setItem("show_class", show_class);
  toggle_class_button_color();
}

// Sort classes based on the class code or the date/time
function toggle_sort() {
  var sorted = localStorage.getItem("sort_classes") == "false" ? true : false
  localStorage.setItem("sort_classes", sorted);
  toggle_sorted_button_color()
}

function toggle_teacher_button_color() {
  if (localStorage.getItem("show_teacher") == "true") {
    $('#show_teacher').removeClass("btn-outline-secondary")
    $('#show_teacher').addClass("btn-outline-success")
  } else {
    $('#show_teacher').removeClass("btn-outline-success")
    $('#show_teacher').addClass("btn-outline-secondary")
  }
}

function toggle_class_button_color() {
  if (localStorage.getItem("show_class") == "true") {
    $('#show_class').removeClass("btn-outline-secondary")
    $('#show_class').addClass("btn-outline-success")
  } else {
    $('#show_class').removeClass("btn-outline-success")
    $('#show_class').addClass("btn-outline-secondary")
  }
}

function toggle_sorted_button_color() {
  if (localStorage.getItem("sort_classes") == "true") {
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
  localStorage.setItem("pinned_view", pinned_view);
  toggle_pinned_view_button_color()
}

function toggle_pinned_view_button_color() {
  if (localStorage.getItem("pinned_view") == "true") {
    $('#pinned_view').removeClass("btn-outline-secondary")
    $('#pinned_view').addClass("btn-outline-success")
  } else {
    $('#pinned_view').removeClass("btn-outline-success")
    $('#pinned_view').addClass("btn-outline-secondary")
  }
  toggle_export_button();
}

function enable_pinned_view_button_color() {
  $('#pinned_view').removeClass("btn-outline-secondary")
  $('#pinned_view').addClass("btn-outline-success")
}

function disable_pinned_view_button_color() {
  $('#pinned_view').removeClass("btn-outline-success")
  $('#pinned_view').addClass("btn-outline-secondary")
}

function return_pin_button(lclass) {
  let vl = ""
  let pinned_classes = localStorage.getItem("pinned_classes");

  if (pinned_classes) {
    let pinned_classes_json = JSON.parse(pinned_classes);

    if (lclass in pinned_classes_json) {
      vl = "checked"
    }
  }

  return '<input type="checkbox" ' + vl + ' onclick="add_to_Pinned(`' + lclass + '`);" /> ';
}

function toggle_export_button() {
  if (localStorage.getItem("pinned_view") == "true") {
    $('#export_calendar').show();
  } else {
    $('#export_calendar').hide();
    calendar = new ics();
    lessons_read["monday"].clear();
    lessons_read["tuesday"].clear();
    lessons_read["wednesday"].clear();
    lessons_read["thursday"].clear();
    lessons_read["friday"].clear();
  }
}

function add_to_Pinned(lclass) {
  let pinned_classes = localStorage.getItem("pinned_classes");
  let pinned_classes_json;

  if (pinned_classes) {
    pinned_classes_json = JSON.parse(pinned_classes);
    if (lclass in pinned_classes_json) {
      delete pinned_classes_json[lclass];
    } else {
      pinned_classes_json[lclass] = true;
    }
  } else {
    pinned_classes_json = {};
    pinned_classes_json[lclass] = true;
  }

  localStorage.setItem("pinned_classes", JSON.stringify(pinned_classes_json));
}

function download_calendar(schedule, calendar_end_date) {
  let calendar = new ics();
  let pinned_classes = localStorage.getItem("pinned_classes");

  if (!pinned_classes) {
    alert("You don't have any selected classes");

    return;
  }

  let pinned_classes_json = JSON.parse(pinned_classes);

  if ($.isEmptyObject(pinned_classes_json)) {
    alert("You don't have any selected classes");

    return;
  }

  for (key in pinned_classes_json) {
    let lesson = schedule[key];

    Object.entries(lesson.teaching_slots).forEach(([day, slot]) => {
      let closest_previous_day = getPreviousDateWithDay(day_name_to_int[day]);

      let start_date = new Date(closest_previous_day);
      start_date.setHours(slot.start, 0);

      let end_date = new Date(closest_previous_day);
      end_date.setHours(slot.end, 0);

      calendar.addEvent(
        lesson.code,
        truncateString(lesson.title, 62),
        '',
        start_date,
        end_date,
        { freq: 'WEEKLY', until: calendar_end_date, byday: [day.slice(0, 2).toUpperCase()] }
      );
    })
  }

  calendar.download();
}

// Manage Classes rework

let manage_classes_clicked = false;
let saved_pinned_view_state = false;
function manage_pinned_view_state() {
  if (!manage_classes_clicked) {
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
    if (saved_pinned_view_state)
      enable_pinned_view_button_color();
    else
      disable_pinned_view_button_color();

      //change the button text to "Manage Classes" and disable
      disable_pin();
      manage_classes_clicked = false;
  }
  toggle_export_button();
}

// return a score (for sorting classes) based on the first day of class 
function date_score(lesson) {
  if (lesson.teaching_slots.monday)
    return 1;
  else if (lesson.teaching_slots.tuesday)
    return 2;
  else if (lesson.teaching_slots.wednesday)
    return 3;
  else if (lesson.teaching_slots.thursday)
    return 4;
  else if (lesson.teaching_slots.friday)
    return 5;
  return 0;
}

function clear_cache() {
  localStorage.clear();
  window.location.reload();
}

function setup_event_handlers(data) {
  $("#show_pin").on("click", () => {
    manage_pinned_view_state();
    reload_table(data.schedule);
  });
  $("#show_class").on("click", () => {
    toggle_class();
    reload_table(data.schedule);
  });
  $("#show_teacher").on("click", () => {
    toggle_teacher();
    reload_table(data.schedule);
  });
  $("#pinned_view").on("click", () => {
    toggle_pinned_view();
    reload_table(data.schedule);
  });

  $("#sort_classes").on("click", () => {
    toggle_sort();
    reload_table(data.schedule);
  });

  $("#reload_table").on("click", () => {
    reload_table(data.schedule);
  });

  $("#export_calendar").on("click", () => {
    download_calendar(data.schedule, data.end_date);
  })
}

$(document).ready(async () => {
  create_table_header();
  calendar = new ics();

  data_request = new Request("data/data.json");

  data = await fetch(data_request).then((response) => response.json());
  load_table_data(data.schedule);

  setup_event_handlers(data);

  $('#csd_version').html(data.version);
  toggle_teacher_button_color();
  toggle_class_button_color();
  toggle_sorted_button_color();
  disable_pin();
  toggle_pinned_view_button_color();
  reload_table(data.schedule);
  $('[data-bs-toggle="tooltip"]').tooltip({ trigger: 'hover' });
});