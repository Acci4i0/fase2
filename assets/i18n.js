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
"Parla con un tecnico":"Talk to an engineer",
"Apri il menu":"Open the menu",
"Chiudi il menu":"Close the menu",
"Percorso":"Breadcrumb",
"LinkedIn":"LinkedIn",
"LM Industry":"LM Industry",
"Fase":"Fase",
"Fase Mechanical Engineering — home":"Fase Mechanical Engineering — home",
"Policy Privacy":"Privacy policy",
"Cookie policy":"Cookie policy",
"Trattiamo un campione del vostro sfrido prima dell’offerta.":"We process a sample of your scrap before quoting.",
"Via Francesco Crispi 12 — 36056 Tezze sul Brenta (VI)":"Via Francesco Crispi 12 — 36056 Tezze sul Brenta (VI), Italy",
"Via Francesco Crispi 12":"Via Francesco Crispi 12",
"36056 Tezze sul Brenta (VI)":"36056 Tezze sul Brenta (VI), Italy",
"36056 Tezze sul Brenta (VI), Italia":"36056 Tezze sul Brenta (VI), Italy",
"Fase Mechanical Engineering S.r.l.":"Fase Mechanical Engineering S.r.l.",
"info@fasemec.com":"info@fasemec.com",
"© 2026 Fase Mechanical Engineering S.r.l. — P.IVA 03166770242":"© 2026 Fase Mechanical Engineering S.r.l. — VAT IT03166770242",
"Soggetta alla direzione e coordinamento di":"Subject to the direction and coordination of",
"C.F./P.IVA e n. iscriz. R.I. di VI: 03166770242 · N. REA di VI 304063 · Capitale sociale Euro 50.000,00 i.v. · Soggetta alla direzione e coordinamento di LM Industry Srl – Registro Imprese di Vicenza nr. 02739500243":"Tax code / VAT and Vicenza Companies Register no.: 03166770242 · Vicenza REA no. 304063 · Share capital EUR 50,000.00 fully paid up · Subject to the direction and coordination of LM Industry Srl – Vicenza Companies Register no. 02739500243",
"Voce precedente":"Previous item",
"Voce successiva":"Next item",
"Apri la sede sulla mappa":"Open our location on the map",
"Scrivi a info@fasemec.com":"Write to info@fasemec.com",

