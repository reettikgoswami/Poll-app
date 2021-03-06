class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :poll
  belongs_to :option

  validates_presence_of :user_id, :poll_id, :option_id
  
end
