import React from 'react'
import './Whatsapp.css'
function Whatsapp() {
  return (
   <>
    <div class="fixed-bottom-right2">
        <a
          href="mailto:support@leafcode.in"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-button"
        >
          <img src="/Email_icon.png" alt="WhatsApp" class="whatsapp-icon" />
        </a>
      </div>
      <div class="fixed-bottom-right">
        <a
          href="https://wa.me/+91"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-button"
        >
          <img src="/call_logo.webp" alt="WhatsApp" class="whatsapp-icon ic2" />
        </a>
      </div>
   </>
  )
}

export default Whatsapp