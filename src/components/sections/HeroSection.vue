<template>
  <section
    class="px-fluid py-20 flex flex-col items-center md:flex-row md:justify-between gap-12"
  >
    <!-- Text Column -->
    <div class="max-w-xl text-center md:text-left">
      <h1 class="titlexl">Your Catchy Headline Here</h1>
      <p class="paragraph mt-4">
        This is a brief introduction to your site, project, or business. Explain
        what visitors can expect, what your project is about, or any key message
        you want to share. Keep it short and engaging.
      </p>

      <div class="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
        <RouterLink to="/projects" class="btn btn-primary"
          >View Projects</RouterLink
        >
        <RouterLink to="/about" class="btn btn-outline">Learn More</RouterLink>
      </div>
    </div>
  </section>
</template>
