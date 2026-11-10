
(function(){
  var head=document.getElementById('head');
  function onScroll(){ if(window.scrollY>40) head.classList.add('solid'); else head.classList.remove('solid'); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.rv:not(.in)').forEach(function(el){io.observe(el);});
  var tog=document.getElementById('navtoggle'),mnav=document.getElementById('mnav'),cl=document.getElementById('mnavclose');
  if(tog){tog.addEventListener('click',function(){mnav.classList.add('open');});}
  if(cl){cl.addEventListener('click',function(){mnav.classList.remove('open');});}
  if(mnav){mnav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mnav.classList.remove('open');});});}
  document.querySelectorAll('.mcats').forEach(function(row){row.addEventListener('click',function(e){var b=e.target.closest('.mcat');if(!b)return;row.querySelectorAll('.mcat').forEach(function(x){x.classList.remove('on');});b.classList.add('on');var f=b.dataset.cat;document.querySelectorAll('[data-catsec]').forEach(function(s){s.style.display=(!f||f==='all'||s.dataset.catsec===f)?'':'none';});});});
})();
