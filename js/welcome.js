$(function()
{
    $("#liveToastBtn").on("click",(function(){
            $("#liveToast").toast('show');
             }));
             
    $("#boredBtn").on("click",(function(){
                console.log(getRequest());
            }));         
});

function getRequest()
{
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.boredapi.com/api/activity/", false );
    xmlHttp.send( null );
    return xmlHttp.response;
}

