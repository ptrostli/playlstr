class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :name, null:false 
      t.string :artist, null:false 
      t.string :album, null:false 
      t.integer :length, null:false 
      t.string :spotify_id
      t.string :external_url
      t.string :preview_url
      t.string :image
      t.string :uri

      t.belongs_to :playlist

      t.timestamps
    end
  end
end
