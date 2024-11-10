import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private readonly products = [
    {
      nome: 'Figura de ação Marvel Homem Aranha Olympus Homem Aranha E6358 de Hasbro Classic',
      valor: 70.0,
      quantidadeDisponivel: 10,
      descricao: 'Produto novo, bem acabado, alegria para colecionadores',
      caracteristicas: [
        {
          nome: 'Fabricante',
          descricao: 'Iron Studios',
        },
        {
          nome: 'material',
          descricao: 'Plástico',
        },
      ],
      imagens: [
        {
          url: 'https://i.imgur.com/dwDZICq.jpg',
          descricao: 'Imagem do Homem Aranha',
        },
      ],
      categoria: 'Colecionáveis',
      dataCriacao: '2022-10-12T14:22:53.496Z',
      dataAtualizacao: '2022-10-12T14:22:53.496Z',
    },
  ];

  async save(product) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }
}