/* --- home ---------------------------------------------------------- */
"Sfrido asciutto.":"Dry scrap.",
"Fluido in circolo.":"Coolant back in circuit.",
"Scopri le macchine":"Explore the machines",
"Centrifughe, impianti di trattamento e trituratori: otto serie a catalogo.":"Centrifuges, treatment systems and shredders: eight series in the catalogue.",
"Il nostro lavoro comincia dove finisce la lavorazione meccanica. Il truciolo esce dalla macchina utensile carico di lubrorefrigerante: i nostri sistemi lo separano, recuperano il fluido e restituiscono uno sfrido asciutto, pronto per essere valorizzato.":"Our work begins where machining ends. Chips leave the machine tool soaked in coolant: our systems separate the two, recover the fluid and return dry scrap, ready to be sold on.",
"Sistemi costruiti":"Systems built",
"sul vostro reparto":"around your shop floor",
"I nostri sistemi":"Our systems",
"Ricerca, progettazione e costruzione avvengono all’interno. L’area test verifica le soluzioni sullo sfrido reale del cliente prima della messa in produzione.":"Research, design and manufacturing all happen in house. Our test area proves each solution on the customer’s own scrap before it goes into production.",
"Ogni reparto":"Every shop floor",
"ha il suo sfrido.":"has its own scrap.",
"Ogni reparto ha il suo sfrido":"Every shop floor has its own scrap",
"Disoleatrici a ciclo continuo e a cesto estraibile":"Continuous-cycle and removable-basket oil-removal centrifuges",
"Linee automatiche di trattamento e asciugatura":"Automatic treatment and drying lines",
"Frantumazione di trucioli lunghi e matassosi":"Breaking down long and tangled chips",
"Il metodo":"How we work",
"Dal progetto al collaudo":"From design to commissioning",
"Test sullo sfrido reale del cliente":"Testing on the customer’s own scrap",
"Umidità residua sotto il 2%":"Residual moisture below 2%",
"Il lubrorefrigerante recuperato rientra nel circuito della macchina utensile.":"The recovered coolant goes back into the machine tool circuit.",
"L’area test verifica la resa sul vostro materiale prima della messa in produzione.":"Our test area proves the throughput on your material before it goes into production.",
"L’esperienza maturata nella centrifugazione industriale resta il riferimento su cui dimensioniamo ogni nuova macchina.":"Two decades of industrial centrifuging remain the benchmark we size every new machine against.",
"Dal truciolo al valore":"From chip to value",
"Ogni chilo di lubrorefrigerante che resta nel truciolo è un costo due volte: è fluido da riacquistare ed è peso che abbassa il prezzo dello sfrido. I nostri impianti portano l’umidità residua sotto il 2% e riportano il lubrorefrigerante nel circuito di lavorazione.":"Every kilo of coolant left in the chips costs twice over: fluid you have to buy again, and weight that lowers the price of the scrap. Our systems bring residual moisture below 2% and return the coolant to the machining circuit.",
"Ogni impianto nasce da un reparto preciso":"Every system starts from one specific shop floor",
"Non partiamo da un catalogo chiuso. Un progetto comincia dalla misura degli spazi, dal materiale da trattare e dal volume di sfrido che il reparto produce: da lì nascono il layout della linea e il dimensionamento della macchina.":"We do not start from a closed catalogue. A project begins with measuring the space, the material to be processed and the volume of scrap the department produces: the line layout and the machine sizing follow from there.",
"Il rapporto non finisce alla consegna":"The relationship does not end at delivery",
"Il team tecnico segue l’impianto dalla preparazione del progetto fino al collaudo, e prosegue con controlli e manutenzioni programmate. Sugli impianti a ciclo continuo la teleassistenza da remoto permette di intervenire senza attendere una trasferta.":"Our engineers follow the system from design through to commissioning, and carry on with scheduled checks and maintenance. On continuous-cycle systems, remote support means we can act without waiting for a site visit.",
"La resa":"The return",
"Resa misurata sul materiale":"Return measured on the material",
"Il ritorno si misura su due fronti: lo sfrido trattato, che alla cessione viene pagato per il metallo, e il lubrorefrigerante che rientra nel circuito invece di finire nello smaltimento.":"The return shows up on two fronts: treated scrap, paid for its metal when sold, and coolant that goes back into the circuit instead of into disposal.",
"Scopri l’azienda":"About the company",
"il lubrorefrigerante separato torna in vasca e rientra nel circuito della macchina utensile.":"the separated coolant returns to the tank and back into the machine tool circuit.",
"Fino a 7.000 kg/h.":"Up to 7,000 kg/h.",
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
"centrifughe.":"centrifuges.",
"impianti.":"treatment systems.",
"trituratori.":"shredders.",
"Separano il lubrorefrigerante dallo sfrido e restituiscono un truciolo asciutto, pronto per la valorizzazione.":"They separate coolant from scrap and return dry chips, ready to be sold on.",
"Linee complete che collegano macchina utensile, trattamento dello sfrido e stoccaggio, dimensionate sul reparto.":"Complete lines linking machine tool, scrap treatment and storage, sized around your shop floor.",
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
"Impianto automatico di disoleatura del truciolo metallico corto, montato su base pallettizzata: arriva in reparto già assemblato e si mette in funzione dove serve.":"Automatic de-oiling system for short metal chips, mounted on a palletised base: it arrives on the shop floor already assembled and goes to work where it is needed.",
"Il gruppo comprende il trasportatore a tapparelle con tramoggia di accumulo che carica la centrifuga, il setaccio che separa i pezzi e i fine barra, la vasca di recupero dell\u2019olio o dell\u2019emulsione e il quadro elettrico. Due taglie di centrifuga: KOMBI-15 fino a 150 kg/h, KOMBI-40 fino a 400 kg/h.":"The unit comprises the slat conveyor with accumulation hopper that feeds the centrifuge, the sieve that separates parts and bar ends, the oil or emulsion recovery tank and the control panel. Two centrifuge sizes: KOMBI-15 up to 150 kg/h, KOMBI-40 up to 400 kg/h.",
"Portata truciolo":"Chip throughput",
"150 kg/h KOMBI-15, 400 kg/h KOMBI-40":"150 kg/h KOMBI-15, 400 kg/h KOMBI-40",
"Potenza totale":"Total power",
"Tramoggia di carico":"Loading hopper",
"Peso":"Weight",
"Alimentazione":"Power supply",
"Scheda tecnica":"Data sheet",
"Depliant KOMBI (PDF)":"KOMBI brochure (PDF)",
"In dotazione":"Supplied as standard",
"Base pallettizzata: l\u2019impianto arriva assemblato":"Palletised base: the system arrives assembled",
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
"Serie LM 660 AG":"LM 660 AG series",
"Centrifughe disoleatrici serie LM 660 AG":"LM 660 AG series oil-removal centrifuges",
"Centrifughe disoleatrici serie LM 660 AG | Fase Mechanical Engineering":"LM 660 AG series oil-removal centrifuges | Fase Mechanical Engineering",
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
"Umidità residua sotto il 2%, fino a 7.000 kg/h":"Residual moisture below 2%, up to 7,000 kg/h",
"Cesto estraibile per cariche e spezzoni grandi":"Removable basket for large loads and long offcuts",
"Alimentazione continua, dati secondo Industria 4.0":"Continuous feed, data to Industry 4.0",
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
"Centrifugano sfrido minuto, ferroso e non, in uscita dalla macchina utensile. Il materiale entra dalla parte alta, olio intero ed emulsioni escono canalizzati.":"They spin fine scrap, ferrous and non-ferrous, straight off the machine tool. Material enters from the top; neat oil and emulsions are channelled out.",
"Disoleatrice a cesto estraibile per cariche importanti. Tratta sfrido con spezzoni di taglia rilevante e minuteria; il processo si automatizza con un impianto di manipolazione dedicato.":"Removable-basket oil-removal centrifuge for heavy loads. It handles scrap with sizeable offcuts as well as small parts; the process can be automated with a dedicated handling system.",
"Le taglie compatte si installano a bordo macchina; le maggiori superano i 7.000 kg/h. Il lubrorefrigerante recuperato lascia meno del 2% di umidità residua.":"The compact sizes install alongside the machine tool; the larger ones exceed 7,000 kg/h. Coolant recovery leaves less than 2% residual moisture.",
"Linee con centrifuga a cesto estraibile, adatte a truciolo corto, lungo, matassoso o con pezzi e fine barra.":"Lines with a removable-basket centrifuge, suited to short, long or tangled chips, and to loads with parts and bar ends.",
"Linee di asciugatura per processi galvanici, con svuotamento del materiale dai cassoni e carico automatico del rotobarile.":"Drying lines for electroplating processes, emptying material from bins and loading the plating barrel automatically.",
"Trituratore compatto per trucioli lunghi e matassosi, anche in presenza di pezzi di fine barra. Il sistema di espulsione automatica dello spezzone è brevettato.":"Compact shredder for long and tangled chips, bar ends included. The automatic offcut ejection system is patented.",
"Trituratore per grandi quantità di truciolo lungo e matassoso, con espulsione automatica dei fine barra. Movimentazione meccanica o idraulica.":"Shredder for large volumes of long and tangled chips, with automatic bar-end ejection. Mechanical or hydraulic drive.",
"Alimentano la centrifuga senza interruzioni. La configurazione dipende dal materiale da trattare, dalle quantità e dal tipo di stoccaggio.":"They feed the centrifuge without interruption. The configuration depends on the material, the volumes and the type of storage.",
"Il layout si costruisce sulla pianta del reparto. Sulle linee a ciclo continuo la gestione elettrica è predisposta secondo la direttiva Industria 4.0, con archiviazione dei dati e teleassistenza.":"The layout is built on the floor plan of your department. On continuous-cycle lines the electrical control is set up to Industry 4.0, with data logging and remote support.",
"L’ambiente detta i vincoli più delle prestazioni: umidità, residui aggressivi nell’aria, e una movimentazione che deve integrarsi con il ritmo della linea. Per questo gli impianti sono a paniere estraibile, con materiali scelti per resistere.":"The environment sets the constraints more than the performance figures do: humidity, aggressive residues in the air, and handling that has to fit the rhythm of the line. That is why these systems use a removable basket, with materials chosen to last.",
"Il paniere entra carico ed esce pronto per il controllo o l’imballo. Tempo e giri sono impostati, quindi tutti i pezzi del lotto escono nelle stesse condizioni.":"The basket goes in loaded and comes out ready for inspection or packing. Time and speed are preset, so every part in the batch comes out in the same condition.",
"Disposizione e layout nascono da una valutazione degli spazi disponibili e del processo esistente.":"Arrangement and layout follow from an assessment of the available space and the existing process.",
"Sono la scelta obbligata quando nello stesso reparto si lavorano materiali diversi, anche con lubrorefrigeranti diversi.":"They are the only choice when one department works different materials, sometimes with different coolants.",

