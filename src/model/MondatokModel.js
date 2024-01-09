import { Mondatok } from "./angol.js";
export default class MondatokModel {
    #cim;
    #magyarMondatok;
    #angolMondatok;
    #aktFeladatIx;
    constructor() {
        this.#cim = Mondatok[0];
        this.#magyarMondatok = Mondatok[1];
        this.#angolMondatok = [];
        for (let ix = 2; ix < Mondatok.length; ix++) {
            const aktFeladat = Mondatok[ix];
            this.#angolMondatok.push({
                magyar: aktFeladat.magyar,
                index: ix++,
                mondat: aktFeladat.mondat,
                alap: aktFeladat.alap,
                valasz: aktFeladat.valasztas[0],
                valasztas: aktFeladat.valasztas
            });
        }
        this.#aktFeladatIx = 0;
    }
    p
}
