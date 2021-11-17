import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class Inmueble extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idInmueble?: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'number',
    required: true,
  })
  ValorVenta: number;

  @property({
    type: 'string',
    required: true,
  })
  Imagen: string;

  @property({
    type: 'number',
    required: true,
  })
  ValorAlquiler: number;

  @belongsTo(() => Cliente)
  clienteId: string;

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
