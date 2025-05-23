import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../firebase/config"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"


const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getCollection = () => {
      setIsLoading(true)
      try {
        const docRef = collection(db, collectionName);
        const q = query(docRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
          const allData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          setData(allData)
          setIsLoading(false)
        });  
  
      } catch(error) {
        setIsLoading(false)
        toast.error(error.message)
      }
    }

    getCollection()
  }, [])

  return { data, isLoading };
}

export default useFetchCollection;