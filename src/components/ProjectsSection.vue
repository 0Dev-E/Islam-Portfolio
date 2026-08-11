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
          <!-- Project Card 1-->
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
  {
    id: 5,
    title: "DevE - Web & App Development Platform",
    description:
      "A comprehensive multi-tenant platform that connects clients with developers. Users can order custom websites and mobile apps, track progress in real-time, communicate via integrated chat, and make secure payments. The platform features three distinct roles: Users (order projects), Admins (manage everything), and Employees (execute tasks). Current development focuses on real-time chat, payment integration, and a complete project management dashboard.",
    tags: ["Laravel", "Vue.js", "MySQL", "Chat", "Payments", "Multi-Role"],
    image: "/images/devE.png",
    demoLink: "https://deve-platform.com", // Add your demo link when ready
    githubLink: "https://github.com/0Dev-E/DEVE", // Add your GitHub link
  },
  {
    id: 4,
    title: "Project Management System",
    description:
      "A comprehensive project management application for tracking tasks, deadlines, and team progress. Built with PHP, JavaScript, and SQL.",
    tags: ["PHP", "JavaScript", "SQL", "Bootstrap"],
    image: "/images/project2.jpg",
    demoLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "Gym Administration System",
    description:
      "Complete management system for gym operations including member management, scheduling, and billing. Full-stack development with PHP and MySQL.",
    tags: ["PHP", "JavaScript", "MySQL", "Full-Stack"],
    image: "/images/project2.jpg",
    demoLink: "",
    githubLink: "",
  },
  {
    id: 2,
    title: "Insect Management System",
    description:
      "Specialized system for insect tracking and management with real-time data processing and analytics.",
    tags: ["PHP", "JavaScript", "SQL", "Data Processing"],
    image: "/images/project3.jpg",
    demoLink: "",
    githubLink: "",
  },
  {
    id: 1,
    title: "Qaday Low-Code Website",
    description:
      "A custom low-code website built with PHP and JavaScript for rapid deployment with drag-and-drop functionality.",
    tags: ["PHP", "JavaScript", "Low-Code", "Web Development"],
    image: "/images/project4.jpg",
    demoLink: "",
    githubLink: "",
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
  height: 600px;
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
