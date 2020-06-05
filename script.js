const INPUT = document.getElementById('input')
let equation = ''
let currentNumbers = '0'
let isOperating = false

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
    currentNumbers = ''
    equation = ''
})

document.getElementById('plus').addEventListener('click', function(){
    if(isOperating){
        equation = equation.replaceAt(equation.length-1, '+')
    }else{
        equation = equation + currentNumbers + '+'
    }
    INPUT.innerHTML = equation
    isOperating = true
})

document.getElementById('min').addEventListener('click', function(){
    if(isOperating){
        equation = equation.replaceAt(equation.length-1, '-')
    }else{
        equation = equation + currentNumbers + '-'
    }
    INPUT.innerHTML = equation
    isOperating = true
})

document.getElementById('times').addEventListener('click', function(){
    if(isOperating){
        equation = equation.replaceAt(equation.length-1, '×')
    }else{
        equation = equation + currentNumbers + '×'
    }
    INPUT.innerHTML = equation
    isOperating = true
})

document.getElementById('divide').addEventListener('click', function(){
    if(isOperating){
        equation = equation.replaceAt(equation.length-1, '÷')
    }else{
        equation = equation + currentNumbers + '÷'
    }
    INPUT.innerHTML = equation
    isOperating = true
})

// document.getElementById('delete').addEventListener('click', function(){
//     if(isOperating || equation.charAt(equation.length-1) == '+' || equation.charAt(equation.length-1) == '-' || equation.charAt(equation.length-1) == '×' || equation.charAt(equation.length-1) == '÷' ){
//         equation = equation.replaceAt(equation.length-1, '')
//         if(!isOperating){
//             let i = equation.length-1
//             while(equation.charAt(i) != '+' || equation.charAt(i) != '-' || equation.charAt(i) != '+' || equation.charAt(i) != '+')
//         }
//         INPUT.innerHTML = equation
//     }
//     else{
//         currentNumbers = currentNumbers.replaceAt(currentNumbers.length-1, '')
//         INPUT.innerHTML = equation + currentNumbers
//     }
// })

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
    }
    return eval(newEquation)
}

function deleteAll(){
    INPUT.innerHTML = 0
    equation = ''
    currentNumbers = '0'
}

function addNumber(newNumber){
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