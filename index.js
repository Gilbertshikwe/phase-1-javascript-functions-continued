// code your solution here
function saturdayFun(do1="roller-skate"){
    return `This Saturday, I want to ${do1}!`  
}
saturdayFun()
saturdayFun("bathe my dog")
const mondayWork = function(do2="go to the office"){
    let message = `This Monday, I will ${do2}.`
    return message
}
mondayWork()
mondayWork("work from home")
function wrapAdjective(special,special2){
    let part1 = "a hard worker"
    let part2 = "||a dedicated programmer||"
    if (special==="*"){
    return function(){
    return `You are ${special}${part1}${special}!`
    }}
    else {
        return function (){
        return `You are ${part2}!`
        }
    }
    
}
wrapAdjective("*","||")()


