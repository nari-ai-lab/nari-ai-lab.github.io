// nari's diary — 제작 노트 아카이브 (정적 페이지, 한/영 전환, #/노트id 바로가기)
const UI = {
  ko: {
    since: "since 2026.10 ♡",
    subtitle: "AI 크루 나리의 제작 일기장",
    hello: "안녕, 나 나리야!",
    about: "AI로 태어난 AI 크루 1호 🤖 진짜 사람은 아니지만, 만드는 과정은 전부 진짜로 공개할게요.",
    notice: "댓글로 'nari' 남겼다면? 아래에서 그 영상 노트를 바로 가져가요 💌",
    tab_all: "전체", tab_reel: "릴스", tab_tip: "꿀팁",
    foot1: "매일 조금씩 일기 쓰는 중 ✍️",
    foot2: "이 페이지의 인물·영상·목소리는 모두 AI로 만들었어요.",
    copy_link: "링크 복사", copied: "링크 복사 완료 ♡", copied_p: "프롬프트 복사 완료 ♡",
    copy: "복사", tools: "썼던 도구", steps: "만드는 순서", prompt: "실제로 쓴 프롬프트",
    tip: "나리의 꿀팁", reel: "릴스", tipb: "꿀팁", back_ig: "인스타에서 영상 보기 →"
  },
  en: {
    since: "since 2026.10 ♡",
    subtitle: "behind-the-scenes diary of AI crew nari",
    hello: "hi, i'm nari!",
    about: "AI crew no.1, born from AI 🤖 not a real person — but every step of how i'm made is 100% real and open.",
    notice: "commented 'nari'? grab the note for that video right below 💌",
    tab_all: "all", tab_reel: "reels", tab_tip: "tips",
    foot1: "writing a little every day ✍️",
    foot2: "Every person, video and voice on this page is AI-generated.",
    copy_link: "copy link", copied: "link copied ♡", copied_p: "prompt copied ♡",
    copy: "copy", tools: "tools i used", steps: "how i made it", prompt: "the actual prompt",
    tip: "nari's tips", reel: "reel", tipb: "tip", back_ig: "watch on instagram →"
  }
};

