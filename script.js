
  async function getHargaEmas() {
    try {
      const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
        headers: {
          "x-access-token": "goldapi-4qwtmismapb3om3-io",
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      const usdPerOunce = data.price;
      const usdPerGram = usdPerOunce / 31.1035;

      const kurs = 16527;
      const hargaIdr = usdPerGram * kurs;

      document.getElementById("harga-emas").innerText =
        "Rp " + hargaIdr.toLocaleString("id-ID", { maximumFractionDigits: 0 }) + " / gram";

    } catch (err) {
      console.error(err);
      document.getElementById("harga-emas").innerText = "Gagal memuat harga emas.";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    getHargaEmas();
  });




