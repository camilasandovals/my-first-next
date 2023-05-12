// import Image from 'next/image';
async function getData() {
    const res = await fetch('https://api.sampleapis.com/beers/ale')
    if(!res.ok) {
        throw new Error('Failed to fetch data from SampleAPIs')
    }
    return res.json()
}
export default async function Page(){
    const data = await getData()
    return(
        <main className="p-8">
            <h1 className="text-emerald-400 text-9xl font-black">The Beers</h1>
            {data.map(beer => (
                <div key={beer.id}>
                    <h2>{beer.name}</h2>
                    {/* <Image src={beer.image} alt="beer image" width={30} height={30}/> */}
                    <p>price: {beer.price}</p>
                </div>
            ))}
        </main>
    )
}