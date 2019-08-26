

const buttons = document.querySelectorAll('button1');

const playnote = ()=>{
    
    console.log(event.target);
}

buttons.forEach(
    button1 => button1.addEventListener('click', playnote)
);