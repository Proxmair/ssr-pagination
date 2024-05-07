import React from 'react' 
import Pagination from './Pagination'

type PageProps = {
  products: any[]
  currentPage: number
  totalProducts: number
  perPage: number
}

const ProductCard = ({ name, description, price }: any) => (
  <div className="p-3 my-10 border-2 border-sky-500">
    <h2>{name}</h2>
    <p className="my-3">
      ${price}
    </p>
    <div className="my-8">
      {description}
    </div>
  </div>
)

const PaginationPage = ({
  currentPage,
  totalProducts,
  perPage,
  products,
}: PageProps): JSX.Element => {
  return (
    <div>
      <h1>Page {currentPage}</h1>
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/Pagination/${page}`}
      />
      <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '2rem',
}}>
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </div>
  )
}

export default PaginationPage
