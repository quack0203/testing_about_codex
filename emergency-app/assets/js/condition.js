import { $ } from './utils.js';

export function initConditionInput() {
  const container = $('#condition-input');
  if (!container) return;
  container.innerHTML = `
    <h2>病況輸入</h2>
    <input type="text" placeholder="血壓">
    <input type="text" placeholder="血氧">
    <input type="text" placeholder="體溫">
    <input type="text" placeholder="脈搏">
    <input type="text" placeholder="血糖">
    <textarea placeholder="主訴"></textarea>
  `;
}

document.addEventListener('DOMContentLoaded', initConditionInput);
