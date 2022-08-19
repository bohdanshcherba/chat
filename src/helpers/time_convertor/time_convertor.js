const time_convertor_message = (time) => {
    time = JSON.parse(time)
    let date_time = time.split('T')
    let date = date_time[0].split('-')
    let year = date[0].split('')
    let clocks = date_time[1].split(':')

    return (`${date[1]}\\${date[2]}\\${year[2]}${year[3]}, ${clocks[0]}:${clocks[1]}`)

}

const time_convertor_contacts = (time) => {
    time = JSON.parse(time)
    let date_time = time.split('T')
    let date = date_time[0].split('-')

    const formatter = new Intl.DateTimeFormat('eng', {month: 'short'});

    const month = formatter.format(new Date(2003, date[1] - 1, 12));

    return (`${month} ${date[2]} ${date[0]}`)

}

export {time_convertor_message, time_convertor_contacts}
