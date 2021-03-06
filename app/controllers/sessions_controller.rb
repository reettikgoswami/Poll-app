class SessionsController < ApplicationController
  before_action :authenticate_user_using_x_auth_token, only: [:destroy]

  def create
    user = User.find_by(email: login_params[:email])
    if user && user.authenticate(login_params[:password])

      render status: :ok, json: { success: "Logged in successfully!" , auth_token: user.authentication_token , userId: user.id}

    else
      render status: :unauthorized, json: { errors: "Incorrect login credentials" }      
    end
  end

  def destroy
    @current_user = nil
  end

  private 
 
  def login_params 
    params.require(:login).permit(:email, :password)
  end
end
