import React from 'react';

function Faq() {
    
  let questions = [
      {
          question: "I’m currently a member but when I try to book classes, it asks for payment. The system doesn’t allow you to book past your current paid date.",
          answer: ["If your payment is near due and you want to pre-register then send us an email, info@bikramyogaworks.com and we can handle the registration. Once your payment goes through for the following month you will be able to book as normal for the next 30 days."]
      },
      {
        question: "Do you offer discounts on your memberships or class packages?",
        answer: ["We do not offer additional discounts on these already discounted passes. We are committed to giving you the best value for your money with all class packages and memberships. Call or email is so we can help you determine the best package for you."]
    },
    {
        question: "What are your COVID-19 related procedures for in studio classes?",
        answer: ["BikramYogaWorks & DRIP’T studios follows the CDC guidelines for COVID-19 safety precautions. Upon entering the studio, you will be required to take your temperature and use the provided hand sanitizer. Please make sure you wear your mask in all common areas and until you teach your mat for class. If you are sick, have been exposed or think you’ve been exposed, we request that you do not come into the studio until you can produce a negative test result."]
    },
    {
        question: "I’m trying to change/update my credit card, but the system isn’t allowing me.",
        answer: ["Please note that you can only update secure information like your credit card details using a desktop or laptop. If you are attempting to update through the app, it will not work properly."]
    },
    {
        question: "Do your locations have parking?",
        answer: ["Riverdale Park has a free parking lot next to the building. Please note parking restrictions on Thursdays to accommodate the farmers market.",
                 "Mount Vernon has street parking (metered) which is free after 6pm on weekdays and on the weekends. There are some neighboring lots that you may use as well.",
                 "Ivy City has street parking and a parking garage nearby that offer 1-hour free parking."
                ]
    },
    {
        question: "What is an in-studio/virtual class?",
        answer: ["This is a class that is streamed in studio, but the teacher may be zoomed in from another location. The teacher may not physically be in the studio with you, but you will still be able to get all the benefits of the practice in the hot room."]
    },
    {
        question: "I want to use my buddy pass to invite a friend to class.",
        answer: ["If you would like to invite a friend to class, please email us your friend’s name and we can add the buddy pass to their account. If they have never been to the studio before, please make sure they create a registration online before you email us."]
    },
  ]
  
  
  const displayAnswer = (arr) => {
    return (arr.map((answer) => {
        return(
            <div className="project">
                <p>{answer}</p>
            </div>
        )
    }
    ))
}
    
  
  const displayQAndA = (arr) => {
        
        
        
        
        
        return (arr.map((element) => {
            return(
              <div className="contact">
                
                 
                  <h3> {element.question}</h3>
                    {displayAnswer(element.answer)}
              </div>
            )
        }
        )
    
        )
       }
    
    
    return(
        <div>
             <h1>FAQ</h1>
             <h2> Frequently Asked Questions</h2>
            {displayQAndA(questions)}
        </div>
    )
}

export default Faq;