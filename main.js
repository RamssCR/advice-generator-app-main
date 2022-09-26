async function generateRandomAdvice() {
    const data = await fetch('https://api.adviceslip.com/advice')
    const dataTransform = await data.json()

    document.querySelector('#number').textContent = dataTransform.slip.id;
    document.querySelector('.advice').textContent = `"${dataTransform.slip.advice}"`;
}

let btn = document.querySelector('.btn-dice');
btn.addEventListener('click', ()=>{
    generateRandomAdvice();
})
