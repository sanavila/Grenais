
function golsGrenal () {
    let perguntaSeNovoGrenal = prompt("Novo grenal (1-sim 2-nao): ");
    var contagemDosGrenais = 0;
    var vencedor = {"Inter": 0, "Grêmio": 0,"Empates": 0};

    while (perguntaSeNovoGrenal == 1){ 
        let golsInter = prompt("Escreva quantos gols fez o Inter: ");
        let golsGremio = prompt("Escreva quantos gols fez o Grêmio: ");
        if (golsInter > golsGremio) {
            vencedor["Inter"]++;
        }else if (golsInter < golsGremio) {
            vencedor["Grêmio"]++;
        }else {
            vencedor["Empates"]++;
        }
        perguntaSeNovoGrenal = prompt("Novo grenal (1-sim 2-nao): ");
        contagemDosGrenais++;
    } 

    if( vencedor.Inter > vencedor.Grêmio) {
        console.log("Inter venceu mais")
    } else if ( vencedor.Inter > vencedor.Grêmio) {
        console.log("Grêmio venceu mais")
    }  else {
        console.log("Houve mais empates")
    }

    console.log(
        `${contagemDosGrenais} grenais`, 
        `Inter: ${vencedor.Inter}`,
        `Grêmio: ${vencedor.Grêmio}`,
        `Empates: ${vencedor.Empates}`
    )
}

golsGrenal();
