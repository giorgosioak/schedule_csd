function reload_table() {

    $('#main_table tr').remove();    
    create_table_header();
    load_table_data();

}

function create_table_header() {
    header =  "<tr>"
    header += "<th>#</th>"
    header += "<th>ΜΑΘΗΜΑ</th>"
    header += "<th>ΚΑΘΗΓΗΤΗΣ</th>"
    header += "<th>ΔΕΥΤΕΡΑ</th>"
    header += "<th>ΤΡΙΤΗ</th>"
    header += "<th>ΤΕΤΑΡΤΗ</th>"
    header += "<th>ΠΕΜΠΤΗ</th>"
    header += "<th>ΠΑΡΑΣΚΕΥΗ</th>"
    header += "</tr>"

    $('#main_table').append(header)
}

function load_table_data () {
  // console.log($("#main_table"));

  $.each(programma, function (index, data) {
    // console.log(data);

    line = '<tr>'
    line += '<td>' + data['class'] + '</td>'
    line += '<td>' + data['name'] + '</td>'
    line += '<td>' + data['teacher'] + '</td>'
    line += '<td>' + data['monday'] + '</td>'
    line += '<td>' + data['tuesday'] + '</td>'
    line += '<td>' + data['wednesday'] + '</td>'
    line += '<td>' + data['thursday'] + '</td>'
    line += '<td>' + data['friday'] + '</td>'
    line += '</tr>'
    $('#main_table').append(line)
  })
}

$(document).ready(create_table_header)
$(document).ready(load_table_data)
