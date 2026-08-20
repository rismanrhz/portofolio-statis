<template>
    <section id="about" class="bg-slate-50 py-24 dark:bg-slate-900">
        <div class="mx-auto max-w-7xl px-6">
            <!-- Title -->
            <div class="mb-16 text-center" data-aos="fade-up">
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">About Me</p>
                <h2 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Get to Know Me</h2>
                <p class="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-300">A brief introduction about my background, experience, and passion in web development.</p>
            </div>
            <!-- Content -->
            <div class="grid items-center gap-16 lg:grid-cols-2" data-aos="zoom-in-up" data-aos-duration="900">
                <!-- LEFT -->
                <div class="flex justify-center">
                    <div class="relative">
                        <!-- Glow -->
                        <div class="absolute inset-0 rounded-3xl bg-pink-300/20 blur-3xl"></div>
                        <img src="../../assets/images/profil2.jpeg" alt="Risma" class="relative z-10 w-80 rounded-3xl border-4 border-pink-100 shadow-2xl dark:border-pink-900 dark:shadow-black/50"/>
                    </div>
                </div>
                <!-- RIGHT -->
                <div>
                    <h3 class="text-3xl font-bold text-slate-900 dark:text-white">Hi, I'm Risma 👋</h3>
                    <p class="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                        I am an Informatics Engineering graduate with a strong interest in
                        Fullstack Development. I enjoy creating responsive, user-friendly,
                        and modern projects web applications using Vue.js, Laravel, JavaScript, PHP,
                        and Tailwind CSS.
                    </p>
                    <p class="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                        I believe that a good user interface is not only visually appealing
                        but also provides a great user experience. I continuously learn new
                        technologies to improve my skills and build high-quality
                        applications.
                    </p>
                    <!-- Cards -->
                    <div class="mt-10 flex gap-6 md:grid-cols-3">
                        <!-- Education -->
                        <div class="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-pink-500">
                            <h4 class="font-bold text-pink-600">🎓 Education</h4>
                            <p class="mt-2 text-slate-600 dark:text-slate-300">UPN "Veteran" Jawa Timur</p>
                        </div>
                        <!-- Location -->
                        <div class="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-pink-500">
                            <h4 class="font-bold text-pink-600">📍 Location</h4>
                            <p class="mt-2 text-slate-600 dark:text-slate-300">Bojonegoro, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>