# Fase Mechanical Engineering — sito

Sito istituzionale di Fase Mechanical Engineering: centrifughe, impianti di
trattamento truciolo e trituratori per lo sfrido metallico.

Rifacimento del sito con il linguaggio visivo di [on.energy](https://www.on.energy):
fondo nero, tipografia in peso leggero, sezioni a tutta larghezza che alternano
nero, rosso di marchio e grigio chiaro. I contenuti sono quelli del sito Fase
esistente ([Acci4i0/fase](https://github.com/Acci4i0/fase)).

## Come si apre

Non c'è niente da installare e niente da compilare: si apre `index.html` nel
browser. Gli script sono classici, nessun modulo ES, nessun framework.

Per servirlo in locale:

```
python3 -m http.server 8000
```

Le pagine sono collegate con percorsi relativi, quindi la cartella si può
pubblicare così com'è (GitHub Pages, un bucket, una sottodirectory).

## Struttura

```
index.html              home
azienda.html            profilo, metodo, area test
centrifughe.html        \
impianti.html            > le tre famiglie di macchine
trituratori.html        /
prodotti/               una scheda per macchina (9), con le tabelle tecniche
applicazioni.html       le quattro lavorazioni
settori.html            i reparti serviti
news.html               elenco fiere e aggiornamenti
news/                   una scheda per notizia (7)
contatti.html           recapiti, argomenti, mappa
privacy.html            informative (testo da fornire)
cookie-policy.html
assets/site.css         foglio unico, variabili di progetto in :root
assets/site.js          comparse allo scroll, menu mobile, carosello, canvas
assets/fonts/           i quattro tagli usati dal foglio di stile
```

Ogni pagina è HTML completo e indipendente: per cambiare un testo si apre il
file e si modifica, senza passare da un build.

## Colore

Un solo colore di marchio, il rosso `#D10015` campionato dai pixel del logo
(`img/logo-FASE-1.png` del repo sorgente). Vale per la fascia introduttiva, il
piè di pagina, il pulsante di contatto e gli accenti. Il resto della scala è
neutra: nero `#000`, grigio scuro `#202020`, `#4b4b4b`, argento `#afafaf`,
bianco sporco `#eee`.

**Nota sul contrasto.** Sulle superfici rosse il testo è nero, come nell'impianto
originale. Sul giallo di partenza il rapporto era 17:1, sul rosso scende a circa
3,3:1: i titoli grandi reggono, il testo piccolo del piè di pagina e le etichette
della navigazione si leggono male. Se serve rispettare WCAG AA anche sul corpo,
le due strade sono passare a testo bianco su rosso (5:1) oppure usare il rosso
scuro `#A72B2A` già presente nel sito precedente.

## Immagini e video

Fotografie e riprese non sono duplicate qui: vengono servite dal repo dei
contenuti tramite jsDelivr.

```
https://cdn.jsdelivr.net/gh/Acci4i0/fase@main/<percorso>
```

Per ospitarle in proprio basta copiare `img/` da quel repo e sostituire il
prefisso in `assets/site.css` e nelle pagine.

## Tipografia

Il foglio di stile chiama `Univers Next Pro` (pesi 250, 300, 400) e
`ABC Monument Grotesk Mono`. Sono caratteri commerciali: prima di pubblicare il
sito serve una licenza web a nome di Fase. Senza i file in `assets/fonts/` le
pagine restano leggibili — il ripiego è Inter, Neue Haas Grotesk, Helvetica
Neue, Arial — ma il disegno cambia.

## Accessibilità

Landmark e `aria-label` sulle regioni, `aria-current` sulla voce di menu attiva,
focus visibile, `prefers-reduced-motion` rispettato: comparse allo scroll e
animazioni si fermano allo stato finale.
