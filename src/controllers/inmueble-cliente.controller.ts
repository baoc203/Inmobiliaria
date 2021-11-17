import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Inmueble,
  Cliente,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleClienteController {
  constructor(
    @repository(InmuebleRepository)
    public inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Inmueble.prototype.idInmueble,
  ): Promise<Cliente> {
    return this.inmuebleRepository.cliente(id);
  }
}
