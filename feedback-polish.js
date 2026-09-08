const routeMapSection = document.querySelector('.route-map');
const routeMapItems = [...document.querySelectorAll('.route-map li')];
let routeMapFrame = 0;

function updateRouteMapState() {
  routeMapFrame = 0;
  if (!routeMapSection || !routeMapItems.length) return;

  const sectionRect = routeMapSection.getBoundingClientRect();
  const sectionVisible = sectionRect.bottom > 0 && sectionRect.top < window.innerHeight;

  if (!sectionVisible) {
    routeMapItems.forEach((item) => item.classList.remove('is-active'));
    return;
  }

  const focusY = window.innerHeight * 0.46;
  let activeItem = routeMapItems[0];
  let closestDistance = Infinity;

  for (const item of routeMapItems) {
    const rect = item.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const distance = Math.abs(center - focusY);
    if (distance < closestDistance) {
      closestDistance = distance;
      activeItem = item;
    }
  }

  routeMapItems.forEach((item) => {
    item.classList.toggle('is-active', item === activeItem);
  });
}

function queueRouteMapUpdate() {
  if (routeMapFrame) return;
  routeMapFrame = requestAnimationFrame(updateRouteMapState);
}

updateRouteMapState();
window.addEventListener('scroll', queueRouteMapUpdate, { passive: true });
window.addEventListener('resize', queueRouteMapUpdate);

const endingTitle = document.querySelector('.ending blockquote');
if (endingTitle) {
  endingTitle.innerHTML = '<span>Памела</span><span>по&nbsp;Москве ходила —</span><span>и&nbsp;читателю придётся</span>';
}
