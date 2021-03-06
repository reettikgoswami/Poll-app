class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render status: :ok, json: { success: "Account created successfuly" }
    else
      render status: :unprocessable_entity ,json: {
        errors: @user.errors.full_messages
      }
    end  
  end

  private 
  
  def user_params 
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end 


end
