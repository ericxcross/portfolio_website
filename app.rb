require('sinatra')
require('sinatra/contrib/all')

also_reload('./models/*')

get '/' do
  erb( :index )
end

get '/getwork' do
  erb (:"/getwork")
end

get '/treetrip' do
  erb (:"/treetrip")
end
