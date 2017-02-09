/**
 * Created by h205p3 on 12/6/16.
 */
$(document).ready(hidePage2() {
    $("#page2").hide();
});
function choose() {
    if (document.getElementById('player').value = document.getElementById("player").innerHTML) {
        document.getElementById('player').display = 'block';
    } else {
        document.getElementById('player').display = 'none';
    }
}
//--- D20 ---//
function rollD20() {
    var d20Result = document.getElementById("d20Result");
    var d20 = Math.floor(Math.random()*20+1);
    d20Result.innerHTML = d20;
}

//--- D12 ---//
function rollD12() {
    var d12Result = document.getElementById("d12Result");
    var d12 = Math.floor(Math.random()*12+1);
    d12Result.innerHTML = d12;
}

//--- D10 ---//
function rollD10() {
    var d10Result = document.getElementById("d10Result");
    var d10 = Math.floor(Math.random()*10+1);
    d10Result.innerHTML = d10;
}

//--- D8 ---//
function rollD8() {
    var d8Result = document.getElementById("d8Result");
    var d8 = Math.floor(Math.random()*8+1);
    d8Result.innerHTML = d8;
}

//--- D6 ---//
function rollD6() {
    var d6Result = document.getElementById("d6Result");
    var d6 = Math.floor(Math.random()*6+1);
    d6Result.innerHTML = d6;
}

//--- D4 ---//
function rollD4() {
    var d4Result = document.getElementById("d4Result");
    var d4 = Math.floor(Math.random()*4+1);
    d4Result.innerHTML = d4;
}
function playerBuild() {
    var player = new Player(document.getElementById("profession").value, document.getElementById("race").value, document.getElementById("name").value, document.getElementById("deity").value);
    console.log (player);
    return player
}

function rollStrength() {
    strResult = document.getElementById("strResult");
    str = Math.floor((Math.random()*10)+10);
    strResult.innerHTML = str;
    if (Player.race== "troll") {
        str += 2
    }
}

function rollDexterity() {
    dexResult = document.getElementById("dexResult");
    dex = Math.floor((Math.random()*10)+10);
    dexResult.innerHTML = dex;
    if (Player.race== "elf") {
        dex += 2;
    }
}

function rollCharisma() {
    chaResult = document.getElementById("chaResult");
    cha = Math.floor((Math.random()*10)+10);
    chaResult.innerHTML = cha;
    if (Player.race== "troll") {
        cha -= 2
    }
}

function rollConstitution() {
    conResult = document.getElementById("conResult");
    con = Math.floor((Math.random()*10)+10);
    conResult.innerHTML = con;
    if (Player.race== "troll") {
        con += 2
    }
    if (Player.race== "dwarf") {
        con += 2
    }
}

function rollWisdom() {
    wisResult = document.getElementById("wisResult");
    wis = Math.floor((Math.random()*10)+10);
    wisResult.innerHTML = wis;
    if (Player.race== "elf") {
        Player.wisdom += 2
    }
    //else if (Player.race== "human") {
      //  wis -= 2
    //}

}

function rollIntelligence() {
    intResult = document.getElementById("intResult");
    int = Math.floor((Math.random()*10)+10);
    intResult.innerHTML = int;
    if (Player.race== "troll");
    int -=2
}
function rollSkills() {
    rollWisdom() + rollIntelligence() + rollConstitution() + rollWisdom() + rollDexterity() + rollStrength() + rollCharisma()
}

function newPage() {
    $("#page1").empty();
}
function page2Stealth() {
   $("#page2").hide();
}