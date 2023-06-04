import "./ContactFormStyles.css";

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send Us A Message</h1>

            <form>
                <input placeholder="Name"></input>
                <input placeholder="E-Mail"></input>
                <input placeholder="Subject"></input>
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button>Submit Form</button>
            </form>

        </div>

    )
}

export default ContactForm