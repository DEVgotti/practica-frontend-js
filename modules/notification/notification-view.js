export function buildNotification(message, type) {
  return `
    <div class="notifications-container">
      <div class="${type}-alert">
        <div class="flex">
          <div class="flex-shrink-0">
            
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="${type}-svg">
              <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
            </svg>
          </div>
          <div class="${type}-prompt-container">
            <p class="${type}-prompt-heading">ERROR!
            </p><div class="${type}-prompt-wrap">
              ${message}
          </div>
          </div>
        </div>
      </div>
    </div>
  `
}
