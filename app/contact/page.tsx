
import ContactForm from "@/components/contact-form"

export default function ContactPage(){
    return(
        <section id="contact-page">
            <div className="py-20 px-6 lg:px-8 bg-background/80 border-t border-border">
                <h2>Contact Sarah Conner</h2>
                <ContactForm />
            </div>
        </section>
    )

}