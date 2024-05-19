<template>
  <div class="bg-dark text-secondary px-4 py-5">
    <div class="row justify-content-center py-5">
      <div class="col-lg-4 text-white">
        <h1 class="display-4 fw-bold lh-1 mb-3">Contácto</h1>
        <p class="lead">Por favor no dudes en mandar un mensaje</p>
        <a href="https://www.linkedin.com/in/peperozos/" class="social-icon">
          <i class="fab fa-linkedin"></i>
          <!-- Use Font Awesome for the icon -->
        </a>
      </div>
      <div class="col-lg-4">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Correo electrónico</label
          >
          <input
            type="email"
            class="form-control custom-input"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Mensaje</label
          >
          <textarea
            class="form-control custom-input"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-light">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactView",
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
}

.social-icon:hover {
  background-color: #0d8dd1; /* Darker shade on hover */
}
.custom-input {
  border: 1px solid white; /* White border */
  background-color: transparent; /* No fill */
  color: white; /* Text color, adjust as needed */
}

.custom-input:focus {
  border-color: white; /* Maintain white border on focus */
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25); /* Optional: add a subtle focus shadow */
  background-color: transparent; /* Ensure no fill on focus */
  color: white; /* Maintain text color on focus */
}

/* Optional: Style the label */
.form-label {
  color: white; /* Label color, adjust as needed */
}
</style>
