import React from 'react'
import ReactPlayer from 'react-player'

function Ambassador() {
    return (
        <div>
            <div>
                <h1> Ambassador</h1>
            </div>
            <div className="maindiv">
                <p>In response to this time of unrest, BikramYogaWorks launched the "Breathe With Us" Ambassador Program. Allow us to explain why we decided to name the program "Breathe With Us". Today’s culture and climate can make it challenging for BIPOC (Black/Brown & Indigenous People of Color) to create space for self-care and wellness. The trauma from witnessing unjust acts of targeted violence towards people who like us, leaves us breathless. Today, we want to encourage you, your family, friends, & loved ones to breathe. We breathe because we cannot allow others to dictate how we breathe for ourselves; we breathe so that you can encourage those around us to find a moment of stillness to do the same; we breathe for those who continue to fight tirelessly for our freedom; finally, we breathe for those who cannot breathe anymore. Through the practice of yoga and fitness, we want this to be an opportunity for you to breathe NEW LIFE into yourself and those in your community.</p>
                <p>The Baltimore yoga studio’s campaign started after Blackett-Dibinga, 43, who is Black, took her three children to a George Floyd protest at a park in Washington, D.C., where they live. She was struck by the chorus of protesters repeatedly shouting “I Can’t Breathe!”</p>
                <p>“I could not bring myself to chant that,” said Blackett-Dibinga, who decided that night to use her teaching to encourage people to meditate, reflect and breathe. “I believe you speak things to existence.” - Washington Post</p>
            </div>

            <div className="twodivs">
                <div className="smalldiv" >
                <img src="" alt="no pic yet"/>
                </div>
                
                <div className="smalldiv">
                <p > As a thriving Black-Owned Holistic wellness company, our mission since inception has been to focus on building an inclusive community for people from all walks of life to improve their physical, spiritual and mental wellbeing throughthe art of yoga and fitness. We are determined to provide a safe space for all, no matter your background to continue the process of self-exploration and betterment.</p>
                </div>
                
            </div>

            <div className="twodivs">
                <div className="smalldiv">
                    <p> We are gifting ambassadors with an unlimited month of classes on our VIRTUAL PLATFORM. We are also extending this gift to their family, friends and loved ones, offering an unlimited 7-day trial to participate in virtual classes from Bikram Yoga, Vinyasa Yoga, Pilates, Core Conditioning, Resistance Training andmore, using a customized promo code. Friends and family who join our virtual classes willreceive 20% off their first-class package purchase. Additionally, ambassadors will receive a complimentary wellness box consisting of BYW merchandise, nutritional samples, recipes, and other wellness resources</p>
                </div>
                <div className='column'>
                    <img src="" alt="no pic yet"/> 
                    <button> Shop Now</button>
                </div>
            </div>
            <ReactPlayer url="https://bikramyogawellnessworks.com/video/ICTB_BYW.mp4"/>
            <div>
                <p>Additionally, ambassadors will receive a complimentary wellness box consisting of BYW merchandise, nutritional samples, recipes, and other wellness resources! As an in-kind partnership, Ambassadors are sharing their experiences across their social media platforms to help spread the importance of healthand wellness to their communities and networks. If you are interested in how you can become involved, contact info@bikramyogaworks with and questions or inquiries!</p>
                <button> Email Us</button>
                <button> Apply Here</button>
            </div>
        </div>
    )
}

export default Ambassador;