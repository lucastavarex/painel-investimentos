const config = {
 
  style: 'mapbox://styles/escritoriodedados/cll16e75n00t901pi9iif9gpx',
  accessToken:
    'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w',
  CSV: './assets/csv/obras.csv',
  center: [-43.45273, -22.90996],
  zoom: 10.00,
  sideBarInfo: ['obras','titulo','endereço'],
  popupInfo: ['Titulo','Projeto','Bairro', 'Situação'],
  filters: [
    {
      type: 'dropdown',
      title: '',
      columnHeader: 'AP',
      listItems: [
        '1',
        '2',
        '3',
        '4',
        '5',
      ],
    },
    {
      type: 'checkbox',
      title: '',
      columnHeader: 'Projeto', 
      listItems: ['Morar Carioca', 'Bairro Maravilha', 'Saúde', 'BRT'], 
    }
  ],
};
