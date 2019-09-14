import { action, observable } from 'mobx';
import { ClientInterface } from '../../interfaces/client.interface';
import { ServiceInterface } from '../../interfaces/service.interface';
import { assign } from '../../util';
import { success } from '../../components/notifications';

export default class ClientStore {

  @observable records: {
    codigo: number
    name: string
    status: number
    allow_update: boolean
  } = {
      codigo: 0,
      name: '',
      status: 1,
      allow_update: true
    };

  @observable recordsClient: {
    codigo: string
    name: string
    date: string
    cpf: string
    email: string
    phone: string
    address: {
      cep: string
      rua: string
      numero: string
      bairro: string
      cidade: string
      estado: string
    }
    status: number
  } = {
      codigo: '',
      name: '',
      date: '',
      cpf: '',
      email: '',
      phone: '',
      address: {
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
      },
      status: 1,
    };

  @observable services: {
    id: string
    description: string
    value: string
    time: string
  } = {
      id: '',
      description: '',
      value: '',
      time: '',
    }

  @observable showActiveScreen: boolean = true;
  @observable Clients: ClientInterface[] = [];
  @observable ClientsView: ClientInterface[] = [];
  @observable date;
  @observable init: number = 0;
  @observable zipcode: string = "";
  @observable Service: ServiceInterface[] = [];
  @observable Services;

  @action reset = () => {
    this.records = {
      codigo: 0,
      name: '',
      status: 1,
      allow_update: true
    };
    this.recordsClient = {
      codigo: '',
      name: '',
      date: '',
      cpf: '',
      email: '',
      phone: '',
      address: {
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
      },
      status: 1,
    };
    this.Service = [];

  }
  @action resetService = () => {
    this.services = {
      id: '',
      description: '',
      value: '',
      time: '',
    }
  }

  @action handleChange = (event: any, select?: any) => {
    const { id, value } = select || event.target;
    assign(this, id, value);
  };

  @action handleBack = () => {
    this.handleActiveScreen();
    this.reset();
  }

  @action handleActiveScreen = () => {
    this.showActiveScreen = !this.showActiveScreen;
  }

  @action handleDate = (date: Date | null) => {
    this.date = date;
    this.recordsClient.date = this.date;
  };

  @action addService = () => {
    if (this.services.id) {
      this.Service = this.Service.filter(s => s.description !== this.services.description)
      this.Service.push({
        id: this.services.id,
        description: this.services.description,
        value: this.services.value,
        time: this.services.time,
        status_id: 1
      })
      this.resetService();
      success("Serviço atualizado com sucesso!")
    } else {
      let count = this.Service.length + 1;
      this.Service.push({
        id: count.toString(),
        description: this.services.description,
        value: this.services.value,
        time: this.services.time,
        status_id: 1
      })
      success("Serviço inserido com sucesso!")
    }
  }

  @action createNewClient = () => {
    console.log(JSON.parse(JSON.stringify(this.recordsClient)));
    if(this.recordsClient.codigo){
      
    } else {

    let count = this.Clients.length + 1;
    this.Clients.push({
      id: count.toString(),
      name: this.recordsClient.name,
      date: this.recordsClient.date,
      cpf: this.recordsClient.cpf,
      email: this.recordsClient.email,
      phone: this.recordsClient.phone,
      address: {
        cep: this.recordsClient.address.cep,
        rua: this.recordsClient.address.rua,
        numero: this.recordsClient.address.numero,
        bairro: this.recordsClient.address.bairro,
        cidade: this.recordsClient.address.cidade,
        estado: this.recordsClient.address.estado,
      },
      service: this.Service,
      status: 1
    })
    }
    this.handleActiveScreen();
    success("Cliente cadastrado com sucesso!")
    this.reset();
  }

  @action viewClient = (id: string) => {
    console.log("Teste", id)
    this.ClientsView = this.Clients.filter(c => c.id === id)

    this.recordsClient = {
      codigo: this.ClientsView[0].id,
      name: this.ClientsView[0].name,
      date: this.ClientsView[0].date,
      cpf: this.ClientsView[0].cpf,
      email: this.ClientsView[0].email,
      phone: this.ClientsView[0].phone,
      address: {
        cep: this.ClientsView[0].address.cep,
        rua: this.ClientsView[0].address.rua,
        numero: this.ClientsView[0].address.numero,
        bairro: this.ClientsView[0].address.bairro,
        cidade: this.ClientsView[0].address.cidade,
        estado: this.ClientsView[0].address.estado,
      },
      status: this.ClientsView[0].status
    }
    // console.log(JSON.parse(JSON.stringify(client)))
    this.handleActiveScreen();
  }

  @action initClient = () => {
    let services = [
      {
        id: '1',
        description: 'Corte',
        value: '30,00',
        time: '40',
        status_id: 1
      },
      {
        id: '2',
        description: 'Escova',
        value: '60,00',
        time: '50',
        status_id: 1
      },
      {
        id: '3',
        description: 'Maquiagem',
        value: '80,00',
        time: '80',
        status_id: 1
      }
    ]
    if (!this.init) {

      let clients = [{
        id: '1',
        name: 'Marcelo de Andrade Silva',
        date: '1997-12-26T03:00:00.000Z',
        cpf: '44807756842',
        email: 'marcelo.silva@luizalabs.com',
        phone: '16992362117',
        address: {
          cep: '14403734',
          rua: 'João Mauricio de Souza',
          numero: '3893',
          bairro: 'Samello Woods',
          cidade: 'Franca',
          estado: 'São Paulo',
        },
        service: services,
        status: 1
      },
      {
        id: '2',
        name: 'Jean Carlo Alves Ferreira',
        date: '1997-12-26T03:00:00.000Z',
        cpf: '44807756842',
        email: 'jean.carlo@hotmail.com',
        phone: '16992362117',
        address: {
          cep: '14403734',
          rua: 'João Mauricio de Souza',
          numero: '3893',
          bairro: 'Samello Woods',
          cidade: 'Franca',
          estado: 'São Paulo',
        },
        service: services,
        status: 1
      },
      {
        id: '3',
        name: 'Ana Laura Tassoni da Silva',
        date: '1997-12-26T03:00:00.000Z',
        cpf: '44807756842',
        email: 'ana.laura@hotmail.com',
        phone: '16992362117',
        address: {
          cep: '14403734',
          rua: 'João Mauricio de Souza',
          numero: '3893',
          bairro: 'Samello Woods',
          cidade: 'Franca',
          estado: 'São Paulo',
        },
        service: services,
        status: 1
      }]
      clients.map(c => {
        this.Clients.push(c);
      })
      this.init = 1;
    }
    services.map(s => {
      this.Service.push(s)
    })

  }

  @action deleteClient = (id: string) => {
    this.Clients = this.Clients.filter(s => s.id !== id);
    success("Cliente deletado com sucesso!")
  }

  @action deleteService = (desc: string) => {
    this.Service = this.Service.filter(s => s.description !== desc)
    success("Serviço deletado com sucesso!")
  }

  @action editService = (desc: string) => {
    let service = this.Service.filter(s => s.description === desc)
    this.services = {
      id: service[0].id,
      description: service[0].description,
      value: service[0].value,
      time: service[0].time,
    }    
  }
}
const client = new ClientStore();
export { client };
