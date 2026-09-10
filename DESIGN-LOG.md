# Registro delle decisioni di progetto

Ogni scelta visiva e tecnica del sito, con la ragione per cui e' stata
presa. In italiano come il sito e come le macchine di cui parla.

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

**La barra di navigazione ci passa sopra e resta leggibile.** Prima spariva: il
piede stava a `z-index:12` e la barra all'11, quindi il rosso la copriva
appena arrivava in fondo alla pagina. Era un errore, non una scelta — il piede
porta `data-nav="dark" data-nav-tone="rosso"` e nel foglio di stile ci sono le
regole `.menu.dark.su-rosso`, scritte apposta per quando la barra passa sul
rosso, che cosi' non entravano mai in funzione. Ora il piede sta a `z-index:4`:
sopra le sezioni della pagina, che arrivano al 3, e sotto la barra.

Sul rosso la pastiglia resta nera, ma il marchio e i tre puntini passano al
chiaro. Il loro rosso e' lo stesso rosso del fondo e sul nero restava spento,
mentre l'EN accanto era gia' chiaro: adesso le tre pastiglie si leggono come un
pezzo solo. Da 834 px in su valgono le regole che c'erano gia', con le pillole
chiare invece che nere — nero su rosso scuro sta a 2:1 e non si legge.


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

## I recapiti in contatti

`contatti.html` e' l'unica pagina che non ha una macchina da mostrare: si
presenta lei. In cima alla **colonna di sinistra** sta il marchio, e sotto il
testo che c'era gia' — quello che chiede di descrivere componente e ciclo. Nel
**riquadro scuro a destra**, al posto dell'elenco degli argomenti, stanno i
recapiti: luogo, telefono, le tre caselle, ognuno con il suo segno.

Le caselle sono **tre**: `info@` per le richieste generali e il dimensionamento,
`service@` per l'assistenza su un impianto installato, `commerciale@` per offerte
e rapporti commerciali. Sotto ognuna la riga che dice a cosa serve, in
monospaziato grigio come le altre etichette: senza, tre indirizzi in fila non
dicono a chi scrivere.

Le righe seguono lo stesso passo dell'elenco puntato che stava li' prima — filo
sopra a ognuna, filo sotto all'ultima — cosi' il riquadro resta quello di sempre.
Il segno di ogni riga e' allineato in alto e non al centro: l'indirizzo va a capo,
e centrato il puntino scivolerebbe in mezzo alle due righe.

Il marchio e' lo stesso tracciato del pie' di pagina. **Non prende tutta la
colonna:** a tutta larghezza diventa un'insegna e si mangia il testo che gli sta
sotto. Sta al 52% della riga da telefono e a `15vw` da 834 px in su.

La pagina e' fatta di **due sezioni sole**: la testata col titolo e questa. Fra
le due c'era una fascia di apertura — «Per rispondere con qualcosa di piu' di un
listino…» — ed e' stata tolta: diceva a parole quello che il testo qui sotto dice
gia' per esteso, e in mezzo restava mezza schermata di nero.

Sono spariti anche il bottone «Scrivi a info@fasemec.com», che ora e' un doppione
dell'indirizzo scritto li' sopra, e l'elenco «Su cosa scrivere», sostituito dai
recapiti. Resta il collegamento alla mappa.

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

## La fascia stretta

La portano le quattro pagine dei Sistemi — `centrifughe.html`, `centrifor.html`,
`trituratori.html`, `impianti.html` — e **tutte e undici le schede prodotto**. A tutta larghezza in
16:9 non ci stava nemmeno in una schermata desktop: su una finestra 1440x900
era 1368x770, cominciava a 327 px dal bordo e finiva a 1097 — restava tagliata
in fondo, e sotto non si vedeva niente.

**Si rimpicciolisce in proporzione, senza toccare il rapporto.** Il tetto e'
`66svh`: da li' esce la larghezza (`66svh x 16/9`) e l'altezza va dietro. Sulla
stessa finestra la fascia diventa **1056x594** e finisce a 921, col titolo sopra
e la sezione dopo che si affaccia. Su una finestra alta o stretta
comanda il `min(100%, …)` e la fascia torna larga quanto la pagina.

**Il rapporto resta 16:9 esatto, quindi la fotografia si rimpicciolisce insieme
al riquadro: non viene ritagliata piu' di prima.** Era stata provata anche la
strada opposta — tenere la larghezza piena e schiacciare l'altezza — ma a 2,24
il trituratore perdeva la cima della tramoggia e i piedi del banco, ed e'
esattamente quello che questo sito non fa.

**Le frecce escono dal riquadro** e vanno nei margini. Il riquadro ritaglia
(`overflow:hidden`), quindi col solo CSS non uscirebbero: e' `site.js` che le
appende alla sezione invece che al carosello quando la sezione porta `stretta`,
e il foglio le rimette ai due lati con `order`. Da telefono non cambia niente —
li' la fascia e' alta un terzo di schermo — e le frecce tornano sopra la
fotografia, dove stavano.

**Le misure dei file bastano e non vanno abbassate.** Il riquadro nuovo chiede
1856 px su schermo desktop a doppia densita' e 1029 px su telefono a tripla: i
file di fascia sono 1600x900 e quelli Centrifor 1400x1050, cioe' gia' dentro
quella forbice. Scendere ancora vorrebbe dire tornare sfocati sul desktop.

