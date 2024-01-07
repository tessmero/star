class Pattern {
    constructor(){
        // 90 dots with 3 props (angle, radius, radius)
        this.dotSpecs = new Array(90*3).fill(0)
    }
    
    pushSpecs(...arr){
        arr.forEach( val => 
            this.dotSpecs[this.specIndex++] = val
        )
    }
    
    getUpdatedSpecs(){
        this.update()
        return this.dotSpecs
    }
}