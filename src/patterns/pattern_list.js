let allPatterns = [
    new Outpulse(),
    new Syncpulse(),
    new Wigglepulse(),
    new Wavepulse(),
    new Dwavepulse(),
]


function randomPattern(){
    return randChoice(allPatterns)
}