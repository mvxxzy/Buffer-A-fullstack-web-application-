<script setup>
import NavBar from '../NavBar.vue'
import Logo from '@/assets/Logo.vue'
import Card from '../Card.vue'
import Button from '../Button.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import WebStartingPoint from './WebStartingPoint.vue'
import WebYourProfile from './WebYourProfile.vue'
import { Icon } from '@iconify/vue'
const tabs = ref([
  { label: 'Your Profile', status: 'pending' },
  { label: 'Your Starting Point', status: 'pending' },
  { label: 'Review plan', status: 'pending' },
])

const checked = computed(() => tabs.status)
const activeTab = ref('Your Profile')

const Details = ref()
const saveDet = (e) => {
  Details.value = e.value
  activeTab.value = 'Your Starting Point'
  updateTabStatus('Your Profile')
}

function updateTabStatus(target) {
  const targetTab = tabs.value.find((tab) => tab.label === target)

  if (targetTab) {
    targetTab.status = 'passed'
  }
}
</script>

<template>
  <div class="main">
    <NavBar :style="{ padding: '0px' }">
      <div :style="{ flexDirection: 'row', display: 'flex', alignItems: 'center', gap: '10px' }">
        <logo size="30" />
        <h2>Buffer</h2>
      </div>
      <div>
        <p :style="{ fontSize: '11px', color: '#66756E', fontFamily: 'Inter' }">
          NO ACCOUNT NEEDED
        </p>
      </div>
    </NavBar>
    <div class="line"></div>
    <div class="flex">
      <div
        v-for="(tab, index) in tabs"
        :style="{ display: 'flex', flexDirection: 'column', gap: '13px', width: '333px' }"
      >
        <div :style="{ display: 'flex', height: '20px', gap: '9px' }">
          <div
            :style="{
              height: '20px',
              width: '20px',
              borderRadius: '100px',
              backgroundColor: activeTab === tab.label ? '#286555' : '#E5EFE9',
              justifyItems: 'center',
              alignItems: 'center',
            }"
          >
            <Icon
              icon="lucide:check"
              width="12"
              height="12"
              color="#286555"
              v-if="tab.status === 'passed'"
            />
            <h4 v-else class="txt" :style="{ color: '#fff' }">
              {{ index + 1 }}
            </h4>
          </div>
          <p class="txt">{{ tab.label }}</p>
        </div>
        <div
          class="line"
          :style="{
            backgroundColor: activeTab === tab.label ? '#246B5D' : '#DBE1D8',
            height: '3px',
          }"
        ></div>
      </div>
    </div>

    <WebYourProfile v-show="activeTab === 'Your Profile'" @on-submit="saveDet" />
    <WebStartingPoint v-show="activeTab === 'Your Starting Point'" :details="Details" />
  </div>
</template>

<style scoped>
.main {
  padding: 32px 180px 32px 180px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.flex {
  display: flex;
  gap: 32px;
  width: 100%;
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
</style>
