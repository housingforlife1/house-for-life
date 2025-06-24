import { ContactFormSection } from "./sections/ContactFormSection";

export default function Contact(){
    return (
        <>
            {/* Contact Form Section */}
            <div className="min-h-[calc(100vh-16px)] m-2 rounded-xl overflow-hidden ">
                <div className="w-full h-auto md:min-h-[calc(100vh-16px)] bg-[url('/assets/img/hero-img-news.png')] bg-cover bg-[50%_50%] py-32">
                    <ContactFormSection />
                </div>
            </div>
        </>
    )
}