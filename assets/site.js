
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
function scramble(el){
  var target=el.getAttribute('data-scramble')||'';
  var span=el.querySelector('span'); if(!span)return;
  var frame=0,total=target.length*3+18;
  var id=setInterval(function(){
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
      var mid=r0.top+r0.height/2, isDark=false;
      for(var s=0;s<lightSections.length;s++){
        var r=lightSections[s].getBoundingClientRect();
        if(r.top<=mid&&r.bottom>=mid){isDark=true;break;}
      }
      menu.classList.toggle('dark',isDark);
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
