# Fase Mechanical Engineering — website

The corporate site for Fase Mechanical Engineering: centrifuges, swarf
treatment plants and shredders for metal scrap. 27 static pages, rebuilt in the
visual language of [on.energy](https://www.on.energy) — black ground, light
typography, full-width sections alternating black, brand red and pale grey.

**Live:** https://acci4i0.github.io/fase2/

## Running it

There is nothing to install and nothing to build: open `index.html` in a
browser. The scripts are classic, no ES modules and no framework.

To serve it locally:

```bash
python3 -m http.server 8000
```

Pages are linked with relative paths, so the folder can be published as it
stands — GitHub Pages, a bucket, a subdirectory.

## Structure

```
index.html              home (no news section: that lives in news.html)
azienda.html            profile, method, test area
centrifughe.html        \
centrifor.html           > the machine families
trituratori.html        /
impianti.html           /
accessori.html          conveyor belts and bin tippers
prodotti/               one page per machine (10), with the technical tables
                        wherever the data exists
applicazioni.html       the four processes
settori.html            the departments served
news.html               trade fairs and updates
news/                   one page per item (7)
contatti.html           logo and copy on the left, contact details in the panel
privacy.html            notices (copy to be supplied)
cookie-policy.html
assets/site.css         single stylesheet, project variables in :root
assets/site.js          scroll reveals, mobile menu, carousel, loupe, canvas
assets/fonts/           the four weights the stylesheet uses
assets/doc/             the TR1 patent certificate and the KOMBI brochure
assets/img/trituratori/ the shredders, cropped to 16:9 and to a common finish
assets/img/kombi/       the KOMBI series, same treatment
assets/img/impianti/    the plants, split by family: continuo-, paniere-
assets/img/centrifughe/ the FD series from 250 to 1000, the FCV and the LM AG
assets/img/accessori/   the bin tippers, plus the backdrop awaiting the belts
assets/img/centrifor/   the three Centrifor models, on LM white, at 1400x1050
assets/img/soluzioni/   the images for sectors and applications
assets/img/favicon*.png the browser tab icon, logo on red
```

The order is centrifuges, Centrifor, shredders, plants — and it holds
everywhere: the "Sistemi" submenu, the footer, the home cards, the subject list
on the contact page. Centrifor sits straight after the centrifuges because it
is a centrifuge series too; Accessori stays last.

## Editing

Every page is complete, standalone HTML: to change a line of copy you open the
file and change it, with no build in between.

The brand colour is a single red, **#A72B2A** (Pantone 7627 C), defined as
`--color-accent` in `assets/site.css`. The rest of the scale is neutral.

## Design log

Every visual and technical decision on this site — the colour, the vertical
rhythm, the photograph treatments, the tables, the typography, accessibility —
is written down with its reasoning in **[DESIGN-LOG.md](DESIGN-LOG.md)**, in
Italian, like the site and the machines it describes.

## Rights

The site and its contents belong to Fase Mechanical Engineering. This
repository holds the source; it carries no open-source licence.
