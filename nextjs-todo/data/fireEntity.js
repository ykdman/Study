import {
  getDocs,
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { app, db } from "@/data/firestore.js";
import { todo } from "node:test";

// * 전체 할 일 목록 조회
export async function fetchTodos() {
  const querySnapshot = await getDocs(collection(db, "todos"));

  if (querySnapshot.empty) {
    return [];
  }

  const fetchedTodos = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    const todo = {
      id: doc.id,
      title: doc.data().title,
      is_done: doc.data().is_done,
      created_at: doc.data().created_at.toDate(),
    };

    fetchedTodos.push(todo);
  });

  return fetchedTodos;
}

//* 할 일 추가
export async function addTodo({ title }) {
  const newTodoRef = doc(collection(db, "todos"));

  const createdAtTimeStamp = Timestamp.fromDate(new Date());

  const newTodoData = {
    id: newTodoRef.id,
    title,
    is_done: false,
    created_at: createdAtTimeStamp,
  };

  await setDoc(newTodoRef, newTodoData);

  return newTodoData;
}

//* 단일 할 일 조회
export async function fetchTodoById(id) {
  if (id === null) {
    return null;
  }

  const todoDocRef = doc(db, "todos", id);
  const todoDocSnap = await getDoc(todoDocRef);

  if (todoDocSnap.exists()) {
    console.log("Document data:", todoDocSnap.data());
    const fetchedTodo = {
      id: todoDocSnap.id,
      title: todoDocSnap.data().title,
      is_done: todoDocSnap.data().is_done,
      created_at: todoDocSnap.data().created_at.toDate(),
    };
    return fetchedTodo;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

//* 할 일 삭제
export async function deleteTodo(id) {
  if (id === null) {
    return null;
  }

  const fetchedTodo = await fetchTodoById(id);

  if (fetchedTodo === null) {
    return null;
  }

  await deleteDoc(doc(db, "todos", id));
  return fetchedTodo;
}

//* 할 일 수정
export async function editTodo(id, { title, is_done }) {
  if (id === null) {
    return null;
  }

  const fetchedTodo = await fetchTodoById(id);

  if (fetchedTodo === null) {
    return null;
  }

  const todoRef = doc(db, "todos", id);

  const updatedTodo = await updateDoc(todoRef, {
    title: title,
    is_done: is_done,
  });

  return { ...fetchedTodo, title, is_done };
}
