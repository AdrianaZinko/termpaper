Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'institutions#index', as: 'home'
  get 'about' => 'pages#about', as: 'about'
   
  resources :institutions do 
    resources :menus
  end
  resources :users
end
