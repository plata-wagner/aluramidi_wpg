function playSound(idElemAudio){
    document.querySelector(idElemAudio).play();
}

const keywordList = document.querySelectorAll('.tecla');

for(let count = 0; count<keywordList.length; count++){
    const keyword = keywordList[count];
    const instrument = keyword.classList[1];

    const idAudio = `#sonido_${instrument}`;

    keyword.onclick = function(){
        playSound(idAudio);
        console.log(idAudio);
    };
    keyword.onkeydown = function(e){
        if(e.code === 'Space' || e.code === 'Enter'){
            keyword.classList.add('activa')
        }
    };
    keyword.onkeyup = function (){
        keyword.classList.remove('activa')
    };

}
