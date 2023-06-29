let x=document.querySelector("#men");
x.addEventListener("click",drop);
let y=document.querySelector("#drop");
let cl=document.querySelectorAll(".close");
let z=y.getElementsByTagName("li");
let clicked=0;
let nav1=0;
let home=document.querySelectorAll(".hom");
let nav=document.querySelector(".navbar");
let au=document.getElementById("about");
home[0].addEventListener("click",()=>
{
    // alert("working");
    window.location.reload();
    
});
home[1].addEventListener("click",()=>
{
    // alert("working");
    window.location.reload();
    
});
home[2].addEventListener("click",()=>
{
    // alert("working");
    window.location.reload();
    
});
let about=document.querySelectorAll(".au");
about[0].addEventListener("click",()=>
{
    nav.style.display="none";
    au.style.display="block";
});
about[1].addEventListener("click",()=>
{
    nav.style.display="none";
    au.style.display="block";
});
cl[0].addEventListener("click",()=>
{
    window.location.reload();
});
function drop()
{
    try{
        if(clicked==0)
        {
        for(let i=1;i<z.length;i++)
        {
            z[i].style.display="block";
        }
        clicked=1;
    }
    else{
        for(let i=1;i<z.length;i++)
        {
            z[i].style.display="none";
        }
        clicked=0;
    }
}
    catch(error)
    {
        console.log(error);
    }
}
