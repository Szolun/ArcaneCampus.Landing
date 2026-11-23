import type { LegalDocs } from '../legal/types'

// Section ids are the same in both languages so links like /privacy/#rights work in either.
// Keep this text in sync with what the game really collects (server, client and admin panel).
export const DISCORD_URL = 'https://discord.gg/7BjBGyfJ3'

export const privacy: LegalDocs = {
  pt: {
    meta: {
      title: 'Política de Privacidade — Arcane Campus',
      description: 'Como o Arcane Campus coleta, usa, guarda e protege os dados dos jogadores.',
    },
    home: 'Voltar ao site',
    eyebrow: 'Arcane Campus',
    title: 'Política de Privacidade',
    updated: 'Última atualização: 23 de novembro de 2026',
    tocLabel: 'Nesta página',
    intro: [
      'Esta política explica quais dados o Arcane Campus coleta quando você joga no computador (Steam) ou no celular (Android), por que esses dados são usados, com quem são compartilhados, por quanto tempo ficam guardados e como você pode exercer seus direitos.',
      'O Arcane Campus é desenvolvido e publicado pela Szolun, responsável (controladora) pelos dados tratados no jogo e neste site. Seguimos a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018) e as regras das lojas em que o jogo é distribuído.',
      'Resumo: não pedimos seu e-mail, não exibimos anúncios, não usamos ferramentas de análise ou rastreamento de terceiros e não vendemos dados de jogadores.',
    ],
    sections: [
      {
        id: 'data-collected',
        title: 'Dados que coletamos',
        blocks: [
          'Conta e login. O jogo não tem cadastro com e-mail ou senha. Você entra com uma conta de plataforma, e guardamos apenas o identificador que ela fornece:',
          {
            list: [
              'Steam: o seu SteamID. A Steam também nos confirma que você possui o jogo e se a conta tem bloqueios da Valve.',
              'Google (Android): apenas o identificador da conta Google (“sub”). Não recebemos nem guardamos seu nome, e-mail ou foto do Google.',
              'Também guardamos as datas de criação da conta, do último acesso e das sessões, a plataforma usada (por exemplo, Windows ou Android) e os vínculos entre contas que você cria pelo QR Code.',
            ],
          },
          'Personagens e progresso. Nome, classe e aparência dos personagens, mundo escolhido, nível, itens, mascotes, missões, ouro e moedas do jogo, conquistas, guilda, lista de amigos, bloqueados e inimigos, correspondências, trocas, leilões e o histórico de ações dentro do jogo (por exemplo, itens recebidos e gastos), usado para suporte e para corrigir erros.',
          'Comunicação entre jogadores.',
          {
            list: [
              'Mensagens de chat, inclusive as privadas, passam pelo servidor só para serem entregues e ficam na memória por no máximo 10 minutos. Elas não são gravadas em disco.',
              'Publicações no fórum da comunidade dentro do jogo (tópicos, respostas, votos e denúncias) ficam guardadas com o nome do personagem que publicou.',
              'Silenciamentos e punições de chat ficam registrados com o motivo e a duração.',
              'O chat de voz da equipe (disponível no Windows) é retransmitido aos colegas em tempo real e nunca é gravado. O microfone só é usado quando você liga o chat de voz.',
            ],
          },
          'Compras. Quando você compra pontos de recarga, guardamos o pedido: pacote, pontos, bônus, valor, moeda, loja (Steam ou Google Play), data, situação e o identificador da transação na loja. O pagamento é feito inteiramente pela loja; nunca recebemos dados de cartão, conta bancária ou outro meio de pagamento.',
          'Dados técnicos.',
          {
            list: [
              'O endereço IP da sua conexão é usado no momento do acesso para entregar as respostas e limitar abusos (como tentativas excessivas de login). Ele não é gravado.',
              'Para prevenir fraude em reembolsos e estornos, podemos guardar um código derivado do endereço de rede usado ao escolher o personagem. É um código criptográfico de mão única: não permite recuperar o endereço.',
              'O nome do sistema operacional é enviado para identificar a sessão. Não coletamos identificadores de publicidade, número do aparelho, contatos, localização ou fotos.',
            ],
          },
          'Permissões no Android. Internet e estado da rede, para jogar online. Câmera, apenas quando você escolhe ler um QR Code para vincular contas; a imagem é lida no aparelho e não é enviada nem guardada.',
          'Dados guardados no seu aparelho. Configurações de vídeo, áudio, idioma e interface, preferências de chat e de voz e o conteúdo baixado do jogo. A sessão de login fica só na memória enquanto o jogo está aberto.',
        ],
      },
      {
        id: 'use',
        title: 'Como usamos os dados',
        blocks: [
          {
            list: [
              'Criar e manter sua conta, autenticar o login e guardar seu progresso.',
              'Fazer o jogo online funcionar: chat, grupos, guildas, trocas, correio, leilão, rankings, eventos e batalhas.',
              'Processar compras, entregar os pontos comprados, tratar reembolsos e estornos e prevenir fraude.',
              'Manter a segurança e as regras do jogo: detectar trapaças, abusos e contas usadas de má-fé e aplicar punições.',
              'Prestar suporte e corrigir erros a partir do histórico de ações do personagem.',
            ],
          },
          'Não usamos seus dados para publicidade, não criamos perfis de comportamento para terceiros e não vendemos dados.',
        ],
      },
      {
        id: 'legal-bases',
        title: 'Bases legais (LGPD)',
        blocks: [
          {
            list: [
              'Execução de contrato: a conta, o progresso, os recursos online e as compras são necessários para oferecer o jogo que você escolheu usar.',
              'Legítimo interesse: segurança, prevenção de fraude e de trapaças, moderação e suporte, sempre limitados ao necessário.',
              'Cumprimento de obrigação legal: registros de compras exigidos pelas leis fiscais e de defesa do consumidor.',
              'Consentimento: uso do microfone e da câmera, que só acontece quando você liga o chat de voz ou lê um QR Code, e que pode ser revogado nas permissões do aparelho.',
            ],
          },
        ],
      },
      {
        id: 'sharing',
        title: 'Com quem compartilhamos',
        blocks: [
          'Compartilhamos dados apenas com os serviços necessários para o jogo funcionar:',
          {
            list: [
              'Valve (Steam): login, verificação de posse do jogo, conquistas, compras, reembolsos e relatórios de estorno.',
              'Google: login com conta Google no Android e, quando disponível, compras e reembolsos pelo Google Play.',
              'Cloudflare: rede e proteção que recebem as conexões ao servidor, distribuição do conteúdo do jogo e armazenamento de cópias de segurança.',
              'Provedor de hospedagem: servidores privados onde o jogo e o banco de dados funcionam.',
            ],
          },
          'Outros jogadores veem o que o jogo mostra publicamente, como nome do personagem, classe, nível, guilda, rankings, mensagens enviadas no chat e publicações no fórum. A equipe de moderação acessa os dados de jogo necessários para suporte e aplicação das regras, com registro de cada alteração feita.',
          'Também podemos compartilhar dados quando exigido por lei ou ordem de autoridade competente.',
        ],
      },
      {
        id: 'transfers',
        title: 'Transferência internacional',
        blocks: [
          'Valve, Google e Cloudflare podem tratar dados em servidores fora do Brasil, principalmente nos Estados Unidos. Essas empresas adotam cláusulas e garantias de proteção de dados compatíveis com a LGPD.',
        ],
      },
      {
        id: 'retention',
        title: 'Por quanto tempo guardamos',
        blocks: [
          {
            list: [
              'Conta, personagens e progresso: enquanto a conta existir.',
              'Personagem excluído: pode ser restaurado por 7 dias e depois é apagado.',
              'Histórico de ações do personagem: até 180 dias.',
              'Mensagens de chat: no máximo 10 minutos, só na memória do servidor.',
              'Código de rede para prevenção de fraude: até 150 dias.',
              'Registros de compras: pelo prazo exigido pelas leis fiscais e de defesa do consumidor, mesmo após a exclusão da conta.',
              'Cópias de segurança: substituídas diariamente e apagadas após 30 dias.',
            ],
          },
        ],
      },
      {
        id: 'rights',
        title: 'Seus direitos e exclusão da conta',
        blocks: [
          'Pela LGPD, você pode pedir a qualquer momento:',
          {
            list: [
              'confirmação de que tratamos seus dados e acesso a eles;',
              'correção de dados incompletos ou desatualizados;',
              'portabilidade dos seus dados;',
              'exclusão da conta e dos dados associados;',
              'informações sobre com quem compartilhamos seus dados;',
              'revogação do consentimento e revisão de decisões automatizadas.',
            ],
          },
          'Para excluir sua conta, abra um ticket no Discord oficial do Arcane Campus informando o nome de um personagem e a plataforma usada (Steam ou Google). Para proteger a conta, vamos pedir uma forma de confirmar que ela é sua antes de excluir. A conta, os personagens e os dados associados são apagados em até 30 dias, exceto os registros que a lei nos obriga a manter. As cópias de segurança expiram sozinhas em até 30 dias depois disso.',
          'Itens, ouro e pontos de uma conta excluída não podem ser recuperados nem reembolsados.',
          'Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).',
        ],
      },
      {
        id: 'security',
        title: 'Segurança',
        blocks: [
          'As conexões com o servidor usam HTTPS. Os servidores não ficam expostos diretamente à internet. As sessões de login são assinadas e guardadas só como código criptográfico. As cópias de segurança ficam em armazenamento privado. O acesso da equipe é restrito e registrado.',
          'Nenhum sistema é totalmente imune a falhas. Se ocorrer um incidente de segurança que possa causar risco relevante, avisaremos os jogadores afetados e a ANPD, como prevê a lei.',
        ],
      },
      {
        id: 'children',
        title: 'Crianças e adolescentes',
        blocks: [
          'O Arcane Campus não é destinado a menores de 13 anos, e não coletamos conscientemente dados de crianças. Adolescentes devem jogar com o conhecimento e a autorização dos pais ou responsáveis.',
          'Se você é responsável por uma criança que criou uma conta, fale conosco para que ela seja excluída.',
        ],
      },
      {
        id: 'website',
        title: 'Este site',
        blocks: [
          'O site arcanecampus.com não usa cookies, anúncios nem ferramentas de análise. Ele só guarda no seu navegador o idioma escolhido. A hospedagem (GitHub Pages) e as fontes (Google Fonts) recebem tecnicamente o endereço IP de quem acessa, conforme as políticas desses serviços.',
        ],
      },
      {
        id: 'changes',
        title: 'Alterações nesta política',
        blocks: [
          'Podemos atualizar esta política quando o jogo mudar. A data no topo indica a versão atual. Mudanças importantes serão avisadas no jogo ou nos canais oficiais.',
        ],
      },
      {
        id: 'contact',
        title: 'Contato',
        blocks: [
          `Para dúvidas sobre privacidade, pedidos sobre seus dados ou exclusão da conta, abra um ticket no Discord oficial do Arcane Campus: ${DISCORD_URL}`,
          'Responsável: Szolun, desenvolvedora e publicadora do Arcane Campus.',
        ],
      },
    ],
  },
  en: {
    meta: {
      title: 'Privacy Policy — Arcane Campus',
      description: 'How Arcane Campus collects, uses, stores and protects player data.',
    },
    home: 'Back to the site',
    eyebrow: 'Arcane Campus',
    title: 'Privacy Policy',
    updated: 'Last updated: November 23, 2026',
    tocLabel: 'On this page',
    intro: [
      'This policy explains what data Arcane Campus collects when you play on PC (Steam) or mobile (Android), why it is used, who it is shared with, how long it is kept and how you can exercise your rights.',
      'Arcane Campus is developed and published by Szolun, the controller of the data processed in the game and on this site. We follow the Brazilian General Data Protection Law (LGPD, Law No. 13,709/2018) and the rules of the stores where the game is distributed.',
      'In short: we do not ask for your email, we show no ads, we use no third-party analytics or tracking tools, and we do not sell player data.',
    ],
    sections: [
      {
        id: 'data-collected',
        title: 'Data we collect',
        blocks: [
          'Account and sign-in. The game has no email or password registration. You sign in with a platform account, and we keep only the identifier it provides:',
          {
            list: [
              'Steam: your SteamID. Steam also confirms that you own the game and whether the account has Valve bans.',
              'Google (Android): only the Google account identifier (“sub”). We do not receive or keep your Google name, email or photo.',
              'We also keep the dates your account was created, last used and its sessions, the platform used (for example, Windows or Android) and the links between accounts you create with the QR code.',
            ],
          },
          'Characters and progress. Character name, class and appearance, chosen world, level, items, pets, quests, gold and in-game currencies, achievements, guild, friends, blocked and enemy lists, mail, trades, auctions, and the history of in-game actions (for example, items received and spent), used for support and to fix errors.',
          'Communication between players.',
          {
            list: [
              'Chat messages, including private ones, pass through the server only to be delivered and stay in memory for at most 10 minutes. They are not written to disk.',
              'Posts in the in-game community forum (topics, replies, votes and reports) are stored with the name of the posting character.',
              'Chat mutes and penalties are recorded with their reason and duration.',
              'Team voice chat (available on Windows) is relayed to teammates in real time and never recorded. The microphone is only used when you turn voice chat on.',
            ],
          },
          'Purchases. When you buy recharge points, we keep the order: package, points, bonus, price, currency, store (Steam or Google Play), date, status and the store transaction ID. Payment is handled entirely by the store; we never receive card, bank account or other payment details.',
          'Technical data.',
          {
            list: [
              'Your connection’s IP address is used at the time of access to deliver responses and limit abuse (such as excessive sign-in attempts). It is not stored.',
              'To prevent refund and chargeback fraud, we may keep a code derived from the network address used when choosing a character. It is a one-way cryptographic code: the address cannot be recovered from it.',
              'The operating system name is sent to identify the session. We do not collect advertising IDs, device serial numbers, contacts, location or photos.',
            ],
          },
          'Android permissions. Internet and network state, to play online. Camera, only when you choose to scan a QR code to link accounts; the image is read on the device and is neither sent nor stored.',
          'Data kept on your device. Video, audio, language and interface settings, chat and voice preferences, and downloaded game content. The sign-in session stays only in memory while the game is open.',
        ],
      },
      {
        id: 'use',
        title: 'How we use data',
        blocks: [
          {
            list: [
              'To create and maintain your account, authenticate sign-in and save your progress.',
              'To run the online game: chat, parties, guilds, trades, mail, auction, rankings, events and battles.',
              'To process purchases, deliver purchased points, handle refunds and chargebacks, and prevent fraud.',
              'To keep the game secure and fair: detect cheating, abuse and bad-faith accounts, and apply penalties.',
              'To provide support and fix errors using the character’s action history.',
            ],
          },
          'We do not use your data for advertising, do not build behavioral profiles for third parties and do not sell data.',
        ],
      },
      {
        id: 'legal-bases',
        title: 'Legal bases (LGPD)',
        blocks: [
          {
            list: [
              'Performance of a contract: the account, progress, online features and purchases are needed to provide the game you chose to use.',
              'Legitimate interest: security, fraud and cheat prevention, moderation and support, always limited to what is necessary.',
              'Legal obligation: purchase records required by tax and consumer protection laws.',
              'Consent: use of the microphone and camera, which only happens when you turn on voice chat or scan a QR code, and can be revoked in the device permissions.',
            ],
          },
        ],
      },
      {
        id: 'sharing',
        title: 'Who we share data with',
        blocks: [
          'We share data only with the services needed to run the game:',
          {
            list: [
              'Valve (Steam): sign-in, game ownership check, achievements, purchases, refunds and chargeback reports.',
              'Google: Google account sign-in on Android and, when available, purchases and refunds through Google Play.',
              'Cloudflare: network and protection that receive connections to the server, game content delivery and backup storage.',
              'Hosting provider: private servers where the game and its database run.',
            ],
          },
          'Other players see what the game shows publicly, such as character name, class, level, guild, rankings, chat messages you send and forum posts. The moderation team accesses the game data needed for support and rule enforcement, and every change they make is logged.',
          'We may also share data when required by law or by an order of a competent authority.',
        ],
      },
      {
        id: 'transfers',
        title: 'International transfers',
        blocks: [
          'Valve, Google and Cloudflare may process data on servers outside Brazil, mainly in the United States. These companies adopt data protection clauses and safeguards compatible with the LGPD.',
        ],
      },
      {
        id: 'retention',
        title: 'How long we keep data',
        blocks: [
          {
            list: [
              'Account, characters and progress: while the account exists.',
              'Deleted character: can be restored for 7 days, then it is erased.',
              'Character action history: up to 180 days.',
              'Chat messages: at most 10 minutes, only in server memory.',
              'Network code for fraud prevention: up to 150 days.',
              'Purchase records: for the period required by tax and consumer protection laws, even after the account is deleted.',
              'Backups: replaced daily and deleted after 30 days.',
            ],
          },
        ],
      },
      {
        id: 'rights',
        title: 'Your rights and account deletion',
        blocks: [
          'Under the LGPD, you can ask at any time for:',
          {
            list: [
              'confirmation that we process your data and access to it;',
              'correction of incomplete or outdated data;',
              'portability of your data;',
              'deletion of your account and its associated data;',
              'information about who we share your data with;',
              'withdrawal of consent and review of automated decisions.',
            ],
          },
          'To delete your account, open a ticket on the official Arcane Campus Discord with the name of one of your characters and the platform you use (Steam or Google). To protect the account, we will ask you to confirm that it is yours before deleting it. The account, its characters and associated data are erased within 30 days, except records the law requires us to keep. Backups expire on their own within 30 days after that.',
          'Items, gold and points of a deleted account cannot be recovered or refunded.',
          'You can also file a complaint with the Brazilian Data Protection Authority (ANPD).',
        ],
      },
      {
        id: 'security',
        title: 'Security',
        blocks: [
          'Connections to the server use HTTPS. The servers are not exposed directly to the internet. Sign-in sessions are signed and stored only as cryptographic codes. Backups are kept in private storage. Staff access is restricted and logged.',
          'No system is completely immune to failures. If a security incident may cause relevant risk, we will notify the affected players and the ANPD, as the law requires.',
        ],
      },
      {
        id: 'children',
        title: 'Children and teenagers',
        blocks: [
          'Arcane Campus is not intended for children under 13, and we do not knowingly collect children’s data. Teenagers should play with the knowledge and permission of their parents or guardians.',
          'If you are the guardian of a child who created an account, contact us so it can be deleted.',
        ],
      },
      {
        id: 'website',
        title: 'This website',
        blocks: [
          'The arcanecampus.com website uses no cookies, ads or analytics tools. It only stores the chosen language in your browser. The hosting (GitHub Pages) and fonts (Google Fonts) technically receive the visitor’s IP address, under those services’ policies.',
        ],
      },
      {
        id: 'changes',
        title: 'Changes to this policy',
        blocks: [
          'We may update this policy when the game changes. The date at the top shows the current version. Important changes will be announced in the game or on the official channels.',
        ],
      },
      {
        id: 'contact',
        title: 'Contact',
        blocks: [
          `For privacy questions, requests about your data or account deletion, open a ticket on the official Arcane Campus Discord: ${DISCORD_URL}`,
          'Controller: Szolun, developer and publisher of Arcane Campus.',
        ],
      },
    ],
  },
}
