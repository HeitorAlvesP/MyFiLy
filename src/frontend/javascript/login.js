document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    console.log("📤 Enviando requisição de login...");

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log("✉️ Email:", email, "Senha:", senha);

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha }),
        });

        console.log("🔄 Aguardando resposta do servidor...");

        const data = await response.json();
        
        console.log("🔵 Resposta do servidor:", data);

        if (data.success) {
            console.log("✅ Login bem-sucedido! Redirecionando...");
            window.location.href = "../pages/home.html";
        } else {
            console.log("❌ Login falhou! Motivo:", data.message);
            alert(data.message);
        }
    } catch (error) {
        console.error("❌ Erro na requisição:", error);
    }
});