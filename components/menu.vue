<template>
<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/"><img src="@/assets/logo.png" height="40px" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="page-1 nav-link" :class="borderActiveClass1" href="/">Nuestros Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="page-2 nav-link" :class="borderActiveClass2" href="/quienes-somos">Quienes Somos</a>
        </li>
        <li class="nav-item">
          <a class="page-3 nav-link" :class="borderActiveClass3" href="/nuestros-clientes">Nuestros Clientes</a>
        </li>
        <li class="nav-item">
          <a class="page-4 nav-link" :class="borderActiveClass4" href="/contact">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
  const router = useRouter()
  const { currentRoute } = router
  const borderActiveClass1 = computed(() => {
    if ( currentRoute.value.name === 'index') {
        return 'page-1-active';
      } 
    }
  )
  const borderActiveClass2 = computed(() => {
    if ( currentRoute.value.name === 'quienes-somos') {
        return 'page-2-active';
      } 
    }
  )
  const borderActiveClass3 = computed(() => {
    if ( currentRoute.value.name === 'nuestros-clientes') {
        return 'page-3-active';
      } 
    }
  )
  const borderActiveClass4 = computed(() => {
    if ( currentRoute.value.name === 'contact') {
        return 'page-4-active';
      } 
    }
  )
</script>


<style lang="scss">
.navbar-expand-lg{
  height: 80px !important;
}
.navbar{
  background-color: white;
  box-shadow: 0 0 10px #cdcdcd;
  padding-bottom: 0px !important;
}
.nav-link{
  border-bottom: 3px solid transparent !important;
}
.page-1{
  &:hover{
    border-bottom: 3px solid #FF05DB !important;
  }  
}
.page-2{
  &:hover{
    border-bottom: 3px solid #17E6F6 !important;
  }
}
.page-3{
  &:hover{
    border-bottom: 3px solid #10FD08 !important;
  }
}
.page-4{
  &:hover{
    border-bottom: 3px solid #FFF403 !important;
  }
}
.page-1-active{
  border-bottom: 3px solid #FF05DB  !important;
}
.page-2-active{
    border-bottom: 3px solid #17E6F6  !important;
}
.page-3-active{

  border-bottom: 3px solid #10FD08  !important;
}
.page-4-active{
  border-bottom: 3px solid #FFF403  !important;
}

</style>