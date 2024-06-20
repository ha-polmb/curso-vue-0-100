<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-12 col-md-6 q-pt-xl"
      >
        <q-input
          filled
          v-model="userForm.email"
          label="Email"
          type="email"
          lazy-rules
          no-error-icon
          :rules="[
            (val) => (val && val.length > 0) || 'Please type something',
            (val) => isValidEmail(val),
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password1"
          label="Password"
          lazy-rules
          no-error-icon
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Repeat password"
          lazy-rules
          no-error-icon
          :rules="[
            (val) => (val && val.length > 0) || 'Please type something',
            (val) => isSamePassword(val),
          ]"
        />

        <q-checkbox
          v-model="userForm.conditions"
          label="I accept T&C"
          :style="
            userForm.errorInConditions && !userForm.conditions && 'color: red'
          "
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn unelevated label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

defineOptions({
  name: "FormsPage",
});

const userForm = ref({
  email: "",
  password1: "",
  password2: "",
  conditions: false,
  errorInConditions: false,
});

const isValidEmail = (val) => {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || "El correo no parece ser válido";
};

const isSamePassword = (val) => {
  return val === userForm.value.password1 || "Las contraseñas no coinciden";
};

const onSubmit = () => {
  userForm.value.errorInConditions = false;

  if (!userForm.value.conditions) {
    $q.notify({
      type: "negative",
      message: "Debe aceptar condiciones",
      icon: "las la-exclamation-circle",
    });
    userForm.value.errorInConditions = true;
    return;
  }
};

const onReset = () => {
  userForm.value = {
    email: "",
    password1: "",
    password2: "",
    conditions: false,
    errorInConditions: false,
  };
};
</script>
