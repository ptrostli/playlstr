class Api::V1::SearchController < ApiController
  # before_action :authenticate_user
  # before_action :authorize_user

  def index
    tracks = RSpotify::Track.search(params["query"]) 

    render json: {tracks: tracks}
  end

  private
  def authorize_admin
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access."]}
    end
  end

  def authorize_user
    if !user_signed_in? || !(current_user.role == "member") || !(current_user.role == "admin")
      render json: {error: ["Only registered users have access to this feature"]}
    end
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end
end