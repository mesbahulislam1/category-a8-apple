import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TilesCard = ({tile}) => {
  return (
    <div
            
            className="border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            
            {/* Image */}
            <Image
              src={tile.image}
              alt={tile.title}
              className="w-full h-44 object-cover" width={500} height={500}
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {tile.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {tile.category}
              </p>

              <p className="text-blue-600 font-bold mt-2">
                {tile.currency} {tile.price}
              </p>

              {/* View Details Button */}
              <Link
                href={`/tiles/${tile.id}`}
                className="mt-4 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>

          </div>
  )
}

export default TilesCard