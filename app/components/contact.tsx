'use client'
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSending, setEmailSending] = useState(false);
    function sendEmail() {
        if (emailSending) return;
        setEmailSending(true);
        // Send email
        fetch("api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw response;
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            alert(data.message);
            // reload the page to clear the form
            window.location.reload();
        })
        .catch((error) => {
            if (error.status === 500) {
                // Handle 500 status differently
                // Assuming the error response is also in JSON format
                error.json().then((errorData: { message: any; }) => {
                    console.error('There was an error!', errorData);
                    alert(errorData.message); // alert with the message from the server
                });
            } else {
                console.error('There was an error!', error);
                alert("There was an error sending the email");
            }
            setEmailSending(false); // let the user try again
        });
    }

    function handleSubmit(event) {
        console.log('submiting form');
        event.preventDefault();
        sendEmail();
    }
    return(
        <section className="bg-secondary tablet-s:px-[2rem] mobile:px-[1rem] relative z-[10]">
            <h1 className="text-primary tracking-wide z-[10]">CONTACT US TODAY TO LEARN MORE</h1>
            <form className="flex flex-col py-[2rem] px-[4rem] tablet-s:px-[2rem] mobile:px-[1rem] my-[3rem] rounded-2xl w-[55rem] tablet-s:w-[100%] m-auto 
            gap-8 font-[500] font-[Outfit] text-[1.2rem] text-dark duration-300 tablet-s:text-[1rem] z-[10]" onSubmit={handleSubmit}>
                <input id="name" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required
                className="rounded-2xl px-4 py-2 z-[10]"></input>
                <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="rounded-2xl px-4 py-2 z-[10]"></input>
                <textarea id="message" placeholder="We want to hear more about what you're looking for" value={message} onChange={(e) => setMessage(e.target.value)} required
                className="rounded-2xl p-4 h-[15rem] z-[10] tablet-s:h-[12rem]"></textarea>
                <button type="submit" className="bg-primary rounded-2xl p-3 font-[700] hover:bg-accent hover:text-primary duration-300 z-[10]">SEND MESSAGE</button>
            </form>
            <img src="images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-20 z-[0] pointer-events-none" />
        </section>
    )
}