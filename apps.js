function sanitizeInput(str) {
    if (!str) return "";
    let s = str.trim();
    s = s.replace(/[^a-z0-9\s\-\'_\.]/gi, "");
    return s.slice(0, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const resultDiv = document.getElementById("result");

    searchBtn.addEventListener("click", () => {
        const raw = document.getElementById("q").value || "";
        const q = sanitizeInput(raw);

        const url = q ? `superheroes.php?query=${encodeURIComponent(q)}` : "superheroes.php";

        fetch(url)
            .then(res => res.text())
            .then(text => {
                resultDiv.innerHTML = text.trim();
            })
            .catch(err => {
                resultDiv.textContent = "Error fetching result.";
            });
    });
});
