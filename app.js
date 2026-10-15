// nari's diary — 제작 노트 아카이브 (정적 페이지, 한/영 전환, #/노트id 바로가기)
const UI = {
  ko: {
    since: "since 2026.10 ♡",
    subtitle: "나리의 영상 만들기 일기장",
    hello: "안녕, 나 나리야!",
    about: "카메라 들고 여기저기 다니면서 영상 만드는 거 좋아해요 🎥 어떻게 찍고 만들었는지 여기에 전부 적어둘게요!",
    notice: "댓글로 'nari' 남겼다면? 아래에서 그 영상 노트를 바로 가져가요 💌",
    tab_all: "전체", tab_reel: "릴스", tab_tip: "꿀팁",
    foot1: "매일 조금씩 일기 쓰는 중 ✍️",
    foot2: "이미지·영상은 AI 도구로 제작했어요.",
    copy_link: "링크 복사", copied: "링크 복사 완료 ♡", copied_p: "프롬프트 복사 완료 ♡",
    copy: "복사", tools: "썼던 도구", steps: "만드는 순서", prompt: "실제로 쓴 프롬프트",
    tip: "나리의 꿀팁", reel: "릴스", tipb: "꿀팁", back_ig: "인스타에서 영상 보기 →",
    sub_h: "새 노트 나오면 메일로 받기 💌", sub_p: "지금 다 못 봤다면? 새 영상 노트가 올라올 때마다 메일로 살짝 보내드릴게요.",
    sub_ph: "이메일 주소", sub_btn: "받을래요", sub_agree: "(필수) 개인정보 수집·이용 동의", sub_more: "자세히",
    sub_detail: "수집 항목: 이메일 · 목적: 새 노트 알림 메일 발송 · 보유 기간: 구독 해지 요청 시까지(최대 2년) · 동의하지 않을 수 있으며, 이 경우 메일을 받을 수 없어요. 해지는 메일 답장이나 인스타 DM으로 요청해 주세요.",
    sub_ok: "구독 완료! 곧 편지할게요 ♡", sub_err_mail: "이메일을 다시 확인해 주세요", sub_err_agree: "동의에 체크해 주세요", sub_done: "구독해줘서 고마워요 ♡",
    sub_note: "이 노트, 나중에 다시 보고 싶다면 💌"
  },
  en: {
    since: "since 2026.10 ♡",
    subtitle: "nari's little video-making diary",
    hello: "hi, i'm nari!",
    about: "i love wandering around making little videos 🎥 everything about how i shot and made them goes right here!",
    notice: "commented 'nari'? grab the note for that video right below 💌",
    tab_all: "all", tab_reel: "reels", tab_tip: "tips",
    foot1: "writing a little every day ✍️",
    foot2: "Images and videos made with AI tools.",
    copy_link: "copy link", copied: "link copied ♡", copied_p: "prompt copied ♡",
    copy: "copy", tools: "tools i used", steps: "how i made it", prompt: "the actual prompt",
    tip: "nari's tips", reel: "reel", tipb: "tip", back_ig: "watch on instagram →",
    sub_h: "get new notes by email 💌", sub_p: "no time right now? i'll send you a little email whenever a new video note drops.",
    sub_ph: "your email", sub_btn: "count me in", sub_agree: "(required) I agree to the collection and use of my email", sub_more: "details",
    sub_detail: "Collected: email · Purpose: new-note emails · Kept until you unsubscribe (max 2 years) · You may decline, but then you won't get emails. Unsubscribe anytime by replying or DMing on Instagram.",
    sub_ok: "you're in! talk soon ♡", sub_err_mail: "please check your email", sub_err_agree: "please tick the agreement box", sub_done: "thanks for subscribing ♡",
    sub_note: "want this note again later? 💌"
  }
};

