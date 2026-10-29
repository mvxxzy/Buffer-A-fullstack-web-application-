<template>

    <div class="picker-control">
        <CDateRangePicker id="report-date-range" v-model:start-date="draftStartDate" v-model:end-date="draftEndDate"
            :style="pickerVariables" locale="en-GB" format="dd/MM/yyyy" placeholder="['Start date', 'End date']" footer
            today-button="Today" cancel-button="Cancel" confirm-button="Apply" calendars="2" first-day-of-week="1"
            close-on-select="false" class="report-date-picker" />
    </div>



</template>

<script setup>
import { computed, ref } from 'vue'
import { CDateRangePicker } from '@coreui/vue-pro'
import '@coreui/coreui-pro/dist/css/coreui.min.css'

const today = new Date()

function startOfDay(date) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
    )
}

function subtractDays(days) {
    const date = startOfDay(today)
    date.setDate(date.getDate() - days)
    return date
}
const draftStartDate = ref(subtractDays(6))
const draftEndDate = ref(startOfDay(today))




</script>

<style scoped>
.picker-control {
    display: grid;
    gap: 10px;
}

.report-date-picker {
    width: 100%;
}
</style>
