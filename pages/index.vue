<template>
<div class="landing p-3">
  <nav class="navbar navbar-expand-lg fixed-top p-3 bg-white">
    <div class="container">
      <a href="#inicio" class="nav-item nav-link">
          <img class="mx-auto logo" alt="logo" src="@/assets/logo.png" height="50px" />
      </a>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link"  href="#funcionalidad-clave">Funcionalidad Clave</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#seguridad-cumplimiento">Seguridad y cumplimiento</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#por-que-lester">¿Por qué elegir Lester?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#on-premises">On-premises</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="page-2 nav-link" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="slide-one text-center" id="inicio">
    <img class="mx-auto mb-3" src="@/assets/logo.png" height="200px" />
    <h1>Convierte cada llamada en evidencia:<br/>transcribe, detecta y reporta en tiempo real</h1>
    <p>Nuestra solución transforma las llamadas telefónicas en texto preciso y buscable, permitiendo a entidades de banca privada detectar actividades sospechosas, crear alertas automatizadas y cumplir con las obligaciones regulatorias frente a la CNMV.</p>
    <p>Una herramienta diseñada para reforzar la transparencia, prevenir el fraude y garantizar el cumplimiento normativo con eficiencia y precisión.</p>
    <img class="portada" src="@/assets/portada.jpg" width="100%" />  
  </div>
  <div class="slide-two text-center" id="servicios">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 ms-auto p-md-3 p-sm-1">  
        <h2>Control absoluto</h2>
        <p class="px-3">LesterBot es una solución tecnológica avanzada diseñada para entidades de banca privada, asesoramiento financiero y gestión patrimonial que requieren un control absoluto sobre sus comunicaciones y su trazabilidad completa conforme a las normativas más exigentes.</p>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 me-auto p-md-3 p-sm-1">  
        <h2>Máxima confidencialidad</h2>
        <p class="px-3">Desplegado íntegramente en entornos on-premise, LesterBot ofrece máxima confidencialidad, cumplimiento automatizado y soberanía tecnológica en una única herramienta integral.</p>
      </div> 
    </div>
  </div>
  <div class="container py-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col d-flex">
        <div class="topic-card w-100">
          <div>
            <div class="topic-icon"><i class="fas fa-cubes"></i></div>
            <div class="topic-title">Plataforma Modular</div>
            <div class="topic-text">
              Es una plataforma modular para la transcripción, búsqueda y archivo de comunicaciones clave dentro de la propia entidad y de la entidad con sus clientes—cumpliendo con MiFID II, DORA, GDPR y la LVMSI.
            </div>
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="topic-card w-100">
          <div>
            <div class="topic-icon"><i class="fas fa-network-wired"></i></div>
            <div class="topic-title">Arquitectura Local</div>
            <div class="topic-text">
              A través de una arquitectura local, permite a la entidad registrar conversaciones telefónicas, por correo electrónico y por correo web, e indexarlas, conservarlas y recuperarlas para aportarlas   con precisión y rapidez a auditorías e inspecciones, utilizarlas como pruebas en procedimientos judiciales. La entidad ve reforzada su política de cumplimiento sin ceder el control externo de sus datos.
            </div>
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="topic-card w-100">
          <div>
            <div class="topic-icon"><i class="fas fa-puzzle-piece"></i></div>
            <div class="topic-title">Diseño Adaptable</div>
            <div class="topic-text">
              Su diseño adaptable permite integraciones personalizadas a los flujos documentales y reglas internas de la entidad, y su ajuste para los distintos tipos de clientes propios de los servicios de banca privada.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img class="portada" src="@/assets/call-center-2.jpg" allt="carcateristicas" width="100%" id="funcionalidad-clave"/>  
  <div class="slide-four p-5">
    <h2>Funcionalidad Clave</h2>
    <div class="row row-cols-1 row-cols-lg-4 row-cols-xl-5  g-4">
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-microphone fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Transcripción automática</h5>
            <p class="card-text">Transcripción automática multilingüe de llamadas telefónicas a texto. </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-list fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Indexación de comunicaciones</h5>
            <p class="card-text">Indexación de correos electrónicos, Teams, WhatsApp y más. Directorio inteligente de contactos y detección de llamadas externas.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-search fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Búsqueda semántica</h5>
            <p class="card-text">Búsqueda semántica basada en IA: por intención, no solo por palabra. Interfaz para consulta rápida en inspecciones y comités internos.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-hdd fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Copias de seguridad</h5>
            <p class="card-text">Copias de seguridad automáticas bajo control total del cliente garantizando la máxima seguridad de los datos.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-bell fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Alertas configurables</h5>
            <p class="card-text">Alertas configurables por riesgo, producto o término regulado que facilitan la supervisión normativa en tiempo real.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-calendar-alt fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Agrupación cronológica</h5>
            <p class="card-text">Agrupación cronológica por expediente (cliente, asesor, canal). Adaptabilidad al lenguaje y operativa propia de la entidad.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-file-export fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Exportación en formatos compatibles</h5>
            <p class="card-text">Genera un expediente STOR compatible con CNMV.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas  fa-address-book fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Directorio inteligente</h5>
            <p class="card-text">Directorio inteligente de contactos y detección de llamadas externas.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-display fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Interfaz</h5>
            <p class="card-text">Interfaz para consulta rápida en inspecciones y comités internos.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-cogs fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Adaptabilidad</h5>
            <p class="card-text">Adaptabilidad al lenguaje y operativa propia de la entidad.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slide-five text-center" id="seguridad-cumplimiento">
    <h2>Seguridad y cumplimiento</h2>
    <div class="layout-wrapper">
      <div class="triangle-wrapper">
        <div
          v-for="(label, index) in labels"
          :key="index"
          class="triangle-layer"
          :style="getLayerStyle(index)"
          >
            <i :class="`fas fa-${label.icon}`" />
        </div>
      </div>
      <div class="text-wrapper">
        <div
          v-for="(label, index) in labels"
          :key="index"
          :style="getTextStyle(index)"
          class="label"
        >   
          {{ label.title }} <small class="ms-2 p-0 mt-1"> {{ label.description }}</small>
        </div>
      </div>
    </div>
    <div class="layout-wrapper-2">
      <div class="text-wrapper-2">
        <span
          v-for="(label, index) in labels"
          :key="index"
          class="label-2"
        >   
        <i :class="`fas fa-${label.icon} me-3 mt-1` " />  {{ label.title }} <small class="ms-2 p-0 mt-1"> {{ label.description }}</small>
        </span>
      </div>
    </div>
  </div>
  <div class="slide-six text-center" id="por-que-lester">
    <h2> ¿Por qué elegir LesterBot?</h2>
    <div class="container">
      <div class=" feature-row">
        <div class="feature-text">
          <i class="fas fa-eye-slash feature-icon"></i>
          <h5>Discreción y trazabilidad</h5>
          <p>En banca privada, no son opcionales.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="feature-text">
          <i class="fas fa-unlink feature-icon"></i>
          <h5>Independencia</h5>
          <p>No dependes de terceros para demostrar cumplimiento.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="feature-text">
          <i class="fas fa-bolt feature-icon"></i>
          <h5>Ventaja operativa</h5>
          <p>Convierte una obligación normativa en una ventaja operativa.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="feature-text">
          <i class="fas fa-shield-alt feature-icon"></i>
          <h5>Protección integral</h5>
          <p>Protege a la entidad, al cliente y al asesor.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="feature-text">
          <i class="fas fa-layer-group feature-icon"></i>
          <h5>Integración completa</h5>
          <p>Integra tecnología, legalidad y control en una sola plataforma.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="col feature-text">
          <i class="fas fa-balance-scale feature-icon"></i>
          <h5>Diseño regulatorio</h5>
          <p>Diseñado pensando como lo haría un regulador, pero trabaja para ti.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="slide-seven text-center pt-0" > 
    <img class="portada mb-3" src="@/assets/on-premises-2.jpg" alt="on-premises" width="100%" id="on-premises"/>  
    <h2 class="mt-3">On-premises</h2>

