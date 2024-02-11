var calendar = new ics();
var CALENDAR_END_DATE = '5/19/2024' // MM/DD/YYYY Date to end repetition. Update every semester depending on csd academic calendar
var lessons_read = {
    "monday": new Set(),
    "tuesday": new Set(),
    "wednesday": new Set(),
    "thursday": new Set(),
    "friday": new Set(),
};

const day_name_to_int = {
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5
};