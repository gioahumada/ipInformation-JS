const token = 'af88a849d13383';  // Reemplaza con tu token de ipinfo.io

// Función para obtener la IP propia del usuario
function getMyIP() {
  fetch(`https://ipinfo.io/json?token=${token}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('my-ip').textContent = data.ip;
    })
    .catch(error => {
      console.error('Error al obtener la IP propia:', error);
      document.getElementById('my-ip').textContent = 'Error al obtener la IP';
    });
}

// Llamar a la función para obtener la IP propia al cargar la página
getMyIP();

const formulario = document.querySelector('#ip-form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const ip = document.querySelector('#ip-input').value;

  fetch(`https://ipinfo.io/${ip}?token=${token}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('info-ip').textContent = data.ip;
      document.getElementById('info-hostname').textContent = data.hostname;
      document.getElementById('info-city').textContent = data.city;
      document.getElementById('info-region').textContent = data.region;
      document.getElementById('info-country').textContent = data.country;
      document.getElementById('info-loc').textContent = data.loc;
      document.getElementById('info-org').textContent = data.org;
      document.getElementById('info-postal').textContent = data.postal;
      document.getElementById('info-timezone').textContent = data.timezone;
      document.getElementById('ip-info').style.display = 'block'; // Mostrar la información
    })
    .catch(error => {
      console.error('Error al obtener la información de la IP:', error);
      document.getElementById('ip-info').textContent = 'Error al obtener la información de la IP';
    });
});

// Ocultar la información de la IP al cargar la página
document.getElementById('ip-info').style.display = 'none';