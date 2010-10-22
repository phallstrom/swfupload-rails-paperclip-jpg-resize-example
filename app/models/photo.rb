class Photo < ActiveRecord::Base
  has_attached_file :data, 
                    :styles => {:thumb => ['100x100>', :jpg], :tsquare => ['100x100#', :jpg], :large => ['800x600>', :jpg]},
                    :default_style => :thumb,
                    :default_url => '/images/blank.gif',
                    :convert_options => {:thumb => '-strip -background white -flatten', :large => '-strip -background white -flatten'},
                    :path => ':rails_root/public/assets/photos/:id/:style.:extension',
                    :url =>                    '/assets/photos/:id/:style.:extension'
end
