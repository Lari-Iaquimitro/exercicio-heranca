export abstract class Bebe {

    private id: string;
    private nome: string;
    private peso: string;
    private altura: string;

    public constructor(_id: string, _nome: string, _peso: string, _altura: string) {

        this.id = _id;
        this.nome = _nome;
        this.peso = _peso;
        this.altura = _altura;
    }

    public setId(_id: string): void {
        this.id = _id;
    }

    public getId(): string {
        return this.id;
    }

    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setPeso(_peso: string): void {
        this.peso = _peso;
    }
    public getPeso(): string {
        return this.peso;
    }

    public setAltura(_altura: string): void {
        this.altura = _altura;
    }
    public getAltura(): string {
        return this.altura;
    }
}