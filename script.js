var mainAtual = 1;

/////////////////////// VARIÁVEIS
/////////////////////////////////

/////////// PEIXE //////////////
    var qtdPx = document.getElementById('qtdPx'),
        qtdUpPx = 1,
        qtdVlPx = 5000,
        preUpPx = 1,
        preVlPx = 3000,
        autoUpPx = 1,
        autoVlPx = 10000;

/////////// CORTE //////////////
    var qtdCt = document.getElementById('qtdCt'),
        qtdUpCt = 1,
        qtdVlCt = 8000,
        preUpCt = 1,
        preVlCt = 5000,
        autoUpCt = 1,
        autoVlCt = 18000;

/////////// PICAR //////////////
    var qtdPc = documet.getElementById('qtdPc'),
        qtdUpPc = 1,
        qtdVlPc = 18000,
        preUpPc = 1,
        preVlPc = 12000,
        autoUpPc = 1,
        autoVlPc = 30000;

/////////// ENROLAR //////////////
    var qtdEn = documet.getElementById('qtdEn'),
        qtdUpEn = 1,
        qtdVlEn = 25000,
        preUpEn = 1,
        preVlEn = 20000,
        autoUpEn = 1,
        autoVlEn = 50000;

/////////// SERVIR //////////////
    var qtdSs = documet.getElementById('qtdSs'),
        qtdUpSs = 1,
        qtdVlSs = 35000,
        preUpSs = 1,
        preVlSs = 28000,
        autoUpSs = 1,
        autoVlSs = 100000;

/////////// UPGRADES ////////////
    var qtdUpVal = document.getElementById('qtdVl');
    var qtdUpTtl = document.getElementById('qtdUp');
    var preUpVal = document.getElementById('preVl');
    var preUpTtl = document.getElementById('preUp');
    var autoUpVal = document.getElementById('autoVl');
    var autoUpTtl = document.getElementById('autoUp');

function acaoBot(){
    document.getElementById('idServir').textContent = 1;
}

function mudarTela(a){
    if (mainAtual == 1 && a == -1 || mainAtual == 5 && a == 1){
            return;
        } else {
            mainAtual += a;
    
        var telaEsq = document.getElementById('trocaTelaEsq'),
            telaDir = document.getElementById('trocaTelaDir'),
            telaPescar = document.getElementById('idPescar'),
            telaCortar = document.getElementById('idCortar'),
            telaPicar = document.getElementById('idPicar'),
            telaEnrolar = document.getElementById('idEnrolar'),
            telaServir = document.getElementById('idServir');

        switch (mainAtual){

            case 1:
                telaEsq.style.opacity = '0%';
                telaPescar.style.display = 'flex';
                telaCortar.style.display = 'none';
                telaTexto();
            break;
            case 2:
                telaEsq.style.opacity = '50%';
                telaPescar.style.display = 'none';
                telaCortar.style.display = 'flex';
                telaPicar.style.display = 'none';
                telaTexto();
            break;
            case 3:
                telaCortar.style.display = 'none';
                telaPicar.style.display = 'flex';
                telaEnrolar.style.display = 'none';
                telaTexto();
            break;
            case 4:
                telaDir.style.opacity = '50%';
                telaPicar.style.display = 'none';
                telaEnrolar.style.display = 'flex';
                telaServir.style.display = 'none'; 
                telaTexto(); 
            break;
            case 5:
                telaDir.style.opacity = '0%';
                telaEnrolar.style.display = 'none';
                telaServir.style.display = 'flex'; 
                telaTexto(); 
            break;
        }
    
    }
}

function telaTexto(){

    switch(mainAtual){

        case 1:
            qtdUpVal.innerHTML = qtdVlPx;
            qtdUpTtl.innerHTML = qtdUpPx;
            preUpVal.innerHTML = preVlPx;
            preUpTtl.innerHTML = preUpPx;
            autoUpVal.innerHTML = autoVlPx;
            autoUpTtl.innerHTML = autoUpPx;
        break;
        case 2:
            qtdUpVal.innerHTML= qtdVlCt;
            qtdUpTtl.innerHTML= qtdUpCt;
            preUpVal.innerHTML= preVlCt;
            preUpTtl.innerHTML= preUpCt;
            autoUpVal.innerHTML = autoVlCt;
            autoUpTtl.innerHTML= autoUpCt;
        break;
        case 3:
            qtdUpVal.textContent = qtdVlPc;
            qtdUpTtl.textContent = qtdUpPc;
            preUpVal.textContent = preVlPc;
            preUpTtl.textContent = preUpPc;
            autoUpVal.textContent = autoVlPc;
            autoUpTtl.textContent = autoUpPc;
        break;
        case 4:
            qtdUpVal.textContent = qtdVlEn;
            qtdUpTtl.textContent = qtdUpEn;
            preUpVal.textContent = preVlEn;
            preUpTtl.textContent = preUpEn;
            autoUpVal.textContent = autoVlEn;
            autoUpTtl.textContent = autoUpEn;
        break;
        case 5:
            qtdUpVal.textContent = qtdVlSs;
            qtdUpTtl.textContent = qtdUpSs;
            preUpVal.textContent = preVlSs;
            preUpTtl.textContent = preUpSs;
            autoUpVal.textContent = autoVlSs;
            autoUpTtl.textContent = autoUpSs;
        break;
    }
}