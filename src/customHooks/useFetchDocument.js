import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const useFetchDocument = (collectionName, documentID) => {
    const [document, setDocument] = useState(null);

    useEffect(() => {
        const getDocument = async () => {
            const docRef = doc(db, collectionName, documentID);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const obj = {
                id: documentID,
                ...docSnap.data()
                };
                setDocument(obj);
            } else {
                toast.error("Document not found");
            }
        };

        getDocument()
    }, [])

    return { document }
}

export default useFetchDocument