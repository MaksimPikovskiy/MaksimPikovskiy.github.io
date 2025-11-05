<script setup lang="ts">
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import IconLocation from '@/components/icons/IconLocation.vue'
import IconSend from '@/components/icons/IconSend.vue'
import { phone, email, location } from '@/data/extra'
import { socialLinks } from '@/data/socialLinks'

const onlyLinks = socialLinks.filter((link) => link.url.includes('https://'))

const name = ref('')
const emailContact = ref('')
const subject = ref('')
const message = ref('')
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email.toLowerCase())
}

const handleSubmit = async () => {
  submitSuccess.value = false
  submitError.value = false

  if (!name.value || !emailContact.value || !message.value) {
    submitError.value = true
    return
  }

  if (!validateEmail(emailContact.value)) {
    submitError.value = true
    return
  }

  isSubmitting.value = true

  const emailObject = {
    name: name.value,
    email: emailContact.value,
    subject: subject.value,
    message: message.value,
  }

  emailjs
    .send('service_uzgr2xe', 'template_94ddy6d', emailObject, {
      publicKey: 'Uvrq3__BjWNLrP8jH',
    })
    .then(
      () => {
        submitSuccess.value = true
        setTimeout(() => {
          submitSuccess.value = false
        }, 5000)
        name.value = ''
        emailContact.value = ''
        subject.value = ''
        message.value = ''

        isSubmitting.value = false
      },
      (error) => {
        submitError.value = true
        console.error('Form submission error:', error)
        setTimeout(() => {
          submitError.value = false
        }, 5000)

        isSubmitting.value = false
      },
    )
}

const animateOnScroll = () => {
  const elements = document.querySelectorAll('.appear-animation')

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementTop < windowHeight * 0.9) {
      element.classList.add('active')
    }
  })
}

onMounted(() => {
  animateOnScroll()
  window.addEventListener('scroll', animateOnScroll)

  return () => {
    window.removeEventListener('scroll', animateOnScroll)
  }
})
</script>

<template>
  <div class="pt-24">
    <div class="container mx-auto px-4 md:px-6 py-12">
      <SectionHeading
        title="Get In Touch"
        subtitle="I am always open to discussing new projects and opportunities to help your team deliver successful products. Feel free to reach out using the form or contact details below."
      />

      <div class="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-stretch">
        <div class="appear-animation flex flex-col flex-1">
          <div class="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md flex-grow">
            <h3 class="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 dark:text-primary-400"
                >
                  <IconPhone />
                </div>
                <div>
                  <h4 class="text-lg font-medium text-neutral-900 dark:text-white">Phone</h4>
                  <p class="text-neutral-600 dark:text-neutral-400">{{ phone }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 dark:text-primary-400"
                >
                  <IconEmail />
                </div>
                <div>
                  <h4 class="text-lg font-medium text-neutral-900 dark:text-white">Email</h4>
                  <p class="text-neutral-600 dark:text-neutral-400">{{ email }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 dark:text-primary-400"
                >
                  <IconLocation />
                </div>
                <div>
                  <h4 class="text-lg font-medium text-neutral-900 dark:text-white">Location</h4>
                  <p class="text-neutral-600 dark:text-neutral-400">{{ location }}</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h4 class="text-lg font-medium text-neutral-900 dark:text-white mb-4">
                My Social Links
              </h4>

              <div class="flex space-x-4">
                <a
                  v-for="link in onlyLinks"
                  :key="link.name"
                  :href="link.url"
                  :aria-label="link.name"
                  class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span v-html="link.icon" />
                </a>
              </div>
            </div>

            <div class="mt-8">
              <video src="/true-words.mp4" controls class="w-full rounded-lg shadow-md" />
              <p class="mt-2 text-xs italic">
                Source:
                <a
                  href="https://www.youtube.com/watch?v=NTtUmxJIQuM"
                  class="text-primary-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  >LinusTechTips</a
                >
              </p>
            </div>
          </div>
        </div>

        <div class="appear-animation flex flex-col flex-1">
          <form
            @submit.prevent="handleSubmit"
            class="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md flex-grow"
          >
            <h3 class="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <div class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Full Name <span class="text-red-500">*</span>
                </label>
                <input id="name" v-model="name" type="text" class="form-input" required />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Email Address <span class="text-red-500">*</span>
                </label>
                <input id="email" v-model="emailContact" type="text" class="form-input" required />
              </div>

              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Subject
                </label>
                <input id="subject" v-model="subject" type="text" class="form-input" />
              </div>

              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea id="message" v-model="message" rows="6" class="form-input" required />
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full px-6 py-3 rounded-lg bg-primary-600 text-white font-medium transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <div v-else>Send Message <IconSend class="inline-block ml-2" /></div>
                </button>
              </div>

              <div
                v-if="submitSuccess"
                class="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md text-green-700 dark:text-green-300"
              >
                Your message has been sent successfully! I will get back to you soon!
              </div>
              <div
                v-if="submitError"
                class="p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-300"
              >
                An error occurred while sending your message. Please try again later.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <section class="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-6xl mx-auto appear-animation">
          <div class="bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-md overflow-hidden">
            <div class="aspect-video w-full bg-neutral-200 dark:bg-neutral-700 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24235.223173482846!2d-73.95731548776125!3d40.598933620260475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24484c8d1f91f%3A0x2d5e60da0876598c!2sBrooklyn%2C%20NY%2011229!5e0!3m2!1sen!2sus!4v1762302138706!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style="border: 0; border-radius: 0.5rem"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
