export const fetchCoins =async (coinName)=>{
   try {
    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${coinName}`)
    const data = await response.json();
    return data.coins;
   } catch (error) {
    console.log("something were wrong")
   }
}

export const GetCoinsDetails =async (coinId)=>{
   try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
    const data = await response.json();
    return data;
   } catch (error) {
    console.log("something were wrong")
   }
}