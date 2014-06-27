function createCalendar(selector, events){
    var parentNode = document.querySelector(selector);
    var calendar = document.createElement("table");
    var dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Thu', 'Wed', 'Fri', 'Sat'];
    var day = 1;
    for (var weekNum = 0; weekNum < 5; weekNum++){
        var week = document.createElement('tr');
        for (var dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++){
            if(day < 31){
                var child = document.createElement('td');
                var label = document.createElement('div');
                label.innerHTML = '<strong>' + dayOfTheWeek[dayOfWeek] + ' ' + day + ' June 2014' + '</strong>';
                label.classList.add('label');
                label.onclick = function(){
                    var  labels = document.getElementsByClassName('label');
                    for (var i = 0, len = labels.length; i < len; i++){
                        labels[i].classList.remove('selected');
                    }
                    this.classList.add('selected');
                };

                child.appendChild(label);
                var event = document.createElement('div');
                event.classList.add('event');
                for(var i = 0, len = events.length; i < len; i++){
                    if(day === Number(events[i].date)){
                        event.innerHTML = '<strong>Event: </strong>' + events[i].title + '<br/> ' + '<strong>Hour: </strong>' + events[i].hour +
                            '<br/>' + '<strong>Duration: </strong>' + events[i].duration;
                    }
                }
                child.appendChild(event);
                week.appendChild(child);
                day++;
            }
        }
        calendar.appendChild(week);
    }
    parentNode.appendChild(calendar);

    var style = document.createElement('style');
    style.innerHTML = 'td, .label, table {border:1px solid black; border-collapse:collapse;}' +
        'td {margin:0; padding:0; width:130px; height: 130px;}' +
        '.label {margin-top: -65px; text-align:center; background:#CCCCCC;}' +
        '.label:hover {background:#999999; cursor:pointer;}' +
        '.selected {background:#fff;}' +
        '.event {position:absolute;}';
    document.body.appendChild(style);
};