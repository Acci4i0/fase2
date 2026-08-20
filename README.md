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

### I due filmati della home

Stanno in `assets/video/`, montati e gradati per questo sito. Ogni sorgente
esiste in due tagli, 16:9 e 9:16: la scelta avviene al caricamento in base alla
larghezza dello schermo, così su telefono non si scarica il file da desktop e
non si butta via metà inquadratura in un ritaglio.

| file | dove | durata | peso |
|---|---|---|---|
| `hero-16x9.mp4` / `hero-9x16.mp4` | testata | 8,1 s in ciclo | 2,2 MB / 929 KB |
| `seq-16x9.mp4` / `seq-9x16.mp4` | sezione agganciata allo scroll | 16,1 s scorrimento | 1,7 MB / 885 KB |

La testata monta tre inquadrature con stacco netto, circa 2,5 s l'una. La
sezione agganciata è una ripresa continua senza stacchi: lo scroll ne governa
il tempo con una curva che consuma gran parte del filmato nella prima metà e
decelera in chiusura, così l'uscita dal blocco si posa invece di fermarsi.

**Le riprese scorrono solo se il server risponde alle richieste Range.**
GitHub Pages lo fa. `python3 -m http.server` no: in locale la sezione
agganciata resta ferma sul primo fotogramma, e non è un difetto del sito.

### Provenienza e licenze

| sorgente | usata in | licenza |
|---|---|---|
| `img/foto:video_tutto/Trituratori_TR4-6-7/VID_TR_ALLUMINIO.mp4` — riprese Fase | testata, 2ª e 3ª inquadratura | materiale del committente |
| Pexels, video 9033891, "A Machine is Cutting Metal with a Metal Cutting Tool", di Daniel Smyth | testata, 1ª inquadratura | [Pexels License](https://www.pexels.com/license/) — uso commerciale consentito, attribuzione non richiesta |
| Pexels, video 31016924, "High-Speed Lathe Metalworking in Factory" | sezione agganciata allo scroll | [Pexels License](https://www.pexels.com/license/) — uso commerciale consentito, attribuzione non richiesta |

La Pexels License consente l'uso commerciale e la modifica senza attribuzione.
Vieta la redistribuzione del materiale come stock su altre piattaforme, l'uso
come marchio e l'uso che implichi un'approvazione da parte di persone o aziende
riprese: niente di tutto questo avviene qui. Nei due spezzoni esterni non
compaiono marchi né macchinari identificabili di terzi.

Le due fonti sono state portate alla stessa resa — desaturazione, temperatura
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