Le schede prodotto e le pagine delle Soluzioni tengono la fascia com'era: la
classe si aggiunge a mano, una parola per pagina.

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

## Ingrandire deve mostrare di piu'

La fascia ritaglia in 16:9, e le fotografie di macchina nascono 4:3: nel
ritaglio la cima della tramoggia e il piede della macchina restano fuori.
Finche' la lente riapriva **lo stesso file**, ingrandire faceva vedere la stessa
inquadratura piu' grande, e non serviva a niente.

Ora, dove esiste, l'`<img>` porta **`data-intera`** con lo scatto per intero, nel
rapporto suo e non in quello della fascia, e la lente usa quello:
`im.getAttribute('data-intera') || im.currentSrc || im.src`. Dove l'attributo non
c'e' la lente si comporta come prima.

**Il conto, sulle 101 fotografie che stanno nei caroselli:**

| | quante | cosa succede aprendo la lente |
|---|---|---|
| hanno l'intera | 49 | si vede da x1,16 a x1,78 di area in piu' (mediana x1,33) |
| Centrifor | 25 | il file **e' gia'** la fotografia LM intera: il bianco viene allargato, non tagliato |
| fondali in attesa | 9 | non sono fotografie |
| studio, macchina gia' intera | 15 | il ritaglio 16:9 non taglia niente, c'e' margine intorno |
| dettagli voluti | 3 | inquadrature ravvicinate, non ritagli |

Il **x1,33** e' il caso normale e non e' poco per caso: un 16:9 dentro un 4:3 e'
esattamente un terzo di altezza in meno, ed e' tutto quello che l'originale ha.
I **x1,78** sono i ribalta cassoni, dove l'originale e' verticale (1086x1448) e
la fascia ne mostra poco piu' della meta'.

**Come sono stati ritrovati gli originali.** Le fotografie del sito sono ritagli
di scatti che stanno in `foto_fase/`, senza un elenco che li leghi. Il riscontro
e' automatico: miniatura in bianco e nero normalizzata — cosi' la resa di colore
diversa non conta, conta la figura — e per ogni originale una finestra 16:9 che
scorre in verticale, perche' il ritaglio non e' sempre centrato.

**Il numero da solo non basta, e vanno guardate.** Fra gli abbinamenti giusti ce
ne sono a scarto 0,26 e altri a 0,82; fra quelli sbagliati ce n'erano a 0,42.
Sono state controllate a occhio tutte, appaiate al loro originale. Scartate:
`fd-copertina` finiva su una fotografia di trucioli, `fd1000-01` e `fd650-03`
erano macchine simili ma altre, `fd250-03` era lo scatto giusto ma sul sito ha il
fondo rifatto in studio mentre l'originale e' in reparto — aprirlo avrebbe
cambiato il fondo sotto gli occhi. E quattro «intere» delle Centrifor sono state
tolte perche' non mostravano **niente** di piu' della fascia.

I file si chiamano `<nome>-intera.jpg` e stanno accanto all'originale del sito.
Pesano 11 MB in tutto e nessuno li scarica finche' non si apre la lente.

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

**Via l'elenco "Le opzioni a catalogo".** In fondo alla pagina c'era una
sezione con due colonne, "Centrifughe" e "Disoleatrici", che elencava le opzioni
di macchina. Non si capiva a cosa si riferisse: sul sito tutte e tre le serie si
chiamano *centrifughe disoleatrici*, quindi le due intestazioni non separavano
niente, e le macchine in questione nemmeno stanno in questa pagina — qui ci sono
nastri e ribalta cassoni. Le stesse voci sono gia' al posto giusto, sotto
"Accessori", in ognuna delle tre schede: FD, FCV e LM 660 AG. Tolta la sezione,
l'etichetta sopra il titolo e la descrizione della pagina non promettono piu'
"opzioni di macchina".

Tre voci uscivano solo da qui e ora non stanno piu' da nessuna parte: variatore
di giri per accelerazione e decelerazione controllate, apertura automatica del
coperchio con cilindro pneumatico, kit soffiante ad aria calda. Le traduzioni
restano nel glossario degli elenchi puntati in `assets/i18n.js`, pronte se le
voci trovano una scheda.

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

> **Aggiornamento.** Il fondo prolungato a mano non funzionava; prolungato con
> l'espansione generativa di Photoshop, si'. Vedi *La fascia della FCV, allargata
> davvero* in fondo: i tre scatti stanno ora nella fascia a 16:9, con la macchina
> intera. Il paragrafo qui sopra descrive il tentativo precedente e resta come
> traccia di cosa era stato provato, e perche' non bastava.

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

## Centrifor

Le **Centrifor** sono le disoleatrici automatiche di LM Industry: `centrifor.html`
con le tre schede in `prodotti/centrifor-mod-270|480|660.html`. Testi e
fotografie vengono dalle pagine LM
(`lm-industry.com/centrifugal-solutions/centrifugal-products/disoliatura-con-caricoscarico-aut/`
e le tre schede collegate), riscritti nel modo in cui parla il resto del sito.

