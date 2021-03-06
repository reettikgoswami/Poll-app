class Poll < ApplicationRecord
  belongs_to :user
  has_many :options, dependent: :destroy
  has_many :votes, dependent: :destroy
  has_many :voters, through: :votes, source: :user
  
  accepts_nested_attributes_for :options
  
  validates :title, presence: true, length: { maximum: 250 }
  validates :user_id, presence: true
end
