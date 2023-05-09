import { data } from '../files/data'

export function getScheduleHtml() {
  const scheduleListGroup = document.getElementById('schedule-list-group')
  let scheduleHtml = ''
  
  for (let item of data) {
    // these lines skip past dates
    let date = new Date(Date.parse(item.date))
    if (date <= Date.now()) {
      scheduleHtml += `
      <li class="list-group-item d-lg-flex  align-items-center justify-content-center text-center">
        <p class="mb-lg-0 mb-md-1">${item.date}</p>
        <h5 class="mx-auto mb-lg-0">${item.name}</h5>
        <p class="mb-lg-0 mb-md-1">${item.time}</p>
      </li>`
      }
      scheduleListGroup.innerHTML = scheduleHtml  
    }

   
}

