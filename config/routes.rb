Rails.application.routes.draw do
  devise_for :users

  #* use the following lines or change link_to to button_to for sign out
  # devise_scope :user do
  #   get '/users/sign_out' => 'devise/sessions#destroy'
  # end

  resources :friends
  root 'friends#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get 'home/about'
end