/* --- tabelle tecniche ---------------------------------------------- */
"Modello":"Model",
"Giri/min":"RPM",
"Portata paniere (kg)":"Basket capacity (kg)",
"Volume paniere (l)":"Basket volume (l)",
"Ø cesto (mm)":"Basket Ø (mm)",
"Ø paniere (mm)":"Basket Ø (mm)",
"Portata nominale (mc/h)":"Nominal throughput (m³/h)",
"Resa acciaio (kg/h)":"Steel throughput (kg/h)",
"Resa per materiale (kg/h)":"Throughput by material (kg/h)",
"Resa fino a":"Throughput up to",
"Sezione entrata sfrido (mm)":"Scrap inlet section (mm)",
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
"Mantello":"Shroud",
"Tramoggia":"Hopper",
"Fasciatura":"Lining",
"Corpo macchina":"Machine body",
"Inserti di taglio":"Cutting inserts",
"Utensili":"Cutting tools",
"Supporto":"Bearing housing",
"Sospensioni":"Suspension",
"Finitura":"Finish",
"Software":"Software",
"Dati":"Data",
"Gestione":"Control",
"Fe da 30 mm":"30 mm steel",
"Fe o inox AISI 304":"Steel or AISI 304 stainless",
"lamiera forata, fori Ø3 mm":"perforated sheet, Ø3 mm holes",
"acciaio da utensili temprato":"hardened tool steel",
"acciaio da utensili temprato, sagomato a CNC":"hardened tool steel, CNC-profiled",
"accoglie un intero cassone":"takes a whole bin",
"antiusura sulle parti a contatto":"wear-resistant on contact surfaces",
"antiusura, ricavato dal pieno":"wear-resistant, machined from solid",
"antiusura, vagliatura personalizzabile":"wear-resistant, screening to order",
"apertura assistita da cilindro a gas":"gas-strut assisted opening",
"archiviazione digitale di processo":"digital process logging",
"autoportante, verniciatura a polvere":"self-supporting, powder-coated",
"carpenteria con sportelli removibili":"fabricated steel with removable panels",
"con bacino di contenimento liquidi":"with liquid containment tray",
"da remoto per gli urgenti":"remote, for urgent calls",
"dedicato, sviluppato sull’impianto":"dedicated, developed on the system",
"elettrica e analogica, Industria 4.0":"electrical and analogue, Industry 4.0",
"esterno, controllato da inverter":"external, inverter-controlled",
"forato, sotto il trasportatore":"perforated, under the conveyor",
"idraulico, evita l’arresto in tramoggia":"hydraulic, prevents hopper blockage",
"piastre elettrosaldate sagomate":"profiled electro-welded plate",
"removibili, Fe o inox AISI 304":"removable, steel or AISI 304 stainless",
"robusto e accessibile":"sturdy and accessible",
"sostituibili, lame intercambiabili":"replaceable, interchangeable blades",
"sovradimensionato e cementato":"oversized and case-hardened",
"su antivibranti, arresto automatico":"on anti-vibration mounts, automatic stop",
"temprati, estraibili da cassetti":"hardened, withdrawn from external drawers",
"trattamenti integrabili nella linea":"treatments that fit into the line",
"trattamento termico per usi gravosi":"heat-treated for heavy duty",
"tre punti per carichi eccentrici":"three-point, for off-centre loads",
"Industria 4.0 e teleassistenza":"Industry 4.0 and remote support",

