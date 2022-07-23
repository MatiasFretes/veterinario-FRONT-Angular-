import { AnimalModelResponse } from "./animal.model";
import { VeterinarioModel } from "./veterinario.model";

export class HistorialModelRequest{
   id: number | undefined;
   id_animal : number | undefined;
   id_veterinario : number | undefined;
   descripcion: string | undefined;
}

export class HistorialModelResponse{
   id: number | undefined;
   fecha: Date | undefined;
   descripcion: string | undefined;
   animal : AnimalModelResponse | undefined;
   veterinario: VeterinarioModel | undefined;
   estado: Boolean | undefined;
}