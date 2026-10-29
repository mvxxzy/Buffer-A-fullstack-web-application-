<script setup>
import Card from '../Card.vue'
import Button from '../Button.vue'
import { ref, computed, toRaw } from 'vue'
import dateRangePicker from '../dateRangePicker.vue'
import datePicker from '../datePicker.vue'

const today = new Date()
const props = defineProps(['details'])

const Detail = computed(() => props.details)
console.log(Detail.value)
const currency = ref('')
const currencies = [
  { name: 'USD — US dollar ', symbol: '$' },
  { name: 'CAD — Canadian dollar ', symbol: '$' },
  { name: 'NGN — Nigerian Naira ', symbol: '₦' },
]

const occurences = ['One-off project', 'Long term project']
const occurence = ref('')

const timeframe = ref('')

const device = ref(true)
const online = ref(false)

const student = ref(false)
const freelancer = ref(true)
const selectOpt1 = (type) => {
  if (type === 'device') {
    device.value = true
    online.value = false
  } else if (type === 'online') {
    device.value = false
    online.value = true
  }
}
const selectOpt2 = (type) => {
  if (type === 'freelancer') {
    freelancer.value = true
    student.value = false
  } else if (type === 'student') {
    freelancer.value = false
    student.value = true
  }
}

const cash = ref()
const saving = ref()
const startingBal = computed(() => cash.value - saving.value)

const income = ref()
</script>

