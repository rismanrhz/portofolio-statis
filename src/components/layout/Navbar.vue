<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Moon, Sun, Menu, X } from "lucide-vue-next";

const darkMode = ref(false);
const isScrolled = ref(false);
const isOpen = ref(false);
const activeSection = ref("home");
const updateActiveSection = () => {
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            activeSection.value = id;
        }
    });
};
const menus = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Certificates", link: "#certificates" },
    { name: "Contact", link: "#contact" },
];
const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
    updateActiveSection();
};
const toggleDark = () => {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
};
const closeMenu = () => {
    isOpen.value = false;
};
onMounted(() => {
    if (localStorage.getItem("theme") === "dark") {
        darkMode.value = true;
        document.documentElement.classList.add("dark");
    }
    window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <header
        :class="[
            'fixed top-0 left-0 z-50 w-full transition-all duration-300',
            isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-md dark:bg-slate-900/80'
            : 'bg-transparent'
        ]"
    >
        <nav class="mx-auto max-w-7xl px-6 py-5">
            <!-- Desktop Menu -->
            <div class="hidden justify-center items-center gap-8 md:flex">
                <div class="flex justify-between items-center rounded-full border border-pink-200 bg-pink-50 text-pink-600 dark:border-pink-700 dark:bg-pink-900/30 dark:text-pink-300 px-5 py-2 gap-8">
                    <a
                        v-for="menu in menus"
                        :key="menu.name"
                        :href="menu.link"
                        class="group relative py-2 text-sm font-medium transition-all duration-300"
                        :class="
                            activeSection === menu.link.substring(1)
                            ? 'text-pink-600'
                            : 'text-slate-700 hover:text-pink-600 dark:text-slate-200 dark:hover:text-pink-400'
                        "
                    > 
                        {{ menu.name }}
                        <span
                            class="absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300"
                            :class="
                            activeSection === menu.link.substring(1)
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                            "
                        ></span>
                    </a>
                </div>
                <!-- Dark Mode -->
                <div>
                    <button @click="toggleDark" class="rounded-full bg-slate-100 p-2 transition-all duration-300 hover:rotate-12 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                        <Moon v-if="!darkMode" :size="20" />
                        <Sun v-else :size="20" />
                    </button>
                </div>
            </div>
            <!-- Mobile Button -->
            <button class="md:hidden" @click="isOpen = !isOpen">
                <Menu v-if="!isOpen" />
                <X v-else />
            </button>
        </nav>
        <!-- Mobile Menu -->
        <div v-if="isOpen" class="border-t bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900 md:hidden">
            <a
                v-for="menu in menus"
                :key="menu.name"
                :href="menu.link"
                @click="closeMenu"
                class="block px-6 py-4 transition"
                :class="
                activeSection === menu.link.substring(1)
                ? 'bg-pink-50 text-pink-600 dark:bg-slate-800 dark:text-pink-400'
                : 'hover:bg-pink-50 hover:text-pink-600 dark:text-white dark:hover:bg-slate-800'
                "
            >
                {{ menu.name }}
            </a>
        </div>
    </header>
</template>