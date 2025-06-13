<template>
<div class="slide-eight text-center" id="contacto">
  <h2>Contacto</h2>
    <p>Solicita una demo o resuleve cualquier duda que tengas. Nos pondremos en contacto contigo.</p>
    <div class="row background-blue">
      <form @submit.prevent="sendMail">
          <div class="row">
            <div class="col-12">
              <div class="form mx-auto mt-3">
                <div class="row">
                  <div class="col-6 text-start">
                    <input type="text" 
                      v-model="form.name"
                      class="form-control w-100"
                      placeholder="Nombre*"
                      required
                      />
                  </div>
                  <div class="col-6 text-end">
                    <input type="text" 
                      v-model="form.firstName"
                      class="form-control w-100" 
                      placeholder="Apellidos*" 
                      required
                    />        
                  </div>
                  <div class="col-12">
                    <input type="text" 
                      v-model="form.email"
                      class="form-control w-100 mt-2"
                      placeholder="Email*" 
                      required
                    />        
                  </div>
                  <div class="col-6 text-start">
                    <input type="text" 
                      v-model="form.position"
                      class="form-control w-100 mt-2"
                      placeholder="Cargo" 
                      />
                  </div>
                  <div class="col-6 text-end">
                    <input type="text" 
                      v-model="form.company"
                      class="form-control w-100 mt-2" 
                      placeholder="Empresa*" 
                      required
                    />        
                  </div>
                  <div class="col-6 text-end">
                    <input type="text" 
                      v-model="form.phone"
                      class="form-control w-100 mt-2" 
                      placeholder="Teléfono" 
                    />     
                  </div>   
                  <div class="col-6 text-start">
                    <input type="text" 
                      v-model="form.location"
                      class="form-control w-100 mt-2"
                      placeholder="Localizacion" 
                      />
                  </div>
                  <div class="col-12">
                    <textarea class="mt-2" name="coments" rows="4" cols="30" v-model="form.comments" ></textarea>    
                  </div> 
                </div>
              </div>
            </div>
        </div>  
      </form>
    </div>
    <div class="col-12 text-center">
      <button type="submit" class="btn btn-primary mt-3 mb-1"> Envianos tus datos</button> 
      <p><small>*Enviando estos datos aceptas nuestra política de privacidad</small></p>
    </div>
  </div>
<!--    <div class="m-0 centered-container row align-items-center">
      <div class="text-center mx-auto"> 
        <h1>Mensaje enviado</h1>       
        <h2>Tu mensaje se ha enviado correctamente.</h2>
        <p>En breve nos ponremos en contacto contigo.</p>
        <i class="fa-light fa-envelope fa-2x"></i>
      </div>
    </div>-->
</template>
<script setup>

import { ref } from 'vue'

const form = ref({
  name: '',
  firstName: '',
  email: '',
  position: '',
  company: '',
  location: '',
  phone: '',
  comments: ''
})
const isSubmitted = ref(false);

const { send } = useMail()

const sendMail = async () => {
console.log(useMail());
  try {
    const messageText = `
      Nuevo mensaje recibido desde el formulario de contacto de Lester:
      Nombre: ${form.value.firstName} ${form.value.name}
      Email: ${form.value.email}
      Cargo: ${form.value.position}
      Empresa: ${form.value.company}
      Ubicación: ${form.value.location}
      Telefono: ${form.value.phone}
      Comentarios:
      ${form.value.comments}
          `.trim()
    await send({
      subject: `Nuevo mensaje de ${form.value.name} ${form.value.firstName}`,
      from:'no-reply@crisalidalabs.com',
      text: messageText,
    })
    alert("Mensaje enviado")
      isSubmitted.value = true  
  } catch (error) {
      console.error(error)
    alert('Error al enviar el mensaje')
  }
}
</script>
<style>
.slide-eight{
  padding: 50px 0px 100px 0px;
}
.form{
  margin: 20px;
  padding: 20px;
  max-width: 900px;
} 
.form-control{
  width: 100%;
  border-color:#24377f !important;
  border-radius: none;
  outline: none !important;
  box-shadow: none !important;
}
textarea{
  border-radius: 7px !important;
  border-color:#24377f !important;
  width: 100%;
  outline: none !important;
  box-shadow: none !important;
}
.background-blue{
  background-color:#24377f !important;
}
</style>