<div class="container">
<p> LesterBot se instala íntegramente en servidores o dispositivos locales del cliente. Este enfoque garantiza que los datos nunca abandonan la red interna de la entidad, eliminando así riesgos asociados a la nube pública como fugas de información, accesos indebidos o dependencia de terceros.</p>
  <div class="row g-4">

    <!-- Fact 1 -->
    <div class="col-md-6 col-lg-4">
      <div class="p-4 fact-card h-100">
        <div class="fact-icon mb-3"><i class="fas fa-shield-halved"/></div>
        <h5 class="fact-header">Seguridad máxima</h5>
        <p class="fact-text">
          No hay terceros con acceso, ni siquiera el fabricante del software.
        </p>
      </div>
    </div>

    <!-- Fact 2 -->
    <div class="col-md-6 col-lg-4">
      <div class="p-4 fact-card h-100">
        <div class="fact-icon mb-3"><i class="fas fa-file-shield"/></div>
        <h5 class="fact-header">Cumplimiento reforzado</h5>
        <p class="fact-text">
          Se alinea con los principios de privacidad por diseño y por defecto del RGPD.
        </p>
      </div>
    </div>

    <!-- Fact 3 -->
    <div class="col-md-6 col-lg-4">
      <div class="p-4 fact-card h-100">
        <div class="fact-icon mb-3"><i class="fas fa-sliders"/></div>
        <h5 class="fact-header">Control absoluto</h5>
        <p class="fact-text">
          El cliente decide cuándo se actualiza el sistema, qué se monitoriza y cómo se configura.
        </p>
      </div>
    </div>

    <!-- Fact 4 -->
    <div class="col-md-6 col-lg-6">
      <div class="p-4 fact-card h-100">
        <div class="fact-icon mb-3"><i class="fas fa-scale-balanced"/></div>
        <h5 class="fact-header">Aislamiento normativo</h5>
        <p class="fact-text">
          Ideal para entornos sometidos a auditoría legal, fiscal, penal o supervisión externa.
        </p>
      </div>
    </div>

    <!-- Fact 5 -->
    <div class="col-md-6 col-lg-6">
      <div class="p-4 fact-card h-100">
        <div class="fact-icon mb-3"><i class="fas fa-plug-circle-bolt"/></div>
        <h5 class="fact-header">Independencia operativa</h5>
        <p class="fact-text">
          Incluso sin acceso a Internet, LesterBot sigue funcionando de forma autónoma.
        </p>
      </div>
    </div>

  </div>
