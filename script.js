const form = document.getElementById('registration-form');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }

  const errors = [];
  if (!data.nama) {
    errors.push('Nama harus diisi');
  }
  if (!data.NPM) {
    errors.push('NPM harus diisi');
  }
  if (!data.jurusan) {
    errors.push('Jurusan harus dipilih');
  }
  if (!data.email) {
    errors.push('Email harus diisi');
  }
  if (!data.telepon) {
    errors.push('Telepon harus diisi');
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      const fieldId = error.split(' ')[0].toLowerCase();
      const fieldError = document.getElementById(`${fieldId}-error`);
      fieldError.textContent = error;
    });
    return;
  }
  const successPage = `
  <html>
    <head>
      <title>Selamat Anda telah mendaftar diri Anda!</title>
    </head>
    <body>
      <h1>Selamat Anda telah mendaftar diri Anda!</h1>
      <p>Terima kasih telah mendaftar. Kami akan menghubungi Anda segera.</p>
    </body>
  </html>
`;
const newWindow = window.open('', '_blank');
newWindow.document.write(successPage);
newWindow.document.close();
});