import { Injectable } from '@nestjs/common';
import { allowedAssetType } from 'src/helper/model/asset.model';
import axios from 'axios';
@Injectable()
export class CoinsService {
  public async getCoins(asset: allowedAssetType) {
    if (asset === allowedAssetType.BTC) {
      var value = await axios
        .get('https://api.coingecko.com/api/v3/coins/bitcoin')
        .then(res => res.data.market_data.current_price.usd);
    } else {
      var value = await axios
        .get('https://api.coingecko.com/api/v3/coins/ethereum')
        .then(res => res.data.market_data.current_price.usd);
    }
    return { asset: asset, value: Math.round(value * 10) / 10 };
  }
}
