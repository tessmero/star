resetRand()

const global = {
    
    // graphics context
    canvas: null,
    ctx: null,

    // 
    backgroundColor: 'black',
    starColor: 'white',
    edgeWidth: .002,
    
    // relate screen pixels to virtual 2D units
    canvasOffsetX: 0,
    canvasOffsetY: 0,
    canvasScale: 0,
    centerPos: v(.5,.5),
    screenCorners: null, 
    
    // 
    currentPattern: null, //current pulse pattern
    nextPattern: null, // next pulse pattern
    transR: 0, // goes from 0 to 1 when switching
    
    // 
    t: 0, // total elapsed time
    autoResetCountdown: 0,
    autoResetDelay: 5000,
    
    // mouse
    canvasMousePos: v(0,0),     //pixels
    mousePos: v(0,0),           //virtual units
    
    //debug
    debugTileIndices: false,
    
}