**Non ci sono tabelle, perche' non ci sono dati.** LM non pubblica ne' portate,
ne' diametri, ne' potenze: la «scheda tecnica» che le tre pagine offrono in
scarico e' un depliant di una facciata, uguale per tutti e tre i modelli, con
la stessa frase in italiano, inglese e tedesco e nessun numero. Le altre schede
del sito hanno tutte la loro `section.specs`; queste tre no, ed e' un punto
aperto in attesa dei numeri, non una dimenticanza. Quello che c'e' scritto viene
o dalla frase di LM o da quello che si vede nelle fotografie: niente e' stato
dedotto. Anche il significato dei numeri 270, 480 e 660 non e' scritto da
nessuna parte, quindi in pagina restano nomi e basta.

**Sulle macchine si legge il marchio LM, non Fase.** Sono le fotografie di LM e
non sono state ritoccate su quel punto.

**Le fotografie restano sul bianco di LM.** Un primo tentativo le aveva
scontornate per posarle sul grigio delle altre schede: il ritaglio sbagliava in
troppi punti. Ora non si tocca niente. La fascia e' **16:9 come tutte le altre
del sito**, e gli scatti di LM — che sono 4:3 o 3:4 — ci entrano **allargati col
loro stesso bianco**, non ritagliati: la macchina resta intera e la fascia ha la
misura delle altre pagine dei Sistemi. Gli scatti fatti in reparto, che il bianco
non ce l'hanno, si ritagliano al centro e per loro c'e' la versione intera che
apre la lente.

**Perche' sembravano sgranate, e cosa si e' fatto.** Gli originali di LM sono
**800x600** e file piu' grandi non esistono: provati i tagli `-scaled`,
`-1024x768`, `-1536x1152`, `-2048x1536`, tutti 404; i collegamenti «full size»
delle loro pagine rimandano a quegli stessi file, e le immagini dentro
`Centrifor.pdf` sono piu' piccole. L'ingrandimento va fatto comunque, perche' un
telefono a tripla densita' chiede piu' pixel di quelli. Si fa qui una volta sola,
in tre passaggi:

1. **antigrana che rispetta i bordi** — media pesata sulla somiglianza locale su
   sette spostamenti. Toglie la grana e i quadretti del JPEG di LM sui fondi
   piatti. **E' questo il passaggio che mancava:** senza, la nitidezza applicata
   dopo esaltava quei difetti invece di toglierli, ed e' il motivo per cui le
   fotografie continuavano a sembrare sgranate.
2. **Lanczos** alla misura finale.
3. **maschera di contrasto mite**, 70% con soglia 2 — la soglia lascia stare i
   fondi appena ripuliti invece di rigranularli.

Le misure finite: **1600x900** per fasce e caroselli, come il resto del sito, e
**1000x1000** per le copertine.

**La pagina di sezione e le tre schede sono uguali a tutte le altre.**
`centrifor.html` ha la stessa struttura di `trituratori.html` e
`centrifughe.html` — testata, fascia `media-band stretta`, elenco delle macchine
— e le tre schede hanno la fascia delle altre schede prodotto. Misurato a 1440x900:
22 px fra titolo e fascia, 591 px di fascia, 42 px fino alla sezione dopo, identici
sulle tre pagine dei Sistemi.

C'era anche un testo di apertura fra la fascia e l'elenco delle macchine. E' stato
tolto: le altre pagine dei Sistemi non ce l'hanno, e quello che diceva sta gia'
nelle tre schede.


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

## Le tabelle delle taglie

**Stanno in cima, non in fondo.** Su ogni scheda prodotto la sezione `specs`
viene subito dopo il carosello: prima le fotografie della macchina, poi le
taglie, e solo dopo il testo e gli elenchi.

**La tabella e' larga quanto la pagina** e la fotografia le passa **sopra**,
appoggiata a destra e all'altezza della riga che si sta guardando — come
nell'elenco delle news. La riga porta `data-foto`, `site.js` costruisce un
riquadro per blocco, ne cambia la sorgente al `mouseenter` e gli scrive il
`top` calcolato sulla riga. Solo da 834 px in su: da telefono non c'e' un
cursore da seguire, e la fascia in cima mostra gia' le macchine.

**Le righe senza `data-foto` non fanno comparire niente.** Non e' una
dimenticanza: e' che di quella taglia non esiste uno scatto, e la macchina
sbagliata sarebbe peggio del niente.

Sulla scheda FD la fotografia sta **solo sulla prima tabella**, «Taglie
disponibili». Nella seconda, «Resa per materiale», le righe sono le stesse
macchine ma il discorso e' un altro — i chilogrammi all'ora per materiale — e
rivedere la stessa fotografia una seconda volta non aggiungeva niente.

| scheda | righe | con fotografia | da dove viene |
|---|---|---|---|
| serie FD | 6 | **tutte** | uno scatto per taglia, dalla 250 alla 1000 |
| KOMBI | 4 | **tutte** | i quattro disegni etichettati del depliant `assets/doc/kombi.pdf` |
| serie TR-Dual | 5 | **tutte** | vedi sotto |
| serie TR (orizzontale) | 2 | **tutte** | TR 1 e TR DUAL |
| serie LM AG | 4 | 3 | manca la 550, che LM non fotografa |
| serie FCV | 2 | 0 | la serie non ha ancora fotografie |

