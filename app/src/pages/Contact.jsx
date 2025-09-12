import { Link } from 'react-router-dom'
import './styles/Contact.css'

const Contact = () => (
  <>
    <section>
      <div className="contact-top-background">
        <div className="absolute font-sans mb-40 size-auto flex items-center text-black text-bold text-4xl text-center pointer-events-auto text-balance">
          Contact Team 1280 – Ragin' C’ Biscuits
        </div>
        <div className="absolute font-sans ml-5 mr-5 mt-10 size-auto flex items-center text-black text-2xl text-center pointer-events-auto text-balance">
          Have a question about our team, sponsorship opportunities, outreach events, or joining as a member or mentor?
          <br></br>
          We’d love to hear from you.
        </div>
      </div>
    </section>
    <section>
      <div className="gen-inq-background">
        <div className="absolute font-sans mb-80 size-auto flex items-start text-white text-bold text-3xl text-center pointer-events-auto text-balance">
          General Inquiries
        </div>
        <div className="absolute font-sans size-auto flex items-center text-white text-base text-center pointer-events-auto text-balance">
          <ul>
            <li className="font-bold mt-10">Email: </li>
            {' '}
            sanramonvalleyrobotics@gmail.com
            <div className="contact-newline">
              <li className="font-bold mt-4">Mailing Address: </li>
              <ul>
                <li>San Ramon Valley High School</li>
                <li>501 Danville Blvd</li>
                <li>Danville, CA 94526</li>
              </ul>
            </div>
            <div className="contact-newline">
              <li className="font-bold mt-4">Team Location: </li>
              Danville, California
            </div>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div className="interest-background">
        <div className="absolute font-sans mb-80 size-auto flex items-start text-white text-bold text-3xl text-center pointer-events-auto text-balance">
          Interested in Joining or Mentoring?
        </div>
        <div className="absolute font-sans mb-30 size-auto flex items-center text-white text-base text-center pointer-events-auto text-balance">
          <ul>
            <li className="mt-15">We’re always excited to welcome new students and mentors!</li>
            <li className="mb-4">
              Visit our
              <Link to="/join" className="whitespace-nowrap">
                {' '}
                <u>Join Us page</u>
                {' '}
              </Link>
              or email us to learn more about:
            </li>
            <li>- How to join as a student</li>
            <li>- Mentorship roles (technical and non-technical)</li>
            <li>- Team events and training schedule</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div className="sponsor-background">
        <div className="absolute font-sans size-auto mb-50 flex items-start text-white text-3xl text-center pointer-events-auto text-balance">
          Sponsorship and Partnerships
        </div>
        <div className="absolute font-sans size-auto flex items-center text-white text-base text-center pointer-events-auto text-balance">
          <div>
            We rely on the support of sponsors to continue offering quality STEM education.
            <br></br>
            Visit our
            <Link to="/donate" className="whitespace-nowrap">
              {' '}
              <u>Sponsorship page</u>
              {' '}
            </Link>
            or email us at sanramonvalleyrobotics@gmail.com for partnership opportunities.
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Contact
