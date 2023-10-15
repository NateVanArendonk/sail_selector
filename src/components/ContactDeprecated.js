import React from "react";
import SubmitButton from "./SubmitButton";
import ContactModal from "./ContactModal";

export default function ContactDeprecated(props) {
    return (
        <section class="bg-white">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-5xl tracking-tight font-bold text-center text-gray-900">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a feature? Need details about how to use the recommendations? Let us know.</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 transition hover:scale-105" placeholder="name@email.com" required>
                    </input>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 transition hover:scale-105" placeholder="Let us know how we can help you" required>
                    </input>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 transition hover:scale-105" placeholder="Leave a comment..."></textarea>
                </div>
                <SubmitButton buttonText={'Send Message'} onClick={() => props.setShowContactModal(true)}/>
            </form>
        </div>

        <ContactModal setShowContactModal={props.setShowContactModal} showContactModal={props.showContactModal}/>
        </section>
    )
}
