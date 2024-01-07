

function update(dt) {    

    // advance mouse held/released animation if necessary
    if( global.mouseDown ){
        global.pointiness = Math.min( global.maxPointiness, global.pointiness+global.pointSpeed*dt)
        global.pointSpeed += dt*global.pointAccel
        
        //easter egg
        if(global.pointiness == global.maxPointiness){
            global.backgroundColor = randChoice(['#ECF2FF','#95BDFF','#B4E4FF','#DFFFD8','#FFFAD7','#FCDDB0','#FF9F9F','#E97777','#FFE6F7','#FFABE1','#C689C6','#937DC2','#EEF1FF','#D2DAFF','#AAC4FF','#B1B2FF']) 
            global.mouseDownDisabled = true
            global.mouseDown = false
        }
    } else {
        global.pointiness = Math.max( 0, global.pointiness-15*global.initPointSpeed*dt*(1+50*global.pointiness))
        global.pointSpeed = global.initPointSpeed
    }
    
    if( false ){
        // advance auto reset timer
        global.autoResetCountdown -= dt
        if(global.autoResetCountdown <= 0){
            resetGame()
        }
    }

    // advance animation
    global.t += dt
    
    // test transition
    global.transAngle += dt * twopi/global.transPeriod
    if( global.transAngle > pi ){
        global.transAngle -= pi
        global.currentPattern = global.nextPattern
        global.nextPattern = randomPattern()
    }
    global.transR = (1-Math.cos(global.transAngle))/2

    // check for resized window
    fitToContainer()    
}


var lastCanvasOffsetWidth = -1;
var lastCanvasOffsetHeight = -1;
function fitToContainer(){
    
    var cvs = global.canvas
    if( (cvs.offsetWidth!=lastCanvasOffsetWidth) || (cvs.offsetHeight!=lastCanvasOffsetHeight) ){
        
        lastCanvasOffsetWidth = cvs.offsetWidth
        lastCanvasOffsetHeight = cvs.offsetHeight
        
      cvs.width  = cvs.offsetWidth;
      cvs.height = cvs.offsetHeight;
        var padding = 0; // Padding around the square region
        var dimension = Math.min(cvs.width, cvs.height) - padding * 2;
        global.canvasScale = dimension;
        global.canvasOffsetX = (cvs.width - dimension) / 2;
        global.canvasOffsetY = (cvs.height - dimension) / 2;
    global.ctx.setTransform(global.canvasScale, 0, 0, 
        global.canvasScale, global.canvasOffsetX, global.canvasOffsetY);
        
        var xr = -global.canvasOffsetX / global.canvasScale
        var yr = -global.canvasOffsetY / global.canvasScale
        global.screenCorners = [v(xr,yr),v(1-xr,yr),v(1-xr,1-yr),v(xr,1-yr)]
    }
}