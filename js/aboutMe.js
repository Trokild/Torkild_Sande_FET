document.addEventListener("DOMContentLoaded", function(){
    updateAboutMe();
});

let aboutmetext = "I am a Pokémon trainer. Like many Pokémon Trainers, I aspires to be the greatest Pokémon Master, and to do this, I must travels through the region battling Gym Leaders and enter in the Pokémon League competitions.";

function updateAboutMe(){
    let profilepic = $("#about").find('img');
    profilepic.attr("src", "img/newprofilepic.jpg");
    profilepic.addClass("updated");
    
    $("#about p:first").remove();
    $("#about p").replaceWith("<p class=updated>" + aboutmetext + "</p>");

    $("#about span").text("I am | Ach Ketchum | pokemon trainer");
    $("#about span").addClass("updated");

    $("#about a").attr("target", "_blank");
    let faceb = $("#about .bi-facebook").parent();
    faceb.attr("href", "https://www.facebook.com/CallMeAshKetchum/")
    faceb.addClass("updated")

    let insta = $("#about .bi-instagram").parent();
    insta.attr("href", "https://www.instagram.com/ashketchum_official/?hl=en/")
    insta.addClass("updated")

    let yt = $("#about .bi-youtube").parent();
    yt.attr("href", "https://www.youtube.com/watch?v=rg6CiPI6h2g&ab_channel=kerwinpogi092/")
    yt.addClass("updated")

    let twit = $("#about .bi-twitter").parent();
    twit.attr("href", "https://twitter.com/ashketchum151/")
    twit.addClass("updated")
};

$(function()
{
    $("#about .updated").click(function(){
        $(this).css({"color":"white", "background-color": "powderblue"});
        console.log("click updated");
    });
});