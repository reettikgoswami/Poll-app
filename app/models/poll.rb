class Poll < ApplicationRecord
  belongs_to :user
  has_many :options, dependent: :destroy
  has_many :votes, dependent: :destroy
  has_many :voters, through: :votes, source: :user
  
  accepts_nested_attributes_for :options
end
