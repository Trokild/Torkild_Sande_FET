let pokemons =[
    {
        id: "Squirtle",
        icon: "<i class='bi bi-droplet'></i>",
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        info: "Height: 1'08 <br/> Weight: 19.8 lbs <br/> Abilities: Torrent",
        image: "<img src='img/Squirtle.jpeg' style='height:100px; width: auto'>"
    },
    {
        id: "Charizard",
        icon: "<i class='bi bi-fire'></i>",
        description: "It spits fire that is hot enough to melt boulders.<br/> It may cause forest fires by blowing flames.",
        info: "Height: 5'07 <br/> Weight: 199.5 lbs <br/> Abilities: Blaze",
        image: "<img src='img/Charizard.jpeg' style='height:100px; width: auto'>"
    },
    {
        id: "Ivysaur",
        icon: "<i class='bi bi-flower1'></i>",
        description: "Exposure to sunlight adds to its strength.<br/> Sunlight also makes the bud on its back grow larger.",
        info: "Height: 3'03 <br/> Weight: 28.7 lbs <br/> Abilities: Overgrow",
        image: "<img src='img/Ivysaur.jpeg' style='height:100px; width: auto'>"
    },
    {
        id: "Pikachu",
        icon: "<i class='bi bi-lightning'></i>",
        description: "Pikachu that can generate powerful electricity have cheek sacs<br/> that are extra soft and super stretchy.",
        info: "Height: 1'04 <br/> Weight: 13.2 lbs <br/> Abilities: Static",
        image: "<img src='img/Pikachu.jpeg' style='height:100px; width: auto'>"
    },
    {
        id: "Gengar",
        icon: "<i class='bi bi-eye'></i>",
        description: "On the night of a full moon,<br/> if shadows move on their own and laugh,<br/> it must be Gengar’s doing.",
        info: "Height: 4'11 <br/> Weight: 89.3 lbs <br/> Abilities: Cursed Body",
        image: "<img src='img/Gengar.jpeg' style='height:100px; width: auto'>"
    }
];
document.onload = vanillaData();

function vanillaData()
{
    let datid =['id', 'icon', 'description', 'info', 'image'];
    table = document.getElementById("personalTable");
    tBody = table.getElementsByTagName('tbody')[0];
    for (r = 0; r < pokemons.length; r++)
    {
        let row = document.createElement('tr');
        for (c = 0; c < 5; c++){
        let cell = document.createElement('td');
        cell.innerHTML = " " + pokemons[r][datid[c]] + " ";
        row.appendChild(cell)
        }
        tBody.appendChild(row);
    }
}

$(function()
{
    $("tr.Row");$("tr:odd").hover(function(){
        $(this).css("color", "red");
    }, function(){
        $(this).css("color", "black");
    });

    $("td").click(function(){
        let img = $(this).find('img')[0].src;
        window.open(img);
    });
});

