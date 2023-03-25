import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getBooks, getBookIdSelector } from 'entities/books'

const BookPage = () => {
  const navigate = useNavigate()
  const books = useSelector(getBooks)
  const id = useSelector(getBookIdSelector)
  const book = books.filter(b => b.id === id)

  console.log(book)

  return (
    <section>
      <button onClick={() => navigate(-1)}>home</button>
    </section>
  )
}

export default BookPage
