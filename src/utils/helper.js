function compareTime(dateString1, dateString2){
    let date1 = new Date(dateString1);
    let date2 = new Date(dateString2);

    return date1.getTime() > date2.getTime();
}

module.exports = {
    compareTime
}