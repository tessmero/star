
    
    
// Render graphics
function draw(fps, t) {
    
    var ctx = global.ctx
    let g = ctx
    var canvas = global.canvas
    
    // draw background
    ctx.fillStyle = global.backgroundColor
    ctx.fillRect( -10,-10,20,20 )


    // build dot specs
    // (angle, rad, rad)
    let s0 = global.currentPattern.getUpdatedSpecs()
    let s1 = global.nextPattern.getUpdatedSpecs()
    
    // draw pattern
    for( let i = 0 ; i < global.patternOffsets.length ; i++ ){
        _draw(s0,s1,
            global.patternOffsets[i],
            global.patternColors[i])
    }

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

function _draw(s0,s1,offset,color){
    
    var ctx = global.ctx
    let g = ctx
    
    // draw star
    let tipPulsePeriod = 3000 //ms
    let tipRadRange = [.008,.012]
    let tipPulse = pulse(tipPulsePeriod)
    let tipRad = tipRadRange[0] + (tipRadRange[1]-tipRadRange[0]) * tipPulse
    g.fillStyle = color
    let center = global.centerPos
    g.lineWidth = tipRad*2+global.pointiness
    g.lineCap = 'round'
    g.lineJoin = 'round'
    g.strokeStyle = color
    let starRad = .1
    let n = 5
    let stop = 2*n+1
    g.beginPath()
    g.moveTo(center.x,center.y)
    for( let i = 0 ; i < stop ; i+=2 ){
        let p = center.add( vp( -pio2 + i*twopi/n, starRad ) ).add(offset)
        g.lineTo( p.x, p.y )
    }
    g.stroke()
    g.fill()

    // draw dots
    g.beginPath()
    for( let i = 0 ; i < 270 ; i+=3 ){
        let a = avg(s0[i],s1[i],global.transR)
        let r0 = avg(s0[i+1],s1[i+1],global.transR)
        let r1 = avg(s0[i+2],s1[i+2],global.transR)
        let p = center.add( vp( a, r0 ) ).add(offset)
        g.moveTo( p.x, p.y )
        g.arc( p.x,p.y,r1+global.pointiness,0,twopi)
    }
    g.fill()
}