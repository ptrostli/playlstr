class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null:false
      t.string :description
      t.string :vibe
      t.string :image

      t.belongs_to :user, null:false

      t.timestamps
    end
  end
end
