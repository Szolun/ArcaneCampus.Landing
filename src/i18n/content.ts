export type Locale = 'pt' | 'en'

export const STEAM_URL = 'https://store.steampowered.com/app/5399860/Arcane_Campus/'
export const STEAM_COMMUNITY_URL = 'https://steamcommunity.com/app/5399860'

export type FeatureKey = 'academies' | 'mentors' | 'party' | 'events' | 'pvp' | 'guilds'
export type PlatformKey = 'windows' | 'macos' | 'linux'
export type ClassKey = 'fighter' | 'engineer' | 'medic' | 'musician' | 'hunter' | 'gunner' | 'lancer' | 'soulmage'
export type Gender = 'f' | 'm'
export type DamageType = 'physical' | 'magical'
export type Range = 'melee' | 'ranged' | 'hybrid'

type Requirement = { label: string; value: string }

export type GameClass = {
  name: string
  role: string
  damage: DamageType
  range?: Range
  summary: string
  traits: string[]
}

export type Content = {
  meta: { title: string; description: string; htmlLang: string }
  skip: string
  nav: {
    about: string
    features: string
    classes: string
    events: string
    platforms: string
    faq: string
    wishlist: string
    openMenu: string
    closeMenu: string
    language: string
  }
  hero: {
    badge: string
    titleA: string
    titleB: string
    lead: string
    primary: string
    secondary: string
    chips: string[]
    scroll: string
  }
  about: {
    eyebrow: string
    title: string
    body: string[]
    motto: string[]
    imageAlt: string
  }
  stats: { value: string; label: string }[]
  features: {
    eyebrow: string
    title: string
    lead: string
    items: Record<FeatureKey, { title: string; body: string }>
  }
  classes: {
    eyebrow: string
    title: string
    lead: string
    pickerLabel: string
    genderLabel: string
    gender: Record<Gender, string>
    damage: Record<DamageType, string>
    range: Record<Range, string>
    damageLabel: string
    rangeLabel: string
    roleLabel: string
    traitsTitle: string
    artAlt: (name: string, gender: string) => string
    items: Record<ClassKey, GameClass>
  }
  events: {
    eyebrow: string
    title: string
    lead: string
    cadence: { name: string; body: string }[]
  }
  platforms: {
    eyebrow: string
    title: string
    lead: string
    tabsLabel: string
    tabs: Record<PlatformKey, { name: string; reqs: Requirement[] }>
    minimum: string
    langsTitle: string
    langs: { name: string; detail: string }[]
    featuresTitle: string
    steamFeatures: string[]
    priceTitle: string
    price: string
    priceNote: string
  }
  faq: {
    eyebrow: string
    title: string
    items: { q: string; a: string }[]
  }
  cta: {
    title: string
    lead: string
    primary: string
    secondary: string
    imageAlt: string
  }
  footer: {
    tagline: string
    developer: string
    links: string
    store: string
    community: string
    disclosure: string
    rights: string
    fanNote: string
  }
}

const reqWin = (pt: boolean): Requirement[] => [
  { label: pt ? 'Sistema operacional' : 'OS', value: pt ? 'Windows 10 (64 bits)' : 'Windows 10 (64-bit)' },
  { label: pt ? 'Processador' : 'Processor', value: 'Intel Core i3-6100' },
  { label: pt ? 'Memória' : 'Memory', value: '4 GB RAM' },
  { label: pt ? 'Placa de vídeo' : 'Graphics', value: 'Intel HD Graphics 530' },
  { label: pt ? 'Armazenamento' : 'Storage', value: pt ? '2 GB disponíveis' : '2 GB available space' },
  { label: pt ? 'Rede' : 'Network', value: pt ? 'Conexão com a internet' : 'Broadband internet connection' },
]

