// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import and initialize custom audio player
import Plyr from 'plyr';
const players = Plyr.setup('.custom-player', {
  speed: {
    selected: 1,
    options: [0.5, 0.75, 1]
  },
  disableContextMenu: false,
});

// Contact form submission
const form = document.getElementById('contact-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // GET FORM DATA 
})

// render schedule data
import { getScheduleHtml } from './schedule';
getScheduleHtml()


