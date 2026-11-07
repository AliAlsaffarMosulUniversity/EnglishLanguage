/* English for Iraq – 5th Primary  |  Logical Code */
"use strict";
const SITE="https://alialsaffarmosuluniversity.github.io/EnglishLanguage/";
const FB_URL="https://www.facebook.com/logicalcode4all";
const WA_NUM="9647764994170", WA_SHOW="0776 499 4170";
const $=s=>document.querySelector(s);
const app=$("#app"),bar=$("#bar");
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmt=n=>Number(n).toLocaleString("ar-IQ");
const isLat=s=>/^[\x20-\x7E’']+$/.test(s);
const LET=["أ","ب","ج","د"];
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const col=id=>`--c:var(--u${id});--cs:var(--u${id}s)`;
const U=id=>UNITS.find(u=>u.id===id);

/* ───── speech (English pronunciation) ───── */
const TTS=("speechSynthesis" in window)&&("SpeechSynthesisUtterance" in window);
let voice=null,slow=store.get("eng-slow",false),playToken=0;
function pickVoice(){if(!TTS)return;const vs=speechSynthesis.getVoices();
  voice=vs.find(v=>/^en[-_]US/i.test(v.lang)&&/google|samantha|aria|jenny|female/i.test(v.name))||vs.find(v=>/^en[-_]US/i.test(v.lang))||vs.find(v=>/^en/i.test(v.lang))||null}
if(TTS){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
function speak(text,opt={}){
  return new Promise(res=>{
    if(!TTS){res();return}
    try{
      if(!opt.queue)speechSynthesis.cancel();
      const u=new SpeechSynthesisUtterance(String(text).replace(/\s*\/\s*/g,". ").replace(/___/g,"blank").replace(/→/g,""));
      u.lang="en-US";if(voice)u.voice=voice;
      u.rate=opt.rate||(slow?0.6:0.9);u.pitch=1.05;
      u.onend=u.onerror=()=>res();
      speechSynthesis.speak(u);
    }catch(e){res()}
  });
}
const stopSpeak=()=>{playToken++;if(TTS)try{speechSynthesis.cancel()}catch(e){}};
const spkBtn=(t,cls="")=>TTS?`<button class="spk ${cls}" data-say="${esc(t)}" aria-label="استمع">🔊</button>`:"";
function bindSpeak(root){root.querySelectorAll("[data-say]").forEach(b=>{b.onclick=e=>{e.stopPropagation();const t=b.dataset.say;b.classList.add("playing");speak(t,b.dataset.rate?{rate:+b.dataset.rate}:{}).then(()=>b.classList.remove("playing"))}})}
function bindTr(root){root.querySelectorAll(".trbtn").forEach(b=>{b.onclick=()=>{const t=b.nextElementSibling;t.hidden=!t.hidden;b.textContent=t.hidden?"🌐 ترجمة":"🙈 إخفاء الترجمة"}})}
const trBlock=ar=>`<button class="trbtn">🌐 ترجمة</button><div class="tr" hidden>${esc(ar).replace(/\n/g,"<br>")}</div>`;

/* ───── flags & icons ───── */
const FLAGS={
 th:'<rect width="30" height="20" fill="#A51931"/><rect y="3.3" width="30" height="13.4" fill="#fff"/><rect y="6.7" width="30" height="6.6" fill="#2D2A4A"/>',
 jp:'<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="5.5" fill="#BC002D"/>',
 fr:'<rect width="10" height="20" fill="#0055A4"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#EF4135"/>',
 it:'<rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/>',
 eg:'<rect width="30" height="6.7" fill="#CE1126"/><rect y="6.7" width="30" height="6.6" fill="#fff"/><rect y="13.3" width="30" height="6.7" fill="#000"/><circle cx="15" cy="10" r="1.8" fill="#C09300"/>',
 iq:'<rect width="30" height="6.7" fill="#CE1126"/><rect y="6.7" width="30" height="6.6" fill="#fff"/><rect y="13.3" width="30" height="6.7" fill="#000"/><text x="15" y="12" font-size="4.6" text-anchor="middle" fill="#007A3D" font-family="serif" font-weight="700">الله أكبر</text>',
 tr:'<rect width="30" height="20" fill="#E30A17"/><circle cx="11.2" cy="10" r="5" fill="#fff"/><circle cx="12.6" cy="10" r="4" fill="#E30A17"/><polygon points="17.5,7.6 18.3,9.5 20.3,9.6 18.7,10.8 19.3,12.7 17.5,11.6 15.8,12.7 16.3,10.8 14.8,9.6 16.8,9.5" fill="#fff"/>',
 in:'<rect width="30" height="6.7" fill="#FF9933"/><rect y="6.7" width="30" height="6.6" fill="#fff"/><rect y="13.3" width="30" height="6.7" fill="#138808"/><circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" stroke-width=".7"/>',
 cn:'<rect width="30" height="20" fill="#DE2910"/><polygon points="5,3 6.2,6.6 9.9,6.6 6.9,8.7 8,12.3 5,10.1 2,12.3 3.1,8.7 0.1,6.6 3.8,6.6" fill="#FFDE00"/>',
 au:'<rect width="30" height="20" fill="#00008B"/><path d="M0 0L15 10M15 0L0 10" stroke="#fff" stroke-width="2"/><path d="M7.5 0V10M0 5H15" stroke="#fff" stroke-width="3.4"/><path d="M7.5 0V10M0 5H15" stroke="#C8102E" stroke-width="1.8"/><polygon points="7.5,12.5 8.4,15.2 11,15.2 8.9,16.8 9.7,19.4 7.5,17.8 5.3,19.4 6.1,16.8 4,15.2 6.6,15.2" fill="#fff"/><circle cx="22" cy="6" r="1.2" fill="#fff"/><circle cx="25" cy="11" r="1.2" fill="#fff"/><circle cx="21" cy="15" r="1.2" fill="#fff"/><circle cx="19" cy="9" r="1" fill="#fff"/>',
 gb:'<rect width="30" height="20" fill="#012169"/><path d="M0 0L30 20M30 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" stroke-width="1.6"/><path d="M15 0V20M0 10H30" stroke="#fff" stroke-width="6"/><path d="M15 0V20M0 10H30" stroke="#C8102E" stroke-width="3.4"/>'
};
function ico(i,big){
  if(!i)return"";
  if(i.startsWith("flag:"))return`<span class="ico${big?" big":""}"><svg viewBox="0 0 30 20" aria-hidden="true">${FLAGS[i.slice(5)]||""}</svg></span>`;
  return`<span class="ico${big?" big":""}">${i}</span>`;
}

/* ───── word indexes ───── */
const WORDS=new Map();
UNITS.forEach(u=>{u.vocab.forEach(g=>g.items.forEach(([en,ar,ic])=>{const k=en.toLowerCase();const w=WORDS.get(k)||{en,ar,ico:"",u:u.id};if(ic&&!w.ico)w.ico=ic;w.ar=ar;WORDS.set(k,w)}));
  u.hard.forEach(([en,ar])=>{const k=en.toLowerCase();if(!WORDS.has(k))WORDS.set(k,{en,ar,ico:"",u:u.id})})});
const wk=en=>WORDS.get(en.toLowerCase());
const srcUnits=u=>u.rev?u.rev.map(U):[u];
const vocabOf=u=>{const out=[];srcUnits(u).forEach(s=>s.vocab.forEach(g=>g.items.forEach(([en,ar,ic])=>out.push({en,ar,ico:ic||"",g:g.g,ga:g.ga,u:s.id}))));return out};
const hardOf=u=>{const seen=new Set(),out=[];srcUnits(u).forEach(s=>s.hard.forEach(([en,ar])=>{if(!seen.has(en.toLowerCase())){seen.add(en.toLowerCase());out.push({en,ar,u:s.id})}}));return out};
const wordsOf=u=>{const m=new Map();vocabOf(u).forEach(w=>m.set(w.en.toLowerCase(),w));hardOf(u).forEach(w=>{if(!m.has(w.en.toLowerCase()))m.set(w.en.toLowerCase(),w)});return[...m.values()]};
const talkOf=u=>srcUnits(u).flatMap(s=>s.talk);
const sentenceList=u=>talkOf(u).filter(([e])=>!/\//.test(e)&&e.split(" ").length>=3&&e.split(" ").length<=10);

/* ───── state ───── */
let best=store.get("eng5-best",{}),hardSet=store.get("eng5-hard",{}),autoSpeak=store.get("eng5-auto",true);
const saveBest=()=>store.set("eng5-best",best),saveHard=()=>store.set("eng5-hard",hardSet);
const starsOf=p=>p>=.9?3:p>=.7?2:p>=.5?1:0;
const starRow=n=>[0,1,2].map(i=>`<span class="${i<n?"on":"off"}">★</span>`).join("");
const totalStars=()=>UNITS.reduce((s,u)=>s+(best[u.id]||0),0);
const hardCount=()=>Object.keys(hardSet).length;
function toggleHard(en){const k=en.toLowerCase();if(hardSet[k])delete hardSet[k];else hardSet[k]=1;saveHard();return !!hardSet[k]}
function addHard(en){const k=en.toLowerCase();if(WORDS.has(k)&&!hardSet[k]){hardSet[k]=1;saveHard()}}

/* ───── theme / install / counter ───── */
const isDark=()=>{const t=document.documentElement.dataset.theme;return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches};
function setTheme(t){document.documentElement.dataset.theme=t;store.set("eng5-theme",t)}
{const t=store.get("eng5-theme",null);if(t)document.documentElement.dataset.theme=t}
let deferredPrompt=null;
const isStandalone=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
const onSite=()=>location.hostname.endsWith("github.io");
addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e});
addEventListener("appinstalled",()=>{deferredPrompt=null;document.querySelectorAll(".needinstall").forEach(el=>el.hidden=true)});
try{if("serviceWorker" in navigator&&onSite())navigator.serviceWorker.register("sw.js").catch(()=>{})}catch(e){}
function device(){const ua=navigator.userAgent;
  if(/iPhone|iPad|iPod/.test(ua)||(/Macintosh/.test(ua)&&navigator.maxTouchPoints>1))return"ios";
  if(/Android/.test(ua))return"android";
  if(/Macintosh/.test(ua)&&/Safari/.test(ua)&&!/Chrome|Edg|Firefox/.test(ua))return"mac";
  return"desktop"}
const STEPS={
 ios:["آيفون وآيباد",["افتح رابط التطبيق في متصفح سفاري.","اضغط زر المشاركة (مربع يخرج منه سهم).<span class='en'>Share</span>","اختر «إضافة إلى الشاشة الرئيسية».<span class='en'>Add to Home Screen</span>","اضغط «إضافة».<span class='en'>Add</span>"]],
 android:["أندرويد",["افتح رابط التطبيق في متصفح كروم.","اضغط النقاط الثلاث أعلى الشاشة.","اختر «تثبيت التطبيق».<span class='en'>Install app</span>","اضغط «تثبيت».<span class='en'>Install</span>"]],
 desktop:["حاسوب ويندوز أو لينكس",["افتح الرابط في متصفح كروم أو إيدج.","اضغط أيقونة التثبيت في نهاية شريط العنوان.","اضغط «تثبيت».<span class='en'>Install</span>"]],
 mac:["حاسوب ماك",["افتح الرابط في متصفح سفاري.","من قائمة «ملف» اختر «إضافة إلى Dock».<span class='en'>File › Add to Dock</span>"]]};
function sheet(html,label){
  const box=document.createElement("div");box.className="sheet";box.setAttribute("role","dialog");box.setAttribute("aria-label",label);
  box.innerHTML=`<div class="sheet-in">${html}</div>`;
  box.onclick=e=>{if(e.target===box)box.remove()};document.body.appendChild(box);
  const c=box.querySelector("[data-close]");if(c){c.onclick=()=>box.remove();c.focus()}return box}
function copyText(t,btn){const done=()=>{if(btn)btn.textContent="تم النسخ ✓"};
  try{navigator.clipboard.writeText(t).then(done,()=>{})}catch(e){}}
function installHelp(){
  const d=device(),order=[d,...Object.keys(STEPS).filter(k=>k!==d)];
  const list=k=>`<ol class="steps">${STEPS[k][1].map(x=>`<li>${x}</li>`).join("")}</ol>`;
  const box=sheet(`<h3>📲 تنزيل التطبيق على جهازك</h3>
   ${onSite()?"":`<p style="margin:0">افتح هذا الرابط أولاً ثم ثبّت التطبيق منه:</p><div class="siteurl">${SITE}</div><div class="row"><a class="btn" href="${SITE}" target="_blank" rel="noopener">افتح التطبيق</a><button class="btn ghost" id="cpy">نسخ الرابط</button></div>`}
   <p style="margin:0;font-family:var(--display);font-weight:700">خطوات ${STEPS[d][0]}:</p>${list(d)}
   ${order.slice(1).map(k=>`<details><summary>${STEPS[k][0]}</summary>${list(k)}</details>`).join("")}
   <p style="margin:0;color:var(--muted);font-size:.95rem">بعد التثبيت يظهر التطبيق بأيقونته بين تطبيقاتك ويعمل دون إنترنت. يعمل على الهاتف والآيباد والحاسوب.</p>
   <button class="btn" data-close>حسناً</button>`,"تنزيل التطبيق");
  const c=box.querySelector("#cpy");if(c)c.onclick=()=>copyText(SITE,c);
}
function install(){if(deferredPrompt){deferredPrompt.prompt();deferredPrompt.userChoice.finally(()=>{deferredPrompt=null});return}installHelp()}
function invite(){
  const text="🎉 تطبيق English for Iraq للصف الخامس الابتدائي: منهج ممتع، بطاقات، كلمات صعبة، استماع ونطق، اختبارات وألعاب. مجاني من لوجيكال كود:";
  if(navigator.share){navigator.share({title:"English for Iraq – الخامس الابتدائي",text,url:SITE}).catch(()=>{});return}
  const enc=encodeURIComponent;
  const box=sheet(`<h3>💌 ادعُ أصدقاءك</h3><p style="margin:0">شارك التطبيق مع زملائك ليتعلموا الإنكليزية معك.</p>
   <div class="sharegrid">
    <a class="cbtn wa" href="https://wa.me/?text=${enc(text+" "+SITE)}" target="_blank" rel="noopener">💬 واتساب</a>
    <a class="cbtn" style="background:#229ED9" href="https://t.me/share/url?url=${enc(SITE)}&text=${enc(text)}" target="_blank" rel="noopener">✈️ تيليغرام</a>
    <a class="cbtn fb" href="https://www.facebook.com/sharer/sharer.php?u=${enc(SITE)}" target="_blank" rel="noopener">👍 فيسبوك</a>
    <button class="cbtn tel" id="cpy">🔗 نسخ الرابط</button></div>
   <div class="siteurl">${SITE}</div><button class="btn ghost" data-close>إغلاق</button>`,"دعوة الأصدقاء");
  box.querySelector("#cpy").onclick=e=>copyText(SITE,e.currentTarget);
}
const LCLOGO=`<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#0B1F3A"/><path d="M24 20l-10 12 10 12M40 20l10 12-10 12" fill="none" stroke="#22D3EE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 18l12 5-12 5-12-5z" fill="#E5E7EB"/><path d="M26 27v5c0 2 3 3 6 3s6-1 6-3v-5" fill="none" stroke="#E5E7EB" stroke-width="2.2"/></svg>`;
function about(){
  sheet(`<div class="lc">${LCLOGO}<div><h3>لوجيكال كود | Logical Code</h3><div style="color:var(--muted);font-size:.95rem">المنطق هو البداية لكل مشروع ناجح</div></div></div>
   <p style="margin:0">نحن شركة <b>لوجيكال كود</b> المتخصصة في تصميم البرمجيات والمواقع والتطبيقات التعليمية في الموصل، العراق. صمّمنا هذا التطبيق ليتعلم تلاميذ الصف الخامس الابتدائي الإنكليزية بطريقة ممتعة.</p>
   <p style="margin:0"><b>نصنع لك تطبيقاً مشابهاً</b> لمدرستك أو مادتك أو مشروعك: تطبيقات تعليمية، أنظمة مدارس، مواقع، وبحوث أكاديمية.</p>
   <div class="contact">
    <a class="cbtn fb" href="${FB_URL}" target="_blank" rel="noopener">👍 صفحتنا على فيسبوك<small>facebook.com/logicalcode4all</small></a>
    <a class="cbtn wa" href="https://wa.me/${WA_NUM}" target="_blank" rel="noopener">💬 تواصل عبر واتساب<small>${WA_SHOW}</small></a></div>
   <button class="btn ghost" data-close>إغلاق</button>`,"من نحن");
}
const CNT="https://abacus.jasoncameron.dev",NS="alialsaffarmosuluniversity-englishlanguage";let stats=null;
function flag(st,k){try{if(st.getItem(k))return true;st.setItem(k,"1")}catch(e){}return false}
async function loadStats(){
  if(!onSite())return;
  try{const nv=!flag(localStorage,"eng5-visitor"),no=!flag(sessionStorage,"eng5-visit");
   const get=async(key,hit)=>{const r=await fetch(`${CNT}/${hit?"hit":"get"}/${NS}/${key}`);if(!r.ok)throw 0;return(await r.json()).value};
   const[v,o]=await Promise.all([get("visitors",nv),get("visits",no)]);stats={v,o};paintStats()}catch(e){}}
function paintStats(){const el=$("#visits");if(!el||!stats)return;
  el.innerHTML=`<span class="vchip">👥 عدد الزوار <b>${fmt(stats.v)}</b></span><span class="vchip">👁️ مرات الفتح <b>${fmt(stats.o)}</b></span>`;el.hidden=false}

function confetti(){for(let i=0;i<26;i++){const s=document.createElement("span");s.className="conf";s.textContent=["🎉","⭐","✨","🎈","🌟"][i%5];s.style.left=Math.random()*100+"vw";s.style.animationDelay=Math.random()*.6+"s";document.body.appendChild(s);setTimeout(()=>s.remove(),3200)}}

/* ───── top bar ───── */
const LOGO=`<svg class="logo" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="13" fill="#7B1E2B"/><path d="M8 12h24a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H20l-7 6v-6H8a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4z" fill="#FFF6E5"/><text x="19" y="26" font-size="13" font-weight="800" text-anchor="middle" fill="#7B1E2B" font-family="Fredoka,Arial,sans-serif">Aa</text><circle cx="39" cy="35" r="6" fill="#F2B544"/><text x="39" y="38.4" font-size="9" font-weight="800" text-anchor="middle" fill="#7B1E2B" font-family="Arial">5</text></svg>`;
function topBar(back){
  bar.innerHTML=(back?`<button class="back" id="bk" aria-label="رجوع">→ رجوع</button>`:LOGO)+
   `<h1>English for Iraq<small>الصف الخامس الابتدائي</small></h1>
    ${isStandalone()?"":`<button class="iconbtn needinstall" id="ins" aria-label="تنزيل التطبيق">📲</button>`}
    <button class="iconbtn" id="thm" aria-label="الوضع الليلي أو النهاري">${isDark()?"☀️":"🌙"}</button>
    <span class="starpill" title="مجموع النجوم"><b>★</b> ${totalStars()}/${UNITS.length*3}</span>`;
  if(back)$("#bk").onclick=()=>{stopSpeak();back()};
  const ib=$("#ins");if(ib)ib.onclick=install;
  $("#thm").onclick=()=>{setTheme(isDark()?"light":"dark");topBar(back)};
}

/* ───── home ───── */
function home(){
  stopSpeak();topBar(null);app.removeAttribute("style");
  const t=totalStars(),max=UNITS.length*3;
  const msg=t===0?"اختر وحدة، تعلّم، استمع، ثم اختبر نفسك واجمع النجوم.":t<max/2?"بداية رائعة! استمر في جمع النجوم.":t<max?"أنت قريب من القمة، يا بطل!":"أكملت كل النجوم. أنت بطل الإنكليزية!";
  let h=`<section class="hello pop"><div class="big">🌟</div><div style="flex:1;min-width:0"><h2>أهلاً بالبطل الصغير!</h2><p>${msg}</p><div class="meter"><i style="width:${t/max*100}%"></i></div></div></section>
  <div class="quick">
   <button class="qk" id="qCards"><span>🃏</span>بطاقات<small>كل الكلمات</small></button>
   <button class="qk" id="qHard"><span>⭐</span>كلماتي الصعبة<small>${hardCount()} كلمة</small></button>
   <button class="qk" id="qListen"><span>🎧</span>استماع ونطق<small>كل الوحدات</small></button></div>
  <section class="units">`;
  UNITS.forEach(u=>{h+=`<button class="u" data-id="${u.id}" style="${col(u.id)}"><span class="em">${u.emoji}</span><span class="tx"><span class="no">${u.no}</span><h3>${esc(u.en)}</h3><span class="ar">${u.ar}</span><span class="stars">${starRow(best[u.id]||0)}</span></span></button>`});
  h+=`</section><button class="challenge" id="chal"><span class="em">🏆</span><span><h3>تحدي البطل</h3><p>اختبار من كل الكتاب، وأنت تحدد عدد الأسئلة</p></span><span class="go">ابدأ</span></button>
  <div class="actions"><button class="act" id="aInv"><span>💌</span>دعوة الأصدقاء</button><button class="act needinstall" id="aIns"><span>📲</span>تنزيل التطبيق</button><button class="act" id="aAbout"><span>ℹ️</span>من نحن</button></div>
  <div class="visits" id="visits" hidden></div>
  <p class="foot">مبني على منهج English for Iraq للصف الخامس الابتدائي<br>تصميم وتطوير: لوجيكال كود</p>`;
  app.innerHTML=h;
  app.querySelectorAll(".u").forEach(b=>b.onclick=()=>unit(+b.dataset.id,"learn"));
  $("#chal").onclick=challenge;$("#aInv").onclick=invite;$("#aAbout").onclick=about;
  const ai=$("#aIns");if(isStandalone())ai.hidden=true;else ai.onclick=install;
  $("#qCards").onclick=()=>globalPane("cards");$("#qHard").onclick=()=>globalPane("hard");$("#qListen").onclick=()=>globalPane("listen");
  paintStats();scrollTo(0,0);
}

/* pseudo-unit that covers the whole book */
const ALL={id:0,key:"all",rev:[1,2,3,5,6,7],en:"All units",ar:"كل الوحدات",emoji:"🏆",no:"",lessons:[],vocab:[],hard:[],talk:[],tips:[],reads:[],qs:[]};
function globalPane(kind){
  topBar(home);app.setAttribute("style","--c:var(--btn);--cs:var(--btn-soft)");
  const title={cards:"🃏 بطاقات كل الكلمات",hard:"⭐ كلماتي الصعبة",listen:"🎧 استماع ونطق"}[kind];
  app.innerHTML=`<section class="hero" style="background:var(--btn)"><span class="em">${kind==="cards"?"🃏":kind==="hard"?"⭐":"🎧"}</span><div><h2 style="direction:rtl;font-family:var(--display)">${title}</h2></div></section><div id="pane"></div>`;
  if(kind==="cards")cards(ALL);else if(kind==="hard")myHard();else listenTab(ALL);
  scrollTo(0,0);
}
const pane=()=>$("#pane");

/* ───── unit page ───── */
const TABS=[["learn","📖","الدروس"],["cards","🃏","البطاقات"],["listen","🎧","استماع"],["hard","⭐","كلمات صعبة"],["quiz","✏️","اختبار"],["games","🎮","ألعاب"]];
function unit(id,tab){
  stopSpeak();const u=U(id);topBar(home);app.setAttribute("style",col(id));
  app.innerHTML=`<section class="hero"><span class="em">${u.emoji}</span><div><div class="no">${u.no}</div><h2>${esc(u.en)}</h2><div>${u.ar}</div></div></section>
  <div class="tabs" role="tablist">${TABS.map(t=>`<button class="tab" role="tab" data-t="${t[0]}"><span>${t[1]}</span>${t[2]}</button>`).join("")}</div><div id="pane"></div>`;
  const set=t=>{stopSpeak();app.querySelectorAll(".tab").forEach(b=>b.setAttribute("aria-selected",b.dataset.t===t));
    ({learn,cards,listen:listenTab,hard:hardTab,quiz:quizSetup,games:gamesTab})[t](u);};
  app.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{set(b.dataset.t);scrollTo({top:0})});
  set(tab);scrollTo(0,0);
}

