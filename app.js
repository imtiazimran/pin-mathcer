function genaretePin(){
    let random = Math.round(Math.random() * 10000) + ''
    if(random.length === 3){
        return genaretePin()
    }else if(random.length === 2){
        return genaretePin()
    }
    else{return random}
}
document.querySelector('.generate-btn').addEventListener('click', function(){
    const pin = genaretePin()
    document.querySelector('#randomPin').value = pin
})
document.querySelector('.calc-body').addEventListener('click', function(e){
    const targetInput = e.target.innerText
    let calcInput =  document.querySelector('#calcInput');
    const previousValue = calcInput.value
    if(isNaN(targetInput)){
        if(targetInput === 'C'){
            calcInput.value = ""
        }else if(targetInput === '<'){
            const currentValue = previousValue.split('')
            currentValue.pop()
            const remainingValue = currentValue.join('')
            calcInput.value = remainingValue
        }
    }else{
        const concat = previousValue + targetInput;
        calcInput.value = concat
    }
})

document.querySelector('.submit-btn').addEventListener('click', function(){
    let randomNumber = document.querySelector('#randomPin').value;
    let inputNumber = document.querySelector('#calcInput').value;
    let successMsg = document.querySelector('#notifySucces')
    let warningMsg = document.querySelector('#notifyWarning')
    
    if(randomNumber === inputNumber){
        successMsg.style.display = 'block'
        warningMsg.style.display = 'none'
        randomNumber = ''
    }else{
        warningMsg.style.display = 'block'
        successMsg.style.display = 'none'
    }
})