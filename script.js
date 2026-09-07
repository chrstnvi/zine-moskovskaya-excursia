const root = document.documentElement;
const routeCount = document.querySelector(".route__count");
const chapters = [...document.querySelectorAll(".chapter")];

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  root.style.setProperty("--progress", progress.toFixed(4));
}

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

const chapterObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible && routeCount) routeCount.textContent = `${visible.target.dataset.step}—07`;
  },
  { threshold: [0.12, 0.35, 0.6], rootMargin: "-15% 0px -45% 0px" }
);
chapters.forEach((chapter) => chapterObserver.observe(chapter));

const analysisTabs = [...document.querySelectorAll(".analysis-tab")];
const analysisMount = document.querySelector("#analysis-image");
const analysisNote = document.querySelector("#analysis-note");
const analysisIndex = document.querySelector("#analysis-index");
const analysisPaper = document.querySelector(".analysis__paper");

const sourceText = `Памела Трэверс
«Московская экскурсия», 1934 г.

<..> Мимо, миля за милей, проплывал бескрайний плоский пейзаж — мокрые сосны и березы. Природа ad lib. Никаких пределов, никаких различий. Страна кажется сделанной наполовину, и, как и люди, — явно продукт массового производства. Почудилось, будто кто-то прошептал мне на ухо: «Так много берез, сосен, травы, так много коричневого». Нет-нет, конечно, нет! Эти их Директора совсем сбили меня с толку.

Священная Москва! Как она кипит и пузырится — в солнечных лучах луковицы-купола переливаются всеми цветами радуги, а ночью кажутся бледными светящимися сферами на фоне звездного неба! Этот поразительный город похож на гигантские кинодекорации. Трудно привыкнуть к его азиатской тяге к окружности. В Ленинграде я этого почти не замечала, но здесь стремление России на Восток становится явным. Это движение в обратном направлении, против часовой стрелки, вопреки всем резонам — ведь весь остальной мир уверенно шагает на Запад.

Люди по-прежнему однообразно-серы, краски по-прежнему можно найти лишь в церквях и на башнях, но Москва все же выглядит поживее, чем Ленинград, и трудовой энтузиазм здесь заметнее. У нас сменился гид. Новенькая — крупная блондинка — не столь грозна, как ее предшественница. Но и она муштрует нас с решительностью сержант-майора. Ее «Пойдемте!» всего лишь другой вариант команды «Живо, марш, эй, ты там, не отставай!».

Нас не пускают в Кремль. Там сидят ОНИ — вот в чем причина. Но ведь Кремль такой огромный! Почему бы ИМ не занять одну часть и позволить нам осмотреть другую? Нет, ОНИ — повсюду. Обсуждают, поди, советскую пропаганду за рубежом, так что возгласы туристов не должны им мешать. Мы обречены бродить вдоль красных зубчатых стен — какой суровый приговор! Впрочем, Москва вообще суровая: ее форма и цвет, то, как она разлеглась у темной реки и взбирается на Кремлевский холм. Громкий бесцветный голос гида только усиливает это впечатление. «Вот здесь царь Иван убил своего сына. Это Лобное место — людей приковывали цепью к этому кольцу. Да. Пойдемте дальше».

В церкви нас тоже не пускают, мы можем лишь снаружи любоваться их сверкающими куполами-луковицами. Нам постоянно твердят, что церкви закрыты или превращены в спортивные залы. Вчера, пока гид растолковывала Фермеру-Птичнику какой-то исторический сюжет, я все же прокралась за ее спиной и прошмыгнула в мозаичную дверь в освещенный свечами полумрак. Шла служба, церковь была полна народу. Какой-то силуэт отделился от толпы и, словно призрак, направился ко мне. На женщине была обычная не поддающаяся описанию одежда, ноги обмотаны тряпьем, чтобы удержать остатки туфель. Она испуганно и торопливо заговорила со мной по-французски. У меня сжалось сердце! Я протянула ей несколько рублей, она поспешно спрятала их под лохмотьями и снова упала на колени. Хорошо, что у меня нашлось, что ей дать, — этот вечный высокомерный отказ принять хоть что-то иссушает душу. «О, мы поглотили их!» — беззаботно ответила гид, когда я спросила ее, что же произошло со старыми русскими. Что ж, полагаю, «поглотили» такое же подходящее слово, как и любое другое.

Ликвидация церквей в России — одна из первейших задач приверженцев советской веры. Наш интерес к этим буржуазным реликвиям вызывает у гидов явную досаду. Они не устают поносить все церковное и постоянно твердят о тлетворном влиянии религии. Неоднократно с плохо скрываемым торжеством нам указывали на полуразрушенные церкви, а также, я полагаю, намеренно, демонстрировали церкви, переделанные в конторы, клубы и спортивные залы. Интерес к церкви — даже чисто архитектурный — подвергается осуждению как пережиток идеологии царизма и пресекается самым решительным образом. <...>

Наше знакомство с Россией идет по странному расписанию. Первая остановка на сегодня — детские ясли. В вестибюле нас заставили надеть белые халаты, все они оказались одного размера. При этом нам не позволили снять пальто — можете представить, как мы выглядели!

Облаченные подобным образом, мы проследовали через несколько детских комнат. В комнате для двухлеток несколько маленьких старичков сидели за столом и старались не пролить кашу на свои передники. Они выглядели серьезными и угрюмыми, словно понимали смысл плаката, протянутого через всю комнату. Гид перевела его для нас. «Игра — не забава, а подготовка к труду». Так-то, детки!

На одной стене висел портрет — ангельского вида мальчик в шелковой рубашечке с рюшами и синих бархатных штанишках. Заметив, что я приподняла брови, переводчица с восторгом пояснила: «Это Ленин, когда он был ма-а-алень-ким». Старички, оторвав взгляд от тарелок, мрачно покосились на портрет, их ложки застыли в воздухе. Так начинается обожествление.

Ясли отнюдь не блистали чистотой, и я невольно задавалась вопросом: зачем нам выдали халаты — чтобы защитить детей от нас или нас от детей? Полагаю, скорее последнее.`;

