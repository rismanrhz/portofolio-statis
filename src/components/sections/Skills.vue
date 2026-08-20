<script setup>
import { skills } from "../../data/skills";
</script>

<template>
    <section id="skills" class="py-20 bg-white dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-6">
            <!-- Title -->
            <div class="text-center mb-14">
                <p class="uppercase tracking-[0.3em] text-pink-600 text-sm font-semibold">Tech Stack</p>
                <h2 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Technologies I Use</h2>
                <p class="mt-4 text-slate-500 dark:text-slate-400">Modern technologies for building responsive and scalable program applications.</p>
            </div>
            <!-- Skills Grid -->
            <div class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div
                    v-for="(skill, index) in skills"
                    :key="skill.id"
                    data-aos="fade-up"
                    :data-aos-delay="index * 80"
                    data-aos-duration="700"
                    class="group flex flex-col items-center rounded-2xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-200/50 dark:bg-slate-800 dark:hover:border-pink-500 dark:hover:shadow-pink-900/40"
                >
                    <img
                        :src="skill.icon"
                        :alt="skill.name"
                        class="h-12 w-12 object-contain transition-all duration-300 group-hover:scale-125 group-hover:rotate-6"
                    />
                    <p class="mt-4 text-center font-semibold text-slate-700 dark:text-slate-200">{{ skill.name }}</p>
                </div>
            </div>
        </div>
    </section>
</template>