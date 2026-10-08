<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Typed from "typed.js";
import { profile } from "../../data/profile";
import { Eye, Download } from "lucide-vue-next";

import {Github, Linkedin, Mail} from "lucide-vue-next";

const typedElement = ref(null);
let typed;

onMounted(() => {
	typed = new Typed(typedElement.value, {
		strings: [
		"Frontend Developer",
		"Vue.js Developer",
		"Laravel Developer",
		"JavaScript Developer",
		],
		typeSpeed: 60,
		backSpeed: 35,
		backDelay: 1500,
		loop: true,
	});
});

onBeforeUnmount(() => {
  	if (typed) typed.destroy();
});
</script>

<template>
	<section id="home" class="relative flex min-h-screen items-center overflow-hidden bg-slate-50 pt-24 dark:bg-slate-900" data-aos="fade-up">
		<!-- Background Glow -->
		<div class="absolute -top-40 left-20 h-96 w-96 rounded-full bg-pink-300/30 blur-[120px]"></div>
		<div class="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-pink-200/20 blur-[150px]"></div>
		<div class="absolute left-1/2 top-1/2 h-72 w-72 rounded-full bg-rose-300/20 blur-[120px]"></div>
		<div class="relative z-10 container mx-auto px-6">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<!-- LEFT -->
				<div>
					<!-- Badge -->
					<p class="text-lg font-semibold text-pink-600">{{ profile.greeting }}</p>
					<h1 class="mt-4 text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white lg:text-7xl">{{ profile.name }}</h1>
					<h2 class="mt-5 h-8 text-3xl font-bold text-pink-600"><span ref="typedElement"></span></h2>
					<p class="mt-7 max-w-xl text-lg leading-9 text-slate-600 dark:text-slate-400">{{ profile.description }}</p>
					<div class="mt-10 flex flex-wrap gap-4">
						<a
							href="/cv/CV - RISMA NURHALIZA.pdf"
							target="_blank"
							class="flex items-center gap-2 rounded-xl bg-pink-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700"
						>
							<Eye :size="18" />
							View CV
						</a>
						<a
							href="/cv/CV - RISMA NURHALIZA.pdf"
							download
							class="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
						>
							<Download :size="18" />
							Download CV
						</a>
					</div>
					<!-- Social -->
					<div class="mt-10 flex gap-5">
						<a
							href="https://github.com/rismanrhz"
							target="_blank"
							class="rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white dark:bg-slate-800 dark:text-white"
						>
							<Github :size="22" />
						</a>
						<a
							href="https://linkedin.com/in/rismanrhz"
							target="_blank"
							class="rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white dark:bg-slate-800 dark:text-white"
						>
							<Linkedin :size="22" />
						</a>
						<a
							href="mailto:rismanurhaliza30@gmail.com"
							class="rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white dark:bg-slate-800 dark:text-white"
						>
							<Mail :size="22" />
						</a>
					</div>
				</div>
				<!-- RIGHT -->
				<div class="flex justify-center">
					<div class="relative">
						<!-- Glow -->
						<div class="absolute inset-0 scale-110 rounded-full bg-pink-500/20 blur-3xl"></div>
						<!-- Ring -->
						<div class="absolute -inset-2 rounded-full border-2 border-pink-200 dark:border-pink-700"></div>
						<!-- Image -->
						<img
							src="../../assets/images/profil.jpg"
							alt="Risma Nurhaliza"
							class="relative z-10 h-80 w-80 rounded-full object-cover shadow-2xl lg:h-105 lg:w-105"
						/>
						<!-- Floating Dots -->
						<div class="absolute -right-5 -top-5 h-8 w-8 animate-bounce rounded-full bg-pink-500"></div>
						<div class="absolute -left-6 bottom-14 h-5 w-5 rounded-full bg-pink-400"></div>
						<div class="absolute -left-10 top-24 h-4 w-4 rounded-full bg-rose-400"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2">
			<div class="flex h-12 w-7 justify-center rounded-full border-2 border-slate-400 dark:border-slate-600">
				<div class="mt-2 h-3 w-3 animate-bounce rounded-full bg-pink-600"></div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
img {
  animation: floating 5s ease-in-out infinite;
}
.typed-cursor {
  color: #2563eb;
  font-weight: bold;
}
</style>