const reqMac = (pt: boolean): Requirement[] => [
  { label: pt ? 'Sistema operacional' : 'OS', value: 'macOS 12 Monterey' },
  { label: pt ? 'Processador' : 'Processor', value: 'Intel Core i5 1.6 GHz' },
  { label: pt ? 'Memória' : 'Memory', value: '4 GB RAM' },
  { label: pt ? 'Placa de vídeo' : 'Graphics', value: 'Intel HD Graphics 6000' },
  { label: pt ? 'Rede' : 'Network', value: pt ? 'Conexão com a internet' : 'Broadband internet connection' },
]

const reqLinux = (pt: boolean): Requirement[] => [
  { label: pt ? 'Sistema operacional' : 'OS', value: pt ? 'Ubuntu 22.04 LTS (64 bits)' : 'Ubuntu 22.04 LTS (64-bit)' },
  { label: pt ? 'Processador' : 'Processor', value: 'Intel Core i3-6100' },
  { label: pt ? 'Memória' : 'Memory', value: '4 GB RAM' },
  { label: pt ? 'Placa de vídeo' : 'Graphics', value: 'Intel HD Graphics 530' },
  { label: pt ? 'Armazenamento' : 'Storage', value: pt ? '2 GB disponíveis' : '2 GB available space' },
  { label: pt ? 'Rede' : 'Network', value: pt ? 'Conexão com a internet' : 'Broadband internet connection' },
]

