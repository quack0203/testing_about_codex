import { $ } from './utils.js';

export function initHospitalSelection() {
  const container = $('#hospital-selection');
  if (!container) return;
  container.innerHTML = `
    <h2>醫院選擇</h2>
    <div id="map">Map Placeholder</div>
  `;
}

document.addEventListener('DOMContentLoaded', initHospitalSelection);
