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
index.html              home (senza la sezione news: vive solo in news.html)
azienda.html            profilo, metodo, area test
centrifughe.html        \
trituratori.html         > le tre famiglie di macchine
impianti.html           /
accessori.html          nastri, ribalta cassoni e opzioni di macchina
prodotti/               una scheda per macchina (7), con le tabelle tecniche

L'ordine delle tre famiglie e' centrifughe, trituratori, impianti: vale per il
sotto-menu "Sistemi", per il pie' di pagina, per le schede in home e per gli
argomenti nella pagina contatti.
applicazioni.html       le quattro lavorazioni
settori.html            i reparti serviti
news.html               elenco fiere e aggiornamenti
news/                   una scheda per notizia (7)
contatti.html           recapiti, argomenti, mappa
privacy.html            informative (testo da fornire)
cookie-policy.html
assets/site.css         foglio unico, variabili di progetto in :root
assets/site.js          comparse allo scroll, menu mobile, carosello, lente, canvas
assets/fonts/           i quattro tagli usati dal foglio di stile
assets/img/trituratori/ le fotografie dei trituratori, portate a 16:9 e a una
                        resa comune (vedi sotto)
assets/doc/            l'attestato di brevetto del TR1 e il depliant KOMBI
assets/img/kombi/      le fotografie della serie KOMBI, stesso trattamento
assets/img/impianti/   gli impianti, divisi per famiglia: continuo-, paniere-
assets/img/centrifughe/ la serie FD dalla 250 alla 1000 e la FCV
assets/img/accessori/  i ribalta cassoni, piu' il fondale in attesa dei nastri
assets/img/soluzioni/  le immagini di settori e applicazioni
assets/img/favicon*.png  l'icona della scheda del browser, marchio su fondo rosso
```

Ogni pagina è HTML completo e indipendente: per cambiare un testo si apre il
file e si modifica, senza passare da un build.

## Colore

Un solo colore di marchio, il rosso `#A72B2A` — **Pantone 7627 C**, lo stesso
`--color-accent` del repo sorgente ([Acci4i0/fase](https://github.com/Acci4i0/fase),
`css/style.css`). Sostituisce il `#D10015` campionato dai pixel del logo, che
era più acceso. Vale per la fascia introduttiva, il piè di pagina, il pulsante
di contatto e gli accenti. Il resto della scala è neutra: nero `#000`, grigio
scuro `#202020`, `#4b4b4b`, argento `#afafaf`, bianco sporco `#eee`.

**Nota sul contrasto.** Sulle superfici rosse il testo è nero, come nell'impianto
originale. Sul giallo di partenza il rapporto era 17:1; sul `#D10015` scendeva a
3,3:1 e su questo rosso, più scuro, si assesta a **3,0:1**. I titoli grandi
restano sopra la soglia AA per il testo grande (3:1), ma di poco; il testo
piccolo del piè di pagina e le etichette della navigazione non ci arrivano. Se
serve rispettare WCAG AA anche sul corpo, la strada è il testo bianco su rosso
(circa 7:1).

## Densità verticale

Il ritmo del riferimento on.energy è tarato su schermi larghi: tradotto in `vw`
su un telefono diventava mezza schermata di nero prima di ogni cosa. Le
spaziature di sezione sono state ridotte all'incirca della metà sul mobile e di
un terzo sul desktop. Su `impianti.html`, a 375 px di larghezza: il filo di
navigazione passa da 365 a 113 px dall'alto, la prima scheda di prodotto da
1377 a 642 px, l'altezza della pagina da 3356 a 2208 px.

Non è stata toccata la **fascia rossa introduttiva** della home: quel respiro è
voluto.

Dove la fascia immagine è seguita da una sezione con fondo proprio — le tre
pagine dei sistemi, con «Le macchine» sul grigio scuro — sopra restava un vuoto
largo e sotto il fondo attaccava sul bordo del carosello. La fascia è stata
tirata su e il margine tolto sopra è tornato sotto: lo spazio complessivo è lo
stesso di prima, ma i due vuoti si leggono uguali. Il conto tiene dentro anche
lo spazio morto che il titolo lascia sotto la riga di testo, così la misura va
dalla base delle lettere al carosello. Su `trituratori.html`, a 375 px: sopra
25 px, sotto 25 px (prima 38 e 0). La regola è `.media-band:has(+
.expertises-overview)` in `site.css`: le pagine dove sotto il carosello c'è
nero — accessori, schede prodotto, news — non la prendono, perché lì i due
vuoti erano già pari.

Sulle tre pagine dei sistemi (`centrifughe`, `impianti`, `trituratori`) è stata
tolta anche la `page-statement`, la riga che ripeteva la meta description fra la
fotografia e l'elenco delle macchine. Resta dove porta testo suo: `azienda`,
`contatti`, `settori`, `applicazioni`.

## Il piè di pagina

L'indirizzo cambia forma con la larghezza. Da telefono le quattro voci corrono
in riga come sono scritte — via e comune separati da un trattino, telefono e
mail da un punto — perche' su uno schermo stretto quattro righe in colonna
allungano il piede senza aggiungere niente. Da 834 px in su ogni voce prende la
sua riga: via, comune, telefono, mail. In pagina la differenza e' solo di CSS,
il testo e' lo stesso: ogni voce sta in uno `span.voce` che diventa `block` sul
desktop, mentre i separatori (`span.stacco`) e l'a capo di mezzo spariscono, se
no lascerebbero righe vuote.

Il segno sociale e' **LinkedIn**, non piu' Facebook: porta a
`linkedin.com/company/fase-mechanical-engineering`.

Sotto la riga della partita IVA sta la dichiarazione di gruppo — «Soggetta alla
direzione e coordinamento di LM Industry Srl», col nome che porta a
`lm-industry.com`. La stessa dichiarazione, per esteso e col numero di registro,
resta nel blocco legale di `privacy.html` e `cookie-policy.html`.

In coda a quella riga sta il marchio LM, alto quanto le maiuscole del testo. Da
834 px in su la riga diventa una fascia larga quanto la nota e il marchio va **a
filo con la fine della riga sopra**, l'ultima cifra della partita IVA: non e' una
misura scritta a mano, e' `justify-content: space-between` dentro una nota che
prende la larghezza della sua riga piu' lunga, quindi tiene a ogni larghezza e in
tutte e due le lingue. Da telefono, dove la riga va a capo da sola, il marchio
resta di seguito al testo.

Il file e' `assets/img/lm-industry.png`, ricavato dal marchio pubblicato su
`lm-industry.com`: **bianco pieno**, perche' l'originale e' rosso e sul fondo del
piede sparirebbe. E' il solo monogramma, senza le tre barre colorate del lockup:
a questa misura diventavano una riga sporca. Va ricordato che e'
`display:inline-block` — il foglio mette `img{display:block}`, e senza la
correzione il marchio andava a capo da solo.

**La misura del marchio non e' libera: la detta la riga.** Perche' il marchio
possa stare a filo, la seconda riga con dentro il marchio deve restare piu' corta
della prima. Fra la fine del testo e la fine della riga sopra ci sono 24,5 px in
italiano e 25 in inglese: dentro ci stanno la distanza minima (`.5em`) e il
marchio, che percio' e' alto `.8em` — poco piu' delle maiuscole. Con `1.15em`,
come nella prima stesura, la seconda riga sfondava di 19 px e l'allineamento
saltava. **Se il testo di una delle due righe cambia, questo conto va rifatto.**

**L'allineamento in verticale e' misurato, non a occhio.** Quello che conta e' che
il marchio sporga uguale sopra le maiuscole e sotto la linea di base:

| | sopra le maiuscole | sotto la linea di base |
|---|---|---|
| desktop | 0,4 px | 0,5 px |
| telefono | 0,6 px | 0,4 px |

Sul desktop il riquadro del testo non e' simmetrico attorno alle lettere — sotto
ci sono lo spazio dei discendenti e mezza interlinea — quindi centrare i due
riquadri con la fascia non basta: `.footnote .gruppo>span` scende di `.09em`, che
e' esattamente quella asimmetria. Da telefono il marchio e' in linea col testo e
si regola invece con `vertical-align:-.25em`. Le due misure sono in em, cosi'
tengono quando il corpo del testo cambia con la larghezza.

Il trattino della prima riga e' quello medio (`–`), lo stesso del blocco legale di
`privacy.html`, non quello lungo.

## Niente parole evidenziate

I testi correnti non hanno più la prima frase in bianco sul resto in grigio: il
paragrafo corre tutto nello stesso tono. Restano sottolineati solo i
collegamenti veri (mail, telefono, mappa). L'indirizzo nel piè di pagina non è
un collegamento e non è sottolineato — su iOS lo diventava da solo, e il
`<meta name="format-detection">` in testa a ogni pagina lo impedisce.

## Le copertine delle schede

Nell'elenco "Le macchine" ogni scheda porta un quadrato con la macchina. Il
riquadro e' `aspect-ratio: 1` con `object-fit: cover`, quindi taglia ai lati:
**la copertina non e' il 16:9 della fascia ridotto, e' un'immagine sua**, tagliata
per stare in un quadrato.

Le copertine che il sito gia' aveva sono scatti di catalogo: fondo chiaro
uniforme intorno a 220, macchina centrata, **aria su tutti e quattro i lati**,
nessuna vignettatura. Quella del KOMBI usciva da questa famiglia — la macchina
toccava i due lati, senza margine — e si vedeva accanto alle altre due schede
degli impianti. Ora viene dallo stesso scatto in posa di `kombi-01`, rifatta con
la regola: la macchina sta dentro all'**84% del quadrato**, centrata, sul fondo
portato a 220, senza vignettatura. Con lo stesso conto e' rifatta anche
`tr1-copertina`, l'altra copertina servita da qui.

| macchina | copertina | dove sta |
|---|---|---|
| FD | `assets/img/centrifughe/fd-copertina.jpg` | qui |
| FCV | `su-grigio/placeholder-nero.jpg` | in attesa |
| LM 660 AG | `su-grigio/placeholder-nero.jpg` | nessuna foto verificata |
| TR1 | `assets/img/trituratori/tr1-copertina.jpg` | qui |
| TR-Dual | `su-grigio/trw-serie.jpg` | repo dei contenuti |
| ciclo continuo | `su-grigio/imp-continuo-serie.jpg` | repo dei contenuti |
| paniere estraibile | `su-grigio/imp-paniere-serie.jpg` | repo dei contenuti |
| KOMBI | `assets/img/kombi/kombi-copertina.jpg` | qui |

Con lo stesso conto e' rifatta anche quella della FD, dallo scatto della
macchina blu col coperchio a cupola aperto (`immagini/F247E8A4`) indicato dal
committente. La FCV per ora non ha copertina: porta il fondo nero come la
LM 660 AG, cosi' le due schede senza fotografia si leggono uguali. Il quadrato
ricavato dagli scatti nuovi resta in cartella (`fcv-copertina.jpg`). Restano al repo
dei contenuti le tre che non hanno un sostituto — TR-Dual, ciclo continuo,
paniere estraibile — e stanno gia' dentro la regola. `kombi-scheda.jpg`,
`su-grigio/fd-serie.jpg` e `su-grigio/fcv-serie.jpg` non sono piu' richiamate.

## L'icona della scheda

Nella scheda del browser compariva il mondo grigio del ripiego: nessuna pagina
dichiarava un'icona. Ora tutte e 27 portano

```
<link rel="icon" href="assets/img/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="assets/img/favicon-180.png">
```

L'immagine e' quella che il committente usa gia' come favicon
(`logo/favicon.png` nella cartella delle fotografie): marchio bianco per esteso
su fondo rosso pieno, con aria intorno — a 16 px il marchio si legge intero e non
tagliato. Il rosso e' gia' il **#A72B2A** del sito, verificato sul file, quindi
non e' stato ritoccato. Il fondo e' opaco e non trasparente: cosi' l'icona tiene
sia sulla barra chiara sia su quella scura, invece di sparire in una delle due.

I tre tagli (32, 180, 512) escono dallo stesso file a 512 px. Il 180 serve alla
schermata di casa di iOS, il 512 sta li' per un eventuale manifest.

## Il carosello della fascia immagine

`centrifughe.html`, `impianti.html`, `trituratori.html` e `accessori.html` hanno
la fascia sotto al titolo montata a carosello, e con loro le schede dei due
trituratori, della serie KOMBI, delle disoleatrici FD e dei due impianti: le
fotografie si sovrappongono e si alternano in dissolvenza ogni 2 secondi, con le
frecce ai lati e i pallini in basso a sinistra per scegliere a mano. Le frecce
sono le stesse pastiglie a puntini della sezione "Il metodo" in home, col fondo
scuro al posto del rosso perche' qui stanno sopra la fotografia, e piu' grandi:
28 px sono un bersaglio scomodo per il dito.

La dissolvenza dura 0,55 secondi. Con la cadenza a 2 secondi una sfumatura piu'
lunga terrebbe le figure quasi sempre a mezz'aria: cambiando l'intervallo conviene
rivedere anche questa, in `assets/site.css`.

**Per cambiare le immagini si toccano solo le righe `<img>` nella pagina.** Una
riga per fotografia; la prima porta `class="attiva"` perche' resti visibile se lo
script non parte, le altre `loading="lazy"`. Aggiungerne o toglierne non richiede
di aprire `site.js`: i pallini si contano da sole. Con una sola `<img>` il
carosello non si attiva e la fascia si comporta come prima.

Oltre le otto fotografie i pallini si stringono da soli: la classe `fitti`,
che `site.js` mette sul gruppo, dimezza pallino e distanza. Senza, le dieci
taglie della scheda FD diventerebbero una barra appoggiata sulla macchina —
con venti, la prima versione, arrivava larga quanto la fascia.

L'intervallo sta in `data-carosello`, in millesimi di secondo.

Il carosello gira solo quando la fascia e' in campo, si ferma sotto il puntatore
o quando un pallino prende il fuoco, si ferma con la scheda del browser in
secondo piano — altrimenti `setInterval` continuerebbe comunque e al ritorno si
troverebbe una figura a caso — e non parte affatto con
`prefers-reduced-motion: reduce`.

I testi alternativi delle nuove fotografie vanno aggiunti anche al dizionario in
`assets/i18n.js`, come tutti gli altri.

## La lente: la fotografia intera

Il carosello ritaglia. La fascia e' un 16:9, la colonna un 4:3, e `object-fit:
cover` toglie quello che avanza: delle macchine alte e strette — i ribalta
cassoni, l'elevatore del KOMBI, la colonna del TR-Dual — resta quasi sempre
fuori un pezzo. **Un tocco in mezzo al carosello riapre la stessa fotografia
sopra la pagina**, dove `contain` la fa stare tutta, e da li' si continua a
scorrere la fila.

Vale per tutti e dodici i caroselli del sito: il pannello nasce dallo stesso
blocco che li monta, quindi un carosello nuovo ce l'ha senza aggiungere niente.

Dentro la lente si scorre in cinque modi: le due frecce, i tasti freccia della
tastiera, il dito trascinato di lato sul telefono. Si chiude con la croce in
alto a destra, con `Esc`, o toccando il nero intorno — non la fotografia, se no
basterebbe sbagliare mira mentre si guarda per ritrovarsi fuori. In basso il
conteggio dice a che punto della fila si e'.

Il pannello e' **uno solo per pagina** e si costruisce alla prima apertura: fino
a quel momento nel documento non c'e' niente in piu'. Ogni volta si riempie con
le figure del carosello che l'ha chiamato, e alla chiusura il carosello resta
sulla fotografia che si stava guardando invece di tornare dov'era. Mentre la
lente e' aperta il giro automatico sta fermo, se no il fondo scorrerebbe da
solo.

Le pastiglie qui hanno il fondo di grafite, non il nero al 40% del carosello:
li' stanno sopra una fotografia e il nero basta a staccarle, qui il fondo e' gia'
nero e sparirebbero. Sotto il puntatore passano al rosso di marchio.

Il carosello prende `tabindex="0"` e si apre anche con `Invio` o con la barra:
e' un riquadro e non un bottone — dentro ha gia' le frecce e i pallini, e un
comando dentro l'altro non si annida.

Le etichette della lente stanno nel dizionario di `assets/i18n.js` insieme a
quelle delle frecce del carosello, cosi' seguono il tasto EN anche a pagina
gia' aperta.

## I caroselli in colonna degli accessori

Su `accessori.html` la fascia in cima e' stata tolta: la pagina non presenta una
macchina sola, e le due voci dell'elenco — nastri trasportatori e ribalta
cassoni — hanno ciascuna il suo carosello **nella colonna del titolo**, che dice
gia' quello che serve. Dal titolo della pagina si passa dritti al primo blocco.

**I file sono 4:3.** Gli scatti dei ribalta cassoni sono verticali (1086x1448) e
le macchine sono colonne alte. Portarli a 16:9 vuol dire o tagliare l'altezza —
e ne resta il 42%, con la macchina spezzata a meta' — o prolungare il fondo ai
lati, che qui e' reparto e non studio: si stira in una scia. Col 4:3 resta il
56% dell'altezza e la macchina si legge ancora. Delle dieci fotografie ne sono
entrate sette; le tre fuori, tagliate, mostravano solo un pezzo di telaio.

**In pagina il riquadro non e' 4:3: e' alto quanto il testo di destra.** Le due
colonne devono cominciare e finire insieme, e il testo e' molto piu' corto di un
4:3 a tutta colonna — su finestra larga la meta'. Percio' il carosello si allunga
fino a dove arriva il testo (`flex:1` con `height:100%`), con due limiti: e' largo
il **70% della colonna** e non scende sotto un **16:10** (`min-height:15.3vw`).
Senza il primo limite non si chiuderebbe mai il vuoto; senza il secondo, dove il
testo e' corto, il riquadro diventerebbe una fessura 5:1. Il file resta 4:3 e
`object-fit: cover` taglia sopra e sotto, ma la macchina sta al centro e non si
perde.

Come viene, misurato: le due colonne **cominciano sempre alla stessa altezza**;
finiscono insieme sul blocco dei nastri fino a 1440 px, e sull'altro — che ha un
paragrafo piu' corto — resta un residuo di 39-71 px. Il corpo del testo, che era
tappato a 1,8rem e su finestra larga smetteva di crescere mentre il riquadro
cresceva, sale a 2,2rem: e' il tappo il motivo per cui il vuoto si apriva
proprio sugli schermi grandi.

Frecce e pallini sono gli stessi della fascia ma rimpiccioliti: sono tarati in
`vw` su una fascia a tutta pagina e in una colonna larga un terzo verrebbero
enormi.

**I nastri non hanno ancora fotografie.** Il carosello e' montato lo stesso, con
tre fondali scuri (`nastro-attesa.jpg`): quando arrivano gli scatti si
sostituiscono le tre righe `<img>` e non serve toccare altro.

**Il testo di destra scende all'altezza del titolo.** Le due colonne partono
dalla stessa riga della griglia, ma a sinistra sopra il titolo c'e' il numero
d'ordine: senza correzione la riga di destra attaccava all'altezza del numero.
Ora `.split-body` scende di
`calc(1.2rem*1.5 + 1.1111111111vw + max(3rem,2.5vw)*1.167 + 1.6666666667vw)`:
numero, suo margine, altezza del titolo e margine del carosello. Il testo non
parte quindi all'altezza del titolo ma **all'altezza del carosello**. Il `max`
ripete il `clamp` del corpo del titolo, se no sotto i 1200 px il conto sbaglia
di qualche pixel.

## Le immagini delle Soluzioni

`settori.html` e `applicazioni.html` non parlano di una macchina Fase ma del
reparto del cliente e di cosa succede al materiale. Le immagini che c'erano —
ottone lucido, una benna che solleva rottame, un capannone con macchine
bianche e turchesi — erano stock preso altrove: chiare, sature, e in due casi
fuori tema (la benna e' un piazzale di rottame, non lo sfrido di una macchina
utensile). Sono state sostituite tutte e otto.

Il criterio: **scuro, neutro, il soggetto che riempie il fotogramma** — la stessa
regola delle altre immagini del sito — e il soggetto giusto per la voce.

| dove | immagine | da dove viene |
|---|---|---|
| settori, fascia | cumulo di truciolo d'acciaio | Pexels 17887900 |
| settori, tornerie automatiche | mandrino di un tornio al lavoro | Pexels 8865187 |
| settori, officine e centri di lavoro | fresatura di un blocco d'acciaio | Pexels 10406128 |
| applicazioni, fascia | punta che fora sotto il getto di lubrorefrigerante | Pexels 8956313 |
| applicazioni, centrifugazione | FCV col cesto estratto | materiale Fase (`fcv-03`) |
| applicazioni, asciugatura | spezzoni torniti dentro un cassone | Pexels 8940820 |
| applicazioni, frantumazione | rotore a coltelli del TR-Dual | materiale Fase (`trdual-07`) |
| applicazioni, trattamento in linea | linea a ciclo continuo | materiale Fase (`continuo-06`) |

Tre delle otto vengono dal materiale del committente: dove la voce parla di
un'operazione che fa una macchina Fase, la macchina Fase e' l'immagine piu'
pertinente che ci sia. Le altre cinque sono di reparto e Fase non ne ha: li'
si va su Pexels, la stessa fonte del filmato della testata.

Il ritaglio e' 16:9 per le due fasce e **16:10 per le schede**, che e' il
rapporto del riquadro in `.solution-card`. Tutte prendono la vignettatura del
sito; sulle due fitte di texture — il cumulo di truciolo e gli spezzoni — la
grana non e' stata aggiunta, perche' il soggetto ne ha gia' e raddoppiava il peso
del file senza cambiare la resa.

## Le fotografie dei trituratori

Stanno in `assets/img/trituratori/`, ricavate dagli scatti in posa del
committente e portate a 1600x900. Sono le prime immagini servite da qui e non
dal repo dei contenuti; poi sono arrivate quelle di KOMBI, degli impianti e
delle centrifughe FD, con lo stesso criterio.

Il riferimento e' `assets/img/trasmissione-16x9.jpg`, la fotografia della
sezione "Sistemi": neri pieni, grana fine, fotogramma occupato fino ai bordi.
Gli scatti di prodotto, chiari e su fondo grigio uniforme, accanto a quella
sembravano ritagli di catalogo incollati sul sito.

Quello che li integra e' **il taglio, il fondo e la luce, non il colore**. Le
macchine tengono le loro tinte: il blu dei motori, il verde delle carpenterie,
il rosso del marchio. Una prima versione le portava al quasi monocromo del
riferimento — sbagliato: quello e' un intervento sul prodotto, non
sull'atmosfera. Soggetto, geometria, composizione e colori restano quelli
fotografati.

1. **Taglio.** Il fondo da studio e' liscio, quello che se ne discosta e' la
   macchina: si misura il suo ingombro e si taglia li'. Cosi' la figura passa
   dal riempire meta' fotogramma a occuparne il 70-98%. Sugli scatti di reparto
   il fondo non aiuta e il riquadro e' scritto a mano in `TAGLI`.
2. **Riempimento.** Gli originali sono 4:3 e la fascia e' 16:9, quindi manca
   larghezza. La scelta dipende da dove arriva la macchina:
   - **arriva ai lati** → taglio pieno. La figura copre tutto il fotogramma e
     esce dai bordi in alto e in basso, come in una fotografia vera. Il taglio
     si centra sul soggetto, non sull'immagine.
   - **ai lati c'e' fondo** → si prolunga il fondo, riga per riga, prendendo il
     colore da una fascia di bordo e non da un pixel solo.

   La distinzione conta: allungare un bordo dove passa la macchina la stira in
   una scia orizzontale. Era il difetto della prima versione.
3. **Luce.** Una curva scurisce i medi — cioe' il fondo da studio — e apre i
   neri (gamma 1,16), con un filo di contrasto. Non tocca la tinta: nessuna
   desaturazione, nessuna dominante.
4. **Vignettatura**, che spegne i bordi: e' quella che fa emergere la macchina
   dal buio e nasconde l'attacco del riempimento.
5. **Grana** al 6% su tutto, che rimette insieme figura e fondo.

Lo script che le ha prodotte non e' nel repo: sono file finiti, si sostituiscono
mettendo un'immagine 16:9 con lo stesso nome.

`tr1-04` e' arrivata dopo, dallo stesso genere di scatto in posa delle FD — fondo
da studio gia' pulito — e ha preso il trattamento piu' leggero descritto sotto:
riquadro 16:9 col fondo prolungato ai lati, vignettatura e grana, senza curva sui
medi. Accanto alle altre tre non si distingue. Sta nel carosello della scheda TR1
e in quello della pagina `trituratori.html`, dove l'elenco alterna una macchina e
l'altra.

Dallo stesso scatto viene `tr1-copertina.jpg`, il quadrato della scheda TR1
nell'elenco "Le macchine" e in "Le altre serie" del TR-Dual. Prima era
`su-grigio/tr-serie.jpg` dal repo dei contenuti, il corpo blu col rotore in
vista. Il riquadro e' quadrato e `object-fit: cover` taglia ai lati, quindi la
copertina non e' il 16:9 ritagliato ma un ritaglio suo, alto quanto l'originale e
centrato sulla macchina. Niente vignettatura: qui accanto stanno le copertine
piatte del repo dei contenuti, e si vedrebbe.

## Le fotografie delle centrifughe FD

Stanno in `assets/img/centrifughe/`, servite da qui come quelle dei trituratori.
Vengono dagli scatti in posa raccolti dal committente in `FD_da_350_a_1000`:
gli stessi soggetti della cartella `Centrifughe continue FD`, ma ripresi in
studio e ripuliti dal fondo di reparto.

**La taglia non si legge sulla macchina.** I file di partenza hanno nomi
generati (`AD24F848…`) e la targa dati e' in bianco: nelle fotografie il campo
`MODELLO` non e' compilato. E' stata ricavata per confronto con la cartella piu'
vecchia, dove il nome del file porta il modello: ogni scatto nuovo e' la stessa
inquadratura di uno vecchio, rifatta in studio. Il legame va tenuto scritto,
altrimenti l'ordine del carosello non e' piu' ricostruibile:

| file | scatto di partenza | taglia | dove |
|---|---|---|---|
| `fd250-01` | `FD250_1` | FD 250 | riserva |
| `fd250-02` | `FD250_2` | FD 250 | riserva |
| `fd250-03` | `FD250_3` | FD 250 | carosello |
| `fd250-04` | `FD250_4` | FD 250 | riserva |
| `fd250-05` | `FD250_5` | FD 250 | riserva |
| `fd250-06` | `FD250_7` | FD 250 | riserva |
| `fd350-01` | `FD350_1` | FD 350 | carosello |
| `fd350-02` | `FD350_2` | FD 350 | riserva |
| `fd350-03` | `FD350SA_2` | FD 350 SA | riserva |
| `fd350-04` | `FD350SA_1` | FD 350 SA | riserva |
| `fd420-01` | `FD420S_1` | FD 420 S | carosello |
| `fd500-01` | `FD500_3` | FD 500 | carosello |
| `fd500-02` | `FD500_4` | FD 500 | riserva |
| `fd500-03` | `FD500_1` | FD 500 | carosello |
| `fd500-04` | `FD500_2` | FD 500 | riserva |
| `fd500-05` | `FD500_6` | FD 500 | carosello |
| `fd650-01` | `FD650_1` | FD 650 | carosello |
| `fd650-02` | `FD650_2` | FD 650 | carosello |
| `fd650-03` | `FD650_3` | FD 650 | carosello |
| `fd1000-01` | `FD1000_2` | FD 1000 | carosello |

Il carosello ne porta dieci, in quest'ordine, dalla piu' piccola alla piu'
grande. Le varianti SA e S stanno con la loro taglia; il nome del file usa la
nomenclatura del catalogo in pagina, che si ferma a `FD 350` e `FD 420`.

Le altre dieci restano nella cartella senza essere richiamate: sono file finiti,
pronti da mettere in pagina al posto di uno di questi con una riga `<img>`. Le
venti in fila erano troppe — mezzo carosello era la taglia piu' piccola — e la
scelta e' caduta sugli scatti puliti. Della 250 e della 350 resta uno scatto per
taglia: il ritratto di tre quarti della macchina e il gruppo completo sul
telaio. Fuori quelli dove il quadro elettrico o il cassone arrugginito prendono
piu' spazio della centrifuga, i dettagli tagliati e i doppioni della stessa
inquadratura. Della 650 restano tutte e tre: sono la stessa macchina in grigio,
in verde e in rosso, e messe in fila dicono che la verniciatura segue il reparto
del cliente.

Delle ventuno fotografie della cartella ne sono state lavorate venti. La
scartata (`FF29D76E`) e' uno scontornato su bianco, di taglia non identificata:
accanto alle altre si legge come una figurina di catalogo.

Il trattamento e' piu' leggero di quello dei trituratori, perche' qui gli
originali sono gia' scatti da studio puliti:

1. **Riempimento.** Gli originali sono 4:3, la fascia e' 16:9: manca larghezza.
   Le macchine non arrivano ai lati, quindi si prolunga il fondo riga per riga,
   prendendo il colore da una fascia di venti colonne — presa un po' dentro,
   perche' sul bordo di questi scatti corre un filo scuro che, ripetuto,
   diventava una riga verticale in mezzo al fondo. Il riquadro si centra
   sull'ingombro della macchina, non sull'immagine.
2. **Vignettatura e grana**, con i valori misurati sulle immagini gia' in
   pagina: angoli a circa tre quarti del centro, grana con sigma 1,2.

Nessuna correzione di colore: le macchine tengono le loro tinte, il bianco, il
verde, il rosso e il blu con cui sono state verniciate.

**La FCV ha ora tre scatti suoi** (`fcv-01`, `fcv-02`, `fcv-03`), dalla cartella
`centrifughe_FCV`: la macchina in blu, in bianco e col coperchio aperto e il
cesto estratto. Sono verticali e la macchina riempie il fotogramma — occupa
l'85-90% dell'altezza — quindi tagliare non si puo': il 16:9 si ottiene
prolungando il fondo, che qui e' un muro col battiscopa e un pavimento di
cemento, tutte righe orizzontali che prolungate restano righe.

**Il fondo prolungato qui non funziona, ed e' stato abbandonato.** Portare questi
scatti al 16:9 allargando voleva dire inventare il **58% del fotogramma** partendo
da un margine di fondo largo 84 px: il resto della cornice e' occupato dalla
macchina. Il risultato era una fascia liscia attorno alla macchina — niente
macchie del pavimento, niente variazione — che si legge come un alone, e non si
salva ne' copiando la grana ne' sfumando l'attacco: manca la struttura, non il
rumore.

Provata anche la strada del ritaglio — il 16:9 preso dentro lo scatto, in alto
sulla macchina — che almeno non inventa niente. Nemmeno quella e' piaciuta:
**la fascia della scheda FCV e' in attesa**, tre fondali scuri come su
`centrifughe.html`. I tre ritagli restano in cartella (`fcv-01`, `fcv-02`,
`fcv-03`) senza essere richiamati.

Gli scatti pero' reggono dove non serve una fascia larga: la **copertina** della
scheda e' il quadrato piu' grande preso dentro lo scatto — la macchina intera,
niente fondo inventato — e la **scheda "centrifugazione"** di `applicazioni.html`
e' il ritaglio 16:10 di quello col cesto estratto. Quelli due restano in pagina.

**Per la fascia della FCV servono scatti orizzontali**, o comunque con la
macchina che lascia margine ai lati.

La regola che ne esce: **il fondo si prolunga solo dove ce n'e' gia' abbastanza**
— gli scatti da studio delle FD, dove la macchina lascia margini larghi e il
fondo e' un grigio liscio. Dove la macchina riempie il fotogramma, si taglia.

**LM 660 AG resta senza carosello e col fondo nero**: nessuna foto verificata.
E' la disoliatrice ad alti giri **mod. 660 di LM Industry** — «AG» sta per alti
giri, e la gamma sul sito del gruppo e' 550 / 660 / 800 / 950. Una fotografia del
modello esiste li'
(`wp-content/uploads/2016/12/CentrifugaDisoliaturaAltiGiriMod660.jpg`), ma e'
800x600 e datata: per la fascia, che vuole 1600x900, non basta.

**Anche la fascia di `centrifughe.html` e' in attesa**: tre fondali scuri
(`centrifughe/attesa.jpg`) al posto delle tre vecchie immagini del repo dei
contenuti, finche' le altre serie non hanno fotografie loro. Si sostituiscono le
righe `<img>` e basta.

## Le fotografie degli impianti

Stanno in `assets/img/impianti/`, dagli scatti raccolti dal committente nella
cartella `impianti`: venti fotografie in un mucchio solo, senza distinzione di
famiglia. La divisione e' stata fatta qui, sulle immagini, e va scritta perche'
nessun nome di file la porta.

**Cosa distingue le due famiglie, guardando.** Nel *paniere estraibile* il cesto
esce dalla macchina: in campo si vedono il portale, la pinza che lo afferra, i
panieri in acciaio appoggiati a terra e i bacini di contenimento sotto. Nel
*ciclo continuo* il truciolo scorre e non si estrae niente: tramoggia, elevatore,
centrifuga alimentata di continuo, cassone e cisterna del lubrorefrigerante.

La lettura regge su due punti fermi: le copertine che il sito gia' usava per le
due schede — `su-grigio/imp-continuo-serie.jpg` e `su-grigio/imp-paniere-serie.jpg`
— sono gli stessi due scatti che nella cartella nuova diventano `continuo-01` e
`paniere-01`. Da li' in poi la classificazione segue quei due modelli.

| file | scatto di partenza | famiglia |
|---|---|---|
| `continuo-01` | `4F818315` | ciclo continuo (e' la copertina della scheda) |
| `continuo-02` | `2ABBBE09` | ciclo continuo |
| `continuo-03` | `91E26921` | ciclo continuo |
| `continuo-04` | `B594F2CA` | ciclo continuo |
| `continuo-05` | `0D9C5D02` | ciclo continuo |
| `continuo-06` | `3F5C0B9D` | ciclo continuo |
| `continuo-07` | `F4DD016D` | ciclo continuo |
| `continuo-08` | `020C8B1A` | ciclo continuo |
| `continuo-09` | `52CF9F0F` | ciclo continuo |
| `paniere-01` | `EB8BB113` | paniere estraibile (e' la copertina della scheda) |
| `paniere-02` | `1F932EEB` | paniere estraibile |
| `paniere-03` | `BD859DD7` | paniere estraibile |
| `paniere-04` | `6558C577` | paniere estraibile |

Delle venti ne sono entrate tredici. Fuori i doppioni della stessa linea da
un'angolazione vicina e uno scatto che non sta ne' di qua ne' di la': `8748707C`,
la stazione con i due cassoni ribaltabili, che e' un modo di caricare e non una
famiglia di impianto. Chi vuole rimetterne dentro un'altra la trova in cartella
con questi nomi.

**Il ritaglio qui e' diverso.** Negli scatti delle FD il fondo e' il grigio liscio
dello studio e il 16:9 si ottiene prolungandolo ai lati. Questi sono scatti di
reparto: muri, pavimento, recinzioni. Prolungare quel fondo stirerebbe le righe
orizzontali in una scia, quindi il 16:9 si ricava **tagliando in altezza**. La
finestra non sta a meta' immagine: si misura riga per riga quanto disegno c'e' —
il pavimento vuoto e il muro liscio hanno pochi bordi, il macchinario molti — e
si tiene la banda che ne contiene di piu'. Dove il conto tirava giu' sul
pavimento la finestra e' stata alzata a mano, se no restava fuori la testa
dell'elevatore. Vignettatura e grana sono gli stessi delle altre.

**Nella fascia della pagina `impianti.html`** stanno otto fotografie scelte dal
committente: sei del ciclo continuo e due del KOMBI, con `continuo-01` in
apertura. Il paniere estraibile in questa fascia non compare — le sue fotografie
restano sulla scheda della serie. Le cinque `imp-0*` che c'erano prima restano
in cartella senza essere richiamate, come `continuo-02` e `continuo-03`, che
stanno solo sulla scheda del ciclo continuo.

## La serie KOMBI

Terza serie degli impianti. Il contenuto della scheda viene dal depliant del
committente (`KOMBI/FASE_KOMBI.pdf` nella cartella delle fotografie, copiato in
`assets/doc/kombi.pdf` e collegato dalla pagina): due taglie di centrifuga,
150 e 400 kg/h, dati tecnici e le quattro configurazioni. Nessun dato e' stato
dedotto.

Il depliant riporta anche le quote d'ingombro (A 3900 mm max, B 1350, C 3200,
D 2350, E 1200, F 1000) ma le lettere rimandano a un disegno: senza sapere quale
lettera e' la lunghezza e quale l'altezza non sono finite in pagina. Chi lo sa
le puo' aggiungere alla griglia dei dati.

La miniatura della scheda viene da uno scatto in posa su fondo grigio: sta
bene accanto alle due sorelle, che sono render sullo stesso grigio.

## Come si chiamano le centrifughe

Tutte e tre le serie si chiamano **centrifughe disoleatrici**, con lo stesso
attacco: `Centrifughe disoleatrici a ciclo continuo serie FD`, `Centrifughe
disoleatrici serie FCV`, `Centrifughe disoleatrici serie LM 660 AG`. Il nome
compare in tre punti per pagina — `<title>`, filo di navigazione, titolo — e
sulle schede dell'elenco, che gia' lo portavano.

Prima la FD si presentava come «Disoleatrici a ciclo continuo serie FD» e la FCV
come «Centrifughe asciugatrici serie FCV»: due nomi diversi per macchine che
nell'elenco erano gia' entrambe «Centrifughe disoleatrici». In inglese la FCV
passa da *drying* a *oil-removal*, come le altre due.

**I nomi dei file non sono cambiati.** `prodotti/centrifughe-asciugatrici-serie-fcv.html`
si chiama ancora cosi': rinominarlo cambierebbe l'indirizzo di una pagina gia'
pubblicata, e chi ci fosse arrivato da un collegamento esterno o dai motori
troverebbe un 404. Se si vuole rinominare, va messo in conto un rimando dal
vecchio indirizzo.

Resta com'era l'etichetta sopra il titolo di `centrifughe.html` — «Disoleatrici a
ciclo continuo e a cesto estraibile» — che non e' il nome di una macchina ma la
riga che dice cosa c'e' dentro la famiglia, sotto un titolo che gia' dice
«Centrifughe».

## Il brevetto del TR1

L'espulsione automatica dello spezzone e' coperta da brevetto italiano
n. 102017000109589, depositato il 29/09/2017 e concesso il 17/12/2019. Sulla
scheda del TR1, nella pagina trituratori, compaiono il timbro e il rimando
all'attestato: `assets/doc/brevetto.pdf`, copia del file che sta nel pie' di
pagina di fasemec.com.

**La scheda del TR1 non e' un `<a>` come le altre.** Un collegamento dentro un
altro non e' valido e i browser lo spezzano: qui servono due mete diverse — la
pagina del prodotto e il PDF — quindi la scheda e' un `<div>`, il rimando alla
pagina e' una lastra trasparente distesa sotto il contenuto
(`.scheda-intera`, `z-index:1`) e il brevetto le sta sopra (`z-index:2`).
Cliccando ovunque si va alla scheda prodotto, sul timbro si apre l'attestato.

Le altre schede restano `<a>` normali: la complicazione vale solo dove servono
due destinazioni.

## Inglese

In alto a destra, fra il marchio e i tre puntini, c'e' una terza pastiglia:
**EN** porta la pagina in inglese, **IT** la riporta in italiano. La scelta
resta in `localStorage` e vale per tutte le pagine successive.

Non ci sono pagine doppie. `assets/i18n.js` tiene la corrispondenza fra le
stringhe italiane e quelle inglesi — 394 voci, che coprono ogni testo visibile
delle 27 pagine, piu' i titoli, le descrizioni, i testi alternativi delle
immagini e le etichette animate. Il resto del file scambia i testi nel
documento e aggiorna `<html lang>`.

**Se si cambia un testo nell'HTML va cambiata anche la chiave** in `i18n.js`,
altrimenti quella riga resta in italiano quando si passa all'inglese. Le sigle,
i numeri e i codici di modello non hanno voce e restano come sono.

Il ritorno all'italiano non usa la mappa inversa se puo' evitarlo: l'originale
italiano resta appeso al nodo di testo. Serve perche' l'inglese fa meno
distinzioni — `cesto` e `paniere` sono tutti e due `basket` — e la sola mappa
inversa le appiattirebbe.

**Nota per i motori di ricerca.** L'HTML servito e' quello italiano: la
traduzione avviene nel browser, quindi le pagine si indicizzano in italiano.
Per posizionarsi anche in inglese servirebbero pagine inglesi vere sotto `/en/`,
generate da questo stesso dizionario.

## Versione degli asset

`site.css`, `site.js` e `i18n.js` sono richiamati con `?v=<data>`. Senza, chi ha già
visitato il sito continua a vedere il foglio di stile e lo script vecchi dopo
una pubblicazione. **Va cambiato a ogni modifica di quei file.**

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

### Il fondale della sezione "La resa"

Il riferimento on.energy ha qui un campo luminoso, giallo e profondo. La prima
resa lo inseguiva con otto archi tracciati uno sopra l'altro — bianco, rosa,
arancio, quattro rossi — sommati in `lighter`: sovrapposti si leggevano come
righe colorate, non come luce.

Ora la sorgente è **una sola**, nel rosso del marchio, sotto il bordo inferiore
della sezione: in campo entra solo la parte alta del bagliore, quella che sale,
e si spegne nel nero senza bordi. Raggio e centro si misurano sull'altezza e non
sul lato più lungo, altrimenti su schermo largo il nucleo finisce lontano e
resta un nero piatto. Una velatura di rumore rompe i gradini del gradiente. Con
`prefers-reduced-motion` il campo viene disegnato una volta e resta fermo.

### Provenienza e licenze

| sorgente | usata in | licenza |
|---|---|---|
| Pexels 9033891, "A Machine is Cutting Metal with a Metal Cutting Tool", di Daniel Smyth | testata, 1ª inquadratura | [Pexels License](https://www.pexels.com/license/) |
| Pexels 36438809, "Industrial lathe machine in action" | testata, 2ª inquadratura | [Pexels License](https://www.pexels.com/license/) |
| Pexels 31802320, "Mesmerizing close-up of industrial gears in motion" | testata, 3ª inquadratura | [Pexels License](https://www.pexels.com/license/) |
| `img/immagini/C5D694D8…` — macro della trasmissione | sezione "Sistemi" | materiale del committente |
| [Pexels 17887900](https://www.pexels.com/photo/heap-of-screws-17887900/) — cumulo di truciolo | fascia di `settori` | [Pexels License](https://www.pexels.com/license/) |
| [Pexels 8865187](https://www.pexels.com/photo/close-up-shot-of-a-cnc-machine-8865187/) — mandrino al lavoro | scheda "Tornerie automatiche" | [Pexels License](https://www.pexels.com/license/) |
| [Pexels 10406128](https://www.pexels.com/photo/close-up-photo-of-metal-tool-10406128/) — fresatura | scheda "Officine meccaniche" | [Pexels License](https://www.pexels.com/license/) |
| [Pexels 8956313](https://www.pexels.com/photo/close-up-phot-of-a-cnc-milling-machine-with-metalworking-fluid-8956313/) — foratura col lubrorefrigerante | fascia di `applicazioni` | [Pexels License](https://www.pexels.com/license/) |
| [Pexels 8940820](https://www.pexels.com/photo/steel-bars-in-a-metal-box-8940820/) — spezzoni torniti | scheda "Asciugatura di pezzi minuti" | [Pexels License](https://www.pexels.com/license/) |

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
