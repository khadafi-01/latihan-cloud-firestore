// import Firestore library
const { Firestore } = require("@google-cloud/firestore")

// Create a Firestore client and store it in the db variable
const db = new Firestore();

// Create a collection at the root-level with the name “doctor”
async function store_data() {
    // Membuat Collection root-level
    const doctorsCollections = db.collection('dokter');
    console.log("Collections 'dokter' berhasil dibuat.");

    // Create Doctor Eros documents
    const erosDoc = await doctorsCollections.doc("Dokter Eros");
    console.log("Dokumen atas nama Dokter Eros berhasil dibuat")
}

// Adding Doctor Eros' personal data
const profileEros = {
    nama: "dr. Eros",
    keahlian: "Dokter Kulit",
    almamater: " Univeristas A"
}
await erosDoc.set(profileEros);
console.log("Data berhasil ditamabahkan ke dokumen Eros");

// Create a subcollection: Consultation 
const erosSucollections = erosDoc.collection("Konsultasi");
console.log("Subcollection Konsultasi berhasil dibuat");

// Adding data to patient documents
const historyConsultations = {
    nama_pasien: {
        depan: "Anthony",
        belakang: "Gunawan",
    },
    waktu_konsultasi: Date.now().toString()
}
await erosSubcollections.doc("Antony").set(historyConsultations);
console.log("Data berhasil ditambahkan.");

store_data().catch(console.error)