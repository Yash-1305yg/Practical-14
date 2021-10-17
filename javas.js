function increase()
{
    var a = document.getElementById('text').textContent;
    var b =parseInt(a);
    b=b+1;
    var c=b.toString();
    document.getElementById('text').textContent = c; 
    document.getElementById('input1').style.borderColor="black";
}

function decrease()
{
    var a = document.getElementById('text').textContent;
    var b =parseInt(a);
    if(b==1)
    {
        document.getElementById('input1').style.borderColor="#1CB5E0";
    }
    if(b==0)
    {
        document.getElementById('input1').style.disabled=true;
    }
    else
    {
        b=b-1;
        var c=b.toString();
        document.getElementById('text').textContent = c;
     }
}