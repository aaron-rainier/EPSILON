/* ===== Données des œuvres =====
   Pour modifier un prix ou une description, éditez simplement ce tableau.
   price: montant en euros (nombre) ou null pour « Prix sur demande ». */

const OEUVRES = [
  {
    slug: 'kung-fu',
    titre: 'Kung Fu',
    annee: '1981',
    dimensions: '195 × 289 cm',
    technique: 'Aérosol sur toile libre',
    price: 45000,
    desc: "Œuvre historique des tout débuts, avant même l'invention du pochoir couleur. " +
      "Cinq combattants d'arts martiaux au trait noir nerveux, rehaussés de couleurs à l'aérosol, " +
      "dans l'esprit du cinéma de Hong Kong qui nourrissait l'imaginaire populaire du début des années 1980. " +
      "Une pièce monumentale et rare de la première période de l'artiste."
  },
  {
    slug: 'le-penseur',
    titre: 'Le Penseur',
    annee: '1982/1983',
    dimensions: '157 × 270 cm',
    technique: 'Aérosol et pochoir sur toile libre',
    price: null,
    desc: "Contemporaine de l'invention du pochoir couleur, cette grande toile met en scène un penseur " +
      "des rues — béret, lunettes noires, assis à même le sol — sur un fond all-over de volutes et de " +
      "motifs pastel. Le regard social d'Epsylon Point dans toute sa tendresse ironique."
  },
  {
    slug: 'saxo-improvisation',
    titre: 'Saxo improvisation',
    annee: 'circa 1984/85',
    dimensions: '148 × 101 cm',
    technique: 'Aérosol sur toile libre',
    price: 19500,
    desc: "Un saxophoniste saisi en plein solo, d'un seul geste, sur une nébuleuse bleu et rouge. " +
      "Toute l'énergie du jazz transposée à la bombe aérosol — la ligne noire improvise comme un phrasé " +
      "de saxophone. Une œuvre vibrante de la grande période parisienne."
  },
  {
    slug: 'la-connerie-humaine',
    titre: 'La connerie humaine',
    annee: '1989',
    dimensions: '100 × 110 cm',
    technique: 'Technique mixte et pochoir sur toile',
    price: null,
    desc: "L'une des œuvres les plus engagées de l'artiste : sur fond noir zébré de lumière, le slogan " +
      "concentrationnaire est retourné en dénonciation, au-dessus d'une foule d'enfants au pochoir blanc " +
      "et de la question d'Aragon — « Est-ce ainsi que les hommes vivent ? ». Un manifeste contre la " +
      "barbarie et la bêtise, thème central de tout son œuvre."
  },
  {
    slug: 'zambie',
    titre: 'Zambie',
    annee: '1992',
    dimensions: '55 × 73 cm',
    technique: 'Aérosol et pochoir sur toile, encadrée',
    price: 9200,
    desc: "Portrait au pochoir bleu profond d'un ancien, surgi d'un fond rose constellé de points rouges " +
      "et de trames fluo. Période turinoise : Epsylon Point y affine son art du portrait pochoir, entre " +
      "hommage et mémoire. Œuvre encadrée, prête à accrocher."
  },
  {
    slug: 'mort-mexicaine',
    titre: 'Mort Mexicaine',
    annee: '1995',
    dimensions: '180 × 80 cm',
    technique: 'Aérosol et pochoir sur toile',
    price: null,
    desc: "Grande verticale hypnotique : une calavera — squelette de la fête des Morts mexicaine — " +
      "émerge d'une écriture all-over saturée de couleur, où slogans et signes se superposent en " +
      "strates. Entre vanité contemporaine et mur urbain, une des pièces les plus denses de la " +
      "période des années 1990."
  },
  {
    slug: 'michel',
    titre: 'Michel',
    annee: '2009',
    dimensions: '210 × 307 cm',
    technique: 'Aérosol, pochoir et technique mixte sur toile libre',
    price: null,
    desc: "Portrait en pied monumental sur fond explosif jaune, rose et rouge, traversé de slogans " +
      "multilingues. La maturité de l'artiste : le personnage central au pochoir tient tête au chaos " +
      "graphique qui l'entoure. Une œuvre spectaculaire, pensée pour les grands espaces."
  }
];

const CONTACT_EMAIL = 'aaronrainier33@gmail.com';

/* ===== Rendu de la galerie ===== */

function prixHTML(price, cls) {
  if (price == null) {
    return '<span class="' + cls + ' on-request">Prix sur demande</span>';
  }
  const fmt = price.toLocaleString('fr-FR');
  return '<span class="' + cls + '">' + fmt + ' €</span>';
}

function renderGallery() {
  const root = document.getElementById('gallery');
  root.innerHTML = OEUVRES.map(function (o, i) {
    return (
      '<figure class="art-card" data-index="' + i + '" tabindex="0" role="button" ' +
      'aria-label="Voir la fiche : ' + o.titre + '">' +
      '<img src="assets/img/thumbs/' + o.slug + '.jpg" alt="' + o.titre + ' — Epsylon Point, ' + o.annee + '" loading="lazy">' +
      '<figcaption>' +
      '<div class="art-title">' + o.titre + '</div>' +
      '<div class="art-sub">' + o.annee + ' · ' + o.dimensions + '</div>' +
      '<div>' + prixHTML(o.price, 'art-price') + '</div>' +
      '</figcaption></figure>'
    );
  }).join('');
}

/* ===== Modal fiche œuvre ===== */

const modal = document.getElementById('modal');

function openModal(i) {
  const o = OEUVRES[i];
  document.getElementById('modal-img').src = 'assets/img/oeuvres/' + o.slug + '.jpg';
  document.getElementById('modal-img').alt = o.titre + ' — Epsylon Point, ' + o.annee;
  document.getElementById('modal-title').textContent = o.titre;
  document.getElementById('modal-meta').textContent =
    o.annee + ' · ' + o.dimensions + ' · ' + o.technique;
  document.getElementById('modal-price').outerHTML =
    '<p id="modal-price" class="modal-price' + (o.price == null ? ' on-request' : '') + '">' +
    (o.price == null ? 'Prix sur demande' : o.price.toLocaleString('fr-FR') + ' €') + '</p>';
  document.getElementById('modal-desc').textContent = o.desc;

  const sujet = encodeURIComponent('Demande d’acquisition — « ' + o.titre + ' » (' + o.annee + ')');
  const corps = encodeURIComponent(
    'Bonjour,\n\nJe suis intéressé(e) par l’œuvre « ' + o.titre + ' » (' +
    o.annee + ', ' + o.dimensions + ') d’Epsylon Point.\n' +
    'Merci de me recontacter pour en discuter.\n\nCordialement,'
  );
  document.getElementById('modal-cta').href =
    'mailto:' + CONTACT_EMAIL + '?subject=' + sujet + '&body=' + corps;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ===== Init ===== */

renderGallery();

document.getElementById('gallery').addEventListener('click', function (e) {
  const card = e.target.closest('.art-card');
  if (card) openModal(Number(card.dataset.index));
});

document.getElementById('gallery').addEventListener('keydown', function (e) {
  const card = e.target.closest('.art-card');
  if (card && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    openModal(Number(card.dataset.index));
  }
});

modal.addEventListener('click', function (e) {
  if (e.target.hasAttribute('data-close')) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

document.getElementById('year').textContent = new Date().getFullYear();
