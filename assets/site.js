
(function(){
'use strict';
var clamp=function(v,a,b){return v<a?a:(v>b?b:v);};
var smoothstep=function(a,b,x){var t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
var $=function(s){return document.querySelector(s);};

/* ---------------------- comparse allo scroll ---------------------- */
var io=new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
},{rootMargin:'0px 0px -12% 0px',threshold:0.05});
document.querySelectorAll('.reveal,.reveal-blur,.reveal-stagger').forEach(function(el){io.observe(el);});
document.querySelectorAll('.reveal-stagger').forEach(function(wrap){
  Array.prototype.forEach.call(wrap.children,function(child,i){child.style.transitionDelay=(i*0.09)+'s';});
});

/* ------------------------ etichette scramble ---------------------- */
var CHARS='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@';
/* Il testo di arrivo si rilegge a ogni fotogramma invece di fissarlo alla
   partenza: se si cambia lingua mentre l'etichetta sta girando, l'ultimo
   fotogramma scriverebbe la parola vecchia e la lascerebbe li'. */
function scramble(el){
  var span=el.querySelector('span'); if(!span)return;
  var frame=0;
  var id=setInterval(function(){
    var target=el.getAttribute('data-scramble')||'';
    var total=target.length*3+18;
    frame++;
    var out='';
    for(var i=0;i<target.length;i++){
      var reveal=(frame-8)/3;
      if(target[i]===' '){out+=' ';continue;}
      out += (i<reveal) ? target[i] : CHARS[(Math.random()*CHARS.length)|0];
    }
    span.textContent=out;
    if(frame>total){clearInterval(id);span.textContent=target;}
  },34);
}
var sio=new IntersectionObserver(function(entries){
  entries.forEach(function(e){if(e.isIntersecting){scramble(e.target);sio.unobserve(e.target);}});
},{threshold:0.6});
document.querySelectorAll('.scramble-label').forEach(function(el){sio.observe(el);});

/* ------------------------- ingresso della home -------------------- */
window.addEventListener('load',function(){
  var t=$('#heroTitleReveal'); if(t)setTimeout(function(){t.classList.add('in');},120);
  setTimeout(function(){
    var c=$('#heroCopy'),k=$('#heroCard');
    if(c)c.classList.add('in'); if(k)k.classList.add('in');
  },620);
});

/* ---------------------------- menu mobile ------------------------- */
(function(){
  var menu=$('.menu'); if(!menu)return;
  var burger=menu.querySelector('.burger'); if(!burger)return;
  burger.addEventListener('click',function(){
    var open=menu.classList.toggle('open');
    burger.setAttribute('aria-label',open?'Chiudi il menu':'Apri il menu');
    document.documentElement.style.overflow=open?'hidden':'';
  });
  menu.querySelectorAll('.menu-list > .list-item > button').forEach(function(btn){
    btn.addEventListener('click',function(){
      if(window.innerWidth>=834)return;
      btn.parentElement.classList.toggle('active');
    });
  });
})();

/* ------------- hero: sorgente scelta per forma schermo ------------ */
(function(){
  var v=$('#heroVideo'); if(!v)return;
  var tall=window.matchMedia('(max-width:833px)').matches;
  if(tall && v.getAttribute('data-poster-tall')) v.poster=v.getAttribute('data-poster-tall');
  v.src = v.getAttribute(tall ? 'data-tall' : 'data-wide');
  v.preload='auto';
  var play=function(){ var q=v.play(); if(q&&q.catch) q.catch(function(){}); };
  if(v.readyState>=2) play(); else v.addEventListener('loadeddata',play,{once:true});
})();

/* ------------------------------ il metodo ------------------------- */
(function(){
  var stack=$('#testimonials'); if(!stack)return;
  var items=stack.querySelectorAll('.testimonial-wrapper'); var idx=0;
  function go(n){ items[idx].classList.remove('active'); idx=(n+items.length)%items.length; items[idx].classList.add('active'); }
  stack.addEventListener('click',function(e){
    var b=e.target.closest('[data-testi]'); if(!b)return;
    go(b.getAttribute('data-testi')==='next'?idx+1:idx-1);
  });
})();

/* ------------------------------ mappa Italia ---------------------- */
(function(){
  var svg=$('#italyMap'); if(!svg)return;
  var enc=svg.getAttribute('data-dots')||'';
  var parts=enc.split(';'),x=0,y=0,d='';
  for(var i=0;i<parts.length;i++){
    var p=parts[i].split(',');
    x+=parseInt(p[0],16);y+=parseInt(p[1],16);
    var cx=x/2,cy=y/2,r=1.12;
    d+='M'+cx.toFixed(1)+' '+(cy-r).toFixed(1)+'a'+r+' '+r+' 0 1 0 0.01 0z';
  }
  var ns='http://www.w3.org/2000/svg';
  var path=document.createElementNS(ns,'path');
  path.setAttribute('d',d); path.setAttribute('fill','#4b4b4b');
  svg.appendChild(path);
  [[466.5,92.2,3.8],[463.2,97.4,2.2],[435.9,97.7,2.2],[414.7,100.5,2.2],[458.9,134.2,2.2],[384.0,114.1,2.2]].forEach(function(c,i){
    var el=document.createElementNS(ns,'circle');
    el.setAttribute('cx',c[0]);el.setAttribute('cy',c[1]);el.setAttribute('r',c[2]);
    el.setAttribute('fill',i===0?'#A72B2A':'#AFAFAF');
    svg.appendChild(el);
  });
})();

/* ------------------- bagliore di fondo su canvas ------------------ */
/* Prima erano otto archi tracciati uno sopra l'altro, ognuno di un colore
   diverso — bianco, rosa, arancio, quattro rossi — e sommati in "lighter".
   Sovrapposti si leggevano come righe, non come luce. Qui la sorgente e'
   una sola, nel rosso del marchio, e si spegne nel nero senza bordi. */
(function(){
  var canvas=$('#trailsCanvas'); if(!canvas)return;
  var ctx=canvas.getContext('2d');
  var dpr=Math.min(window.devicePixelRatio||1,2);
  var fermo=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var W=0,H=0,t=0,running=false,grana=null;

  /* Un campo di rosso steso su mille pixel mostra i gradini del gradiente:
     una velatura di rumore li rompe. Si disegna una volta e si ripete. */
  function creaGrana(){
    var n=document.createElement('canvas'); n.width=n.height=96;
    var g=n.getContext('2d'), d=g.createImageData(96,96), a=d.data;
    for(var i=0;i<a.length;i+=4){
      var v=(Math.random()*255)|0;
      a[i]=a[i+1]=a[i+2]=v; a[i+3]=9;
    }
    g.putImageData(d,0,0);
    return ctx.createPattern(n,'repeat');
  }
  function resize(){
    W=canvas.clientWidth; H=canvas.clientHeight;
    canvas.width=Math.round(W*dpr); canvas.height=Math.round(H*dpr);
    grana=null;
  }
  function draw(){
    if(!W||!H)resize();
    if(!grana)grana=creaGrana();
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.globalCompositeOperation='source-over';
    ctx.fillStyle='#000'; ctx.fillRect(0,0,W,H);

    var b=0.5+0.5*Math.sin(t*0.00019);           /* respiro lento */

    /* La sorgente sta sotto il bordo inferiore: in campo entra solo la parte
       alta della luce, quella che sale. Raggio e centro si misurano
       sull'altezza, non sul lato piu' lungo: altrimenti su schermo largo il
       nucleo finisce lontano e resta un nero piatto. */
    var cx=W*0.32, cy=H*(1.16+0.02*b), R=H*(1.36+0.05*b);
    var luce=ctx.createRadialGradient(cx,cy,0,cx,cy,R);
    luce.addColorStop(0,    'rgba(167,43,42,0.62)');
    luce.addColorStop(0.20, 'rgba(132,34,34,0.34)');
    luce.addColorStop(0.44, 'rgba(88,22,23,0.16)');
    luce.addColorStop(0.68, 'rgba(48,12,13,0.06)');
    luce.addColorStop(0.88, 'rgba(20,5,6,0.015)');
    luce.addColorStop(1,    'rgba(0,0,0,0)');
    ctx.fillStyle=luce; ctx.fillRect(0,0,W,H);

    /* una seconda sorgente, piu' alta e piu' debole, toglie al campo
       l'aria della macchia unica */
    var hx=W*(0.84+0.02*b), hy=H*(0.86-0.03*b), hR=H*0.62;
    var alone=ctx.createRadialGradient(hx,hy,0,hx,hy,hR);
    alone.addColorStop(0,   'rgba(112,28,28,0.15)');
    alone.addColorStop(0.5, 'rgba(62,16,17,0.05)');
    alone.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.globalCompositeOperation='lighter';
    ctx.fillStyle=alone; ctx.fillRect(0,0,W,H);

    ctx.globalCompositeOperation='source-over';
    ctx.fillStyle=grana; ctx.fillRect(0,0,W,H);
  }
  function loop(){ t+=16; draw(); if(running) requestAnimationFrame(loop); }
  var vis=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){ if(!running&&!fermo){running=true;loop();} }
      else { running=false; }
    });
  },{threshold:0.01});
  vis.observe(canvas);
  window.addEventListener('resize',function(){resize();draw();});
  resize();draw();
})();

