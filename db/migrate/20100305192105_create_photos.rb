class CreatePhotos < ActiveRecord::Migration
  def self.up
    create_table :photos do |t|
      t.string :caption
      t.string :data_file_name
      t.string :data_content_type
      t.integer :data_file_size

      t.timestamps
    end
  end

  def self.down
    drop_table :photos
  end
end
