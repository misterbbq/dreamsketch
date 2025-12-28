import { auth, db } from "./firebase.js";
import {
    collection, addDoc, onSnapshot,
    deleteDoc, doc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* =====================
   MOTS DE PASSE
===================== */

const PASSWORDS = [
    "amour", "passion", "coeur", "flamme", "desir", "tendresse"
];

function getTodayPassword() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const day = Math.floor((now - start) / 86400000);
    return PASSWORDS[day % PASSWORDS.length];
}

/* =====================
   AUTH
===================== */

document.getElementById("loginBtn").onclick = () => {
    const input = document.getElementById("passwordInput").value;

    if (input === getTodayPassword()) {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
        initAgenda();
    } else {
        document.getElementById("error").innerText = "Mot de passe incorrect ❤️";
    }
};

/* =====================
   AGENDA
===================== */

const agendaRef = collection(db, "agenda");

document.getElementById("addEventBtn").onclick = async () => {
    const title = eventTitle.value;
    const date = eventDate.value;
    if (!title || !date) return;

    await addDoc(agendaRef, {
        title,
        date,
        createdBy: auth.currentUser.uid,
        createdAt: serverTimestamp()
    });

    eventTitle.value = "";
    eventDate.value = "";
};

function initAgenda() {
    onSnapshot(agendaRef, snapshot => {
        agenda.innerHTML = "";
        snapshot.docs.forEach(d => {
            const data = d.data();
            const li = document.createElement("li");

            li.innerHTML = `
                <span>${data.title} – ${data.date}</span>
                ${data.createdBy === auth.currentUser.uid ? `<button data-id="${d.id}">🗑️</button>` : ""}
            `;

            li.querySelector("button")?.addEventListener("click", () => {
                deleteDoc(doc(db, "agenda", d.id));
            });

            agenda.appendChild(li);
        });
    });
}

/* =====================
   MODE DEV
===================== */

document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.shiftKey && e.key === "E") {
        document.getElementById("dev-panel").classList.toggle("hidden");
        document.getElementById("todayPassword").innerText =
            "Mot de passe du jour : " + getTodayPassword();
    }
});

document.getElementById("clearAgenda").onclick = async () => {
    const snapshot = await getDocs(agendaRef);
    snapshot.forEach(d => deleteDoc(d.ref));
};

