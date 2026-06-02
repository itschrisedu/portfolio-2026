<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, watch } from "vue";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  _gotcha: string;
};

const form = reactive<ContactForm>({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  _gotcha: "",
});

const state = reactive({
  loading: false,
  success: false,
  error: "",
});

const isOpen = computed(() => props.modelValue);
const contactEndpoint = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

const close = () => {
  emit("update:modelValue", false);
};

const sanitize = (value: string) => value.replace(/[<>]/g, "").trim();

const validateEmail = (value: string) => {
  const normalized = value.trim().toLowerCase();
  if ((normalized.match(/@/g) || []).length !== 1) return false;
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(normalized);
};

const resetFeedback = () => {
  state.error = "";
  state.success = false;
};

const handleEsc = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isOpen.value) {
    close();
  }
};

watch(
  () => isOpen.value,
  (open) => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = open ? "hidden" : "";
    if (!open) {
      state.loading = false;
    }
  },
  { immediate: true },
);

if (typeof window !== "undefined") {
  window.addEventListener("keydown", handleEsc);
}

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleEsc);
  }

  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
});

const submitForm = async () => {
  if (state.loading) return;

  resetFeedback();

  const payload = {
    name: sanitize(form.name),
    email: sanitize(form.email).toLowerCase(),
    phone: sanitize(form.phone),
    subject: sanitize(form.subject),
    message: sanitize(form.message),
    _gotcha: form._gotcha,
  };

  if (!payload.name || !payload.email || !payload.message) {
    state.error = "Completa nombre, correo y mensaje.";
    return;
  }

  if (!validateEmail(payload.email)) {
    state.error = "Ingresa un correo valido.";
    return;
  }

  try {
    state.loading = true;

    const response = await fetch(contactEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data?.success === false) {
      const message = data?.error || "No se pudo enviar el mensaje. Intenta de nuevo.";
      throw new Error(message);
    }

    state.success = true;
    form.name = "";
    form.email = "";
    form.phone = "";
    form.subject = "";
    form.message = "";
    form._gotcha = "";
  } catch (error) {
    state.error = error instanceof Error ? error.message : "No se pudo enviar el mensaje.";
  } finally {
    state.loading = false;
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="contact-modal-overlay" @click.self="close">
        <div class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <div class="contact-modal-header">
            <h3 id="contact-modal-title" class="contact-modal-title">Enviame un mensaje</h3>
            <button type="button" class="contact-modal-close" aria-label="Cerrar" @click="close">x</button>
          </div>

          <p class="contact-modal-subtitle">Cuéntame sobre tu idea y te respondo por correo.</p>

          <form class="contact-modal-form" @submit.prevent="submitForm">
            <input v-model="form._gotcha" type="text" name="company" class="contact-modal-honeypot" tabindex="-1" autocomplete="off" />

            <label class="contact-modal-label" for="modal-name">Nombre</label>
            <input id="modal-name" v-model="form.name" type="text" class="contact-modal-input" maxlength="120" required />

            <label class="contact-modal-label" for="modal-email">Correo</label>
            <input id="modal-email" v-model="form.email" type="email" class="contact-modal-input" maxlength="180" required />

            <label class="contact-modal-label" for="modal-phone">Telefono (opcional)</label>
            <input id="modal-phone" v-model="form.phone" type="text" class="contact-modal-input" maxlength="40" />

            <label class="contact-modal-label" for="modal-subject">Asunto (opcional)</label>
            <input id="modal-subject" v-model="form.subject" type="text" class="contact-modal-input" maxlength="140" />

            <label class="contact-modal-label" for="modal-message">Mensaje</label>
            <textarea id="modal-message" v-model="form.message" class="contact-modal-textarea" rows="5" maxlength="2000" required></textarea>

            <p v-if="state.error" class="contact-modal-feedback contact-modal-feedback-error">{{ state.error }}</p>
            <p v-if="state.success" class="contact-modal-feedback contact-modal-feedback-success">Mensaje enviado correctamente.</p>

            <button type="submit" class="contact-modal-submit" :disabled="state.loading">
              {{ state.loading ? "Enviando..." : "Enviar mensaje" }}
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.contact-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(6, 16, 34, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
}

.contact-modal {
  width: min(560px, 100%);
  border: var(--stroke-sm) solid var(--color-cyan-400);
  border-radius: var(--radius-md);
  background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
  color: var(--color-white-400);
  padding: var(--space-md);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);

  @include mixins.mq("md") {
    padding: var(--space-lg);
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 800;
  }

  &-close {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: var(--stroke-sm) solid var(--color-cyan-400);
    color: var(--color-white-400);
    background: transparent;
    cursor: pointer;
    font-weight: 700;
  }

  &-subtitle {
    margin-top: var(--space-xs);
    margin-bottom: var(--space-md);
    opacity: 0.9;
    font-size: var(--font-size-sm);
  }

  &-form {
    display: grid;
    gap: var(--space-xs);
  }

  &-label {
    font-size: var(--font-size-sm);
    font-weight: 700;
  }

  &-input,
  &-textarea {
    width: 100%;
    border-radius: var(--radius-sm);
    border: var(--stroke-sm) solid var(--color-cyan-400);
    background: rgba(255, 255, 255, 0.06);
    color: var(--color-white-400);
    padding: 10px 12px;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: var(--color-white-400);
    }

    &::placeholder {
      color: var(--color-white-400);
      opacity: 0.8;
    }
  }

  &-textarea {
    resize: vertical;
    min-height: 120px;
  }

  &-submit {
    margin-top: var(--space-sm);
    border-radius: 999px;
    border: var(--stroke-sm) solid var(--color-cyan-400);
    background: var(--color-cyan-400);
    color: var(--color-white-400);
    font-weight: 800;
    padding: 10px 16px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  &-feedback {
    font-size: var(--font-size-sm);
    margin-top: var(--space-xxs);
    color: var(--color-white-400);

    &-error {
      color: var(--color-white-400);
    }

    &-success {
      color: var(--color-white-400);
    }
  }

  &-honeypot {
    display: none;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
