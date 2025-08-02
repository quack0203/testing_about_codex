import { $ } from './utils.js';

export function initDispatchForm() {
  const container = $('#dispatch-form');
  if (!container) return;
  container.innerHTML = `
    <h2>派遣資訊</h2>
    <form id="dispatchInfo">
      <label>地址<input type="text" name="address" required></label>
      <label>日期與時間<input type="datetime-local" name="datetime"></label>
      <label>姓名<input type="text" name="name" required></label>
      <label>性別<select name="gender" required><option value="">選擇</option><option>男</option><option>女</option></select></label>
      <label>電話<input type="tel" name="phone" required></label>
      <label>照片<input type="file" name="photo" accept="image/*" required></label>
    </form>
  `;
}

document.addEventListener('DOMContentLoaded', initDispatchForm);
