class Api::V1::PlaylistsController < ApiController
  before_action :authenticate_user!, except: [:index, :show, :search]
  before_action :authorize_user!, except: [:index, :show, :create, :destroy, :search]

  def index
    playlists = Playlist.all

    render json: Playlist.all
  end

  def show 
    playlist = Playlist.find(params[:id])
    playlist.user = Playlist.find(params[:id]).user
    tracks = playlist.tracks

    render json: playlist
  end

  def new
    playlist = Playlist.new
  end

  def create
    playlist = Playlist.new(playlist_params)
    playlist.user = current_user

    if playlist.save
      render json: playlist
    else
      render json: { errors: playlist.errors.full_messages.to_sentence }
    end
  end

  def destroy
    Playlist.destroy(params[:id])
  end

  def update
    playlist = Playlist.find(params[:id])
    playlist.update_attributes(playlist_params)
    
    render json: playlist
  end

  def edit
    playlist = Playlist.find(params[:id])
    
    render json: playlist
  end

  def search
    playlists = Playlist.where("title ILIKE ? OR description ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%")
    
    render json: playlists
  end 

  private
  def playlist_params
    params.require(:playlist).permit(:title, :description)
  end

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