</div>




  </div>
  <div class="slide-eight text-center" id="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="container">
      <p>Respondemos las principales dudas de nuestros clientes potenciales, sobre todo para entornos regulados</p>
      <div class="accordion" id="faqAccordion">
        <!-- Pregunta 1 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
              ¿Necesito conexión a Internet para usar LesterBot?
            </button>
          </h3>
          <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. LesterBot opera completamente en local (on-premise). No requiere nube ni envío de datos a terceros.
            </div>
          </div>
        </div>

        <!-- Pregunta 2 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
              ¿Es compatible con otros sistemas de grabación o CRM?
            </button>
          </h3>
          <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. Se puede adaptar mediante conectores a CRM internos, gestores documentales o plataformas de call center.
            </div>
          </div>
        </div>

        <!-- Pregunta 3 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
              ¿Podemos revisar solo llamadas del equipo comercial?
            </button>
          </h3>
          <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. Puede configurarse por roles, equipos o productos, ajustando qué comunicaciones se monitorizan y archivan.
            </div>
          </div>
        </div>

        <!-- Pregunta 4 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading4">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
              ¿Quién puede acceder a la información guardada?
            </button>
          </h3>
          <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Solo el personal autorizado por la entidad. Todos los accesos quedan registrados y auditados.
            </div>
          </div>
        </div>

        <!-- Pregunta 5 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading5">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
              ¿Qué pasa si cambia la normativa?
            </button>
          </h3>
          <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              LesterBot se actualiza periódicamente y permite integrar nuevas exigencias normativas sin cambiar el entorno de trabajo.
            </div>
          </div>
        </div>

        <!-- Pregunta 6 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading6">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
              ¿Está preparado para los requisitos de ciberresiliencia de DORA?
            </button>
          </h3>
          <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. Su arquitectura on-premise permite cumplir con los requisitos de soberanía, aislamiento y respuesta exigidos por DORA.
            </div>
          </div>
        </div>

        <!-- Pregunta 7 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading7">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
              ¿Puede el sistema funcionar en un entorno multientidad o multicanal?
            </button>
          </h3>
          <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. LesterBot permite crear entornos segmentados, independientes o jerarquizados para estructuras con múltiples marcas o divisiones.
            </div>
          </div>
        </div>

        <!-- Pregunta 8 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading8">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
              ¿Qué garantías ofrece ante una inspección de CNMV o revisión judicial?
            </button>
          </h3>
          <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              El sistema permite entregar expedientes completos con marca de tiempo, conservación legal y sin manipulación. Esto reduce riesgo reputacional y jurídico.
            </div>
          </div>
        </div>

        <!-- Pregunta 9 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading9">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
              ¿El sistema sirve para conservar pruebas en caso de reclamaciones o inspecciones?
            </button>
          </h3>
          <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. LesterBot permite exportar de forma rápida y estructurada la información necesaria para CNMV, auditoría interna o defensa legal.
            </div>
          </div>
        </div>

        <!-- Pregunta 10 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading10">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
              ¿Puedo limitar el acceso a las grabaciones por rol o por jerarquía interna?
            </button>
          </h3>
          <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. El sistema incorpora control por perfiles y trazabilidad de consulta según estándares jurídicos y auditoría.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slide-nine text-center" id="contacto">
    <h2>Contacto</h2>
  </div>
