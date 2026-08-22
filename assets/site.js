
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
    el.setAttribute('fill',i===0?'#D10015':'#AFAFAF');
    svg.appendChild(el);
  });
})();

/* --------------------- scie rosse su canvas ----------------------- */
(function(){
  var canvas=$('#trailsCanvas'); if(!canvas)return;
  var ctx=canvas.getContext('2d');
  var dpr=Math.min(window.devicePixelRatio||1,2);
  var W=0,H=0,t=0,running=false;
  function resize(){ W=canvas.clientWidth;H=canvas.clientHeight;
    canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr); }
  var bands=[
    {r:1.00,w:0.018,a:0.95,c:'255,246,242',s:0.00},
    {r:1.06,w:0.030,a:0.70,c:'255,190,178',s:0.35},
    {r:1.14,w:0.046,a:0.60,c:'246,96,74',s:0.80},
    {r:1.24,w:0.070,a:0.48,c:'216,16,34',s:1.30},
    {r:1.36,w:0.105,a:0.34,c:'190,0,22',s:1.85},
    {r:1.52,w:0.160,a:0.22,c:'150,0,17',s:2.40},
    {r:1.74,w:0.250,a:0.13,c:'110,0,13',s:3.00},
    {r:2.02,w:0.380,a:0.07,c:'80,0,10',s:3.60}
  ];
  function draw(){
    if(!W||!H){resize();}
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
    var cx=-W*0.08, cy=H*1.42, R=H*1.34;
    ctx.globalCompositeOperation='lighter'; ctx.lineCap='round';
    for(var i=bands.length-1;i>=0;i--){
      var b=bands[i];
      var wob=Math.sin(t*0.00035+b.s)*H*0.010;
      ctx.beginPath();
      ctx.arc(cx,cy+wob,R*b.r,Math.PI*1.57,Math.PI*1.995);
      ctx.strokeStyle='rgba('+b.c+','+b.a+')';
      ctx.lineWidth=H*b.w;
      ctx.filter='blur('+(H*b.w*0.45+1)+'px)';
      ctx.stroke();
    }
    ctx.filter='none'; ctx.globalCompositeOperation='source-over';
  }
  function loop(){ t+=16; draw(); if(running) requestAnimationFrame(loop); }
  var vis=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ if(!running){running=true;loop();} } else { running=false; } });
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
