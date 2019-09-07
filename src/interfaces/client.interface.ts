interface Service {
    id: string
    description: string
    value: string
    time: string
}

interface Address {
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
}

export interface ClientInterface {
    id: string
    name: string
    date: string
    cpf: string
    email: string
    phone: string
    address: Address
    service: Service[]
    status: number
}
