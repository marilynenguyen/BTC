import axios from 'axios'

export async function getOfferFromPaybis(amount:number) : Promise <string|void> {
    try{
        const res = await axios.post('https://api.paybis.com/public/processing/v2/quote/buy-crypto',
        {
           "currencyCodeFrom":"CAD",
           "currencyCodeTo":"BTC",
           "requestedAmount":{"amount":amount.toString(),"currencyCode":"CAD"},
           "requestedAmountType":"from",
           "promoCode":null,
           "paymentMethod":"credit-card"
       }); 
       return res.data?.paymentMethods?.[0]?.amountTo?.amount.toString(); 
    }
    catch(e){
        console.log(e); 
        return; 
    }
   
}