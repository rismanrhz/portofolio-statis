<script setup>
import { ref } from "vue";
import { experiences as experienceData } from "../../data/experience";

const experiences = ref(
    experienceData.map((item) => ({
        ...item,
        technologies: Array.isArray(item.technologies)
            ? item.technologies
                  .flatMap((tech) => tech.split(","))
                  .map((tech) => tech.trim())
                  .filter(Boolean)
            : item.technologies
              ? item.technologies
                    .split(",")
                    .map((tech) => tech.trim())
                    .filter(Boolean)
              : [],
    }))
);
const loading = ref(false);
const error = ref(false);
</script>

<template>
    <section id="experience" class="bg-slate-50 py-24 dark:bg-slate-900">
        <div class="mx-auto max-w-6xl px-6">
            <!-- TITLE -->
            <div class="mb-20 text-center" data-aos="fade-up" data-aos-duration="800">
                <p class="font-semibold uppercase tracking-widest text-pink-600">Career Journey</p>
                <h2 class="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white">Experience</h2>
                <div class="mx-auto mt-5 h-1 w-24 rounded-full bg-pink-600"></div>
            </div>
            <!-- LOADING -->
            <div v-if="loading" class="py-10 text-center text-slate-500 dark:text-slate-400">Loading experience...</div>
            <!-- ERROR -->
            <div v-else-if="error" class="py-10 text-center text-red-500">Failed to load experience data.</div>
            <!-- EMPTY -->
            <div v-else-if="experiences.length === 0" class="py-10 text-center text-slate-500 dark:text-slate-400">Belum ada experience.</div>
            <!-- TIMELINE -->
            <div v-else class="relative">
                <!-- Timeline Line -->
                <div class="absolute left-4 top-0 h-full w-1 rounded bg-pink-200 lg:left-1/2 lg:-translate-x-1/2"></div>
                <!-- Experience Items -->
                <div v-for="(item, index) in experiences" :key="item.id" class="relative mb-14">
                    <!-- Dot -->
                    <div class="absolute left-2 h-5 w-5 rounded-full border-4 border-white bg-pink-600 shadow dark:border-slate-900 lg:left-1/2 lg:-translate-x-1/2"></div>
                    <!-- Card -->
                    <div
                        :class="[
                            'ml-12 rounded-2xl border border-pink-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 lg:w-[45%]',
                            index % 2 === 0
                                ? 'lg:ml-0 lg:mr-auto'
                                : 'lg:ml-auto',
                        ]"
                        :data-aos="
                            index % 2 === 0
                                ? 'fade-right'
                                : 'fade-left'
                        "
                        :data-aos-delay="index * 200"
                        data-aos-duration="900"
                    >
                        <!-- Period -->
                        <span v-if="item.period" class="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-pink-600">{{ item.period }}</span>
                        <!-- Position -->
                        <h3 class="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{{ item.position }}</h3>
                        <!-- Company -->
                        <h4 class="mt-2 text-lg font-semibold text-pink-600">{{ item.company }}</h4>
                        <!-- Description -->
                        <p v-if="item.description" class="mt-5 leading-8 text-slate-600 dark:text-slate-300">{{ item.description }}</p>
                        <!-- Technologies -->
                        <div
                            v-if="item.technologies.length"
                            class="mt-6 flex flex-wrap gap-2"
                        >
                            <span
                                v-for="(tech, techIndex) in item.technologies"
                                :key="`${item.id}-${techIndex}`"
                                class="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 dark:bg-pink-500/20 dark:text-pink-300"
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>