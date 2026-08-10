<template>
  <section class="bg-light" id="services">
    <div class="container px-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-12">
          <div class="text-center my-4">
            <h2 class="display-5 fw-bolder mb-4">
              <span class="text-gradient d-inline">My Services</span>
            </h2>
            <p class="text-muted lead">What I can do for you</p>
            <p class="text-muted">I help businesses and individuals bring their ideas to life</p>
          </div>
          <div class="divider mx-auto m-5"></div>
        </div>

        <div v-for="service in services" :key="service.id" class="col-lg-4 col-md-6">
          <div class="service-card text-center p-4 mb-4">
            <div class="service-icon mb-4">
              <i :class="service.icon"></i>
            </div>
            <h3 class="h4 mb-3">{{ service.title }}</h3>
            <p class="text-muted">{{ service.description }}</p>
            <ul class="service-features list-unstyled mt-3">
              <li v-for="feature in service.features" :key="feature">
                <i class="bi bi-check-circle-fill text-primary me-2"></i>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Call to action section-->
  <section class="py-5 bg-gradient-primary-to-secondary text-white">
    <div class="container px-5 my-5">
      <div class="text-center">
        <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
        <RouterLink class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact"
          >Contact me</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const services = ref([
  {
    id: 1,
    title: "Web Development",
    icon: "bi bi-code-square",
    description: "Custom websites and web applications built with modern technologies.",
    features: ["Responsive Design", "SPA & SSR", "API Integration", "Performance Optimized"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: "bi bi-palette",
    description: "Beautiful, intuitive interfaces that users love and remember.",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    icon: "bi bi-cart",
    description: "Complete online stores with secure payment integration and inventory.",
    features: ["Payment Gateways", "Inventory Management", "Order Tracking", "Analytics"],
  },
  {
    id: 4,
    title: "API Development",
    icon: "bi bi-plug",
    description: "RESTful and GraphQL APIs for seamless data exchange.",
    features: ["REST APIs", "GraphQL", "Authentication", "Documentation"],
  },
  {
    id: 5,
    title: "Mobile Responsive",
    icon: "bi bi-phone",
    description: "Cross-platform apps that work perfectly on every device.",
    features: ["iOS & Android", "Responsive Layout", "Touch Optimization", "PWA Support"],
  },
  {
    id: 6,
    title: "Website Maintenance",
    icon: "bi bi-gear",
    description: "Ongoing support and maintenance to keep your site running smoothly.",
    features: ["Security Updates", "Performance Monitoring", "Backup Solutions", "24/7 Support"],
  },
]);
</script>

<style scoped>
.services-section {
  background: #f8f9fa;
  padding: 80px 0;
}

.service-card {
  background: white;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  height: 90%;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(13, 110, 253, 0.15);
  border-color: #0d6efd;
}

.service-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.1), rgba(13, 202, 240, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2rem;
  color: #0d6efd;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  /* background: linear-gradient(135deg, #0d6efd, #0dcaf0); */
  background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 100%);
  color: white;
  transform: scale(1.05);
}

.service-features li {
  padding: 4px 0;
  font-size: 0.95rem;
  color: #6c757d;
}

.service-features i {
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .services-section {
    padding: 50px 0;
  }
}
</style>
