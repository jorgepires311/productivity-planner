const Quotes = () => {
const quoteApi = 'https://zenquotes.io/api/quotes/'
async function getQuote(url){
    const res = await fetch(url)
    var quoteData =  await response.json()
    return quoteData
}

return (
    <div className="quoteContainer">
        getQuote(quoteApi)
    </div>
)
}
export default Quotes
