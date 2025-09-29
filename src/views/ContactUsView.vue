<script setup lang="ts">
import CopyMeButton from "@/components/ui/buttons/copyMeButton.vue";
</script>

<template>
  <h2 class="titlexl">Contact Me</h2>

  <h3 class="subtitle mt-6">Let’s Talk</h3>
  <p class="paragraph">
    This section is for visitors to reach out to you. You can provide an email,
    contact form, or any preferred method of communication. Include instructions
    or guidelines for getting in touch if needed.
  </p>

  <div class="mt-6 flex flex-col sm:flex-row gap-4">
    <a
      href="mailto:support@littlelabs.dev"
      class="inline-block bg-primary text-primary-content font-semibold px-6 py-3 rounded-xl shadow hover:brightness-110 transition"
    >
      Send Email
    </a>
    <CopyMeButton
      copy-text="support@littlelabs.dev"
      display-string="Copy Email"
    />
  </div>
</template>
