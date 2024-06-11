let musica = document.querySelector('audio');

//EVENTOS

document.querySelector('.play').addEventListener('click', tocarmusica);

document.querySelector('.pause').addEventListener('click', pausarmusica);

musica.addEventListener('timeupdate', atualizarbarra);

//FUNÇÕES

function tocarmusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausarmusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block'; 
}

function atualizarbarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor ((musica.currentTime / musica.duration) *100) + '%';
    let tempodecorrido = document.querySelector('.tinicio');
    tempodecorrido.textContent = Math.floor (musica.currentTime);

}