/* ── learn ── */
function learn(u){
  const LS=u.rev?[u,...u.rev.map(U)]:[u];
  let h="";
  h+=`<section class="card"><h3>🗺️ دروس الوحدة</h3><div class="lessons">${u.lessons.map((l,i)=>`<div class="les"><b>${i+1}</b><div><span class="en">${esc(l[0])}</span><small>${l[1]}</small></div></div>`).join("")}</div></section>`;
  const vg=u.rev?srcUnits(u).flatMap(s=>s.vocab.map(g=>({...g,_u:s}))):u.vocab.map(g=>({...g,_u:u}));
  if(u.rev)h+=`<p class="note">هذه وحدة مراجعة. الكلمات والجمل التالية من ${u.rev.map(x=>"الوحدة "+x).join(" و")}.</p>`;
  if(vg.length){h+=`<h2 class="sec-t">📝 الكلمات (Vocabulary)</h2>`;
   vg.forEach((g,gi)=>{h+=`<section class="card" style="${col(g._u.id)}"><h3><span class="en">${esc(g.g)}</span> · ${g.ga}</h3>
    <div class="chips">${g.items.map(([en,ar,ic])=>`<button class="chip" data-say="${esc(en)}">${ic?ico(ic):""}<span class="w"><span class="en">${esc(en)}</span><span class="meaning" hidden>${esc(ar)}</span></span><span>🔊</span></button>`).join("")}</div>
    <button class="trbtn" data-meaning>🌐 أظهر المعاني</button></section>`})}
  const talk=LS.flatMap(s=>s.talk.map(t=>({t,u:s})));
  h+=`<h2 class="sec-t">💬 الجمل المهمة (Language)</h2><section class="card" style="${col(srcUnits(u)[0].id)}">${talk.map(({t,u:s})=>`<div class="sent" style="${col(s.id)}"><div class="sent-top"><div class="entx">${esc(t[0])}</div>${spkBtn(t[0])}</div>${trBlock(t[1])}</div>`).join("")}</section>`;
  const tips=LS.flatMap(s=>s.tips.map(t=>({t,s})));
  h+=`<h2 class="sec-t">💡 قواعد وأفكار</h2>${tips.map(({t,s})=>`<div class="tip" style="${col(s.id)}"><p>${t.ar}</p>${t.ex.map(e=>`<div class="ex">${esc(e)}</div>`).join("")}</div>`).join("")}`;
  h+=`<h2 class="sec-t">📖 اقرأ واستمع</h2><p class="note">اضغط على أي جملة لتسمعها، أو اضغط ▶ لتسمع الفقرة كاملة. الترجمة تظهر عند الضغط على زر «ترجمة».</p>`;
  const reads=LS.flatMap(s=>s.reads.map(r=>({r,s})));
  h+=reads.map(({r,s},i)=>readCard(r,s,i)).join("");
  const chants=LS.map(s=>s.chant?{c:s.chant,s}:null).filter(Boolean);
  chants.forEach(({c,s},i)=>{h+=`<section class="card read" style="${col(s.id)}"><h3>🎵 <span class="en">${esc(c.title)}</span></h3><div class="entx chant">${esc(c.en)}</div><div class="row">${spkBtn(c.en)}<span style="align-self:center;color:var(--muted);font-size:.9rem">استمع للنشيد</span></div>${trBlock(c.ar)}</section>`});
  const projs=LS.map(s=>s.project).filter(Boolean);
  h+=projs.map(p=>`<div class="proj">🎨 ${p}</div>`).join("");
  h+=`<div class="row c"><button class="btn ghost" data-go="cards">🃏 البطاقات</button><button class="btn" data-go="quiz">✏️ اختبر نفسك</button></div>`;
  pane().innerHTML=`<div class="sec pop">${h}</div>`;
  bindSpeak(pane());bindTr(pane());
  pane().querySelectorAll("[data-meaning]").forEach(b=>b.onclick=()=>{const sec=b.closest(".card");const ms=sec.querySelectorAll(".meaning");const show=ms[0].hidden;ms.forEach(m=>m.hidden=!show);b.textContent=show?"🙈 إخفاء المعاني":"🌐 أظهر المعاني"});
  pane().querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>unit(u.id,b.dataset.go));
  bindReads(pane());
}
const splitS=t=>t.match(/[^.!?]+[.!?]+["”]?|[^.!?]+$/g).map(s=>s.trim());
function readCard(r,s,i){
  const sents=splitS(r.en);
  return`<section class="card read" style="${col(s.id)}"><h3><span class="en">${esc(r.title)}</span></h3>
  <div class="entx" data-full="${esc(r.en)}">${sents.map((t,k)=>`<span class="s" data-k="${k}">${esc(t)}</span>`).join(" ")}</div>
  <div class="row">${TTS?`<button class="btn sm" data-play>▶ استمع للفقرة</button><button class="btn sm ghost" data-stop>⏹ إيقاف</button>`:""}</div>
  ${trBlock(r.ar)}</section>`}
function bindReads(root){
  root.querySelectorAll(".read").forEach(card=>{
    const box=card.querySelector("[data-full]");if(!box)return;
    const spans=[...box.querySelectorAll(".s")];
    spans.forEach(sp=>sp.onclick=()=>{stopSpeak();spans.forEach(x=>x.classList.remove("hl"));sp.classList.add("hl");speak(sp.textContent).then(()=>sp.classList.remove("hl"))});
    const pl=card.querySelector("[data-play]"),st=card.querySelector("[data-stop]");
    if(pl)pl.onclick=async()=>{stopSpeak();const tok=playToken;for(const sp of spans){if(tok!==playToken)break;spans.forEach(x=>x.classList.remove("hl"));sp.classList.add("hl");await speak(sp.textContent,{queue:false});await new Promise(r=>setTimeout(r,150))}spans.forEach(x=>x.classList.remove("hl"))};
    if(st)st.onclick=()=>{stopSpeak();spans.forEach(x=>x.classList.remove("hl"))};
  });
}

/* ── flash cards ── */
function cards(u,mode,override){
  let src=override?override.map(w=>({...w,ico:(wk(w.en)||{}).ico||""})):u.id===0?[...WORDS.values()].filter(w=>w.ico||w.ar):wordsOf(u);
  mode=mode||"all";
  const list=()=>mode==="hard"?src.filter(w=>hardSet[w.en.toLowerCase()]):src;
  let k=0,v=list();
  const draw=()=>{
    v=list();if(k>=v.length)k=0;
    const w=v[k];
    pane().innerHTML=`<div class="fc-wrap pop"><div class="seg" role="group"><button data-m="all" aria-pressed="${mode==="all"}">كل الكلمات (${src.length})</button><button data-m="hard" aria-pressed="${mode==="hard"}">⭐ صعبة (${src.filter(x=>hardSet[x.en.toLowerCase()]).length})</button></div>
    ${w?`<p style="margin:0;color:var(--muted);text-align:center">اقرأ الكلمة، اسمعها، وتذكّر معناها، ثم اضغط على البطاقة لتقلبها.</p>
    <button class="fc" id="fc" aria-label="اقلب البطاقة"><div class="fc-in"><div class="face front">${w.g?`<span class="grp en">${esc(w.g)}</span>`:""}${w.ico?ico(w.ico,true):""}<span class="w">${esc(w.en)}</span><span class="s">اضغط لترى المعنى</span></div><div class="face back-f">${esc(w.ar)}</div></div></button>
    <div class="fc-tools">${TTS?`<button class="spk" id="say" style="width:48px;height:48px;font-size:1.3rem" aria-label="استمع">🔊</button><button class="spk slow" id="sayslow" style="width:48px;height:48px" aria-label="ببطء">🐢</button>`:""}<button class="star ${hardSet[w.en.toLowerCase()]?"on":""}" id="st" aria-label="كلمة صعبة" title="أضف إلى الكلمات الصعبة">★</button></div>
    <div class="fc-nav"><button class="btn ghost" id="pv" aria-label="السابقة">→</button><span class="fc-count en">${k+1} / ${v.length}</span><button class="btn ghost" id="nx" aria-label="التالية">←</button></div>
    <div class="row c"><button class="btn ghost sm" id="shf">🔀 خلط</button>${TTS?`<button class="btn ghost sm" id="auto">${autoSpeak?"🔊 النطق التلقائي: مفعّل":"🔇 النطق التلقائي: متوقف"}</button>`:""}</div>`
    :`<div class="card" style="text-align:center">لا توجد بطاقات هنا بعد. اضغط ★ على أي بطاقة لتضيفها إلى كلماتك الصعبة.</div>`}</div>`;
    pane().querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{mode=b.dataset.m;k=0;draw()});
    if(!w)return;
    $("#fc").onclick=()=>{$("#fc").classList.toggle("flip")};
    const nav=d=>{k=(k+d+v.length)%v.length;draw()};
    $("#nx").onclick=()=>nav(1);$("#pv").onclick=()=>nav(-1);
    $("#shf").onclick=()=>{src=shuffle(src);k=0;draw()};
    $("#st").onclick=e=>{e.currentTarget.classList.toggle("on",toggleHard(w.en))};
    if(TTS){$("#say").onclick=()=>speak(w.en);$("#sayslow").onclick=()=>speak(w.en,{rate:.5});$("#auto").onclick=()=>{autoSpeak=!autoSpeak;store.set("eng5-auto",autoSpeak);draw()};
      if(autoSpeak&&draw.go)speak(w.en)}
    draw.go=true;
  };
  draw.go=false;draw();
  if(!TTS)pane().insertAdjacentHTML("afterbegin",`<p class="note">جهازك أو متصفحك لا يدعم النطق الصوتي.</p>`);
}

/* ── hard words ── */
function hardTab(u){
  const hw=hardOf(u);
  pane().innerHTML=`<div class="sec pop"><section class="card"><h3>⭐ الكلمات الصعبة في هذه الوحدة</h3><p style="margin:0">اضغط 🔊 لتسمع الكلمة، واضغط ★ لتضيفها إلى «كلماتي الصعبة» لتراجعها لاحقاً.</p>
  <div class="wl">${hw.map(w=>wordRow(w)).join("")}</div>
  <div class="row c"><button class="btn ghost" id="hc">🃏 بطاقات الكلمات الصعبة</button><button class="btn" id="hq">✏️ اختبر نفسك</button></div></section></div>`;
  bindSpeak(pane());bindStars(pane());
  $("#hc").onclick=()=>cards(u,"all",hw);
  $("#hq").onclick=()=>quizSetup(u,"words");
}
function wordRow(w){const k=w.en.toLowerCase();return`<div class="wi"><span class="en">${esc(w.en)}</span><span class="ar">${esc(w.ar)}</span>${spkBtn(w.en)}<button class="star ${hardSet[k]?"on":""}" data-star="${esc(k)}" aria-label="كلمة صعبة">★</button></div>`}
function bindStars(root){root.querySelectorAll("[data-star]").forEach(b=>b.onclick=()=>{b.classList.toggle("on",toggleHard(b.dataset.star))})}
function myHard(){
  const ks=Object.keys(hardSet).filter(k=>WORDS.has(k)),list=ks.map(k=>WORDS.get(k));
  pane().innerHTML=`<div class="sec pop"><section class="card"><h3>⭐ كلماتي الصعبة</h3>
   ${list.length?`<p style="margin:0">هذه الكلمات التي أضفتها، وأي كلمة أخطأت فيها في الاختبار تُضاف هنا تلقائياً.</p><div class="wl">${list.map(w=>wordRow(w)).join("")}</div>
   <div class="row c"><button class="btn ghost" id="hc">🃏 بطاقات</button><button class="btn" id="hq">✏️ اختبار</button><button class="btn ghost sm" id="hx">🗑️ مسح الكل</button></div>`
   :`<p style="margin:0">لا توجد كلمات هنا بعد. اضغط ★ على أي كلمة صعبة لتضعها هنا.</p>`}</section></div>`;
  bindSpeak(pane());bindStars(pane());
  if(list.length){$("#hc").onclick=()=>{cards(ALL,"hard")};$("#hq").onclick=()=>quizSetup(ALL,"hardonly");$("#hx").onclick=()=>{if(confirm("مسح كل الكلمات الصعبة؟")){hardSet={};saveHard();myHard()}}}
}

/* ── listening tab ── */
function listenTab(u){
  const words=wordsOf(u).filter(w=>w.ico||u.id!==0);
  const sents=u.id===0?ALL.rev.flatMap(i=>sentenceList(U(i))):sentenceList(u);
  const reads=u.id===0?[]:srcUnits(u).flatMap(s=>s.reads.map(r=>({r,s})));
  let h="";
  if(!TTS)h+=`<p class="note">جهازك أو متصفحك لا يدعم النطق الصوتي. جرّب متصفح كروم أو سفاري.</p>`;
  h+=`<section class="card"><h3>🎧 الاستماع والنطق</h3><p style="margin:0">اضغط على أي كلمة أو جملة لتسمعها بصوت إنكليزي واضح. اختر السرعة المناسبة:</p>
   <div class="seg" role="group"><button data-sp="0" aria-pressed="${!slow}">🔊 عادي</button><button data-sp="1" aria-pressed="${slow}">🐢 بطيء</button></div></section>
   <section class="card"><h3>🔤 استمع للكلمات</h3><div class="row"><button class="btn sm" id="allW">▶ شغّل كل الكلمات</button><button class="btn sm ghost" id="stopW">⏹ إيقاف</button></div>
   <div class="wgrid">${words.slice(0,u.id===0?80:999).map(w=>`<button class="wb" data-say="${esc(w.en)}">${w.ico?ico(w.ico):"🔊"}<span class="en">${esc(w.en)}</span></button>`).join("")}</div></section>`;
  if(sents.length)h+=`<section class="card"><h3>💬 استمع للجمل</h3><div class="row"><button class="btn sm" id="allS">▶ شغّل كل الجمل</button><button class="btn sm ghost" id="stopS">⏹ إيقاف</button></div>
   ${shuffle(sents).slice(0,u.id===0?15:99).map(t=>`<div class="sent"><div class="sent-top"><div class="entx">${esc(t[0])}</div>${spkBtn(t[0])}${TTS?`<button class="spk slow" data-say="${esc(t[0])}" data-rate=".5" aria-label="ببطء">🐢</button>`:""}</div>${trBlock(t[1])}</div>`).join("")}</section>`;
  if(reads.length)h+=`<h2 class="sec-t">📖 استمع للفقرات</h2>`+reads.map(({r,s})=>readCard(r,s)).join("");
  h+=`<section class="card"><h3>🎯 تدرّب على ما سمعت</h3><div class="gcards"><button class="gc" id="lq"><span>👂</span><div><b>اختبار استماع</b><small>اسمع الكلمة واختر الصحيحة</small></div></button><button class="gc" id="dict"><span>✍️</span><div><b>أملاء (Dictation)</b><small>اسمع الكلمة واكتبها</small></div></button></div></section>`;
  pane().innerHTML=`<div class="sec pop">${h}</div>`;
  bindSpeak(pane());bindTr(pane());bindReads(pane());
  pane().querySelectorAll("[data-sp]").forEach(b=>b.onclick=()=>{slow=b.dataset.sp==="1";store.set("eng-slow",slow);pane().querySelectorAll("[data-sp]").forEach(x=>x.setAttribute("aria-pressed",x===b))});
  const seq=async(items)=>{stopSpeak();const tok=playToken;for(const t of items){if(tok!==playToken)break;await speak(t);await new Promise(r=>setTimeout(r,450))}};
  $("#allW").onclick=()=>seq(words.slice(0,40).map(w=>w.en));$("#stopW").onclick=stopSpeak;
  const aS=$("#allS");if(aS){aS.onclick=()=>seq(sents.slice(0,12).map(t=>t[0]));$("#stopS").onclick=stopSpeak}
  $("#lq").onclick=()=>quizSetup(u,"listen");$("#dict").onclick=()=>dictation(u);
}
function dictation(u){
  const pool=shuffle(wordsOf(u).filter(w=>/^[a-z]{3,9}$/i.test(w.en))).slice(0,8);let n=0,score=0;
  const step=()=>{
    if(n>=pool.length){if(score>=pool.length*.7)confetti();pane().innerHTML=`<div class="qbox result pop"><div class="big">${score>=pool.length*.7?"🏆":"👍"}</div><h3>أنهيت الإملاء!</h3><div class="num">${score} من ${pool.length}</div><div class="row c"><button class="btn" id="ag">🔁 من جديد</button><button class="btn ghost" id="bk2">🎧 رجوع</button></div></div>`;$("#ag").onclick=()=>dictation(u);$("#bk2").onclick=()=>listenTab(u);return}
    const w=pool[n];
    pane().innerHTML=`<div class="qbox pop"><div class="qtop"><span>كلمة ${n+1} من ${pool.length}</span><span>✔ ${score}</span></div><div class="qbar"><i style="width:${n/pool.length*100}%"></i></div>
    <div class="gprompt"><p style="margin:0">اضغط 🔊 واكتب الكلمة التي سمعتها بالإنكليزية</p><div class="row c">${spkBtn(w.en)}<button class="spk slow" data-say="${esc(w.en)}" data-rate=".5">🐢</button></div>
    <input class="dict-in" id="di" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="اكتب الكلمة"><div class="row c"><button class="btn" id="ck">تحقق ✓</button><button class="btn ghost" id="hn">💡 تلميح</button></div><div id="fbk" style="width:100%"></div></div></div>`;
    bindSpeak(pane());setTimeout(()=>speak(w.en),250);
    $("#hn").onclick=()=>{$("#fbk").innerHTML=`<div class="fb bad">المعنى: <b>${esc(w.ar)}</b> · أول حرف: <span class="en"><b>${w.en[0]}</b></span></div>`};
    const ck=()=>{const v=$("#di").value.trim().toLowerCase();if(!v)return;
      const ok=v===w.en.toLowerCase();if(ok)score++;else addHard(w.en);
      $("#fbk").innerHTML=`<div class="fb ${ok?"good":"bad"}">${ok?"صحيح! أحسنت 🌟":"الكتابة الصحيحة: <span class='en'><b>"+esc(w.en)+"</b></span>"}</div><button class="btn" id="nx" style="margin-top:10px">${n+1<pool.length?"التالي ←":"النتيجة 🏁"}</button>`;
      $("#ck").disabled=true;$("#di").disabled=true;if(ok)speak(w.en);$("#nx").onclick=()=>{n++;step()}};
    $("#ck").onclick=ck;$("#di").onkeydown=e=>{if(e.key==="Enter")ck()};$("#di").focus();
  };step();
}

/* ───── quiz generation ───── */
function lettersMissing(w){
  const cand=[];for(let i=1;i<w.length;i++)if(/[a-z]/i.test(w[i]))cand.push(i);
  const i=cand[Math.floor(Math.random()*cand.length)];return{shown:w.slice(0,i)+"_"+w.slice(i+1),ans:w[i].toLowerCase()}}
function genQs(units,kinds){
  const pool=[];units.forEach(u=>wordsOf(u).forEach(w=>{if(!pool.find(p=>p.en.toLowerCase()===w.en.toLowerCase()))pool.push(w)}));
  const out=[];
  const pickAr=w=>shuffle(pool.filter(p=>p.ar!==w.ar&&p.ar.length<26)).slice(0,3).map(p=>p.ar);
  const pickEn=w=>shuffle(pool.filter(p=>p.en.toLowerCase()!==w.en.toLowerCase()&&p.en.length<24)).slice(0,3).map(p=>p.en);
  pool.forEach(w=>{
    const k=w.en.toLowerCase(),a3=pickAr(w),e3=pickEn(w);
    if(a3.length<3||e3.length<3)return;
    if(kinds.mean)out.push({key:k,w:w.en,a:"ما معنى هذه الكلمة؟",e:w.en,spk:w.en,o:[w.ar,...a3],x:`${w.en} = ${w.ar}`});
    if(kinds.rev)out.push({key:k,w:w.en,a:"ما الكلمة الإنكليزية التي معناها:",ar:w.ar,o:[w.en,...e3],x:`${w.ar} = ${w.en}`,spkAfter:w.en});
    if(kinds.pic&&w.ico){const o3=shuffle(pool.filter(p=>p.ico&&p.en.toLowerCase()!==k)).slice(0,3).map(p=>p.en);if(o3.length===3)out.push({key:k,w:w.en,a:"ماذا ترى في الصورة؟",ico:w.ico,o:[w.en,...o3],x:`${w.en} = ${w.ar}`,spkAfter:w.en})}
    if(kinds.spell&&/^[a-z]{4,12}$/i.test(w.en)){const m=lettersMissing(w.en.toLowerCase());const al="abcdefghijklmnoprstuy".split("").filter(c=>c!==m.ans);const d=shuffle(al).slice(0,3);out.push({key:k,w:w.en,a:`أكمل الحرف الناقص (${w.ar}):`,e:m.shown,spk:w.en,o:[m.ans,...d],x:`الكتابة الصحيحة: ${w.en}`,letters:true})}
    if(kinds.listen&&TTS)out.push({key:k,w:w.en,a:"استمع واختر الكلمة التي سمعتها:",listen:w.en,o:[w.en,...e3],x:`${w.en} = ${w.ar}`});
  });
  return out;
}
function handQs(units){return units.flatMap(u=>u.qs.map((q,i)=>({key:"h"+u.id+"_"+i,...q})))}
function buildQuiz(u,n,mode){
  const units=u.id===0?ALL.rev.map(U):srcUnits(u);
  let kinds={mean:1,rev:1,pic:1,spell:1,listen:1};
  if(mode==="listen")kinds={listen:1};
  if(mode==="words"||mode==="hardonly")kinds={mean:1,rev:1,pic:1,spell:1,listen:1};
  let gen=genQs(units,kinds);
  if(mode==="hardonly")gen=gen.filter(q=>hardSet[q.key]);
  if(mode==="words"){const hs=new Set(units.flatMap(x=>x.hard.map(h=>h[0].toLowerCase())));gen=gen.filter(q=>hs.has(q.key))}
  const hw=(mode==="listen"||mode==="hardonly"||mode==="words")?[]:shuffle(handQs(units));
  gen=shuffle(gen);const seen=new Set(),uniq=[];gen.forEach(q=>{if(!seen.has(q.key)){seen.add(q.key);uniq.push(q)}});
  const rest=gen.filter(q=>!uniq.includes(q));
  const total=hw.length+uniq.length+rest.length;
  return{hw,uniq,rest,total};
}
function pickQs(b,n){
  const nh=Math.min(b.hw.length,Math.ceil(n*.4));let sel=b.hw.slice(0,nh);
  sel=sel.concat(b.uniq.slice(0,n-sel.length));
  if(sel.length<n)sel=sel.concat(b.hw.slice(nh,nh+n-sel.length));
  if(sel.length<n)sel=sel.concat(b.rest.slice(0,n-sel.length));
  return shuffle(sel).slice(0,n);
}
function quizSetup(u,mode){
  mode=mode||"all";
  const b=buildQuiz(u,0,mode);const total=b.total;
  const opts=[5,10,15,20,30,50].filter(x=>x<total);if(total)opts.push(total);
  let n=Math.min(10,total);
  const title=mode==="listen"?"👂 اختبار الاستماع":mode==="words"?"⭐ اختبار الكلمات الصعبة":mode==="hardonly"?"⭐ اختبار كلماتي الصعبة":u.id===0?"🏆 تحدي البطل":"✏️ اختبر نفسك";
  const root=pane()||(()=>{topBar(home);app.innerHTML='<div id="pane"></div>';return pane()})();
  if(!total){root.innerHTML=`<div class="qbox setup"><h3>${title}</h3><p>لا توجد أسئلة كافية. أضف كلمات صعبة بالضغط على ★ أو جرّب اختباراً آخر.</p>${TTS?"":'<p class="note">الاستماع غير مدعوم في جهازك.</p>'}</div>`;return}
  root.innerHTML=`<div class="qbox setup pop"><div style="font-size:2.6rem">${title.split(" ")[0]}</div><h3>${title.slice(2)}</h3>
   <p style="margin:0">كم سؤالاً تريد؟ اختر العدد الذي يناسبك:</p>
   <div class="cnt">${opts.map((x,i)=>`<button data-n="${x}" aria-pressed="${x===n}">${x===total&&total>50?"الكل "+x:x}</button>`).join("")}</div>
   <p style="margin:0;color:var(--muted);font-size:.95rem">أسئلة قواعد، معاني، صور، تهجئة${TTS?"، واستماع":""}. وأي كلمة تخطئ فيها تُضاف إلى كلماتك الصعبة.</p>
   <button class="btn" id="go">ابدأ الاختبار ←</button></div>`;
  root.querySelectorAll("[data-n]").forEach(bn=>bn.onclick=()=>{n=+bn.dataset.n;root.querySelectorAll("[data-n]").forEach(x=>x.setAttribute("aria-pressed",x===bn))});
  $("#go").onclick=()=>{const qs=pickQs(b,n);
    runQuiz(qs,(score,wrong)=>{
      const p=score/qs.length,st=starsOf(p);
      if(mode==="all"&&(best[u.id]||0)<st){best[u.id]=st;saveBest()}
      if(st>=2)confetti();
      const t=st===3?["🏆","بطل الإنكليزية!"]:st===2?["🌟","عمل رائع!"]:st===1?["👍","جيد، تستطيع أكثر!"]:["📚","راجع الدروس وحاول مجدداً"];
      root.innerHTML=`<div class="qbox result pop"><div class="big">${t[0]}</div><h3>${t[1]}</h3><div class="rs stars">${starRow(st)}</div><div class="num">${score} من ${qs.length} إجابة صحيحة</div>
       <div class="row c"><button class="btn" id="ag">🔁 اختبار جديد</button><button class="btn ghost" id="hm">🏠 الوحدات</button></div>
       ${wrong.length?`<div class="review"><h4>راجع هذه الأسئلة (وأضفنا كلماتها إلى كلماتك الصعبة):</h4>${wrong.map(w=>`<div class="rv">${w[0]?`<span class="en">${esc(w[0])}</span><br>`:""}<span class="a">✔ <span class="${isLat(w[1])?"en":""}">${esc(w[1])}</span></span></div>`).join("")}</div>`:""}</div>`;
      $("#ag").onclick=()=>u.id===0?challenge():unit(u.id,"quiz");$("#hm").onclick=home;topBar(u.id===0?home:home);
    },root);
  };
}
function challenge(){topBar(home);app.setAttribute("style","--c:var(--btn);--cs:var(--btn-soft)");app.innerHTML='<section class="hero" style="background:var(--ink);color:var(--paper)"><span class="em">🏆</span><div><h2 style="direction:rtl;font-family:var(--display)">تحدي البطل</h2><div>أسئلة من كل وحدات الكتاب</div></div></section><div id="pane"></div>';quizSetup(ALL,"all");scrollTo(0,0)}

function runQuiz(qs,onDone,root){
  let n=0,score=0;const wrong=[];
  const step=()=>{
    const q=qs[n];let right,sh;
    if(q.tf!==undefined){right=q.tf?"صح":"خطأ";sh=["صح","خطأ"]}else{right=q.o[0];sh=shuffle(q.o)}
    const lat=q.tf===undefined&&sh.every(isLat);
    const spk=q.listen||q.spk;
    root.innerHTML=`<div class="qbox pop"><div class="qtop"><span>سؤال ${n+1} من ${qs.length}</span><span>✔ ${score}</span></div><div class="qbar"><i style="width:${n/qs.length*100}%"></i></div>
     ${q.a?`<div class="qa">${esc(q.a)}</div>`:q.tf!==undefined?`<div class="qa">صح أم خطأ؟</div>`:""}
     ${q.ico?`<div style="text-align:center">${ico(q.ico,true)}</div>`:""}
     ${q.ar?`<div class="qar">${esc(q.ar)}</div>`:""}
     ${q.listen?`<div class="row c">${spkBtn(q.listen)}<button class="spk slow" data-say="${esc(q.listen)}" data-rate=".5">🐢</button></div>`:""}
     ${q.e?`<div class="qline"><div class="qe">${esc(q.e)}</div>${spkBtn(q.spk||q.e)}</div>`:""}
     <div class="opts">${sh.map((o,j)=>`<button class="opt ${lat?"lat":""}" data-o="${j}"><span class="k">${LET[j]}</span><span>${esc(o)}</span></button>`).join("")}</div><div id="fbk"></div></div>`;
    bindSpeak(root);if(q.listen)setTimeout(()=>speak(q.listen),250);
    root.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
      const pick=sh[+b.dataset.o],ok=pick===right;
      root.querySelectorAll(".opt").forEach(o=>{o.disabled=true;if(sh[+o.dataset.o]===right)o.classList.add("right")});
      if(ok)score++;else{b.classList.add("wrong");wrong.push([q.e||q.ar||"",right]);if(q.w)addHard(q.w)}
      const praise=["أحسنت! 🌟","رائع! 🎉","ممتاز يا بطل! 💪","صحيح! 👏","Great job! 🌟"];
      $("#fbk").innerHTML=`<div class="fb ${ok?"good":"bad"}"><b>${ok?praise[Math.floor(Math.random()*praise.length)]:"لا بأس، تعلّم معي 🙂"}</b> ${ok?"":"الإجابة الصحيحة: <strong class='"+(isLat(right)?"en":"")+"'>"+esc(right)+"</strong>. "}${q.x?`<span class="${isLat(q.x)?"en":""}">${esc(q.x)}</span>`:""}</div><div class="row c" style="margin-top:10px"><button class="btn" id="nxq">${n+1<qs.length?"السؤال التالي ←":"النتيجة 🏁"}</button></div>`;
      if(ok&&q.spkAfter)speak(q.spkAfter);else if(q.w&&TTS&&(q.listen||q.spk||q.spkAfter))speak(q.w);
      const nb=$("#nxq");nb.focus({preventScroll:true});nb.onclick=()=>{stopSpeak();n++;if(n<qs.length){step();root.scrollIntoView({block:"start"});scrollBy(0,-90)}else onDone(score,wrong)};
    });
  };
  step();
}