**Le quattro KOMBI vengono dal depliant.** Il PDF porta i disegni delle quattro
configurazioni gia' etichettati — KOMBI-40, 40 D, 40 T, 40 DT — e si distinguono
a occhio: la vasca dragante in basso a destra, il trituratore TR1 a sinistra.
Sono stati ritagliati dalla resa del PDF a 3960x5600 (i riquadri bianchi
individuati per contrasto, non a mano) e portati a 1600x900 allargando col
bianco.

**Il TR-Dual e' un accoppiamento ragionato, non certo.** Le fotografie sono
della famiglia, non delle singole taglie: una TR6-22 e una TR7-30 si somigliano.
L'accoppiamento segue allora la colonna **Movimentazione** della tabella stessa:
alle due meccaniche vanno le macchine senza idraulica, alle tre idro gli
allestimenti con la centralina — fino alla centralina sola sulla TR7-30. Se
arrivano scatti per taglia, si cambia una riga per volta.

## Il titolo delle schede, su due righe

Sopra la famiglia, sotto la serie: «Centrifughe disoleatrici» / «Serie LM AG»,
come nelle schede d'elenco. Il taglio e' su « serie » o « mod. »; le schede degli
impianti, che non hanno ne' l'una ne' l'altro, restano su una riga.

Da 834 px in su il titolo prende **tutta la riga** e non sedici colonne su
ventiquattro: a sedici, «Centrifughe disoleatrici a ciclo continuo» non ci stava
e «continuo» andava a capo da solo. I titoli corti non cambiano — la larghezza
conta solo quando il testo va a capo.

## La serie LM AG

**Il nome.** Era «Centrifughe disoleatrici serie LM 660 AG». Il 660 e' solo una
delle taglie — LM la presenta come «centrifughe disoliatrici ad alti giri» con
quattro modelli, **550, 660, 800, 950** — quindi il numero e' uscito dal nome e
la serie si chiama **LM AG**. Cambiato in `centrifughe.html`, nella scheda della
serie, nelle schede FD e FCV che la richiamano, e nel dizionario inglese. Il
file della scheda si chiamava ancora `disoleatrici-serie-dk.html`: oggi e'
`prodotti/disoleatrici-alti-giri-serie-lm-ag.html` — vedi *Gli indirizzi delle
schede* in fondo.

**Le fotografie.** Prima la scheda aveva un solo segnaposto nero. Ora porta un
carosello di **dieci** scatti presi dalle pagine LM
(`lm-industry.com/centrifugal-solutions/centrifugal-products/disoliatrici-alti-giri/`
e le quattro schede collegate): prima le macchine intere — il 660 grigio, il 660
verde, il mod. 800 di fronte, il mod. 800 col quadro a fianco, la versione blu,
il mod. 950 — poi le due viste col coperchio alzato e i due dettagli
dell'aggancio. La copertina sulle schede di elenco e' il 660 grigio.

Stessa lavorazione delle Centrifor: fondo bianco tenuto, formato 16:9 ottenuto
allargando col bianco invece che ritagliando, e i tre passaggi di nitidezza
(antigrana che rispetta i bordi, Lanczos, maschera mite 70/2). Misure finite
**1600x900**, copertina **1000x1000**. I due dettagli, che il bianco non ce
l'hanno, si ritagliano e hanno la loro versione intera per la lente.

Il mod. 950 e' l'unico che LM pubblica piu' grande di 800x600: e' **1200x822**.
Gli altri sono 800x600 e file maggiori non esistono — riprovati anche qui i
tagli `-scaled`, `-1024x768`, `-1536x1152`, `-2048x1536`, tutti 404.

**La tabella e' stata rifatta sui dati di LM.** Portava DK 55, DK 70 e DK 80 —
elencazione che con LM non tornava. Ora porta le quattro taglie della scheda
tecnica `Centrifughe550660800950.pdf`, scaricabile dalla pagina del mod. 800:

| Modello | kW | Ø cesto | Portata | Volume paniere | Giri/min |
|---|---|---|---|---|---|
| LM AG 550 | 4 | 550 | 100 kg | 70 l | 800 |
| LM AG 660 | 5,5 | 660 | 150 kg | 115 l | 700-750 |
| LM AG 800 | 7,5 | 800 | 200 kg | 220 l | 650 |
| LM AG 950 | 11 | 950 | 200 kg | 320 l | 600 |

Lo stesso PDF porta anche gli ingombri A-F, ma sono lettere che rimandano a un
disegno quotato che sul sito non c'e': senza il disegno non direbbero niente e
sono state lasciate fuori.

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

**I nomi dei file sono stati allineati dopo.** Qui erano rimasti com'erano —
`prodotti/centrifughe-asciugatrici-serie-fcv.html` diceva ancora «asciugatrici»
sotto un titolo che dice «disoleatrici» — per non cambiare l'indirizzo di una
pagina gia' pubblicata. Il committente ha poi chiesto che l'indirizzo dica
quello che la pagina mostra: i file sono stati rinominati e dal vecchio
indirizzo parte un rimando, come questa nota chiedeva. Vedi *Gli indirizzi
delle schede*.

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

