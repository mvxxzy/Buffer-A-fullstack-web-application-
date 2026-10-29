<script setup>
import Card from '../Card.vue'
import preview from '@/assets/preview.vue'
import Button from '../Button.vue'
import { computed, ref } from 'vue'

const emit = defineEmits(['onSubmit'])

const email = ref()
const password = ref()
const Confirmpassword = ref('')
const tC = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  tC: tC.value,
})

const isFormComplete = computed(() => {
  if (Object.values(form.value).every((val) => val.trim() !== '') && !err && !include) {
    return true
  } else {
    return false
  }
})

const include = computed(() => {
  return !/\d/.test(form.value.password)
})

const err = computed(() => {
  return form.value.password !== Confirmpassword.value
})

const valid = computed(() => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  return !emailRegex.test(form.value.email)
})

const errMessage = ref(false)
const submitForm = () => {
  if (isFormComplete) {
    alert('Form submitted successfully with: ' + form.value.firstName)
    emit('onSubmit', form)
  } else {
    errMessage = true
  }
}
</script>

<template>
  <div class="mains">
    <div>
      <h1 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '40px' }">Get started Now</h1>
      <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '13px' }">
        Set up your profile.
      </p>
    </div>

    <div class="flex">
      <Card :style="{ width: '70%' }">
        <form
          :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }"
          @submit.prevent="submitForm"
          id="myForm"
        >
          <label>
            First Name
            <div class="w-div">
              <input type="text" name="firstName" v-model="form.firstName" />
            </div>
          </label>

          <label>
            Last Name
            <div class="w-div">
              <input type="text" name="lastName" v-model="form.lastName" />
            </div>
          </label>

          <label>
            Email
            <div class="w-div">
              <input type="email" name="email" v-model="form.email" />
            </div>
            <p v-show="valid" :style="{ fontSize: '9px', fontFamily: 'Poppins', color: 'red' }">
              Enter a valid email address
            </p>
          </label>

          <label>
            Password
            <div class="w-div">
              <input type="password" name="password" v-model="form.password" />
            </div>
            <p v-show="include" :style="{ fontSize: '9px', fontFamily: 'Poppins', color: 'red' }">
              passwords must inlude numbers
            </p>
          </label>

          <label>
            Confirm Password
            <div class="w-div">
              <input type="password" name="confirmPassword" v-model="Confirmpassword" />
            </div>
            <p v-show="err" :style="{ fontSize: '9px', fontFamily: 'Poppins', color: 'red' }">
              passwords do not match
            </p>
          </label>

          <label>
            <input type="checkbox" name="t&c" v-model="tC" />
            i agree to the
            <a href="/">terms and condition</a>
          </label>

          <p v-show="errMessage" :style="{ fontSize: '9px', fontFamily: 'Poppins', color: 'red' }">
            Please fill the required fields
          </p>
        </form>
      </Card>

      <preview :width="400" :height="390" />
    </div>

    <div :style="{ backgroundColor: '#DBE1D8', height: '1px', width: '100%' }"></div>

    <div class="flex" :style="{ justifyContent: 'flex-end' }">
      <Button
        :style="{ backgroundColor: '#246B5D', color: '#FFFFFF', border: 'none', gap: '8px' }"
        type="submit"
        form="myForm"
      >
        Next
      </Button>
    </div>
  </div>
</template>

<style scoped>
.w-div {
  width: auto;
  height: auto;
  max-height: 63px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 9px 10px;
  background-color: transparent;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  gap: 0;
}
input {
  border: none;
  background-color: transparent;
  outline-style: none;
  color: #263a33;
  font-size: 13px;
  font-family: 'Inter';
}
.flex {
  display: flex;
  gap: 10px;
  width: 100%;
}
label {
  width: 100%;
  color: #263a33;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 600;
}
.mains {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