const NOTES = [
{
  "id": "r09",
  "type": "reel",
  "date": "2026.10.15",
  "clip": "clip/r09.mp4",
  "img": "img/r09.jpg",
  "sticker": "img/st_star.png",
  "ko": {
    "title": "UFO에 4번 납치됐다 왔어요 🛸",
    "sum": "우주 속 빛줄기에 빨려 올라가면서 옷이 4번 바뀌어요. 진짜 3D로 빙글 도는 건 3초짜리 짧은 영상이고, 나머지는 전부 편집이에요!",
    "steps": [
      [
        "초록 배경 공중 사진",
        "옷마다 공중에 둥실 떠 있는 전신 사진을 초록 배경으로. 기준 얼굴 사진을 같이 넣어야 뒤로 갈수록 얼굴이 안 바뀌어요."
      ],
      [
        "3초 회전 영상",
        "사진 한 장으로 '제자리에서 천천히 도는' 3초 영상을 뽑아요. 이게 진짜 3D 회전의 비밀!"
      ],
      [
        "배경 지우고 얹기",
        "초록을 지우고 우주·UFO·빛줄기 위에 올려요. 아래서 크게 등장 → 잠깐 머물기 → 빙글 돌면서 빛 속으로 쏙."
      ],
      [
        "소품 공전",
        "옷마다 어울리는 소품 4개가 주위를 빙글빙글. 뒤로 갈 땐 작게, 앞으로 올 땐 크게."
      ]
    ],
    "tips": [
      "긴 영상을 통째로 뽑는 것보다 '짧은 클립 + 편집'이 훨씬 싸요",
      "따라 하고 싶은 영상은 0.1초 단위로 쪼개 보면 움직임이 다 보여요",
      "옷이 바뀌는 간격을 2초로 맞추면 음악 박자 맞추기 쉬워요"
    ],
    "cost": "대략 크레딧: 사진 ~10 + 3초 회전 영상 4개 ~21 + 배경·소품 ~12"
  },
  "en": {
    "title": "Abducted by a UFO 4 times 🛸",
    "sum": "Sucked up a beam of light in space, with a new outfit every time. The real 3D spin is just a 3-second clip — everything else is editing!",
    "steps": [
      [
        "Green-screen floating photo",
        "One full-body floating shot per outfit on a green background. Add your reference face photos so the face doesn't drift."
      ],
      [
        "3-second turn",
        "Turn that photo into a 3s clip of her slowly spinning in place. That's the whole 3D secret!"
      ],
      [
        "Key and composite",
        "Remove the green, drop her onto space + UFO + beam. Enter big from below → hover → spin up into the light."
      ],
      [
        "Orbiting props",
        "4 matching props per outfit circling around — smaller behind her, bigger in front."
      ]
    ],
    "tips": [
      "Short clip + editing is way cheaper than generating one long video",
      "Split the video you want to copy into 0.1s frames — you'll see every move",
      "Changing outfits every 2s makes it easy to match the music beat"
    ],
    "cost": "Rough credits: photos ~10 + four 3s turn clips ~21 + background & props ~12"
  },
  "tools": [
    "Nano Banana 2",
    "Kling 3.0",
    "ffmpeg"
  ],
  "prompt": `[1] Floating photo (one per outfit)
Identity: the exact same young Korean woman as in reference images 1-3 (master face, face angle sheet, body) - keep her face identity precisely. Outfit: copy the outfit from reference image 4 only; ignore the face in image 4. Pose: floating weightlessly in mid-air, arms softly spread with relaxed open hands, toes pointed down, one knee slightly bent, hair gently lifted. Full body head to toe, centered, body height about 60% of frame. Background: perfectly flat solid pure chroma-key green (#00FF00), no floor, no shadow. Flawless clear glowing skin, slim V-line face, soft smile at camera.

[2] 3-second turn (image to video)
She floats weightlessly in mid-air and her whole body slowly rotates in place around a vertical axis, turning to her left about 120 degrees so we see her side profile and part of her back, then her head turns back toward the camera with a soft smile. Keep her face exactly the same and pretty throughout. Hair and skirt sway gently from the turn. Arms stay softly spread. She stays in the center at the same size. Locked static camera, no zoom, no pan. Background stays solid flat chroma green, no floor.`
},
{
  "id": "r07",
  "type": "reel",
  "date": "2026.10.15",
  "clip": "clip/r07.mp4",
  "img": "img/r07.jpg",
  "sticker": "img/st_heart.png",
  "ko": {
    "title": "구멍에 빠졌더니 세계가 3번 바뀜 🕳️",
    "sum": "공원에서 뒤로 한 걸음 → 구멍으로 쏙 → 흑백 콜라주 → 종이 스크랩북 → 3D 인형 → 철퍼덕 착지. 인스타 피드를 넘기는 것처럼 이어 붙였어요.",
    "steps": [
      [
        "장면별 사진 5장",
        "공원·흑백 도시 콜라주·파란 종이 스크랩북·3D·착지 장면을 사진으로 먼저 만들어요."
      ],
      [
        "한 번에 15초",
        "사진 5장을 참고로 넣고, 구간마다 시간과 스타일을 적어요."
      ],
      [
        "옷은 한 가지 색으로",
        "사진·종이·3D 어디서든 같은 사람으로 보이게 원톤 옷이 좋아요."
      ],
      [
        "피드처럼 넘기기",
        "장면을 게시물처럼 세로로 쌓고 스크롤하듯 넘겨요."
      ]
    ],
    "tips": [
      "구간마다 '카메라 고정'을 꼭 적기",
      "종이 장면이 뻣뻣하면 오려낸 인물만 따로 움직이면 자연스러워요",
      "마지막에 'comment nari'로 말 걸기"
    ],
    "cost": "대략 크레딧: 사진 5장 ~10 + 영상(720p, 15초) 105 + 업스케일 ~3"
  },
  "en": {
    "title": "Fell into a hole, came back in 3 universes 🕳️",
    "sum": "One step back in the park → down a hole → b&w collage → paper scrapbook → 3D doll → splat landing. Stitched together like scrolling an Instagram feed.",
    "steps": [
      [
        "5 scene photos",
        "Make the park, b&w city collage, blue paper scrapbook, 3D and landing scenes as photos first."
      ],
      [
        "15s in one go",
        "Feed all 5 as references and write the time + style for each section."
      ],
      [
        "One-color outfit",
        "A one-tone outfit reads as the same person in photo, paper and 3D."
      ],
      [
        "Feed-scroll edit",
        "Stack scenes like posts and scroll through them."
      ]
    ],
    "tips": [
      "Write 'camera locked' in every section",
      "If the paper scene feels stiff, animate a cut-out of her on its own",
      "End with 'comment nari' to start a conversation"
    ],
    "cost": "Rough credits: 5 photos ~10 + video (720p, 15s) 105 + upscale ~3"
  },
  "tools": [
    "Nano Banana 2",
    "Seedance 2.5",
    "Upscale"
  ],
  "prompt": `Vertical 9:16 surreal falling reel of one pretty young Korean woman, NARI, wavy dark-brown hair with curtain bangs, chocolate-brown suede fringe mini dress and brown slouchy knee boots, same face and outfit in every style. Five sequences with hard cuts, camera locked in every shot, no zoom, pan or tilt.

0-4s | PARK: continuing exactly from the start image, she stands on the sunny park path smiling, then takes one small step backwards; a perfectly round black hole opens in the paved ground right behind her heel, she loses balance with a cute surprised gasp, arms flying up, and falls backwards straight down into the hole and disappears. The empty hole remains. Camera fixed.

4-7s | BLACK-AND-WHITE CITY COLLAGE (exactly like the first reference image): she is a full-color photo cutout with a thin uneven white paper border, falling from the top of the frame down through the center past torn black-and-white skyscrapers and dramatic clouds, arms and legs moving softly and naturally, hair and fringe flowing upward, exits at the bottom. Static background.

7-10s | BLUE SKY PAPER SCRAPBOOK (exactly like the second reference image): she is a handmade paper cutout with rough edges tumbling slowly in the same falling pose over white crumpled paper, torn blue sky pieces, fluffy clouds and the small vintage window; paper fibers and soft shadows. Gentle drifting motion only.

10-13s | CUTE 3D (exactly like the third reference image): she becomes the adorable chibi 3D character, falling through a bright blue sky past soft fluffy clouds toward green rolling hills, giggling with arms out, fringe fluttering.

13-15s | BACK IN THE PARK (exactly like the fourth reference image): same park path, she drops in from above the frame and lands softly on the pavement in a comical sprawl, then props up on one elbow and looks at the camera with a dazed, embarrassed cute smile.

Audio: whoosh of wind while falling, a soft paper rustle in the collage shots, a cute boing in the 3D shot, a soft thud on landing. No dialogue, no music, no text, no watermark.`
},
{
  "id": "r06",
  "type": "reel",
  "date": "2026.10.15",
  "clip": "clip/r06.mp4",
  "img": "img/r06.jpg",
  "sticker": "img/st_camera.png",
  "ko": {
    "title": "뉴욕 명소 6곳, 옷 6벌 🗽",
    "sum": "영상 생성 없이 사진 6장으로 만든 10초 OOTD. 제일 싸고 제일 빨라요!",
    "steps": [
      [
        "장소마다 옷 한 벌",
        "타임스스퀘어·5번가·센트럴파크·그랜드센트럴·브루클린 브리지·베슬. 장소 분위기에 맞춰서."
      ],
      [
        "손 흔드는 전신 사진",
        "같은 얼굴 사진을 참고로 넣고, 전신·정면·손 흔들기로 통일해요."
      ],
      [
        "편집",
        "한 장에 1.7초, 살짝 줌인 + 장소 이름 글자."
      ],
      [
        "음악",
        "인스타 앱에서 경쾌한 곡으로!"
      ]
    ],
    "tips": [
      "사진만으로도 릴스가 돼요 — 대신 컷을 빠르게",
      "'몇 번이 제일 좋아?' 질문이 댓글을 불러요",
      "장소 글자는 얼굴 안 가리게"
    ],
    "cost": "대략 크레딧: 사진 6장 ~9 (영상 생성 0)"
  },
  "en": {
    "title": "6 NYC spots, 6 outfits 🗽",
    "sum": "A 10s OOTD made from just 6 photos, no video generation. Cheapest and fastest!",
    "steps": [
      [
        "One outfit per spot",
        "Times Square, Fifth Ave, Central Park, Grand Central, Brooklyn Bridge, the Vessel — dressed for each."
      ],
      [
        "Waving full-body shots",
        "Same face reference every time; keep it full body, facing camera, waving."
      ],
      [
        "Edit",
        "1.7s per photo, slight zoom-in + the place name."
      ],
      [
        "Music",
        "Add an upbeat song in the Instagram app!"
      ]
    ],
    "tips": [
      "Photos alone can make a reel — just cut fast",
      "'Which one is your fave?' brings comments",
      "Keep the place text off the face"
    ],
    "cost": "Rough credits: 6 photos ~9 (no video generation)"
  },
  "tools": [
    "Nano Banana 2",
    "ffmpeg"
  ],
  "prompt": `Vertical iPhone photo in Times Square, New York, daytime crowd and billboards behind. The young Korean woman from the reference image (same face, wavy dark-brown hair with curtain bangs, gold hoops) stands full body facing the camera, waving one hand with a playful smile. Outfit: black wool beret, grey washed-denim corset vest with silver buckles over a black long-sleeve top, burgundy plaid ruffled mini skirt, black knee-high slouch boots. Natural daylight, real street photo, realistic proportions.

(Same prompt for the other 5 spots — only the place and the outfit change.)`
},
{
  "id": "r05",
  "type": "reel",
  "date": "2026.10.15",
  "clip": "clip/r05.mp4",
  "img": "img/r05.jpg",
  "sticker": "img/st_robot.png",
  "ko": {
    "title": "편집 커서가 내 하루를 망쳤다 🙃",
    "sum": "화면 속 편집 커서가 진짜 물건처럼 튀어나와서 아이스크림을 복사하고, 회전목마를 칠하고, 귀걸이를 키워요. 15초 한 번에!",
    "steps": [
      [
        "캐릭터 시트 한 장",
        "얼굴·옷이 한 장에 정리된 시트를 참고로 넣으면 15초 내내 같은 사람이에요."
      ],
      [
        "5초씩 3장면",
        "아이스크림 복사 → 페인트 통 → 마지막 장난. 장면마다 '도구 → 대상 → 결과'를 한 줄로."
      ],
      [
        "커서 모양 정해주기",
        "화살표·페인트 통 모양을 아주 자세히. 안 그러면 손가락 모양 커서가 나와요."
      ],
      [
        "업스케일",
        "720p로 뽑고 1080으로 키우기."
      ]
    ],
    "tips": [
      "'바뀌는 건 이것만' 규칙을 꼭 적기 — 아니면 다른 것까지 바뀌어요",
      "대사는 빼고 효과음만, 클릭 소리가 웃음 포인트",
      "마지막 표정은 길게 잡아야 리액션이 읽혀요"
    ],
    "cost": "대략 크레딧: 영상(720p, 15초) 105 + 업스케일 ~3"
  },
  "en": {
    "title": "The edit cursor ruined my day 🙃",
    "sum": "An editing cursor pops out like a real object: duplicates my ice cream, repaints the carousel, and blows up my earring. 15s in one go!",
    "steps": [
      [
        "One character sheet",
        "A sheet with face + outfit keeps her the same person for all 15s."
      ],
      [
        "3 scenes × 5s",
        "Ice-cream duplicate → paint bucket → final prank. One line per scene: tool → target → result."
      ],
      [
        "Define the cursor",
        "Describe the arrow and bucket shapes in detail, or you'll get a pointing-hand cursor."
      ],
      [
        "Upscale",
        "Render 720p, upscale to 1080."
      ]
    ],
    "tips": [
      "Always write 'only this changes' rules or other things change too",
      "No dialogue, just sound effects — the clicks are the joke",
      "Hold the last reaction long enough to read"
    ],
    "cost": "Rough credits: video (720p, 15s) 105 + upscale ~3"
  },
  "tools": [
    "Seedance 2.5",
    "Upscale"
  ],
  "prompt": `@Image 1 defines exactly ONE woman, NARI: her face, wavy dark-brown hair with curtain bangs, gold hoop earrings, navy cropped zip hoodie over a white ringer tee, white pleated mini skirt, white knee socks and white platform loafers. Keep this same identity and outfit throughout. All views on the sheet depict one person. Do not copy its studio background, poses, lighting, panel layout or framing. Her eyes are uncovered. Her left gold hoop earring stays attached to her left earlobe.

A live-action amusement-park comedy, vertical 9:16: a mischievous physical editing cursor first gives NARI a treat, then overdoes its helpful tricks until she catches it, only to suffer one final harmless prank. NARI is curious, expressive and quick to react: delighted anticipation turns into annoyance and finally an incredulous look. Render natural skin, real ice cream and painted carousel surfaces.

Three timed sequences with cuts on action. Keep each tool, its target and the visible consequence readable together. Natural-speed performance. The tools are tangible matte-white objects with thin dark edges, perspective, occlusion and soft shadows, integrated into the same sunlight as NARI.

TOOL SHAPES: The same single cursor has exactly two distinct silhouettes. Its default is a classic computer arrow pointing diagonally toward the upper left, with a triangular pointed head and a short straight stem, matte-white with a thin black outline, forearm-length until NARI shrinks it. Its paint-bucket form is a small white pail tilted about 45 degrees, with a curved carrying handle and an open oval rim facing downward toward the target. Each tool change is a crisp instantaneous snap of the entire object. There is never a hand-shaped, pointing-finger or glove cursor. Every click is a short forward dip of the active tool itself, synchronized to a distinct click sound.

SELECTION AND TRANSFORM DETAILS: A selection is a complete closed rectangular outline of alternating black and white dashes, visibly marching around all four sides. A transform frame has four connected thin edges and exactly eight white square handles: four corners and four edge midpoints. The outline encloses only the intended object. After an operation its frame disappears; the changed object stays changed. All controls are pictorial shapes only.

SETTING: Bright, gentle sunlight from upper camera-left. An ice-cream counter near an idle white carousel along a sunny amusement-park walkway. Background visitors move independently and do not interact with the tools. NARI and the cursor attend to one another or the edited objects rather than looking into the lens.

0-5s | TOO MUCH ICE CREAM
Open immediately on NARI holding a single-scoop vanilla cone in her right hand, ready for a bite; her face, cone and hovering arrow share a medium close vertical frame. The arrow closes a small dashed rectangular selection around the original scoop only, keeping the cone and her face outside. The arrow tip dips forward for four distinct clicks. Identical scoops stack directly on top, touching one another, until the cone holds a precarious tower of five. The selection releases. NARI first smiles broadly, then follows the rising tower with her eyes; as it leans she cups her left hand under the cone and steadies it with both hands, her smile tightening into concentration.
<Distinct clicks, soft duplication pops, a small surprised breath and park air.> Nobody speaks.

5-10s | MAKE UP YOUR MIND
Cut to NARI, hands now empty, holding the support pole of a stationary white carousel horse and preparing to mount. The entire arrow snaps into the white PAINT BUCKET beside the still-white horse. Its lower rim dips to touch the horse's painted flank and clicks: strawberry-milk pink spreads cleanly across only the horse's body. NARI admires it and lifts one foot toward the step. The bucket dips and clicks a second time, filling the same horse body pale mint. She stops mid-mount, lowers her foot and turns her head toward the bucket with a questioning raised eyebrow. It snaps back to an arrow and hovers just beyond her reach.
<Tool-change snap, two clicks with short fill sounds.> Nobody speaks.

10-15s | ONE LAST CLICK
NARI abruptly turns and catches the arrow's edge with both hands. A complete four-sided transform frame with eight white square handles appears around the arrow only. She pinches two opposite corner handles inward; the frame and arrow contract together until the arrow is finger length, keeping its triangular head and short stem. She holds it between her right thumb and index finger, smiling with relief. The tiny arrow twists its tip toward her left gold hoop earring and makes one visible click. Only that hoop earring enlarges from its earlobe attachment, growing into a thin gold ring wider than her face that hangs past her chin and frames her cheek. Her ear, face and head keep their original size. Finish in a three-quarter close view: NARI looks at the giant hoop from the corner of her eye, eyebrows lowered, lips pressed together, then gives a short exasperated breath. Hold long enough to read that look.
<Pinching squeak, tiny click, a soft metallic chime, a short sigh.> Nobody speaks.

PRESERVE: Exactly one NARI and one continuous cursor. Duplication affects scoops only. Paint fills affect the carousel horse's body only. Shrinking affects the cursor only. The final enlargement affects the existing left hoop earring only. Every operation has a visible tool action, localized change and release. Keep completed changes across cuts. All mishaps are soft and harmless.

AUDIO AND IMAGE: Park air, distant birds, footsteps, fabric and synchronized editing-tool sounds. NARI may breathe or gasp without words. No dialogue, narration, background music, subtitles, on-screen text, letters, numbers, logo or watermark. One full-frame camera view at a time, no split screen or reference-sheet layout.`
},
{
  "id": "r04",
  "type": "reel",
  "date": "2026.10.14",
  "clip": "clip/r04.mp4",
  "img": "img/r04.jpg",
  "sticker": "img/st_bow.png",
  "ko": {
    "title": "엄마 로망 품새 + 아빠 로망 피아노 🎹🥋",
    "sum": "원본 영상의 동작을 그대로 따와서 나리 몸에 입혔어요. 사진 한 장 + 원본 영상 하나면 끝! (inspired by @hyewon_u3230)",
    "steps": [
      [
        "거실 사진 먼저",
        "흰 피아노·흰 소파가 있는 밝은 거실에 서 있는 전신 사진. 동작이 잘 보이게 짧은 옷으로."
      ],
      [
        "원작자 허락",
        "남의 영상 동작을 빌릴 땐 꼭 물어보고, 캡션에 크레딧!"
      ],
      [
        "동작 따오기",
        "사진 + 원본 영상을 넣으면 동작·타이밍을 그대로 따라 해요. 720p로 뽑고 업스케일."
      ],
      [
        "글자 다시 쓰기",
        "AI가 화면 위 글자를 깨뜨려서 띠로 가리고 자막으로 다시 넣었어요."
      ]
    ],
    "tips": [
      "원본 영상에서 '사람만 바꾸기'는 카메라가 흔들리고 어려 보였어요 → 동작만 따오기가 정답",
      "배경을 사진에 미리 넣으면 영상 내내 그 방이 유지돼요",
      "동작이 큰 영상은 머리부터 발끝까지 나온 사진으로"
    ],
    "cost": "대략 크레딧: 사진 ~6 + 동작 따오기(720p, 18초) 126 + 업스케일 ~3"
  },
  "en": {
    "title": "Mom's dream taekwondo + Dad's dream piano 🎹🥋",
    "sum": "I borrowed the exact moves from the original video and put them on me. One photo + one source video! (inspired by @hyewon_u3230)",
    "steps": [
      [
        "Living-room photo first",
        "A full-body shot in a bright living room with a white piano and sofa. Short outfit so the moves read."
      ],
      [
        "Ask the creator",
        "If you borrow someone's moves, ask first and credit them in the caption!"
      ],
      [
        "Copy the motion",
        "Photo + source video → same moves and timing. Render 720p, upscale."
      ],
      [
        "Redo the text",
        "The AI garbled on-screen text, so I covered it and re-added subtitles."
      ]
    ],
    "tips": [
      "Swapping only the person in the original shook the camera and looked childish → copy the motion instead",
      "Put the background in your photo so the room stays the same",
      "Big moves need a head-to-toe photo"
    ],
    "cost": "Rough credits: photo ~6 + motion copy (720p, 18s) 126 + upscale ~3"
  },
  "tools": [
    "Nano Banana 2",
    "Motion Control",
    "Upscale"
  ],
  "prompt": `The woman from the reference image performs exactly the same full-body motion and timing as the person in the source video: the martial-arts stances and the piano-playing gestures at the white piano. Keep her face, hair, cropped white wrap top with black belt and black shorts, and the bright living room with the white piano and white sofa from the reference image. Fixed camera, wide vertical framing, photoreal.`
},
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


// 이메일 받기 — 구글 설문지로 전송(서버 없음). 유입 경로(utm·노트 id)도 함께 기록
const FORM = {
  action: "https://docs.google.com/forms/d/e/1FAIpQLScIS5YfA_dP8pJDf-Icn93fK3uaUmKw1sHpaMvQlJEiG0Fl3A/formResponse",
  email: "entry.1441343414", source: "entry.1820841233", consent: "entry.1961977301"
};
const SRC = (() => {
  const q = new URLSearchParams(location.search);
  const parts = ["utm_source","utm_medium","utm_campaign","utm_content"].map(k => q.get(k)).filter(Boolean);
  try {
    if (parts.length) sessionStorage.setItem("nari_src", parts.join("/"));
    return sessionStorage.getItem("nari_src") || "direct";
  } catch(e){ return parts.join("/") || "direct"; }
})();
function subscribed(){ try { return localStorage.getItem("nari_sub") === "1"; } catch(e){ return false; } }
function subForm(where){
  const L = UI[lang];
  if (subscribed()) return `<div class="sub done" data-where="${where}"><p class="sub-h">${L.sub_done}</p></div>`;
  return `<form class="sub" data-where="${where}" novalidate>
    <p class="sub-h">${where === "main" ? L.sub_h : L.sub_note}</p>
    ${where === "main" ? `<p class="sub-p">${L.sub_p}</p>` : ""}
    <div class="sub-row">
      <input type="email" name="email" placeholder="${L.sub_ph}" autocomplete="email" inputmode="email" required>
      <button type="submit">${L.sub_btn}</button>
    </div>
    <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
    <label class="sub-agree"><input type="checkbox" name="agree"> ${L.sub_agree}</label>
    <details class="sub-more"><summary>${L.sub_more}</summary><p>${L.sub_detail}</p></details>
  </form>`;
}
function bindSub(root){
  $$("form.sub", root).forEach(f => f.addEventListener("submit", async e => {
    e.preventDefault();
    const L = UI[lang];
    const email = f.email.value.trim();
    if (f.website.value) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { toast(L.sub_err_mail); f.email.focus(); return; }
    if (!f.agree.checked) { toast(L.sub_err_agree); return; }
    const note = (location.hash.match(/^#\/?([\w-]+)/) || [])[1];
    const body = new URLSearchParams();
    body.append(FORM.email, email);
    body.append(FORM.source, [SRC, f.dataset.where, note || "", lang].filter(Boolean).join(" | "));
    body.append(FORM.consent, "required:agree " + new Date().toISOString());
    f.querySelector("button").disabled = true;
    try { await fetch(FORM.action, { method: "POST", mode: "no-cors", body }); } catch(err){}
    try { localStorage.setItem("nari_sub", "1"); } catch(err){}
    toast(L.sub_ok);
    $$(".sub").forEach(x => { x.outerHTML = subForm(x.dataset.where); });
  }));
}
function renderSub(){ const m = $("#subMain"); if (m){ m.innerHTML = subForm("main"); bindSub(m); } }

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
    ${subForm("note")}
    <p class="n-foot"><a href="https://www.instagram.com/nari.ai.lab/" target="_blank" rel="noopener">${L.back_ig}</a></p>`;
  $("[data-copy]", $("#note")).addEventListener("click", async () => { await copyText(n.prompt); toast(L.copied_p); });
  bindSub($("#note"));
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
  applyUI(); renderGrid(); renderSub(); route();
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

applyUI(); renderGrid(); renderSub(); route();
