class MenusController < ApplicationController
    def create
        @institution= Institution.find(params[:institution_id])
        @menu=@institution.menus.create(menus_params)
        redirect_to institution_path(@institution)
    end
    def show 
        @menu= Menu.find(params[:id])
    end

    private def menus_params
        params.require(:menu).permit(:name, :description, :weight, :photo, :price)
    end
end
