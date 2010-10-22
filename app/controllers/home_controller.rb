class HomeController < ApplicationController
  def index
  end

  def upload
    if Photo.create(:data => params[:Filedata])
      status = 200
    else
      status = 500
    end
    render :nothing => true, :status => status
  end

end
