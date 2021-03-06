class Option < ApplicationRecord
  belongs_to :poll
  validates_presence_of :value, :votes, :poll_id
end