/* --- elenchi puntati delle schede ---------------------------------- */
"Cesto in lamiera forata con fori Ø3 mm":"Perforated sheet basket with Ø3 mm holes",
"Cesto supplementare":"Additional basket",
"Cesto con bacino di contenimento liquidi inferiore":"Basket with lower liquid containment tray",
"Fusto e coperchio in Fe, su richiesta in acciaio inox AISI 304":"Steel drum and lid, AISI 304 stainless on request",
"Fusto e coperchio in acciaio inox AISI 304":"AISI 304 stainless steel drum and lid",
"Fusto e coperchio removibili in Fe, su richiesta in inox AISI 304":"Removable steel drum and lid, AISI 304 stainless on request",
"Apertura automatica del coperchio con cilindro pneumatico":"Automatic lid opening with pneumatic cylinder",
"Apertura e chiusura del coperchio assistite da cilindro a gas":"Gas-strut assisted lid opening and closing",
"Basamento in carpenteria con sportelli removibili per pulizia e controllo":"Fabricated steel base frame with removable panels for cleaning and inspection",
"Basamento portante in Fe da 30 mm":"30 mm steel load-bearing base frame",
"Motore autofrenante esterno e quadro elettrico di gestione":"External brake motor and control panel",
"Motore di rotazione autoportante e verniciatura a polvere":"Self-supporting drive motor and powder coating",
"Motore esterno controllato da inverter":"External inverter-controlled motor",
"Variatore di giri elettronico":"Electronic speed control",
"Variatore di giri elettronico per accelerazione e decelerazione controllate":"Electronic speed control for managed acceleration and deceleration",
"Box elettrico con variatore di giri e predisposizione per interfaccia":"Electrical box with speed control and interface provision",
"Geometria del filtro studiata per la separazione solido/liquido":"Filter geometry designed for solid/liquid separation",
"Vasca di recupero con controllo di livello e pompa di rilancio":"Recovery tank with level control and transfer pump",
"Vasca di recupero con controllo di livello, pompa di lavaggio e rilancio":"Recovery tank with level control, wash pump and transfer pump",
"Sospensioni su tre punti per dissipare i carichi eccentrici":"Three-point suspension to absorb off-centre loads",
"Sensore di arresto in caso di sbilanciamento eccessivo":"Stop sensor triggered by excessive imbalance",
"Rotore su antivibranti, con arresto automatico in caso di vibrazione eccessiva":"Rotor on anti-vibration mounts, with automatic stop on excessive vibration",
"Rotore di frantumazione in acciaio da utensili temprato":"Shredding rotor in hardened tool steel",
"Albero di rotazione con trattamento termico per sollecitazioni gravose":"Drive shaft heat-treated for heavy-duty loads",
"Braccio di miscelazione della matassa in antiusura, ricavato dal pieno":"Wear-resistant mixing arm for tangled chips, machined from solid",
"Guance inferiori antiusura con vagliatura personalizzabile":"Wear-resistant lower side plates with screening to order",
"Scocca portante in piastre elettrosaldate sagomate e rinforzate":"Load-bearing body in profiled, reinforced electro-welded plate",
"Spintore idraulico che impedisce l’arresto del materiale in tramoggia":"Hydraulic ram that stops material stalling in the hopper",
"Tramoggia di carico che accoglie un intero cassone":"Loading hopper that takes a whole bin",
"Mantello forato da inserire sotto il trasportatore della macchina utensile":"Perforated shroud to fit under the machine tool conveyor",
"Fasciatura interna antiusura sulle parti a contatto con lo sfrido":"Wear-resistant internal lining on surfaces in contact with scrap",
"Corpo macchina robusto e accessibile per la manutenzione":"Sturdy machine body, accessible for maintenance",
"Paniere in acciaio da utensili temprato, sagomato a CNC":"Basket in hardened tool steel, CNC-profiled",
"Parti a contatto in acciaio antiusura di grosso spessore":"Contact surfaces in heavy-gauge wear-resistant steel",
"Inserti di taglio del rotore sostituibili e lame fisse intercambiabili":"Replaceable rotor cutting inserts and interchangeable fixed blades",
"Utensili di taglio in acciaio temprato, estraibili da cassetti esterni":"Hardened steel cutting tools, withdrawn from external drawers",
"Supporto di rotazione sovradimensionato e cementato, con lubrificazione esterna":"Oversized, case-hardened bearing housing with external lubrication",
"Paracolpi sulla giunzione del motoriduttore":"Shock absorber on the gearmotor coupling",
"Telaio portante per il montaggio sopra un convogliatore":"Load-bearing frame for mounting above a conveyor",
"Bandiera a colonna tirantata con paranco elettrico":"Braced pillar jib crane with electric hoist",
"Kit soffiante ad aria calda con controllo della temperatura":"Hot-air blower kit with temperature control",
"Trattamenti di finitura integrabili nella linea di asciugatura":"Finishing treatments that fit into the drying line",
"Archiviazione digitale dei dati di processo":"Digital logging of process data",
"Gestione elettrica e analogica secondo la direttiva Industria 4.0":"Electrical and analogue control to the Industry 4.0 framework",
"Software dedicato sviluppato sull’impianto":"Dedicated software developed on the system",
"Teleassistenza da remoto per gli interventi urgenti":"Remote support for urgent call-outs",
"Taratura del grado di sovraccarico della macchina":"Calibration of the machine overload threshold",
"Archiviazione dei dati di processo e interventi da remoto sulle linee a ciclo continuo.":"Process data logging and remote intervention on continuous-cycle lines.",

