<script setup>
import { Github, Linkedin, Mail, ArrowUp } from "lucide-vue-next";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
    <footer class="relative bg-slate-900 text-white">
        <!-- Top Border -->
        <div class="h-1 w-full bg-linear-to-r from-pink-500 via-pink-400 to-pink-500"></div>
        <div class="mx-auto max-w-7xl px-6 py-16">
            <div class="grid gap-10 lg:grid-cols-3">
                <!-- Left -->
                <div>
                    <h2 class="text-3xl font-bold text-pink-400">Risma.dev</h2>
                    <p class="mt-5 leading-8 text-slate-300">
                        Frontend Developer passionate about creating
                        responsive, modern, and user-friendly web applications
                        using Vue.js, Laravel, and Tailwind CSS.
                    </p>
                </div>
                <!-- Middle -->
                <div>
                    <h3 class="mb-5 text-xl font-semibold">Quick Links</h3>
                    <ul class="space-y-3 text-slate-300">
                        <li>
                            <a href="#home" class="hover:text-pink-400">Home</a>
                        </li>
                        <li>
                            <a href="#about" class="hover:text-pink-400">About</a>
                        </li>
                        <li>
                            <a href="#projects" class="hover:text-pink-400">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:text-pink-400">Contact</a>
                        </li>
                    </ul>
                </div>
                <!-- Right -->
                <div>
                    <h3 class="mb-5 text-xl font-semibold">Connect With Me</h3>
                    <div class="flex gap-4">
                        <a
                            href="https://github.com/rismanrhz"
                            target="_blank"
                            class="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
                        >
                            <Github :size="20" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rismanrhz/"
                            target="_blank"
                            class="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
                        >
                            <Linkedin :size="20" />
                        </a>
                        <a
                            href="mailto:rismanurhaliza30@gmail.com"
                            class="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
                        >
                            <Mail :size="20" />
                        </a>
                    </div>
                </div>
            </div>
            <!-- Bottom -->
            <div class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-8 md:flex-row">
                <p class="text-center text-sm text-slate-50">© {{ new Date().getFullYear() }} Risma Nurhaliza. All rights reserved.</p>
                <!-- Scroll to top -->
                <button @click="scrollToTop" class="rounded-full bg-pink-600 p-3 transition hover:bg-pink-700">
                    <ArrowUp :size="20" />
                </button>
            </div>
        </div>
    </footer>
</template>