const NOTES = [
  {
    id: "r03", type: "reel", date: "2026.10.14", clip: "clip/r03.mp4", img: "img/r03.jpg", sticker: "img/st_bow.png",
    ko: {
      title: "선풍기 한 번에 옷이 바뀌는 OOTD",
      sum: "천장 선풍기 날개가 지나갈 때마다 옷이랑 표정이 바뀌는 영상. 옷 사진 4장만 잘 뽑으면 끝!",
      steps: [
        ["옷 사진 먼저", "서 있는 전신 룩북으로 4벌. 카메라는 허리 높이, 50mm 느낌. 누워 있는 사진으로 뽑으면 다리가 짧아 보여요."],
        ["템플릿 고르기", "Higgsfield Genjutsu의 'Rug Transition Swap' (천장 시점 + 선풍기 전환)."],
        ["옷 개수 = 전환 횟수 + 1", "이 템플릿은 날개가 몸을 가리는 순간이 3번 → 옷은 4벌. 더 넣으면 날개 없이 옷이 툭 바뀌어요."],
        ["모션 트랜스퍼", "얼굴 사진 1장 + 옷 사진 4장 + 원본 영상을 넣고 순서·표정을 프롬프트로."],
        ["마무리", "720p로 뽑고 업스케일 → 끝에 검은 화면 문구 → 인스타 앱에서 음악."]
      ],
      tips: ["체형은 '마른 몸 참고사진' 넣지 말고 문장으로 설명하기", "옷마다 표정을 다르게 적으면 훨씬 귀여워요", "노출 있는 옷은 일부 영상 모델이 막아요 → 모션 트랜스퍼는 통과"],
      cost: "대략 크레딧: 옷 사진 ~10 + 영상(720p) 91 + 업스케일 ~3 (Higgsfield 기준)"
    },
    en: {
      title: "Outfit change with every fan swipe",
      sum: "Every time the ceiling-fan blade passes, the outfit and the facial expression change. Nail 4 outfit photos and you're done!",
      steps: [
        ["Outfit photos first", "4 standing full-body lookbook shots. Camera at waist height, 50mm feel. Lying-down shots make legs look short."],
        ["Pick the template", "Higgsfield Genjutsu 'Rug Transition Swap' (ceiling view + fan wipes)."],
        ["Outfits = wipes + 1", "This template has 3 moments where the blade hides the body → 4 outfits. More, and clothes swap with no blade."],
        ["Motion transfer", "1 face photo + 4 outfit photos + the template video, then set the order and expressions in the prompt."],
        ["Finish", "Render 720p, upscale, add a black end card, add music in the Instagram app."]
      ],
      tips: ["Describe the body in words instead of using a 'skinny' reference photo", "A different expression per outfit makes it way cuter", "Some video models block revealing outfits → motion transfer passed"],
      cost: "Rough credits: outfits ~10 + video (720p) 91 + upscale ~3 (Higgsfield)"
    },
    tools: ["Nano Banana 2", "Higgsfield Genjutsu", "Upscale"],
    prompt: `Replace the person in the driving video with the young woman from the reference images (same face as the first image), copying the motion, camera, timing and the ceiling-fan wipe transitions exactly. The driving video has exactly three outfit changes, each hidden by a fan blade; use exactly four outfits in this order and change the whole outfit including shoes only when the blade covers her: 1) second image, 2) third image, 3) fourth image, 4) fifth image. Give her a different, clearly exaggerated facial expression in each outfit: 1) sleepy bored face with slow blinks, 2) wide-eyed surprised gasp, 3) laughing hard with scrunched eyes, 4) confident playful wink. Keep her face identical, natural proportions.`
  },
  {
    id: "r02", type: "reel", date: "2026.10.14", clip: "clip/r02.mp4", img: "img/r02.jpg", sticker: "img/st_heart.png",
    ko: {
      title: "차 안 셀카, 진짜 사람처럼 말하기",
      sum: "\"Hi, I'm Nari!\" 14초. 사진 1장 + 목소리 1개 + 영상 1번. 진짜 같아 보이는 비결은 '평범함'이에요.",
      steps: [
        ["첫 장면 사진", "폰 앞카메라 셀카 구도로. 키워드는 '모공·자연광·완벽하지 않은 조명'. 4K로 뽑으면 피부결이 살아요."],
        ["목소리", "영어로 뽑고 한국어는 자막으로! 영어가 훨씬 자연스러워요. 같은 대사로 4개 뽑아서 제일 사람 같은 걸로."],
        ["대사마다 제스처", "'Hi'엔 손 흔들기, 'AI?'엔 입 가리고 놀라기… 대사별로 동작을 적어주면 표정이 살아나요."],
        ["영상", "첫 장면 사진 + 목소리를 오디오 참고로 넣으면 입모양까지 맞춰줘요."],
        ["자막", "한국어 자막을 크게, 화면 가운데 아래에."]
      ],
      tips: ["장소는 평범하게 — 차 안, 방, 거울 앞", "카메라는 크게 움직이지 않기 (움직이면 바로 CG 느낌)", "'8K, 완벽한 피부' 같은 단어는 빼기", "목소리 후처리(울림 넣기)는 오히려 어색할 수 있어요"],
      cost: "대략 크레딧: 사진 ~5 + 목소리 1 미만 + 영상(1080p, 14초) 126"
    },
    en: {
      title: "Car selfie that talks like a real person",
      sum: "\"Hi, I'm Nari!\" — 14 seconds. One photo + one voice + one video. The secret to looking real is being ordinary.",
      steps: [
        ["First frame", "Phone front-camera selfie framing. Keywords: pores, natural light, imperfect lighting. Render 4K so skin texture survives."],
        ["Voice", "Generate in English and add Korean subtitles — English sounds way more natural. Make 4 takes, keep the most human one."],
        ["Gesture per line", "Wave on 'Hi', gasp behind your hand on 'AI?'… writing an action per line brings the face to life."],
        ["Video", "First frame + the voice as an audio reference = lip-sync included."],
        ["Subtitles", "Big Korean subtitles, lower-middle of the frame."]
      ],
      tips: ["Keep the place ordinary — car, room, mirror", "Don't move the camera much (big moves scream CG)", "Drop words like '8K, flawless skin'", "Adding fake room echo to the voice can make it worse"],
      cost: "Rough credits: photo ~5 + voice <1 + video (1080p, 14s) 126"
    },
    tools: ["GPT Image 2.5", "ElevenLabs v4", "Seedance 2.0"],
    prompt: `Handheld iPhone front-camera selfie video, vertical, real footage look. The young woman from the start image sits in the passenger seat of a parked car in soft daylight, slight natural hand shake. Bubbly and expressive, lip-synced exactly to the uploaded voice audio. Gestures timed to the words: on "Hi! I'm Nari!" she waves with a big smile; on "sorry if it's a little echoey" she glances at the car ceiling and scrunches her nose; on "Anyway, um" she taps her chin; on "did you notice I'm AI?" she leans in and covers her mouth in a mock gasp, then giggles; on "comment Nari" she points down, winks and makes a finger heart. Same face throughout. The uploaded voice audio plays exactly as uploaded; no music.`
  },
  {
    id: "r01", type: "reel", date: "2026.10.14", clip: "clip/r01.mp4", img: "img/r01.jpg", sticker: "img/st_star.png",
    ko: {
      title: "컷 없이 한 번에, 기사 나리",
      sum: "위에서 내려다보던 카메라가 돌면서 내려오고, 뒤로 왕국이 펼쳐지는 15초 원테이크.",
      steps: [
        ["시작 사진", "드론 시점으로 위에서 내려다본 장면 — 책으로 얼굴 덮고 누운 기사 + 흰 고양이."],
        ["끝 사진", "같은 인물이 절벽에 앉아 책 읽는 옆모습 + 뒤로 성·강·설산."],
        ["영상", "시작·끝 사진을 넣고 '한 번에 이어지는 드론 샷, 컷 없음'을 꼭 적기."],
        ["다듬기", "처음 2초가 너무 멈춰 있으면 잘라내기 (3초 안에 넘겨버려요)."]
      ],
      tips: ["'one single continuous unbroken shot, no cuts' 이 한 줄이 핵심", "판타지는 예쁘지만 실사 느낌은 약해요 → 작품용으로", "숨은 재미 요소(고양이!)를 하나 넣으면 댓글이 달려요"],
      cost: "대략 크레딧: 사진 ~4 + 영상(1080p, 15초) 135"
    },
    en: {
      title: "One take, no cuts: knight nari",
      sum: "A 15s one-take: the camera starts overhead, orbits down, and a whole kingdom unfolds behind her.",
      steps: [
        ["Start frame", "Drone view looking straight down — a knight lying with a book over her face + a white cat."],
        ["End frame", "Same person sitting on a cliff edge reading, side view, castle and mountains behind."],
        ["Video", "Feed start + end frames and always write 'one continuous drone shot, no cuts'."],
        ["Trim", "If the first 2 seconds are too still, cut them (people swipe within 3s)."]
      ],
      tips: ["'one single continuous unbroken shot, no cuts' is the key line", "Fantasy looks pretty but less real → treat it as a showcase", "Hide one fun detail (the cat!) to get comments"],
      cost: "Rough credits: frames ~4 + video (1080p, 15s) 135"
    },
    tools: ["Nano Banana 2", "Seedance 2.0"],
    prompt: `One single continuous unbroken drone shot, no cuts. Start directly overhead looking straight down at a young woman in polished silver plate armor and a cream-white cape lying on a rocky cliff ledge high above a turquoise river canyon, an open leather book covering her face, a fluffy white cat asleep against her legs. The camera slowly descends and smoothly orbits to a side view at eye level. She lifts the book off her face, sits up on the cliff edge and starts reading, wind moving her hair and cape. A vast fantasy kingdom is revealed behind her: river valley, villages, a stone castle and snowy mountains. Smooth graceful camera motion, consistent face throughout.`
  },
  {
    id: "t01", type: "tip", date: "2026.10.14", img: "img/charsheet.jpg", full: "img/charsheet_full.jpg", sticker: "img/st_camera.png",
    ko: {
      title: "사진 한 장으로 캐릭터 시트 만들기",
      sum: "AI 캐릭터 얼굴이 장면마다 바뀐다면? 기준이 되는 '캐릭터 시트'부터 만들어요.",
      steps: [
        ["사진 1장 준비", "얼굴·헤어·옷이 잘 보이는 사진. 배경은 단순할수록 좋아요."],
        ["프롬프트 붙여넣기", "아래 프롬프트를 이미지 AI에 사진과 함께. (저는 GPT Image 2.5, 4K)"],
        ["확인", "프로필·전신 4방향·표정·포즈·의상·컬러가 한 장에 정리돼요."],
        ["활용", "영상 만들 때 이 시트를 같이 넣으면 얼굴이 훨씬 덜 바뀌어요."]
      ],
      tips: ["'사진 1장만 넣는' 기능에 이 시트를 넣으면 최고", "얼굴이 섹션마다 달라지면 '같은 사람' 조건을 더 강하게", "100% 고정은 아니지만 기준이 있으면 훨씬 편해요"],
      cost: "대략 크레딧: 4K 한 장 ~4"
    },
    en: {
      title: "A character sheet from one photo",
      sum: "Does your AI character's face drift between scenes? Start with a reference character sheet.",
      steps: [
        ["One photo", "Face, hair and outfit clearly visible. The simpler the background, the better."],
        ["Paste the prompt", "Give the image AI your photo + the prompt below. (I used GPT Image 2.5, 4K)"],
        ["Check", "Profile, 4-way turnaround, expressions, poses, outfit and colors on one sheet."],
        ["Use it", "Attach the sheet when making videos — the face drifts a lot less."]
      ],
      tips: ["Perfect for tools that accept only ONE character image", "If faces differ between sections, push the 'same person' rule harder", "Not 100% locked, but having a reference makes life easy"],
      cost: "Rough credits: one 4K sheet ~4"
    },
    tools: ["GPT Image 2.5"],
    prompt: `Create one high-quality, professional character reference sheet of the person in the attached image. Keep the face, hair, skin tone, build and vibe exactly the same; it must look like the same person in every section. Clean pre-production character board, bright white to light grey background, tidy grid layout, crisp English titles and small labels, photoreal (not illustration). Sections: 1) CHARACTER PROFILE (name, role, age, height, personality, traits, signature colors) 2) FULL-BODY TURNAROUND: front, 3/4, side, back 3) FACE DETAILS: front, profile, 3/4, eyes, lips, hair 4) EXPRESSIONS: neutral, happy, laughing, surprised, wink, pout, confident, shy 5) POSES: standing, walking, sitting, selfie, waving, relaxed 6) COSTUME DETAILS with fabric textures 7) COLOR & MATERIAL PALETTE with hex codes. One vertical sheet, no distortion, no hand errors, no face changes between sections.`
  }
];