`site.css`, `site.js` e `i18n.js` sono richiamati con `?v=<data>`. Oggi vale
`?v=20260910d`. Senza, chi ha già
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

## Il pie' di pagina da tavoletta

**Cosa si vedeva.** Da 834 a 1279 px la nota in fondo — partita IVA, direzione e
coordinamento, link legali — sta in una fascia larga meta' schermo: dodici
colonne su ventiquattro, 391 px a 834, 560 a 1194. La sola riga della partita
IVA ne chiede 388 a corpo 1,4 rem, e i due link legali altri 176 di fianco.
Non ci stavano. Andavano a capo tutti e tre — «Policy / Privacy», «Cookie /
policy», una parola per riga — e il marchio LM, che il `space-between` spinge a
filo della riga, si trovava a filo di una riga spezzata in due: finiva staccato
dal testo, in mezzo al niente. In inglese e' anche peggio: `VAT IT03166770242`
misura 392 px, quattro decimi in piu' della fascia a 834.

**Cosa si e' fatto.** Da 834 a 1279 px la nota si impila invece di correre in
riga: partita IVA, direzione e coordinamento col marchio in coda, link legali
sotto. `align-items:flex-start` stringe la nota sulla riga piu' lunga, e il
`space-between` che era il problema torna a essere la soluzione: il marchio LM
finisce esattamente a filo dell'ultima cifra della partita IVA sopra, che era il
disegno voluto dall'inizio. Il corpo scende a 1,3 rem — il minimo che tiene su
una riga anche l'inglese, con trenta pixel di margine invece di meno uno.

**Da 1280 px in su non cambia niente**: li' la fascia misura 601 px e i due
blocchi ci stanno affiancati con 26 px di stacco, che salgono a 40 a 1366 e a
215 a 1920. Il punto di cambio e' 1280 perche' e' li' che lo stacco smette di
essere zero.

Misurato su venti pagine a 834, 900, 1024, 1194, 1279, 1280, 1366, 1440, 1920 e
2560 px, in italiano e in inglese: ogni riga sta su una riga, il marchio e' a
filo, e la nota resta allineata in basso col marchio Fase a sinistra.

**Fuori dal pie' di pagina sono uscite due voci.** L'elenco portava dieci
collegamenti; «Applicazioni» e «Settori» sono stati tolti su richiesta del
committente. Restano nel menu, sotto «Soluzioni», e le pagine non sono state
toccate: e' solo il pie' di pagina che ne parla piu'.

## Le tabelle non si chiudono in fondo

Ogni voce di `dot-list` porta il bordo **sopra**, e l'ultima portava anche
quello sotto: una riga di chiusura che sigillava l'elenco come il bordo di una
tabella. Stessa cosa per `spec-table`, dove il `border-bottom` sta su ogni `td`,
ultima riga compresa. Il risultato era una riga orizzontale a pochi millimetri
dall'inizio della sezione seguente, che non separava niente — sotto non c'era
altro da separare.

Tolte tutte e due: `.dot-list li:last-child` non ha piu' il bordo sotto e
`.spec-table tbody tr:last-child td` nemmeno. Le voci restano separate dal bordo
alto di ciascuna e le righe della tabella dal loro, l'intestazione tiene la sua
sottolineatura. Le due classi vivono solo nelle undici schede prodotto, quindi
la modifica non tocca nient'altro; verificate una per una.

## Le fotografie della FCV, e la fascia delle centrifughe

**La FCV aveva tre fondali neri** al posto del carosello, e un rettangolo nero al
posto della copertina. I tre ritagli 16:9 (`fcv-01`, `fcv-02`, `fcv-03`) e il
quadrato (`fcv-copertina`) erano gia' in cartella da quando furono lavorati:
qui sopra sta scritto perche' erano rimasti fuori — la macchina riempie il
fotogramma verticale e il ritaglio orizzontale non era piaciuto. Il committente
ha chiesto di usarli, e sono entrati in pagina. Quei ritagli sono poi stati
rifatti da capo — vedi *La fascia della FCV, allargata davvero* — perche' anche
al committente non piacevano: mostravano il coperchio, non la macchina. La
copertina va nelle tre schede che richiamano la serie — `centrifughe.html`, FD,
LM AG.

**Manca ancora la fotografia per riga di tabella.** Le altre serie hanno
`data-foto` sulle righe delle taglie; la FCV no, e non per dimenticanza. Le due
taglie sono FCV 350 e FCV 475, le macchine fotografate sono due — una blu col
fusto rastremato, una avorio a cilindro pieno — ma niente nelle fotografie o nei
nomi dei file dice quale sia quale, e la cartella vecchia, che altrove porta il
modello nel nome, per la FCV ha tre file con nomi generati. Vale la regola
scritta sopra: la macchina sbagliata sarebbe peggio del niente. Basta sapere
quale scatto e' il 350 e quale il 475 e le due righe si collegano.

