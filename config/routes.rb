Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do 
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :photos, except: [:new, :edit]
    resources :albums, only: [:create, :destroy, :show, :index]
    resources :photos_albums, only: [:create, :index]
    resources :comments, only: [:create, :destroy, :index]
    resources :tags, only: [:create, :index, :show]
    resources :tagged_photos, only: [:create, :index, :destroy]
  end
end
