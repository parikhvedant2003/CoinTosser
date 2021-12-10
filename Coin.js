var button = document.getElementById("button"), count = 0;
button.onclick = function()
{
    count += 1;
    button.innerHTML = "Coin tossed " + count + " times.";
    TossCoin();
};
function TossCoin()
{
    // Method -> 1 // Accurate Method
    
    var RandomNumber = Math.floor(Math.random() * 2) + 1; // 0 <= Math.random() < 1
    var Number = document.getElementById("random");
    if (RandomNumber == 1)
    {
        // Number.innerHTML = "Head";
        document.getElementById("myImg").src = "Head.png";
        console.log("Head");
    }
    if (RandomNumber == 2)
    {
        // Number.innerHTML = "Tail";
        document.getElementById("myImg").src = "Tail.png";
        console.log("Tail");
    }

    // Method -> 2 // Simple Method

    // const d = new Date();
    // let RandomNumber = (d.getSeconds() % 2) + 1;
    // if (RandomNumber == 1)
    // {
    //     // Head
    //     document.getElementById("myImg").src = "Head.png";
    //     console.log("Head");
    // }
    // if (RandomNumber == 2)
    // {
    //     // Tail
    //     document.getElementById("myImg").src = "Tail.png";
    //     console.log("Tail");
    // }

}