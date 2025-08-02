export function initResponder() {
  const list = document.getElementById('case-list');
  if (!list) return;
  list.innerHTML = '<p>尚無案件</p>';
}

document.addEventListener('DOMContentLoaded', initResponder);
