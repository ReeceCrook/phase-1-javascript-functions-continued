// code your solution here
function saturdayFun(activity = "roller-skate"){
    let message = (`This Saturday, I want to ${activity}!`);
    return message

}

const mondayWork = function (activity = "go to the office") {
    let message = `This Monday, I will ${activity}.`
    return message

}

function wrapAdjective(activity){
    return function (paramiter = "special") {
        let message = `You are ${activity}${paramiter}${activity}!`
        return message
    }

}