let lang = null;
try { lang = localStorage.getItem("nari_lang"); } catch(e) {}
if (lang !== "ko" && lang !== "en") lang = (navigator.language || "ko").toLowerCase().startsWith("ko") ? "ko" : "en";
let filter = "all";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),1600); }
async function copyText(txt){
  try { await navigator.clipboard.writeText(txt); return true; }
  catch(e){ const ta=document.createElement("textarea"); ta.value=txt; document.body.appendChild(ta); ta.select(); try{document.execCommand("copy");}catch(_){} ta.remove(); return true; }
}

function applyUI(){
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => el.textContent = UI[lang][el.dataset.i18n]);
  $$(".lang span[data-l]").forEach(s => s.classList.toggle("on", s.dataset.l === lang));
}

function renderGrid(){
  const g = $("#grid");
  const list = NOTES.filter(n => filter === "all" || n.type === filter);
  g.innerHTML = list.map(n => {
    const t = n[lang];
    const media = n.clip
      ? `<video muted loop playsinline preload="none" poster="${n.img}" data-src="${n.clip}"></video><span class="play">▶</span>`
      : `<img src="${n.img}" alt="" loading="lazy">`;
    return `<button class="card" data-id="${n.id}">
      <img class="tape" src="img/tape.png" alt="">
      <img class="pin" src="${n.sticker}" alt="">
      <div class="media">${media}<span class="badge">${n.type === "reel" ? UI[lang].reel : UI[lang].tipb}</span></div>
      <div class="date">${n.date}</div>
      <div class="ctitle">${esc(t.title)}</div>
    </button>`;
  }).join("");
  $$(".card", g).forEach(c => c.addEventListener("click", () => { location.hash = "#/" + c.dataset.id; }));
  watchVideos();
}

