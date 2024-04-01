document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.toLowerCase();
  const password = document.getElementById('password').value.toLowerCase();

  const credentials = [
    { username: 'aab', password: 'aab', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'ab', password: 'ab', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'acc', password: 'acc', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'amc', password: 'amc', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'bjl', password: 'bjl', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'bud', password: 'bud', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'dhm', password: 'dhm', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'dsm', password: 'dsm', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'dlm', password: 'dlm', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'jlh', password: 'jlh', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'jco', password: 'jco', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'mjv', password: 'mjv', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'mfm', password: 'mfm', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'mhe', password: 'mhe', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'pfb', password: 'pfb', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'ptm', password: 'ptm', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'rb', password: 'rb', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'rs3', password: 'rs3', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'rmc', password: 'rmc', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'sj', password: 'sj', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'sla', password: 'sla', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'sw', password: 'sw', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'thp', password: 'thp', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'vcp', password: 'vcp', url: 'https://milanlambrinos.github.io/techdata/' },
    { username: 'wmc', password: 'wmc', url: 'https://milanlambrinos.github.io/techdata/' },
  ];

  const credential = credentials.find(
    (c) => c.username.toLowerCase() === username.toLowerCase() && c.password === password
  );

  if (credential) {
    window.location.href = credential.url;
  } else {
    alert('Invalid username or password- see Milan (781) 709-3500');
  }
}
