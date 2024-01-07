class Wigglepulse extends Pattern {
    constructor(){
        super()
    }
    
    // override Pattern
    update(){
        this.specIndex = 0
        
        
        let wiggleAmp = [.005,.01,.02,.03,.05,.1]
        let wigglePeriod = 4000
        
        let starRad = .1
        let n = 10
        let dotPulseOffset = 0 //radians
        let dotPulseOffsetStep = 0//-phi/2
        let dotPulsePeriod = [1500,2500]
        let dotRadRange = [.010,.018]
        let dotPosRad = starRad + 5*dotRadRange[1]
        let dotPosRadStep = 3*dotRadRange[1]
        resetRand()
        for( var j = 0 ; j < 6 ; j++ ){
            for( let i = 0 ; i < n ; i++ ){
                let dotWiggle = pulse(wigglePeriod)-.5
                let dotPulse = pulse(randRange(...dotPulsePeriod))
                let dotRad = dotRadRange[0] + (dotRadRange[1]-dotRadRange[0]) * dotPulse
                this.pushSpecs( dotWiggle*wiggleAmp[j] -pio2 + i*twopi/n, dotPosRad, dotRad)
            }
            dotPosRad += dotPosRadStep
        }
        dotPosRad = starRad + 5*dotRadRange[1]
        dotPosRad += dotPosRadStep
        for( var j = 2 ; j < 5 ; j++ ){
            for( let i = 0 ; i < n ; i++ ){
                let dotWiggle = pulse(wigglePeriod)-.5
                let dotPulse = pulse(randRange(...dotPulsePeriod))
                let dotRad = dotRadRange[0] + (dotRadRange[1]-dotRadRange[0]) * dotPulse
                this.pushSpecs( dotWiggle*wiggleAmp[j] -pio2 + (i+.5)*twopi/n, dotPosRad, dotRad)
            }
            dotPosRad += dotPosRadStep
        }
    }
}