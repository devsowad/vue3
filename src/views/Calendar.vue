<template>
  <h2 class="text-4xl mb-10 font-bold text-secondary text-center">Calendar</h2>

  <div
    class="w-full max-w-lg mx-auto space-x-3 rounded-lg shadow-2xl p-8 text-lg"
  >
    <div class="flex justify-between text-2xl mx-4 mb-3">
      <p>{{ `${currentMonthName} ${currentYear}` }}</p>
      <div>
        <button
          @click="prev"
          class="material-icons items-center px-2 py-2 rounded-l-md text-md font-bold text-secondary hover:bg-gray-50 focus:bg-gray-200 focus:outline-none"
        >
          chevron_left
        </button>
        <button
          @click="next"
          class="material-icons items-center px-2 py-2 rounded-r-md text-md font-bold text-secondary hover:bg-gray-50 focus:bg-gray-200 focus:outline-none"
        >
          chevron_right
        </button>
      </div>
    </div>
    <div class="flex w-full" style="margin: 0">
      <p
        class="text-center py-3"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </div>
    <div class="flex w-full flex-wrap" style="margin: 0">
      <p style="width: 14.28%" v-for="num in getStartDay()" :key="num"></p>
      <p
        class="text-center py-3 rounded-full hover:bg-primary transition-colors hover:text-white"
        style="width: 14.28%"
        v-for="num in getDaysInMonth()"
        :key="num"
        :class="getCurrentDateClass(num)"
      >
        {{ num }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentMonth, this.currentMonth - 1).toLocaleString(
        "default",
        {
          month: "long",
        }
      );
    },
  },
  methods: {
    getDaysInMonth() {
      return new Date(this.currentYear, this.currentMonth, 0).getDate();
    },
    getStartDay() {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
    },
    next() {
      if (this.currentMonth == 12) {
        this.currentYear++;
        this.currentMonth = 1;
      } else this.currentMonth++;
    },
    prev() {
      if (this.currentMonth == 1) {
        this.currentYear--;
        this.currentMonth = 12;
      } else this.currentMonth--;
    },
    getCurrentDateClass(num) {
      const date = new Date();

      if (date.getDate() === num) {
        const calendarFullDate = new Date(
          this.currentYear,
          this.currentMonth - 1,
          num
        ).toDateString();
        const currentFullDate = date.toDateString();

        return calendarFullDate === currentFullDate
          ? "bg-secondary text-white"
          : "";
      }
    },
  },
};
</script>

<style>
</style>