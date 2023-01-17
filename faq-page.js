const btnOne = document.querySelectorAll('.btn');


btnOne.forEach((btn)=> {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text');
        question.classList.toggle('showQuestion');

    })
})