/* -------------------- carosello della fascia ---------------------- */
/* Un blocco per fascia. Le fotografie si scrivono nell'HTML, una riga
   ciascuna: aggiungerne o toglierne non richiede di toccare questo file.
   Il carosello gira solo quando la fascia e' in campo, si ferma sotto il
   dito o il puntatore, e non parte affatto se il sistema chiede meno
   animazioni. */
(function(){
  var caroselli=[].slice.call(document.querySelectorAll('[data-carosello]'));
  if(!caroselli.length)return;
  var fermo=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  /* La lingua si rilegge a ogni chiamata invece di fissarla al caricamento:
     la lente si costruisce alla prima apertura, che puo' arrivare dopo che
     si e' premuto EN. Quello che sta gia' nella pagina lo ripassa i18n. */
  function dizionario(){
    return (document.documentElement.getAttribute('lang')||'it').indexOf('en')===0
      ? {gruppo:'Choose the photograph', voce:function(n,t){return 'Photograph '+n+' of '+t;},
         prima:'Previous photograph', dopo:'Next photograph',
         apri:'Open the photographs full screen',
         pannello:'Photograph, full screen', chiudi:'Close the photograph'}
      : {gruppo:'Scegli la fotografia',  voce:function(n,t){return 'Fotografia '+n+' di '+t;},
         prima:'Fotografia precedente', dopo:'Fotografia successiva',
         apri:'Apri le fotografie a schermo intero',
         pannello:'Fotografia a schermo intero', chiudi:'Chiudi la fotografia'};
  }
  var DIC=dizionario();

  /* La freccia e' la stessa pastiglia a puntini della sezione "Il metodo".
     Per tornare indietro si ruota di mezzo giro, come li'. */
  var PUNTINI='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">'
    +'<circle cx="10" cy="10" r="1" fill="currentColor"/><circle cx="14" cy="10" r="1" fill="currentColor"/>'
    +'<circle cx="18" cy="10" r="1" fill="currentColor"/><circle cx="6" cy="10" r="1" fill="currentColor"/>'
    +'<circle cx="2" cy="10" r="1" fill="currentColor"/><circle cx="14" cy="6" r="1" fill="currentColor"/>'
    +'<circle cx="14" cy="14" r="1" fill="currentColor"/><circle cx="10" cy="2" r="1" fill="currentColor"/>'
    +'<circle cx="10" cy="18" r="1" fill="currentColor"/></svg>';

  /* La croce di chiusura e' fatta degli stessi pallini: due diagonali che
     si incrociano nel mezzo, nove punti come nelle altre pastiglie. */
  var CROCE='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">'
    +'<circle cx="4" cy="4" r="1" fill="currentColor"/><circle cx="7" cy="7" r="1" fill="currentColor"/>'
    +'<circle cx="10" cy="10" r="1" fill="currentColor"/><circle cx="13" cy="13" r="1" fill="currentColor"/>'
    +'<circle cx="16" cy="16" r="1" fill="currentColor"/><circle cx="16" cy="4" r="1" fill="currentColor"/>'
    +'<circle cx="13" cy="7" r="1" fill="currentColor"/><circle cx="7" cy="13" r="1" fill="currentColor"/>'
    +'<circle cx="4" cy="16" r="1" fill="currentColor"/></svg>';

  /* ---------------------------- la lente ---------------------------
     Il carosello ritaglia, e delle macchine alte resta fuori un pezzo.
     Qui la stessa fotografia si riapre intera sopra la pagina e le frecce
     continuano a scorrere la fila. Il pannello si costruisce alla prima
     apertura e poi si riusa: e' uno solo per pagina, e ogni volta si
     riempie con le figure del carosello che l'ha chiamato. */
  var lente=(function(){
    var pannello,quadro,foto,conta,chiudiB,giro;
    var lista=[],idx=0,aperta=false,alCambio=null,alChiudere=null,rimetti=null,richiesta=0;

    function pastiglia(classe,etichetta,disegno){
      var b=document.createElement('button');
      b.type='button';
      b.className='dots-icon-button '+classe;
      b.setAttribute('aria-label',etichetta);
      b.innerHTML=disegno;
      return b;
    }

    function costruisci(){
      var D=dizionario();
      pannello=document.createElement('div');
      pannello.className='lente';
      pannello.setAttribute('role','dialog');
      pannello.setAttribute('aria-modal','true');
      pannello.setAttribute('aria-label',D.pannello);

      quadro=document.createElement('div');
      quadro.className='lente-quadro';
      foto=document.createElement('img');
      foto.className='lente-foto';
      foto.setAttribute('alt','');
      quadro.appendChild(foto);
      pannello.appendChild(quadro);

      chiudiB=pastiglia('lente-chiudi',D.chiudi,CROCE);
      chiudiB.addEventListener('click',chiudi);
      pannello.appendChild(chiudiB);

      var barra=document.createElement('div');
      barra.className='lente-barra';
      var prima=pastiglia('lente-freccia',D.prima,
        PUNTINI.replace('<svg ','<svg style="transform:rotate(180deg)" '));
      var dopo=pastiglia('lente-freccia avanti',D.dopo,PUNTINI);
      prima.addEventListener('click',function(){mostra(idx-1);});
      dopo.addEventListener('click', function(){mostra(idx+1);});
      conta=document.createElement('p');
      conta.className='lente-conta';
      conta.setAttribute('aria-live','polite');
      barra.appendChild(prima);barra.appendChild(conta);barra.appendChild(dopo);
      pannello.appendChild(barra);
      giro=[chiudiB,prima,dopo];

      /* Il nero intorno chiude; la fotografia no. Se chiudesse anche lei
         basterebbe sbagliare mira mentre si guarda per ritrovarsi fuori. */
      pannello.addEventListener('click',function(e){
        if(e.target===pannello||e.target===quadro)chiudi();
      });
      /* Pannello modale: il giro del tabulatore resta dentro. */
      pannello.addEventListener('keydown',function(e){
        if(e.key!=='Tab')return;
        e.preventDefault();
        var p=giro.indexOf(document.activeElement);
        giro[(p+(e.shiftKey?-1:1)+giro.length)%giro.length].focus();
      });
      /* Sul telefono le frecce ci sono lo stesso, ma il dito si aspetta di
         poter trascinare: quaranta pixel bastano a distinguere lo
         scorrimento da un tocco storto. */
      var x0=null,y0=0;
      pannello.addEventListener('touchstart',function(e){
        if(e.touches.length!==1){x0=null;return;}
        x0=e.touches[0].clientX;y0=e.touches[0].clientY;
      },{passive:true});
      pannello.addEventListener('touchend',function(e){
        if(x0===null)return;
        var t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;
        x0=null;
        if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))mostra(idx+(dx<0?1:-1));
      },{passive:true});

      document.body.appendChild(pannello);
    }

    /* Le figure oltre la prima hanno `loading="lazy"`: quando si apre la
       lente possono non essere ancora arrivate. Si aspetta la fotografia e
       solo allora si scambia, se no si vedrebbe il buco. Il gettone butta
       via le risposte delle richieste sorpassate, che con le frecce
       premute in fretta tornano fuori ordine. */
    function mostra(n){
      if(!lista.length)return;
      idx=(n+lista.length)%lista.length;
      /* La fascia ritaglia in 16:9 e di certe macchine resta fuori un pezzo.
         Dove esiste, `data-intera` porta lo scatto per intero — nel rapporto
         suo, non in quello della fascia — cosi' ingrandire serve davvero a
         vedere di piu' e non solo a vedere piu' grande. */
      var im=lista[idx],url=im.getAttribute('data-intera')||im.currentSrc||im.src,mia=++richiesta;
      conta.textContent=(idx+1)+' / '+lista.length;
      if(alCambio)alCambio(idx);
      foto.classList.add('in-attesa');
      var pre=new Image();
      pre.onload=pre.onerror=function(){
        if(mia!==richiesta)return;
        foto.src=url;
        foto.setAttribute('alt',im.getAttribute('alt')||'');
        foto.classList.remove('in-attesa');
      };
      pre.src=url;
      if(pre.complete)pre.onload();
    }

    function apri(figure,partenza,cambio,chiusura){
      if(!pannello)costruisci();
      lista=figure;alCambio=cambio||null;alChiudere=chiusura||null;
      rimetti=document.activeElement;
      mostra(partenza||0);
      pannello.classList.add('aperta');
      aperta=true;
      document.documentElement.style.overflow='hidden';
      chiudiB.focus();
    }

    function chiudi(){
      if(!aperta)return;
      aperta=false;
      pannello.classList.remove('aperta');
      document.documentElement.style.overflow='';
      /* Il pannello va in `visibility:hidden`: se il fuoco restasse dentro
         resterebbe appeso a un comando che non c'e' piu'. Torna dove era,
         e se era il corpo della pagina si toglie e basta. */
      chiudiB.blur();
      if(rimetti&&rimetti.focus&&rimetti!==document.body&&document.contains(rimetti))rimetti.focus();
      rimetti=null;
      /* A tendina chiusa si sgancia la fotografia: alla riapertura da un
         altro carosello non si vedrebbe per un attimo quella di prima. */
      setTimeout(function(){
        if(aperta)return;
        richiesta++;
        foto.classList.add('in-attesa');
        foto.removeAttribute('src');
        foto.setAttribute('alt','');
      },450);
      var f=alChiudere;alCambio=null;alChiudere=null;
      if(f)f();
    }

    document.addEventListener('keydown',function(e){
      if(!aperta)return;
      if(e.key==='Escape'){e.preventDefault();chiudi();}
      else if(e.key==='ArrowRight'){e.preventDefault();mostra(idx+1);}
      else if(e.key==='ArrowLeft'){e.preventDefault();mostra(idx-1);}
    });

    return {apri:apri};
  })();

  caroselli.forEach(function(car){
    var figure=[].slice.call(car.querySelectorAll('img'));
    if(figure.length<2)return;
    var pausa=parseInt(car.getAttribute('data-carosello'),10)||5200;
    var i=0,timer=null,inVista=false,sospeso=false,ingrandita=false;

    var punti=document.createElement('div');
    /* Oltre le otto fotografie la fila di pallini diventa una barra larga
       quanto la fascia: da li' in poi si stringono. */
    punti.className='carosello-punti'+(figure.length>8?' fitti':'');
    punti.setAttribute('role','tablist');
    punti.setAttribute('aria-label',DIC.gruppo);
    var bottoni=figure.map(function(im,n){
      var b=document.createElement('button');
      b.type='button';
      b.className='carosello-punto';
      b.setAttribute('role','tab');
      b.setAttribute('aria-label',DIC.voce(n+1,figure.length));
      b.addEventListener('click',function(){mostra(n);riavvia();});
      punti.appendChild(b);
      return b;
    });
    car.appendChild(punti);

    function freccia(verso, etichetta, salto){
      var b=document.createElement('button');
      b.type='button';
      b.className='dots-icon-button carosello-freccia'+(verso==='avanti'?' avanti':'');
      b.setAttribute('aria-label',etichetta);
      b.innerHTML=(verso==='avanti')
        ? PUNTINI
        : PUNTINI.replace('<svg ','<svg style="transform:rotate(180deg)" ');
      b.addEventListener('click',function(){mostra(i+salto);riavvia();});
      /* Sulle fasce marcate "stretta" le frecce escono dal riquadro e vanno
         nei margini: il riquadro ritaglia (overflow:hidden), quindi devono
         proprio uscire dal suo DOM, col CSS non basterebbe. Da telefono il
         foglio di stile le rimette dove stavano, sopra la fotografia. */
      var fuori = car.parentNode && car.parentNode.classList
               && car.parentNode.classList.contains('stretta');
      (fuori ? car.parentNode : car).appendChild(b);
      return b;
    }
    freccia('indietro',DIC.prima,-1);
    freccia('avanti',  DIC.dopo,  +1);

    function mostra(n){
      i=(n+figure.length)%figure.length;
      figure.forEach(function(im,k){
        im.classList.toggle('attiva',k===i);
        im.setAttribute('aria-hidden',k===i?'false':'true');
      });
      bottoni.forEach(function(b,k){
        b.classList.toggle('attivo',k===i);
        b.setAttribute('aria-selected',k===i?'true':'false');
      });
    }
    function avvia(){ if(fermo||timer||!inVista||sospeso||ingrandita)return;
      timer=setInterval(function(){mostra(i+1);},pausa); }
    function ferma(){ if(timer){clearInterval(timer);timer=null;} }
    function riavvia(){ ferma();avvia(); }

    car.addEventListener('mouseenter',function(){sospeso=true;ferma();});
    car.addEventListener('focusin',  function(){sospeso=true;ferma();});
    car.addEventListener('mouseleave',function(){sospeso=false;avvia();});
    car.addEventListener('focusout', function(){sospeso=false;avvia();});

    new IntersectionObserver(function(voci){
      voci.forEach(function(v){ inVista=v.isIntersecting; if(inVista)avvia(); else ferma(); });
    },{threshold:0.15}).observe(car);

    /* Con la scheda in secondo piano setInterval continua comunque, sia pure
       rallentato: le fotografie scorrerebbero senza che nessuno le guardi e
       al ritorno si troverebbe una figura a caso. */
    document.addEventListener('visibilitychange',function(){
      if(document.hidden) ferma(); else avvia();
    });

    /* Un tocco in mezzo apre la fotografia intera. Frecce e pallini stanno
       sopra il carosello: li' il tocco resta loro. Mentre la lente e'
       aperta il giro automatico sta fermo — se no il fondo scorrerebbe da
       solo — e alla chiusura il carosello resta sulla figura che si stava
       guardando. Il carosello e' un riquadro, non un bottone: prende il
       tabulatore per conto suo, cosi' si apre anche da tastiera senza
       annidare un comando dentro l'altro. */
    car.setAttribute('tabindex','0');
    car.setAttribute('aria-label',DIC.apri);
    function ingrandisci(){
      ingrandita=true; ferma();
      lente.apri(figure,i,mostra,function(){ ingrandita=false; avvia(); });
    }
    car.addEventListener('click',function(e){
      if(e.target.closest&&e.target.closest('button'))return;
      ingrandisci();
    });
    car.addEventListener('keydown',function(e){
      if(e.target!==car)return;
      if(e.key==='Enter'||e.key===' '||e.key==='Spacebar'){e.preventDefault();ingrandisci();}
    });

    mostra(0);
  });
})();