/* --- applicazioni --------------------------------------------------- */
"Quattro lavorazioni, spesso combinate nella stessa linea":"Four processes, often combined in the same line",
"Dal truciolo bagnato al truciolo asciutto":"From wet chips to dry chips",
"Il truciolo esce dalla macchina utensile carico di lubrorefrigerante, e quanto ne trattiene dipende dalla forma: un truciolo minuto ne porta con sé meno di una matassa, e una matassa va prima ridotta. Per questo l’impianto si sceglie a partire dal materiale, non dal listino.":"Chips leave the machine tool soaked in coolant, and how much they hold on to depends on their shape: fine chips carry less than a tangled nest, and a nest has to be broken down first. That is why the system is chosen from the material, not from a price list.",
"Il truciolo esce dalla macchina utensile carico di lubrorefrigerante, e quanto ne trattiene dipende dalla forma. L’impianto si sceglie dal materiale, non dal listino.":"Chips leave the machine tool soaked in coolant, and how much they hold on to depends on their shape. The system is chosen from the material, not from a price list.",
"Centrifugazione del truciolo":"Centrifuging the chips",
"Quanto lubrorefrigerante trattiene il truciolo dipende dalla sua forma: un minuto di ottone si asciuga in fretta, una matassa di inox gocciola per giorni. Nel paniere in rotazione la forza centrifuga spinge il liquido contro la parete filtrante, che lo lascia passare e trattiene il solido.":"How much coolant chips hold on to depends on their shape: fine brass dries quickly, a nest of stainless drips for days. As the basket spins, centrifugal force drives the liquid against the filter wall, which lets it through and holds back the solid.",
"Il fluido raccolto rientra nel circuito della macchina utensile. Lo sfrido esce asciutto: pesa meno, non sporca il piazzale e alla cessione viene pagato per il metallo.":"The collected fluid returns to the machine tool circuit. The scrap comes out dry: it weighs less, it does not foul the yard, and when sold it is paid for its metal.",
"Frantumazione di matasse e fine barra":"Breaking down nests and bar ends",
"Il truciolo lungo è un problema di volume prima che di peso: si avvolge su sé stesso, riempie i cassoni lasciando aria in mezzo, si impiglia in nastri e coclee, e in centrifuga non entra. I fine barra hanno lo stesso effetto.":"Long chips are a problem of bulk before weight: they coil around themselves, fill bins with air in between, snag on belts and augers, and will not go into a centrifuge. Bar ends do the same.",
"Il trituratore lo riduce a frammenti di dimensione controllata. Da lì il materiale si comporta come un truciolo minuto: si trasporta su nastro, si dosa, si centrifuga.":"The shredder reduces them to fragments of controlled size. From there the material behaves like fine chips: it can be conveyed, metered and spun.",
"Asciugatura di pezzi minuti":"Drying small parts",
"Dopo un lavaggio o un passaggio in linea galvanica i pezzi arrivano bagnati, spesso alla rinfusa. Sgocciolare occupa spazio e lascia aloni negli incavi; il forno aggiunge un ciclo termico che non tutti i trattamenti tollerano. La centrifuga risolve il passaggio in meccanica.":"After washing or a pass through a plating line, parts arrive wet, usually loose in bulk. Drip-drying takes up space and leaves marks in recesses; an oven adds a heat cycle that not every coating tolerates. The centrifuge solves the step mechanically.",
"Qui la centrifuga non tratta lo sfrido ma il pezzo finito. Dopo il bagno e il risciacquo i componenti vanno asciugati prima del controllo o dell’imballo, senza aloni sulla superficie appena trattata.":"Here the centrifuge handles the finished part, not the scrap. After the bath and the rinse, components have to be dried before inspection or packing, with no marks on the freshly treated surface.",
"Trattamento in linea":"In-line treatment",
"Quando le quantità crescono, il limite non è più la singola macchina ma il numero di volte in cui qualcuno deve spostare un cassone. La linea collega le fasi: il trituratore riceve lo sfrido, il nastro lo porta alla centrifuga, il fluido torna in vasca.":"As volumes grow, the limit is no longer the single machine but the number of times somebody has to move a bin. The line links the stages: the shredder takes the scrap, the belt carries it to the centrifuge, the fluid goes back to the tank.",
"Un truciolo asciutto occupa meno volume, quindi il cassone si riempie più lentamente, e non gocciola durante il trasporto. Quando le postazioni sono molte si passa a una linea.":"Dry chips take up less room, so the bin fills more slowly, and they do not drip in transit. Once there are many stations, a line takes over.",

