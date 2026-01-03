// sga_menu_c.js
// Lógica del prototipo B del menú SGA

document.addEventListener('DOMContentLoaded', () => {
  const menuCards = document.querySelectorAll('.menu-card');
  const quickChips = document.querySelectorAll('.chip');
  const cardItems = document.querySelectorAll('.menu-card__item');
  const panelBienvenida = document.getElementById('panel-bienvenida');
  const panelPlaceholder = document.getElementById('panel-placeholder');
  const panelTitle = document.getElementById('panel-title');
  const panelDescription = document.getElementById('panel-description');

  // Apertura/cierre de tarjetas del menú (comportamiento tipo acordeón)
  menuCards.forEach(card => {
    const header = card.querySelector('.menu-card__header');
    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('menu-card--open');

      // Cerrar todas
      menuCards.forEach(c => c.classList.remove('menu-card--open'));

      // Abrir solo la actual si estaba cerrada
      if (!isOpen) {
        card.classList.add('menu-card--open');
      }
    });
  });

  // Abrir la primera tarjeta por defecto
  const firstCard = document.querySelector('.menu-card');
  if (firstCard) {
    firstCard.classList.add('menu-card--open');
  }

  // Función auxiliar para mostrar contenido simulado
  function mostrarSeccion(target) {
    if (!target) return;

    if (panelBienvenida) {
      panelBienvenida.hidden = true;
    }
    if (panelPlaceholder) {
      panelPlaceholder.hidden = false;
    }

    const titles = {
      'horario': 'Horarios del estudiante',
      'notas': 'Consulta de notas',
      'matricula': 'Matrícula / inscripción',
      'datos-personales': 'Datos personales',
      'historial': 'Historial académico',
      'certificados': 'Certificados emitidos',
      'solicitudes': 'Solicitudes en línea',
      'documentos': 'Gestión de documentos',
      'pagos': 'Pagos y estados de cuenta',
      'manual': 'Manual de usuario',
      'notificaciones': 'Notificaciones del sistema',
      'comunicados': 'Comunicados institucionales',
      'perfil': 'Perfil de usuario',
      'seguridad': 'Seguridad y acceso'
    };

    const descriptions = {
      'horario': 'En esta sección el estudiante visualiza su horario de clases organizado por día, aula y bloque.',
      'notas': 'Aquí se muestran las calificaciones por periodo académico, asignatura y tipo de evaluación.',
      'matricula': 'Flujo guiado para realizar el proceso de matrícula o inscripción en línea.',
      'datos-personales': 'Formulario con datos personales, contacto y domicilio del estudiante.',
      'historial': 'Resumen histórico de las asignaturas cursadas, aprobadas y pendientes.',
      'certificados': 'Solicitud y descarga de certificados académicos disponibles para el estudiante.',
      'solicitudes': 'Módulo para enviar solicitudes académicas o administrativas a la institución.',
      'documentos': 'Gestor de documentos adjuntos y archivos generados por el sistema.',
      'pagos': 'Visualización de rubros, pagos realizados, comprobantes y saldos pendientes.',
      'manual': 'Acceso al manual de usuario del SGA en formato digital.',
      'notificaciones': 'Listado de notificaciones relevantes relacionadas con el proceso académico.',
      'comunicados': 'Publicación de comunicados oficiales emitidos por la universidad o la facultad.',
      'perfil': 'Edición de información de perfil visible, correo institucional y preferencias básicas.',
      'seguridad': 'Opciones para cambio de contraseña y revisión de actividad de inicio de sesión.'
    };

    panelTitle.textContent = titles[target] || 'Sección seleccionada';
    panelDescription.textContent =
      descriptions[target] ||
      'Contenido simulado de la sección seleccionada. Aquí se visualizaría el módulo correspondiente del SGA.';
  }

  // Chips de accesos rápidos
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const target = chip.getAttribute('data-target');
      mostrarSeccion(target);
    });
  });

  // Items internos de las tarjetas
  cardItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      mostrarSeccion(target);
    });
  });
});