/* --------- nav che si inverte + sequenza pinnata della home ------- */
(function(){
  var menu=$('.menu'); if(!menu)return;
  var bar=menu.querySelector('.bar');
  var lightSections=[].slice.call(document.querySelectorAll('[data-nav="dark"]'));
  var video=$('#seqVideo'), section=$('#techSeq'), seqBg=$('#seqBg'),
      seqTitle=$('#seqTitleWrap'), seqCopy=$('#seqCopy'), heroFade=$('#heroFade'),
      hero=$('.home-hero'), intro=$('#intro'), introBg=$('#introBg');

  var duration=0, seekTarget=0;
  if(video){
    video.src = video.getAttribute(
      window.matchMedia('(max-width:833px)').matches ? 'data-tall' : 'data-wide');
    video.addEventListener('loadedmetadata',function(){duration=video.duration||0;apply();});
  }
  /* Nessun semaforo sul salto in corso: se un 'seeked' non arriva — succede
     quando il browser accorpa due richieste vicine — il semaforo resta chiuso
     e il video si pianta. Con GOP corto il salto costa poco: si assegna e basta,
     al massimo il browser scarta la richiesta intermedia. */
  function apply(){
    if(!video||!duration)return;
    if(Math.abs(video.currentTime-seekTarget)<0.02)return;
    try{video.currentTime=seekTarget;}catch(e){}
  }
  /* Traversata laterale: la velocita' resta costante, perche' e' proprio
     l'andatura regolare a far leggere la parallasse come profondita'.
     Solo entrata e uscita sono ammorbidite, per non partire e non fermarsi
     di scatto ai bordi del blocco. */
  function camera(p){
    if(!duration)return;
    var e=0.85*p + 0.15*(p*p*(3-2*p));
    seekTarget=e*(duration-0.08);
    apply();
  }

  var ticking=false;
  function onScroll(){
    var y=window.scrollY||window.pageYOffset;
    var vh=window.innerHeight;

    if(bar){
      var r0=bar.getBoundingClientRect();
      var mid=r0.top+r0.height/2, isDark=false, suRosso=false;
      for(var s=0;s<lightSections.length;s++){
        var r=lightSections[s].getBoundingClientRect();
        if(r.top<=mid&&r.bottom>=mid){
          isDark=true;
          suRosso=lightSections[s].getAttribute('data-nav-tone')==='rosso';
          break;
        }
      }
      menu.classList.toggle('dark',isDark);
      menu.classList.toggle('su-rosso',isDark&&suRosso);
    }

    /* La testata si scurisce mentre esce di campo, ma niente velo nero sopra
       la pagina: la fascia rossa deve restare rossa dall'inizio alla fine. */
    if(hero&&heroFade){
      var heroH=hero.offsetHeight;
      heroFade.style.opacity=smoothstep(heroH*0.35,heroH*0.95,y).toFixed(3);
    }
    if(intro&&introBg){
      var iTop=intro.offsetTop,iH=intro.offsetHeight;
      var iCenter=iTop+iH/2-y;
      var tt=clamp(Math.abs(iCenter-vh/2)/(vh/2+iH/2),0,1);
      introBg.style.transform='scaleX('+(1-0.05*tt).toFixed(4)+')';
      introBg.style.borderRadius=(56*tt*tt).toFixed(1)+'px';
    }

    if(section){
      var sTop=section.offsetTop,sH=section.offsetHeight;
      var p=clamp((y-sTop)/(sH-vh),0,1);
      camera(p);
      if(y>sTop-vh&&y<sTop+sH){
        var o=1-smoothstep(0,0.035,p), oEnd=smoothstep(0.965,1,p);
        if(seqBg)seqBg.style.opacity=Math.max(o,oEnd).toFixed(3);
        var visible=p>0.012&&p<0.985?1:0;
        if(seqTitle){seqTitle.style.opacity=visible;seqTitle.style.transition='opacity .5s ease';}
        if(seqCopy){seqCopy.style.opacity=visible;seqCopy.style.transition='opacity .5s ease';}
      }
    }
    ticking=false;
  }
  window.addEventListener('scroll',function(){ if(!ticking){ticking=true;requestAnimationFrame(onScroll);} },{passive:true});
  window.addEventListener('resize',onScroll);
  onScroll();
})();
})();
