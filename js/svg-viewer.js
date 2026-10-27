/**
 * ==============================================================================
 * VISOR INSTITUCIONAL DE DIAGRAMAS DE ARQUITECTURA (SVG / PNG)
 * UNMSM — Facultad de Ingeniería de Sistemas e Informática (FISI)
 * Curso: Diseño de Sistemas de Información (2026-2)
 * Docente: Ing. Teodoro Andrade Mogollón
 * Caso de Estudio: Caso B — Sistema de Mesa de Ayuda de TI (Service Desk) / OGTI
 * ==============================================================================
 */

(function () {
  'use strict';

  // ============================================================================
  // 1. REGISTRO OFICIAL DE LOS 11 DIAGRAMAS CON NOMBRES LIMPIOS
  // ============================================================================
  const DIAGRAMS = [
    {
      id: 1,
      title: 'Diagrama BPMN',
      subtitle: 'Proceso de Negocio: Gestión Integral de Tickets de Mesa de Ayuda',
      category: 'Negocio y Requerimientos',
      viewType: 'Modelado de Negocio (BPMN 2.0)',
      primaryFile: '01-bpmn.png',
      aliases: ['01-bpmn.svg', 'bpmn.png', 'bpmn.svg'],
      isRasterImage: true,
      shortDesc: 'Flujo extremo a extremo de recepción, triaje N1/N2, resolución y cierre de solicitudes en OGTI.',
      talkingPoints: [
        'Interacción entre Solicitante, Mesa de Ayuda (Nivel 1), Especialista (Nivel 2) y Coordinador OGTI.',
        'Compuertas de decisión según criticidad y tiempos de SLA.',
        'Notificación y validación de conformidad de servicio por parte del usuario.'
      ]
    },
    {
      id: 2,
      title: 'Modelo de Casos de Uso',
      subtitle: 'Vista de Escenarios / Casos de Uso (Kruchten 4+1)',
      category: 'Negocio y Requerimientos',
      viewType: 'Vista de Casos de Uso (UML 2.5)',
      primaryFile: '02-casos-uso.svg',
      aliases: ['Modelo de Casos de Uso (UML 2.5.1) - Sistema de Mesa de Ayuda de TI.svg', 'casos_uso.svg'],
      shortDesc: 'Estructuración de casos de uso organizados por módulos: Autenticación, Gestión de Tickets, SLAs y Auditoría.',
      talkingPoints: [
        'Actores principales: Solicitante (Comunidad UNMSM), Técnico de Soporte y Administrador OGTI.',
        'Relaciones <<include>> de autenticación y <<extend>> de reasignación y reapertura.',
        'El CU-02 representa el flujo operacional crítico del sistema.'
      ]
    },
    {
      id: 3,
      title: 'Modelo de Dominio',
      subtitle: 'Entidades conceptuales y reglas de negocio del Service Desk',
      category: 'Negocio y Requerimientos',
      viewType: 'Modelo Conceptual de Dominio',
      primaryFile: '03-modelo-dominio.svg',
      aliases: ['Modelo Conceptual de Dominio - Sistema de Mesa de Ayuda de TI (Service Desk).svg', 'dominio.svg'],
      shortDesc: 'Conceptos del negocio: Ticket, Incidente, Requerimiento, SLA, Categoría, Activo TI y Solución.',
      talkingPoints: [
        'Diferenciación conceptual estricta entre Incidente (falla) y Requerimiento de servicio.',
        'Asociación directa entre Ticket, Criterio de SLA y Bitácora de Auditoría.',
        'Vínculo con el catálogo de activos de TI institucionales de la UNMSM.'
      ]
    },
    {
      id: 4,
      title: 'Vista Lógica (Logical View)',
      subtitle: 'Estructura en capas y separación de responsabilidades',
      category: 'Arquitectura de Software (4+1)',
      viewType: 'Logical View (Kruchten 4+1)',
      primaryFile: '04-vista-logica.svg',
      aliases: ['Vista Logica de la Arquitectura (Kruchten 4+1) - Service Desk.svg', 'logica.svg'],
      shortDesc: 'Arquitectura en capas: Presentación, Aplicación / Servicios, Dominio e Infraestructura / Persistencia.',
      talkingPoints: [
        'Organización desacoplada con inversión de dependencias.',
        'Módulos de Reglas de Asignación Automática y Despacho Asíncrono de Alertas.',
        'Abstracción de repositorios hacia el motor de base de datos relacional.'
      ]
    },
    {
      id: 5,
      title: 'Vista de Procesos (Process View)',
      subtitle: 'Concurrencia, hilos, tareas asíncronas y SLAs',
      category: 'Arquitectura de Software (4+1)',
      viewType: 'Process View (Kruchten 4+1)',
      primaryFile: '05-vista-procesos.svg',
      aliases: ['Vista de Procesos (Kruchten 4+1) - Concurrencia y Flujo Asíncrono de SLAs.svg', 'procesos.svg'],
      shortDesc: 'Flujos concurrentes, workers en segundo plano para control de SLAs y colas de mensajes.',
      talkingPoints: [
        'Gestión de transacciones concurrentes para asignación equitativa de técnicos.',
        'Worker en background para alertar vencimientos inminentes de SLA.',
        'Aislamiento de tareas pesadas (reportes, auditoría) del hilo principal web.'
      ]
    },
    {
      id: 6,
      title: 'Vista de Desarrollo (Development View)',
      subtitle: 'Estructura de paquetes, módulos y organización del código',
      category: 'Arquitectura de Software (4+1)',
      viewType: 'Development View (Kruchten 4+1)',
      primaryFile: '06-vista-desarrollo.svg',
      aliases: ['Vista de Desarrollo (Kruchten 4+1) - Estructura de Paquetes y Módulos.svg', 'desarrollo.svg'],
      shortDesc: 'Jerarquía de carpetas, módulos de negocio, librerías compartidas y gestión de dependencias.',
      talkingPoints: [
        'Estructura modular del frontend y backend orientada a mantenibilidad.',
        'Gestión de contratos de interfaces y utilitarios comunes.',
        'Estrategia de branching y pipelines de integración continua (CI/CD).'
      ]
    },
    {
      id: 7,
      title: 'Vista Física o de Despliegue (Physical View)',
      subtitle: 'Topología de ejecución, nodos de hardware, servidores y red',
      category: 'Arquitectura de Software (4+1)',
      viewType: 'Physical / Deployment View (Kruchten 4+1)',
      primaryFile: '07-vista-fisica.svg',
      aliases: ['Vista Física - Despliegue (Kruchten 4+1) - Topología de Ejecución.svg', 'fisica.svg'],
      shortDesc: 'Nodos de cómputo, proxy inverso NGINX, servidores de aplicaciones, cluster de BD y seguridad perimetral.',
      talkingPoints: [
        'Topología distribuida con balanceo de carga para alta disponibilidad en matrícula y exámenes.',
        'Segmentación de red institucional (DMZ, subred privada de datos).',
        'Políticas de respaldos periódicos y cifrado en tránsito (TLS 1.3).'
      ]
    },
    {
      id: 8,
      title: 'Diagrama de Clases de Diseño',
      subtitle: 'Detalle de clases de software, métodos, atributos tipados y patrones',
      category: 'Diseño Detallado y Dinámico',
      viewType: 'Diagrama Estructural UML 2.5',
      primaryFile: '08-clases.svg',
      aliases: ['08-clases-disenio.svg', 'Diagrama de Clases de Diseño (UML 2.5.1) - Microservicio Mesa de Ayuda TI.svg', 'clases.svg'],
      shortDesc: 'Entidades, Value Objects, Servicios de Dominio, Controladores y Repositorios con contratos explícitos.',
      talkingPoints: [
        'Aplicación del patrón State para transiciones válidas de estados del ticket.',
        'Tipado explícito de parámetros y retorno para auditoría rigurosa.',
        'Diferenciación nítida entre agregación, composición y herencia.'
      ]
    },
    {
      id: 9,
      title: 'Diagrama de Secuencia del CU-02',
      subtitle: 'Realización dinámica: Asignación y Resolución de Ticket',
      category: 'Diseño Detallado y Dinámico',
      viewType: 'Diagrama de Comportamiento UML 2.5',
      primaryFile: '09-secuencia-cu02.svg',
      aliases: ['Diagrama de Secuencia Casos de uso Critico CU-02.svg', 'secuencia.svg'],
      shortDesc: 'Secuencia cronológica de mensajes entre Interfaz, Controlador, Gestor de Asignación, SLA Engine y Persistencia.',
      talkingPoints: [
        'Traza completa desde la notificación al técnico hasta la aplicación de solución técnica.',
        'Manejo de caminos alternativos: reasignación por sobrecarga de soporte.',
        'Disparo sincrónico de logs y asincrónico de correos de confirmación.'
      ]
    },
    {
      id: 10,
      title: 'Diagrama de Estados',
      subtitle: 'Ciclo de vida del Ticket / Incidente de TI',
      category: 'Diseño Detallado y Dinámico',
      viewType: 'Máquina de Estados Finitos UML 2.5',
      primaryFile: '10-estados.svg',
      aliases: ['Diagrama de Estados - Ciclo de Vida del Ticket de TI.svg', 'estados.svg'],
      shortDesc: 'Transiciones de estado: Registrado → Asignado → En Atención → Pendiente de Tercero / Usuario → Resuelto → Cerrado.',
      talkingPoints: [
        'Condiciones de guarda para avance de estados (ej. justificación técnica para cierre).',
        'Congelamiento de reloj de SLA cuando el ticket está en espera del usuario.',
        'Mecanismo formal de reapertura dentro del plazo reglamentario.'
      ]
    },
    {
      id: 11,
      title: 'Diagrama de Componentes',
      subtitle: 'Componentes de software, interfaces provistas/requeridas y APIs',
      category: 'Diseño Detallado y Dinámico',
      viewType: 'Diagrama Estructural UML 2.5',
      primaryFile: '11-componentes.svg',
      aliases: ['Diagrama de Componentes (UML 2.5.1) - Service Desk.svg', 'componentes.svg'],
      shortDesc: 'Módulos ejecutables: Auth Module, Ticket Manager, Notification Service, SLA Engine y Database Connector.',
      talkingPoints: [
        'Interfaces provistas y requeridas (notación lollypop / socket) bien delimitadas.',
        'Integración con directorio institucional UNMSM (LDAP/OAuth2).',
        'Conexión desacoplada con el gestor documental de evidencias técnicas.'
      ]
    }
  ];

  // Integrantes del equipo con código corregido a 8 dígitos exactos
  const TEAM_MEMBERS = [
    { name: 'Granda Salazar, Rodrigo Christopher', code: '24200017' },
    { name: 'Quezada Pairazaman, Sebastian Emanuel', code: '24200030' },
    { name: 'Quispe Arango, Juan Pablo', code: '24200121' },
    { name: 'Saldaña Sánchez, Luis Mario', code: '24200038' },
    { name: 'Treviño Alvarado, Milagros Sofia', code: '24200219' }
  ];

  // ============================================================================
  // 2. ESTADO DEL VISOR
  // ============================================================================
  const state = {
    currentIndex: 0,
    searchQuery: '',
    sidebarOpen: true,
    notesOpen: false,
    teamModalOpen: false,
    shortcutsModalOpen: false,
    canvasBg: 'white',

    // Pan & Zoom
    scale: 1,
    minScale: 0.05,
    maxScale: 15,
    panX: 0,
    panY: 0,
    isPanning: false,
    startX: 0,
    startY: 0,
    isPinching: false,
    initialPinchDistance: 0,
    initialPinchScale: 1,

    // Cronómetro
    timerRunning: false,
    timerSeconds: 0,
    timerInterval: null,

    fileStatusMap: {}
  };

  let dom = {};

  // ============================================================================
  // 3. INICIALIZACIÓN
  // ============================================================================
  document.addEventListener('DOMContentLoaded', initApp);

  function initApp() {
    cacheDom();
    bindEvents();
    bindKeyboard();
    preloadFileStatuses().then(() => {
      renderSidebar();
      selectDiagram(0);
    });
  }

  function cacheDom() {
    dom = {
      sidebar: document.getElementById('sidebar'),
      sidebarToggleBtn: document.getElementById('btn-toggle-sidebar'),
      sidebarBackdrop: document.getElementById('sidebar-backdrop'),
      diagramList: document.getElementById('diagram-list'),
      searchInput: document.getElementById('search-input'),
      currentDiagramBadge: document.getElementById('current-diagram-badge'),

      headerTitle: document.getElementById('header-diagram-title'),
      headerCategory: document.getElementById('header-diagram-category'),
      btnPrev: document.getElementById('btn-prev-diagram'),
      btnNext: document.getElementById('btn-next-diagram'),

      viewport: document.getElementById('viewport-canvas'),
      transformLayer: document.getElementById('svg-transform-layer'),
      contentContainer: document.getElementById('svg-content-container'),
      loaderSpinner: document.getElementById('viewer-loader'),

      zoomInBtn: document.getElementById('btn-zoom-in'),
      zoomOutBtn: document.getElementById('btn-zoom-out'),
      zoomResetBtn: document.getElementById('btn-zoom-reset'),
      zoomFitBtn: document.getElementById('btn-zoom-fit'),
      zoomValueText: document.getElementById('zoom-percentage-text'),
      fullscreenBtn: document.getElementById('btn-fullscreen'),

      bgWhiteBtn: document.getElementById('btn-bg-white'),
      bgGridBtn: document.getElementById('btn-bg-grid'),
      bgDarkBtn: document.getElementById('btn-bg-dark'),

      notesDrawer: document.getElementById('notes-drawer'),
      toggleNotesBtn: document.getElementById('btn-toggle-notes'),
      closeNotesBtn: document.getElementById('btn-close-notes'),
      notesTitle: document.getElementById('notes-title'),
      notesViewType: document.getElementById('notes-view-type'),
      notesDesc: document.getElementById('notes-desc'),
      notesList: document.getElementById('notes-list'),

      timerDisplay: document.getElementById('timer-display'),
      btnTimerToggle: document.getElementById('btn-timer-toggle'),
      btnTimerReset: document.getElementById('btn-timer-reset'),

      teamModal: document.getElementById('team-modal'),
      btnOpenTeam: document.getElementById('btn-open-team'),
      btnCloseTeam: document.getElementById('btn-close-team'),
      shortcutsModal: document.getElementById('shortcuts-modal'),
      btnOpenShortcuts: document.getElementById('btn-open-shortcuts'),
      btnCloseShortcuts: document.getElementById('btn-close-shortcuts')
    };
  }

  // ============================================================================
  // 4. RESOLUCIÓN DE ARCHIVOS (SVG / PNG)
  // ============================================================================
  async function preloadFileStatuses() {
    for (const diagram of DIAGRAMS) {
      const resolved = await resolveFileForDiagram(diagram);
      state.fileStatusMap[diagram.id] = !!resolved;
    }
  }

  async function resolveFileForDiagram(diagram) {
    const candidates = [diagram.primaryFile, ...(diagram.aliases || [])];

    for (const filename of candidates) {
      const path = `assets/svgs/${encodeURIComponent(filename)}`;
      const exists = await checkFileExists(path);
      if (exists) {
        const isPng = filename.toLowerCase().endsWith('.png');
        return { filename, path, isPng };
      }
    }
    return null;
  }

  function checkFileExists(encodedPath) {
    return new Promise(async resolve => {
      if (window.location.protocol.startsWith('http')) {
        try {
          const res = await fetch(encodedPath, { method: 'HEAD', cache: 'no-cache' });
          if (res.ok) return resolve(true);
        } catch (e) {
          // Fallback a sonda de imagen
        }
      }

      const img = new Image();
      let timedOut = false;
      const timeout = setTimeout(() => {
        timedOut = true;
        resolve(false);
      }, 1500);

      img.onload = () => {
        if (!timedOut) {
          clearTimeout(timeout);
          resolve(true);
        }
      };
      img.onerror = () => {
        if (!timedOut) {
          clearTimeout(timeout);
          resolve(false);
        }
      };
      img.src = `${encodedPath}?_t=${Date.now()}`;
    });
  }

  // ============================================================================
  // 5. SIDEBAR
  // ============================================================================
  function renderSidebar() {
    if (!dom.diagramList) return;

    const query = state.searchQuery.toLowerCase().trim();
    const filtered = DIAGRAMS.filter(d => {
      if (!query) return true;
      return (
        d.title.toLowerCase().includes(query) ||
        d.primaryFile.toLowerCase().includes(query) ||
        d.category.toLowerCase().includes(query) ||
        String(d.id).includes(query)
      );
    });

    if (filtered.length === 0) {
      dom.diagramList.innerHTML = `
        <div class="p-6 text-center text-slate-500 text-xs">
          <p class="font-medium text-slate-700">No se encontraron diagramas</p>
          <p class="mt-1">Intente con otro término de búsqueda</p>
        </div>
      `;
      return;
    }

    const groups = {};
    filtered.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });

    let html = '';
    for (const [categoryName, items] of Object.entries(groups)) {
      html += `
        <div class="mb-4">
          <div class="px-2.5 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>${categoryName}</span>
            <span class="text-[10px] text-slate-400 font-mono">${items.length}</span>
          </div>
          <div class="space-y-0.5 mt-1">
      `;

      items.forEach(d => {
        const isActive = d.id === DIAGRAMS[state.currentIndex].id;
        const isLoaded = state.fileStatusMap[d.id];

        const activeClass = isActive
          ? 'bg-blue-50/80 text-blue-950 border-l-2 border-blue-800 font-semibold shadow-xs'
          : 'text-slate-700 hover:bg-slate-100/70 border-l-2 border-transparent';

        const formatTag = d.primaryFile.endsWith('.png') ? 'PNG' : 'SVG';

        const statusBadge = isLoaded
          ? `<span class="inline-flex items-center text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
               <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1"></span>
               ${formatTag}
             </span>`
          : `<span class="inline-flex items-center text-[10px] font-medium text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
               <span class="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1"></span>
               Pendiente
             </span>`;

        html += `
          <button 
            type="button" 
            data-diagram-id="${d.id}"
            class="sidebar-item w-full text-left px-2.5 py-2 rounded-r transition-colors flex items-center justify-between text-xs group ${activeClass}">
            <div class="flex items-center space-x-2.5 overflow-hidden">
              <span class="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded text-[11px] font-mono font-medium ${
                isActive ? 'bg-blue-800 text-white' : 'bg-slate-200 text-slate-700 group-hover:bg-slate-300'
              }">
                ${d.id}
              </span>
              <div class="truncate">
                <p class="truncate leading-tight">${d.title}</p>
                <p class="text-[10px] text-slate-500 font-mono truncate mt-0.5">${d.primaryFile}</p>
              </div>
            </div>
            <div class="flex-shrink-0 ml-2">
              ${statusBadge}
            </div>
          </button>
        `;
      });

      html += `
          </div>
        </div>
      `;
    }

    dom.diagramList.innerHTML = html;

    dom.diagramList.querySelectorAll('.sidebar-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-diagram-id'), 10);
        const idx = DIAGRAMS.findIndex(d => d.id === id);
        if (idx !== -1) {
          selectDiagram(idx);
          if (window.innerWidth < 1024) toggleSidebar(false);
        }
      });
    });
  }

  // ============================================================================
  // 6. RENDERIZADO FLUIDO (SVG Y PNG)
  // ============================================================================
  async function selectDiagram(index) {
    if (index < 0 || index >= DIAGRAMS.length) return;
    state.currentIndex = index;
    const diagram = DIAGRAMS[index];

    if (dom.headerTitle) dom.headerTitle.textContent = `${diagram.id}. ${diagram.title}`;
    if (dom.headerCategory) dom.headerCategory.textContent = `${diagram.category} • ${diagram.viewType}`;
    if (dom.currentDiagramBadge) {
      dom.currentDiagramBadge.textContent = `${diagram.id} de ${DIAGRAMS.length}`;
    }

    updatePresenterNotes(diagram);

    if (dom.btnPrev) dom.btnPrev.disabled = index === 0;
    if (dom.btnNext) dom.btnNext.disabled = index === DIAGRAMS.length - 1;

    renderSidebar();

    await loadDiagramContent(diagram);
  }

  async function loadDiagramContent(diagram) {
    showLoader(true);
    dom.contentContainer.innerHTML = '';
    resetTransform();

    const resolved = await resolveFileForDiagram(diagram);

    if (!resolved) {
      state.fileStatusMap[diagram.id] = false;
      renderFallbackCard(diagram);
      showLoader(false);
      return;
    }

    state.fileStatusMap[diagram.id] = true;

    try {
      // Si el archivo es PNG (como el 01-bpmn.png)
      if (resolved.isPng) {
        injectPngImage(resolved.path, diagram);
        showLoader(false);
        return;
      }

      // Si el archivo es SVG
      let svgText = null;
      try {
        const res = await fetch(resolved.path, { cache: 'no-cache' });
        if (res.ok) {
          const t = await res.text();
          if (t.includes('<svg') && !t.includes('<!DOCTYPE html>')) {
            svgText = t;
          }
        }
      } catch (e) {
        // Fallback a objeto
      }

      if (svgText) {
        injectCleanSvg(svgText, diagram);
      } else {
        injectObjectSvg(resolved.path, diagram);
      }
    } catch (err) {
      console.warn(`Error al renderizar ${diagram.title}:`, err);
      renderFallbackCard(diagram);
    } finally {
      showLoader(false);
    }
  }

  /**
   * Renderizado de imagen PNG (BPMN) con soporte de zoom fluido y scroll libre
   */
  function injectPngImage(imagePath, diagram) {
    const wrapper = document.createElement('div');
    wrapper.className = 'image-wrapper';

    const img = new Image();
    img.src = imagePath;
    img.alt = diagram.title;
    img.className = 'diagram-render-img';
    img.id = `rendered-diagram-${diagram.id}`;

    img.onload = () => {
      // Ajustar automáticamente al visor respetando resolución nativa
      setTimeout(() => fitToContainer(), 40);
    };

    img.onerror = () => {
      renderFallbackCard(diagram);
    };

    wrapper.appendChild(img);
    dom.contentContainer.appendChild(wrapper);
  }

  /**
   * Renderizado de SVG garantizando viewBox y preserveAspectRatio
   */
  function injectCleanSvg(svgText, diagram) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');
    const svgEl = doc.querySelector('svg');

    if (!svgEl) {
      renderFallbackCard(diagram);
      return;
    }

    const attrW = parseFloat(svgEl.getAttribute('width')) || 0;
    const attrH = parseFloat(svgEl.getAttribute('height')) || 0;
    const existingViewBox = svgEl.getAttribute('viewBox');

    if (!existingViewBox && attrW > 0 && attrH > 0) {
      svgEl.setAttribute('viewBox', `0 0 ${attrW} ${attrH}`);
    } else if (!existingViewBox) {
      svgEl.setAttribute('viewBox', '0 0 1600 1000');
    }

    svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svgEl.removeAttribute('width');
    svgEl.removeAttribute('height');

    const wrapper = document.createElement('div');
    wrapper.className = 'svg-wrapper';

    let vbWidth = 1600;
    let vbHeight = 1000;
    const vbMatch = (svgEl.getAttribute('viewBox') || '').match(/[\d.]+/g);
    if (vbMatch && vbMatch.length >= 4) {
      vbWidth = parseFloat(vbMatch[2]);
      vbHeight = parseFloat(vbMatch[3]);
    }

    svgEl.style.width = `${vbWidth}px`;
    svgEl.style.height = `${vbHeight}px`;
    svgEl.style.display = 'block';

    wrapper.appendChild(svgEl);
    dom.contentContainer.appendChild(wrapper);

    setTimeout(() => {
      fitToContainer();
    }, 40);
  }

  function injectObjectSvg(filePath, diagram) {
    const wrapper = document.createElement('div');
    wrapper.className = 'svg-wrapper';

    const obj = document.createElement('object');
    obj.setAttribute('type', 'image/svg+xml');
    obj.setAttribute('data', filePath);
    obj.style.width = '1600px';
    obj.style.height = '1000px';
    obj.style.display = 'block';
    obj.style.pointerEvents = 'none';

    obj.onload = () => {
      setTimeout(() => fitToContainer(), 60);
    };
    obj.onerror = () => {
      renderFallbackCard(diagram);
    };

    wrapper.appendChild(obj);
    dom.contentContainer.appendChild(wrapper);
  }

  // ============================================================================
  // 7. TARJETA FALLBACK
  // ============================================================================
  function renderFallbackCard(diagram) {
    const requiredMessage = `⚠️ Archivo [${diagram.primaryFile}] pendiente de integración. Coloque el archivo en assets/svgs/`;

    dom.contentContainer.innerHTML = `
      <div class="fallback-card p-6 sm:p-8 text-center text-slate-800">
        <div class="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 text-amber-900 border border-amber-300 rounded text-xs font-semibold mb-4">
          <svg class="w-4 h-4 text-amber-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <span>${requiredMessage}</span>
        </div>

        <h3 class="text-xl font-bold text-slate-900 tracking-tight">
          ${diagram.title}
        </h3>
        <p class="text-xs text-slate-500 font-mono mt-1">
          ${diagram.viewType}
        </p>

        <p class="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mt-3 leading-relaxed">
          ${diagram.shortDesc}
        </p>

        <div class="mt-5 p-3 bg-slate-50 rounded border border-slate-200 text-left text-xs max-w-sm mx-auto">
          <span class="text-slate-500 block font-medium text-[11px]">Ubicación esperada en el proyecto:</span>
          <code class="block font-mono text-slate-800 text-[11px] mt-1 bg-white p-1.5 rounded border border-slate-200 select-all">
            OGTI-DSI/assets/svgs/${diagram.primaryFile}
          </code>
        </div>

        <div class="mt-5">
          <button 
            type="button" 
            id="btn-retry-check"
            class="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded text-xs transition-colors inline-flex items-center space-x-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span>Reintentar Comprobación</span>
          </button>
        </div>
      </div>
    `;

    const retryBtn = document.getElementById('btn-retry-check');
    if (retryBtn) {
      retryBtn.addEventListener('click', async () => {
        showLoader(true);
        await preloadFileStatuses();
        renderSidebar();
        loadDiagramContent(diagram);
      });
    }

    state.scale = 1;
    state.panX = 0;
    state.panY = 0;
    applyTransform();
  }

  function showLoader(show) {
    if (dom.loaderSpinner) {
      dom.loaderSpinner.classList.toggle('hidden', !show);
    }
  }

  // ============================================================================
  // 8. MOTOR DE INTERACCIÓN (PAN & ZOOM FLUIDO)
  // ============================================================================
  function bindEvents() {
    if (dom.zoomInBtn) dom.zoomInBtn.addEventListener('click', () => zoomByStep(1.25));
    if (dom.zoomOutBtn) dom.zoomOutBtn.addEventListener('click', () => zoomByStep(0.8));
    if (dom.zoomResetBtn) dom.zoomResetBtn.addEventListener('click', resetTransform);
    if (dom.zoomFitBtn) dom.zoomFitBtn.addEventListener('click', fitToContainer);
    if (dom.fullscreenBtn) dom.fullscreenBtn.addEventListener('click', toggleFullscreen);

    if (dom.btnPrev) dom.btnPrev.addEventListener('click', () => selectDiagram(state.currentIndex - 1));
    if (dom.btnNext) dom.btnNext.addEventListener('click', () => selectDiagram(state.currentIndex + 1));

    if (dom.bgWhiteBtn) dom.bgWhiteBtn.addEventListener('click', () => setCanvasBg('white'));
    if (dom.bgGridBtn) dom.bgGridBtn.addEventListener('click', () => setCanvasBg('grid'));
    if (dom.bgDarkBtn) dom.bgDarkBtn.addEventListener('click', () => setCanvasBg('dark'));

    if (dom.sidebarToggleBtn) dom.sidebarToggleBtn.addEventListener('click', () => toggleSidebar());
    if (dom.sidebarBackdrop) dom.sidebarBackdrop.addEventListener('click', () => toggleSidebar(false));

    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', e => {
        state.searchQuery = e.target.value;
        renderSidebar();
      });
    }

    if (dom.toggleNotesBtn) dom.toggleNotesBtn.addEventListener('click', () => toggleNotes());
    if (dom.closeNotesBtn) dom.closeNotesBtn.addEventListener('click', () => toggleNotes(false));

    if (dom.btnOpenTeam) dom.btnOpenTeam.addEventListener('click', () => toggleTeamModal(true));
    if (dom.btnCloseTeam) dom.btnCloseTeam.addEventListener('click', () => toggleTeamModal(false));
    if (dom.teamModal) {
      dom.teamModal.addEventListener('click', e => {
        if (e.target === dom.teamModal) toggleTeamModal(false);
      });
    }

    if (dom.btnOpenShortcuts) dom.btnOpenShortcuts.addEventListener('click', () => toggleShortcutsModal(true));
    if (dom.btnCloseShortcuts) dom.btnCloseShortcuts.addEventListener('click', () => toggleShortcutsModal(false));
    if (dom.shortcutsModal) {
      dom.shortcutsModal.addEventListener('click', e => {
        if (e.target === dom.shortcutsModal) toggleShortcutsModal(false);
      });
    }

    if (dom.btnTimerToggle) dom.btnTimerToggle.addEventListener('click', toggleTimer);
    if (dom.btnTimerReset) dom.btnTimerReset.addEventListener('click', resetTimer);

    if (dom.viewport) {
      dom.viewport.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

      dom.viewport.addEventListener('wheel', onWheel, { passive: false });

      dom.viewport.addEventListener('touchstart', onTouchStart, { passive: false });
      dom.viewport.addEventListener('touchmove', onTouchMove, { passive: false });
      dom.viewport.addEventListener('touchend', onTouchEnd);
    }
  }

  function applyTransform() {
    if (!dom.transformLayer) return;
    dom.transformLayer.style.transform = `matrix(${state.scale}, 0, 0, ${state.scale}, ${state.panX}, ${state.panY})`;
    if (dom.zoomValueText) {
      dom.zoomValueText.textContent = `${Math.round(state.scale * 100)}%`;
    }
  }

  function resetTransform() {
    state.scale = 1;
    state.panX = 0;
    state.panY = 0;
    applyTransform();
  }

  function fitToContainer() {
    if (!dom.viewport || !dom.contentContainer) return;
    const content = dom.contentContainer.querySelector('svg, img, object, .fallback-card');
    if (!content) return;

    const vpRect = dom.viewport.getBoundingClientRect();
    const cRect = content.getBoundingClientRect();

    if (cRect.width === 0 || cRect.height === 0) {
      resetTransform();
      return;
    }

    const naturalW = content.naturalWidth || (cRect.width / state.scale);
    const naturalH = content.naturalHeight || (cRect.height / state.scale);

    const scaleX = (vpRect.width * 0.90) / naturalW;
    const scaleY = (vpRect.height * 0.90) / naturalH;
    const targetScale = Math.min(scaleX, scaleY);

    state.scale = Math.min(Math.max(targetScale, 0.05), 3.0);
    state.panX = (vpRect.width - naturalW * state.scale) / 2;
    state.panY = (vpRect.height - naturalH * state.scale) / 2;

    applyTransform();
  }

  function zoomByStep(factor) {
    const newScale = Math.min(Math.max(state.scale * factor, state.minScale), state.maxScale);
    if (!dom.viewport) return;
    const rect = dom.viewport.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    state.panX = cx - (cx - state.panX) * (newScale / state.scale);
    state.panY = cy - (cy - state.panY) * (newScale / state.scale);
    state.scale = newScale;
    applyTransform();
  }

  function onMouseDown(e) {
    if (e.button !== 0 && e.button !== 1) return;
    state.isPanning = true;
    state.startX = e.clientX - state.panX;
    state.startY = e.clientY - state.panY;
    if (dom.viewport) dom.viewport.classList.add('is-panning');
  }

  function onMouseMove(e) {
    if (!state.isPanning) return;
    e.preventDefault();
    state.panX = e.clientX - state.startX;
    state.panY = e.clientY - state.startY;
    applyTransform();
  }

  function onMouseUp() {
    if (state.isPanning) {
      state.isPanning = false;
      if (dom.viewport) dom.viewport.classList.remove('is-panning');
    }
  }

  function onWheel(e) {
    e.preventDefault();
    const rect = dom.viewport.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const factor = e.deltaY < 0 ? 1.15 : 0.87;
    const newScale = Math.min(Math.max(state.scale * factor, state.minScale), state.maxScale);

    state.panX = mouseX - (mouseX - state.panX) * (newScale / state.scale);
    state.panY = mouseY - (mouseY - state.panY) * (newScale / state.scale);
    state.scale = newScale;

    applyTransform();
  }

  function onTouchStart(e) {
    if (e.touches.length === 1) {
      state.isPanning = true;
      state.startX = e.touches[0].clientX - state.panX;
      state.startY = e.touches[0].clientY - state.panY;
    } else if (e.touches.length === 2) {
      state.isPanning = false;
      state.isPinching = true;
      state.initialPinchDistance = getTouchDistance(e.touches);
      state.initialPinchScale = state.scale;
    }
  }

  function onTouchMove(e) {
    e.preventDefault();
    if (state.isPanning && e.touches.length === 1) {
      state.panX = e.touches[0].clientX - state.startX;
      state.panY = e.touches[0].clientY - state.startY;
      applyTransform();
    } else if (state.isPinching && e.touches.length === 2) {
      const dist = getTouchDistance(e.touches);
      const factor = dist / state.initialPinchDistance;
      const newScale = Math.min(Math.max(state.initialPinchScale * factor, state.minScale), state.maxScale);

      const rect = dom.viewport.getBoundingClientRect();
      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
      const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;

      state.panX = midX - (midX - state.panX) * (newScale / state.scale);
      state.panY = midY - (midY - state.panY) * (newScale / state.scale);
      state.scale = newScale;
      applyTransform();
    }
  }

  function onTouchEnd() {
    state.isPanning = false;
    state.isPinching = false;
  }

  function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // ============================================================================
  // 9. FONDOS DE LIENZO Y FULLSCREEN
  // ============================================================================
  function setCanvasBg(theme) {
    state.canvasBg = theme;
    if (!dom.viewport) return;
    dom.viewport.classList.remove('canvas-bg-white', 'canvas-bg-grid', 'canvas-bg-dark');

    if (theme === 'white') dom.viewport.classList.add('canvas-bg-white');
    if (theme === 'grid') dom.viewport.classList.add('canvas-bg-grid');
    if (theme === 'dark') dom.viewport.classList.add('canvas-bg-dark');

    [dom.bgWhiteBtn, dom.bgGridBtn, dom.bgDarkBtn].forEach(btn => {
      if (btn) btn.classList.remove('border-slate-800', 'bg-slate-100');
    });
    if (theme === 'white' && dom.bgWhiteBtn) dom.bgWhiteBtn.classList.add('border-slate-800');
    if (theme === 'grid' && dom.bgGridBtn) dom.bgGridBtn.classList.add('border-slate-800');
    if (theme === 'dark' && dom.bgDarkBtn) dom.bgDarkBtn.classList.add('border-slate-800');
  }

  function toggleFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
  }

  function toggleSidebar(forceState) {
    state.sidebarOpen = typeof forceState === 'boolean' ? forceState : !state.sidebarOpen;
    if (dom.sidebar) {
      if (state.sidebarOpen) {
        dom.sidebar.classList.remove('-translate-x-full');
        if (dom.sidebarBackdrop) dom.sidebarBackdrop.classList.remove('hidden');
      } else {
        dom.sidebar.classList.add('-translate-x-full');
        if (dom.sidebarBackdrop) dom.sidebarBackdrop.classList.add('hidden');
      }
    }
  }

  function toggleNotes(forceState) {
    state.notesOpen = typeof forceState === 'boolean' ? forceState : !state.notesOpen;
    if (dom.notesDrawer) {
      dom.notesDrawer.classList.toggle('translate-x-full', !state.notesOpen);
    }
  }

  function updatePresenterNotes(diagram) {
    if (dom.notesTitle) dom.notesTitle.textContent = `${diagram.id}. ${diagram.title}`;
    if (dom.notesViewType) dom.notesViewType.textContent = `${diagram.category} • ${diagram.viewType}`;
    if (dom.notesDesc) dom.notesDesc.textContent = diagram.shortDesc;

    if (dom.notesList) {
      dom.notesList.innerHTML = diagram.talkingPoints
        .map(
          point => `
          <li class="flex items-start space-x-2 text-xs text-slate-700">
            <span class="text-blue-700 font-bold">•</span>
            <span>${point}</span>
          </li>
        `
        )
        .join('');
    }
  }

  // ============================================================================
  // 10. CRONÓMETRO DE EXPOSICIÓN (10-15 MINUTOS)
  // ============================================================================
  function toggleTimer() {
    state.timerRunning = !state.timerRunning;
    if (state.timerRunning) {
      state.timerInterval = setInterval(() => {
        state.timerSeconds++;
        updateTimerUI();
      }, 1000);
      if (dom.btnTimerToggle) dom.btnTimerToggle.textContent = 'Pausar';
    } else {
      clearInterval(state.timerInterval);
      if (dom.btnTimerToggle) dom.btnTimerToggle.textContent = 'Iniciar';
    }
  }

  function resetTimer() {
    state.timerRunning = false;
    clearInterval(state.timerInterval);
    state.timerSeconds = 0;
    updateTimerUI();
    if (dom.btnTimerToggle) dom.btnTimerToggle.textContent = 'Iniciar';
  }

  function updateTimerUI() {
    if (!dom.timerDisplay) return;
    const mins = Math.floor(state.timerSeconds / 60);
    const secs = state.timerSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    dom.timerDisplay.textContent = formatted;

    dom.timerDisplay.classList.remove('text-slate-900', 'text-amber-700', 'text-red-700');
    if (mins < 10) {
      dom.timerDisplay.classList.add('text-slate-900');
    } else if (mins < 13) {
      dom.timerDisplay.classList.add('text-amber-700');
    } else {
      dom.timerDisplay.classList.add('text-red-700');
    }
  }

  // ============================================================================
  // 11. MODALES
  // ============================================================================
  function toggleTeamModal(show) {
    state.teamModalOpen = typeof show === 'boolean' ? show : !state.teamModalOpen;
    if (dom.teamModal) dom.teamModal.classList.toggle('hidden', !state.teamModalOpen);
  }

  function toggleShortcutsModal(show) {
    state.shortcutsModalOpen = typeof show === 'boolean' ? show : !state.shortcutsModalOpen;
    if (dom.shortcutsModal) dom.shortcutsModal.classList.toggle('hidden', !state.shortcutsModalOpen);
  }

  // ============================================================================
  // 12. ATAJOS DE TECLADO
  // ============================================================================
  function bindKeyboard() {
    window.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          selectDiagram(state.currentIndex + 1);
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          selectDiagram(state.currentIndex - 1);
          break;

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          const targetIndex = parseInt(e.key, 10) - 1;
          if (targetIndex < DIAGRAMS.length) {
            e.preventDefault();
            selectDiagram(targetIndex);
          }
          break;

        case '0':
          e.preventDefault();
          selectDiagram(9);
          break;

        case '+':
        case '=':
          e.preventDefault();
          zoomByStep(1.2);
          break;
        case '-':
        case '_':
          e.preventDefault();
          zoomByStep(0.8);
          break;
        case 'r':
        case 'R':
        case 'Home':
          e.preventDefault();
          resetTransform();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;

        case 'n':
        case 'N':
          e.preventDefault();
          toggleNotes();
          break;
        case 't':
        case 'T':
          e.preventDefault();
          toggleTimer();
          break;
        case 's':
        case 'S':
          e.preventDefault();
          toggleSidebar();
          break;
        case '?':
        case 'h':
        case 'H':
          e.preventDefault();
          toggleShortcutsModal();
          break;
        case 'Escape':
          toggleTeamModal(false);
          toggleShortcutsModal(false);
          toggleNotes(false);
          break;
      }
    });
  }

  window.SanMarcosViewer = {
    selectDiagram,
    zoomIn: () => zoomByStep(1.25),
    zoomOut: () => zoomByStep(0.8),
    resetView: resetTransform,
    fitView: fitToContainer,
    toggleFullscreen,
    getDiagrams: () => DIAGRAMS,
    getTeam: () => TEAM_MEMBERS
  };
})();