<template>
  <div class="mains">
    <div>
      <h1 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '40px' }">
        Let’s start where you are.
      </h1>
      <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '13px' }">
        A few honest numbers are enough. You can change everything later.
      </p>
    </div>
    <div class="flex">
      <div class="colBox">
        <Card>
          <div>
            <h4
              :style="{
                color: '#263A33',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: '600',
              }"
            >
              What does your income look like?
            </h4>
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '10px' }">
              Choose a starting profile, not a fixed identity.
            </p>
          </div>

          <div class="flex" :style="{ gap: '20px' }">
            <Card
              :style="{
                width: '50%',
                padding: '16px',
                backgroundColor: freelancer ? '#E5EFE9' : '',
                cursor: 'pointer',
              }"
              @click="selectOpt2('freelancer')"
            >
              <Icon icon="lucide:square" color="#246B5D" stroke-width="2" />
              <h3 :style="{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '600' }">
                Freelancers
                <Icon icon="lucide:check" v-show="freelancer" />
              </h3>
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Projects and retainers
              </p>
            </Card>

            <Card
              :style="{
                width: '50%',
                padding: '16px',
                backgroundColor: student ? '#E5EFE9' : '',
                cursor: 'pointer',
              }"
              @click="selectOpt2('student')"
            >
              <Icon icon="lucide:diamond" color="#246B5D" stroke-width="2" />
              <h3 :style="{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '600' }">
                Students
                <Icon icon="lucide:check" v-show="student" />
              </h3>
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Allowance and shifts
              </p>
            </Card>
          </div>

          <div class="w-div">
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">Your name</p>
            <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '14px' }">
              {{ Detail?.firstName }} {{ Detail?.lastName }}
            </p>
          </div>
        </Card>

        <!-- second card-->
        <Card>
          <div>
            <h4
              :style="{
                color: '#263A33',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: '600',
              }"
            >
              Your starting balance
            </h4>
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '10px' }">
              As of {{ today }} · include only money you already have.
            </p>
          </div>

          <div class="flex" :style="{ gap: '20px' }">
            <div class="w-div" :style="{ width: '50%' }">
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Total cash on hand
              </p>
              <label>
                {{ currency.symbol }}<input placeholder="7000.00" type="number" v-model="cash" />
              </label>
            </div>

            <div class="w-div" :style="{ width: '50%' }">
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Protected savings
              </p>
              <label
                >{{ currency.symbol }}
                <input placeholder="2400.00" type="number" v-model="saving" />
              </label>
            </div>
          </div>

          <div class="w-div" :style="{ backgroundColor: '#E5EFE9' }">
            <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '12px' }">
              {{ startingBal }} available for your plan
            </p>
            <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '11px' }">
              {{ cash }} cash − ${{ saving }} protected savings. Expected income is not included.
            </p>
          </div>

          <div class="flex" :style="{ gap: '20px' }">
            <div class="w-div" :style="{ width: '50%' }">
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Total cash on hand
              </p>

              <select v-model="currency">
                <option :value="currency" selected disabled>Select Currency</option>
                <option v-for="curren in currencies" :value="curren">{{ curren.name }}</option>
              </select>
            </div>

            <div class="w-div" :style="{ width: '50%', maxHeight: '100px' }">
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Planning horizon
              </p>
              <dateRangePicker />
            </div>
          </div>
        </Card>

        <!--third card-->

        <Card>
          <div>
            <h4
              :style="{
                color: '#263A33',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: '600',
              }"
            >
              A first look at upcoming income
            </h4>
          </div>

          <div class="flex" :style="{ gap: '20px' }">
            <div class="w-div" :style="{ width: '50%' }">
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Income source
              </p>
              <label>
                <input />
              </label>
            </div>

            <div class="w-div" :style="{ width: '50%' }">
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Next payout estimate
              </p>
              <label>
                {{ currency.symbol }}
                <input placeholder="$1200.00" v-model="income" type="number" />
              </label>
            </div>
          </div>

          <div class="flex" :style="{ gap: '20px' }">
            <div class="w-div" :style="{ width: '50%', maxHeight: '100px' }">
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
                Expected date
              </p>
              <datePicker />
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '9px' }">
                An estimate, not a guarantee
              </p>
            </div>

            <div class="w-div" :style="{ width: '50%' }">
              <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">Recurrence</p>
              <select v-model="occurence">
                <option :value="occurence" selected disabled>Select recurrence</option>
                <option v-for="occur in occurences" :value="curren">{{ occur }}</option>
              </select>
            </div>
          </div>
        </Card>
      </div>

      <div class="colBox" :style="{ width: '35%' }">
        <Card>
          <h4
            :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '14px', fontWeight: '600' }"
          >
            Where should your plan live?
          </h4>
          <Card :style="{ padding: '16px', backgroundColor: device ? '#E5EFE9' : '' }">
            <label>
              <input
                type="radio"
                name=""
                @click="selectOpt1('device')"
                :checked="device"
                :style="{ accentColor: '#263A33' }"
              />
              On this device
            </label>
            <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '12px' }">
              Start locally, without signing in.
            </p>
          </Card>

          <Card :style="{ padding: '16px', backgroundColor: online ? '#E5EFE9' : '' }">
            <label>
              <input
                type="radio"
                name=""
                @click="selectOpt1('online')"
                :checked="online"
                :style="{ accentColor: '#263A33' }"
              />
              Optional synced account
            </label>
            <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '12px' }">
              Choose to sign in for access across devices.
            </p>
          </Card>

          <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
            Local-only uses browser storage. It isn’t encrypted by Buffer and won’t sync. Clearing
            browser data can delete your plan.
          </p>
          <p
            :style="{
              color: '#246B5D',
              fontFamily: 'Inter',
              fontSize: '10px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '1px',
            }"
          >
            Read storage choices
            <Icon icon="mdi:arrow-right" />
          </p>
        </Card>
        <Card :style="{ backgroundColor: '#E5EFE9' }">
          <h4
            :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }"
          >
            Your first plan
          </h4>
          <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">
            Spendable starting balance
          </p>
          <h1
            :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '30px', fontWeight: '600' }"
          >
            ${{ startingBal }}
          </h1>
          <div class="line"></div>
          <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '11px' }">
            Protected savings · ${{ saving }}
          </p>
          <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '11px' }">
            Expected October income · ${{ income }}
          </p>
          <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '11px' }">
            Planning through · 31 December
          </p>

          <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '9px' }">
            Next: check essentials and your monthly spending limit.
          </p>
        </Card>
      </div>
    </div>
    <div :style="{ backgroundColor: '#DBE1D8', height: '1px', width: '100%' }"></div>

    <div class="flex" :style="{ justifyContent: 'space-between' }">
      <Button>Back</Button>
      <Button :style="{ backgroundColor: '#246B5D', color: '#FFFFFF', border: 'none', gap: '8px' }">
        <Icon icon="mdi:arrow-right" />Review my plan
      </Button>
    </div>
  </div>
</template>

<style scoped>
.mains {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.flex {
  display: flex;
  gap: 32px;
  width: 100%;
}

.colBox {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 65%;
}

.line {
  background-color: #dbe1d8;
  height: 1px;
  width: 100%;
}

.txt {
  font-size: 11px;
  font-family: 'Inter';
  color: #66756e;
}

h2 {
  font-size: 28px;
  font-weight: bold;
  color: #263a33;
  font-family: 'Lora';
}

.w-div {
  width: auto;
  height: auto;
  max-height: 63px;
  display: flex;
  flex-direction: column;
  padding: 9px 11px 9px 11px;
  background-color: transparent;
  border: 1px solid #dbe1d8;
  border-radius: 8px;
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

select {
  outline-style: none;
  border: none;
  width: fit-content;
  color: #263a33;
  font-size: 13px;
  font-family: 'Inter';
  background-color: transparent;
}

p {
  margin: 0;
}

label {
  font-size: 14px;
  color: #263a33;
  font-family: 'Inter';
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 5px;
}

h1 h2 h3 h4 {
  margin: 0;
}
</style>
