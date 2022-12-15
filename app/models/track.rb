class Track < ApplicationRecord
  validates :name, presence:true
  validates :artist, presence:true
  validates :album, presence:true
  validates :length, presence:true

  belongs_to :playlist
end