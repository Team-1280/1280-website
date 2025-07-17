import './styles/Contact.css'

const Contact = () => (
    <>
        <section>
            <div className='contact-top-background'>
                <div className='contact-page-heading'>
                    Contact Team 1280 – Ragin' C’ Biscuits
                </div>
                <div className='contact-page-subheading'>
                    Have a question about our team, sponsorship opportunities, outreach events, or joining as a member or mentor? We’d love to hear from you.
                </div>
            </div>
    </section>
    <section>
        <div className='gen-inq-background'>
            <div className='gen-inq-heading'>
                General Inquiries
            </div>
            <div className='gen-inq-subheading'>
                <div className='contact-newline'>
                <span className='contact-page-bold'>Email: </span>sanramonvalleyrobotics@gmail.com
                </div>
                <div className='contact-newline'>
                <span className='contact-page-bold'>Mailing Address: </span>
                San Ramon Valley High School
                501 Danville Blvd
                Danville, CA 94526
                </div>
                <div className='contact-newline'>
                <span className='contact-page-bold'>Team Location: </span>Danville, California
                </div>
            </div>
            <div className='contact-interested-heading'>
                Interested in Joining or Mentoring?
            </div>
            <div className='contact-interested-subheading'>
            We’re always excited to welcome new students and mentors!
            Visit our Join Us page or email us to learn more about:
            <div className='contact-newline'>How to join as a student</div>
            <div className='contact-newline'>Mentorship roles (technical and non-technical)</div>
            <div className='contact-newline'>Team events and training schedule</div>
            </div>
            <div className='contact-sponsors-heading'>
                Sponsorship and Partnerships
            </div>
            <div className='contact-sponsors-subheading'>
                We rely on the support of sponsors to continue offering quality STEM education.
                Visit our Sponsorship Page or email us at sanramonvalleyrobotics@gmail.com for our sponsorship packet and partnership opportunities.
            </div>
        </div>
    </section>
    </>
)

export default Contact;