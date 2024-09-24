var head=document.getElementById("head1");
console.log(head);
head.style.color="blue";
head.textcontent="helo";
head.innerHTML="<h6>changed into h6</h6>"
var c=document.getElementsByClassName("list");
for(let i=0;i<c.length;i++)
{
    c[i].style.backgroundColor="yellow";
}
var t=document.getElementsByTagName("li")
t[1].style.color="red";

//using query seletor 
let val=document.querySelector("input");
val.value="Name";

//query seletor using id
var save=document.querySelector("#save");
save.style.backgroundColor="blue"