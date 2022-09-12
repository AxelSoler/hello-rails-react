class GreetingsController < ApplicationController
  def index
    render json: { greeting: Greetings.all.sample.message }.to_json
  end
end