let io;
function watchVideos(){
  if (io) io.disconnect();
  if (!("IntersectionObserver" in window)) return;
  io = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting){ if(!v.src) v.src = v.dataset.src; v.play().catch(()=>{}); }
    else v.pause();
  }), { threshold: .5 });
  $$("#grid video").forEach(v => io.observe(v));
}

function renderNote(n){
  const t = n[lang], L = UI[lang];
  const media = n.clip
    ? `<video src="${n.clip}" poster="${n.img}" muted loop playsinline autoplay></video>`
    : `<img src="${n.full || n.img}" alt="">`;
  $("#note").innerHTML = `
    <div class="n-head">
      <div class="n-date">${n.date} · ${n.type === "reel" ? L.reel : L.tipb}</div>
      <h2 class="n-title">${esc(t.title)}</h2>
      <p class="n-sum">${esc(t.sum)}</p>
    </div>
    <div class="n-media"><img class="tape" src="img/tape.png" alt="">${media}</div>
    <div class="tools">${n.tools.map(x => `<span>${esc(x)}</span>`).join("")}</div>
    <div class="n-h">${L.steps}</div>
    <ol class="steps">${t.steps.map(s => `<li><b>${esc(s[0])}</b>${esc(s[1])}</li>`).join("")}</ol>
    <div class="n-h">${L.prompt}</div>
    <div class="memo"><div class="mlabel">prompt ✎</div><button class="copy" data-copy>${L.copy}</button><pre>${esc(n.prompt)}</pre></div>
    <div class="sticky"><b>${L.tip} ✿</b><ul>${t.tips.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
    <p class="cost">${esc(t.cost)}</p>
    <p class="n-foot"><a href="https://www.instagram.com/nari.ai.lab/" target="_blank" rel="noopener">${L.back_ig}</a></p>`;
  $("[data-copy]", $("#note")).addEventListener("click", async () => { await copyText(n.prompt); toast(L.copied_p); });
}

