const config = {

  style: 'mapbox://styles/escritoriodedados/cll16e75n00t901pi9iif9gpx',
  accessToken:
    'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w',
  CSV: './assets/csv/obras.csv',
  center: [-43.45273, -22.90996],
  zoom: 10.00,
  popupInfo: ['Titulo', 'Projeto', 'Orgao','Bairro', 'Situação', 'Investimento', 'Beneficiados'],
  filters: [
    {
      type: 'dropdown',
      title: '',
      columnHeader: 'Bairro',
      listItems: [
        'Acari',
        'Alto da Boa Vista',
        'Andaraí',
        'Bangu',
        'Barra da Tijuca',
        'Benfica',
        'Bonsucesso',
        'Botafogo',
        'Brás de Pina',
        'Caju',
        'Camorim',
        'Campinho',
        'Campo Grande',
        'Catete',
        'Centro',
        'Cidade Nova',
        'Cocotá',
        'Copacabana',
        'Cordovil',
        'Cosmos',
        'Costa Barros',
        'Curicica',
        'Del Castilho',
        'Deodoro',
        'Encantado',
        'Engenho Novo',
        'Estácio',
        'Galeão',
        'Gamboa',
        'Gávea',
        'Guadalupe',
        'Guaratiba',
        'Ilha de Guaratiba',
        'Inhaúma',
        'Inhoaíba',
        'Irajá',
        'Itanhangá',
        'Jabour',
        'Jacarepaguá',
        'Jacarezinho',
        'Jardim América',
        'Jardim Sulacap',
        'Lagoa',
        'Leme',
        'Lins de Vasconcelos',
        'Madureira',
        'Magalhães Bastos',
        'Mangueira',
        'Manguinhos',
        'Maré',
        'Méier',
        'Olaria',
        'Paciência',
        'Padre Miguel',
        'Paquetá',
        'Parada de Lucas',
        'Parque Colúmbia',
        'Pechincha',
        'Penha',
        'Penha Circular',
        'Piedade',
        'Portuguesa',
        'Praça da Bandeira',
        'Praça Seca',
        'Ramos',
        'Realengo',
        'Recreio dos Bandeirantes',
        'Rio Comprido',
        'Rocha Miranda',
        'Rocinha',
        'Sampaio',
        'Santa Cruz',
        'Santa Teresa',
        'Santíssimo',
        'Santo Cristo',
        'São Conrado',
        'São Cristóvão',
        'São Francisco Xavier',
        'Senador Camará',
        'Sepetiba',
        'Tanque',
        'Taquara',
        'Tijuca',
        'Vargem Grande',
        'Vargem Pequena',
        'Vasco da Gama',
        'Vaz Lobo',
        'Vicente de Carvalho',
        'Vidigal',
        'Vigário Geral',
        'Vila da Penha',
        'Vila Isabel',
        'Vila Kennedy',
        'Vila Militar',
        'Zumbi',
      ],
    },
    {
      type: 'checkbox',
      title: '',
      columnHeader: 'Projeto',
      listItems: ['Saúde', 'Bairro Maravilha','Morar Carioca', 'BRT'],
    }
  ],
};