/* --- settori -------------------------------------------------------- */
"Reparti diversi, lo stesso punto di intervento":"Different departments, the same point of intervention",
"Cambia il pezzo, cambia il fluido, cambia lo spazio a disposizione. Quello che non cambia è dove interveniamo: subito a valle della lavorazione, prima che lo sfrido esca dal reparto e diventi un costo.":"The part changes, the fluid changes, the space available changes. What does not change is where we step in: immediately downstream of machining, before the scrap leaves the department and turns into a cost.",
"Cambia il pezzo, cambia il fluido, cambia lo spazio. Non cambia dove interveniamo: a valle della lavorazione, prima che lo sfrido diventi un costo.":"The part changes, the fluid changes, the space changes. Where we step in does not: downstream of machining, before the scrap turns into a cost.",
"Officine meccaniche e centri di lavoro":"Machine shops and machining centres",
"In officina la variabile è il cambio commessa: nella stessa settimana passano acciaio, alluminio e ottone, a volte da tenere separati perché mescolarli abbassa il valore del lotto. Anche i fluidi cambiano.":"In a machine shop the variable is the job change: steel, aluminium and brass all pass through in the same week, sometimes to be kept apart because mixing them lowers the value of the batch. The fluids change too.",
"Le macchine a cesto estraibile rispondono a questo modo di lavorare: si tratta un lotto per volta e si passa al successivo senza contaminazioni. Il paniere forato e il fusto removibile rendono la pulizia un’operazione di minuti.":"Removable-basket machines suit this way of working: one batch at a time, then on to the next with no cross-contamination. The perforated basket and the removable drum turn cleaning into a job of minutes.",
"Tornerie automatiche":"Automatic turning shops",
"In torneria il truciolo esce in continuo, spesso minuto e sempre dello stesso materiale: la condizione migliore per trattarlo dove nasce. Una macchina compatta a bordo del tornio intercetta lo sfrido appena cade e restituisce il fluido al circuito.":"In a turning shop chips come off continuously, usually fine and always of the same material: the best case for treating them where they are made. A compact machine beside the lathe catches the scrap as it falls and returns the fluid to the circuit.",
"Reparti galvanici":"Electroplating departments",

