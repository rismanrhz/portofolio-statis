<script setup>
import { ref, onMounted } from "vue";

const experience = ref(0);
const projects = ref(0);
const certificates = ref(0);

const animateCounter = (target, end, duration = 1500) => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
        target.value = end;
        clearInterval(timer);
        } else {
        target.value = Math.floor(start);
        }
    }, 16);
};

onMounted(() => {
    animateCounter(experience, 2);
    animateCounter(projects, 3);
    animateCounter(certificates, 5);
});
</script>

<template>
    <section class="bg-white py-14 dark:bg-slate-950">
        <div class="mx-auto max-w-6xl px-6">
            <div class="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                <!-- Experience -->
                <div class="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
                    <h2 class="text-5xl font-bold text-pink-600">{{ experience }}+</h2>
                    <p class="mt-3 text-slate-500 dark:text-slate-300">Years Experience</p>
                </div>
                <!-- Projects -->
                <div class="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
                    <h2 class="text-5xl font-bold text-pink-600">{{ projects }}+</h2>
                    <p class="mt-3 text-slate-500 dark:text-slate-300">Projects</p>
                </div>
                <!-- Certificates -->
                <div class="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
                    <h2 class="text-5xl font-bold text-pink-600">{{ certificates }}+</h2>
                    <p class="mt-3 text-slate-500 dark:text-slate-300">Certificates</p>
                </div>
            </div>
        </div>
    </section>
</template>