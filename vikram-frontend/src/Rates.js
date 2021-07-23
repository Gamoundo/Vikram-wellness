import React from 'react';


function Rates(props) {
    
//    const displayRates = (arr) => {
//     return (arr.map((element) => {
//         return(
//             <div className="project">
//                 <h3> {element.area}</h3>
//                 <p> {element.address}</p>
//                 <p> {element.phone}</p>
                
//             </div>
//         )
//     }
//     )

//     )
//    }

const packages= [
    
    {
        name: "New Student",
        price: "79",
        benefits: ["Month Unlimited", "Unlimited Classes", "No Commitment", "Expires 30 days from date of first use*"]
    },
    {
        name: "Virtual Month Unllimited",
        price: "99",
        benefits: ["Month Unlimited", "Unlimited Classes", "No Commitment", "Expires 30 days from date of first use*"]
    },
    {
        name: "One Studio Auto Renew",
        price: "219",
        benefits: ["Month Unlimited",
            "Unlimited Classes (1 Studio)",
            "3-Month Commitment",
            "Mat & Towel Rentals Included",
            "2 Complimentary Buddy Passes per Month",
            "One-Time Initiation Fee"
            ]
    },
    {
        name: "Premium Auto Renew",
        price: "269",
        benefits: ["Month Unlimited",
        "Unlimited Classes",
        "3-Month Commitment",
        "Mat & Towel Rentals Included",
        "2 Complimentary Buddy Passes per Month",
        "One-Time Initiation Fee",
        "All Studio Access"]
    },
    {
        name: "Annual Unlimited",
        price: "1999",
        benefits: ["Month Unlimited",
            "Unlimited Classes",
            "3-Month Commitment",
            "Mat & Towel Rentals Included",
            "2 Complimentary Buddy Passes per Month",
            "One-Time Initiation Fee",
            "All Studio Access",
            "Valid for one year from date of first use*"]
    }
]
    

const displayBenefits = (arr) => {
    return (arr.map((element) => {
      const  displayBenefit = (pros) =>{
   
           return (pros.map((benefit) => {
                return(
                    <div>
                        <p> {benefit}</p>
                    </div>
                )
           }
           )
            )       

             
          
        }
        return(
         <div  >
            <div>
                <p> {element.name}</p>
                <h1> ${element.price}</h1>
            </div>
            <div>
                {displayBenefit(element.benefits)}
                <button> Buy Now</button>
            </div>
            
         </div>
        )
    }
    )

    )
}

    return(
        <div>
            <h1>Rates</h1>
            {displayBenefits(packages)}
        </div>
    )
}

export default Rates;