class Api::V1::TracksController < ApiController
  before_action :authenticate_user!

  def create
    playlist = Playlist.find(params[:playlist_id])
    track = Track.find_or_initialize_by(track_params)
    playlist.tracks << track
    
    if playlist.save!
      render json: playlist
    else
      render json: {errors: tracks.errors.full_messages.to_sentence}
    end
  end

  def destroy
    playlist = Playlist.find(params[:playlist_id])
    track = Track.find(params[:id])
    track.destroy

    render json: { message: "track with id #{params[:id]} deleted." }
  end

  private
  def track_params
    params.require(:track).permit(:name, :artist, :album, :length, :spotify_id)
  end
end