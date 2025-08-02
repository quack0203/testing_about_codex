import { $ } from './utils.js';

export function initTracking() {
  const container = $('#tracking');
  if (!container) return;
  container.innerHTML = `
    <h2>即時追蹤</h2>
    <div id="status">尋找中...</div>
  `;
}

document.addEventListener('DOMContentLoaded', initTracking);
