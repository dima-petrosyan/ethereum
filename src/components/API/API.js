import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://raw.githubusercontent.com/CryptoRStar/GasPriceTestTask/main/gas_price.json'
})

export const graphAPI = {
	getData(period) {
		return instance.get() 
			.then(response => response.data.ethereum.transactions.splice(0, period))
		}
}