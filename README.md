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
assets/site.js          comparse allo scroll, menu mobile, carosello, canvas
assets/fonts/           i quattro tagli usati dal foglio di stile
assets/img/trituratori/ le fotografie dei trituratori, portate a 16:9 e a una
                        resa comune (vedi sotto)
assets/doc/            l'attestato di brevetto del TR1 e il depliant KOMBI
assets/img/kombi/      le fotografie della serie KOMBI, stesso trattamento
assets/img/impianti/   le installazioni per la fascia della pagina impianti
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

Sulle tre pagine dei sistemi (`centrifughe`, `impianti`, `trituratori`) è stata
tolta anche la `page-statement`, la riga che ripeteva la meta description fra la
fotografia e l'elenco delle macchine. Resta dove porta testo suo: `azienda`,
`contatti`, `settori`, `applicazioni`.

## Niente parole evidenziate

I testi correnti non hanno più la prima frase in bianco sul resto in grigio: il
paragrafo corre tutto nello stesso tono. Restano sottolineati solo i
collegamenti veri (mail, telefono, mappa). L'indirizzo nel piè di pagina non è
un collegamento e non è sottolineato — su iOS lo diventava da solo, e il
`<meta name="format-detection">` in testa a ogni pagina lo impedisce.

## Il carosello della fascia immagine

`centrifughe.html`, `impianti.html` e `trituratori.html` hanno la fascia sotto al
titolo montata a carosello: le fotografie si sovrappongono e si alternano in
dissolvenza ogni 2 secondi, con le frecce ai lati e i pallini in basso a sinistra
per scegliere a mano. Le frecce sono le stesse pastiglie a puntini della sezione
"Il metodo" in home, col fondo scuro al posto del rosso perche' qui stanno sopra
la fotografia, e piu' grandi: 28 px sono un bersaglio scomodo per il dito.

La dissolvenza dura 0,55 secondi. Con la cadenza a 2 secondi una sfumatura piu'
lunga terrebbe le figure quasi sempre a mezz'aria: cambiando l'intervallo conviene
rivedere anche questa, in `assets/site.css`.

**Per cambiare le immagini si toccano solo le righe `<img>` nella pagina.** Una
riga per fotografia; la prima porta `class="attiva"` perche' resti visibile se lo
script non parte, le altre `loading="lazy"`. Aggiungerne o toglierne non richiede
di aprire `site.js`: i pallini si contano da sole. Con una sola `<img>` il
carosello non si attiva e la fascia si comporta come prima.

L'intervallo sta in `data-carosello`, in millesimi di secondo.

Il carosello gira solo quando la fascia e' in campo, si ferma sotto il puntatore
o quando un pallino prende il fuoco, si ferma con la scheda del browser in
secondo piano — altrimenti `setInterval` continuerebbe comunque e al ritorno si
troverebbe una figura a caso — e non parte affatto con
`prefers-reduced-motion: reduce`.

I testi alternativi delle nuove fotografie vanno aggiunti anche al dizionario in
`assets/i18n.js`, come tutti gli altri.

## Le fotografie dei trituratori

Sono le uniche immagini del sito servite da qui e non dal repo dei contenuti:
stanno in `assets/img/trituratori/`, ricavate dagli scatti in posa del
committente e portate a 1600x900.

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

Lo script sta in `/tmp` e non nel repo: le immagini sono file finiti, si
sostituiscono mettendo un 16:9 con lo stesso nome.

Lo script che le ha prodotte non e' nel repo: sono file finiti, si sostituiscono
mettendo un'immagine 16:9 con lo stesso nome.

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
