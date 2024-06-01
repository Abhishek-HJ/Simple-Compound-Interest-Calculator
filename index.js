function simple(){
    let pa=document.getElementById("pa");
    let i=document.getElementById("interest");
    let y=document.getElementById("year");
    let a=document.getElementById("ans");
    console.log(pa);
    a.textContent=Math.round((Number(pa.value*i.value*y.value)/100)+Number(pa.value));
}
function compound(){
    let pa=document.getElementById("cpa");
    let i=document.getElementById("cinterest");
    let y=document.getElementById("cyear");
    let a=document.getElementById("cans");
    a.textContent=Math.round(Number(pa.value*(1+i.value/100)**y.value));

    

}