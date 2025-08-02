import { $ } from './utils.js';

export function initPricing() {
  const container = $('#pricing');
  if (!container) return;
  container.innerHTML = `
    <h2>估價</h2>
    <div id="price">0</div>
  `;
}

document.addEventListener('DOMContentLoaded', initPricing);
