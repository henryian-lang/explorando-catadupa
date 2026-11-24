/* Roteiro do modo óculos: usado pelo vr.html e pelo controle.html */
window.STOPS = [
  { short: 'Boas-vindas', kicker: 'Educação Ambiental · USP EACH', title: 'Bem-vindo à RPPN Fazenda Catadupa',
    type: 'slide', img: 'i-rio',
    text: 'Este trabalho mostra a reserva de perto para quem não pôde ir à viagem. Vamos fazer o caminho juntos: da USP Leste até São José do Barreiro.' },

  { short: 'A viagem', kicker: 'Da EACH à reserva', title: 'A viagem', type: 'journey',
    caption: 'Da zona leste de São Paulo pela Via Dutra e pela Rodovia dos Tropeiros até São José do Barreiro.',
    text: 'Saímos da EACH, na zona leste de São Paulo, seguimos pela Via Dutra até o Vale do Paraíba e pela Rodovia dos Tropeiros até São José do Barreiro. Trajeto aproximado.' },

  { short: 'A chegada', kicker: 'São José do Barreiro', title: 'A chegada', type: 'video', id: 'v-chegada',
    caption: 'O casarão da fazenda, construído em 1831.',
    text: 'O casarão da fazenda, construído em 1831, no auge do café no Vale do Paraíba.' },

  { short: 'O que é uma RPPN', kicker: 'Conceito', title: 'O que é uma RPPN', type: 'slide', img: 'i-portao',
    text: 'Reserva Particular do Patrimônio Natural: uma área privada que o próprio dono transforma em unidade de conservação, para sempre. Pela lei do SNUC (Lei 9.985/2000), ali só se permite pesquisa e visitação turística, recreativa e educacional.' },

  { short: 'A RPPN Catadupa', kicker: 'Desde 2015', title: 'A RPPN Fazenda Catadupa', type: 'slide', img: 'i-mata',
    text: 'Reconhecida pelo ICMBio em 2015 (Portaria nº 52), protege 38,18 ha às margens do Rio Formoso, perto do Parque Nacional da Serra da Bocaina. A fazenda é de 1831 e viveu o auge do café.' },

  { short: 'Lauro', kicker: 'Quem cuida da reserva', title: 'Conversa com Lauro', type: 'video', id: 'v-recepcao', layout: 'slide',
    text: 'Lauro aparece na portaria do ICMBio como um dos administradores da RPPN. A reserva foi criada por vontade dos proprietários, e a fazenda está em restauração para receber visitas educativas, sempre com agendamento.' },

  { short: 'Casarão', kicker: 'Interior', title: 'O casarão', type: 'video', id: 'v-interior',
    caption: 'Pé-direito alto, forro e escadas de madeira.',
    text: 'Pé-direito alto, forro e escadas de madeira.' },

  { short: 'Salão', kicker: 'Interior', title: 'O salão', type: 'video', id: 'v-salao', extra: 'i-acervo',
    caption: 'Ferramentas, arreios, grãos de café e objetos indígenas.',
    text: 'Ferramentas, arreios, grãos de café e, na outra parede, retratos e objetos indígenas.' },

  { short: 'Jardim', kicker: 'Ao redor da casa', title: 'O jardim', type: 'video', id: 'v-jardim',
    caption: 'O jardim em volta do casarão.',
    text: 'O jardim em volta do casarão.' },

  { short: 'Rio Formoso', kicker: 'Dentro da reserva', title: 'O Rio Formoso', type: 'video', id: 'v-rio',
    caption: '“Catadupa” quer dizer queda d’água.',
    text: '“Catadupa” quer dizer queda d’água: o nome vem da cachoeira dupla do Rio Formoso.' },

  { short: 'A paisagem', kicker: 'Vale do Paraíba', title: 'A paisagem', type: 'pano',
    caption: 'Obrigado pela visita.',
    text: 'Os morros do Vale, entre a mata e o pasto. Obrigado pela visita.' }
];
