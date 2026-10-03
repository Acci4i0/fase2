/* =====================================================================
   Traduzione italiano -> inglese.

   Il sito resta un solo insieme di pagine in italiano: qui c'e' la
   corrispondenza fra le stringhe italiane e quelle inglesi, e il pulsante
   che scambia i testi nel documento. Niente pagine doppie da tenere
   allineate a mano.

   La chiave e' il testo italiano cosi' come compare nella pagina, con gli
   spazi normalizzati. Se si cambia un testo nell'HTML va cambiata anche la
   chiave, altrimenti quella riga resta in italiano.
   ===================================================================== */
(function(){
'use strict';

var EN = {
/* --- navigazione, pie' di pagina, ricorrenti ----------------------- */
"Sistemi":"Systems",
"Soluzioni":"Solutions",
"Centrifughe":"Centrifuges",
"Impianti":"Systems and lines",
"Trituratori":"Shredders",
"Applicazioni":"Applications",
"Settori":"Sectors",
"Azienda":"Company",
"News":"News",
"Contatti":"Contact",
"Home":"Home",
"Contattaci":"Get in touch",
"Apri il menu":"Open the menu",
"Chiudi il menu":"Close the menu",
"Percorso":"Breadcrumb",
"LinkedIn":"LinkedIn",
"LM Industry":"LM Industry",
"Fase":"Fase",
"Fase Mechanical Engineering — home":"Fase Mechanical Engineering — home",
"Policy Privacy":"Privacy policy",
"Cookie policy":"Cookie policy",
"Impianti su misura delle vostre esigenze.":"Systems tailored to your needs.",
"Via Francesco Crispi 12 — 36056 Tezze sul Brenta (VI)":"Via Francesco Crispi 12 — 36056 Tezze sul Brenta (VI), Italy",
"Via Francesco Crispi 12":"Via Francesco Crispi 12",
"36056 Tezze sul Brenta (VI)":"36056 Tezze sul Brenta (VI), Italy",
"36056 Tezze sul Brenta (VI), Italia":"36056 Tezze sul Brenta (VI), Italy",
"Fase Mechanical Engineering S.r.l.":"Fase Mechanical Engineering S.r.l.",
"info@fasemec.com":"info@fasemec.com",
"© 2026 Fase Mechanical Engineering S.r.l. – P.IVA 03166770242":"© 2026 Fase Mechanical Engineering S.r.l. – VAT IT03166770242",
"Soggetta alla direzione e coordinamento di":"Subject to the direction and coordination of",
"C.F./P.IVA e n. iscriz. R.I. di VI: 03166770242 · N. REA di VI 304063 · Capitale sociale Euro 50.000,00 i.v. · Soggetta alla direzione e coordinamento di LM Industry Srl – Registro Imprese di Vicenza nr. 02739500243":"Tax code / VAT and Vicenza Companies Register no.: 03166770242 · Vicenza REA no. 304063 · Share capital EUR 50,000.00 fully paid up · Subject to the direction and coordination of LM Industry Srl – Vicenza Companies Register no. 02739500243",
"Voce precedente":"Previous item",
"Voce successiva":"Next item",
"Scegli la fotografia":"Choose the photograph",
"Fotografia precedente":"Previous photograph",
"Fotografia successiva":"Next photograph",
"Apri le fotografie a schermo intero":"Open the photographs full screen",
"Fotografia a schermo intero":"Photograph, full screen",
"Chiudi la fotografia":"Close the photograph",
"Apri la sede sulla mappa":"Open our location on the map",

/* --- home ---------------------------------------------------------- */
"Truciolo asciutto.":"Dry chips.",
"Fluido in circolo.":"Coolant back in circuit.",
"Scopri le macchine":"Explore the machines",
"Centrifughe, impianti di trattamento e trituratori: otto serie a catalogo.":"Centrifuges, treatment systems and shredders: eight series in the catalogue.",
"Il nostro lavoro comincia dove finisce la lavorazione meccanica. Il truciolo esce dalla macchina utensile carico di lubrorefrigerante: i nostri sistemi lo separano, recuperano il fluido e restituiscono un truciolo metallico asciutto, pronto per essere valorizzato.":"Our work begins where machining ends. Chips leave the machine tool soaked in coolant: our systems separate the two, recover the fluid and return dry metal chips, ready to be sold on.",
"Sistemi costruiti":"Systems built",
"sul vostro reparto":"around your shop floor",
"I nostri sistemi":"Our systems",
"Ricerca, progettazione e costruzione avvengono all’interno. L’area test interna ci permette di verificare le soluzioni prima della produzione.":"Research, design and manufacturing all happen in house. Our in-house test area lets us verify each solution before production.",
"Ogni reparto":"Every shop floor",
"ha il suo truciolo.":"has its own chips.",
"Ogni reparto ha il suo truciolo":"Every shop floor has its own chips",
"Disoleatrici a ciclo continuo e a cesto estraibile":"Continuous-cycle and removable-basket oil-removal centrifuges",
"Linee automatiche di trattamento e asciugatura":"Automatic treatment and drying lines",
"Frantumazione di trucioli lunghi e matassosi":"Breaking down long and tangled chips",
"Il metodo":"How we work",
"Dal progetto al collaudo":"From design to commissioning",
"Test sul truciolo reale del cliente":"Testing on the customer’s own chips",
"Umidità residua sotto il 2%":"Residual moisture below 2%",
"Il lubrorefrigerante recuperato rientra nel circuito della macchina utensile.":"The recovered coolant goes back into the machine tool circuit.",
"L’area test verifica la resa sul vostro materiale prima della messa in produzione.":"Our test area proves the throughput on your material before it goes into production.",
"Dal truciolo, un valore":"Chips turned into value",
"I nostri impianti riducono l’umidità residua sotto il 2% e permettono il riutilizzo del lubrorefrigerante nel rispetto della normativa vigente. La disoleatura permette la massima valorizzazione del truciolo metallico.":"Our systems bring residual moisture below 2% and allow the coolant to be reused, in compliance with current regulations. De-oiling gets the most value out of metal chips.",
"Ogni impianto nasce da un reparto preciso":"Every system starts from one specific shop floor",
"Il progetto comincia dal materiale da trattare, dal volume di truciolo metallico e dalla misura degli spazi disponibili. Ricerca, progettazione e costruzione avvengono all’interno.":"A project begins with the material to be processed, the volume of metal chips and the measurements of the space available. Research, design and manufacturing all happen in house.",
"Servizio post vendita":"After-sales service",
"Il team tecnico segue l’impianto dalla preparazione del progetto fino al collaudo e prosegue con controlli e manutenzioni programmate. La teleassistenza presente su tutti gli impianti permette di fornire un supporto continuo.":"Our engineers follow the system from design through to commissioning, and carry on with scheduled checks and maintenance. Remote support, fitted on every system, means continuous assistance.",
"La resa":"The return",
"Resa misurata sul materiale":"Return measured on the material",
"Il ritorno si misura su due fronti: il truciolo metallico trattato, che alla cessione viene pagato per il metallo, e il lubrorefrigerante che rientra nel circuito invece di finire nello smaltimento.":"The return shows up on two fronts: treated metal chips, paid for their metal when sold, and coolant that goes back into the circuit instead of into disposal.",
"Scopri l’azienda":"About the company",
"il lubrorefrigerante separato torna in vasca e rientra nel circuito della macchina utensile.":"the separated coolant returns to the tank and back into the machine tool circuit.",
"Oltre 7.000 kg/h.":"Over 7,000 kg/h.",
"Sei taglie di disoleatrice a ciclo continuo, da 250 a 1.000 mm di diametro paniere.":"Six sizes of continuous-cycle oil-removal centrifuge, from 250 to 1,000 mm basket diameter.",
"Vent’anni di centrifugazione industriale":"Twenty years of industrial centrifuging",
"L’esperienza su cui dimensioniamo ogni nuova macchina.":"The experience we size every new machine against.",
"Officine, tornerie e reparti galvanici.":"Machine shops, turning shops and electroplating departments.",
"Progettazione, costruzione e area test a Tezze sul Brenta, in provincia di Vicenza.":"Design, manufacturing and test area in Tezze sul Brenta, province of Vicenza, Italy.",
".000 kg/h":",000 kg/h",

/* --- pagine dei sistemi -------------------------------------------- */
"Le macchine":"The machines",
"3 serie a catalogo,":"3 series in the catalogue,",
"2 serie a catalogo,":"2 series in the catalogue,",
"4 serie a catalogo,":"4 series in the catalogue,",
"dimensionate sul reparto.":"sized around your shop floor.",
"dimensionate sulle vostre esigenze.":"sized around what you need.",
"centrifughe.":"centrifuges.",
"impianti.":"treatment systems.",
"trituratori.":"shredders.",
"Separano il lubrorefrigerante dal truciolo metallico e lo restituiscono asciutto, pronto per la valorizzazione.":"They separate coolant from metal chips and return them dry, ready to be sold on.",
"Linee complete che collegano macchina utensile, trattamento del truciolo metallico e stoccaggio, dimensionate sul reparto.":"Complete lines linking machine tool, metal chip treatment and storage, sized around your shop floor.",
"Riducono il volume della matassa prima della centrifugazione e semplificano stoccaggio e trasporto.":"They cut the bulk of tangled chips before centrifuging and make storage and transport simpler.",
"Frantumazione di trucioli lunghi e matassosi":"Breaking down long and tangled chips",

/* --- schede prodotto: nomi e sottotitoli --------------------------- */
/* --- KOMBI ------------------------------------------------------------ */
"impianto Fase KOMBI completo: tramoggia di carico, elevatore a tapparelle, centrifuga e quadro elettrico":"complete Fase KOMBI system: loading hopper, slat elevator, centrifuge and control panel",
"impianto Fase KOMBI visto di tre quarti, con l\u2019elevatore che sale verso la centrifuga":"Fase KOMBI system seen at three-quarters, with the elevator rising to the centrifuge",
"impianto Fase KOMBI con la tramoggia di accumulo in primo piano e il quadro di comando a fianco":"Fase KOMBI system with the accumulation hopper in the foreground and the control panel alongside",
"impianto Fase KOMBI sul telaio pallettizzato, con il motoriduttore dell\u2019elevatore in vista":"Fase KOMBI system on its palletised frame, with the elevator gearmotor in view",
"testata dell\u2019elevatore a tapparelle di un impianto Fase KOMBI, con lo scarico sulla centrifuga":"head of the slat elevator on a Fase KOMBI system, discharging onto the centrifuge",
"gruppo di scarico di un impianto Fase KOMBI, con il fusto della centrifuga in vista":"discharge assembly of a Fase KOMBI system, with the centrifuge drum in view",
"base pallettizzata di un impianto Fase KOMBI, con le pompe di rilancio e la vasca di recupero":"palletised base of a Fase KOMBI system, with the transfer pumps and the recovery tank",
"coclea della vasca dragante autopulente di un impianto Fase KOMBI":"auger of the self-cleaning dredging tank on a Fase KOMBI system",
"gruppo Fase di trattamento truciolo con trituratore TR1 e disoleatrice FD250, installato in officina":"Fase chip treatment group with TR1 shredder and FD250 oil-removal centrifuge, installed in a machine shop",
"gruppo compatto Fase di trattamento truciolo: nastro di carico, centrifuga e cassone di raccolta":"compact Fase chip treatment group: loading conveyor, centrifuge and collection bin",
"linea Fase di trattamento truciolo con quadro di comando e trasportatore verso la centrifuga":"Fase chip treatment line with control panel and conveyor feeding the centrifuge",
"impianto Fase con trituratore TR7-30 idro e disoleatrice FD500, dietro la recinzione di protezione":"Fase system with TR7-30 idro shredder and FD500 oil-removal centrifuge, behind the safety fence",
"Impianto compatto di disoleatura":"Compact oil-removal system",
"Serie KOMBI":"KOMBI series",
"Fino a 400 kg/h su base pallettizzata":"Up to 400 kg/h on a palletised base",
"Impianto compatto di disoleatura serie KOMBI":"KOMBI series compact oil-removal system",
"Impianto compatto di disoleatura serie KOMBI | Fase Mechanical Engineering":"KOMBI series compact oil-removal system | Fase Mechanical Engineering",
"Impianto automatico di disoleatura del truciolo corto, su base pallettizzata. Fino a 400 kg/h, trituratore e vasca dragante a richiesta.":"Automatic de-oiling system for short chips, on a palletised base. Up to 400 kg/h, shredder and dredging tank on request.",
"Impianto automatico di disoleatura del truciolo metallico corto e lungo, montato su base pallettizzata: arriva in reparto già assemblato e pronto all’uso.":"Automatic de-oiling system for short and long metal chips, mounted on a palletised base: it arrives on the shop floor already assembled and ready to use.",
"Il gruppo comprende un trasportatore a tapparelle con tramoggia di accumulo che dosa il materiale in centrifuga. È completo di setaccio per la separazione dei pezzi e fine barra, vasca di recupero dell’olio o dell’emulsione e quadro elettrico. Due taglie di centrifuga: KOMBI-15 fino a 150 kg/h, KOMBI-40 fino a 400 kg/h.":"The unit comprises a slat conveyor with a buffer hopper that meters the material into the centrifuge. It comes complete with a screen to separate parts and bar ends, a recovery tank for oil or emulsion, and a control panel. Two centrifuge sizes: KOMBI-15 up to 150 kg/h, KOMBI-40 up to 400 kg/h.",
"Portata truciolo":"Chip throughput",
"Potenza totale":"Total power",
"Tramoggia di carico":"Loading hopper",
"Peso":"Weight",
"Alimentazione":"Power supply",
"Scheda tecnica":"Data sheet",
"Depliant Centrifor":"Centrifor leaflet",
"In dotazione":"Supplied as standard",
"Basamento pallettizzato: l’impianto arriva assemblato":"Palletised base frame: the system arrives assembled",
"Trasportatore a tapparelle con tramoggia di accumulo":"Slat conveyor with accumulation hopper",
"Setaccio per la separazione dei pezzi e dei fine barra":"Sieve to separate parts and bar ends",
"Vasca di recupero olio o emulsione":"Oil or emulsion recovery tank",
"Quadro elettrico a bordo macchina":"Control panel on board",
"A richiesta":"On request",
"Trituratore modello TR1":"TR1 model shredder",
"Vasca dragante autopulente":"Self-cleaning dredging tank",
"Configurazioni":"Configurations",
"Vasca dragante":"Dredging tank",
"Trituratore TR1":"TR1 shredder",
"impianto Fase KOMBI su base pallettizzata, con elevatore a tapparelle, centrifuga e quadro elettrico":"Fase KOMBI system on a palletised base, with slat elevator, centrifuge and control panel",
"Brevetto n. 102017000109589":"Patent no. 102017000109589",
"Trituratore ad asse orizzontale":"Horizontal-shaft shredder",
"Serie TR1":"TR1 series",
"Trituratore ad asse verticale":"Vertical-shaft shredder",
"Serie TR-Dual":"TR-Dual series",
"Trituratore ad asse orizzontale serie TR1":"TR1 series horizontal-shaft shredder",
"Trituratore ad asse verticale serie TR-Dual":"TR-Dual series vertical-shaft shredder",
"Trituratore ad asse orizzontale serie TR1 | Fase Mechanical Engineering":"TR1 series horizontal-shaft shredder | Fase Mechanical Engineering",
"Trituratore ad asse verticale serie TR-Dual | Fase Mechanical Engineering":"TR-Dual series vertical-shaft shredder | Fase Mechanical Engineering",
"Centrifughe disoleatrici":"Oil-removal centrifuges",
"Serie FD":"FD series",
"Serie FCV":"FCV series",
"Serie LM AG":"LM AG series",
"Centrifughe disoleatrici ad alti giri":"High-speed oil-removal centrifuges",
"Centrifughe disoleatrici ad alti giri serie LM AG":"LM AG series high-speed oil-removal centrifuges",
"Centrifughe disoleatrici ad alti giri serie LM AG | Fase Mechanical Engineering":"LM AG series high-speed oil-removal centrifuges | Fase Mechanical Engineering",
"Centrifughe asciugatrici serie FC":"FC series drying centrifuges",
"Centrifughe disoleatrici serie FCV":"FCV series oil-removal centrifuges",
"Centrifughe disoleatrici a ciclo continuo serie FD":"FD series continuous-cycle oil-removal centrifuges",
"Disoleatrici serie DK":"DK series oil-removal centrifuges",
"Impianti di trattamento trucioli metallici a ciclo continuo":"Continuous-cycle metal chip treatment systems",
"Impianti di trattamento trucioli metallici a paniere estraibile":"Removable-basket metal chip treatment systems",
"Impianti di asciugatura a paniere estraibile in ambiente galvanico":"Removable-basket drying systems for electroplating",
"Trituratori ad asse orizzontale serie TR":"TR series horizontal-shaft shredders",
"Trituratori ad asse verticale serie TRW":"TRW series vertical-shaft shredders",
"Paniere estraibile per torneria e post galvanica":"Removable basket for turning shops and post-plating",
"Cesto verticale compatto, vibrazioni ammortizzate":"Compact vertical basket, damped vibration",
"Umidità residua sotto il 2%, +7.000 kg/h":"Residual moisture below 2%, +7,000 kg/h",
"Cesto estraibile per cariche e spezzoni grandi":"Removable basket for large loads and long offcuts",
"Alimentazione continua, dati di processo archiviati":"Continuous feed, process data archived",
"Più materiali trattati senza contaminazione":"Several materials handled without cross-contamination",
"Carico automatico del rotobarile dai cassoni":"Automatic barrel loading from bins",
"Asse orizzontale con espulsione brevettata":"Horizontal shaft with patented ejection",
"Asse verticale per frantumazione gravosa":"Vertical shaft for heavy-duty shredding",
"Stessa famiglia":"Same family",
"Le altre serie":"The other series",
"Caratteristiche":"Features",
"Accessori":"Accessories",
"Taglie disponibili":"Available sizes",

/* --- schede prodotto: descrizioni ---------------------------------- */
"Centrifuga a paniere estraibile per tornerie automatiche e ambienti post galvanici. Struttura portante in Fe elettrosaldata, con porte di servizio per il cambio cinghie.":"Removable-basket centrifuge for automatic turning shops and post-plating environments. Electro-welded steel load-bearing frame, with service doors for belt changes.",
"Disoleatrice verticale a cesto estraibile con ingombro ridotto. Un ammortizzatore interno assorbe le vibrazioni; il quadro elettrico può essere integrato a bordo.":"Vertical removable-basket oil-removal centrifuge with a small footprint. An internal damper absorbs vibration; the control panel can be built onto the machine.",
"Centrifugano truciolo metallico corto di leghe ferrose e non. Possono essere applicate direttamente a bordo della macchina utensile oppure in impianti centralizzati.":"They spin short metal chips of ferrous and non-ferrous alloys. They can be fitted directly alongside the machine tool or in centralised systems.",
"Disoleatrice a cesto estraibile per cariche importanti. Tratta truciolo metallico con spezzoni di taglia rilevante e minuteria; il processo si automatizza con un impianto di manipolazione dedicato.":"Removable-basket oil-removal centrifuge for heavy loads. It handles metal chips with sizeable offcuts as well as small parts; the process can be automated with a dedicated handling system.",
"Le portate possono arrivare a 7.000 kg/h. L’asciugatura è inferiore al 2%.":"Throughput can reach 7,000 kg/h. Drying leaves less than 2% residual moisture.",
"Linee con centrifuga a cesto estraibile, adatte a truciolo corto, lungo, matassoso o con pezzi e fine barra.":"Lines with a removable-basket centrifuge, suited to short, long or tangled chips, and to loads with parts and bar ends.",
"Linee di asciugatura per processi galvanici, con svuotamento del materiale dai cassoni e carico automatico del rotobarile.":"Drying lines for electroplating processes, emptying material from bins and loading the plating barrel automatically.",
"Trituratore compatto per trucioli lunghi e matassosi, anche in presenza di pezzi di fine barra. Il sistema di espulsione automatica dello spezzone è brevettato.":"Compact shredder for long and tangled chips, bar ends included. The automatic offcut ejection system is patented.",
"Trituratore per grandi quantità di truciolo lungo e matassoso, con espulsione automatica dei fine barra. Motorizzazione elettrica o idraulica.":"Shredder for large volumes of long and tangled chips, with automatic bar-end ejection. Electric or hydraulic drive.",
"Impianti con centrifughe in continuo. La configurazione dipende dal materiale da trattare, dalle quantità e dalla logistica.":"Systems built on continuous centrifuges. The configuration depends on the material to be processed, the volumes and the logistics.",
"Il layout si costruisce sulle vostre esigenze. Tutte le linee automatiche sono gestite da PLC e predisposte secondo la direttiva Industria 4.0, con archiviazione dei dati e teleassistenza.":"The layout is built around your needs. All automatic lines are PLC-controlled and set up to the Industry 4.0 directive, with data logging and remote support.",
"L’ambiente detta i vincoli più delle prestazioni: umidità, residui aggressivi nell’aria, e una movimentazione che deve integrarsi con il ritmo della linea. Per questo gli impianti sono a paniere estraibile, con materiali scelti per resistere.":"The environment sets the constraints more than the performance figures do: humidity, aggressive residues in the air, and handling that has to fit the rhythm of the line. That is why these systems use a removable basket, with materials chosen to last.",
"Il paniere entra carico ed esce pronto per il controllo o l’imballo. Tempo e giri sono impostati, quindi tutti i pezzi del lotto escono nelle stesse condizioni.":"The basket goes in loaded and comes out ready for inspection or packing. Time and speed are preset, so every part in the batch comes out in the same condition.",
"Disposizione e layout nascono da una valutazione degli spazi disponibili e del processo esistente.":"Arrangement and layout follow from an assessment of the available space and the existing process.",
"Sono la scelta obbligata quando nello stesso reparto si lavorano materiali diversi, anche con lubrorefrigeranti diversi.":"They are the only choice when one department works different materials, sometimes with different coolants.",

/* --- tabelle tecniche ---------------------------------------------- */
"Modello":"Model",
"Portata (kg)":"Capacity (kg)",
"Centrifughe disoleatrici a ciclo continuo":"Continuous-cycle oil-removal centrifuges",
"Giri/min":"RPM",
"Portata paniere (kg)":"Basket capacity (kg)",
"Scheda PDF":"PDF sheet",
"Portata (kg)":"Load (kg)",
"Volume paniere (l)":"Basket volume (l)",
"Ø cesto (mm)":"Basket Ø (mm)",
"Ø paniere (mm)":"Basket Ø (mm)",
"Portata nominale (mc/h)":"Nominal throughput (m³/h)",
"Resa acciaio (kg/h)":"Steel throughput (kg/h)",
"Resa per materiale (kg/h)":"Throughput by material (kg/h)",
"Resa fino a":"Throughput up to",
"Sezione entrata truciolo (mm)":"Chip inlet section (mm)",
"Movimentazione":"Drive",
"Fe (δ 1,3)":"Steel (δ 1.3)",
"Ghisa (δ 1,4)":"Cast iron (δ 1.4)",
"Inox (δ 1,1)":"Stainless (δ 1.1)",
"Ottone (δ 1,5)":"Brass (δ 1.5)",
"Al (δ 0,7)":"Al (δ 0.7)",
"Meccanica":"Mechanical",
"Idraulica":"Hydraulic",
"fino a 400":"up to 400",
"fino a 450":"up to 450",
"fino a 500":"up to 500",
"fino a 600":"up to 600",
"fino a 700":"up to 700",
"fino a 800":"up to 800",
"0,15 mc/h":"0.15 m³/h",
"0,35 mc/h":"0.35 m³/h",
"0,7 mc/h":"0.7 m³/h",
"1,5 mc/h":"1.5 m³/h",
"2,9 mc/h":"2.9 m³/h",
"5 mc/h":"5 m³/h",

/* --- schede tecniche: voci e sintesi ------------------------------- */
"Cesto":"Basket",
"Paniere":"Basket",
"Fusto e coperchio":"Drum and lid",
"Coperchio":"Lid",
"Basamento":"Base frame",
"Motore":"Motor",
"Rotore":"Rotor",
"Albero":"Shaft",
"Braccio":"Mixing arm",
"Guance":"Side plates",
"Scocca":"Body",
"Spintore":"Ram",
"Tramoggia":"Hopper",
"Corpo macchina":"Machine body",
"Inserti di taglio":"Cutting inserts",
"Utensili":"Cutting tools",
"Supporto":"Bearing housing",
"Sospensioni":"Suspension",
"Finitura":"Finish",
"Gestione":"Control",
"Fe da 30 mm":"30 mm steel",
"Fe o inox AISI 304":"Steel or AISI 304 stainless",
"lamiera forata, fori Ø3 mm":"perforated sheet, Ø3 mm holes",
"acciaio da utensili temprato":"hardened tool steel",
"realizzato in acciaio temprato":"made of hardened steel",
"accoglie un intero cassone":"takes a whole bin",
"inserti antiusura nelle parti a contatto con il truciolo":"wear-resistant inserts where it meets the chips",
"antiusura, ricavato dal pieno":"wear-resistant, machined from solid",
"antiusura, vagliatura personalizzabile":"wear-resistant, screening to order",
"apertura assistita da cilindro a gas":"gas-strut assisted opening",
"residuo umido inferiore al 2%":"residual moisture below 2%",
"autoportante, verniciatura a polvere":"self-supporting, powder-coated",
"in carpenteria metallica con sportelli di ispezione":"fabricated steel with inspection doors",
"con fondo chiuso per il contenimento liquidi":"with a closed bottom to contain liquids",
"teleassistenza fornita di serie":"remote support as standard",
"produzione fino a 7.000 kg/h":"output up to 7,000 kg/h",
"dotati di PLC e touch screen":"PLC with touch screen",
"esterno, controllato da inverter":"external, inverter-controlled",
"idraulico, evita l’arresto in tramoggia":"hydraulic, prevents hopper blockage",
"piastre elettrosaldate sagomate":"profiled electro-welded plate",
"removibili, Fe o inox AISI 304":"removable, steel or AISI 304 stainless",
"robusto e accessibile":"sturdy and accessible",
"sostituibili, lame intercambiabili":"replaceable, interchangeable blades",
"sovradimensionato e cementato":"oversized and case-hardened",
"montato su antivibranti progettati ad hoc":"on purpose-designed anti-vibration mounts",
"temprati, estraibili dall’esterno":"hardened, removable from outside",
"trattamenti integrabili nella linea":"treatments that fit into the line",
"trattamento termico per usi gravosi":"heat-treated for heavy duty",
"tre punti per carichi eccentrici":"three-point, for off-centre loads",
"Industria 4.0 e teleassistenza":"Industry 4.0 and remote support",

/* --- elenchi puntati delle schede ---------------------------------- */
"Cesto in lamiera forata con fori Ø3 mm":"Perforated sheet basket with Ø3 mm holes",
"Cesto supplementare":"Additional basket",
"Cesto con fondo chiuso per il contenimento dei liquidi":"Basket with a closed bottom to contain liquids",
"Fusto e coperchio in Fe, su richiesta in acciaio inox AISI 304":"Steel drum and lid, AISI 304 stainless on request",
"Fusto e coperchio in acciaio inox AISI 304":"AISI 304 stainless steel drum and lid",
"Fusto e coperchio removibili in Fe, su richiesta in inox AISI 304":"Removable steel drum and lid, AISI 304 stainless on request",
"Apertura automatica del coperchio con cilindro pneumatico":"Automatic lid opening with pneumatic cylinder",
"Apertura e chiusura del coperchio assistite da cilindro a gas":"Gas-strut assisted lid opening and closing",
"Basamento in carpenteria con sportelli rimovibili per pulizia e controllo":"Fabricated steel base frame with removable panels for cleaning and inspection",
"Basamento portante in Fe da 30 mm":"30 mm steel load-bearing base frame",
"Motore autofrenante esterno e quadro elettrico di gestione":"External brake motor and control panel",
"Motore di rotazione autoportante e verniciatura a polvere":"Self-supporting drive motor and powder coating",
"Motore esterno controllato da inverter":"External inverter-controlled motor",
"Variatore di giri elettronico":"Electronic speed control",
"Variatore di giri elettronico per accelerazione e decelerazione controllate":"Electronic speed control for managed acceleration and deceleration",
"Quadro elettrico con inverter e pannello operatore":"Electrical cabinet with inverter and operator panel",
"Geometria del filtro studiata sul materiale da trattare":"Filter geometry designed around the material to be processed",
"Vasca di recupero con controllo di livello e pompa di rilancio":"Recovery tank with level control and transfer pump",
"Vasca di recupero con controllo di livello, pompa di lavaggio e rilancio, anche in versione autopulente":"Recovery tank with level control, wash pump and transfer pump, also in a self-cleaning version",
"Sospensioni su tre punti per dissipare i carichi eccentrici":"Three-point suspension to absorb off-centre loads",
"Sensore di arresto in caso di sbilanciamento eccessivo":"Stop sensor triggered by excessive imbalance",
"Rotore montato su antivibranti, con controllo delle vibrazioni":"Rotor on anti-vibration mounts, with vibration monitoring",
"Rotore di frantumazione in acciaio da utensili temprato":"Shredding rotor in hardened tool steel",
"Albero di rotazione con trattamento termico per sollecitazioni gravose":"Drive shaft heat-treated for heavy-duty loads",
"Braccio smatassatore in antiusura, ricavato dal pieno":"Wear-resistant untangling arm, machined from solid",
"Guance inferiori antiusura con vagliatura personalizzabile":"Wear-resistant lower side plates with screening to order",
"Scocca portante in piastre elettrosaldate sagomate e rinforzate":"Load-bearing body in profiled, reinforced electro-welded plate",
"Spintore idraulico che impedisce l’arresto del materiale in tramoggia":"Hydraulic ram that stops material stalling in the hopper",
"Tramoggia di carico di ampie dimensioni":"Large loading hopper",
"Mantello forato per ottimizzare la disoleatura":"Perforated shroud for more effective de-oiling",
"Rivestimento interno antiusura sulle parti a contatto con il truciolo":"Wear-resistant internal lining on surfaces in contact with the chips",
"Corpo macchina robusto e accessibile per la manutenzione":"Sturdy machine body, accessible for maintenance",
"Paniere in acciaio da utensili temprato, lavorato con macchine CNC":"Basket in hardened tool steel, CNC-machined",
"Parti a contatto con il truciolo in acciaio antiusura":"Surfaces in contact with the chips in wear-resistant steel",
"Inserti di taglio del rotore sostituibili e lame fisse intercambiabili":"Replaceable rotor cutting inserts and interchangeable fixed blades",
"Coltelli in acciaio temprato, estraibili dall’esterno":"Hardened steel blades, removable from outside",
"Supporto di rotazione sovradimensionato e cementato, con lubrificazione esterna":"Oversized, case-hardened bearing housing with external lubrication",
"Paracolpi sulla giunzione del motoriduttore":"Shock absorber on the gearmotor coupling",
"Telaio di supporto con antivibranti":"Support frame with anti-vibration mounts",
"Bandiera a colonna tirantata con paranco elettrico":"Braced pillar jib crane with electric hoist",
"Kit soffiante ad aria calda con controllo della temperatura":"Hot-air blower kit with temperature control",
"Trattamenti di finitura integrabili nella linea di asciugatura":"Finishing treatments that fit into the drying line",
"Archiviazione dei dati di processo e interventi da remoto sulle linee a ciclo continuo.":"Process data logging and remote intervention on continuous-cycle lines.",

/* --- applicazioni --------------------------------------------------- */
"Quattro lavorazioni, spesso combinate nella stessa linea":"Four processes, often combined in the same line",
"Dal truciolo bagnato al truciolo asciutto":"From wet chips to dry chips",
"Il truciolo esce dalla macchina utensile intriso di lubrorefrigerante. La forma e la tipologia del truciolo dipendono dalle lavorazioni che il materiale subisce. Per questo l’impianto si sceglie a partire dal materiale, non dal listino.":"Chips leave the machine tool soaked in coolant. Their shape and type depend on the machining the material goes through. That is why the system is chosen from the material, not from a price list.",
"Il truciolo esce dalla macchina utensile carico di lubrorefrigerante, e quanto ne trattiene dipende dalla forma. L’impianto si sceglie dal materiale, non dal listino.":"Chips leave the machine tool soaked in coolant, and how much they hold on to depends on their shape. The system is chosen from the material, not from a price list.",
"Centrifugazione del truciolo":"Centrifuging the chips",
"Quanto lubrorefrigerante trattiene il truciolo dipende anche dalla sua forma. All’interno del paniere, il materiale viene spinto dalla forza centrifuga contro un settore filtrante, il quale lascia passare il liquido e trattiene il solido.":"How much coolant chips hold on to also depends on their shape. Inside the basket, centrifugal force drives the material against a filter section, which lets the liquid through and holds back the solid.",
"Il lubrorefrigerante raccolto può essere riutilizzato nel circuito della macchina utensile. Il truciolo asciutto permette di ottenere il massimo della valorizzazione.":"The collected coolant can be reused in the machine tool circuit. Dry chips fetch the highest value.",
"Triturazione di trucioli lunghi e matasse":"Shredding long chips and nests",
"Il truciolo lungo è un problema. Il grande volume ed il ridotto peso rendono la logistica molto meno efficiente; riempie rapidamente i cassoni ed è di difficile trattamento.":"Long chips are a problem. Their large volume and low weight make logistics far less efficient; they fill bins quickly and are hard to process.",
"Il trituratore ne permette la riduzione volumetrica controllando la pezzatura. Un materiale triturato può essere semplicemente trasportato e centrifugato. I pezzi ed i fine barra vengono intercettati e scaricati automaticamente in un contenitore dedicato.":"The shredder reduces their volume while controlling the fragment size. Shredded material can simply be conveyed and centrifuged. Parts and bar ends are caught and discharged automatically into a dedicated container.",
"Asciugatura di pezzi minuti":"Drying small parts",
"Dopo un lavaggio o un passaggio in linea galvanica i pezzi arrivano bagnati, spesso alla rinfusa. Sgocciolare occupa spazio e lascia aloni negli incavi; il forno aggiunge un ciclo termico che non tutti i trattamenti tollerano. La centrifuga risolve il passaggio in meccanica.":"After washing or a pass through a plating line, parts arrive wet, usually loose in bulk. Drip-drying takes up space and leaves marks in recesses; an oven adds a heat cycle that not every coating tolerates. The centrifuge solves the step mechanically.",
"Trattamento in linea":"In-line treatment",
"Quando le quantità di trucioli da trattare crescono, le linee sono la soluzione perfetta. Permettono il trattamento integrato con triturazione e centrifugazione. Il lubrorefrigerante recuperato viene filtrato e può essere nuovamente utilizzato.":"When the quantity of chips to process grows, lines are the ideal solution. They combine shredding and centrifuging in one integrated process. The recovered coolant is filtered and can be used again.",
"Un truciolo asciutto occupa meno volume, quindi il cassone si riempie più lentamente, e non gocciola durante il trasporto. Quando le postazioni sono molte si passa a una linea.":"Dry chips take up less room, so the bin fills more slowly, and they do not drip in transit. Once there are many stations, a line takes over.",

/* --- settori -------------------------------------------------------- */
"Reparti diversi, lo stesso punto di intervento":"Different departments, the same point of intervention",
"Cambia il pezzo, cambia il fluido, cambia lo spazio a disposizione. Quello che non cambia è dove interveniamo: subito a valle della lavorazione, prima che il truciolo metallico esca dal reparto e diventi un costo.":"The part changes, the fluid changes, the space available changes. What does not change is where we step in: immediately downstream of machining, before the metal chips leave the department and turn into a cost.",
"Cambia il pezzo, cambia il fluido, cambia lo spazio. Non cambia dove interveniamo: a valle della lavorazione, prima che il truciolo metallico diventi un costo.":"The part changes, the fluid changes, the space changes. Where we step in does not: downstream of machining, before the metal chips turn into a cost.",
"Officine meccaniche e centri di lavoro":"Machine shops and machining centres",
"In officina la variabile è il cambio commessa: nella stessa settimana passano acciaio, alluminio e ottone, a volte da tenere separati perché mescolarli abbassa il valore del lotto. Anche i fluidi cambiano.":"In a machine shop the variable is the job change: steel, aluminium and brass all pass through in the same week, sometimes to be kept apart because mixing them lowers the value of the batch. The fluids change too.",
"Le macchine a cesto estraibile rispondono a questo modo di lavorare: si tratta un lotto per volta e si passa al successivo senza contaminazioni. Il paniere forato e il fusto removibile rendono la pulizia un’operazione di minuti.":"Removable-basket machines suit this way of working: one batch at a time, then on to the next with no cross-contamination. The perforated basket and the removable drum turn cleaning into a job of minutes.",
"Tornerie automatiche":"Automatic turning shops",
"In torneria il truciolo esce in continuo, spesso minuto e sempre dello stesso materiale: la condizione migliore per trattarlo dove nasce. Una macchina compatta a bordo del tornio intercetta il truciolo appena cade e restituisce il fluido al circuito.":"In a turning shop chips come off continuously, usually fine and always of the same material: the best case for treating them where they are made. A compact machine beside the lathe catches the chips as they fall and returns the fluid to the circuit.",
"Reparti galvanici":"Electroplating departments",

/* --- azienda -------------------------------------------------------- */
"Chi siamo":"About us",
"Profilo dell’azienda":"Company profile",
"Da vent'anni Fase progetta e costruisce centrifughe, impianti di trattamento e trituratori per il truciolo metallico.":"For twenty years Fase has designed and built centrifuges, treatment systems and shredders for metal chips.",
"Ricerca, progetto e officina restano sotto lo stesso tetto, a Tezze sul Brenta.":"Research, design and workshop stay under one roof, in Tezze sul Brenta.",
"Progettazione e costruzione interne":"In-house design and manufacturing",
"Prove sul truciolo reale":"Testing on real chips",
"La disoleatura permette la massima valorizzazione del truciolo metallico.":"De-oiling gets the most value out of metal chips.",
"Fase progetta e costruisce centrifughe,":"Fase designs and builds centrifuges,",
"impianti di trattamento e trituratori":"treatment systems and shredders",
"per il truciolo metallico.":"for metal chips.",
"Fase progetta e costruisce centrifughe, impianti di trattamento e trituratori per il truciolo metallico. Umidità residua sotto il 2%.":"Fase designs and builds centrifuges, treatment systems and shredders for metal chips. Residual moisture below 2%.",
"Le misure che ci chiedono":"The figures people ask us for",
"Il nostro lavoro comincia":"Our work begins",
"dove finisce la lavorazione":"where machining",
"meccanica.":"ends.",
"Il truciolo esce dalla macchina utensile carico di lubrorefrigerante: i nostri sistemi lo separano, recuperano il fluido e restituiscono un truciolo metallico asciutto, pronto per essere valorizzato.":"Chips leave the machine tool soaked in coolant: our systems separate the two, recover the fluid and return dry metal chips, ready to be sold on.",
"I numeri":"Key figures",
"Umidità residua sotto il 2% e riutilizzo del lubrorefrigerante.":"Residual moisture below 2% and reusable coolant.",
"Una mano strizza una manciata di truciolo metallico e il lubrorefrigerante cola sul cumulo":"A hand squeezes a fistful of metal chips and the coolant drips onto the pile",
"Umidità residua nel truciolo metallico trattato":"Residual moisture in treated metal chips",
"Portata massima, disoleatrici a ciclo continuo":"Maximum throughput, continuous de-oiling centrifuges",
"anni":"years",
"Di centrifugazione industriale":"Of industrial centrifuging",
"La sede":"Our plant",
"Tezze sul Brenta, provincia di Vicenza":"Tezze sul Brenta, province of Vicenza",
"La sede di Fase, in provincia di Vicenza":"Fase\u2019s plant, in the province of Vicenza, Italy",

/* --- contatti ------------------------------------------------------- */
"Descriveteci il componente e il ciclo attuale: come viene raccolto oggi il truciolo metallico, dove finisce, quanto lubrorefrigerante ci resta dentro e che risultato vi serve a valle. Se ci sono vincoli di spazio, di altezza sotto trave o di movimentazione, sono quelli a definire il layout.":"Describe the part and your current cycle: how the metal chips are collected today, where they end up, how much coolant stays in them and what result you need downstream. Where there are constraints on space, headroom or handling, those are what shape the layout.",
"Su richiesta trattiamo un campione del vostro materiale prima di qualsiasi offerta.":"On request we process a sample of your material before any quotation.",
"Contatti diretti":"Direct contacts",
"Sede e stabilimento":"Head office and works",
"Assistenza":"Service",
"Assistenza su un impianto installato":"Service on an installed system",
"Centrifughe e disoleatrici":"Centrifuges and oil-removal centrifuges",
"Impianti di trattamento truciolo":"Chip treatment systems",
"Altro":"Something else",
"Dimensionamento, prove sul truciolo metallico e assistenza":"Sizing, metal chip testing and service",

/* --- news ------------------------------------------------------------ */
"Fiere, prove e aggiornamenti dall’azienda":"Trade fairs, tests and company news",
"Fiere, prove sul truciolo metallico e aggiornamenti da Fase Mechanical Engineering.":"Trade fairs, metal chip testing and news from Fase Mechanical Engineering.",
"Altre news":"More news",
"Le altre date":"The other dates",
"in calendario.":"in the calendar.",
"Fiere":"Trade fairs",
"Leggi":"Read",
"Per fissare un incontro in fiera o portarci un campione del truciolo metallico, scrivete a":"To arrange a meeting at the show, or to bring us a sample of your metal chips, write to",
"MECSPE 2021":"MECSPE 2021",
"MECSPE 2022":"MECSPE 2022",
"MECSPE 2024":"MECSPE 2024",
"MECSPE 2025":"MECSPE 2025",
"MECSPE 2026":"MECSPE 2026",
"Fornitore Offresi 2025":"Fornitore Offresi 2025",
"Test gratuiti di triturazione":"Free shredding tests",
"Saremo a MECSPE, la fiera dedicata alle innovazioni per l’industria manifatturiera. Padiglione 14, stand F32.":"We will be at MECSPE, the show devoted to innovation in manufacturing. Hall 14, stand F32.",
"Fiera internazionale di riferimento per l’industria manifatturiera. Padiglione 19, stand A02.":"The leading international show for manufacturing. Hall 19, stand A02.",
"In mostra i sistemi di centrifugazione e triturazione del truciolo metallico. Padiglione 19, stand A10.":"Showing our centrifuging and shredding systems for metal chips. Hall 19, stand A10.",
"Presenti con i sistemi di centrifugazione e triturazione del truciolo metallico. Padiglione 22, stand C86.":"Present with our centrifuging and shredding systems for metal chips. Hall 22, stand C86.",
"Sistemi di centrifugazione e triturazione del truciolo metallico al padiglione 16, stand D07.":"Centrifuging and shredding systems for metal chips in hall 16, stand D07.",
"Salone internazionale della subfornitura meccanica, a Erba dal 13 al 15 febbraio. Padiglione B, stand 281.":"International trade fair for mechanical subcontracting, in Erba from 13 to 15 February. Hall B, stand 281.",
"I trituratori frantumano il truciolo e semplificano centrifugazione e stoccaggio. Mettiamo a disposizione una prova gratuita sul truciolo metallico del cliente, su appuntamento.":"Shredders break down chips and make centrifuging and storage simpler. We offer a free test on the customer’s own metal chips, by appointment.",
"7 settembre 2021":"7 September 2021",
"24 settembre 2021":"24 September 2021",
"25 maggio 2022":"25 May 2022",
"20 febbraio 2024":"20 February 2024",
"15 gennaio 2025":"15 January 2025",
"6 febbraio 2025":"6 February 2025",
"29 gennaio 2026":"29 January 2026",

/* --- informative ----------------------------------------------------- */
"Il testo integrale di questa informativa viene fornito da Fase Mechanical Engineering S.r.l. e sarà pubblicato qui. Per richieste sul trattamento dei dati scrivi a":"The full text of this notice is provided by Fase Mechanical Engineering S.r.l. and will be published here. For questions about data processing, write to",
"Informativa di Fase Mechanical Engineering S.r.l..":"Notice from Fase Mechanical Engineering S.r.l.",

/* --- accessori -------------------------------------------------------- */
"Nastri trasportatori ed elevatori ribaltatori":"Belt conveyors and bin lifter-tippers",
"Nastri trasportatori ed elevatori ribaltatori: quello che collega le fasi e toglie le movimentazioni a mano.":"Belt conveyors and bin lifter-tippers: what links the stages and takes the manual handling out.",
"elevatore ribaltatore Fase con nastro di scarico in acciaio inox":"Fase bin lifter-tipper with stainless steel discharge conveyor",
"elevatore ribaltatore Fase carenato, con il gruppo di sollevamento in vista":"enclosed Fase bin lifter-tipper, with the lifting unit in view",
"Nastri trasportatori":"Belt conveyors",
"Collegano le fasi senza spostare cassoni":"They link the stages without moving bins",
"Permettono il trasporto del truciolo corto e lungo. Possono essere a palette draganti per il trasporto del materiale corto oppure a tapparella per il materiale lungo.":"They carry both short and long chips. They can be drag-flight conveyors for short material or slat conveyors for long material.",
"Sono completamente personalizzabili in base alle dimensioni e alle portate richieste, e possono essere dotati di vasca dell’olio completa di pompe e livelli.":"They are fully customisable to the required dimensions and throughput, and can be fitted with an oil tank complete with pumps and level controls.",
"Elevatore ribaltatore per cassoni":"Bin lifter-tipper",
"Permette di sollevare e ribaltare il vostro cassone in completa sicurezza. Frequentemente è utilizzato per il carico automatico di un trituratore, ma può avere innumerevoli applicazioni.":"It lifts and tips your bin in complete safety. It is often used to load a shredder automatically, but it has countless other applications.",
"La benna che accoglie il contenitore è realizzata su misura per i vostri carrelli, con sistemi di fissaggio e raccolta dei liquidi. È dotato di cancello interbloccato con apertura automatica elettrica o pneumatica.":"The cradle that takes the container is made to measure for your trolleys, with clamping and liquid collection. It has an interlocked gate with automatic electric or pneumatic opening.",
"Il cassone si svuota senza intervento manuale":"The bin empties with no one lifting it",


/* --- alternative delle fotografie delle centrifughe LM 270-800 ------- */
"centrifuga disoleatrice LM mod. 270 su colonna, col coperchio a griglia alzato e il quadro a bordo macchina":"LM mod. 270 oil-removal centrifuge on its column, mesh lid raised and the control panel on board",
"centrifuga disoleatrice LM mod. 360, fusto grigio col coperchio chiuso e la presa di scarico laterale":"LM mod. 360 oil-removal centrifuge, grey drum with the lid closed and the side discharge spout",
"centrifuga disoleatrice LM mod. 480 di fianco, con l’aspiratore in sommità e l’armadio elettrico":"LM mod. 480 oil-removal centrifuge from the side, with the extractor on top and the electrical cabinet",
"centrifuga disoleatrice LM mod. 550, col convogliatore d’aspirazione e il quadro di comando a fianco":"LM mod. 550 oil-removal centrifuge, with the extraction duct and the control panel alongside",
"quattro centrifughe disoleatrici LM affiancate, dalla taglia minore alla maggiore":"four LM oil-removal centrifuges side by side, from the smallest size to the largest",
"centrifuga disoleatrice LM col coperchio aperto e il cesto in acciaio inox in vista":"LM oil-removal centrifuge with the lid open and the stainless steel basket in view",
"cesto estraibile in acciaio inox di una centrifuga disoleatrice LM, visto da solo":"removable stainless steel basket of an LM oil-removal centrifuge, on its own",
"quadro di comando di una centrifuga disoleatrice LM: tempo di lavoro, marcia, arresto e interruttore generale":"control panel of an LM oil-removal centrifuge: work time, start, stop and main switch",
"centrifuga disoleatrice LM mod. 480 di tre quarti, col fusto grigio, l’aspiratore in sommità e l’armadio elettrico":"LM mod. 480 oil-removal centrifuge, three-quarters on, with the grey drum, the extractor on top and the electrical cabinet",
/* --- alternative delle fotografie LM AG -------------------------------- */
"centrifuga disoleatrice LM AG grigia, col coperchio chiuso e i due cilindri pneumatici arancioni":"grey LM AG oil-removal centrifuge, lid closed, with the two orange pneumatic cylinders",
"centrifuga disoleatrice LM AG verde, col raccordo di aspirazione sul coperchio":"green LM AG oil-removal centrifuge, with the extraction elbow on the lid",
"centrifuga disoleatrice LM AG mod. 800 di fronte, sui montanti di sostegno":"LM AG mod. 800 oil-removal centrifuge seen from the front, on its support legs",
"centrifuga disoleatrice LM AG mod. 800 col coperchio aperto e l’armadio elettrico a fianco":"LM AG mod. 800 oil-removal centrifuge with the lid open and the electrical cabinet alongside",
"centrifuga disoleatrice LM AG verniciata in blu, col coperchio a due ante aperto":"LM AG oil-removal centrifuge painted blue, with the two-leaf lid open",
"centrifuga disoleatrice LM AG mod. 950, la taglia maggiore della serie, sul suo basamento":"LM AG mod. 950 oil-removal centrifuge, the largest size in the range, on its base",
"centrifuga disoleatrice LM AG di lato, col coperchio alzato e il cesto in vista":"LM AG oil-removal centrifuge from the side, lid raised and the basket in view",
"centrifuga disoleatrice LM AG verde col coperchio nero aperto, sulla piastra di base":"green LM AG oil-removal centrifuge with the black lid open, on its base plate",
"coperchio di una centrifuga LM AG sollevato dal cilindro pneumatico, visto da vicino":"lid of an LM AG centrifuge raised by the pneumatic cylinder, seen close up",
"aggancio del coperchio di una centrifuga LM AG, con la targhetta del costruttore":"lid catch of an LM AG centrifuge, with the maker's plate",
"centrifuga disoleatrice LM AG su fondo bianco, vista di fronte":"LM AG oil-removal centrifuge on a white background, seen from the front",
/* --- le tre caselle nella pagina dei contatti -------------------------- */
"Recapiti":"Contact details",
"Richieste generali e dimensionamento":"General enquiries and sizing",
"Offerte e rapporti commerciali":"Quotations and sales",
/* --- Centrifor -------------------------------------------------------- */
"Disoleatrici automatiche Centrifor: il carico arriva sul nastro, lo scarico avviene rovesciando il cesto. Tre modelli, 270, 480 e 660.":"Centrifor automatic de-oiling centrifuges: loaded by conveyor, unloaded by tipping the basket. Three models: 270, 480 and 660.",
"Carico sul nastro, scarico per rovesciamento":"Loaded by conveyor, unloaded by tipping",
"3 modelli a catalogo,":"3 models in the catalogue,",
"carico e scarico automatici.":"automatic loading and unloading.",
"Il modello compatto, su telaio a colonne":"The compact model, on a column frame",
"La taglia intermedia, ad armadio chiuso":"The middle size, in a closed cabinet",
"La taglia maggiore, con la cabina di protezione":"The largest size, with a guarded enclosure",
"Stessa serie":"Same range",
"Gli altri modelli":"The other models",
"della serie.":"in the range.",
"Carico":"Loading",
"Scarico":"Unloading",
"Ciclo":"Cycle",
"Materiale":"Material",
"automatico in carico e in scarico":"automatic in loading and unloading",
"Viene impiegata per la disoleatura di trucioli e minuterie metalliche.":"It is used to de-oil metal chips and small metal parts.",
"Il carico viene effettuato anche con nastro trasportatore, lo scarico avviene mediante rovesciamento del cesto.":"Loading can also be done by belt conveyor; unloading is by tipping the basket.",
"Scivolo di carico ribaltabile, comandato da cilindro pneumatico":"Tipping loading chute, driven by a pneumatic cylinder",
"Cassone di raccolta sotto lo scarico":"Collection bin under the discharge",
"Basamento unico per macchina, nastro e cassone":"One base frame for machine, conveyor and bin",
"La Centrifor 660 è la macchina più grande della serie. Viene impiegata per la disoleatura di trucioli e minuterie metalliche.":"The Centrifor 660 is the largest machine in the range. It is used to de-oil metal chips and small metal parts.",

"Quadro di comando a bordo macchina":"Control panel on board the machine",
"Centrifor mod. 270: disoleatrice automatica per minuteria metallica, carico sul nastro e scarico per rovesciamento del cesto.":"Centrifor mod. 270: automatic de-oiling centrifuge for small metal parts, loaded by conveyor and unloaded by tipping the basket.",
"Centrifor mod. 480: disoleatrice automatica ad armadio chiuso, carico sul nastro e scarico per rovesciamento del cesto.":"Centrifor mod. 480: automatic de-oiling centrifuge in a closed cabinet, loaded by conveyor and unloaded by tipping the basket.",
"Centrifor mod. 660: disoleatrice automatica con cabina di protezione e colonna di carico, la taglia maggiore della serie.":"Centrifor mod. 660: automatic de-oiling centrifuge with a guarded enclosure and loading column, the largest size in the range.",
/* alternative delle fotografie Centrifor */
"Centrifor mod. 270 su fondo chiaro, vista di tre quarti":"Centrifor mod. 270 on a light background, three-quarter view",
"Centrifor mod. 480 su fondo chiaro, vista di tre quarti":"Centrifor mod. 480 on a light background, three-quarter view",
"Centrifor mod. 660 su fondo chiaro, vista di tre quarti":"Centrifor mod. 660 on a light background, three-quarter view",
"Centrifor mod. 480 fra il nastro di carico e la tramoggia di raccolta":"Centrifor mod. 480 between the loading conveyor and the collection hopper",
"Centrifor mod. 270 di tre quarti, con lo scivolo di carico aperto sul davanti":"Centrifor mod. 270 in three-quarter view, with the loading chute open at the front",
"Centrifor mod. 270 con lo sportello aperto, il cesto e il quadro di comando in vista":"Centrifor mod. 270 with the door open, basket and control panel in view",
"scivolo di carico del Centrifor mod. 270, col cilindro pneumatico che lo ribalta":"loading chute of the Centrifor mod. 270, with the pneumatic cylinder that tips it",
"cesto in lamiera forata del Centrifor, visto dall’alto dentro la cappa":"perforated sheet basket of the Centrifor, seen from above inside the hood",
"Centrifor mod. 270 verniciato in blu, con lo scivolo di carico giallo":"Centrifor mod. 270 painted blue, with the yellow loading chute",
"Centrifor mod. 270 in blu installato in reparto, con lo scivolo di scarico in acciaio":"blue Centrifor mod. 270 installed on the shop floor, with the steel discharge chute",
"linea Centrifor mod. 270 su basamento unico: nastro di carico, macchina e cassone di raccolta":"Centrifor mod. 270 line on a single base frame: loading conveyor, machine and collection bin",
"Centrifor mod. 480 di tre quarti, armadio chiuso con lo scivolo di carico sul fronte":"Centrifor mod. 480 in three-quarter view, closed cabinet with the loading chute at the front",
"Centrifor mod. 480 col nastro inclinato che scarica dall’alto":"Centrifor mod. 480 with the inclined conveyor discharging from above",
"Centrifor mod. 480 con nastro e tramoggia su telaio a gambe":"Centrifor mod. 480 with conveyor and hopper on a legged frame",
"Centrifor mod. 480 verniciato in verde, col quadro di comando a fianco":"Centrifor mod. 480 painted green, with the control panel alongside",
"disegno di una linea Centrifor: nastro di carico, macchina e scarico sul basamento":"drawing of a Centrifor line: loading conveyor, machine and discharge on the base frame",
"gruppo centrifuga del Centrifor in giallo dentro il carter blu, con la manichetta di aspirazione":"yellow Centrifor centrifuge unit inside the blue casing, with the extraction hose",
"tre Centrifor mod. 480 in verde affiancati in reparto, ognuno col suo quadro":"three green Centrifor mod. 480 machines side by side on the shop floor, each with its own panel",
"cono di scarico del Centrifor mod. 480 aperto, col motoriduttore che lo comanda":"discharge cone of the Centrifor mod. 480 open, with the gearmotor that drives it",
"Centrifor mod. 660 di tre quarti, con la colonna di carico e l’armadio elettrico a fianco":"Centrifor mod. 660 in three-quarter view, with the loading column and the electrical cabinet alongside",
"Centrifor mod. 660 visto di lato, con i ripari a pavimento attorno alla macchina":"Centrifor mod. 660 seen from the side, with floor guards around the machine",
"Centrifor mod. 660 col pannello di protezione alzato e l’interno della cabina in vista":"Centrifor mod. 660 with the guard panel raised and the inside of the enclosure in view",
"fronte del Centrifor mod. 660, col pannello giallo chiuso e la spia di ciclo accesa":"front of the Centrifor mod. 660, with the yellow panel closed and the cycle light on",

/* --- titoli delle pagine --------------------------------------------- */
"Fase Mechanical Engineering | Centrifughe, impianti e trituratori per il truciolo metallico":"Fase Mechanical Engineering | Centrifuges, treatment systems and shredders for metal chips",
"Centrifughe | Fase Mechanical Engineering":"Centrifuges | Fase Mechanical Engineering",
"Impianti | Fase Mechanical Engineering":"Treatment systems | Fase Mechanical Engineering",
"Trituratori | Fase Mechanical Engineering":"Shredders | Fase Mechanical Engineering",
"Applicazioni | Fase Mechanical Engineering":"Applications | Fase Mechanical Engineering",
"Settori | Fase Mechanical Engineering":"Sectors | Fase Mechanical Engineering",
"Azienda | Fase Mechanical Engineering":"Company | Fase Mechanical Engineering",
"Contatti | Fase Mechanical Engineering":"Contact | Fase Mechanical Engineering",
"News | Fase Mechanical Engineering":"News | Fase Mechanical Engineering",
"Policy Privacy | Fase Mechanical Engineering":"Privacy policy | Fase Mechanical Engineering",
"Cookie policy | Fase Mechanical Engineering":"Cookie policy | Fase Mechanical Engineering",
"Centrifughe asciugatrici serie FC | Fase Mechanical Engineering":"FC series drying centrifuges | Fase Mechanical Engineering",
"Centrifughe disoleatrici serie FCV | Fase Mechanical Engineering":"FCV series oil-removal centrifuges | Fase Mechanical Engineering",
"Centrifughe disoleatrici a ciclo continuo serie FD | Fase Mechanical Engineering":"FD series continuous-cycle oil-removal centrifuges | Fase Mechanical Engineering",
"Disoleatrici serie DK | Fase Mechanical Engineering":"DK series oil-removal centrifuges | Fase Mechanical Engineering",
"Impianti di trattamento trucioli metallici a ciclo continuo | Fase Mechanical Engineering":"Continuous-cycle metal chip treatment systems | Fase Mechanical Engineering",
"Impianti di trattamento trucioli metallici a paniere estraibile | Fase Mechanical Engineering":"Removable-basket metal chip treatment systems | Fase Mechanical Engineering",
"Impianti di asciugatura a paniere estraibile in ambiente galvanico | Fase Mechanical Engineering":"Removable-basket drying systems for electroplating | Fase Mechanical Engineering",
"Trituratori ad asse orizzontale serie TR | Fase Mechanical Engineering":"TR series horizontal-shaft shredders | Fase Mechanical Engineering",
"Trituratori ad asse verticale serie TRW | Fase Mechanical Engineering":"TRW series vertical-shaft shredders | Fase Mechanical Engineering",
"MECSPE 2021 | Fase Mechanical Engineering":"MECSPE 2021 | Fase Mechanical Engineering",
"MECSPE 2022 | Fase Mechanical Engineering":"MECSPE 2022 | Fase Mechanical Engineering",
"MECSPE 2024 | Fase Mechanical Engineering":"MECSPE 2024 | Fase Mechanical Engineering",
"MECSPE 2025 | Fase Mechanical Engineering":"MECSPE 2025 | Fase Mechanical Engineering",
"MECSPE 2026 | Fase Mechanical Engineering":"MECSPE 2026 | Fase Mechanical Engineering",
"Fornitore Offresi 2025 | Fase Mechanical Engineering":"Fornitore Offresi 2025 | Fase Mechanical Engineering",
"Test gratuiti di triturazione | Fase Mechanical Engineering":"Free shredding tests | Fase Mechanical Engineering",
"Accessori | Fase Mechanical Engineering":"Accessories | Fase Mechanical Engineering",

/* --- testi alternativi delle immagini -------------------------------- */
"cumulo fitto di truciolo d'acciaio appena uscito dalla lavorazione":"dense heap of steel chips straight off the machine",
"mandrino di un tornio automatico al lavoro, con gli ugelli del lubrorefrigerante":"spindle of an automatic lathe at work, with the coolant nozzles",
"fresatura di un blocco d'acciaio in un centro di lavoro, col truciolo che salta":"milling a steel block in a machining centre, with chips flying",
"punta che fora l'acciaio sotto il getto di lubrorefrigerante":"a drill going through steel under the coolant jet",
"spezzoni d'acciaio tornito alla rinfusa dentro un cassone":"turned steel offcuts loose in a bin",
"elevatore ribaltatore Fase con il cassone giallo dentro il telaio di sollevamento, in reparto":"Fase bin lifter-tipper with the yellow bin inside the lifting frame, on the shop floor",
"elevatore ribaltatore Fase in giallo, con il gruppo di ribaltamento e i cilindri in vista":"Fase bin lifter-tipper in yellow, with the tipping assembly and cylinders in view",
"elevatore ribaltatore Fase con il cassone sollevato in cima alla colonna":"Fase bin lifter-tipper with the bin raised to the top of the column",
"elevatore ribaltatore Fase con tramoggia di scarico e cassone giallo a fianco":"Fase bin lifter-tipper with discharge hopper and yellow bin alongside",
"due elevatori ribaltatori Fase affiancati, con lo scivolo di scarico in basso":"two Fase bin lifter-tippers side by side, with the discharge chute below",
"elevatore ribaltatore Fase dentro la gabbia di protezione, col quadro elettrico a fianco":"Fase bin lifter-tipper inside its safety cage, with the electrical panel alongside",
"gruppo di ribaltamento di un elevatore ribaltatore Fase, visto da vicino":"tipping assembly of a Fase bin lifter-tipper, close up",
"fotografia del nastro trasportatore non ancora disponibile":"photograph of the belt conveyor not yet available",
"fotografia delle centrifughe non ancora disponibile":"photograph of the centrifuges not yet available",
"centrifuga disoleatrice Fase serie FCV col coperchio aperto e il cesto estratto":"Fase FCV series oil-removal centrifuge with the lid open and the basket lifted out",
"centrifuga disoleatrice Fase serie FD in blu, col coperchio a cupola aperto, il motore e i supporti antivibranti":"Fase FD series oil-removal centrifuge in blue, with the dome lid open, the motor and the anti-vibration mounts",
"timbro \u00abpatented\u00bb: l\u2019espulsione del trituratore TR1 \u00e8 coperta da brevetto":"\u201cpatented\u201d stamp: the ejection system of the TR1 shredder is covered by a patent",
"trituratore Fase TR1 su cavalletto bianco, con motoriduttore e quadro di comando a bordo macchina":"Fase TR1 shredder on a white stand, with gearmotor and on-board control panel",
"trituratore Fase TR1 con tramoggia di carico, motore laterale e cassone di raccolta del truciolo":"Fase TR1 shredder with loading hopper, side-mounted motor and chip collection bin",
"trituratore Fase TR1 in blu su bancale, con l\u2019accoppiamento fra motore e riduttore in primo piano":"Fase TR1 shredder in blue on a pallet, with the motor-to-gearbox coupling in the foreground",
"trituratore Fase TR1 con quadro di comando a bordo macchina e cassone blu di raccolta su ruote":"Fase TR1 shredder with on-board control panel and blue collection bin on castors",
"trituratore Fase TR-Dual completo: tramoggia di carico, corpo macchina con il marchio, scivolo di scarico e motore":"complete Fase TR-Dual shredder: loading hopper, machine body with the brand mark, discharge chute and motor",
"trituratore Fase TR-Dual con tramoggia conica grigia, su bancale":"Fase TR-Dual shredder with grey conical hopper, on a pallet",
"trituratore Fase TR-Dual con tramoggia nera, centralina idraulica e basamento blu":"Fase TR-Dual shredder with black hopper, hydraulic power pack and blue base frame",
"trituratore Fase TR-Dual in verde, con i cilindri pneumatici dello spintore in vista":"Fase TR-Dual shredder in green, with the ram\u2019s pneumatic cylinders in view",
"gruppo di spinta di un trituratore Fase TR-Dual: cilindri pneumatici e blocco valvole":"ram assembly of a Fase TR-Dual shredder: pneumatic cylinders and valve block",
"corpo di un trituratore Fase TR-Dual, con le piastre di ispezione imbullonate":"body of a Fase TR-Dual shredder, with the bolted inspection plates",
"rotore a coltelli di un trituratore Fase TR-Dual visto dall\u2019interno della camera di taglio":"blade rotor of a Fase TR-Dual shredder seen from inside the cutting chamber",
"trituratore Fase TR-Dual che scarica il truciolo frantumato in due cassette di raccolta":"Fase TR-Dual shredder discharging shredded chips into two collection trays",
"centralina idraulica e quadro di comando di un trituratore Fase TR-Dual":"hydraulic power pack and control panel of a Fase TR-Dual shredder",
"cumulo di truciolo metallico lucido con la targa Fase appoggiata davanti":"pile of bright metal chips with the Fase nameplate propped in front",
"Truciolo d\u2019acciaio a spirale, ripreso da vicino, in un letto fitto":"close-up of a dense bed of spiral steel swarf",
"centrifuga Fase serie FC, fusto inox su basamento verde acqua, cilindro di apertura del coperchio e motore esterno":"Fase FC series centrifuge, stainless drum on a sea-green base, lid opening cylinder and external motor",
"disoleatrice Fase serie FD a ciclo continuo, imbuto di carico in sommità e portello di ispezione removibile":"Fase FD series continuous-cycle oil-removal centrifuge, loading funnel on top and removable inspection hatch",
/* le venti taglie del carosello FD, dalla 250 alla 1000 */
"disoleatrice Fase FD 250 con imbuto di carico aperto in sommità, scivolo di scarico e motore a fianco":"Fase FD 250 oil-removal centrifuge with the loading funnel open on top, discharge chute and motor alongside",
"disoleatrice Fase FD 250: fusto bianco con targa dati, bocchello di scarico e motore sul basamento":"Fase FD 250: white drum with data plate, discharge spout and motor on the base",
"disoleatrice Fase FD 250 vista di tre quarti, con il basamento forato che porta il marchio":"Fase FD 250 seen three-quarters on, with the perforated base carrying the brand mark",
"disoleatrice Fase FD 250 sotto la griglia di carico, con scivolo di scarico e motore alla base":"Fase FD 250 under the loading grid, with discharge chute and motor at the base",
"disoleatrice Fase FD 250 installata a bordo di una macchina utensile, su cavalletto":"Fase FD 250 installed alongside a machine tool, on a stand",
"disoleatrice Fase FD 250 su cavalletto, con il quadro di comando a fianco":"Fase FD 250 on a stand, with the control panel beside it",
"disoleatrice Fase FD 350 su telaio nero, con tramoggia di scarico e quadro di comando":"Fase FD 350 on a black frame, with discharge hopper and control panel",
"disoleatrice Fase FD 350 con serbatoio del lubrorefrigerante e quadro elettrico a fianco":"Fase FD 350 with the coolant tank and the electrical panel alongside",
"disoleatrice Fase FD 350: coperchio con maniglie, targa dati e motore autoportante":"Fase FD 350: lid with handles, data plate and self-supporting motor",
"disoleatrice Fase FD 350 dentro il telaio di sostegno, con il motore sul basamento":"Fase FD 350 inside its support frame, with the motor on the base",
"disoleatrice Fase FD 420 nel telaio di sostegno, con la tramoggia di carico ribaltata":"Fase FD 420 in its support frame, with the loading hopper tilted open",
"disoleatrice Fase FD 500 nel telaio di sostegno, sotto la tramoggia di carico":"Fase FD 500 in its support frame, under the loading hopper",
"disoleatrice Fase FD 500 nel telaio, con la tramoggia di carico in sommità":"Fase FD 500 in the frame, with the loading hopper on top",
"disoleatrice Fase FD 500 in azzurro, carico dall’alto e quadro a bordo macchina":"Fase FD 500 in light blue, top loading and control panel on board",
"disoleatrice Fase FD 500 in azzurro alimentata da nastro, con cassone di raccolta":"Fase FD 500 in light blue fed by a conveyor, with collection bin",
"disoleatrice Fase FD 500 in verde su cavalletto, fra il nastro di carico e quello di scarico":"Fase FD 500 in green on a stand, between the loading and discharge conveyors",
"disoleatrice Fase FD 650: fusto grigio con ganci di chiusura rossi e motore su antivibranti":"Fase FD 650: grey drum with red lid clamps and motor on anti-vibration mounts",
"disoleatrice Fase FD 650 in verde, vista frontale con motore e antivibranti":"Fase FD 650 in green, front view with motor and anti-vibration mounts",
"disoleatrice Fase FD 650 in rosso, con i ganci di chiusura del coperchio":"Fase FD 650 in red, with the lid clamps",
"disoleatrice Fase FD 1000 in blu, la taglia maggiore della serie, con motore esterno":"Fase FD 1000 in blue, the largest size in the series, with external motor",
"centrifuga Fase con coperchio aperto e paniere in vista":"Fase centrifuge with the lid open and the basket in view",
"impianto Fase a ciclo continuo: tramoggia di carico, elevatore verso la centrifuga, cassone di raccolta e cisterna del lubrorefrigerante":"Fase continuous-cycle system: loading hopper, elevator to the centrifuge, collection bin and coolant tank",
"impianto Fase a paniere estraibile: portale con pinza sopra le stazioni di centrifugazione, dietro la recinzione di protezione":"Fase removable-basket system: gantry with gripper above the centrifuging stations, behind the safety fence",
"gruppo compatto a ciclo continuo: tramoggia ribaltabile, elevatore e centrifuga inox sul basamento":"compact continuous-cycle unit: tipping hopper, elevator and stainless centrifuge on the base frame",
"impianto a ciclo continuo su portale: nastro di carico in alto, centrifuga e serbatoio del lubrorefrigerante":"continuous-cycle system on a gantry: loading conveyor above, centrifuge and coolant tank",
"impianto a ciclo continuo con silo di stoccaggio, trituratore, centrifuga e cassoni di raccolta su ruote":"continuous-cycle system with storage silo, shredder, centrifuge and wheeled collection bins",
"impianto a ciclo continuo in reparto, dentro la recinzione di protezione, con trituratore e centrifuga in linea":"continuous-cycle system on the shop floor, inside the safety fence, with shredder and centrifuge in line",
"linea a ciclo continuo con silo, trituratore, centrifuga e vasca di recupero del lubrorefrigerante":"continuous-cycle line with silo, shredder, centrifuge and coolant recovery tank",
"impianto a ciclo continuo con centrifuga su cavalletto, cisterna del lubrorefrigerante e centralina idraulica":"continuous-cycle system with the centrifuge on a stand, coolant tank and hydraulic power pack",
"impianto a ciclo continuo in reparto: quadro di comando, tramoggia con spintore idraulico e centrifuga dietro la recinzione":"continuous-cycle system on the shop floor: control panel, hopper with hydraulic ram and centrifuge behind the fence",
"impianto a ciclo continuo con nastro di carico, centrifuga e compressore dentro la recinzione di protezione":"continuous-cycle system with loading conveyor, centrifuge and compressor inside the safety fence",
"linea a paniere estraibile: portale su rotaia, panieri in acciaio inox, bacini di contenimento ed elevatore ribaltatore":"removable-basket line: rail-mounted gantry, stainless steel baskets, containment tubs and bin lifter-tipper",
"portale di manipolazione di un impianto a paniere estraibile, con i cilindri della pinza":"handling gantry of a removable-basket system, with the gripper cylinders",
"pinza del portale che afferra il paniere, vista da sotto":"the gantry gripper closing on the basket, seen from below",
"impianto Fase di asciugatura per ambiente galvanico: linea con vasche, due centrifughe inox e ribaltatore per cassoni":"Fase drying system for electroplating: line with tanks, two stainless centrifuges and a bin lifter-tipper",
"trituratore Fase serie TR ad asse orizzontale, corpo blu con rotore a coltelli in vista e due motoriduttori in asse":"Fase TR series horizontal-shaft shredder, blue body with the blade rotor in view and two in-line gearmotors",
"trituratore Fase serie TRW ad asse verticale, tramoggia di carico e motore laterale":"Fase TRW series vertical-shaft shredder, loading hopper and side-mounted motor",
"quattro centrifughe Fase affiancate: disoleatrice a ciclo continuo, centrifuga a cesto in acciaio inox, centrifuga con coperchio a cupola e centrifuga su antivibranti":"Four Fase centrifuges side by side: continuous-cycle oil-removal centrifuge, stainless steel basket centrifuge, dome-lid centrifuge and centrifuge on anti-vibration mounts",
"quattro trituratori Fase affiancati: due ad asse orizzontale e due ad asse verticale con tramoggia di carico":"Four Fase shredders side by side: two horizontal-shaft and two vertical-shaft with loading hopper",
"Trasmissione a catena di un trituratore Fase: pignone, albero e targa":"Chain drive of a Fase shredder: sprocket, shaft and nameplate",
"immagine non disponibile: nessuna foto verificata per questa macchina":"image unavailable: no verified photograph for this machine",
"macchina utensile in lavorazione con pezzo staffato sul piano":"machine tool cutting, with the workpiece clamped to the table",
"matasse di truciolo metallico lucido viste da vicino":"close-up of tangled bright metal chips",
"particolari in ottone appena lavorati, allineati su un piano":"freshly machined brass parts lined up on a bench",
"dadi e rondelle zincati alla rinfusa dentro un contenitore":"zinc-plated nuts and washers loose in a container",
"capannone con macchine utensili di grandi dimensioni allineate":"workshop with large machine tools in a row",
"linea di trasporto a catene in un reparto di produzione":"chain conveyor line in a production department",
"reparto con serbatoi conici bianchi allineati sotto un carroponte":"department with white conical tanks in a row under an overhead crane",
"prova di triturazione nell’area test":"shredding test in the test area",
"banner MECSPE 2026: appuntamento a BolognaFiere dal 4 al 6 marzo 2026, ventiquattresima edizione":"MECSPE 2026 banner: see you at BolognaFiere, 4–6 March 2026, twenty-fourth edition",
"stand Fase a MECSPE 2021":"Fase stand at MECSPE 2021",
"visitatori allo stand MECSPE 2022":"visitors at the MECSPE 2022 stand",
"macchine esposte a MECSPE 2024":"machines on show at MECSPE 2024",
"allestimento dello stand MECSPE 2025":"setting up the MECSPE 2025 stand",
"stand Fase al salone Fornitore Offresi":"Fase stand at the Fornitore Offresi show",

/* --- modifiche del committente, 2 ottobre 2026 ---------------------- */
"I nostri impianti riducono l’umidità residua sotto il 2% e permettono il riutilizzo del lubrorefrigerante nel rispetto della normativa vigente.":"Our systems bring residual moisture below 2% and allow the coolant to be reused, in compliance with current regulations.",
"Il progetto comincia dal materiale da trattare, dal volume di truciolo metallico e dalla misura degli spazi disponibili.":"A project begins with the material to be processed, the volume of metal chips and the measurements of the space available.",
"Il team tecnico segue l’impianto dalla preparazione del progetto fino al collaudo e prosegue con controlli e manutenzioni programmate.":"Our engineers follow the system from design through to commissioning, and carry on with scheduled checks and maintenance.",
"La teleassistenza presente su tutti gli impianti permette di fornire un supporto continuo.":"Remote support, fitted on every system, means continuous assistance.",
"Corpo":"Body",
"Mantello":"Shroud",
"da nastro trasportatore o elevatore ribaltatore":"by belt conveyor or bin lifter-tipper",
"rovesciamento automatico del cesto":"automatic basket tipping",
"trucioli metallici e minuterie":"metal chips and small parts",
"Cesto in lamiera forata":"Perforated sheet basket",
"Quadro di comando affiancato":"Control panel alongside the machine",
"Nastro trasportatore per carico automatico":"Belt conveyor for automatic loading",
"Motorizzazione":"Drive",
"Elettrica":"Electric",
"Performance":"Performance",
"Produttività":"Output",
"Trattamento di materiali e lubrificanti diversi senza contaminazioni":"Different materials and lubricants processed without cross-contamination",
};

/* ---------------------------------------------------------------------
   Da qui in giu': il meccanismo.
   --------------------------------------------------------------------- */

/* La mappa inversa serve per tornare in italiano. Se due frasi italiane
   diverse hanno la stessa traduzione inglese, la prima vince: nel dubbio
   e' meglio non tradurre che tradurre a caso. */
var IT = {};
for (var k in EN) { if (EN.hasOwnProperty(k) && !IT.hasOwnProperty(EN[k])) IT[EN[k]] = k; }

var ATTRIBUTI = ['alt','aria-label','data-scramble','placeholder'];
var CHIAVE = 'fase-lingua';

function normalizza(t){ return t.replace(/\s+/g,' ').trim(); }

/* Tornare in italiano con la sola mappa inversa perderebbe le distinzioni
   che l'inglese non fa: "cesto" e "paniere" sono tutti e due "basket", e al
   ritorno diventerebbero la stessa parola. Percio' l'originale italiano
   resta appeso al nodo, e la mappa inversa serve solo di riserva. */
function scambiaTesti(verso, mappa){
  var salta = {SCRIPT:1, STYLE:1};
  var camminatore = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function(n){
      if(!n.parentNode || salta[n.parentNode.nodeName]) return NodeFilter.FILTER_REJECT;
      return normalizza(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  var nodi = [], n;
  while ((n = camminatore.nextNode())) nodi.push(n);
  for (var i=0; i<nodi.length; i++){
    var nodo = nodi[i], testo = nodo.nodeValue, chiave = normalizza(testo), nuovo;
    if (verso === 'en'){
      nuovo = mappa[chiave];
      if (nuovo === undefined || nuovo === chiave) continue;
      nodo.originaleItaliano = chiave;
    } else {
      nuovo = nodo.originaleItaliano !== undefined ? nodo.originaleItaliano : mappa[chiave];
      if (nuovo === undefined || nuovo === chiave) continue;
    }
    /* gli spazi ai bordi tengono separate le parole quando il testo e'
       spezzato fra piu' nodi, per esempio "scrivete a <a>indirizzo</a>" */
    nodo.nodeValue = (/^\s/.test(testo)?' ':'') + nuovo + (/\s$/.test(testo)?' ':'');
  }
}

function scambiaValore(porta, leggi, scrivi, verso, mappa){
  var attuale = normalizza(leggi() || ''); if (!attuale) return;
  var nuovo;
  if (verso === 'en'){
    nuovo = mappa[attuale];
    if (nuovo === undefined) return;
    porta.originaliItaliani = porta.originaliItaliani || {};
    porta.originaliItaliani[scrivi.chiave] = attuale;
  } else {
    var salvati = porta.originaliItaliani;
    nuovo = (salvati && salvati[scrivi.chiave] !== undefined)
      ? salvati[scrivi.chiave] : mappa[attuale];
    if (nuovo === undefined) return;
  }
  scrivi(nuovo);
}

function scambiaAttributi(verso, mappa){
  for (var a=0; a<ATTRIBUTI.length; a++){
    var nome = ATTRIBUTI[a];
    var elenco = document.querySelectorAll('['+nome+']');
    for (var i=0; i<elenco.length; i++){
      var el = elenco[i];
      if (el.hasAttribute('data-no-i18n')) continue;
      (function(el, nome){
        var scrivi = function(v){ el.setAttribute(nome, v); };
        scrivi.chiave = nome;
        scambiaValore(el, function(){ return el.getAttribute(nome); }, scrivi, verso, mappa);
      })(el, nome);
    }
  }
  var testa = document.head;
  var scriviTitolo = function(v){ document.title = v; };
  scriviTitolo.chiave = 'title';
  scambiaValore(testa, function(){ return document.title; }, scriviTitolo, verso, mappa);

  var descr = document.querySelector('meta[name="description"]');
  if (descr){
    var scriviDescr = function(v){ descr.setAttribute('content', v); };
    scriviDescr.chiave = 'content';
    scambiaValore(descr, function(){ return descr.getAttribute('content'); }, scriviDescr, verso, mappa);
  }
}

function aggiornaTasti(lingua){
  var tasti = document.querySelectorAll('.lang-toggle');
  for (var i=0; i<tasti.length; i++){
    tasti[i].textContent = (lingua === 'en') ? 'IT' : 'EN';
    tasti[i].setAttribute('aria-label', (lingua === 'en')
      ? 'Leggi questa pagina in italiano' : 'Read this page in English');
  }
}

function applica(lingua){
  var mappa = (lingua === 'en') ? EN : IT;
  scambiaTesti(lingua, mappa);
  scambiaAttributi(lingua, mappa);
  document.documentElement.setAttribute('lang', lingua === 'en' ? 'en' : 'it');
  aggiornaTasti(lingua);
}

function leggiPreferenza(){
  try { return localStorage.getItem(CHIAVE); } catch(e){ return null; }
}
function scriviPreferenza(v){
  try { localStorage.setItem(CHIAVE, v); } catch(e){}
}

var lingua = leggiPreferenza() === 'en' ? 'en' : 'it';
if (lingua === 'en') applica('en');

document.addEventListener('click', function(e){
  var t = e.target.closest ? e.target.closest('.lang-toggle') : null;
  if (!t) return;
  e.preventDefault();
  lingua = (lingua === 'en') ? 'it' : 'en';
  scriviPreferenza(lingua);
  applica(lingua);
});

/* La pagina nasce in italiano: se resta cosi' basta scrivere l'etichetta
   giusta sul pulsante, senza ripassare tutto il documento. */
if (lingua === 'it') aggiornaTasti('it');
})();
