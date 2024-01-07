
// oscillate from 0 to 1
function pulse(period,offset=0){
    return (Math.sin(offset + global.t * twopi/period)+1)/2
}
    
    
// Render graphics
function draw(fps, t) {
    
    var ctx = global.ctx
    let g = ctx
    var canvas = global.canvas
    
    // draw background
    ctx.fillStyle = global.backgroundColor
    ctx.fillRect( -10,-10,20,20 )

    // draw star
    let tipPulsePeriod = 3000 //ms
    let tipRadRange = [.008,.012]
    let tipPulse = pulse(tipPulsePeriod)
    let tipRad = tipRadRange[0] + (tipRadRange[1]-tipRadRange[0]) * tipPulse
    g.fillStyle = global.starColor
    let center = global.centerPos
    g.lineWidth = tipRad*2
    g.lineCap = 'round'
    g.lineJoin = 'round'
    g.strokeStyle = global.starColor
    let starRad = .1
    let n = 5
    let stop = 2*n+1
    g.beginPath()
    g.moveTo(center.x,center.y)
    for( let i = 0 ; i < stop ; i+=2 ){
        let p = center.add( vp( -pio2 + i*twopi/n, starRad ) )
        g.lineTo( p.x, p.y )
    }
    g.stroke()
    g.fill()

    // draw dots
    g.beginPath()
    n = 10
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
            let p = center.add( vp( -pio2 + i*twopi/n, dotPosRad  ) )
            g.moveTo( p.x, p.y )
            g.arc( p.x,p.y,dotRad,0,twopi)
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
            let p = center.add( vp( -pio2 + (i+.5)*twopi/n, dotPosRad  ) )
            g.moveTo( p.x, p.y )
            g.arc( p.x,p.y,dotRad,0,twopi)
        }
        dotPosRad += dotPosRadStep
    }
    g.fill()

    if( false ){
        //debug
        // draw screen corners
        var r = .1
        ctx.fillStyle = 'red'
        global.screenCorners.forEach(c => ctx.fillRect( c.x-r, c.y-r, 2*r, 2*r ))
    }
    
    

    // debug 
    if( false ){
        ctx.fillStyle = 'black'
        ctx.font = ".001em Arial";
        ctx.textAlign = "center";
        ctx.fillText(`${global.angleX.toFixed(2)},${global.angleY.toFixed(2)},${global.angleZ.toFixed(2)}`, .5,.5);
    }
}