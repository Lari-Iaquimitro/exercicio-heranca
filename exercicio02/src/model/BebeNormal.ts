import { Bebe } from "./Bebe";

export class BebeNormal extends Bebe {

    private vacinado: boolean;

    public constructor(_id: string, _nome: string, _peso: string, _altura: string, _vacinado: boolean) {
        super(_id, _nome, _peso, _altura);
        this.vacinado = _vacinado;
    }

    public setVacinado(_vacinado: boolean): void {
        this.vacinado = _vacinado;
    }

    public getVacinado(): boolean {
        return this.vacinado;
    }
}