</div>
</template>

<script setup>
const icons = [
  'cloud',
  'lock',
  'cog',
  'user',
  'bell',
  'comment',
  'bolt'
]

const labels = [
  {
    icon: 'server',
    title: 'Instalación 100% local',
    description: 'Sin dependencia de la nube.'
  },
  {
    icon: 'shield-halved',
    title: 'Conservación de datos',
    description: 'Durante 5 a 7 años según tipología.'
  },
  {
    icon: 'user-shield',
    title: 'Control de accesos',
    description: 'Con roles y registro de actividad.'
  },
  {
    icon: 'clipboard-check',
    title: 'Sistema auditable',
    description: 'Con trazabilidad completa.'
  },
  {
    icon: 'shield',
    title: 'DORA',
    description: 'Compatible con las exigencias de ciber resiliencia bajo DORA.'
  },
  {
    icon: 'screwdriver-wrench',
    title: 'Actualizaciones del sistema',
    description: 'Supervisadas localmente por el equipo de IT de la entidad.'
  },
  {
    icon: 'user-lock',
    title: 'Privacidad',
    description: 'Entorno cerrado para blindar la confidencialidad de los datos del cliente.'
  }
];

const getLayerStyle = (index) => {
  const total = labels.length
  const h = 100 / total
  const top = index * h

  const x1Left = 50 - ((top) / 100) * 50
  const x1Right = 50 + ((top) / 100) * 50
  const x2Left = 50 - ((top + h) / 100) * 50
  const x2Right = 50 + ((top + h) / 100) * 50

  const clipPath = `polygon(${x1Left}% 0%, ${x1Right}% 0%, ${x2Right}% 100%, ${x2Left}% 100%)`

  return {
    position: 'absolute',
    top: `${top}%`,
    height: `${h}%`,
    width: '100%',
    clipPath,
    backgroundColor: '#7081b2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.4rem',
    borderBottom: '6px solid white'
  }
}

