class User < ApplicationRecord

    has_many :attendees
    has_many :events, through: :attendees
    

end
