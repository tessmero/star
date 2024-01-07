resetRand()

const global = {
    
    // graphics context
    canvas: null,
    ctx: null,

    // 
    backgroundColor: '#AAA',
    patternOffsets: [v(-2e-3,-2e-3),v(2e-3,2e-3),v(0,0)],
    patternColors: ['white','gray','black'],
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
    transAngle: 0,
    transPeriod: 10000,
    transR: 0, // goes from 0 to 1 when switching
    
    
    
    // 
    t: 0, // total elapsed time
    autoResetCountdown: 0,
    autoResetDelay: 5000,
    
    // mouse
    pointiness: 0,//
    maxPointiness: 1,
    mouseDown: false,
    mouseDownDisabled: false,
    initPointSpeed: 1e-5,//pointiness unites per ms
    pointSpeed: 1e-7,//pointiness unites per ms
    pointAccel: 4e-7,
    canvasMousePos: v(0,0),     //pixels
    mousePos: v(0,0),           //virtual units
    
    //debug
    debugTileIndices: false,
    
}