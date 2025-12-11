import './styles/Donate.css'

const Donate = () => (
  <>
    <head>
      <link rel="canonical" href="https://www.team1280.com/donate" />
      <title>Donate</title>
    </head>
    <div className="relative w-full font-sans text-left">
      <img src="/donate.png" className="absolute object-cover h-full min-w-full -z-1" />
      <div className="h-20"></div>
      <div className="h-auto lg:min-w-100 size-auto lg:mx-[20dvw] px-10 lg:px-20 bg-gray-600/80 backdrop-blur-[6px] flex flex-col items-stretch py-6">
        <section>
          <div className="font-bold donate-heading">Support Team 1280 – Become a Sponsor</div>
          <div className="new-line-sponsor">
            <div className="donate-text">
              Team 1280, the Ragin’ C Biscuits, is a student-led robotics team based at San Ramon Valley High School.
              We do not charge membership dues, so we rely entirely on the generosity of companies and parents to fund our operations each year
              — from tools and materials to competition fees and outreach events.
            </div>
            <div className="donate-page-banner-text">
              Team 1280 is a tax-deductible program under the San Ramon Valley Unified School District (SRVUSD).
              <div className="new-line-sponsor">Tax ID: 68-0273221</div>
              <div className="new-line-sponsor">Donation receipts and certificates available upon request.</div>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://sanramon.myschoolcentral.com/Index.aspx#/1222473/product/35244" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center donate-page-donate-button w-1/3">
                Donate
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="corporate-sponsor-heading mt-10">
            Corporate Sponsorship
          </div>
          <div className="corporate-sponsor-text">
            We welcome support from local businesses and national companies who believe in empowering the next generation of innovators.
            Your sponsorship directly funds:
            <div className="spacer-sponsor"></div>
            <div className="new-line-sponsor">
              - Competition robot materials and tools
            </div>
            <div className="new-line-sponsor">
              - Event registration and travel
            </div>
            <div className="new-line-sponsor">
              - Community STEM outreach and workshops
            </div>
            <div className="new-line-sponsor">
              - Safety equipment and training resources
            </div>
            <div className="spacer-sponsor"></div>
            Want to support us or learn more?
            <br></br>
            Email us at: sanramonvalleyrobotics@gmail.com
            <br></br>
            Tax certificate available upon request.
          </div>
        </section>
        <section>
          <div className="parent-contribution-heading">
            Parent Contributions
          </div>
          <div className="parent-contribution-text">
            Parents play a critical role in helping our team thrive. Your donations help cover:
            <div className="spacer-sponsor"></div>
            <div className="new-line-sponsor">
              - Robot parts and electronics
            </div>
            <div className="new-line-sponsor">
              - Safety gear for the shop
            </div>
            <div className="new-line-sponsor">
              - Competition logistics and travel
            </div>
            <div className="new-lin-sponsor">
              - Meals during events and build season
            </div>
            <div className="spacer-sponsor"></div>
            We appreciate every donation, small or large, as it helps give our students access to life-changing STEM experiences without financial barriers.
            Suggested donation: $350–$500 per season.
            (But any amount is welcome!)
            <br></br>
            For questions, contact: sanramonvalleyrobotics@gmail.com
          </div>
        </section>
      </div>
      <div className="h-20"></div>
    </div>
  </>
)

export default Donate
