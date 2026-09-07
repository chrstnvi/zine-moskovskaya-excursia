(() => {
  const redCopy = document.querySelector('.palette__row--red p');
  if (redCopy) {
    redCopy.textContent = 'Чем ближе Москва, тем больше красного: напряжение, запреты, плакаты и наступающие «ОНИ»';
  }

  const gold = document.querySelector('.palette__gold > div');
  if (gold) {
    const index = gold.querySelector(':scope > span');
    const title = gold.querySelector('h3');
    const copy = gold.querySelector(':scope > p');
    if (index) index.textContent = '03';
    if (title) title.textContent = 'ЗОЛОТО';
    if (copy) copy.textContent = 'Одно исключение из двухцветной системы — золотая фольга там, где купола вспыхивают в солнечных лучах';
  }

  const typeCopy = document.querySelector('.palette__row--type .palette__type-copy p');
  if (typeCopy) {
    typeCopy.textContent = 'Шрифтовое направление — Gramatika Романа Горницкого. Shifted-начертание продолжает механику зина: текст смещается, разрывает ровную строку и заставляет взгляд двигаться';
  }

  const typeRef = document.querySelector('.palette__typeface-ref');
  if (typeRef) {
    typeRef.textContent = 'Gramatika — Roman Gornitsky / The Temporary State';
  }

  const mainScript = document.createElement('script');
  mainScript.src = './assets/script-main.js';
  mainScript.async = false;
  document.head.appendChild(mainScript);
})();