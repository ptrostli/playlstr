class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album, :length, :spotify_id, :external_url, :preview_url, :image, :uri

  belongs_to :playlist
end