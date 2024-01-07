class Wavepulse extends Pattern {
    constructor(){
        super()
    }
    
    refresh(){
        this.single = Math.random() < .5
    }
    
    // override Pattern
    update(){
        this.wa = global.t/(3000/twopi)
        this.specIndex = 0
        
        let starRad = .1
        let n = 10
        let dotPulseOffset = 0 //radians
        let dotPulseOffsetStep = 0//-phi/2
        let dotPulsePeriod = 2000 //ms
        let dotRadRange = [.010,.018]
        let dotPosRad = starRad + 5*dotRadRange[1]
        let dotPosRadStep = 3*dotRadRange[1]
        let r = dotPosRad
        for( var j = 0 ; j < 6 ; j++ ){
            for( let i = 0 ; i < n ; i++ ){
                let a = -pio2 + (i)*twopi/n
                let rr = this.computeDotRad1(a,r)
                let pr = r + this.computePosRadOffset(rr)
                this.pushSpecs(a, pr, rr)
            }
            r += dotPosRadStep
        }
        dotPosRad = starRad + 5*dotRadRange[1]
        dotPosRad += dotPosRadStep
        r = dotPosRad
        for( var j = 0 ; j < 3 ; j++ ){
            for( let i = 0 ; i < n ; i++ ){
                let a = -pio2 + (i+.5)*twopi/n
                let rr = this.computeDotRad2(a,r)
                let pr = r + this.computePosRadOffset(rr)
                this.pushSpecs(a, pr, rr)
            }
            r += dotPosRadStep
        }
    }
    
    computePosRadOffset(rr){
        return rr-.010
    }
    
    computeDotRad1(a,r){
        return avg(.010,.018,(Math.sin(this.wa-a)+1)/2)
    }
    
    computeDotRad2(a,r){
        if( this.single ) return this.computeDotRad1(a,r)
        return avg(.010,.018,1-(Math.sin(this.wa-a)+1)/2)
    }
}