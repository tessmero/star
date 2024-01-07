let allPatterns = [
    new Outpulse(),
    new Syncpulse(),
    new Wigglepulse(),
    new Wavepulse(),
]


function randomPattern(){
    let result = randChoice(allPatterns)
    result.refresh()
    return result
}