const getTextStyle = (index) => {
  const total = labels.length
  const h = 100 / total
  const top = index * h
  return {
    position: 'absolute',
    top: `${top}%`,
    height: `${h}%`,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px'
  }
}
</script>
<style scoped lang="scss">
// $primary-color: #7081b2;
// $secondary-color: #24377f;
  @keyframes grow-up {
      from {opacity:0; scale: 0%}
      to {opacity:1; scale: 100%}
  }
  @keyframes show-background{
      from {box-shadow: none;}
      to{ box-shadow: 0 0 10px  #7081b2;}
  }

  @keyframes logo-up {
      from { scale: 0%}
      to { scale: 100%;}
  }
  @keyframes topic-up {
      from { margin-left: 100%}
      to { margin-left: 0%}
  }
  @keyframes show-up {
      from {opacity:0; }
      to {opacity:1;}
  }
  .justify{
    text-align: justify;
  }
  .logo{
    animation: logo-up linear both;
    animation-timeline: scroll(root);
    animation-range: 0 400px;
  }


h1 {
  font-size: 50px !important;
  color: #7081b2;
  margin-bottom: 20px;
}
h2 {
  background:  #24377f;
  font-size: 2.8em;
  font-weight: 700 !important;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  view-timeline-name: --h2;
  view-timeline-axis: block;
  animation-name: grow-up;
  animation-timeline: --h2;
  animation-range: entry 25% cover 50%;
}

h3{
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 2em;

/*  border-width: 1px;
  border-style: dotted;
  border-image: linear-gradient(to right, rgba(23,0,148,1),  rgba(227,6,19,1)) 1;*/
}
p{
  font-size: 1.3em;
}
.navbar{
  margin: 0px !important;
  border: none !important;
  animation: show-background linear both;
}

.dropdown-item{
  color:white;
  background-color: transparent !important;
}
.dropdown-item:hover {
  background-color: transparent !important;
  font-weight: 700;
  color:white;
}
.dropdown-item.active {
  background-color: transparent !important;
  font-weight: 700; 
  color:black;
}
.slide-one{
  padding-top: 100px;
    p{
      margin-bottom: 1em;
      margin-inline: auto;
      font-size: 1.3em;
      max-width: 700px;
  }
  .portada{
    opacity: 0.9;
  }
}
.slide-two{
  padding-top: 50px;
  p{
    font-size: 1.3em;
  }  
}
.slide-four{
  opacity: 0;
  animation: show-up 1s ease forwards;
  animation-timeline: view() ;
  animation-range: entry 0% cover 70%;
  .col{
    margin-top: 100px;
  }
  .card {
    position: relative;
    background-color: #e8e8e8;
    border-radius: 10px;
    border-color: transparent;
  }
  .icon-position {
    position: absolute;
    top: -60px; 
    left: 50%;
    transform: translateX(-50%);
    color: #7081b2; 
  }
  .card-title {
    font-size: 18px;
    font-weight: bold;
  }
  .card-text {
    color: #6c757d;
  }
}
.slide-three, .slide-four, .slide-five, .slide-six, .slide-seven, .slide-eight, .slide-nine {
  min-height: 600px;
  padding: 100px 0px 50px 0px;  
}
.topic-container{
  background-color:  rgba(112, 129, 178, 0.7);
  height:400px;
  border-radius: 7%;
  padding: 1.5em 2em;
  view-timeline-name: --topic;
  view-timeline-axis: block;
  animation-name: topic-up;
  animation-timeline: --topic;
  animation-range: entry 0% cover 30%;
}
.topic-card {
  background-color:  rgba(112, 129, 178, 0.7);
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  view-timeline-name: --topic;
  view-timeline-axis: flex;
  animation-name: topic-up;
  animation-timeline: --topic;
  animation-range: entry 0% cover 30%;
}
.topic-icon {
  font-size: 40px;
  margin-bottom: 15px;
  color:#24377f;
}
.topic-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.topic-text {
  font-size: 18px;
}

.layout-wrapper {
  justify-content: center;
  gap: 16px;
  align-items: flex-start;
  height: 520px; /* Igual a la altura real del triángulo */
  @media(min-width:1435px){
      display:flex !important;
  }
  @media(max-width:1435px){
    display: none !important;
  }
  .triangle-wrapper {
    position: relative;
    width: 600px;
    aspect-ratio: 1 / 0.866;
    height: 520px; /* Fija altura para sincronizar */
  }
.text-wrapper {
  position: relative;
  min-width: 800px;
  height: 520px; /* Igual que triángulo para que top % funcione */
}
  .label {
    font-size: 1.4rem;
    color:#24377f;
    position: absolute; /* Ya aplicado en JS */
    width: 100%;
    display: flex;
    padding-left: 8px;
    small{
      color : grey;
    }
  }
}
.layout-wrapper-2 {
  justify-content: center;
  gap: 16px;
  align-items: flex-start;
  @media(max-width:1435px){
      display:flex !important;
  }
  @media(min-width:1435px){
    display: none !important;
  }
.text-wrapper-2{
  position: relative;
  height: 520px; 
}
.label-2 {
  font-size: 1.4rem;
  color:#24377f;
  display: flex;
  padding-left: 8px;
  margin: 40px 0px;
  small{
    color : grey;
  }
}
}
.slide-six{
 .feature-section {
      background-color: #f2f3f7;
      padding: 60px 20px;
      border-radius: 12px;
    }

    .feature-title {
      color: #24377f;
      font-weight: 600;
      text-align: center;
      margin-bottom: 40px;
    }

    .feature-row {
      margin: 30px 0px;
    }

    .feature-icon {
      font-size: 1.5rem;
      color: #24377f;
      text-align: center;
    }

    .feature-text h5 {
      margin: 0;
      font-weight: 600;
      color: #24377f;
    }

    .feature-text p {
      margin: 0;
      color: #555;
    }
}
.slide-seven{
      background-color: #e8e8e8; 
}
    .fact-card {
      background-color: white;
      border: 1px solid #dee2e6;
      border-radius: 0.5rem;
      transition: transform 0.2s ease;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    .fact-icon {
      font-size: 2rem;
      color: #7081b2;
    }
    .fact-header {
      font-weight: 600;
      color: #24377f;
    }
    .fact-text {
      color: #555;
    }

.accordion {
  h3> button{
    color:#7081b2 !important;
    font-size: 0.8em !important;
  }
  .accordion-body{
  text-align: left !important;
  font-size: 1.2em !important;
  }
}


</style>