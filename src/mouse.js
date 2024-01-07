

function mouseDown(e){
    if( global.mouseDownDisabled ) return
    global.mouseDown = true
}
function mouseUp(e){
    global.mouseDownDisabled = false
    global.mouseDown = false
}