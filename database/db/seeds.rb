puts "seeding ..."

puts "seeding users ..."

User.create!(Name: "Logan", Location: "LA", Image:"")
User.create!(Name: "Alan", Location: "NY", Image:"")
User.create!(Name: "Scruffy Muffy", Location: "NoWhere", Image:"")
User.create!(Name: "Iggy", Location: "NY", Image:"")
User.create!(Name: "Kevin", Location: "NJ", Image:"")

puts "seeding Events ..."

Event.create!(Name:"Climb a Mountain",Location:"Everest",Description:"Just do it",Host:"Kevin")
Event.create!(Name:"Iggi's Bday",Location:"8506 31st ave",Description:"Y'all, add 2 of your favorite songs to the Event's playlist on spotify, just follow the link aaa.bbb.ccc",Host:"Iggy")
Event.create!(Name:"Fishing Madness",Location:"Somewhere we can fish",Description:"Check the comments for location",Host:"Alex")
Event.create!(Name:"Picknick at Central Park",Location:"Central Park, NYC",Description:"Getting some friends together and enjoy the nice weather.",Host:"Alan")
Event.create!(Name:"PingPong contest",Location:"SPIN",Description:"Get ready y'all",Host:"Logan")

puts "seeding Events ..."

Attendee.create!(user_id:1,event_id:1)
Attendee.create!(user_id:1,event_id:5)
Attendee.create!(user_id:2,event_id:4)
Attendee.create!(user_id:2,event_id:3)
Attendee.create!(user_id:3,event_id:2)
Attendee.create!(user_id:4,event_id:4)
Attendee.create!(user_id:5,event_id:5)


puts "Done!"