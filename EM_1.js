window.onload=function(){

    const buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener ('click', function(){
        buttons[0].innerHTML = 'I am right'
    });

    buttons[1].addEventListener ('click', function(){
        buttons[1].innerHTML = 'NO, I am right!'
    });

    const box = document.getElementById('big-button');
    box.addEventListener('mouseover', function(){
        box.innerHTML = 'I SAID DO NOT HOVER';
    });
    box.addEventListener('mouseout', function(){
        box.innerHTML = 'DO NOT HOVER OVER ME';
    });

    const letters = document.getElementById('three');
    const result = document.getElementsByClassName('keystroke');

    letters.addEventListener ('keydown', function () {
        let h1 = document.createElement('h1');
        h1.innerHTML = letters;
    });
    
    const user = document.getElementById('user-button');
    const name = document.getElementById('user-info');
    const pass = document.getElementById('password-button');
    const word = document.getElementById('password-info');
    
    user.addEventListener('click', function(){   
        const digits = /^[0-9a-zA-Z]+$/;
        if(name.value.match(digits))
           alert('Valid Name')
        else
           alert('Username must have one number')  
        });

    pass.addEventListener('click', function(){
        const num = /^[0-9]+$/;
        if (word.value.match(num))
            alert('Valid Password')
        else
            alert('Password Must be Numeric')
    });
}