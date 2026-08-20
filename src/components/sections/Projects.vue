<script setup>
import { ref, computed } from "vue";
import { projects as projectData } from "../../data/projects";

const projects = ref(projectData);
const loading = ref(false);

// IMAGE URL
const imageUrl = (image) => image || "";

// FEATURED PROJECT
const featuredProject = computed(() => {
    return projects.value.find(
        (project) => Number(project.featured) === 1
    );
});
const otherProjects = computed(() => {
    return projects.value.filter(
        project => Number(project.featured) !== 1
    );
});
</script>

<template>
    <section id="projects" class="bg-white py-24 dark:bg-slate-950">
        <div class="mx-auto max-w-7xl px-6">
            <!-- HEADING -->
            <div class="mb-16 text-center" data-aos="fade-up" data-aos-duration="800">
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">Portfolio</p>
                <h2 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
                <p class="mt-4 text-slate-500 dark:text-slate-400">Some projects that represent my experience and technical skills.</p>
            </div>
            <!-- LOADING -->
            <div v-if="loading" class="py-10 text-center text-slate-500">Loading projects...</div>
            <!-- FEATURED PROJECT -->
            <div
                v-else-if="featuredProject"
                class="mb-24 grid items-center gap-12 rounded-3xl border border-pink-100 bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800 lg:grid-cols-5"
                data-aos="fade-up"
                data-aos-duration="900"
            >
                <!-- IMAGES -->
                <div
                    class="space-y-4 lg:col-span-3"
                    data-aos="fade-right"
                    data-aos-duration="900"
                >
                    <!-- Image 1 -->
                    <img
                        v-if="featuredProject.image"
                        :src="imageUrl(featuredProject.image)"
                        :alt="featuredProject.title"
                        class="w-full rounded-2xl border border-slate-200 transition duration-500 hover:scale-[1.02] dark:border-slate-700"
                    />
                    <!-- Image 2 -->
                    <img
                        v-if="featuredProject.image2"
                        :src="imageUrl(featuredProject.image2)"
                        :alt="featuredProject.title"
                        class="w-full rounded-2xl border border-slate-200 transition duration-500 hover:scale-[1.02] dark:border-slate-700"
                    />
                </div>
                <!-- CONTENT -->
                <div
                    class="lg:col-span-2"
                    data-aos="fade-left"
                    data-aos-duration="900"
                >
                    <span class="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600 dark:bg-pink-500/20 dark:text-pink-300">⭐ Featured Project</span>
                    <h3 class="mt-5 text-3xl font-bold text-slate-900 dark:text-white">{{ featuredProject.title }}</h3>
                    <p class="mt-2 font-semibold text-pink-600">
                        {{ featuredProject.role }}
                        <span v-if="featuredProject.company">• {{ featuredProject.company }}</span>
                    </p>
                    <p class="mt-6 leading-8 text-slate-600 dark:text-slate-300">{{ featuredProject.description }}</p>
                    <!-- FEATURES -->
                    <div v-if="featuredProject.features.length" class="mt-5">
                        <h4 class="mb-4 font-semibold text-slate-900 dark:text-white">Key Features:</h4>
                        <ul class="space-y-3">
                            <li
                                v-for="feature in featuredProject.features"
                                :key="feature"
                                class="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                            >
                                <span class="text-pink-500">✔</span>{{ feature }}
                            </li>
                        </ul>
                    </div>
                    <!-- TECHNOLOGIES -->
                    <div v-if="featuredProject.technologies.length" class="mt-6 flex flex-wrap gap-2">
                        <span
                            v-for="tech in featuredProject.technologies"
                            :key="tech"
                            class="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700 dark:bg-pink-500/20 dark:text-pink-300"
                        >
                            {{ tech }}
                        </span>
                    </div>
                    <!-- GITHUB -->
                    <div class="mt-5 flex flex-wrap gap-4">
                        <a
                            v-if="featuredProject.github"
                            :href="featuredProject.github"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-xl border border-slate-300 px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <!-- OTHER PROJECTS -->
            <div v-if="!loading">
                <h2 class="mb-10 text-3xl font-bold text-slate-900 dark:text-white">Other Projects</h2>
                <div v-if="projects.length" class="grid gap-8 md:grid-cols-2">
                    <div
                        v-for="(project, index) in otherProjects"
                        :key="project.id"
                        class="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800"
                        data-aos="fade-up"
                        :data-aos-delay="index * 150"
                        data-aos-duration="800"
                    >
                        <!-- IMAGE -->
                        <img
                            v-if="project.image"
                            :src="imageUrl(project.image)"
                            :alt="project.title"
                            class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <!-- CONTENT -->
                        <div class="p-6">
                            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ project.title }}</h3>
                            <p class="mt-3 text-slate-600 dark:text-slate-300">{{ project.description }}</p>
                            <!-- TECHNOLOGIES -->
                            <div v-if="project.technologies.length" class="mt-6 flex flex-wrap gap-2">
                                <span
                                    v-for="(tech, i) in project.technologies"
                                    :key="tech"
                                    class="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 dark:bg-pink-500/20 dark:text-pink-300"
                                    data-aos="zoom-in"
                                    :data-aos-delay="i * 70"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                            <!-- GITHUB -->
                            <div class="mt-8 flex gap-3">
                                <a
                                    v-if="project.github"
                                    :href="project.github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="rounded-lg border border-slate-300 px-5 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- EMPTY -->
                <p
                    v-if="otherProjects.length === 0"
                    class="text-center text-slate-500 dark:text-slate-400"
                >
                    Belum ada project lainnya.
                </p>
            </div>
        </div>
    </section>
</template>