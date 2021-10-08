import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/juanmaperezpauso/" target="_blank" rel="noreferrer">
        <svg className="logoFooter" width="50" height="50" viewBox="0 0 50 50">
          <path d="M.11 41.08V8.92C.99 4.075 4.075.991 8.92.111H41.08c4.846.88 7.93 3.964 8.81 8.81V41.08c-.88 4.845-3.964 7.93-8.81 8.81H8.92C4.075 48.568.99 45.925.11 41.08zm26.872-1.762v-1.322-10.132c0-.881.44-2.203.881-3.084.881-1.762 2.203-2.203 3.965-2.203s2.643 1.322 3.524 2.643c.44.882.44 1.763.44 2.644v11.454h6.168V23.899c0-3.524-1.762-6.167-5.286-7.049-3.524-.88-6.608 0-8.81 2.644h-.441V16.41h-6.168v22.908h5.727zm-16.3-22.908v22.908h6.168V16.41h-6.167zm6.609-6.167c0-2.203-1.763-3.525-3.525-3.525-2.202 0-3.524 2.203-3.524 3.525 0 2.202 1.762 3.524 3.524 3.524s3.525-1.322 3.525-3.524z" />
        </svg>
        </a>
        
        <a href="https://dribbble.com/Pauso" target="_blank" rel="noreferrer">
        <svg className="logoFooter" width="64" height="64" viewBox="0 0 64 64">
          <path d="M31.78.503C14.598.503.502 14.599.502 31.78c0 17.18 14.097 31.278 31.277 31.278 17.181 0 31.278-14.097 31.278-31.278C63.057 14.6 49.401.503 31.779.503zM52.483 15.04c3.525 4.405 6.168 10.132 6.168 16.74-.881-.44-9.692-2.203-18.502-.881-.881-1.762-1.322-3.524-2.203-5.286 9.691-3.965 14.097-9.692 14.537-10.573zm-2.643-3.084c-.44.881-4.405 6.168-14.097 9.692-4.405-7.93-9.25-14.538-10.132-15.419 8.37-2.202 17.621 0 24.23 5.727zM20.766 7.991c.881.882 5.287 7.49 9.692 15.419-12.335 3.084-23.348 3.084-24.67 3.084 1.762-8.37 7.49-14.978 14.978-18.503zM5.348 31.78v-.881c1.321 0 14.097 0 27.313-3.965.88 1.322 1.321 3.084 2.202 4.405-9.691 2.644-18.502 10.573-22.907 18.062C7.99 44.996 5.348 38.828 5.348 31.78zM15.48 52.925c2.643-5.726 10.132-13.215 21.145-16.74 3.525 9.692 5.287 18.062 5.727 20.265-8.37 3.524-18.943 2.643-26.872-3.525zm31.277 1.322c-.44-1.762-1.762-9.251-5.286-18.943 8.37-1.321 15.86.881 16.74 1.322-.88 7.048-5.286 13.216-11.453 17.621z" />
        </svg>
        </a>
        

        <a href="https://github.com/JuanmaPauso" target="_blank" rel="noreferrer">
        <svg className="logoFooter" width="65" height="64" viewBox="0 0 65 64">
          <path
            fill-rule="evenodd"
            d="M.62 33.102C.62 15.48 15.159.943 32.78.943c18.061 0 32.158 14.097 32.158 31.718 0 14.097-9.251 25.991-22.026 30.396-1.762.441-2.203-.44-2.203-1.321v-8.81c0-2.644-.881-4.846-2.203-5.727 7.049-.882 14.538-3.525 14.538-15.86 0-3.524-.881-6.607-3.084-8.81 0-.182.056-.457.13-.82.284-1.39.828-4.054-.57-7.55 0 0-2.644-.881-8.811 3.083-2.643-.44-5.286-.88-7.93-.88-2.643 0-5.286 0-7.93.88-6.166-3.964-8.81-3.083-8.81-3.083-1.474 3.685-.79 6.445-.527 7.507.051.207.087.35.087.422-1.762 2.643-3.084 5.287-3.084 8.81 0 12.336 7.49 14.979 14.538 15.86-.881.881-1.762 2.203-2.203 4.405-1.032.516-3.122 1.183-5.207.674.14.169.16.408-.08.648h-.44c-.44 0-.88-.44-.88-.44 0-.368.306-.43.664-.44-1.22-.474-2.395-1.412-3.308-3.084v.88s-.44 0-.88-.44v-.882s.439 0 .879.44a7.241 7.241 0 00-.88-1.02v.14h-.44c0-.168-.065-.272-.12-.361-.062-.101-.112-.182-.042-.316a7.76 7.76 0 00-1.187-.795c.027.082.027.15.027.15h-.44c-.441 0-.441-.44-.441-.44h.252a6.336 6.336 0 00-1.574-.44s-3.084-.441 0 1.762c0 0 2.203 1.321 3.524 4.845 0 0 1.762 5.727 10.573 3.965v6.167c0 .441-.44 1.763-2.203 1.322C9.872 59.093.621 47.198.621 33.102zm15.86 18.502h.881c.273 0 .208-.169.12-.401-.055-.144-.12-.312-.12-.48h-.88c-.221.22-.331.33-.331.44 0 .11.11.22.33.44zm5.287 1.321c.44 0 .88 0 .88-.44 0 0-.44-.44-.88-.44s-.881 0-.881.44.44.44.88.44zm3.083 0c.44 0 .44 0 .44-.44-.44-.44-.44-.44-.88-.44 0 0-.44 0-.44.44s.44.44.88.44z"
            clip-rule="evenodd"
          />
        </svg>
        </a>
        
      </div>
      <p>Juanma Pérez © 2021</p>
    </footer>
  );
};

export default Footer;