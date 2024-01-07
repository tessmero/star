let allPatterns = [
    new Outpulse(),
    new Syncpulse()
]

shuffle(allPatterns)

function randomPattern(){
    return allPatterns[Math.floor( rand() * allPatterns.length )]
}