<template>
<div class="landing">
  <nav class="navbar navbar-expand-lg fixed-top p-3">
    <div class="container p-0">
      <router-link to="/" class="nav-item nav-link">
          <img class="mx-auto logo" src="@/assets/logo.png" height="50px" />
      </router-link>
    </div>
  </nav>
  <div class="slide-one text-center">
    <h1>SOME RELEVANT TEXT</h1>
  </div>
  <div class="slide-two text-center">
    <h2> slide 2</h2>
  </div>
  <div class="slide-three text-center">
    <h2>Slide 3</h2>
    <div class="container mt-3">
      <div class="row mt-3">
        <div class="col-md-4 col-sm-6 mt-3">
          <div class="topic-container">
            <h3> topic 1</h3>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mt-3">
          <div class="topic-container">
            <h3> topic 2</h3>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mt-3">
          <div class="topic-container">
            <h3>topic 3</h3>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mt-3">
          <div class="topic-container">
            <h3> topic 4</h3>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mt-3">
          <div class="topic-container">
            <h3>topic 5</h3>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mt-3">
          <div class="topic-container">
            <h3> topic 6</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slide-four text-center">
    <h2>SLIDE 4</h2>
</div>
<div class="slide-five text-center">
    <h2>  SLIDE 4</h2>
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

<style scoped lang="scss">
// $primary-color: #7081b2;
// $secondary-color: #24377f;
  @keyframes grow-up {
      from {opacity:0; scale: 0%}
      to {opacity:1; scale: 100%}
  }
  @keyframes show-background{
      from {background: transparent;}
      to{ background-color: #7081b2;}
  }

  @keyframes logo-up {
      from { scale: 150%}
      to { scale: 100%;}
  }
  @keyframes topic-up {
      from { margin-left: 100%}
      to { margin-left: 0%}
  }
  .justify{

    text-align: justify;
  }
  .container{
    max-width: 1100px !important;
  }
  .logo{
    animation: logo-up linear both;
    animation-timeline: scroll(root);
    animation-range: 0 400px;
  }


h1 {
  font-size: 50px !important;
  text-transform: uppercase;
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
  


.landing {
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
}
.navbar{
  border-color: transparent !important;
  animation: show-background linear both;
  animation-timeline: scroll(root);
  animation-range: 0 400px;

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
  height: 830px;
  padding-top: 400px;
}
.slide-two, .slide-three, .slide-four, .slide-five, .slide-six, .slide-seven, .slide-eight {
  min-height: 600px;
  padding: 50px 0px 100px 0px;  
  border: 1px solid grey;
}
.slide-two{
  padding-top: 100px;

}
.slide-three{
  padding-top: 100px;

}
.topic-container{
  background-color:  rgba(112, 129, 178, 0.7);
  height: 350px;
  border-radius: 7%;
  padding: 1.5em 2em;
  view-timeline-name: --topic;
  view-timeline-axis: block;
  animation-name: topic-up;
  animation-timeline: --topic;
  animation-range: entry 0% cover 30%;
}
</style>
