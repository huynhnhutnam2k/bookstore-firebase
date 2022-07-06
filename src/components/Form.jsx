import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { db } from "../features/firebase/config";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const colRef = collection(db, "books");
  const [books, setBooks] = useState([]);
  const addBook = (data) => {
    // console.log(data);
    const { nameBook, priceBook, authorBook } = data;
    addDoc(colRef, {
      nameBook,
      priceBook,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      const books = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setBooks(books);
    });
  }, []);
  const handleRemove = async (id) => {
    // console.log(id);
    const colRefDel = doc(db, "books", id);
    // console.log(colRefDel);
    await deleteDoc(colRefDel);
    console.log("Document successfully deleted!");
  };
  return (
    <div className="flex flex-col gap-y-5">
      <form
        action=""
        className="flex flex-col my-12 mx-auto w-[500px]    shadow-md py-2 px-5 gap-2"
        onSubmit={handleSubmit(addBook)}
      >
        <input
          type="text"
          placeholder="Enter name books"
          {...register("nameBook")}
          className="border py-2 px-4"
        />
        <input
          type="text"
          placeholder="Enter price books"
          {...register("priceBook")}
          className="border py-2 px-4"
        />
        <input
          type="text"
          placeholder="Enter name author "
          {...register("authorBook")}
          className="border py-2 px-4"
        />
        <button className="py-2 px-4 bg-blue-400">Add book</button>
      </form>
      <div className="list-book flex flex-col gap-y-2 w-[500px] my-12 mx-auto shadow-lg p-2">
        {books.map((book) => (
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <p>{book.nameBook}</p>
              <p>{book.priceBook}</p>
            </div>
            <div className="" onClick={() => handleRemove(book.id)}>
              Remove
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
