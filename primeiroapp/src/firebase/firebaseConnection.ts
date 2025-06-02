// cria e inicializa a configuração do app
import { initializeApp } from 'firebase/app';

// inicializa o serviço o firestore database
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// configuração do app
const firebaseConfig = {
  apiKey: 'AIzaSyBcoZYJkOpmT0wP94mQuzrla-D4tejBsBA',
  authDomain: 'devcurso-62728.firebaseapp.com',
  projectId: 'devcurso-62728',
  storageBucket: 'devcurso-62728.firebasestorage.app',
  messagingSenderId: '749507623966',
  appId: '1:749507623966:web:4f05289cab72555eccc20f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// pra inicializar o firestore, precisa passar a configuração/app e ele retorna a conecção com o banco e jogamos em "db". e todas as vezes que quiser conectar com o banco, usa a instancia "db"
const db = getFirestore(app);

export { db };
