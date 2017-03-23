require 'rest-client'
require 'json'

class Api::V1::StockDataController < ApplicationController
  # before_action :set_stock, only: [:show, :update, :destroy]

  def index
    @stocks = User.find_by(email: params[:email]).stocks
    if @stocks.length > 0
      stock_list = @stocks.collect {|stock|

    # => API INTRINO
      # date = "2017-02-16"
      # url = "https://api.intrinio.com/prices?ticker=#{stock.ticker}&start_date=#{date}&end_date=#{date}"
      #
      # response = api_call(url)
      # response[:company_name] = stock.company_name
      # response[:ticker] = stock.ticker
      #
      # url = "https://api.intrinio.com/historical_data?ticker=#{stock.ticker}&item=marketcap&start_date=#{date}&end_date=#{date}"
      # market_cap = api_call(url)
      #
      # response["data"][0][:market_cap] = market_cap["data"][0]["value"]
      #
      # response
    #   END OF API

    # => FAKE DATA TO AVOID API CALL
        stock_data = {
          ticker: "#{stock.ticker}",
          company_name: "#{stock.company_name}",
          # data: [{
          #   open: 1,
          #   close: 1,
          #   high: 1,
          #   low: 1,
          #   market_cap: 1
          # }]
          data: [{
            last_price: "#{stock.last_price}"
          }]
        }
        stock_data
      #  END OF FAKE DATA
      }

      render json: stock_list
    else
      render json: {na: 'no stocks'}
    end
  end

  def show
    query = params[:ticker].upcase
    @stock = Stock.find_by( ticker: query )

    unless @stock
      #QUERY TO CONFIRM STOCK IS VALID -> NEEDED B/C API_CALL WILL ERROR OUT IF STOCK NOT VALID
      page = 1
      url = "https://api.intrinio.com/companies?query=#{query}&page_number=#{page}"
      exact_match = false

      until exact_match
        response = api_call(url)
        response_data = response['data']

        i = 0
        until i == response_data.length
          ticker = response_data[i]["ticker"].upcase.strip

          if ticker == query && ticker.length == query.length
            exact_match = true
          end
          i += 1
        end

        page += 1
        break if page > response['total_pages']
      end

      if exact_match
        url = "https://api.intrinio.com/companies?identifier=#{query}"
        response = api_call(url)

        @stock = Stock.create(ticker: query)
        @stock.company_name = response["name"]
        @stock.save
      else
        data = { ticker: "#{query}",
                 company_name: "Stock does not exist or is not supported."
               }
        render json: data and return
      end
    end
    render json: @stock
  end

  # PRICES include date range
  # https://api.intrinio.com/prices?identifier=AAPL

  # INFO
  # https://api.intrinio.com/companies?identifier=AA

  #news endpoint
  # https://api.intrinio.com/news?ticker=AAPL&ticker=MSFT

  private

end
