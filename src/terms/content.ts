import type { LegalDocs } from '../legal/types'
import { DISCORD_URL } from '../privacy/content'

// Section ids are the same in both languages so links like /terms/#refunds work in either.
// The refund rules mirror the server's recharge rules (RechargeRules: RefundDays and HoldDays, 7 days by default).
export const terms: LegalDocs = {
  pt: {
    meta: {
      title: 'Termos de Serviço — Arcane Campus',
      description: 'Regras de uso, conduta, compras e reembolsos do Arcane Campus.',
    },
    home: 'Voltar ao site',
    eyebrow: 'Arcane Campus',
    title: 'Termos de Serviço',
    updated: 'Última atualização: 23 de novembro de 2026',
    tocLabel: 'Nesta página',
    intro: [
      'Estes termos valem para o uso do Arcane Campus no computador (Steam) e no celular (Android), incluindo o jogo, os servidores, o fórum da comunidade e as compras feitas dentro do jogo. O Arcane Campus é desenvolvido e publicado pela Szolun.',
      'Ao entrar no jogo, você concorda com estes termos e com a Política de Privacidade (https://arcanecampus.com/privacy/). Se não concordar, não use o jogo.',
    ],
    sections: [
      {
        id: 'eligibility',
        title: 'Quem pode jogar',
        blocks: [
          'O jogo é destinado a pessoas com 13 anos ou mais. Menores de 18 anos devem jogar com o conhecimento e a autorização dos pais ou responsáveis, que também respondem pelas compras feitas por eles.',
        ],
      },
      {
        id: 'account',
        title: 'Sua conta',
        blocks: [
          {
            list: [
              'A conta é criada pelo login da Steam ou do Google e é pessoal. Você responde por tudo o que acontece nela.',
              'Não é permitido vender, comprar, alugar, emprestar ou compartilhar contas ou personagens.',
              'Contas da Steam e do Google vinculadas pelo QR Code passam a ser uma conta só, para progresso, compras e regras.',
              'Proteja o acesso à sua conta da Steam e do Google. A equipe nunca pede senhas.',
            ],
          },
        ],
      },
      {
        id: 'service',
        title: 'Disponibilidade e fases de teste',
        blocks: [
          'O jogo é um serviço online em desenvolvimento contínuo. Conteúdos, valores, regras e eventos podem ser alterados para manter o equilíbrio e corrigir erros. Os servidores podem ficar fora do ar para manutenção ou por falhas.',
          'Em fases de teste (Playtest), progresso, itens e moedas podem ser reiniciados ao fim do teste. Avisaremos com antecedência nos canais oficiais.',
        ],
      },
      {
        id: 'conduct',
        title: 'Regras de conduta',
        blocks: [
          'Não é permitido:',
          {
            list: [
              'usar trapaças, programas de terceiros, bots, macros ou automações fora da batalha automática do próprio jogo;',
              'explorar falhas do jogo em vez de reportá-las, ou modificar o cliente e o tráfego com o servidor;',
              'vender ou comprar ouro, itens, personagens ou serviços do jogo por dinheiro real ou fora do jogo;',
              'aplicar golpes em outros jogadores, inclusive em trocas, correio e leilão;',
              'assediar, ameaçar, discriminar ou ofender jogadores, ou publicar conteúdo ilegal, sexual ou de ódio;',
              'usar nomes de personagem ou de guilda ofensivos, ou se passar pela equipe do jogo;',
              'fazer spam ou divulgar outros jogos e serviços no chat e no fórum;',
              'pedir estornos de má-fé ou usar meios de pagamento de terceiros sem autorização.',
            ],
          },
        ],
      },
      {
        id: 'enforcement',
        title: 'Punições',
        blocks: [
          'Conforme a gravidade e a repetição, a equipe pode aplicar advertência, silenciamento do chat, troca obrigatória de nome, retirada de itens, ouro ou progresso obtidos de forma irregular, suspensão temporária ou banimento permanente da conta.',
          'Itens, moedas e compras de contas punidas por violar estes termos não são reembolsados. Se você discordar de uma punição, abra um ticket no Discord oficial para revisão.',
        ],
      },
      {
        id: 'virtual-items',
        title: 'Itens virtuais e moedas',
        blocks: [
          'Pontos de recarga, ouro, Bônus, itens, mascotes e demais conteúdos do jogo são licenças de uso dentro do jogo. Eles não são propriedade do jogador, não têm valor em dinheiro e não podem ser trocados por dinheiro real, nem pela Szolun nem entre jogadores. Podemos ajustar seus efeitos, preços e disponibilidade para manter o equilíbrio do jogo.',
        ],
      },
      {
        id: 'purchases',
        title: 'Compras',
        blocks: [
          {
            list: [
              'As compras são feitas pela Carteira Steam no computador e pelo Google Play no Android. O pagamento é processado inteiramente pela loja, e o preço final é o mostrado por ela, na sua moeda.',
              'Os pontos comprados são entregues ao personagem que fez a compra, com o Bônus do pacote, e ficam no histórico da Recarga.',
              'Ouro trocado a partir de uma compra fica em quarentena por 7 dias: você pode gastá-lo normalmente, mas não pode transferi-lo a outros jogadores (por troca, correio ou leilão) nesse período. Os itens de recompensa dessa troca chegam vinculados ao personagem.',
            ],
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Reembolsos e estornos',
        blocks: [
          'Reembolso pelo jogo. Você pode pedir o reembolso de uma compra em até 7 dias depois dela, direto no histórico da Recarga ("Solicitar reembolso"), desde que tudo o que a compra deu ainda esteja com você: os pontos, ou o ouro, o Bônus e os itens recebidos na troca desses pontos. O valor volta pelo mesmo meio de pagamento, pela loja. Esse prazo atende ao direito de arrependimento do Código de Defesa do Consumidor.',
          'Reembolso pela loja. A Steam e o Google Play também podem reembolsar compras segundo as políticas deles.',
          'O que acontece quando uma compra é reembolsada pela loja ou estornada no cartão. A compra é desfeita como se não tivesse existido:',
          {
            list: [
              'os pontos ainda não trocados são retirados;',
              'o ouro que veio dessa compra é retirado e, se já foi gasto, os gastos são desfeitos quando possível (por exemplo, a melhoria comprada volta ao estado anterior);',
              'o Bônus e os itens recebidos na troca são retirados; itens já usados aparecem como "faltantes" no histórico;',
              'o que não puder ser recuperado é cobrado de outro ouro do personagem e, se ainda faltar, vira uma dívida de ouro.',
            ],
          },
          'Dívida de ouro. Enquanto houver dívida, o personagem não pode fazer trocas, enviar ou receber correspondências com ouro ou itens, nem usar o leilão. A dívida só é paga com uma nova recarga.',
          'Presentes recebidos de quem estornou. Se o comprador passou ouro ou itens para outros personagens entre a compra e o estorno, a dívida pode ser transferida para eles até o valor recebido sem contrapartida: automaticamente quando é a mesma conta ou quando há evidência forte de que é a mesma pessoa, e após análise da equipe nos demais casos. Se acha que houve engano, abra um ticket no Discord.',
          'Bloqueio de compras. Depois de um segundo reembolso pela loja ou estorno, novas compras ficam bloqueadas até a liberação pela equipe. Reembolsos feitos pelo próprio jogo não contam para esse bloqueio. Estornos de má-fé podem levar à suspensão da conta.',
        ],
      },
      {
        id: 'account-deletion',
        title: 'Exclusão da conta',
        blocks: [
          'Você pode pedir a exclusão da conta a qualquer momento, como descrito na Política de Privacidade (https://arcanecampus.com/privacy/#rights). Itens, ouro e pontos de uma conta excluída são perdidos e não são reembolsados. Podemos encerrar contas que violem estes termos.',
        ],
      },
      {
        id: 'content',
        title: 'Propriedade intelectual e conteúdo dos jogadores',
        blocks: [
          'O jogo, sua arte, música, textos e marcas pertencem à Szolun ou a seus licenciantes. Você recebe uma licença pessoal, não exclusiva e revogável para jogar, sem direito de copiar, modificar, revender ou explorar o jogo comercialmente.',
          'O que você publica no chat e no fórum continua sendo seu, mas você nos autoriza a exibir esse conteúdo no jogo e a removê-lo quando violar estas regras.',
        ],
      },
      {
        id: 'liability',
        title: 'Responsabilidade',
        blocks: [
          'Trabalhamos para manter o jogo estável e seguro, mas ele é oferecido no estado em que se encontra, e não garantimos que funcionará sem interrupções ou erros. Nada nestes termos limita os direitos que o Código de Defesa do Consumidor garante a você.',
        ],
      },
      {
        id: 'changes',
        title: 'Alterações nestes termos',
        blocks: [
          'Podemos atualizar estes termos quando o jogo mudar. A data no topo indica a versão atual. Mudanças importantes serão avisadas no jogo ou nos canais oficiais, e continuar jogando depois delas significa concordar com a nova versão.',
        ],
      },
      {
        id: 'law',
        title: 'Lei aplicável',
        blocks: [
          'Estes termos seguem as leis do Brasil. Como consumidor, você pode propor ações no foro do seu domicílio.',
        ],
      },
      {
        id: 'contact',
        title: 'Contato',
        blocks: [`Para suporte, reembolsos, contestação de punições ou dúvidas sobre estes termos, abra um ticket no Discord oficial do Arcane Campus: ${DISCORD_URL}`],
      },
    ],
  },
  en: {
    meta: {
      title: 'Terms of Service — Arcane Campus',
      description: 'Rules for using Arcane Campus: conduct, purchases and refunds.',
    },
    home: 'Back to the site',
    eyebrow: 'Arcane Campus',
    title: 'Terms of Service',
    updated: 'Last updated: November 23, 2026',
    tocLabel: 'On this page',
    intro: [
      'These terms apply to your use of Arcane Campus on PC (Steam) and mobile (Android), including the game, its servers, the community forum and purchases made inside the game. Arcane Campus is developed and published by Szolun.',
      'By signing in to the game, you agree to these terms and to the Privacy Policy (https://arcanecampus.com/privacy/). If you do not agree, do not use the game.',
    ],
    sections: [
      {
        id: 'eligibility',
        title: 'Who can play',
        blocks: [
          'The game is intended for people aged 13 or older. Players under 18 should play with the knowledge and permission of their parents or guardians, who are also responsible for their purchases.',
        ],
      },
      {
        id: 'account',
        title: 'Your account',
        blocks: [
          {
            list: [
              'Your account is created by signing in with Steam or Google and is personal. You are responsible for everything that happens on it.',
              'Selling, buying, renting, lending or sharing accounts or characters is not allowed.',
              'Steam and Google accounts linked with the QR code become a single account for progress, purchases and rules.',
              'Protect access to your Steam and Google accounts. Staff will never ask for passwords.',
            ],
          },
        ],
      },
      {
        id: 'service',
        title: 'Availability and test phases',
        blocks: [
          'The game is an online service in continuous development. Content, values, rules and events may change to keep the game balanced and fix errors. Servers may be offline for maintenance or because of failures.',
          'During test phases (Playtest), progress, items and currencies may be reset when the test ends. We will announce it in advance on the official channels.',
        ],
      },
      {
        id: 'conduct',
        title: 'Code of conduct',
        blocks: [
          'You may not:',
          {
            list: [
              'use cheats, third-party programs, bots, macros or automation other than the game’s own auto battle;',
              'exploit bugs instead of reporting them, or modify the client or its traffic with the server;',
              'sell or buy gold, items, characters or game services for real money or outside the game;',
              'scam other players, including in trades, mail and the auction;',
              'harass, threaten, discriminate against or insult players, or post illegal, sexual or hateful content;',
              'use offensive character or guild names, or impersonate the game’s staff;',
              'spam or advertise other games and services in chat and on the forum;',
              'file bad-faith chargebacks or use someone else’s payment method without permission.',
            ],
          },
        ],
      },
      {
        id: 'enforcement',
        title: 'Penalties',
        blocks: [
          'Depending on severity and repetition, staff may issue a warning, mute chat, require a name change, remove items, gold or progress obtained irregularly, suspend the account temporarily or ban it permanently.',
          'Items, currencies and purchases of accounts penalized for breaking these terms are not refunded. If you disagree with a penalty, open a ticket on the official Discord for review.',
        ],
      },
      {
        id: 'virtual-items',
        title: 'Virtual items and currencies',
        blocks: [
          'Recharge points, gold, Bônus, items, pets and other game content are licenses to use inside the game. They are not the player’s property, have no cash value and cannot be exchanged for real money, either with Szolun or between players. We may adjust their effects, prices and availability to keep the game balanced.',
        ],
      },
      {
        id: 'purchases',
        title: 'Purchases',
        blocks: [
          {
            list: [
              'Purchases are made through the Steam Wallet on PC and Google Play on Android. Payment is processed entirely by the store, and the final price is the one it shows, in your currency.',
              'Purchased points go to the character that made the purchase, with the package Bônus, and appear in the Recharge history.',
              'Gold exchanged from a purchase is on hold for 7 days: you can spend it normally, but you cannot transfer it to other players (by trade, mail or auction) during that time. The reward items of that exchange arrive bound to the character.',
            ],
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Refunds and chargebacks',
        blocks: [
          'Refund from the game. You can request a refund of a purchase within 7 days of it, directly in the Recharge history ("Request refund"), as long as everything the purchase gave is still with you: the points, or the gold, Bônus and items received when exchanging them. The money goes back through the same payment method, through the store. This period meets the right of withdrawal of the Brazilian Consumer Protection Code.',
          'Refund from the store. Steam and Google Play may also refund purchases under their own policies.',
          'What happens when a purchase is refunded by the store or charged back on the card. The purchase is undone as if it never happened:',
          {
            list: [
              'points not yet exchanged are removed;',
              'gold that came from that purchase is removed and, if it was already spent, the spending is undone where possible (for example, a bought upgrade returns to its previous state);',
              'the Bônus and items received in the exchange are removed; items already used are listed as "missing" in the history;',
              'whatever cannot be recovered is taken from the character’s other gold and, if something is still missing, it becomes a gold debt.',
            ],
          },
          'Gold debt. While there is a debt, the character cannot trade, send or receive mail with gold or items, or use the auction. The debt is paid only by a new recharge.',
          'Gifts received from the refunding player. If the buyer passed gold or items to other characters between the purchase and the chargeback, the debt may move to them, up to what they received for nothing: automatically when it is the same account or when there is strong evidence that it is the same person, and after staff review in other cases. If you think it is a mistake, open a ticket on Discord.',
          'Purchase block. After a second store refund or chargeback, new purchases are blocked until staff allow them again. Refunds made from the game itself do not count toward this block. Bad-faith chargebacks may lead to account suspension.',
        ],
      },
      {
        id: 'account-deletion',
        title: 'Account deletion',
        blocks: [
          'You can ask for your account to be deleted at any time, as described in the Privacy Policy (https://arcanecampus.com/privacy/#rights). Items, gold and points of a deleted account are lost and are not refunded. We may close accounts that break these terms.',
        ],
      },
      {
        id: 'content',
        title: 'Intellectual property and player content',
        blocks: [
          'The game, its art, music, texts and trademarks belong to Szolun or its licensors. You receive a personal, non-exclusive and revocable license to play, without the right to copy, modify, resell or commercially exploit the game.',
          'What you post in chat and on the forum remains yours, but you allow us to display it in the game and to remove it when it breaks these rules.',
        ],
      },
      {
        id: 'liability',
        title: 'Liability',
        blocks: [
          'We work to keep the game stable and secure, but it is provided as is, and we do not guarantee that it will run without interruptions or errors. Nothing in these terms limits the rights the Brazilian Consumer Protection Code gives you.',
        ],
      },
      {
        id: 'changes',
        title: 'Changes to these terms',
        blocks: [
          'We may update these terms when the game changes. The date at the top shows the current version. Important changes will be announced in the game or on the official channels, and continuing to play after them means you agree to the new version.',
        ],
      },
      {
        id: 'law',
        title: 'Governing law',
        blocks: ['These terms are governed by the laws of Brazil. As a consumer, you may bring claims in the courts of your place of residence.'],
      },
      {
        id: 'contact',
        title: 'Contact',
        blocks: [`For support, refunds, penalty appeals or questions about these terms, open a ticket on the official Arcane Campus Discord: ${DISCORD_URL}`],
      },
    ],
  },
}
