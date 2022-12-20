class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :description,  :vibe, :image, :created_at, :updated_at, :user_id

  has_many :tracks
  belongs_to :user
end