**La fascia di `centrifughe.html`** portava gli stessi tre fondali neri. Adesso
porta **nove** scatti, che e' la misura delle altre pagine di famiglia. Il criterio
e' uno solo, e si vede a scorrerlo: le tre serie si danno il cambio a giro — FD,
LM AG, FCV, e da capo — cosi' che nessuna compaia due volte di fila e nessuna
faccia da comparsa. Si apre sulla FD 650, che e' la macchina piu' presentabile
della famiglia, e le due chiuse sul dettaglio — il cesto estratto della FCV, il
coperchio della LM AG sollevato dal cilindro — stanno in coda, dopo che le
macchine intere hanno fatto il loro giro. Le due che hanno lo scatto per intero
portano `data-intera`. Il conto: quattro FD (650, 1000, 500, 250), tre LM AG,
due FCV — che e' la proporzione delle taglie a catalogo, sei, quattro e due.

`centrifughe/attesa.jpg` e `su-grigio/placeholder-nero.jpg` non sono piu'
richiamati da nessuna pagina. Restano in cartella come gli altri file di
riserva.

## La FD 500 senza il quadro elettrico

La quarta figura del carosello FD — `fd500-01`, che viene da `FD500_3` — teneva
in campo la macchina **e l'armadio elettrico** che le sta di fianco: due oggetti
in una figura che ne racconta uno. L'armadio e' stato tolto.

**Come.** Il fondo e' un grigio da studio, liscio, con la sola curva della luce:
l'armadio, dal montante alla sua ombra sul pavimento, sta fra x 983 e x 1347 e
li' dentro non passa niente della macchina, che finisce a 980. Le colonne sono
state rifatte con una rampa per riga fra le due colonne pulite ai lati, piu' il
profilo dello scarto misurato sulle righe intatte — le cinquanta in alto e le
quindici in basso — interpolato verticalmente, piu' grana gaussiana a 0,5 livelli,
che e' la grana del fondo misurata. Su righe tenute fuori dal calcolo il modello
sbaglia al massimo 4,4 livelli su 255, in media 0,9: sotto la soglia di un
gradino visibile. Nessun pixel copiato da un'altra zona — copiare portava dentro
l'ombra dell'armadio, che e' quello che si voleva togliere.

**Poi la macchina e' stata rimessa in mezzo.** Tolto l'armadio restava a
sinistra, col centro a 657 invece che a 800. E' stata spostata di 143 px e il
margine scoperto a sinistra e' stato riempito prolungando il fondo: la stessa
grana, traslata, meno la pendenza della riga per 143 px, cosi' il gradiente
prosegue invece di ripartire. La giunta misura 0,20 livelli di scarto medio, che
e' quanto misura la differenza fra due colonne qualsiasi del fondo originale:
non c'e' una giunta, c'e' il rumore.

**Il file originale non e' stato toccato.** Il ritocco sta in
`fd500-01-senza-quadro.jpg`, 1600x900, 110 KB, progressivo come gli altri;
`fd500-01.jpg` resta in cartella con gli altri file di riserva. Cambia anche
l'alternativa, che diceva «con l'armadio elettrico a fianco».

## Gli indirizzi delle schede

Il committente ha chiesto che l'indirizzo di ogni pagina dica quello che la
pagina mostra. Quattro non lo dicevano:

| prima | adesso | perche' |
|---|---|---|
| `prodotti/disoleatrici-serie-dk.html` | `prodotti/disoleatrici-alti-giri-serie-lm-ag.html` | la serie non si chiama piu' DK da quando la tabella e' stata rifatta sui dati LM |
| `prodotti/centrifughe-asciugatrici-serie-fcv.html` | `prodotti/disoleatrici-serie-fcv.html` | il titolo dice «disoleatrici» da quando i tre nomi sono stati uniformati |
| `prodotti/trituratori-asse-orizzontale-serie-tr.html` | `prodotti/trituratori-asse-orizzontale-serie-tr1.html` | la serie e' TR1, non TR |
| `prodotti/trituratori-asse-verticale-serie-trw.html` | `prodotti/trituratori-asse-verticale-serie-tr-dual.html` | la serie e' TR-Dual, non TRW |

**Dal vecchio indirizzo parte un rimando.** Al posto di ognuno dei quattro file
c'e' una paginetta che non e' una pagina: `noindex`, `canonical` al nuovo
indirizzo e un `meta refresh` immediato. Serve perche' chi arriva da un
collegamento esterno o dai motori non trovi un 404 — e' quello che chiedeva la
nota in *Come si chiamano le centrifughe*. Si tolgono quando i vecchi indirizzi
non girano piu'.

`kombi.html` resta com'e': e' corto, ma «kombi» e' il nome della serie e la
pagina mostra la serie KOMBI. Tutti gli altri indirizzi — le tredici pagine di
primo livello, le sette news, le sette schede rimaste — sono stati confrontati
uno per uno col titolo che portano.

**Il nome della serie LM AG, in alto.** La scheda diceva «Centrifughe
disoleatrici / Serie LM AG», senza dire cosa distingue la serie. Adesso dice
**«Centrifughe disoleatrici ad alti giri / Serie LM AG»**, con lo stesso taglio
della FD, che dice «a ciclo continuo». «AG» sta per alti giri, come e' scritto
piu' sopra. Cambiato in titolo, filo di navigazione e `<title>`, e nel
dizionario inglese: *High-speed oil-removal centrifuges*. Le schede dell'elenco
tengono il nome corto «Centrifughe disoleatrici», come gia' fanno per la FD.


## La fascia della FCV, allargata davvero

