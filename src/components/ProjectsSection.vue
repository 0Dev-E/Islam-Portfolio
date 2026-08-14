<template>
  <!-- Projects Section-->
  <section class="py-5">
    <div class="container px-5 mb-5">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0">
          <span class="text-gradient d-inline">Projects</span>
        </h1>
        <p class="text-muted lead mt-3">Here are some of the projects I've worked on</p>

        <div class="divider mx-auto"></div>
      </div>
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-11 col-xl-9 col-xxl-12">
          <!-- Projects-->
          <div
            v-for="project in projects"
            :key="project.id"
            class="card overflow-hidden shadow rounded-4 border-0 mb-5"
          >
            <div class="card-body p-0">
              <div class="d-flex align-items-center">
                <div class="p-5">
                  <div class="project-tags mb-3">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="badge bg-light text-dark me-1 px-3 py-2 mb-1"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <h2 class="fw-bolder">{{ project.title }}</h2>
                  <p>{{ project.description }}</p>
                  <span
                    v-for="feature in project.features"
                    :key="feature"
                    class="badge bg-light text-dark me-1 px-3 py-2 mb-1"
                  >
                    {{ feature }}
                  </span>
                  <!-- GitHub and Demo Links (Hidden if not available) -->
                  <div class="mt-4" v-if="project.demoLink || project.githubLink">
                    <a
                      v-if="project.demoLink"
                      :href="project.demoLink"
                      target="_blank"
                      class="btn btn-primary btn-sm me-2"
                    >
                      <i class="bi bi-eye me-1"></i> Live Demo
                    </a>
                    <a
                      v-if="project.githubLink"
                      :href="project.githubLink"
                      target="_blank"
                      class="btn btn-outline-dark btn-sm"
                    >
                      <i class="bi bi-github me-1"></i> Source Code
                    </a>
                  </div>
                </div>

                <!-- Image with Hover Zoom -->
                <div class="image-wrapper" @click="openModal(project.image)">
                  <img class="img-fluid project-image" :src="project.image" :alt="project.title" />
                  <div class="image-overlay">
                    <i class="bi bi-arrows-fullscreen"></i>
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </div>
            </div>
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

  <!-- Image Modal Popup -->
  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">&times;</button>
      <img class="modal-image" :src="selectedImage" alt="Enlarged image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showModal = ref(false);
const selectedImage = ref("");

const openModal = (image: string) => {
  selectedImage.value = image;
  showModal.value = true;
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = "auto"; // Restore scrolling
};

