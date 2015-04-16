require 'sinatra'

get '/' do
  send_file 'index.html'
end

post '/temperature_change' do
  "Request of temperature #{params[:temperature]} accepted!" \
  ' The Server is Happy! S:-D'
end
