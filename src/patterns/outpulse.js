class Outpulse extends Pattern {
    constructor(){
        super()
    }
    
    // override Pattern
    update(){
        this.specIndex = 0
        
        let starRad = .1
        let n = 10
        let dotPulseOffset = 0 //radians
        let dotPulseOffsetStep = -phi/2
        let dotPulsePeriod = 2000 //ms
        let dotRadRange = [.010,.018]
        let dotPosRad = starRad + 5*dotRadRange[1]
        let dotPosRadStep = 3*dotRadRange[1]
        for( var j = 0 ; j < 6 ; j++ ){
            let dotPulse = pulse(dotPulsePeriod,dotPulseOffset)
            let dotRad = dotRadRange[0] + (dotRadRange[1]-dotRadRange[0]) * dotPulse
            dotPulseOffset += dotPulseOffsetStep
            for( let i = 0 ; i < n ; i++ ){
                this.pushSpecs(-pio2 + i*twopi/n, dotPosRad, dotRad)
            }
            dotPosRad += dotPosRadStep
        }
        dotPosRad = starRad + 5*dotRadRange[1]
        dotPosRad += dotPosRadStep
        for( var j = 0 ; j < 3 ; j++ ){
            let dotPulse = pulse(dotPulsePeriod,dotPulseOffset)
            let dotRad = dotRadRange[0] + (dotRadRange[1]-dotRadRange[0]) * dotPulse
            dotPulseOffset += dotPulseOffsetStep
            for( let i = 0 ; i < n ; i++ ){
                this.pushSpecs(-pio2 + (i+.5)*twopi/n, dotPosRad, dotRad)
            }
            dotPosRad += dotPosRadStep
        }
    }
}