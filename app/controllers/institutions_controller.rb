class InstitutionsController < ApplicationController
    def index
        @institution=Institution.all    
    end
    def new
    end
    def show 
        @institution= Institution.find(params[:id])
    end
    def create
        # render plain:params[:post].inspect
        @institution= Institution.new(institution_params)
        if(@institution.save)
        redirect_to @institution
        else 
            render 'new'
        end
    end
    private def institution_params
        params.require(:institutions).permit(:title, :type_dishes, :photo, :clock_start, :clock_end)
    end
end
