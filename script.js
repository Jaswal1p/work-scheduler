const date = moment().format('dddd, MMMM Do, YYYY')

$('#currentDay').text(date)

const currentHour = moment().hours()
const timeBlock = $('.time-block')
const saveBtn = $('.saveBtn')

setColor()

function setColor() {
    timeBlock.each(function() {
        let id = $(this).attr('id')

        if(currentHour > id) {
            $(this).addClass('past')
        } else if (currentHour == id) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

saveBtn.on('click', function() {
    let btnId = $(this).attr('id')
    let task = $(this).siblings('textarea').val()
    console.log(btnId, task)

    localStorage.setItem(btnId, task)
    showTask()
})

showTask()

function showTask() {
    for(let i = 9; i < 18; i++) {
        let currentTask = localStorage.getItem(i)
        $('#'+i).text(currentTask)
    }
}