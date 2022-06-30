function ConsoleInitiation(){
    console.log("Initialisation..");
    console.log("mdr y'a rien ici");
}

function OnloadGame(){
    return Math.floor(Math.random() * 2501);
}

function ProspectNumber(){
    let _toFind = OnloadGame();
    console.log(_toFind);
    const _toHint = document.getElementById("GameMainInput").value;
    let _gameHitCountUser = document.getElementById("GameHitCount").innerHTML;

    // test validité
    if (_gameHitCountUser === "0"){
        _gameHitCountUser = "1";
        WinTest(_toFind,_toHint);
    }
    else if (_gameHitCountUser === "1"){
        _gameHitCountUser = "2";
        WinTest(_toFind,_toHint);
    }
    else if (_gameHitCountUser === "2"){
        _gameHitCountUser = "3";
        WinTest(_toFind,_toHint);
    }
    else if (_gameHitCountUser === "3"){
        if(!WinTest(_toFind,_toHint)){
            alert("Vous avez perdu !")
        }
        _gameHitCountUser = "0";
    }
    document.getElementById("GameHitCount").innerHTML = _gameHitCountUser;
}

function WinTest(_toFind,_toHint){
    if (_toFind.toString() === _toHint.toString()){
        alert("Vous avez gagné ! Bravo")
        document.getElementById("GameHitCount").innerHTML = "0";
        return true;
    }
}