**Il ritaglio non andava.** Messi in pagina, i tre ritagli 16:9 mostravano il
coperchio e il quadro, non la macchina: gli scatti sono verticali e la macchina
occupa l'85-90% dell'altezza, quindi un 16:9 preso dentro il fotogramma prende
una fetta. Accanto alle FD, che si vedono per intero, leggevano come primi piani
finiti li' per sbaglio. Il committente lo ha detto in due parole.

**Il fondo prolungato, questa volta con l'espansione generativa.** Piu' sopra sta
scritto che allargare il fondo a mano non aveva funzionato: veniva una fascia
liscia attorno alla macchina, senza le macchie del pavimento, e si leggeva come
un alone. Rifatto con `image_generative_expand` di Photoshop — 744 px per lato
sui 1086 di partenza, che porta il fotogramma a 2574x1448, cioe' 16:9 esatto — il
fondo si prolunga con la sua struttura: il muro grigio, il battiscopa che
continua alla stessa quota, il cemento con le sue macchie. Le tre uscite sono
state guardate una per una: nessun oggetto inventato, nessuna parte di macchina
aggiunta, la linea del battiscopa continua senza scalini. Poi Lanczos a 1600x900
e la solita maschera mite 70/2, come per ogni figura ridotta.

**Cosa e' generato e cosa no.** Il 58% della larghezza del fotogramma finale non
c'era nello scatto: e' muro e pavimento calcolati dal modello. La macchina no —
quella e' la fotografia, intatta, e nessun dato tecnico viene da li'. Vale la
distinzione che questo quaderno fa dappertutto: si prolunga il fondo, non si
inventa la macchina.

**La lente mostra lo scatto vero.** `fcv-01` e `fcv-02` non avevano `data-intera`
e cliccare la fascia rimostrava lo stesso ritaglio — da cui «non vedo le foto per
intero». Adesso tutte e tre portano `data-intera` verso `fcv-01-intera`,
`fcv-02-intera`, `fcv-03-intera`: i tre scatti come sono stati fatti, 1086x1448,
senza un pixel aggiunto. Chi clicca esce dal fotogramma allargato e vede la
fotografia. `.lente-foto` ha `object-fit:contain`, quindi si vede tutta.

## La copertina della FCV

Era **un ritaglio della macchina blu** sul pavimento di cemento, tagliato in cima
e a destra: accanto alle sorelle — la FD blu su grigio chiaro, la LM AG avorio su
bianco, tutte e due macchine intere, centrate, su fondo liscio — non stava.

**Rifatta come le altre.** Ritaglio del soggetto con `image_remove_background`
sullo scatto blu, e la macchina rimessa su fondo pieno **#dcdcdc**, che e' il
grigio che il foglio di stile mette gia' sotto le miniature e lo stesso della
copertina FD. Nessuna ombra di contatto: non ce l'hanno nemmeno le due sorelle,
il fondo li' e' piatto. Misure: macchina 652x800 dentro il quadrato da 1000,
**174 px di margine ai lati, 100 sopra e sotto**, centrata sul suo ingombro.

Il ritaglio e' stato guardato da vicino nei due punti che di solito si rompono —
le asole della maniglia in acciaio e il piede con il foro di ancoraggio: passano
tutte, senza frangia chiara del vecchio fondo. Il colore medio dei pixel di bordo
sta sui 122-131, che e' il bordo della macchina, non il muro dietro.

**E' rimasta la macchina blu.** Lo scatto avorio e' stato provato — la sua
prospettiva e' un po' piu' frontale — ma il blu tiene tre cose: e' la macchina
che la scheda gia' mostrava, e' la stessa che apre la fascia, e la sua sagoma e'
piu' larga in proporzione, come quelle delle sorelle. Il ritaglio avorio resta
fattibile in un minuto se si preferisce.


## Le copertine degli impianti, senza la riga sotto il nome

Ogni scheda dell'elenco portava, sotto il nome della serie, una riga di
spiegazione: «Alimentazione continua, dati secondo Industria 4.0», «Piu'
materiali trattati senza contaminazione», «Fino a 400 kg/h su base
pallettizzata». Il committente le ha volute via dalle **tre schede degli
impianti** — nove punti in tutto, fra `impianti.html` e le sezioni «Le altre
serie» delle tre schede prodotto. Le altre famiglie tengono la loro riga.

**Il nome si e' dovuto ricentrare.** Da 834 px in su `.expertise-card .content`
allinea in alto: tolta la riga sotto, il nome restava appeso in cima con tutta
l'aria della fotografia sotto di se'. Quando il nome e' l'unica cosa nel
riquadro adesso si centra sull'altezza, che e' gia' quello che il riquadro fa da
telefono. Regola sola, su `:has(>.name:only-child)`: le schede che la riga ce
l'hanno ancora non cambiano di un pixel.

Cambiata anche l'intestazione della sezione: **«3 serie a catalogo, dimensionate
sulle vostre esigenze»**, dove prima diceva «dimensionate sul reparto». Solo qui:
`centrifughe.html` e `trituratori.html` portano ancora la formula vecchia, e
nessuno ha chiesto di toccarle.

## Via i riferimenti a Industria 4.0

Dalla scheda **a ciclo continuo**, perche' i decreti a cui si appoggiavano sono
stati modificati e la dicitura non regge piu'. Erano quattro punti:

