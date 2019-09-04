const employees = [
        'Alex',
        'Kevin',
        'Nige',
        'Phil',
        'Don',
        'Ross',
        'Vitaly'
    ],
    days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
    ];

export const refreshData =  function (iCount=employees.length, jCount=days.length) {
    const data = [],
        min = 20,
        delta = 20 + Math.floor(Math.random() * 260);

    for(let i=0; i<iCount; i++) {
        for(let j=0; j<jCount; j++) {
            data.push({
                employee: employees[i],
                dayNumber: j,
                day: days[j],
                sales: min + Math.floor(Math.random() * delta)
            });
        }
    }
    
    return data;
}

export const refreshSize = function () {
    const minSize = 1;

    return refreshData(
        minSize + Math.round(Math.random() * (employees.length - minSize)),
        minSize + Math.round(Math.random() * (days.length - minSize))
    );
}