const actionWords = [
  "проплывал","кажется","сделанной","прошептал","сбили","кипит и пузырится","переливаются","кажутся","привыкнуть","становится явным","шагает","можно найти","выглядит","сменился","муштрует","Пойдемте","Живо","марш","не отставай","не пускают","сидят","позволить","Обсуждают","бродить","разлеглась","взбирается","усиливает","убил","приковывали","любоваться","твердят","прокралась","прошмыгнула","Шла","отделился","направился","заговорила","сжалось","протянула","спрятала","упала","поглотили","ответила","спросила","не устают","указывали","демонстрировали","подвергается","идет","заставили","не позволили","проследовали","сидели","старались","перевела","висел","пояснила","покосились","застыли","начинается","защитить"
];
const descriptorWords = [
  "бескрайний плоский","мокрые","Никаких","сделанной наполовину","так много","солнечных","цветами радуги","бледными светящимися","поразительный","азиатской","в обратном направлении","против часовой стрелки","однообразно-серы","поживее","крупная блондинка","не столь грозна","с решительностью сержант-майора","такой огромный","повсюду","красных зубчатых стен","вообще суровая","Громкий бесцветный голос","сверкающими","постоянно","мозаичную","освещенный","словно призрак","испуганно и торопливо","поспешно","вечный высокомерный","беззаботно","первейших","явную досаду","с плохо скрываемым торжеством","самым решительным","по странному","белые","одного размера","несколько маленьких","серьезными и угрюмыми","ангельского вида","с восторгом","мрачно","скорее последнее"
];
const keyWords = [
  "миля за милей","плоский пейзаж","продукт массового производства","Нет-нет, конечно, нет!","Москва!","кинодекорации","стремление России на Восток","весь остальной мир уверенно шагает на Запад","Люди","серы","краски","в церквях","гид","сержант-майора","ОНИ","ИМ","ОНИ — повсюду","пропаганду","Москва","суровая","В церкви","не пускают","церкви закрыты","прокралась","силуэт","направился ко мне","поглотили","Ликвидация","интерес","влиянии религии","пережиток идеологии царизма","знакомство","по странному расписанию","ясли","халаты","детских комнат","старичков","понимали смысл плаката","Так-то, детки!","портрет","мальчик","Это Ленин","обожествление","защитить","от детей"
];
const extractGroups = [
  ["Миля за милей","Продукт массового производства","Нет-нет, конечно нет!","Сбили меня с толку"],
  ["Москва!","Стремление России на Восток"],
  ["Люди","Серы","Краски","В церквях","Гид","Сержант-майор"],
  ["ОНИ","ИМ","ОНИ – повсюду","Москва","Суровая"],
  ["В церкви","не пускают","Церкви закрыты","Прокралась","Силуэт","Направился ко мне","Поглотили"],
  ["Ликвидация","Интерес","Вызывает досаду","Влияние религии","Пережиток идеологии царизма"],
  ["Знакомство","по расписанию","Ясли","халаты"],
  ["Детские комнаты","старички","Понимали смысл плаката","Так-то, детки!"],
  ["Портрет","Мальчик","Ленин","Обожествление"],
  ["Халаты","Защитить","От детей"]
];

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[char]));
}
function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function markText(text, terms, className) {
  const sorted = [...terms].sort((a,b) => b.length - a.length);
  const pattern = new RegExp(`(${sorted.map(escapeRegExp).join("|")})`, "giu");
  return escapeHTML(text).replace(pattern, `<span class="${className}">$1</span>`);
}
function paragraphs(html) { return html.split(/\n\n+/).map((part) => `<p>${part.replace(/\n/g,"<br>")}</p>`).join(""); }

