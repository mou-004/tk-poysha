console.log("Login script loaded");
document.getElementById("login-btn").addEventListener("click", function(event) 
{
    console.log("Login button clicked");
    //1. Get the phn number input 
    const phoneNumberInput   = document.getElementById("input-number");
    const phoneNumber        = phoneNumberInput.value;
    console.log(phoneNumber);
    //2.get the pin input   
    const pinInput           = document.getElementById("input-pass");
    const pin                = pinInput.value;
    console.log(pin);
    //3.match pin and phn number with the stored data 
    if(phoneNumber === "01712345678" && pin === "1234")
    //3-1. true::>> alert>home page
    { alert("Login successful!"); 
        window.location.assign("home.html");
    }
    //3-2. false::>> alert>wrong pin or phn number return
    else
    { alert("Login failed! Wrong phone number or pin.");
        return;
     }
});