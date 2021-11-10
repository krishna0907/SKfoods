let data1 = 
[
    {
        id:1,
        user: "Gopi",
        interestedBooks : [
            {
                book_name : "AFCAT",
                author : "Lakshmi khanth",
                edition : "3",
                type: "Defence",
                cost : "Rs.400/-"
            },
            {
                book_name : "CDS",
                author : "Raymond",
                edition : "6",
                type: "Defence",
                cost : "Rs.700/-"
            },
            {
                book_name : "Politics",
                author : "Arun Kumar",
                edition : "2",
                type: "GK",
                cost : "Rs.1200/-"
            }

        ] 
    },
    {
        id:2,
        user: "Sridhu",
        interestedBooks : [
            {
                book_name : "AFCAT",
                author : "Lakshmi khanth",
                edition : "3",
                type: "Defence",
                cost : "Rs.400/-"
            },
            {
                book_name : "English",
                author : "RK suresh",
                edition : "7",
                type: "Language",
                cost : "Rs.300/-"
            },
            {
                book_name : "Half-Girlfriend",
                author : "Chetan Bhagat",
                edition : "1",
                type: "Story",
                cost : "Rs.1300/-"
            }

        ]
    },
    {
        id:3,
        user: "Sedhu",
        interestedBooks : [
            {
                book_name : "AFCAT",
                author : "Lakshmi khanth",
                edition : "3",
                type: "Defence",
                cost : "Rs.400/-"
            },
            {
                book_name : "English",
                author : "RK suresh",
                edition : "7",
                type: "Language",
                cost : "Rs.300/-"
            },
            {
                book_name : "One Night At A Call Centre",
                author : "Chetan Bhagat",
                edition : "2",
                type: "Story",
                cost : "Rs.1500/-"
            },
            {
                book_name : "Encyclopedia",
                author : "Arun AF",
                edition : "2",
                type: "GK",
                cost : "Rs.400/-"
            }

        ]
    },
    {
        id:4,
        user: "Aravind",
        interestedBooks : [
            {
                book_name : "AFCAT",
                author : "Lakshmi khanth",
                edition : "3",
                type: "Defence",
                cost : "Rs.400/-"
            },
            {
                book_name : "Tamil",
                author : "Thiruvalluvar",
                edition : "1",
                type: "Language",
                cost : "Rs.1330/-"
            },
            {
                book_name : "One Night At A Call Centre",
                author : "Chetan Bhagat",
                edition : "2",
                type: "Story",
                cost : "Rs.1500/-"
            },
            {
                book_name : "Auto Car",
                author : "VR 46",
                edition : "1",
                type: "Magazine",
                cost : "Rs.600/-"
            }

        ]
    }
]



//Total Cost without Duplicates

//Is there anything common in the interest for all ? If so, What is that ?

//If anything gets repeated more than once, collect it in an array (only the names of them)

//What are the 'types' available (without duplicates)

//Display the total books (without duplicates) and sort them in ascending order to the price

// Group all the objects which have same types :




let resultObjExample = {
    "totalCost" : 50000 ,
    "common" : "AFCOT is common",
    "repeatedBooks" : ["AFCOT", "ONe night at a call centre"],
    "types_available" : ["Defence","Magazine","Gk", "story"],
    "total_books":[
        {
            book_name : "Auto Car",
            author : "VR 46",
            edition : "1",
            type: "Magazine",
            cost : "Rs.600/-"
        },
        {
            book_name : "One Night At A Call Centre",
            author : "Chetan Bhagat",
            edition : "2",
            type: "Story",
            cost : "Rs.1500/-"
        }
       
    ],
    "same_types_object" :{
        "story" : [
            {
                book_name : "One Night At A Call Centre",
                author : "Chetan Bhagat",
                edition : "2",
                type: "Story",
                cost : "Rs.1500/-"
            },
            {
                book_name : "One Night At A Call Centre",
                author : "Chetan Bhagat",
                edition : "2",
                type: "Story",
                cost : "Rs.1500/-"
            }
        ],
        "Language":[
            {
                book_name : "English",
                author : "RK suresh",
                edition : "7",
                type: "Language",
                cost : "Rs.300/-"
            },
            {
                book_name : "Tamil",
                author : "Thiruvalluvar",
                edition : "1",
                type: "Language",
                cost : "Rs.1330/-"
            }
            
        ],
        "Story":[
            {
                book_name : "One Night At A Call Centre",
                author : "Chetan Bhagat",
                edition : "2",
                type: "Story",
                cost : "Rs.1500/-"
            },
            {
                book_name : "Half-Girlfriend",
                author : "Chetan Bhagat",
                edition : "1",
                type: "Story",
                cost : "Rs.1300/-"
            }

        ],
        "Magazine" :[
            {
                book_name : "Auto Car",
                author : "VR 46",
                edition : "1",
                type: "Magazine",
                cost : "Rs.600/-"
            }
        ]
    }

}


//