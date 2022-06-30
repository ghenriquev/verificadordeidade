function verificar(){

    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('birth');
    var res = document.getElementById('res');

    if(fAno.value.length == 0 || fAno.value < 1900){

        window.alert('Verifique os dados e tente novamente!');

    } else if (fAno.value > ano) {

        window.alert('Você não nasceu ainda!');

    } else {

        var fSex = document.getElementsByName('gender');
        var idade = ano - Number(fAno.value);
        var genero = fSex[0].checked ? 'homem' : 'mulher';
        var img = document.createElement('img');
        var fase = ''
    
        img.setAttribute('id', 'foto');

        if (idade >= 0 && idade <= 9){
            fase = 'bebe'
        } else if (idade <= 18){
            fase = 'jovem'
        } else if (idade <= 55){
            fase = 'adulto'
        } else {
            fase = 'idoso'
        }

        var foto_res = `foto-${fase}-${genero}.png`;
        img.setAttribute('src', `./assets/${foto_res}`);
        res.style.textAlign = 'center';
        res.innerHTML = `<p>Detectamos <strong>${genero}</strong> com ${idade} anos.</p>`
        res.appendChild(img);
    }
}