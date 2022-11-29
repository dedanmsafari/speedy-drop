// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  query,
  getDocs,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Zy7T_7Uo5XbEwL67jyNycH7Vh7LDckc",
  authDomain: "speedydrop-43b53.firebaseapp.com",
  projectId: "speedydrop-43b53",
  storageBucket: "speedydrop-43b53.appspot.com",
  messagingSenderId: "170064973757",
  appId: "1:170064973757:web:a173910317959a94b5ccd4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const createCompanyDocumentFromInputs = async (companyDetails) => {
  const companyDocRef = doc(db, "companies", companyDetails.Name);

  const companySnapshot = await getDoc(companyDocRef);

  if (!companySnapshot.exists()) {
    const { Name, Industry, Location, Description } = companyDetails;
    const createdAt = new Date();

    try {
      await setDoc(companyDocRef, {
        Name,
        Industry,
        Location,
        Description,
        createdAt,
      });
    } catch (error) {
      console.log(" error creating the company", error);
    }
  }

  return companyDocRef;
};

export const getCompanies = async () => {
  const collectionRef = collection(db, "companies");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
