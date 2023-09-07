import './styles.css'
import submitForm from './submitForm'

export default function App() {
   return (
      <form
         // Ignore the onSubmit prop, it's used by GFE to
         // intercept the form submit event to check your solution.
         action="https://www.greatfrontend.com/api/questions/contact-form"
         method="post"
         onSubmit={submitForm}
      >
         <div class="form-group">
            <label for="name">Name</label>
            <input
               required
               id="name"
               name="name"
               placeholder="name"
               type="text"
            />
         </div>
         <div class="form-group">
            <label for="email">Email</label>
            <input
               required
               id="email"
               name="email"
               placeholder="hello@email.com"
               type="email"
            />
         </div>
         <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
         </div>
         <div class="form-group">
            <button>Send</button>
         </div>
      </form>
   )
}
