'use strict';
const heroCta = document.getElementById('hero-cta');
const mobilePurchase = document.getElementById('mobile-purchase');
if (heroCta && mobilePurchase && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    mobilePurchase.hidden = entry.isIntersecting || entry.boundingClientRect.top > 0;
  });
  observer.observe(heroCta);
}