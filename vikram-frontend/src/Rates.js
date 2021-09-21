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
         <div  className="rate">
            <div >
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

const classPackages= [
    {
        name: "Virtual Class",
        price: "$20",
        condition: "*Not In Studio"
    },
    {
        name: "Single Class",
        price: "$35",
        condition: "*Includes Mat"
    },
    {
        name: "5-Class Pass",
        price: "$120",
        condition: "*expires after 2 months"
    },
    {
        name: "10-Class Pass",
        price: "$240",
        condition: "*expires after 3 months"
    },
    {
        name: "Month Unlimited",
        price: "$249",
        condition: "*no contract"
    }
]

const displayClassPackages = (arr) => {
    return (arr.map((element) => {
        return(
         <div>
             <diV>
                <h3>{element.name}</h3>
                <p style={{color: "orange"}}> {element.condition}</p>
             </diV>
             
             <div>
                <h3> {element.price}</h3>
                <button> Buy Now</button>
             </div>
             
             
         </div>
        )
    }
    )

    )
   }


    return(
        <div className='column'>
            <h1>Rates and Packages</h1>
            <div className="rates">
                
                {displayBenefits(packages)}
            </div>
            <div >
                <h1> Class Packages</h1>
                {displayClassPackages(classPackages)}
            </div>
        </div>
        
    )
}

export default Rates;