const projects = ref([
  //DevE Project
  {
    id: 1,
    title: "DevE - Web & App Development Platform",
    description:
      "A comprehensive multi-tenant platform that connects clients with developers. Users can order custom websites and mobile apps, track progress in real-time, communicate via integrated chat, and make secure payments. The platform features three distinct roles: Users (order projects), Admins (manage everything), and Employees (execute tasks). Current development focuses on real-time chat, payment integration, and a complete project management dashboard.",
    tags: ["Laravel", "Vue.js", "MySQL", "Chat", "Payments", "Multi-Role"],
    image: "/images/projects/devE.png",
    features: [
      " Designed and implemented multi-role system (Users, Admins, Employees)",
      " Developed chat system",
      "Integrating secure payment processing (Stripe API)",
      "Building project tracking dashboard with analytics",
      "Built scalable RESTful APIs with Laravel for seamless frontend-backend communication",
      "Advanced MySQL database design with complex relationships, indexes, and query optimization",
      " PHP framework with MVC architecture, routing, middleware, and service providers",
    ],
    demoLink: "", // Add your demo link when ready
    githubLink: "https://github.com/0Dev-E/DEVE", // Add your GitHub link
  },
  // Music Teaching
  {
    id: 2,
    title: "Web Application Developer Music Teaching Website",
    description:
      "Built an interactive music teaching platform using .NET and React with course management, student enrollment, and progress tracking.",
    tags: [
      ".NET",
      "React",
      "ASPX",
      "Swagger",
      "SmarterASP.NET",
      "SQL",
      "Server",
      "Video Integration",
      "links Team Leadership",
    ],
    features: [
      " Developed course management system with video lessons using .NET backend",
      "Implemented student enrollment and progress tracking with React",
      " Built interactive music theory exercises with ASPX pages",
      "Created RESTful APIs with Swagger documentation",
      " Deployed on SmarterASP.NET hosting environment",
    ],
    image: "/images/projects/Qlessons.png",
    demoLink: "",
    githubLink: "https://github.com/0Dev-E/q_musicteaching.git",
  },
  //Qhijin
  {
    id: 3,
    title: "Qhijin - Camel Races Platform",
    description:
      " Developed a comprehensive platform for camel race management using .NET and  React, including race scheduling, participant registration, and results management.",
    tags: [
      ".NET",
      "React",
      "ASPX",
      "Swagger",
      "SmarterASP.NET",
      "SQL",
      "Server",
      "Video Integration",
      "Google meet sessions",
      "links Team Leadership",
    ],
    features: [
      " Built race scheduling and management system using .NET",
      " Implemented participant registration and tracking system with React frontend",
      " Handel appointments races dashboard with ASPX pages",
      "Created RESTful APIs with Swagger documentation for seamless integration",
      "Deployed on SmarterASP.NET hosting environment",
      "Users Can Do sale Or Buy Easily",
    ],
    image: "/images/projects/hijin.png",
    demoLink: "",
    githubLink: "https://github.com/0Dev-E/hijin_App.git",
  },
  //WrshaOnline
  {
    id: 4,
    title: "WrshaOnline - Furniture E-Commerce Platform",
    description:
      " A complete e-commerce platform connecting furniture companies and workshops. Companies can list and sell their products, while workshops can browse, purchase, and manage their orders. Features include user registration, product management, shopping cart, and secure checkout.",
    tags: [
      ".NET",
      "React",
      "ASPX",
      "Swagger",
      "SmarterASP.NET",
      "SQL",
      "Server",
      "Video Integration",
      "Google meet sessions",
      "links Team Leadership",
    ],
    features: [
      " User registration and authentication for companies and workshops",
      "Product listing and management system for companie",
      "Advanced search and filtering for products",
      " Shopping cart with quantity management",
      "Secure checkout and order processing",
    ],
    image: "/images/projects/wrshonline.png",
    demoLink: "",
    githubLink: "https://github.com/0Dev-E/WarshOnline.git",
  },
  // Gym Administration
  {
    id: 5,
    title: "Trio Gym Administration Platform",
    description:
      "Complete management system for gym operations including member management, scheduling, and billing. Full-stack development with PHP and MySQL.",
    tags: ["PHP", "JavaScript", "MySQL", "Full-Stack"],
    image: "/images/projects/trio.png",
    features: [
      " Designed and developed a complete member management system with profile tracking",
      " Implemented class scheduling and booking system for gym sessions",
      " Built automated billing and payment processing system",
      "Developed attendance tracking with real-time reporting",
      " Improved system performance by 30% through code optimization",
    ],
    demoLink: "",
    githubLink: "https://github.com/0Dev-E/trio.git",
  },
  {
    id: 6,
    title: "Qualified Team - Pest Control Platform",
    description:
      "A professional platform for Qualified Team, a leading pest control company. The platform showcases their services including crawling insect control, rodent management, and specialized pest control solutions using advanced scientific research and Bayer products.",
    tags: ["PHP", "JavaScript", "MySQL", "Full-Stack"],
    image: "/images/projects/bugs.png",
    features: [
      "Company profile and service showcase",
      "Crawling insect control solutions using advanced pesticides",
      "Rodent control management with specialized baits",
      "Bayer gel treatment services (odor-free, no appliance removal)",
      "Professional traps for weasels and cats with training",
      "Service booking and inquiry system",
    ],
    demoLink: "",
    githubLink: "https://github.com/0Dev-E/trio.git",
  },
]);
// Close modal with Escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && showModal.value) {
    closeModal();
  }
};

// Add event listener
document.addEventListener("keydown", handleKeydown);
</script>

<style scoped>
.project-tags .badge {
  font-weight: 500;
  border: 1px solid #e9ecef;
}

/* Image Wrapper */
.image-wrapper {
  position: relative;
  overflow: hidden;
  min-width: 500px;
  max-width: 500x;
  height: 500px;
  cursor: pointer;
}

.image-wrapper .project-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: transform 0.5s ease;
}

/* Hover Zoom Effect */
.image-wrapper:hover .project-image {
  transform: scale(1.15);
}

/* Image Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  gap: 10px;
}

.image-overlay i {
  font-size: 2.5rem;
  animation: pulse 1.5s ease-in-out infinite;
}

.image-overlay span {
  font-size: 0.9rem;
  font-weight: 500;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

/* ===== MODAL STYLES ===== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-image {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: -50px;
  right: 0;
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.modal-close:hover {
  transform: rotate(90deg);
}

/* Pulse Animation */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .d-flex {
    flex-direction: column !important;
  }

  .image-wrapper {
    min-width: 100%;
    max-width: 100%;
    height: 250px;
  }

  .p-5 {
    padding: 20px !important;
  }
}
</style>
