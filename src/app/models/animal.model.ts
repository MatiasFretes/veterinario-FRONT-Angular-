import { PropietarioModel } from "./propietario.model";
import { TipoAnimalModel } from "./tipoAnimal.model";

export class AnimalModelRequest{
    id: number | undefined;
    nombre: string | undefined;
    peso: number | undefined;
    fechaCreacion: Date | undefined;
    id_tipoAnimal : number | undefined;
    id_propietario : number | undefined;
}

export class AnimalModelResponse{
    id: number | undefined;
    nombre: string | undefined;
    peso: number | undefined;
    fechaCreacion: Date | undefined;
    tipo : TipoAnimalModel | undefined;
    propietario : PropietarioModel | undefined;
}