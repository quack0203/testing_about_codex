import { $ } from './utils.js';

export function initServiceSelection() {
  const container = $('#service-selection');
  if (!container) return;
  container.innerHTML = `
    <h2>服務類型</h2>
    <select id="serviceType">
      <option value="transport">接送</option>
      <option value="equipment">醫療器材提供</option>
    </select>
  `;
}

document.addEventListener('DOMContentLoaded', initServiceSelection);
