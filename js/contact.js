$(function()
{
    $("#contactBtn").on("click",(function()
    {
        const emailvalid = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let email = prompt("email:",);
        if(!emailvalid.test(email))
        {
            alert("Invalid email adress!");
            return;
        }

        let telephone_number = prompt("number:",);
        let tlfLenght = telephone_number.toString().length;
        if(!$.isNumeric(telephone_number) && tlfLenght > 7 && tlfLenght < 12)
        { 
            alert("Invalid Number!");
            return;
        }

        let zipcode = prompt("zipcode:","");
        let zipLenght = zipcode.toString().length;
        if(!$.isNumeric(zipcode) && zipLenght > 3 && zipLenght < 7)
        { 
            alert("Invalid Number!");
            return;
        }

        const specialChar = /^[a-åA-Å0-9\s+]+$/;
        let address = prompt("address:",);
        if(!specialChar.test(address))
        {
            alert("Invalid adress!");
            return;
        }

        $("#contactDetails p:first").replaceWith('<p class="text-muted">' + telephone_number);
        $("#contactDetails p:odd").replaceWith('<p class="text-muted">' + email);
        $("#contactDetails p:last").replaceWith('<p class="text-muted">' + zipcode +", "+ address);

        console.log("From: " + email);
        console.log("Contact: " + telephone_number);
        console.log("Address: " +zipcode +", "+ address);
    }));       
});