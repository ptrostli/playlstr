class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album, :length, :spotify_id

  belongs_to :playlist
end