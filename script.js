const INPUT = document.getElementById('input')
let equation = ''
let currentNumbers = '0'
let isOperating = false
let isCalculated = false

for(let i = 0; i <= 9; i++){
    document.getElementById(i).addEventListener('click', function(){
        addNumber(i)
    })
}

document.getElementById('dot').addEventListener('click', function(){
    if(!isDotted()){
        addNumber('.')
    }
})

document.getElementById('c').addEventListener('click', function(){
    deleteAll()
})

document.getElementById('equals').addEventListener('click', function(){
    if(isOperating){
        equation = equation.replaceAt(equation.length-1,'')
    }else{
        equation = equation + currentNumbers
    }
    let result = String(calculate(equation))
    INPUT.innerHTML = result
    // currentNumbers = ''
    // equation = ''
    isCalculated = true
})

document.getElementById('plus').addEventListener('click', function(){
    if(isCalculated){
        equation = INPUT.textContent
        currentNumbers = ''
        isCalculated = false
    }
    if(isOperating){
        equation = equation.replaceAt(equation.length-1, '+')
    }else{
        equation = equation + currentNumbers + '+'
    }
    INPUT.innerHTML = equation
    isOperating = true
})

document.getElementById('min').addEventListener('click', function(){
    if(isCalculated){
        equation = INPUT.textContent
        currentNumbers = ''
        isCalculated = false
    }
    if(isOperating){
        equation = equation.replaceAt(equation.length-1, '-')
    }else{
        equation = equation + currentNumbers + '-'
    }
    INPUT.innerHTML = equation
    isOperating = true
})

document.getElementById('times').addEventListener('click', function(){
    if(isCalculated){
        equation = INPUT.textContent
        currentNumbers = ''
        isCalculated = false
    }
    if(isOperating){
        equation = equation.replaceAt(equation.length-1, '×')
    }else{
        equation = equation + currentNumbers + '×'
    }
    INPUT.innerHTML = equation
    isOperating = true
})

document.getElementById('divide').addEventListener('click', function(){
    if(isCalculated){
        equation = INPUT.textContent
        currentNumbers = ''
        isCalculated = false
    }
    if(isOperating){
        equation = equation.replaceAt(equation.length-1, '÷')
    }else{
        equation = equation + currentNumbers + '÷'
    }
    INPUT.innerHTML = equation
    isOperating = true
})

document.getElementById('delete').addEventListener('click', function(){
    let inputText = INPUT.textContent
    if(!(inputText.charAt(inputText.length-1) == '')){
        if(!(inputText.charAt(inputText.length-1) > '0' &&  inputText.charAt(inputText.length-1) < '9')){
            let number = ''
            for(let i = inputText.length - 2; i >= 0; i--){
                if((inputText.charAt(inputText.length-1) > '0' &&  inputText.charAt(inputText.length-1) < '9')){
                    number = inputText.charAt(i) + number
                }
                else{
                    break
                }
            }
            currentNumbers = number
        }
        else{
            currentNumbers = String(currentNumbers).replaceAt(currentNumbers.length-1, '')
        }
        INPUT.innerHTML = inputText.replaceAt(inputText.length-1, '')
        equation = INPUT.textContent
    }

})

function calculate(fn) {
    let newEquation = ''
    for(let i = 0; i < equation.length; i++){
        if(equation.charAt(i)=='×'){
            newEquation += '*'
        }
        else if(equation.charAt(i)=='÷'){
            newEquation += '/'
        }
        else{
            newEquation += equation.charAt(i)
        }
        if(i == equation.length-1){
            if(!(equation.charAt(i) > '0' &&  equation.charAt(i) < '9')){
                newEquation = newEquation.replaceAt(i, '')
            }
        }
    }
    return eval(newEquation)
}

function deleteAll(){
    INPUT.innerHTML = 0
    equation = ''
    currentNumbers = '0'
}

function addNumber(newNumber){
    if(isCalculated){
        equation = ''
        currentNumbers = ''
        isCalculated = false
    }
    if(isOperating){
        currentNumbers = '0'
    }
    if(currentNumbers == '0'){
        if(newNumber === '.'){
            currentNumbers =  '0' + newNumber
        }else{
            currentNumbers =  newNumber
        }
    }else{
        currentNumbers = currentNumbers + '' + newNumber
    }
    INPUT.innerHTML = equation + currentNumbers
    isOperating = false
}

function isDotted(){
    let isDotted = false
    for (let i = 0; i < currentNumbers.length; i++) {
        if(currentNumbers.charAt(i) == '.') isDotted = true
    }
    return isDotted
}

String.prototype.replaceAt = function(index, replacement) {
	if (index >= this.length) {
		return this.valueOf();
	}

	return this.substring(0, index) + replacement + this.substring(index + 1);
}