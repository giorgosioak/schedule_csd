var calendar = new ics();
var TODAY = new Date();
var nearest_dates = [
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
]
nearest_dates[0].setDate(TODAY.getDate() + (7-TODAY.getDay()+1 % 7)-7 || 7);
nearest_dates[1].setDate(TODAY.getDate() + (7-TODAY.getDay()+2 % 7)-7 || 7);
nearest_dates[2].setDate(TODAY.getDate() + (7-TODAY.getDay()+3 % 7)-7 || 7);
nearest_dates[3].setDate(TODAY.getDate() + (7-TODAY.getDay()+4 % 7)-7 || 7);
nearest_dates[4].setDate(TODAY.getDate() + (7-TODAY.getDay()+5 % 7)-7 || 7);

var CALENDAR_END_DATE = '5/19/2023' // MM/DD/YYYY Date to end repetition. Update every semester depending on csd academic calendar
var lessons_read = [
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
]
lessons_read[0].clear();
lessons_read[1].clear();
lessons_read[2].clear();
lessons_read[3].clear();
lessons_read[4].clear();