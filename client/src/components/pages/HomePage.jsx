import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBook } from "../../redux/features/book";

export default function HomePage() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.books.loading);
  const books = useSelector((state) => state.books.items);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {books.map((book) => {
        return <li>{book.name}</li>;
      })}
    </ul>
  );
}
