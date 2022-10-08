function alkoholnaBorsa (input){
    let uiskiCena = Number(input.shift());
    let bira = Number(input.shift());
    let vino = Number(input.shift());
    let rakiq = Number(input.shift());
    let uiski = Number(input.shift());

    let rakiqCenaLiter = uiskiCena / 2;
    let vinoCenaLiter = rakiqCenaLiter - (0.4 * rakiqCenaLiter);
    let biraCenaLiter = rakiqCenaLiter - (0.8 * rakiqCenaLiter);

    let sumata = (rakiq * rakiqCenaLiter) + (vino * vinoCenaLiter) + (bira + biraCenaLiter) + (uiski * uiskiCena);

    console.log(sumata.toFixed(2));
}

alkoholnaBorsa([
    50,
    10,
    3.5,
    6.5,
    1

]);