import { getOfferFromPaybis } from "./provider";

export default async function(params: any, context: any){
    const BTC = await getOfferFromPaybis(100); 
    return{
        message: 'btc', 
    };
};