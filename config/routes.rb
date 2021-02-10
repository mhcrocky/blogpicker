Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do 
    resources :users, only: [:create, :show]
    get 'users/demo_user', :to => 'users#demo_user'
    resource :session, only: [:create, :destroy]
  end
end
