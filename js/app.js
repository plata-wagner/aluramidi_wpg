function playSound(idElemAudio){
    document.querySelector(idElemAudio).play();
}

const keywordList = document.querySelectorAll('.tecla');

let count = 0

while(count < 9){
    const keyword = keywordList[count];
    const instrument = keyword.classList[1];

    const idAudio = `#sonido_${instrument}`;

    keyword.onclick = function(){
        playSound(idAudio);
    };
    count++;
}