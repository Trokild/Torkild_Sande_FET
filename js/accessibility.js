$(function(){ $("#accessToggle").change(function() 
    {    
        const para = document.getElementsByTagName("p");
        let isON = document.getElementById('accessToggle').checked;
        if(isON)
        {
            for(p of para)
            {
                p.style.fontSize = '120%';
            }
        }
        else
        {
            for(p of para)
            {
                p.style.fontSize = '100%';
            }
        }
    }
)});

