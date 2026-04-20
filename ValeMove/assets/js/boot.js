window.switchLoginTab = function switchLoginTab(tab) {
  document.getElementById('tab-senha').classList.toggle('active', tab==='senha');
  document.getElementById('tab-rfid').classList.toggle('active',  tab==='rfid');
  document.getElementById('method-senha').classList.toggle('hidden', tab!=='senha');
  document.getElementById('method-rfid').classList.toggle('hidden',  tab!=='rfid');
}

document.addEventListener('DOMContentLoaded', () => {

  ui.buildDemoList();

  lucide.createIcons();
  document.addEventListener('click', (event) => {
    const wrap = event.target.closest('.mobile-profile');
    if (!wrap) ui.closeMobileProfileMenu();
  });

  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
  if (isMobile) switchLoginTab('rfid');
});
