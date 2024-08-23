const textbox=document.getElementById(`textbox`);
const cel=document.getElementById(`cel`);
const fah=document.getElementById(`fah`);
const FtoC=document.getElementById(`FtoC`)
const btn=document.getElementById(`btn`)


btn.onclick=function()
{

if(cel.checked)
{
    let temp=textbox.value;
    temp=Number(temp) 
    temp=(temp * 9 / 5 )+ 32;
FtoC.textContent=temp.toFixed(1) +   "degree F"
}
else if(fah.checked)
{
     let temp=textbox.value;
     temp=Number(temp) 
     temp=(temp - 32 )* (5/9)
    
FtoC.textContent=temp.toFixed(1) + "degree C" ;

}
else{
    FtoC.textContent=`Select a unit`
}
}