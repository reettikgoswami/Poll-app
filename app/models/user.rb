class User < ApplicationRecord
  
  validates :email,presence: true ,format: {with: /\A\S+@.+\.\S+\z/ }, uniqueness: { case_sensitives: false }                
  validates :name, presence: true
  validates :password, presence: true, confirmation: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true
  
  has_secure_password

end
