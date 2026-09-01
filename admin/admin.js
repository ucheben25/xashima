/* ============================================================
   XASHIMA Admin Panel — admin.js
   Passcode: xashima2026
   ============================================================ */

(function () {
  'use strict';

  // ── Auth ──────────────────────────────────────────────────
  const PASSCODE = 'xashima2026';
  const SESSION_KEY = 'xashima_admin_auth';
  const DATA_KEY = 'xashima_site_data';

  function isLoggedIn() {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }

  function login(pass) {
    if (pass === PASSCODE) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      return true;
    }
    return false;
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    location.reload();
  }

  // ── Default Data ──────────────────────────────────────────
  const DEFAULT_DATA = {
    services: [
      { id: 1, name: 'Roofing Sheet Production, Sales & Installation', tag: 'ROOFING', img: '../img/sheet-production.jpg', slug: '../services/roofing.html' },
      { id: 2, name: 'Quantity Survey Services', tag: 'COST CONTROL', img: '../img/quantity-survey-3.jpg', slug: '../services/quantity-surveying.html' },
      { id: 3, name: 'Building Maintenance', tag: 'MAINTENANCE', img: '../img/building-maintenance.jpg', slug: '../services/building-maintenance.html' },
      { id: 4, name: 'Water Collector Installation', tag: 'PLUMBING', img: '../img/water-collector.jpg', slug: '../services/water-collector.html' },
      { id: 5, name: 'Security Door Installation', tag: 'SECURITY', img: '../img/security-door.jpg', slug: '../services/security-doors.html' },
      { id: 6, name: 'CCTV Camera Installation', tag: 'SURVEILLANCE', img: '../img/cctv-camera 2.jpg', slug: '../services/cctv-installation.html' },
      { id: 7, name: 'Building Renovation', tag: 'RENOVATION', img: '../img/building-renovation-1.jpg', slug: '../services/building-renovation.html' },
      { id: 8, name: 'Building Plastering', tag: 'FINISHING', img: '../img/plastering.jpg', slug: '../services/building-plastering.html' },
      { id: 9, name: 'Electrical Engineering', tag: 'ELECTRICAL', img: '../img/electrical-1.jpg', slug: '../services/electrical-engineering.html' },
      { id: 10, name: 'POP Installation & Design', tag: 'INTERIOR', img: '../img/pop-installation.jpg', slug: '../services/pop-installation.html' },
      { id: 11, name: 'Cleaning & Fumigation Services', tag: 'SANITATION', img: '../img/cleaning-fumigation.jpg', slug: '../services/cleaning-fumigation.html' }
    ],
    leadership: [
      { id: 1, name: 'Engr. Andrew Chisom Wisdom', role: 'Founder / Chief Security Engineer', img: '../img/wisdom.jpg' },
      { id: 2, name: 'Mrs. Andrew Doreen', role: 'Co-Founder / Chief Operating Officer', img: '../img/doreen.jpg' },
      { id: 3, name: 'Mr. Nwaojimuo Innocent Eze', role: 'Head of Supervision & Head of Cleaning & Fumigation Services', img: '../img/innocent.jpg' },
      { id: 4, name: 'Engr. Oluikpe Kingsley Odu', role: 'Head of Civil & Structural Renovations', img: '../img/kingsley.jpg' },
      { id: 5, name: 'Mr. Onyekachi', role: 'Head of Quantity Survey', img: '../img/onyekachi.jpg' }
    ],
    projects: [
      { id: 1, title: 'Abayi Commercial Plaza & Office Complex', category: 'renovation', location: 'Abayi, Aba, Abia State', img: '../img/finished-building-aba.jpg', status: 'Completed' },
      { id: 2, title: 'Osisioma Residential Estate Roofing Installation', category: 'roofing', location: 'Osisioma Aba, Abia State', img: '../img/sheet-1.jpg', status: 'Completed' },
      { id: 3, title: 'Regional Commercial Facility Renovation', category: 'renovation', location: 'Enugu Commercial District, Enugu State', img: '../img/finished-building-enugu.jpg', status: 'Completed' },
      { id: 4, title: 'Aba Commercial CCTV Surveillance Network', category: 'cctv', location: 'Aba Commercial District, Abia State', img: '../img/cctv-camera 4.jpg', status: 'Completed' },
      { id: 5, title: 'Umuahia Industrial Park Electrical Overhaul', category: 'electrical', location: 'Umuahia Industrial Zone, Abia State', img: '../img/electrical-1.jpg', status: 'Completed' },
      { id: 6, title: 'Osisioma Industrial Warehouse & Rainwater Systems', category: 'maintenance', location: 'Osisioma Industrial Zone, Aba', img: '../img/maintenance-2.jpg', status: 'Completed' }
    ],
    insights: [
      { id: 1, title: '5 Signs Your Building Roof Needs Urgent Replacement', category: 'Roofing', date: '2026-08-20', img: '../img/sheet-production.jpg' },
      { id: 2, title: 'Why Every Construction Project Needs a Quantity Surveyor', category: 'Cost Control', date: '2026-08-15', img: '../img/quantity-survey-3.jpg' },
      { id: 3, title: 'Security Door Grades Explained: What to Choose for Your Property', category: 'Security', date: '2026-08-10', img: '../img/security-door.jpg' },
      { id: 4, title: 'IP CCTV Architecture: Remote Monitoring for Multi-Site Facilities', category: 'Surveillance', date: '2026-08-05', img: '../img/cctv-camera 5.jpg' },
      { id: 5, title: 'Building Renovation Checklist: What to Inspect Before Starting', category: 'Renovation', date: '2026-07-30', img: '../img/building-renovation-1.jpg' },
      { id: 6, title: 'POP Ceiling Designs: Trends and Installation Tips for 2026', category: 'Interior', date: '2026-07-25', img: '../img/pop-installation.jpg' }
    ],
    milestones: [
      { id: 1, year: 'Phase 01', title: 'Our Foundation — Practical Engineering Solutions', img: '../img/renovation.jpg' },
      { id: 2, year: 'Phase 02', title: 'Growing Capabilities across Construction & Security', img: '../img/security-door.jpg' },
      { id: 3, year: 'Phase 03', title: 'Roofing Sheet Production & Structural Infrastructure', img: '../img/sheet-production.jpg' },
      { id: 4, year: 'Phase 04', title: 'Today — Integrated Multi-Disciplinary Services', img: '../img/finished-building-enugu.jpg' }
    ],
    contact: {
      phone: '+234 810 743 2868',
      email: 'wisdom@xashima.com',
      whatsapp: 'https://wa.link/ln8z3i',
      headOffice: 'No. 119 Aba-Owerri Road, Abayi, Aba, Abia State, Nigeria.',
      branchOffice: 'KM 3, Aba/Enugu Expressway, Osisisoma Aba, Abia State, Nigeria.'
    }
  };

  // ── Data Layer ────────────────────────────────────────────
  function loadData() {
    try {
      const raw = localStorage.getItem(DATA_KEY);
      return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_DATA));
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }

  function saveData(data) {
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
  }

  function resetData() {
    localStorage.removeItem(DATA_KEY);
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  // ── Toast ─────────────────────────────────────────────────
  function toast(msg, type = 'success') {
    const c = document.querySelector('.toast-container');
    if (!c) return;
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
    c.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  }

  // ── Modal ─────────────────────────────────────────────────
  let confirmCallback = null;

  function openConfirm(msg, cb) {
    document.getElementById('confirmMsg').textContent = msg;
    document.getElementById('confirmModal').classList.add('open');
    confirmCallback = cb;
  }

  // ── Navigation ────────────────────────────────────────────
  function showPanel(id) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    const panel = document.getElementById('panel-' + id);
    if (panel) panel.classList.add('active');
    const item = document.querySelector('[data-panel="' + id + '"]');
    if (item) item.classList.add('active');
    document.querySelector('.topbar-title').textContent = id.charAt(0).toUpperCase() + id.slice(1);
    renderPanel(id);
  }

  // ── Render Panels ─────────────────────────────────────────
  function renderPanel(id) {
    const data = loadData();
    switch (id) {
      case 'dashboard': renderDashboard(data); break;
      case 'services': renderServices(data); break;
      case 'leadership': renderLeadership(data); break;
      case 'projects': renderProjects(data); break;
      case 'insights': renderInsights(data); break;
      case 'milestones': renderMilestones(data); break;
      case 'contact': renderContact(data); break;
    }
  }

  function renderDashboard(data) {
    document.getElementById('stat-services').textContent = data.services.length;
    document.getElementById('stat-leadership').textContent = data.leadership.length;
    document.getElementById('stat-projects').textContent = data.projects.length;
    document.getElementById('stat-insights').textContent = data.insights.length;
    document.getElementById('stat-milestones').textContent = data.milestones.length;
  }

  // ── Services ──────────────────────────────────────────────
  function renderServices(data) {
    const tbody = document.getElementById('services-tbody');
    tbody.innerHTML = data.services.map((s, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><img src="${s.img}" class="img-preview-thumb" onerror="this.style.display='none'"></td>
        <td>${s.name}</td>
        <td><span class="badge badge-green">${s.tag}</span></td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="adminApp.editService(${s.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="adminApp.deleteService(${s.id})">Delete</button>
        </td>
      </tr>`).join('');
  }

  function editService(id) {
    const data = loadData();
    const s = data.services.find(x => x.id === id);
    if (!s) return;
    document.getElementById('svc-id').value = s.id;
    document.getElementById('svc-name').value = s.name;
    document.getElementById('svc-tag').value = s.tag;
    document.getElementById('svc-img').value = s.img;
    document.getElementById('svc-slug').value = s.slug;
    updateImgPreview('svc-img', 'svc-img-preview');
    document.getElementById('services-form-card').style.display = 'block';
    document.getElementById('services-form-card').scrollIntoView({ behavior: 'smooth' });
  }

  function deleteService(id) {
    openConfirm('Delete this service? This cannot be undone.', () => {
      const data = loadData();
      data.services = data.services.filter(x => x.id !== id);
      saveData(data);
      renderServices(data);
      toast('Service deleted', 'error');
    });
  }

  function saveService() {
    const id = parseInt(document.getElementById('svc-id').value);
    const data = loadData();
    const obj = {
      id: id || Date.now(),
      name: document.getElementById('svc-name').value.trim(),
      tag: document.getElementById('svc-tag').value.trim(),
      img: document.getElementById('svc-img').value.trim(),
      slug: document.getElementById('svc-slug').value.trim()
    };
    if (!obj.name) return toast('Name is required', 'error');
    if (id) {
      const idx = data.services.findIndex(x => x.id === id);
      if (idx > -1) data.services[idx] = obj;
    } else {
      data.services.push(obj);
    }
    saveData(data);
    renderServices(data);
    cancelServiceForm();
    toast(id ? 'Service updated' : 'Service added');
  }

  function cancelServiceForm() {
    document.getElementById('svc-id').value = '';
    document.getElementById('svc-name').value = '';
    document.getElementById('svc-tag').value = '';
    document.getElementById('svc-img').value = '';
    document.getElementById('svc-slug').value = '';
    document.getElementById('services-form-card').style.display = 'none';
  }

  // ── Leadership ────────────────────────────────────────────
  function renderLeadership(data) {
    const tbody = document.getElementById('leadership-tbody');
    tbody.innerHTML = data.leadership.map((m, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><img src="${m.img}" class="img-preview-thumb" onerror="this.style.display='none'"></td>
        <td>${m.name}</td>
        <td style="font-size:.8rem;color:var(--muted)">${m.role}</td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="adminApp.editLeader(${m.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="adminApp.deleteLeader(${m.id})">Delete</button>
        </td>
      </tr>`).join('');
  }

  function editLeader(id) {
    const data = loadData();
    const m = data.leadership.find(x => x.id === id);
    if (!m) return;
    document.getElementById('ldr-id').value = m.id;
    document.getElementById('ldr-name').value = m.name;
    document.getElementById('ldr-role').value = m.role;
    document.getElementById('ldr-img').value = m.img;
    updateImgPreview('ldr-img', 'ldr-img-preview');
    document.getElementById('leadership-form-card').style.display = 'block';
    document.getElementById('leadership-form-card').scrollIntoView({ behavior: 'smooth' });
  }

  function deleteLeader(id) {
    openConfirm('Remove this team member?', () => {
      const data = loadData();
      data.leadership = data.leadership.filter(x => x.id !== id);
      saveData(data);
      renderLeadership(data);
      toast('Member removed', 'error');
    });
  }

  function saveLeader() {
    const id = parseInt(document.getElementById('ldr-id').value);
    const data = loadData();
    const obj = {
      id: id || Date.now(),
      name: document.getElementById('ldr-name').value.trim(),
      role: document.getElementById('ldr-role').value.trim(),
      img: document.getElementById('ldr-img').value.trim()
    };
    if (!obj.name) return toast('Name is required', 'error');
    if (id) {
      const idx = data.leadership.findIndex(x => x.id === id);
      if (idx > -1) data.leadership[idx] = obj;
    } else {
      data.leadership.push(obj);
    }
    saveData(data);
    renderLeadership(data);
    cancelLeaderForm();
    toast(id ? 'Leader updated' : 'Leader added');
  }

  function cancelLeaderForm() {
    ['ldr-id','ldr-name','ldr-role','ldr-img'].forEach(k => document.getElementById(k).value = '');
    document.getElementById('leadership-form-card').style.display = 'none';
  }

  // ── Projects ──────────────────────────────────────────────
  function renderProjects(data) {
    const tbody = document.getElementById('projects-tbody');
    tbody.innerHTML = data.projects.map((p, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><img src="${p.img}" class="img-preview-thumb" onerror="this.style.display='none'"></td>
        <td>${p.title}</td>
        <td>${p.location}</td>
        <td><span class="badge badge-green">${p.status}</span></td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="adminApp.editProject(${p.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="adminApp.deleteProject(${p.id})">Delete</button>
        </td>
      </tr>`).join('');
  }

  function editProject(id) {
    const data = loadData();
    const p = data.projects.find(x => x.id === id);
    if (!p) return;
    document.getElementById('prj-id').value = p.id;
    document.getElementById('prj-title').value = p.title;
    document.getElementById('prj-category').value = p.category;
    document.getElementById('prj-location').value = p.location;
    document.getElementById('prj-img').value = p.img;
    document.getElementById('prj-status').value = p.status;
    updateImgPreview('prj-img', 'prj-img-preview');
    document.getElementById('projects-form-card').style.display = 'block';
    document.getElementById('projects-form-card').scrollIntoView({ behavior: 'smooth' });
  }

  function deleteProject(id) {
    openConfirm('Delete this project?', () => {
      const data = loadData();
      data.projects = data.projects.filter(x => x.id !== id);
      saveData(data);
      renderProjects(data);
      toast('Project deleted', 'error');
    });
  }

  function saveProject() {
    const id = parseInt(document.getElementById('prj-id').value);
    const data = loadData();
    const obj = {
      id: id || Date.now(),
      title: document.getElementById('prj-title').value.trim(),
      category: document.getElementById('prj-category').value.trim(),
      location: document.getElementById('prj-location').value.trim(),
      img: document.getElementById('prj-img').value.trim(),
      status: document.getElementById('prj-status').value.trim()
    };
    if (!obj.title) return toast('Title is required', 'error');
    if (id) {
      const idx = data.projects.findIndex(x => x.id === id);
      if (idx > -1) data.projects[idx] = obj;
    } else {
      data.projects.push(obj);
    }
    saveData(data);
    renderProjects(data);
    cancelProjectForm();
    toast(id ? 'Project updated' : 'Project added');
  }

  function cancelProjectForm() {
    ['prj-id','prj-title','prj-category','prj-location','prj-img','prj-status'].forEach(k => document.getElementById(k).value = '');
    document.getElementById('projects-form-card').style.display = 'none';
  }

  // ── Insights ──────────────────────────────────────────────
  function renderInsights(data) {
    const tbody = document.getElementById('insights-tbody');
    tbody.innerHTML = data.insights.map((n, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><img src="${n.img}" class="img-preview-thumb" onerror="this.style.display='none'"></td>
        <td>${n.title}</td>
        <td>${n.category}</td>
        <td style="font-size:.8rem">${n.date}</td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="adminApp.editInsight(${n.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="adminApp.deleteInsight(${n.id})">Delete</button>
        </td>
      </tr>`).join('');
  }

  function editInsight(id) {
    const data = loadData();
    const n = data.insights.find(x => x.id === id);
    if (!n) return;
    document.getElementById('ins-id').value = n.id;
    document.getElementById('ins-title').value = n.title;
    document.getElementById('ins-category').value = n.category;
    document.getElementById('ins-date').value = n.date;
    document.getElementById('ins-img').value = n.img;
    updateImgPreview('ins-img', 'ins-img-preview');
    document.getElementById('insights-form-card').style.display = 'block';
    document.getElementById('insights-form-card').scrollIntoView({ behavior: 'smooth' });
  }

  function deleteInsight(id) {
    openConfirm('Delete this insight?', () => {
      const data = loadData();
      data.insights = data.insights.filter(x => x.id !== id);
      saveData(data);
      renderInsights(data);
      toast('Insight deleted', 'error');
    });
  }

  function saveInsight() {
    const id = parseInt(document.getElementById('ins-id').value);
    const data = loadData();
    const obj = {
      id: id || Date.now(),
      title: document.getElementById('ins-title').value.trim(),
      category: document.getElementById('ins-category').value.trim(),
      date: document.getElementById('ins-date').value.trim(),
      img: document.getElementById('ins-img').value.trim()
    };
    if (!obj.title) return toast('Title is required', 'error');
    if (id) {
      const idx = data.insights.findIndex(x => x.id === id);
      if (idx > -1) data.insights[idx] = obj;
    } else {
      data.insights.push(obj);
    }
    saveData(data);
    renderInsights(data);
    cancelInsightForm();
    toast(id ? 'Insight updated' : 'Insight added');
  }

  function cancelInsightForm() {
    ['ins-id','ins-title','ins-category','ins-date','ins-img'].forEach(k => document.getElementById(k).value = '');
    document.getElementById('insights-form-card').style.display = 'none';
  }

  // ── Milestones ────────────────────────────────────────────
  function renderMilestones(data) {
    const tbody = document.getElementById('milestones-tbody');
    tbody.innerHTML = data.milestones.map((m, i) => `
      <tr>
        <td>${m.year}</td>
        <td><img src="${m.img}" class="img-preview-thumb" onerror="this.style.display='none'"></td>
        <td>${m.title}</td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="adminApp.editMilestone(${m.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="adminApp.deleteMilestone(${m.id})">Delete</button>
        </td>
      </tr>`).join('');
  }

  function editMilestone(id) {
    const data = loadData();
    const m = data.milestones.find(x => x.id === id);
    if (!m) return;
    document.getElementById('ms-id').value = m.id;
    document.getElementById('ms-year').value = m.year;
    document.getElementById('ms-title').value = m.title;
    document.getElementById('ms-img').value = m.img;
    updateImgPreview('ms-img', 'ms-img-preview');
    document.getElementById('milestones-form-card').style.display = 'block';
    document.getElementById('milestones-form-card').scrollIntoView({ behavior: 'smooth' });
  }

  function deleteMilestone(id) {
    openConfirm('Delete this milestone?', () => {
      const data = loadData();
      data.milestones = data.milestones.filter(x => x.id !== id);
      saveData(data);
      renderMilestones(data);
      toast('Milestone deleted', 'error');
    });
  }

  function saveMilestone() {
    const id = parseInt(document.getElementById('ms-id').value);
    const data = loadData();
    const obj = {
      id: id || Date.now(),
      year: document.getElementById('ms-year').value.trim(),
      title: document.getElementById('ms-title').value.trim(),
      img: document.getElementById('ms-img').value.trim()
    };
    if (!obj.title) return toast('Title required', 'error');
    if (id) {
      const idx = data.milestones.findIndex(x => x.id === id);
      if (idx > -1) data.milestones[idx] = obj;
    } else {
      data.milestones.push(obj);
    }
    saveData(data);
    renderMilestones(data);
    cancelMilestoneForm();
    toast(id ? 'Milestone updated' : 'Milestone added');
  }

  function cancelMilestoneForm() {
    ['ms-id','ms-year','ms-title','ms-img'].forEach(k => document.getElementById(k).value = '');
    document.getElementById('milestones-form-card').style.display = 'none';
  }

  // ── Contact ───────────────────────────────────────────────
  function renderContact(data) {
    const c = data.contact;
    document.getElementById('ct-phone').value = c.phone || '';
    document.getElementById('ct-email').value = c.email || '';
    document.getElementById('ct-whatsapp').value = c.whatsapp || '';
    document.getElementById('ct-head').value = c.headOffice || '';
    document.getElementById('ct-branch').value = c.branchOffice || '';
  }

  function saveContact() {
    const data = loadData();
    data.contact = {
      phone: document.getElementById('ct-phone').value.trim(),
      email: document.getElementById('ct-email').value.trim(),
      whatsapp: document.getElementById('ct-whatsapp').value.trim(),
      headOffice: document.getElementById('ct-head').value.trim(),
      branchOffice: document.getElementById('ct-branch').value.trim()
    };
    saveData(data);
    toast('Contact info saved');
  }

  // ── Image Preview ─────────────────────────────────────────
  function updateImgPreview(inputId, previewId) {
    const val = document.getElementById(inputId).value;
    const img = document.getElementById(previewId);
    if (!img) return;
    img.src = val;
    img.style.display = val ? 'block' : 'none';
  }

  // ── Export / Import ───────────────────────────────────────
  function exportData() {
    const data = loadData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'xashima-site-data-' + Date.now() + '.json';
    a.click();
    toast('Data exported');
  }

  function importData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const parsed = JSON.parse(e.target.result);
        saveData(parsed);
        toast('Data imported successfully');
        renderPanel(currentPanel());
      } catch (err) {
        toast('Invalid JSON file', 'error');
      }
    };
    reader.readAsText(file);
  }

  function doReset() {
    openConfirm('Reset ALL site data to defaults? This cannot be undone.', () => {
      const fresh = resetData();
      saveData(fresh);
      toast('Data reset to defaults', 'info');
      renderPanel(currentPanel());
    });
  }

  function currentPanel() {
    const active = document.querySelector('.sidebar-item.active');
    return active ? active.dataset.panel : 'dashboard';
  }

  // ── Init ──────────────────────────────────────────────────
  function initLogin() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const pass = document.getElementById('loginPass').value;
      if (login(pass)) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminShell').style.display = 'flex';
        initAdmin();
      } else {
        document.getElementById('loginError').style.display = 'block';
      }
    });
  }

  function initAdmin() {
    // sidebar navigation
    document.querySelectorAll('.sidebar-item[data-panel]').forEach(btn => {
      btn.addEventListener('click', () => showPanel(btn.dataset.panel));
    });

    // logout
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // confirm modal
    document.getElementById('confirmOk').addEventListener('click', () => {
      document.getElementById('confirmModal').classList.remove('open');
      if (typeof confirmCallback === 'function') confirmCallback();
      confirmCallback = null;
    });
    document.getElementById('confirmCancel').addEventListener('click', () => {
      document.getElementById('confirmModal').classList.remove('open');
      confirmCallback = null;
    });

    // image input live previews
    const imgPairs = [
      ['svc-img','svc-img-preview'],
      ['ldr-img','ldr-img-preview'],
      ['prj-img','prj-img-preview'],
      ['ins-img','ins-img-preview'],
      ['ms-img','ms-img-preview']
    ];
    imgPairs.forEach(([inp, prev]) => {
      const el = document.getElementById(inp);
      if (el) el.addEventListener('input', () => updateImgPreview(inp, prev));
    });

    // export
    document.getElementById('btnExport').addEventListener('click', exportData);

    // import
    document.getElementById('btnImport').addEventListener('click', () => document.getElementById('importFile').click());
    document.getElementById('importFile').addEventListener('change', function () {
      importData(this.files[0]);
      this.value = '';
    });

    // reset
    document.getElementById('btnReset').addEventListener('click', doReset);

    // copyright year
    const yr = document.getElementById('adminYear');
    if (yr) yr.textContent = new Date().getFullYear();

    showPanel('dashboard');
  }

  // ── Boot ─────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    if (isLoggedIn()) {
      document.getElementById('loginScreen').style.display = 'none';
      document.getElementById('adminShell').style.display = 'flex';
      initAdmin();
    } else {
      document.getElementById('loginScreen').style.display = 'flex';
      document.getElementById('adminShell').style.display = 'none';
      initLogin();
    }
  });

  // ── Public API ────────────────────────────────────────────
  window.adminApp = {
    editService, deleteService, saveService, cancelServiceForm,
    editLeader, deleteLeader, saveLeader, cancelLeaderForm,
    editProject, deleteProject, saveProject, cancelProjectForm,
    editInsight, deleteInsight, saveInsight, cancelInsightForm,
    editMilestone, deleteMilestone, saveMilestone, cancelMilestoneForm,
    saveContact, exportData, doReset,
    showAddServiceForm: () => { cancelServiceForm(); document.getElementById('services-form-card').style.display = 'block'; },
    showAddLeaderForm: () => { cancelLeaderForm(); document.getElementById('leadership-form-card').style.display = 'block'; },
    showAddProjectForm: () => { cancelProjectForm(); document.getElementById('projects-form-card').style.display = 'block'; },
    showAddInsightForm: () => { cancelInsightForm(); document.getElementById('insights-form-card').style.display = 'block'; },
    showAddMilestoneForm: () => { cancelMilestoneForm(); document.getElementById('milestones-form-card').style.display = 'block'; }
  };

})();