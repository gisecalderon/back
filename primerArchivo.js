class Contador {
    constructor (responsable){
        this.responsable - responsable;
        this.conteo = 0;
    }
    static conteoGlobal = 0;
    getResponsable =() => {
        return this.responsable;

    }
    contar = () => {
        this.conteo++;//Sumale 1
        Contador.conteoGlobal++;
    }
    getCuentaIndividual = () => {
        return this.conteo;
    }
    getCuentaGlobal =() =>{
        return Contador.conteoGlobal;
    }
}