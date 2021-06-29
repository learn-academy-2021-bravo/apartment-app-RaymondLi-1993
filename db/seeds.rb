apartments = [
   {
    street: "Testing Avenue", 
    city: "San Francisco",
    state: "CA",
    manager: "Awesome Real Estate", 
    email: "awesomeRealEstate@gmail.com",
    price:"1000",
    bedrooms:4,
    bathrooms:3,
    pets: "true",
    user_id: 1
   },
   {
    street: "Avenue Testing", 
    city: "San Francisco",
    state: "CA",
    manager: "Awesome Real Estate",
    email: "awesomeRealEstate@gmail.com",
    price:"900",
    bedrooms:4,
    bathrooms:3,
    pets: "true",
    user_id: 1
   }, 
   {
    street: "Nowhere", 
    city: "San Francisco",
    state: "CA",
    manager: "Awesome Real Estate",
    email: "awesomeRealEstate@gmail.com",
    price:"600",
    bedrooms:4,
    bathrooms:3,
    pets: "true",
    user_id: 1
   },
   {
    street: "Everywhere", 
    city: "San Francisco",
    state: "CA",
    manager: "Awesome Real Estate",
    email: "awesomeRealEstate@gmail.com",
    price:"2000",
    bedrooms:4,
    bathrooms:3,
    pets: "true",
    user_id: 1
   },
   {
    street: "Underwear", 
    city: "San Francisco",
    state: "CA",
    manager: "Awesome Real Estate",
    email: "awesomeRealEstate@gmail.com",
    price:"1000",
    bedrooms:4,
    bathrooms:3,
    pets: "true",
    user_id: 1
   }    
]



apartments.each do |attributes|
    Apartment.create attributes
    puts "creating Apartments #{attributes}"
  end