export const content: Record<Locale, Content> = {
  pt: {
    meta: {
      title: 'Arcane Campus — MMORPG 2D gratuito | Em breve na Steam',
      description:
        'Forje seu caminho em Arcane Campus, um MMORPG 2D focado em progressão constante. Free to Play — em breve na Steam.',
      htmlLang: 'pt-BR',
    },
    skip: 'Pular para o conteúdo',
    nav: {
      about: 'O jogo',
      features: 'Destaques',
      classes: 'Classes',
      events: 'Eventos',
      platforms: 'Plataformas',
      faq: 'FAQ',
      wishlist: 'Lista de desejos',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      language: 'Idioma',
    },
    hero: {
      badge: 'Em breve na Steam · Free to Play',
      titleA: 'Forje seu caminho em',
      titleB: 'Arcane Campus',
      lead: 'Um MMORPG 2D construído em torno da progressão constante. Aventure-se sozinho ou em grupos de até 5, aprenda com professores, guie alunos e encontre seu lugar entre as guildas.',
      primary: 'Adicionar à lista de desejos',
      secondary: 'Conhecer o jogo',
      chips: ['MMORPG 2D', 'PvE & PvP', 'Windows · macOS · Linux'],
      scroll: 'Role para explorar',
    },
    about: {
      eyebrow: 'Sobre o jogo',
      title: 'Um campus inteiro de magia esperando por você',
      body: [
        'Explore o mundo de Arcane Campus e desenvolva seu personagem por meio de batalhas, atividades e eventos. Escolha sua classe, descubra novas formas de progredir e encontre seu próximo objetivo em cada etapa da jornada.',
        'Visite as academias dedicadas à sua classe e aprenda habilidades para continuar evoluindo. A vida no campus também inclui um sistema de professores e alunos, trazendo aprendizado e conexões com outros jogadores para a sua jornada.',
      ],
      motto: ['Aprenda.', 'Evolua.', 'Compartilhe.'],
      imageAlt: 'Arte principal de Arcane Campus com seis heróis mágicos ao redor do logotipo do jogo',
    },
    stats: [
      { value: '5', label: 'jogadores por grupo' },
      { value: '3', label: 'plataformas suportadas' },
      { value: '2', label: 'idiomas: PT-BR e EN' },
      { value: 'Grátis', label: 'Free to Play' },
    ],
    features: {
      eyebrow: 'Destaques',
      title: 'Tudo o que te espera no campus',
      lead: 'Progressão constante, comunidade viva e desafios para todos os estilos de jogo.',
      items: {
        academies: {
          title: 'Academias & classes',
          body: 'Escolha sua classe e visite a academia dedicada a ela para aprender novas habilidades e continuar evoluindo.',
        },
        mentors: {
          title: 'Professores & alunos',
          body: 'Um sistema de mentoria que conecta jogadores: aprenda com quem já trilhou o caminho ou guie quem está começando.',
        },
        party: {
          title: 'Grupos de até 5',
          body: 'Encare desafios PvE e arenas de batalha sozinho ou monte um grupo de até cinco aventureiros.',
        },
        events: {
          title: 'Eventos o ano todo',
          body: 'Um calendário com eventos diários, semanais, mensais, sazonais e anuais para sempre ter um próximo desafio.',
        },
        pvp: {
          title: 'PvP & rankings',
          body: 'Coloque seu progresso à prova em eventos PvP, acompanhe os rankings e lute para se destacar.',
        },
        guilds: {
          title: 'Guildas & amigos',
          body: 'Adicione amigos, entre em uma guilda, busque conquistas e compartilhe cada passo da sua jornada.',
        },
      },
    },
    classes: {
      eyebrow: 'Classes',
      title: 'Escolha a sua classe',
      lead: 'Oito caminhos, cada um com seu estilo de combate. Todas as classes podem ser jogadas com personagem feminino ou masculino.',
      pickerLabel: 'Classes disponíveis',
      genderLabel: 'Personagem',
      gender: { f: 'Feminino', m: 'Masculino' },
      damage: { physical: 'Dano físico', magical: 'Dano mágico' },
      range: { melee: 'Corpo a corpo', ranged: 'À distância', hybrid: 'Corpo a corpo e à distância' },
      damageLabel: 'Tipo de dano',
      rangeLabel: 'Alcance',
      roleLabel: 'Função',
      traitsTitle: 'Pontos fortes',
      artAlt: (name, gender) => `${name}, versão ${gender.toLowerCase()}`,
      items: {
        fighter: {
          name: 'Lutador Artista',
          role: 'Combos',
          damage: 'physical',
          range: 'melee',
          summary:
            'Especialista em ataques físicos encadeados no corpo a corpo. Dependendo da habilidade usada, combina seus golpes com dano bruto.',
          traits: ['Ataques seguidos corpo a corpo', 'Combos com dano bruto', 'Pressão constante no alvo'],
        },
        engineer: {
          name: 'Soldado Engenheiro',
          role: 'Tanque',
          damage: 'physical',
          range: 'melee',
          summary:
            'O tanque da linha de frente: aguenta o combate corpo a corpo e responde com dano bruto. Pode usar o próprio inimigo para atordoar os outros adversários.',
          traits: ['Alta resistência na linha de frente', 'Dano bruto', 'Usa o inimigo para causar tontura'],
        },
        medic: {
          name: 'Médico da Felicidade',
          role: 'Suporte',
          damage: 'magical',
          range: 'ranged',
          summary:
            'Suporte à distância com bastante cura e capacidade de reviver aliados. Quando parte para o ataque, sua principal habilidade causa dano massivo em um único alvo.',
          traits: ['Bastante cura', 'Revive aliados', 'Dano massivo em alvo único'],
        },
        musician: {
          name: 'Músico Espiritual',
          role: 'Controle',
          damage: 'magical',
          range: 'ranged',
          summary:
            'Mestre do controle de grupo à distância: paralisa vários inimigos de uma vez, fortalece os aliados e enfraquece os adversários.',
          traits: ['Paralisa vários inimigos de uma vez', 'Buffs nos aliados', 'Enfraquece os inimigos'],
        },
        hunter: {
          name: 'Caçador do Sol',
          role: 'Mascote',
          damage: 'physical',
          range: 'hybrid',
          summary:
            'Luta no corpo a corpo e à distância ao lado do seu mascote, com foco em apoiá-lo, sem abrir mão de várias habilidades de dano massivo.',
          traits: ['Cura e ressuscita o mascote', 'Buffs em si mesmo e no mascote', 'Habilidades de dano massivo'],
        },
        gunner: {
          name: 'Atirador Mágico',
          role: 'Dano',
          damage: 'magical',
          range: 'ranged',
          summary:
            'Dano mágico bruto à distância, com habilidades de alvo único ou em área. Tem baixa resistência, mas o dano compensa.',
          traits: ['Alvo único ou em área', 'Dano bruto', 'Baixa resistência, dano alto'],
        },
        lancer: {
          name: 'Lanceiro Boreal',
          role: 'Agilidade',
          damage: 'physical',
          range: 'melee',
          summary:
            'Classe ágil de dano bruto, com ataques seguidos e muitos contra-ataques. Esquiva com facilidade de várias habilidades e, se o inimigo estiver sentindo frio, pode esquivar até de magias.',
          traits: ['Esquivas e contra-ataques', 'Esquiva magias de inimigos com frio', 'Congela inimigos em grupo'],
        },
        soulmage: {
          name: 'Mago das Almas',
          role: 'Debuffs',
          damage: 'magical',
          summary:
            'Dano mágico bruto com combos e debuffs. Aproveita as almas dos corpos caídos no campo de batalha para ganhar vantagem.',
          traits: ['Combos de dano bruto', 'Aplica debuffs', 'Usa as almas dos caídos'],
        },
      },
    },
    events: {
      eyebrow: 'Calendário arcano',
      title: 'Sempre há algo acontecendo',
      lead: 'O calendário de Arcane Campus oferece oportunidades ao longo do ano inteiro para entrar na aventura, conhecer outros jogadores e continuar progredindo.',
      cadence: [
        { name: 'Diários', body: 'Atividades rápidas para avançar um pouco a cada dia.' },
        { name: 'Semanais', body: 'Desafios maiores para encarar com seu grupo.' },
        { name: 'Mensais', body: 'Metas de longo prazo e recompensas especiais.' },
        { name: 'Sazonais', body: 'Eventos temáticos que mudam com as estações.' },
        { name: 'Anuais', body: 'As grandes celebrações do campus.' },
      ],
    },
    platforms: {
      eyebrow: 'Plataformas',
      title: 'Leve como um feitiço bem lançado',
      lead: 'Roda em Windows, macOS e Linux com requisitos modestos e multiplayer multiplataforma.',
      tabsLabel: 'Requisitos por sistema',
      tabs: {
        windows: { name: 'Windows', reqs: reqWin(true) },
        macos: { name: 'macOS', reqs: reqMac(true) },
        linux: { name: 'Linux', reqs: reqLinux(true) },
      },
      minimum: 'Requisitos mínimos',
      langsTitle: 'Idiomas',
      langs: [
        { name: 'Português (Brasil)', detail: 'Interface e legendas' },
        { name: 'Inglês', detail: 'Interface e legendas' },
      ],
      featuresTitle: 'Recursos Steam',
      steamFeatures: [
        'MMO',
        'PvP online',
        'Cooperativo online',
        'Multiplayer multiplataforma',
        'Conquistas Steam',
        'Steam Cloud',
        'Compartilhamento em família',
      ],
      priceTitle: 'Preço',
      price: 'Grátis',
      priceNote: 'Free to Play na Steam: baixe e jogue sem pagar nada.',
    },
    faq: {
      eyebrow: 'Perguntas frequentes',
      title: 'Antes de entrar no campus',
      items: [
        {
          q: 'Quanto custa Arcane Campus?',
          a: 'Nada. Arcane Campus é Free to Play e estará disponível gratuitamente na Steam.',
        },
        {
          q: 'Quando o jogo será lançado?',
          a: 'O lançamento está marcado como “Em breve” na Steam. Adicione o jogo à sua lista de desejos para ser avisado assim que ele sair.',
        },
        {
          q: 'Posso jogar sozinho?',
          a: 'Sim. Você pode se aventurar sozinho ou formar grupos de até cinco jogadores para desafios PvE, arenas e eventos.',
        },
        {
          q: 'Em quais sistemas posso jogar?',
          a: 'Windows 10 (64 bits), macOS 12 Monterey e Ubuntu 22.04 LTS (64 bits), com multiplayer multiplataforma. É necessária conexão com a internet.',
        },
        {
          q: 'O jogo tem anti-cheat?',
          a: 'Sim. Arcane Campus usa anti-cheat em nível de kernel e VAC. A proteção de inicialização requer Secure Boot e TPM 2.0 habilitados.',
        },
        {
          q: 'O jogo está em português?',
          a: 'Sim. Interface e legendas estão disponíveis em português do Brasil e em inglês.',
        },
      ],
    },
    cta: {
      title: 'Sua jornada começa aqui',
      lead: 'Adicione Arcane Campus à sua lista de desejos na Steam e seja avisado no dia do lançamento.',
      primary: 'Adicionar à lista de desejos',
      secondary: 'Comunidade Steam',
      imageAlt: 'Banner de Arcane Campus com os heróis do jogo diante do castelo da academia',
    },
    footer: {
      tagline: 'Aprenda. Evolua. Encontre a sua turma.',
      developer: 'Desenvolvido e publicado por Szolun',
      links: 'Links',
      store: 'Página na Steam',
      community: 'Comunidade',
      disclosure:
        'Divulgação de IA da Steam: alguns recursos visuais, incluindo ilustrações de personagens e elementos de interface das telas de criação e seleção, foram feitos com ferramentas de IA generativa.',
      rights: 'Arcane Campus © Szolun. Todos os direitos reservados.',
      fanNote: 'Steam e o logotipo Steam são marcas registradas da Valve Corporation.',
    },
  },
  en: {
    meta: {
      title: 'Arcane Campus — Free-to-play 2D MMORPG | Coming soon on Steam',
      description:
        'Forge your path in Arcane Campus, a 2D MMORPG built around constant progression. Free to Play — coming soon on Steam.',
      htmlLang: 'en',
    },
    skip: 'Skip to content',
    nav: {
      about: 'The game',
      features: 'Highlights',
      classes: 'Classes',
      events: 'Events',
      platforms: 'Platforms',
      faq: 'FAQ',
      wishlist: 'Wishlist',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
    },
    hero: {
      badge: 'Coming soon on Steam · Free to Play',
      titleA: 'Forge your path in',
      titleB: 'Arcane Campus',
      lead: 'A 2D MMORPG built around constant progression. Adventure solo or in parties of up to 5, learn from teachers, guide students, and find your place among the guilds.',
      primary: 'Add to Wishlist',
      secondary: 'Discover the game',
      chips: ['2D MMORPG', 'PvE & PvP', 'Windows · macOS · Linux'],
      scroll: 'Scroll to explore',
    },
    about: {
      eyebrow: 'About the game',
      title: 'A whole campus of magic is waiting for you',
      body: [
        'Explore the world of Arcane Campus and develop your character through battles, activities, and events. Choose your class, discover new ways to progress, and find your next goal at every stage of your journey.',
        'Visit the academies dedicated to your class and learn skills to keep progressing. Life in Arcane Campus also includes a teacher and student system, bringing learning and connections with other players into your journey.',
      ],
      motto: ['Learn.', 'Grow.', 'Share.'],
      imageAlt: 'Arcane Campus key art showing six magical heroes around the game logo',
    },
    stats: [
      { value: '5', label: 'players per party' },
      { value: '3', label: 'supported platforms' },
      { value: '2', label: 'languages: EN & PT-BR' },
      { value: 'Free', label: 'free to play' },
    ],
    features: {
      eyebrow: 'Highlights',
      title: 'Everything waiting for you on campus',
      lead: 'Constant progression, a living community, and challenges for every playstyle.',
      items: {
        academies: {
          title: 'Academies & classes',
          body: 'Choose your class and visit its dedicated academy to learn new skills and keep progressing.',
        },
        mentors: {
          title: 'Teachers & students',
          body: 'A mentorship system that connects players: learn from veterans or guide those just starting out.',
        },
        party: {
          title: 'Parties of up to 5',
          body: 'Take on PvE challenges and battle arenas solo, or form a party of up to five adventurers.',
        },
        events: {
          title: 'Events all year',
          body: 'A calendar of daily, weekly, monthly, seasonal, and annual events so there is always a next challenge.',
        },
        pvp: {
          title: 'PvP & rankings',
          body: 'Put your progress to the test in PvP events, follow the rankings, and strive to stand out.',
        },
        guilds: {
          title: 'Guilds & friends',
          body: 'Add friends, join a guild, pursue achievements, and share every step of your journey.',
        },
      },
    },
    classes: {
      eyebrow: 'Classes',
      title: 'Choose your class',
      lead: 'Eight paths, each with its own combat style. Every class can be played as a female or male character.',
      pickerLabel: 'Available classes',
      genderLabel: 'Character',
      gender: { f: 'Female', m: 'Male' },
      damage: { physical: 'Physical damage', magical: 'Magic damage' },
      range: { melee: 'Melee', ranged: 'Ranged', hybrid: 'Melee and ranged' },
      damageLabel: 'Damage type',
      rangeLabel: 'Range',
      roleLabel: 'Role',
      traitsTitle: 'Strengths',
      artAlt: (name, gender) => `${name}, ${gender.toLowerCase()} version`,
      items: {
        fighter: {
          name: 'Artist Fighter',
          role: 'Combos',
          damage: 'physical',
          range: 'melee',
          summary:
            'A specialist in chained physical melee attacks. Depending on the skill used, it mixes its strikes with raw damage.',
          traits: ['Chained melee attacks', 'Combos with raw damage', 'Constant pressure on the target'],
        },
        engineer: {
          name: 'Engineer Soldier',
          role: 'Tank',
          damage: 'physical',
          range: 'melee',
          summary:
            'The frontline tank: holds the line in melee and hits back with raw damage. It can use an enemy to stun other foes.',
          traits: ['Sturdy frontliner', 'Raw damage', 'Uses enemies to stun others'],
        },
        medic: {
          name: 'Happiness Doctor',
          role: 'Support',
          damage: 'magical',
          range: 'ranged',
          summary:
            'A ranged support with plenty of healing and the power to revive allies. On offense, its main skill deals massive single-target damage.',
          traits: ['Plenty of healing', 'Revives allies', 'Massive single-target damage'],
        },
        musician: {
          name: 'Spirit Musician',
          role: 'Crowd control',
          damage: 'magical',
          range: 'ranged',
          summary:
            'A ranged crowd-control master: paralyzes several enemies at once, empowers allies, and weakens foes.',
          traits: ['Paralyzes several enemies at once', 'Buffs allies', 'Weakens enemies'],
        },
        hunter: {
          name: 'Sun Hunter',
          role: 'Pet',
          damage: 'physical',
          range: 'hybrid',
          summary:
            'Fights in melee and at range alongside a pet, focused on supporting it while still packing several massive-damage skills.',
          traits: ['Heals and revives the pet', 'Buffs itself and the pet', 'Massive-damage skills'],
        },
        gunner: {
          name: 'Magic Gunner',
          role: 'Damage',
          damage: 'magical',
          range: 'ranged',
          summary:
            'Raw ranged magic damage with single-target or area skills. Low resistance, but the damage makes up for it.',
          traits: ['Single-target or area', 'Raw damage', 'Low resistance, high damage'],
        },
        lancer: {
          name: 'Boreal Lancer',
          role: 'Agility',
          damage: 'physical',
          range: 'melee',
          summary:
            'An agile raw-damage class with chained attacks and plenty of counterattacks. It easily dodges many skills and, if the enemy is feeling cold, can even dodge magic.',
          traits: ['Dodges and counterattacks', 'Dodges magic from chilled enemies', 'Freezes groups of enemies'],
        },
        soulmage: {
          name: 'Soul Mage',
          role: 'Debuffs',
          damage: 'magical',
          summary:
            'Raw magic damage with combos and debuffs. It harnesses the souls of the fallen on the battlefield to gain the upper hand.',
          traits: ['Raw-damage combos', 'Applies debuffs', 'Harnesses the souls of the fallen'],
        },
      },
    },
    events: {
      eyebrow: 'Arcane calendar',
      title: 'There is always something happening',
      lead: 'The Arcane Campus calendar offers opportunities throughout the year to jump into the adventure, meet other players, and keep progressing.',
      cadence: [
        { name: 'Daily', body: 'Quick activities to move forward a little every day.' },
        { name: 'Weekly', body: 'Bigger challenges to tackle with your party.' },
        { name: 'Monthly', body: 'Long-term goals and special rewards.' },
        { name: 'Seasonal', body: 'Themed events that change with the seasons.' },
        { name: 'Annual', body: 'The great celebrations of the campus.' },
      ],
    },
    platforms: {
      eyebrow: 'Platforms',
      title: 'Light as a well-cast spell',
      lead: 'Runs on Windows, macOS, and Linux with modest requirements and cross-platform multiplayer.',
      tabsLabel: 'Requirements by system',
      tabs: {
        windows: { name: 'Windows', reqs: reqWin(false) },
        macos: { name: 'macOS', reqs: reqMac(false) },
        linux: { name: 'Linux', reqs: reqLinux(false) },
      },
      minimum: 'Minimum requirements',
      langsTitle: 'Languages',
      langs: [
        { name: 'English', detail: 'Interface and subtitles' },
        { name: 'Portuguese (Brazil)', detail: 'Interface and subtitles' },
      ],
      featuresTitle: 'Steam features',
      steamFeatures: [
        'MMO',
        'Online PvP',
        'Online Co-op',
        'Cross-Platform Multiplayer',
        'Steam Achievements',
        'Steam Cloud',
        'Family Sharing',
      ],
      priceTitle: 'Price',
      price: 'Free',
      priceNote: 'Free to Play on Steam: download and play without paying anything.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Before you enter the campus',
      items: [
        {
          q: 'How much does Arcane Campus cost?',
          a: 'Nothing. Arcane Campus is Free to Play and will be available for free on Steam.',
        },
        {
          q: 'When does the game release?',
          a: 'The release is listed as “Coming soon” on Steam. Add it to your wishlist to be notified as soon as it launches.',
        },
        {
          q: 'Can I play solo?',
          a: 'Yes. You can adventure on your own or form parties of up to five players for PvE challenges, arenas, and events.',
        },
        {
          q: 'Which systems can I play on?',
          a: 'Windows 10 (64-bit), macOS 12 Monterey, and Ubuntu 22.04 LTS (64-bit), with cross-platform multiplayer. An internet connection is required.',
        },
        {
          q: 'Does the game have anti-cheat?',
          a: 'Yes. Arcane Campus uses kernel-level anti-cheat and VAC. Boot protection requires Secure Boot and TPM 2.0 to be enabled.',
        },
        {
          q: 'Which languages are supported?',
          a: 'Interface and subtitles are available in English and Brazilian Portuguese.',
        },
      ],
    },
    cta: {
      title: 'Your journey starts here',
      lead: 'Add Arcane Campus to your Steam wishlist and get notified on launch day.',
      primary: 'Add to Wishlist',
      secondary: 'Steam Community',
      imageAlt: 'Arcane Campus banner with the game heroes in front of the academy castle',
    },
    footer: {
      tagline: 'Learn. Grow. Find your people.',
      developer: 'Developed and published by Szolun',
      links: 'Links',
      store: 'Steam store page',
      community: 'Community hub',
      disclosure:
        'Steam AI disclosure: some visual assets, including character illustrations and interface elements used in character creation and selection screens, were made with generative AI tools.',
      rights: 'Arcane Campus © Szolun. All rights reserved.',
      fanNote: 'Steam and the Steam logo are trademarks of Valve Corporation.',
    },
  },
}