function buildAnalysisDocument(index) {
  const doc = document.createElement("div");
  doc.className = "analysis-document";
  doc.setAttribute("role","img");
  const body = document.createElement("div");
  body.className = "analysis-document__body";

  if (index === 0) {
    body.innerHTML = paragraphs(escapeHTML(sourceText));
    doc.setAttribute("aria-label","Исходный текст Памелы Трэверс без разметки");
  } else if (index === 1) {
    body.innerHTML = paragraphs(markText(sourceText,actionWords,"mark-action"));
    doc.setAttribute("aria-label","Текст с выделенными действиями");
  } else if (index === 2) {
    body.innerHTML = paragraphs(markText(sourceText,descriptorWords,"mark-descriptor"));
    doc.setAttribute("aria-label","Текст с выделенными прилагательными и наречиями");
  } else if (index === 3) {
    body.innerHTML = paragraphs(markText(sourceText,keyWords,"mark-key"));
    doc.setAttribute("aria-label","Текст с выделенными ключами и крючками");
  } else {
    doc.classList.add("analysis-document--extract");
    body.innerHTML = extractGroups.map((group) => `${group.map((line) => `<p>${escapeHTML(line)}</p>`).join("")}<div class="analysis-document__gap"></div>`).join("");
    const cult = document.createElement("p");
    cult.className = "analysis-document__cult";
    cult.textContent = "культ";
    doc.appendChild(cult);
    doc.setAttribute("aria-label","Только ключевые слова");
  }
  doc.appendChild(body);
  return doc;
}

let analysisDocument = null;
if (analysisPaper && analysisMount) {
  analysisDocument = buildAnalysisDocument(0);
  analysisMount.replaceWith(analysisDocument);
}

function activateTab(tab) {
  const index = analysisTabs.indexOf(tab);
  analysisTabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("is-active",selected);
    item.setAttribute("aria-selected",String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  analysisDocument?.classList.add("is-changing");
  window.setTimeout(() => {
    if (analysisDocument) {
      const nextDocument = buildAnalysisDocument(index);
      analysisDocument.replaceWith(nextDocument);
      analysisDocument = nextDocument;
    }
    if (analysisNote) analysisNote.textContent = tab.dataset.note;
    if (analysisIndex) analysisIndex.textContent = String(index + 1).padStart(2,"0");
  },150);
}

analysisTabs.forEach((tab) => {
  tab.addEventListener("click",() => activateTab(tab));
  tab.addEventListener("keydown",(event) => {
    if (!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (analysisTabs.indexOf(tab) + direction + analysisTabs.length) % analysisTabs.length;
    analysisTabs[nextIndex].focus();
    activateTab(analysisTabs[nextIndex]);
  });
});

const scroller = document.querySelector(".slogan__scroller");
let dragStart = 0;
let scrollStart = 0;
let dragging = false;
scroller?.addEventListener("pointerdown",(event) => {
  dragging = true;
  dragStart = event.clientX;
  scrollStart = scroller.scrollLeft;
  scroller.classList.add("is-dragging");
  scroller.setPointerCapture(event.pointerId);
});
scroller?.addEventListener("pointermove",(event) => {
  if (!dragging) return;
  scroller.scrollLeft = scrollStart - (event.clientX - dragStart);
});
function stopDragging() { dragging = false; scroller?.classList.remove("is-dragging"); }
scroller?.addEventListener("pointerup",stopDragging);
scroller?.addEventListener("pointercancel",stopDragging);
