var character =
    document.getElementById("character");
var block = document.getElementById("block")
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    character.classList.add('animate');
    setTimeout(function () {
    }, 500)
    character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    
},10);