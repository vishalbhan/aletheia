import { useState, useEffect, useRef } from 'react'

export default function EnquiryForm() {

    const [formStatus, setFormStatus] = useState('')
    const formRef = useRef()

    useEffect(() => {
        formRef.current.addEventListener("submit", handleSubmit);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        let myForm = document.getElementById('enquiryForm');
        let formData = new FormData(myForm)
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => setFormStatus('sent'))
        .catch((error) => alert(error))
    }

    return (
        <form ref={formRef} id="enquiryForm" name="enquiry-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="enquiry-form" />
            <div className="input-group">
                <label htmlFor="parent-name">Name of Parent/Guardian</label>
                <input type="text" id="parent-name" name="parent-name" required />
            </div>

            <div className="input-group">
                <label htmlFor="parent-email">Parent/Guardian Email Address</label>
                <input type="email" id="parent-email" name="parent-email" required />
            </div>

            <div className="input-group">
                <label htmlFor="student-name">Name of Student</label>
                <input type="text" id="student-name" name="student-name" required />
            </div>

            <div className="input-group">
                <label htmlFor="current-curriculum">Current Curriculum</label>
                <input type="text" id="current-curriculum" name="current-curriculum" placeholder="e.g. IB MYP, GCSE, IB Diploma, A-Level, etc." required />
            </div>

            <div className="input-group">
                <label>Service Required</label>
                <div className="radio-container">
                    <div className="radio-group">
                        <input className="radio-input" type="radio" id="mid-year" name="service-required" value="Mid-Year" required />
                        <label className="radio-label" tabIndex="0" htmlFor="mid-year">Mid-Year</label>
                    </div>
                    <div className="radio-group">
                        <input className="radio-input" type="radio" id="6th-form" name="service-required" value="6th Form" />
                        <label className="radio-label" tabIndex="0" htmlFor="6th-form">6th Form</label>
                    </div>
                    <div className="radio-group">
                        <input className="radio-input" type="radio" id="undergraduate" name="service-required" value="Undergraduate" />
                        <label className="radio-label" tabIndex="0" htmlFor="undergraduate">Undergraduate</label>
                    </div>
                    <div className="radio-group">
                        <input className="radio-input" type="radio" id="graduate" name="service-required" value="Graduate" />
                        <label className="radio-label" tabIndex="0" htmlFor="graduate">Graduate</label>
                    </div>
                    <div className="radio-group">
                        <input className="radio-input" type="radio" id="university-advice" name="service-required" value="University Advice" />
                        <label className="radio-label" tabIndex="0" htmlFor="university-advice">University Advice</label>
                    </div>
                    <div className="radio-group">
                        <input className="radio-input" type="radio" id="careers-advice" name="service-required" value="Careers Advice" />
                        <label className="radio-label" tabIndex="0" htmlFor="careers-advice">Careers Advice</label>
                    </div>
                </div>
            </div>

            <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" />
            </div>

            <div className="text-center span-2">
                {
                    formStatus === 'sent' ? (
                        <p>Enquiry sent, we'll be in touch soon!</p>
                    ) : (
                        <button>Send Enquiry</button>
                    )
                }
            </div>

        </form>
    )
}
