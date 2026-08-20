<script setup>
import Hero from '../components/sections/Hero.vue'
import Navbar from '../components/layout/Navbar.vue';
import About from '../components/sections/About.vue';
import Skills from '../components/sections/Skills.vue';
import Projects from '../components/sections/Projects.vue';
import Experience from '../components/sections/Experience.vue';
import Certificate from '../components/sections/Certificate.vue';
import Contact from '../components/sections/Contact.vue';
import Footer from '@/components/layout/Footer.vue';
</script>

<template>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Certificate />
    <Contact />
    <Footer />
</template>