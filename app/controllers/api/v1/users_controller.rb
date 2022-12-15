class Api::V1::UsersController < ApiController
  def index
    user = current_user
    render json: {user: user}
  end

  def show
    render json: User.find(current_user.id)
  end
end