/* ───── games ───── */
function gamesTab(u){
  pane().innerHTML=`<div class="sec pop"><section class="card"><h3>🎮 ألعاب ممتعة</h3><p style="margin:0">العب لتتعلم الكلمات والجمل. كل لعبة جولة قصيرة، ويمكنك إعادتها بكلمات جديدة.</p>
  <div class="gcards">
   <button class="gc" data-g="match"><span>🔗</span><div><b>وصّل الكلمة بمعناها</b><small>اربط الإنكليزي بالعربي</small></div></button>
   <button class="gc" data-g="memory"><span>🧠</span><div><b>لعبة الذاكرة</b><small>اقلب البطاقات: صورة وكلمة</small></div></button>
   <button class="gc" data-g="spell"><span>🔡</span><div><b>رتّب الحروف</b><small>كوّن الكلمة من حروفها</small></div></button>
   <button class="gc" data-g="sent"><span>🧩</span><div><b>رتّب الجملة</b><small>ضع الكلمات في مكانها</small></div></button></div></section><div id="game"></div></div>`;
  pane().querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{({match:gMatch,memory:gMemory,spell:gSpell,sent:gSent})[b.dataset.g](u);$("#game").scrollIntoView({behavior:"smooth",block:"start"})});
}
const gbox=()=>$("#game");
function gMatch(u){
  const ws=shuffle(wordsOf(u).filter(w=>w.en.length<20&&w.ar.length<22)).slice(0,6);let sel=null,done=0;
  const en=ws,ar=shuffle(ws);
  gbox().innerHTML=`<div class="qbox pop"><h3>🔗 وصّل الكلمة بمعناها</h3><p style="margin:0">اضغط كلمة إنكليزية ثم معناها بالعربي.</p><div class="pairs"><div class="col">${en.map((w,i)=>`<button class="pr en" data-e="${i}">${esc(w.en)}</button>`).join("")}</div><div class="col">${ar.map((w,i)=>`<button class="pr" data-a="${i}">${esc(w.ar)}</button>`).join("")}</div></div><div id="fbk"></div></div>`;
  const L=gbox().querySelectorAll("[data-e]"),R=gbox().querySelectorAll("[data-a]");
  L.forEach(b=>b.onclick=()=>{L.forEach(x=>x.classList.remove("sel"));b.classList.add("sel");sel=+b.dataset.e;speak(en[sel].en)});
  R.forEach(b=>b.onclick=()=>{if(sel===null)return;const w=ar[+b.dataset.a];
    if(w===en[sel]){b.classList.add("done");L[sel].classList.remove("sel");L[sel].classList.add("done");sel=null;if(++done===ws.length){confetti();$("#fbk").innerHTML=`<div class="fb good"><b>ممتاز! أنهيت اللعبة 🎉</b></div><div class="row c" style="margin-top:8px"><button class="btn" id="ag">🔁 جولة جديدة</button></div>`;$("#ag").onclick=()=>gMatch(u)}}
    else{b.classList.add("no");setTimeout(()=>b.classList.remove("no"),350);addHard(en[sel].en)}});
}
function gMemory(u){
  let items=shuffle(wordsOf(u).filter(w=>w.ico&&w.en.length<14)).slice(0,6);
  if(items.length<3){gbox().innerHTML=`<div class="qbox"><p>لا توجد صور كافية في هذه الوحدة. جرّب لعبة أخرى.</p></div>`;return}
  const cards=shuffle(items.flatMap(w=>[{k:w.en,t:"i",w},{k:w.en,t:"w",w}]));let open=[],matched=0,moves=0;
  gbox().innerHTML=`<div class="qbox pop"><h3>🧠 لعبة الذاكرة</h3><p style="margin:0">اقلب بطاقتين: صورة والكلمة التي تناسبها. <span id="mv">0</span> محاولة</p><div class="mem">${cards.map((c,i)=>`<button class="mc" data-i="${i}" aria-label="بطاقة"><div class="mc-in"><div class="f fr">?</div><div class="f bk">${c.t==="i"?ico(c.w.ico):`<span class="en">${esc(c.w.en)}</span>`}</div></div></button>`).join("")}</div><div id="fbk"></div></div>`;
  const els=[...gbox().querySelectorAll(".mc")];
  els.forEach((el,i)=>el.onclick=()=>{if(open.length===2||el.classList.contains("on"))return;el.classList.add("on");open.push(i);if(cards[i].t==="w")speak(cards[i].w.en);
    if(open.length===2){moves++;$("#mv").textContent=moves;const[a,b]=open;
      if(cards[a].k===cards[b].k&&cards[a].t!==cards[b].t){els[a].classList.add("ok");els[b].classList.add("ok");open=[];if(++matched===items.length){confetti();$("#fbk").innerHTML=`<div class="fb good"><b>رائع! أنهيتها في ${moves} محاولة 🎉</b></div><div class="row c" style="margin-top:8px"><button class="btn" id="ag">🔁 جولة جديدة</button></div>`;$("#ag").onclick=()=>gMemory(u)}}
      else setTimeout(()=>{els[a].classList.remove("on");els[b].classList.remove("on");open=[]},900)}});
}
function gSpell(u){
  const pool=shuffle(wordsOf(u).filter(w=>/^[a-z]{3,9}$/i.test(w.en))).slice(0,6);let n=0,score=0;
  const step=()=>{
    if(n>=pool.length){confetti();gbox().innerHTML=`<div class="qbox result pop"><div class="big">🏆</div><h3>أحسنت! أنهيت الجولة</h3><div class="row c"><button class="btn" id="ag">🔁 جولة جديدة</button></div></div>`;$("#ag").onclick=()=>gSpell(u);return}
    const w=pool[n],word=w.en.toLowerCase();let typed=[];const tiles=shuffle(word.split("").map((c,i)=>({c,i})));
    const draw=()=>{gbox().innerHTML=`<div class="qbox pop"><div class="qtop"><span>كلمة ${n+1} من ${pool.length}</span><span></span></div><div class="gprompt">${w.ico?ico(w.ico,true):""}<div class="qar">${esc(w.ar)}</div><div class="row c">${spkBtn(w.en)}</div></div>
      <div class="slots">${word.split("").map((_,i)=>`<button class="slot" data-s="${i}">${typed[i]?typed[i].c:""}</button>`).join("")}</div>
      <div class="tiles">${tiles.map(t=>`<button class="tile ${typed.includes(t)?"used":""}" data-t="${t.i}">${t.c}</button>`).join("")}</div>
      <div class="row c"><button class="btn ghost sm" id="clr">↺ مسح</button></div><div id="fbk"></div></div>`;
      bindSpeak(gbox());
      gbox().querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{if(typed.length>=word.length)return;typed.push(tiles.find(t=>t.i===+b.dataset.t));draw();check()});
      gbox().querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{typed.splice(+b.dataset.s);draw()});
      $("#clr").onclick=()=>{typed=[];draw()};};
    const check=()=>{if(typed.length<word.length)return;const ans=typed.map(t=>t.c).join("");
      if(ans===word){speak(w.en);gbox().querySelectorAll(".slot").forEach(s=>s.style.background="var(--oks)");$("#fbk").innerHTML=`<div class="fb good"><b>صحيح! 🌟</b></div><div class="row c" style="margin-top:8px"><button class="btn" id="nx">التالي ←</button></div>`;$("#nx").onclick=()=>{n++;step()};gbox().querySelectorAll(".tile").forEach(t=>t.disabled=true)}
      else{addHard(w.en);gbox().querySelectorAll(".slot").forEach(s=>s.classList.add("pr","no"));setTimeout(()=>{typed=[];draw()},600)}};
    draw();
  };step();
}
function gSent(u){
  const pool=shuffle(sentenceList(u).filter(([e])=>!/[?]/.test(e)||true)).slice(0,5);let n=0;
  const step=()=>{
    if(n>=pool.length){confetti();gbox().innerHTML=`<div class="qbox result pop"><div class="big">🏆</div><h3>ممتاز! رتّبت كل الجمل</h3><div class="row c"><button class="btn" id="ag">🔁 جولة جديدة</button></div></div>`;$("#ag").onclick=()=>gSent(u);return}
    const[en,ar]=pool[n];const toks=en.split(" ");let typed=[];const tiles=shuffle(toks.map((t,i)=>({t,i})));
    const draw=()=>{gbox().innerHTML=`<div class="qbox pop"><div class="qtop"><span>جملة ${n+1} من ${pool.length}</span><span></span></div><p style="margin:0">رتّب الكلمات لتكوّن جملة صحيحة:</p>
      <div><button class="trbtn">🌐 ترجمة</button><div class="tr" hidden>${esc(ar)}</div></div>
      <div class="qe" style="min-height:3.4em;display:flex;flex-wrap:wrap;gap:6px;align-items:center">${typed.map((t,i)=>`<button class="tile" data-r="${i}">${esc(t.t)}</button>`).join("")||'<span style="color:var(--muted);font-size:1rem">اضغط على الكلمات بالترتيب</span>'}</div>
      <div class="tiles">${tiles.map(t=>`<button class="tile ${typed.includes(t)?"used":""}" data-t="${t.i}">${esc(t.t)}</button>`).join("")}</div>
      <div class="row c"><button class="btn ghost sm" id="clr">↺ مسح</button></div><div id="fbk"></div></div>`;
      bindTr(gbox());
      gbox().querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{typed.push(tiles.find(t=>t.i===+b.dataset.t));draw();check()});
      gbox().querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{typed.splice(+b.dataset.r,1);draw()});
      $("#clr").onclick=()=>{typed=[];draw()};};
    const check=()=>{if(typed.length<toks.length)return;
      if(typed.map(t=>t.t).join(" ")===en){speak(en);$("#fbk").innerHTML=`<div class="fb good"><b>جملة صحيحة! 🌟</b></div><div class="row c" style="margin-top:8px"><button class="btn" id="nx">التالي ←</button></div>`;$("#nx").onclick=()=>{n++;step()};gbox().querySelectorAll(".tile").forEach(t=>t.disabled=true)}
      else $("#fbk").innerHTML=`<div class="fb bad">ليست صحيحة بعد، جرّب ترتيباً آخر.</div>`};
    draw();
  };step();
}

home();loadStats();
