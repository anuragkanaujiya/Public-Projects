let question = document.querySelector('.h3-ques');
let answer = document.querySelector('.result');
let allButtons = document.querySelectorAll('button');
let btn2=document.querySelector('.btn-2')
let view = '';
let result = '';
btn2.addEventListener("click",()=>{
    view = view.trim().slice(0, -1)
})
allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        if (!isNaN(value) || value === '.') {
            view += value;
            answer.value = view.toString();
        }
        else if (isNaN(value) && value != 'Ac' && value != '='&& view!='') {
            
            const operators = ['+', '-', '*', '/'];
            const lastChar = view[view.length - 1];
            if (operators.includes(lastChar)) {
                view = view.slice(0, -1) + value;
            } else {
                view += value;
            }
            
            answer.value = view;
        }
        else if (value === 'Ac') {
            question.innerText = '';
            answer.value = '';
            view = '';
        }
        else if(value==='='){
            try{
                view=answer.value;
                question.innerText=view;
                result=eval(view);
                answer.value=result;
                view=result.toString();
            }catch(e){
                answer.value=''

            }
        }
    })
})
answer.addEventListener("keydown",(eve)=>{
    if(eve.key==='Enter'){
         try{
                view=answer.value;
                question.innerText=view;
                result=eval(view);
                answer.value=result;
                view=result.toString();
            }catch(e){
                answer.textContent='ERROR'

            }
    }
})
