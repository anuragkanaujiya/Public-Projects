let dropdown = document.querySelectorAll(".exchange select");
let btn =document.querySelector(".result button")
let result= document.querySelector(".p-2")
let fromCurr=document.querySelector(".from select")
let toCurr=document.querySelector(".to select")
const UrlCountry = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const UrlCurrency="https://latest.currency-api.pages.dev/v1/currencies/"

fetch(UrlCountry)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const firstKey = Object.keys(data)[0];
        if(firstKey){delete data[firstKey];}
        for (let select of dropdown) {
            for (let code in data) {
                let newOption = document.createElement("option")
                newOption.innerText = code.toUpperCase();
                newOption.value = code;
                if (select.name === "from" && code === "usd") {
                    newOption.selected = "selected"
                } else if (select.name === "to" && code === "inr") {
                    newOption.selected = "selected"
                }
                select.append(newOption);
                // console.log(data)
            }
            select.addEventListener("change",(event)=>{
                updateFlag(event.target);
            })
            convert(select)
            
        }
    }).catch(error => {
        console.log("data not found",error)
    })
function updateFlag(element) {
    let flagCode=element.value.slice(0,2).toUpperCase();
    let source=`https://flagsapi.com/${flagCode}/flat/64.png`
    let img= element.parentElement.querySelector("img")
    img.src=source;
    console.log(flagCode)
}
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount= document.querySelector(".input-amount");
    let val=amount.value;
    if(val==""||val<1){
        val=1;
        amount.value="1"
    }
    let URL=`${UrlCurrency}${fromCurr.value}.json`;
    let response=await fetch(URL);
    let dat=await response.json();
    let resul=dat[fromCurr.value][toCurr.value];
    // for(let toKey in dat[]){
    //     if(toCurr==toKey){
    //         let total=val*data[toKey]
    //         result.innerText+=" "+total;
    //         console.log(total);
    //     }
    //     console.log(dat[toCurr.value][toKey]);
    // }

    // result.innerText+=" "+val; // inner of result <p> for answer 
    let ans=resul*val;
    result.innerText="RESULT : "+Math.floor(ans);
})
function convert(currCode){

}