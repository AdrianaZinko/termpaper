class InstitutionsController < ApplicationController
    Max_page_size = 6
    def index
        # @institution=Institution.all  
        @page = params.fetch(:page,0).to_i
        @institution=Institution.offset(@page*Max_page_size).limit(Max_page_size)      
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
