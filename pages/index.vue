<template>
<div class="landing p-3">
  <nav class="navbar navbar-expand-lg fixed-top p-3 bg-white">
    <div class="container">
      <router-link to="/" class="nav-item nav-link">
          <img class="mx-auto logo" src="@/assets/logo.png" height="50px" />
      </router-link>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="page-1 nav-link"  href="#inicio">Nuestros Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="page-2 nav-link" href="#servicios">Quienes Somos</a>
        </li>
        <li class="nav-item">
          <a class="page-1 nav-link"  href="#nuestros-clientes">Nuestros Clientes</a>
        </li>
        <li class="nav-item">
          <a class="page-2 nav-link" href="#contact">Contacto</a>
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
  <img class="portada" src="@/assets/call-center.jpg" width="100%" />  
  <div class="slide-four p-5">
    <h2>Principales Características</h2>
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
      <!-- Bloque 10 -->
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
  <div class="slide-five text-center">
    <h2>Seguridad y cumplimiento</h2>

  <div class="layout-wrapper">
    <div class="triangle-wrapper border">
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="triangle-layer"
        :style="getLayerStyle(index)"
        >
          <i :class="`fas fa-${icon}`" />
      </div>
    </div>
    <div class="text-wrapper">
      <div
        v-for="(label, index) in labels"
        :key="index"
        :style="getTextStyle(index)"
          class="label"
      >{{ label.title }} <small class="ms-2 p-0 mt-1"> {{ label.description }}</small>
      </div>
    </div>
  </div>
  </div>
  <div class="slide-six text-center">
    <h2> SLIDE 4</h2>
  </div>
  <div class="slide-seven text-center">
    <h2>SLIDE 4</h2>
  </div>
  <div class="slide-eight text-center">
    <h2>SLIDE 4</h2>
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
  { title: 'Instalación 100% local', description: 'Sin dependencia de la nube.' },
  { title: 'Conservación de datos', description: 'Durante 5 a 7 años según tipología.' },
  { title: 'Control de accesos', description: 'Con roles y registro de actividad.' },
  { title: 'Sistema auditable', description: 'Compatible con las exigencias de ciberresiliencia bajo DORA' },
  { title: 'DORA', description: 'Alertas y recordatorios' },
  { title: 'Actualizaciones del sistema', description: 'Supervisadas localmente por el equipo de IT de la entidad.' },
  { title: 'Privacidad', description: 'Entorno cerrado para blindar la confidencialidad de los datos del cliente.' }
]

const getLayerStyle = (index) => {
  const total = icons.length
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

  /* Responsividad */
  @media (max-width: 768px) {
    .icon-position {
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

}
.slide-three, .slide-four, .slide-five, .slide-six, .slide-seven, .slide-eight {
  min-height: 600px;
  padding: 50px 0px 100px 0px;  
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
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: flex-start;
  position: relative;
}

.layout-wrapper {
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: flex-start;
  position: relative;

  /* Define una altura fija para que los textos se distribuyan bien */
  height: 260px; /* Igual a la altura real del triángulo */
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
  border: 1px solid red;
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
</style>