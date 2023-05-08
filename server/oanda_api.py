import pandas as pd
import utils
import defs
import requests


class OandaAPI():
    def __init__(self):
        self.session = requests.Session()

    
    def fetch_instruments(self):
        url = f"{defs.OANDA_URL}/accounts/{defs.ACCOUNT_ID}/instruments"
        response = self.session.get(url, params=None, headers=defs.OANDA_URL)
        
        return response.status_code, response.json()
    
    
    def get_instruments_df(self):
        code, json_response = self.fetch_instruments()
        
        if code == 200:
            json_response_pd = pd.DataFrame.from_dict(json_response['instruments'])
            return json_response_pd[['name', 'type', 'displayName', 'pipLocation', 'marginRate']]
        else:
            return None
        
        
    def save_instruments_df(self):
        instruments_df = self.get_instruments_df()

        if instruments_df is not None:
            return instruments_df.to_pickle(utils.get_instruments_data_filename())


    def fetch_candles(self, pair_name, count, granularity):
        url = f"{defs.OANDA_URL}/instruments/{pair_name}/candles"

        params = dict(
            count = count,
            granularity = granularity,
            price  = "MBA"
        )

        response = self.session.get(url, params=params, headers=defs.SECURE_HEADER)

        return response.status_code, response.json()