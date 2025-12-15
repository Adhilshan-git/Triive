const screen = document.getElementById('screen')

function btnClick(value){
    screen.value += value
}   

function clearScreen(){
    screen.value = '' 
}
    

function findResult(){

    const result = eval(screen.value)

    screen.value = result
}