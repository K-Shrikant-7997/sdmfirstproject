function sendmsg()
{
    let msgref =document.querySelector('#msg-container');
    let msg =  document.querySelector('#text-id');
    let newmsg = `<div class="msg" style="background-color:red;margin-bottom:1px;">${msg.value}</div>`;
    msgref.innerHTML= newmsg + msgref.innerHTML;

    msg.value = "";
}

function checkEnter(event)
{
    if(event.keyCode == '13')
    {
        sendmsg();
    }
}