const zeroPut = n => {
    return ('0' + n).slice(-2);
}

const timer = () => {
    const date = new Date()

    document.querySelector('#timer').innerHTML = ` 
        <span id="">${zeroPut(date.getHours())}</span>
        :
        <span id="">${zeroPut(date.getMinutes())}</span>
        :
        <span id="">${zeroPut(date.getSeconds())}</span>
    `
}

setInterval(timer, 1000)

