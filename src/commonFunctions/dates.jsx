const getDate = (date) => {
    return new Date(parseInt(date)).getDate(); //Returns Date Example: 22
}

const getFullYear = (date) => {
    return new Date(parseInt(date)).getFullYear(); //Returns year Example: 2019
}

const getMonth = (date) => {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month[new Date(parseInt(date)).getMonth()]; //Returns Month Example: 'Nov'
}
const getMonthEquiphuntStyle = (date) => {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month[date - 1];
}
const getMonthNumber = (date) => {
    return new Date(parseInt(date)).getMonth() + 1; //Returns MonthNumber Example: 11
}

const getFullMonth = (date) => {
    let fullMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return fullMonth[new Date(parseInt(date)).getMonth()]; //Returns FUll Month Example: 'November'
}

const getDay = (date) => {
    let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return day[new Date(parseInt(date)).getDay()]; //Returns Day Example: 'Sat'
}

const getFullDay = (date) => {
    let fullDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return fullDay[new Date(parseInt(date)).getDay()]; //Returns Full Day Example: 'Sat'
}

const getDayNumber = (date) => {
    return new Date(parseInt(date)).getDay() + 1; //Returns DayNumber Example:7
}


// Date Styles
const getDateFormat_1 = (date) => {
    let getDateFormat_1 = getDay(date) + ' ' + getDate(date) + ' ' + getMonth(date) + ' ' + getFullYear(date);
    return getDateFormat_1; // Returns 'Thu, 22 Nov 2019'
}

const getDateFormat_2 = (date) => {
    let getDateFormat_2 = getFullDay(date) + ' ' + getDate(date) + '/' + getMonthNumber(date) + '/' + getFullYear(date);
    return getDateFormat_2; //Returns 'Thursday 22/11/2018'
}

const getDateFormat_3 = (date) => {
    let getDateFormat_3 = getDay(date) + ' ' + getDate(date) + '-' + getMonthNumber(date) + '-' + getFullYear(date);
    return getDateFormat_3; //Returns 'Thu 22-11-2019'
}
const getDateFormat_4 = (date) => {
    let newDate = date.split('-');
    let modifiedDate = newDate[2] + ' ' + getMonthEquiphuntStyle(parseInt(newDate[1])) + ' ' + newDate[0];
    return modifiedDate;
}

export { getDate, getFullYear, getMonth, getMonthNumber, getMonthEquiphuntStyle, getFullMonth, getDay, getFullDay, getDayNumber, getDateFormat_1, getDateFormat_2, getDateFormat_3, getDateFormat_4 }