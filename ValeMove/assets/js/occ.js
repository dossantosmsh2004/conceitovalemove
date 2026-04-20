window.occ = {
  save() {
    const tipo = document.getElementById('occ-tipo')?.value;
    const grav = document.getElementById('occ-grav')?.value || 'media';
    const desc = document.getElementById('occ-desc')?.value?.trim();
    const lat = S.occLat;
    const lon = S.occLon;

    if (!tipo) return ui.toast('Selecione o tipo', 'error');
    if (!desc) return ui.toast('Adicione uma descrição', 'error');
    if (lat == null || lon == null) return ui.toast('Marque a localização no mapa', 'error');

    S.reports.unshift({
      id: Date.now(), tipo, gravidade: grav, desc, lat, lon,
      created_at: new Date().toISOString(),
      autor: S.user?.nome || '—',
    });
    leafletCtl.refreshMarkers();
    ui.toast('Ocorrência registrada com geolocalização', 'success');
    if (S.tempMarker) { S.tempMarker.remove(); S.tempMarker = null; }
    ['occ-tipo','occ-desc','occ-lat','occ-lon'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
    S.occLat = null; S.occLon = null;
  },
};

