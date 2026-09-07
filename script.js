(() => {
  /* Small post-layout QA layer: it runs after the inline result styles, so these
     corrections win without re-introducing another stylesheet file. */
  const qaStyles = document.createElement('style');
  qaStyles.id = 'qa-runtime-styles';
  qaStyles.textContent = `
    /* Result 07 — crop the exported black canvases so the image sits halfway
       between the explanatory copy and the shared caption rail. */
    @media (min-width: 901px) {
      .result-v3__card--oni > img,
      .result-v3__pamela-media > img {
        height: clamp(480px, 43vw, 825px) !important;
        object-fit: cover !important;
        object-position: top center !important;
      }
    }

    /* Footer — both secondary lines must be literally the same treatment. */
    footer .footer__brand > span,
    footer .footer__workshop > .footer__curator {
      display: block !important;
      margin-top: clamp(9px, .65vw, 12px) !important;
      color: rgba(243,241,236,.66) !important;
      font-family: var(--f) !important;
      font-size: var(--ui) !important;
      font-weight: 600 !important;
      line-height: 1.1 !important;
      letter-spacing: 0 !important;
      text-transform: none !important;
    }

    /* Analysis tabs — active stays signal red; hover is a separate state. */
    .analysis-tab.is-active,
    .analysis-tab.is-active:hover {
      color: var(--red) !important;
      padding-left: 12px;
    }
    .analysis-tab:not(.is-active):hover {
      color: var(--chalk) !important;
      padding-left: 12px;
    }
  `;
  document.head.appendChild(qaStyles);

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

  const analysisSteps = [
    {
      title: 'Исходный текст',
      note: 'Прочитать, подумать, понять'
    },
    {
      title: 'Выделить действия',
      note: 'Что здесь вообще происходит: кто идёт, смотрит, запрещает, торопит, открывает'
    },
    {
      title: 'Прилагательные и наречия',
      note: 'Всё, что задаёт цвет, фактуру, настроение и степень происходящего'
    },
    {
      title: 'Ключевые слова + приколы',
      note: 'Главное в каждом абзаце плюс странные, смешные и цепляющие детали, которые жалко потерять'
    },
    {
      title: 'Только ключевые слова',
      note: 'Убрать всё лишнее, оставить только смысловой скелет, понять одну из метафор — выделить её'
    }
  ];

  const analysisTabs = [...document.querySelectorAll('.analysis-tab')];
  analysisTabs.forEach((tab, index) => {
    const step = analysisSteps[index];
    if (!step) return;
    tab.dataset.note = step.note;
    tab.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${step.title}`;
  });

  const analysisNote = document.querySelector('#analysis-note');
  if (analysisNote && analysisSteps[0]) {
    analysisNote.textContent = analysisSteps[0].note;
  }

  const mainScript = document.createElement('script');
  mainScript.src = './assets/script-main.js?v=20260907-2';
  mainScript.async = false;
  document.head.appendChild(mainScript);
})();