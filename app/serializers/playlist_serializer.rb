class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :vibe, :image, :description, :created_at, :updated_at, :user_id

  has_many :tracks
  belongs_to :user
end