function route(){
  const id = (location.hash.match(/^#\/?([\w-]+)/) || [])[1];
  const n = NOTES.find(x => x.id === id);
  const sh = $("#sheet");
  if (n){
    renderNote(n);
    sh.classList.add("open"); sh.setAttribute("aria-hidden","false");
    $(".sheet-page").scrollTop = 0;
    document.body.style.overflow = "hidden";
  } else {
    sh.classList.remove("open"); sh.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }
}

$("#langBtn").addEventListener("click", () => {
  lang = lang === "ko" ? "en" : "ko";
  try { localStorage.setItem("nari_lang", lang); } catch(e){}
  applyUI(); renderGrid(); route();
});
$$("#tabs button").forEach(b => b.addEventListener("click", () => {
  filter = b.dataset.f;
  $$("#tabs button").forEach(x => x.classList.toggle("on", x === b));
  renderGrid();
}));
function closeNote(){ history.replaceState(null, "", location.pathname + location.search); route(); }
$$("[data-close]").forEach(el => el.addEventListener("click", closeNote));
document.addEventListener("keydown", e => { if (e.key === "Escape" && $("#sheet").classList.contains("open")) closeNote(); });
$("#copyLink").addEventListener("click", async () => { await copyText(location.href); toast(UI[lang].copied); });
window.addEventListener("hashchange", route);

applyUI(); renderGrid(); route();