/* --- azienda -------------------------------------------------------- */
"Chi siamo":"About us",
"Profilo dell’azienda":"Company profile",
"Il nostro lavoro comincia dove finisce la lavorazione meccanica. Il truciolo esce dalla macchina utensile carico di lubrorefrigerante: i nostri sistemi lo separano, recuperano il fluido e restituiscono uno sfrido asciutto, pronto per essere valorizzato. Da vent’anni progettiamo e costruiamo centrifughe, impianti di trattamento e trituratori per officine meccaniche, tornerie automatiche e reparti galvanici.":"Our work begins where machining ends. Chips leave the machine tool soaked in coolant: our systems separate the two, recover the fluid and return dry scrap, ready to be sold on. For twenty years we have designed and built centrifuges, treatment systems and shredders for machine shops, automatic turning shops and electroplating departments.",
"Da vent'anni Fase progetta e costruisce centrifughe, impianti di trattamento e trituratori per lo sfrido metallico.":"For twenty years Fase has designed and built centrifuges, treatment systems and shredders for metal scrap.",
"Ricerca, progettazione e costruzione avvengono all’interno. L’area test verifica le soluzioni sullo sfrido reale del cliente prima della messa in produzione, così che le rese dichiarate siano quelle che si ottengono in officina.":"Research, design and manufacturing all happen in house. Our test area proves each solution on the customer’s own scrap before it goes into production, so that the figures we quote are the ones you get on the shop floor.",
"Ricerca, progetto e officina restano sotto lo stesso tetto, a Tezze sul Brenta.":"Research, design and workshop stay under one roof, in Tezze sul Brenta.",
"Progettazione e costruzione interne":"In-house design and manufacturing",
"Prove sullo sfrido reale":"Testing on real scrap",
"Il risultato si misura su due fronti. Da una parte il ritorno economico, in tempi brevi, dato dalla valorizzazione dello sfrido trattato e dal fluido recuperato. Dall’altra il minor volume da smaltire e la minor dispersione di lubrorefrigerante, nel rispetto della normativa vigente.":"The result shows up on two fronts. On one side a quick financial return, from the value of the treated scrap and the recovered fluid. On the other, less volume to dispose of and less coolant lost, in line with current regulations.",
"Fase progetta e costruisce centrifughe,":"Fase designs and builds centrifuges,",
"impianti di trattamento e trituratori":"treatment systems and shredders",
"per lo sfrido metallico.":"for metal scrap.",
"Fase progetta e costruisce centrifughe, impianti di trattamento e trituratori per lo sfrido metallico. Umidità residua sotto il 2%.":"Fase designs and builds centrifuges, treatment systems and shredders for metal scrap. Residual moisture below 2%.",

/* --- contatti ------------------------------------------------------- */
"Per rispondere con qualcosa di più di un listino ci serve sapere cosa esce dalla vostra lavorazione. Il materiale, la forma del truciolo, quanto ne producete in un turno e che fluido lo bagna cambiano la macchina da proporre molto più della cifra a budget.":"To answer with more than a price list, we need to know what comes off your machining. The material, the shape of the chips, how much you make in a shift and which fluid wets them change the machine we would propose far more than the budget figure does.",
"Su cosa scrivere":"What to tell us",
"Descriveteci il componente e il ciclo attuale: come viene raccolto oggi lo sfrido, dove finisce, quanto lubrorefrigerante ci resta dentro e che risultato vi serve a valle. Se ci sono vincoli di spazio, di altezza sotto trave o di movimentazione, sono quelli a definire il layout.":"Describe the part and your current cycle: how the scrap is collected today, where it ends up, how much coolant stays in it and what result you need downstream. Where there are constraints on space, headroom or handling, those are what shape the layout.",
"Su richiesta trattiamo un campione del vostro materiale prima di qualsiasi offerta.":"On request we process a sample of your material before any quotation.",
"Contatti diretti":"Direct contacts",
"Sede e stabilimento":"Head office and works",
"Assistenza":"Service",
"Assistenza su un impianto installato":"Service on an installed system",
"Prova su campione di sfrido":"Test on a scrap sample",
"Centrifughe e disoleatrici":"Centrifuges and oil-removal centrifuges",
"Impianti di trattamento truciolo":"Chip treatment systems",
"Altro":"Something else",
"Dimensionamento, prove sullo sfrido e assistenza":"Sizing, scrap testing and service",

