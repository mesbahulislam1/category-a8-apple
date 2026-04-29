import TilesCard from '@/components/ui/TilesCard'
import React from 'react'

const AllTiles = async() => {
  const res = await fetch('https://category-a8-apple-l35b.vercel.app/tiles.json')
    const data = await res.json()
  return (
    <div>
      
      <h2 className="text-3xl font-bold mb-8 mt-8">
          All Tiles
        </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {
           data.map((tile) => <TilesCard key={tile.id} tile={tile}></TilesCard>)
        }
      </div>
    </div>
  )
}

export default AllTiles
