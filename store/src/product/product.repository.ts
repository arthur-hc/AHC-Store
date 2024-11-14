import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductRepository {
  private readonly products = [
    {
      name: 'Figura de ação Marvel Homem Aranha Olympus Homem Aranha E6358 de Hasbro Classic',
      price: 70.0,
      availableQuantity: 10,
      description: 'Produto novo, bem acabado, alegria para colecionadores',
      features: [
        {
          name: 'Fabricante',
          description: 'Iron Studios',
        },
        {
          name: 'Material',
          description: 'Plástico',
        },
      ],
      images: [
        {
          url: 'https://i.imgur.com/dwDZICq.jpg',
          description: 'Imagem do Homem Aranha',
        },
      ],
      category: 'Colecionáveis',
      creationDate: '2022-10-12T14:22:53.496Z',
      updateDate: '2022-10-12T14:22:53.496Z',
    },
  ];

  async save(product: CreateProductDto) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }
}