/* --- news ------------------------------------------------------------ */
"Fiere, prove e aggiornamenti dall’azienda":"Trade fairs, tests and company news",
"Fiere, prove sullo sfrido e aggiornamenti da Fase Mechanical Engineering.":"Trade fairs, scrap testing and news from Fase Mechanical Engineering.",
"Altre news":"More news",
"Le altre date":"The other dates",
"in calendario.":"in the calendar.",
"Fiere":"Trade fairs",
"Leggi":"Read",
"Per fissare un incontro in fiera o portarci un campione dello sfrido, scrivete a":"To arrange a meeting at the show, or to bring us a scrap sample, write to",
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
"I trituratori frantumano il truciolo e semplificano centrifugazione e stoccaggio. Mettiamo a disposizione una prova gratuita sullo sfrido del cliente, su appuntamento.":"Shredders break down chips and make centrifuging and storage simpler. We offer a free test on the customer’s own scrap, by appointment.",
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
"Nastri, ribalta cassoni e opzioni di macchina":"Conveyors, bin tippers and machine options",
"Nastri trasportatori, ribalta cassoni e opzioni di macchina: quello che collega le fasi e toglie le movimentazioni a mano.":"Belt conveyors, bin tippers and machine options: what links the stages and takes the manual handling out.",
"ribalta cassoni Fase con nastro di scarico in acciaio inox":"Fase bin tipper with stainless steel discharge conveyor",
"ribalta cassoni Fase carenato, con il gruppo di sollevamento in vista":"enclosed Fase bin tipper, with the lifting unit in view",
"Nastri trasportatori":"Belt conveyors",
"Collegano le fasi senza spostare cassoni":"They link the stages without moving bins",
"Il nastro porta lo sfrido da dove nasce a dove viene trattato: dal trituratore alla centrifuga, dalla centrifuga al cassone di raccolta. \u00c8 quello che trasforma due macchine affiancate in una linea, e toglie il passaggio in cui qualcuno deve muovere un contenitore pieno.":"The conveyor carries the scrap from where it is made to where it is treated: from the shredder to the centrifuge, from the centrifuge to the collection bin. It is what turns two machines standing side by side into a line, and removes the step where somebody has to move a full container.",
"Percorso e pendenza nascono dalla pianta del reparto. Dove il truciolo gocciola lungo il tragitto, sotto il nastro va una vasca di raccolta che rimanda il fluido in circolo.":"Route and incline follow from the floor plan of your department. Where chips drip along the way, a collection tray under the conveyor sends the fluid back into circuit.",
"Ribalta cassoni":"Bin tippers",
"Il cassone si svuota senza intervento manuale":"The bin empties with no one lifting it",
"Prende il contenitore pieno, lo solleva e lo rovescia sulla tramoggia o sul nastro. Sulle linee di asciugatura in ambiente galvanico \u00e8 il passaggio che porta il materiale dai cassoni al rotobarile senza che nessuno debba maneggiarlo.":"It takes the full container, lifts it and tips it onto the hopper or the conveyor. On drying lines for electroplating it is the step that moves material from the bins into the plating barrel with no handling at all.",
"Serve dove il volume \u00e8 tale che svuotare a mano diventa il collo di bottiglia del reparto.":"It earns its place where the volumes are such that emptying by hand becomes the bottleneck of the department.",
"Sulla macchina":"On the machine",
"Le opzioni a catalogo":"The catalogue options",
"Disoleatrici":"Oil-removal centrifuges",

/* --- titoli delle pagine --------------------------------------------- */
"Fase Mechanical Engineering | Centrifughe, impianti e trituratori per lo sfrido metallico":"Fase Mechanical Engineering | Centrifuges, treatment systems and shredders for metal scrap",
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
"Linea di trattamento truciolo Fase":"Fase chip treatment line",
"centrifuga Fase serie FC, fusto inox su basamento verde acqua, cilindro di apertura del coperchio e motore esterno":"Fase FC series centrifuge, stainless drum on a sea-green base, lid opening cylinder and external motor",
"centrifuga Fase serie FCV, corpo verticale blu su basamento a tre punti con quadro a bordo macchina":"Fase FCV series centrifuge, blue vertical body on a three-point base with the control panel on board",
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
"disoleatrice Fase FD 500 sotto la tramoggia di carico, con l’armadio elettrico a fianco":"Fase FD 500 under the loading hopper, with the electrical cabinet alongside",
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
"linea a paniere estraibile: portale su rotaia, panieri in acciaio inox, bacini di contenimento e ribalta cassoni":"removable-basket line: rail-mounted gantry, stainless steel baskets, containment tubs and bin tipper",
"portale di manipolazione di un impianto a paniere estraibile, con i cilindri della pinza":"handling gantry of a removable-basket system, with the gripper cylinders",
"pinza del portale che afferra il paniere, vista da sotto":"the gantry gripper closing on the basket, seen from below",
"impianto Fase di asciugatura per ambiente galvanico: linea con vasche, due centrifughe inox e ribaltatore per cassoni":"Fase drying system for electroplating: line with tanks, two stainless centrifuges and a bin tipper",
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
"benna a polipo che solleva rottame metallico sopra un cumulo di sfridi":"orange-peel grab lifting scrap metal above a pile of offcuts",
"prova di triturazione nell’area test":"shredding test in the test area",
"stand Fase alla fiera MECSPE":"Fase stand at the MECSPE trade fair",
"stand Fase a MECSPE 2021":"Fase stand at MECSPE 2021",
"visitatori allo stand MECSPE 2022":"visitors at the MECSPE 2022 stand",
"macchine esposte a MECSPE 2024":"machines on show at MECSPE 2024",
"allestimento dello stand MECSPE 2025":"setting up the MECSPE 2025 stand",
"stand Fase al salone Fornitore Offresi":"Fase stand at the Fornitore Offresi show"
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
