<template>
  <div id="contact" class="bg-dark text-secondary px-4 py-5">
    <div class="row justify-content-center py-5">
      <div class="col-lg-4 text-white">
        <h1 class="display-4 fw-bold lh-1 mb-3">Contactame</h1>
        <p class="lead">
          ¿Tienes un proyecto o una oferta laboral interesante?
        </p>
        <a href="https://www.linkedin.com/in/peperozos/" class="social-icon">
          <i class="fab fa-linkedin"></i>
          <!-- Use Font Awesome for the icon -->
        </a>
      </div>
      <div class="col-lg-4">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="name" class="form-control custom-input" v-model="name" />
          <div>
            <small class="text-danger">{{ errorName }}</small>
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input
            type="email"
            class="form-control custom-input"
            v-model="email"
            placeholder="name@example.com"
          />
          <div>
            <small class="text-danger">{{ errorEmail }}</small>
          </div>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensaje</label>
          <textarea
            class="form-control custom-input"
            v-model="message"
            rows="3"
            @keyup="ValidMessage()"
          ></textarea>
          <div>
            <small class="text-danger">{{ errorMessage }}</small>
          </div>
        </div>
        <div class="mb-3">
          <div v-if="loaderSave">
            <span class="display-6"
              ><i class="fa-solid fa-spinner fa-spin"></i
            ></span>
          </div>
          <div v-else>
            <button type="button" class="btn btn-light" @click="validForm()">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiClient from "@/axios.js";
import axios from "axios";
export default {
  name: "ContactView",
  data() {
    return {
      loaderSave: false,
      name: "",
      email: "",
      message: "",
      errorName: "",
      errorEmail: "",
      errorMessage: "",
    };
  },
  methods: {
    ValidMessage() {
      this.errorMessage = "";
      this.errorMessage =
        this.message.length >= 255
          ? "El mensaje es muy largo solo se permiten 255 caracteres"
          : "";
    },
    validForm() {
      this.errorName = "";
      this.errorEmail = "";
      this.errorMessage = "";

      this.errorName = this.name.trim() === "" ? "El nombre es requerido" : "";

      this.errorEmail =
        this.email && !this.validEmail(this.email)
          ? "E-mail inválido ej: name@example.com"
          : "";
      this.errorMessage =
        this.message.trim() === "" ? "El mensaje es requerido" : "";

      if (!this.errorName && !this.errorEmail && !this.errorMessage) {
        this.sendMessage();
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async sendMessage() {
      try {
        this.loaderSave = true;
        const response = await apiClient.post("/messages", {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        if (response.status === 201) {
          // Clear variables
          this.name = "";
          this.email = "";
          this.message = "";

          // Send success notification
          // this.showSuccessNotification("Message sent successfully!");
        } else {
          console.error("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
      this.loaderSave = false;
    },
  },
};
</script>

<style>
.social-icon {
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
  border-radius: 50%; /* Make it circular */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a66c2; /* Background color for Twitter */
  color: white; /* Icon color */
  font-size: 24px; /* Icon size */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
  text-decoration: none;
}

.social-icon:hover {
  background-color: #0d8dd1; /* Darker shade on hover */
}
.custom-input {
  border: 1px solid white !important; /* White border */
  background-color: transparent !important; /* No fill */
  color: white !important; /* Text color, adjust as needed */
}

.custom-input:focus {
  border-color: white !important; /* Maintain white border on focus */
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25) !important; /* Optional: add a subtle focus shadow */
  background-color: transparent !important; /* Ensure no fill on focus */
  color: white !important; /* Maintain text color on focus */
}

/* Optional: Style the label */
.form-label {
  color: white; /* Label color, adjust as needed */
}
</style>
