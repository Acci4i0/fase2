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

Le fotografie di prodotto e le riprese aziendali non sono duplicate qui:
vengono servite dal repo dei contenuti tramite jsDelivr.

```
https://cdn.jsdelivr.net/gh/Acci4i0/fase@main/<percorso>
```

Per ospitarle in proprio basta copiare `img/` da quel repo e sostituire il
prefisso nelle pagine.

### Il filmato della testata

Sta in `assets/video/`, montato e gradato per questo sito. Esiste in due tagli,
16:9 e 9:16: la scelta avviene al caricamento in base alla larghezza dello
schermo, cosi' su telefono non si scarica il file da desktop e non si butta via
meta' inquadratura in un ritaglio.

| file | durata | peso |
|---|---|---|
| `hero-16x9.mp4` | 7,8 s in ciclo | 481 KB |
| `hero-9x16.mp4` | 7,8 s in ciclo | 252 KB |

Tre inquadrature con stacco netto, circa 2,6 s l'una, **tutte da riprese
professionali**: fresatura di precisione, tornitura con il truciolo che si
arriccia sul tagliente, ingranaggi in presa. Il percorso e' quello del lavoro
di Fase — si asporta materiale, nasce il truciolo, il meccanismo lo tratta.

Le riprese aziendali girate a telefono sono state tolte: camera instabile e
luce non controllata non reggono accanto al materiale professionale, e il
montaggio si vedeva.

### Perche' la sezione "Sistemi" e' ferma

Il riferimento visivo usa una sequenza agganciata allo scroll dove la camera
gira attorno al prodotto: ogni grado di rotazione mostra geometria nuova. Quella
sequenza e' un render 3D.

Con i materiali disponibili — fotografie e riprese a mano — quel congegno non e'
riproducibile. Una fotografia che scorre resta una figurina che si sposta: la
macchina non ruota mai su se' stessa e l'occhio lo riconosce subito come finto.
Sono state provate e scartate tre strade: uno zoom su un fermo immagine
(stesso soggetto a scale diverse, informazione zero), uno scorrimento su un
carrello di stock (stesso mandrino piu' vicino), una traversata laterale con
parallasse costruita dagli scontornati (nessuna rotazione dei singoli oggetti).

La sezione e' quindi una **fotografia ferma a tutta pagina**: la macro della
trasmissione a catena di un trituratore — pignone, albero, targa. E' l'unico
dettaglio ravvicinato del sito, e non compare da nessun'altra parte.

**Per arrivare al risultato del riferimento serve il modello 3D delle macchine.**
I render che stanno in `img/immagini` del repo dei contenuti — `SEZIONE-CENTRIFUGHE`,
`FC`, `trituratore-orizzontale`, `IMP-a-ciclo-continuo` — dimostrano che i
modelli esistono. Da quelli un giro completo si renderizza, ed e' esattamente
il congegno del riferimento.

### Provenienza e licenze

| sorgente | usata in | licenza |
|---|---|---|
| Pexels 9033891, "A Machine is Cutting Metal with a Metal Cutting Tool", di Daniel Smyth | testata, 1ª inquadratura | [Pexels License](https://www.pexels.com/license/) |
| Pexels 36438809, "Industrial lathe machine in action" | testata, 2ª inquadratura | [Pexels License](https://www.pexels.com/license/) |
| Pexels 31802320, "Mesmerizing close-up of industrial gears in motion" | testata, 3ª inquadratura | [Pexels License](https://www.pexels.com/license/) |
| `img/immagini/C5D694D8…` — macro della trasmissione | sezione "Sistemi" | materiale del committente |

La Pexels License consente l'uso commerciale e la modifica senza attribuzione.
Vieta la redistribuzione del materiale come stock su altre piattaforme, l'uso
come marchio e l'uso che implichi un'approvazione da parte di persone o aziende
riprese: niente di tutto questo avviene qui. Negli spezzoni esterni non
compaiono marchi né macchinari identificabili di terzi.

Le fonti sono state portate alla stessa resa — desaturazione, temperatura
colore più fredda, contrasto, grana aggiunta e cadenza uniforme a 20 fotogrammi
al secondo — perché il montaggio si legga come un unico girato.

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
