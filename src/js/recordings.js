import { recordingsData } from '../files/data/recordingsData'
import { initializePlayers } from './customPlayers'

function formatDate(givenDate) {
  let date = new Date(Date.parse(givenDate))
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  }
  return date.toLocaleString('en-US', options)
}

export function getRecordingsHtml() {
  const recordingsSection = document.getElementById('audio')
  let recordingsHtml = ''
  
  for (let item of recordingsData) {
    
    let formattedDate = formatDate(item.date)

      recordingsHtml += `
        <div class="card text-center col-lg-5 col-md-12 rounded bg-secondary text-white mt-5" >
          <div class="card-body">
            <h1 class="card-title fw-bolder">${formattedDate}</h1>
            <p class="card-subtitle py-2">${item.anthem}</p>
            <div class="plyr-container">
              <audio class="custom-player" controls>
                <source src="${item['anthem-src']}"/>
              </audio>
            </div>
            <p class="card-subtitle py-3">${item.offertory}</p>
            <div class="plyr-container">
              <audio class="custom-player" controls>
                <source src="${item['offertory-src']}"/>
              </audio>
            </div>
          </div>
        </div>`
      }
      recordingsSection.innerHTML += recordingsHtml 
      
      initializePlayers()
  }

  export function getYoutubeHtml() {
    const youtubeSection = document.getElementById('youtube')
    let youtubeHtml = ''

    for (let item of recordingsData) {
      let formattedDate = formatDate(item.date)

      console.log(item['anthem-type'])

      if (item['anthem-type'] == 'youtube') {
        youtubeHtml += ` <div class="card text-center col-lg-5 col-md-12 rounded bg-secondary text-white mt-5" >
        <div class="card-body">
          <h1 class="card-title fw-bolder">${formattedDate}</h1>
          <p class="card-subtitle py-2">${item.anthem}</p>
          <div class="plyr-container">
            <div class="plyr__video-embedr custom-player" >
              <iframe 
                src="${item['anthem-src']}"
                allowfullscreen
                allowtransparency
                allow="autoplay"
              ></iframe>
            </div>
          </div>
          <p class="card-subtitle py-3">${item.offertory}</p>
          <div class="plyr-container">
            <div class="plyr__video-embedr custom-player" >
              <iframe 
                  src="${item['offertory-src']}"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>`
      }
    }
    youtubeSection.innerHTML += youtubeHtml 
      
    initializePlayers()
  }