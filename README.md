# Epsylon Point — Galerie en ligne

Site de vente des œuvres originales d'**Epsylon Point** (Étienne Lelong, né en 1950 à Tours),
pionnier du pochoir couleur et précurseur du street art français.

## Contenu

- `index.html` — page unique : accueil, galerie des œuvres, biographie, rubrique « Acquérir »
- `assets/css/style.css` — styles (thème sombre galerie)
- `assets/js/site.js` — **données des œuvres** (titres, années, dimensions, prix, descriptions) + galerie et fiches
- `assets/img/oeuvres/` — images des œuvres en haute définition web (max 1800 px)
- `assets/img/thumbs/` — vignettes pour la grille (max 700 px)

## Modifier les œuvres et les prix

Tout se passe dans `assets/js/site.js`, tableau `OEUVRES` en tête de fichier :

```js
{
  slug: 'kung-fu',            // nom des fichiers image (oeuvres/ et thumbs/)
  titre: 'Kung Fu',
  annee: '1981',
  dimensions: '195 × 289 cm',
  technique: 'Aérosol sur toile libre',
  price: 45000,               // nombre en euros, ou null => « Prix sur demande »
  desc: "…"
}
```

L'adresse e-mail de contact est définie par la constante `CONTACT_EMAIL` dans le même fichier
(et apparaît aussi dans la section « Acquérir » de `index.html`).

## Ajouter une œuvre

1. Ajouter l'image dans `assets/img/oeuvres/<slug>.jpg` (≤ 1800 px) et sa vignette dans
   `assets/img/thumbs/<slug>.jpg` (≤ 700 px).
2. Ajouter une entrée dans le tableau `OEUVRES` de `assets/js/site.js`.

## Déploiement (GitHub Pages)

Le site est 100 % statique, sans build :

1. Sur GitHub : **Settings → Pages**
2. Source : « Deploy from a branch », branche `main` (ou la branche de votre choix), dossier `/ (root)`
3. Le site est servi à `https://<compte>.github.io/EPSILON/`

Un domaine personnalisé peut être ajouté ensuite dans les mêmes réglages.

## Œuvres actuellement en galerie

| Œuvre | Année | Dimensions | Prix |
|---|---|---|---|
| Kung Fu | 1981 | 195 × 289 cm | 45 000 € |
| Le Penseur | 1982/1983 | 157 × 270 cm | sur demande |
| Saxo improvisation | c. 1984/85 | 148 × 101 cm | 19 500 € |
| La connerie humaine | 1989 | 100 × 110 cm | sur demande |
| Zambie | 1992 | 55 × 73 cm | 9 200 € |
| Mort Mexicaine | 1995 | 180 × 80 cm | sur demande |
| Michel | 2009 | 210 × 307 cm | sur demande |

Toutes les œuvres reproduites sont © Epsylon Point.
