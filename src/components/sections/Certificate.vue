<script setup>
import { certificates } from "../../data/certificates";
</script>

<template>
    <section id="certificates" class="bg-slate-50 dark:bg-slate-900 py-24">
        <div class="mx-auto max-w-7xl px-6">
            <!-- Heading -->
            <div class="mb-16 text-center" data-aos="fade-up" data-aos-duration="800">
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">Certificates</p>
                <h2 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Professional Certifications</h2>
                <p class="mt-4 text-slate-500 dark:text-slate-400">Certifications that support my skills and continuous learning.</p>
            </div>
            <!-- Cards -->
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(certificate, index) in certificates"
                    :key="certificate.id"
                    class="group overflow-hidden rounded-3xl
                        border border-pink-100
                        bg-white
                        shadow-lg
                        transition-all duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                        dark:bg-slate-800
                        dark:border-slate-700"
                    data-aos="fade-up"
                    :data-aos-delay="index * 150"
                    data-aos-duration="800"
                >
                    <img
                        :src="certificate.image"
                        :alt="certificate.title"
                        class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ certificate.title }}</h3>
                        <p class="mt-2 text-slate-500 dark:text-slate-300">{{ certificate.issuer }}</p>
                        <p class="mt-1 text-sm text-pink-600">{{ certificate.year }}</p>
                        <a
                            :href="certificate.link"
                            target="_blank"
                            class="mt-6 inline-block rounded-xl
                                bg-pink-600
                                px-5 py-3
                                text-white
                                shadow
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:bg-pink-700
                                hover:shadow-lg"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>