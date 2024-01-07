let allPatterns = [
    new Outpulse(),
    new Syncpulse(),
    new Wigglepulse(),
]


function randomPattern(){
    return randChoice(allPatterns)
}