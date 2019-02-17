/** Set current date to the "Current date:" label area **/
const letsSetCurrentDate = () => { }

/** Calculate the number of months between current date and target date **/
const letsCalculateRemainingMonths = (currentDate, targetDate) => {}

/** Calculate the number of weeks between current date and target date **/
const letsCalculateRemainingWeeks = (currentDate, targetDate) => {}

/** Calculate the number of days between current date and target date **/
const letsCalculateRemainingDays = (currentDate, targetDate) => {}

/** Calculate the number of hours between current date and target date **/
const letsCalculateRemainingHours = (currentDate, targetDate) => {}

/** Calculate the monthly load value **/
const letsCalculateMonthlyLoad = (totalAmount, remainingMonths) => {}

/** Calculate the weekly load value **/
const letsCalculateWeeklyLoad = (totalAmount, remainingWeeks) => {}

/** Calculate the daily load value **/
const letsCalculateDailyLoad = (totalAmount, remainingDays) => {}

/** Calculate the hourly load value **/
const letsCalculateHourlyLoad = (totalAmount, remainingHours) => {}

/** Animation Section **/
let currentAnimationFrame
const animate = time => {
  _eid("currentDateLabel").innerHTML = Date()
  currentAnimationFrame = window.requestAnimationFrame(animate)
}
const letsStopClock = 
  () => window.cancelAnimationFrame(currentAnimationFrame)
const letsStartClock = 
  () => window.requestAnimationFrame(animate)

/***** Private Functions *****/

/** Retrieve DOM element by ID **/
const _eid = (x) => document.getElementById(x)

/// Auto Start Clock
letsStartClock()