| dove | prima | adesso |
|---|---|---|
| `<meta name="description">` | Alimentazione continua, dati secondo Industria 4.0 | Alimentazione continua, dati di processo archiviati |
| etichetta sopra il titolo | idem | idem |
| dati in evidenza, «Gestione» | elettrica e analogica, Industria 4.0 | elettrica e analogica |
| «Caratteristiche», prima voce | Gestione elettrica e analogica secondo la direttiva Industria 4.0 | Gestione elettrica e analogica dell'impianto |

Il fatto tecnico resta: la gestione e' elettrica e analogica, i dati si
archiviano, il software e' dedicato, l'assistenza e' da remoto. Quello che
sparisce e' il richiamo alla norma, non la macchina. Aggiornato anche il
dizionario inglese.

**Restano fuori due punti, e vanno segnalati.** `index.html` porta una voce di
metodo intitolata «Industria 4.0 e teleassistenza», e `applicazioni.html` scrive
«la gestione elettrica e' predisposta secondo la direttiva Industria 4.0». La
richiesta parlava della sola scheda a ciclo continuo, e la copy di quelle due
pagine non e' stata toccata: se il motivo e' quello dei decreti, valgono anche
li'.

## La scheda a paniere estraibile, dopo il taglio

Via il dato in evidenza **«Mantello / forato, sotto il trasportatore»**. Ne
restava uno solo, «Cesto / con bacino di contenimento liquidi», e la griglia dei
dati e' a due colonne: la voce si stringeva a meta' fascia con l'altra meta'
vuota di fianco. Da telefono quella meta' e' 175 px e la riga andava a capo per
niente. Adesso, quando la voce e' sola, prende tutta la larghezza che ha —
`.key-grid:has(>.key-item:only-child)`.

**In «Caratteristiche» la riga sul mantello e' rimasta**: «Mantello forato da
inserire sotto il trasportatore della macchina utensile». E' una frase diversa,
in un elenco diverso, e la richiesta citava il dato in evidenza. Se il mantello
non e' piu' in offerta va tolta anche di li'; se era solo che in cima non ci
stava bene, sta dov'e'.

## Il pulsante: «Contattaci»

L'invito in barra e in fondo diceva **«Parla con un tecnico»**; adesso dice
**«Contattaci»**. Sessantadue punti, due per pagina, su trentuno pagine, piu' il
dizionario inglese — *Get in touch*.

**L'indirizzo non e' cambiato.** Il pulsante puntava e punta a `contatti.html`,
e quella pagina si chiama «Contatti» nel titolo, nella briciola di pane e nelle
due voci di elenco. Rinominarla `contattaci.html` avrebbe rotto la regola scritta
in *Gli indirizzi delle schede* — l'indirizzo dice quello che la pagina mostra —
o costretto a rinominare anche la voce di menu. Chiesto al committente, che ha
scelto di cambiare la sola etichetta del pulsante.

## Una correzione ai dati

`FD 350`, resa in **ottone**: da 525 a **600 kg/h**, su indicazione del
committente. La colonna resta l'unica toccata della tabella.


## Le schede con un elenco solo

**Quattro schede su undici non hanno "Accessori"**: le due degli impianti e le
due dei trituratori. Portano solo "Caratteristiche", e `.detail-cols` da 834 px
in su e' a due colonne: l'elenco stava a sinistra e la meta' destra restava
vuota sotto il titolo, per tutta l'altezza della sezione. Non era aria, era un
buco — e sulla scheda a paniere estraibile, dove sopra c'e' un solo dato in
evidenza, la pagina risultava vuota da meta' in la'.

**L'elenco solo si prende tutta la larghezza, e va su due colonne.** Cosi' la
sezione pesa quanto quella delle schede che di elenchi ne hanno due, e la pagina
torna piena fino al margine destro. Le colonne sono quelle del CSS multi-colonna,
quindi le voci si leggono in giu' e poi a destra, come si legge un elenco: le
prime tre a sinistra, le altre tre a destra. `break-inside:avoid` tiene ogni
voce col suo bordo, intera.

Misurato da 1024 a 1920 px sulle quattro schede: ogni voce sta su una riga sola.
Fra 834 e 950 px un paio di voci lunghe vanno a capo — ma prima, in mezza
colonna, ci andavano tutte. Da telefono non cambia niente: la regola vive dentro
`min-width:834px` e sotto l'elenco resta a una colonna, come sempre.

**Le altre sette schede non cambiano di un pixel**: la regola guarda
`:has(>.list-block:only-child)`, e dove i blocchi sono due non si applica.

## Il dato che porta due valori

Sulla scheda KOMBI la portata truciolo e' «150 kg/h KOMBI-15, 400 kg/h
KOMBI-40». Su una riga sola non ci stava e il ritorno a capo cadeva dentro il
nome del modello: si leggeva «KOMBI-» sopra e «40» sotto. Ora i due valori sono
due `<span>`, uno per riga — `.key-value span{display:block}`, lo stesso modo in
cui le schede dell'elenco mandano a capo la sigla della serie. E' l'unico dato
del sito che porta piu' di un valore; se ne arrivano altri, la regola c'e' gia'.


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
