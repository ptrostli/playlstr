class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album, :length, :spotify_id, :sample, :url, :image

  belongs_to :playlist
end