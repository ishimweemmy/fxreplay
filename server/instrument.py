import pandas as pd
import utils


class Instrument():
    def __init__(self, obj):
        self.name = obj['name']
        self.type = obj['type']
        self.displayName = obj['displayName']
        self.pipLocation = obj['pipLocation']
        self.marginRate = obj['marginRate']

    def __repr__(self):
        return str(vars(self))
    
    @classmethod
    def get_instruments_df(cls):
        return pd.read_pickle(utils.get_instruments_data_filename())
    
    @classmethod
    def get_instruments_list(cls):
        df = cls.get_instruments_df()
        return [Instrument[x] for x in df.to_dict(orient="records")]
    