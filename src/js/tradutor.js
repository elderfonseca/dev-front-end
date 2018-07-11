let DEFAULT_LANG = 'pt-br';
let ALERT_TRANSLATION_INCOMPLETE = document.querySelector('#translatoin-incomplete');
let ALERT_TRANSLATION_UNAVAILABLE = document.querySelector('#translatoin-unavailable');
let DATA_LANG_ELEMENTS = document.querySelectorAll('[data-lang-str]');
let TRANSLATIONS = {
  'pt-br': {
    'Sobre': 'SOBRE',
    'Serviços': 'SERVIÇOS',
    'Portfólio': 'PORTFÓLIOS',
    'Premios': 'PRÊMIOS',
    'Clientes': 'CLIENTES',
    'Contato': 'CONTATO',
    'Texto topo': 'UNT ILLESTO RIBUS\nCONSEQUIAM FACCUS\nREPUDISQUIS ALITI\nUT ALIANTO DOLUPTAS',
    'Sobre1': 'ET ESSI REREPERA VOLES\nUT FACEPTU RENDIT QUIDENDIT\nETUM VEL MODIANT',
    'Sobre2': 'Ex estore conse plabo. Et essi rerepera voles ut faceptu rendit quidendit etum vel modiant et pro occullaccum ditiatum cum nobiscipsus, ut que voluptae. Itatur reiciis erit pe mo estis nonestrum et litectotame pro magnihi ciumquas net des ut exerum qui quos et erum, sam quam volesendi doluptatur a venis et harcidus molor repe voluptatatem destio. Parcipi cipiciistiis utem a cuptatemquid magname landus ad que maio dolupta quiasitatur abor aut eat.Aqui utati iliquae mos delit, autenim iligeni ssitatio maiosae nus excepe vent. Epudae nonsectoris culpa site natioriossi quo velitias volorum simi',
    'Sobre3': 'SOBRE',
    'Contatos': 'CONTATOS',
    'Endereço Brasilia': 'SAUS, Quadra 5  |  Bloco N  |  Lote 2  |  10.º andar\nTel.: +55 (61) 3208-1155',
    'Endereço São Paulo': 'Rua Estados Unidos 367, Jardim Paulista\nTel.: +55 (61) 3208-1155'
  },
  'en': {
    'Sobre': 'ABOUT',
    'Serviços': 'SERVICES',
    'Portfólio': 'PORTFOLIOS',
    'Premios': 'AWARDS',
    'Clientes': 'CUSTOMERS',
    'Contato': 'CONTACT',
    'Texto topo': 'THE EUROPEAN LAN\nGUAGES ARE MEMBERS\nOF THE SAME FAMILY\nTHEIR SEPARATE.',
    'Sobre1': 'FAR FAR AWAY, BEHIND\nTHE WORD MOUNTAINS, FAR FROM\nTHE COUNTRIES V',
    'Sobre2': 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surfa',
    'Sobre3': 'ABOUT',
    'Contatos': 'CONTACT',
    'Endereço Brasilia': 'SAUS, Section 5  |  Block N  |  Lot 2  |  10th floor\nPhone: +55 (61) 3208-1155',
    'Endereço São Paulo': 'Estados Unidos Street 367, Jardim Paulista\nPhone: +55 (61) 3208-1155'
  },
};


const translate = (lang = null) => {
  if (lang === null) {
    lang = DEFAULT_LANG;
  }
  let DEFAULT_LANG_LENGTH = Object.keys(TRANSLATIONS[DEFAULT_LANG]).length;
  // Verifica se o idioma selecionado existe.
  if (TRANSLATIONS[lang]) {
    // Existe... Agora verifica se a tradução selecionada está completa
    // Se não estiver exibe a mensagem.
    ALERT_TRANSLATION_UNAVAILABLE.style.display = 'none';
    let LANG_LENGTH = Object.keys(TRANSLATIONS[lang]).length;
    if (LANG_LENGTH < DEFAULT_LANG_LENGTH) {
      ALERT_TRANSLATION_INCOMPLETE.style.display = 'block';
    } else {
      ALERT_TRANSLATION_INCOMPLETE.style.display = 'none';
    }
    DATA_LANG_ELEMENTS.forEach((el) => {
      let STR = el.getAttribute('data-lang-str');
      if (TRANSLATIONS[lang][STR]) {
        el.innerText = (TRANSLATIONS[lang][STR]);
      }
    });
  } else {
    // Não existe, então exibe a mensagem
    ALERT_TRANSLATION_INCOMPLETE.style.display = 'none';
    ALERT_TRANSLATION_UNAVAILABLE.style.display = 'block';
  }
}

let BTNS_TRANSLATE = document.querySelectorAll('[name=btn-translate]');
BTNS_TRANSLATE.forEach((btn) => {
  btn.addEventListener('click', (ev) => {
    translate(btn.getAttribute('data-lang'));
  });
});

translate();