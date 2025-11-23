const styles = [
  n => n.toUpperCase(),
  n => n.toLowerCase(),
  n => n.split('').map(c => '★'+c).join(''),
  n => n.split('').map(c => c+'☆').join(''),
  n => '✨'+n+'✨',
  n => n.split('').map(c => '✧'+c).join(''),
  n => n.split('').map(c => c+'❂').join(''),
  n => n.split('').map(c => '♛'+c).join(''),
  n => n.split('').map(c => c+'♠').join(''),
  n => n.split('').map(c => '♣'+c).join(''),
  n => n.split('').map(c => c+'♥').join(''),
  n => n.split('').map(c => '♦'+c).join(''),
  n => n.split('').map(c => c+'✿').join(''),
  n => n.split('').map(c => '❁'+c).join(''),
  n => n.split('').map(c => c+'❀').join(''),
  n => n.split('').map(c => '➤'+c).join(''),
  n => n.split('').map(c => c+'➽').join(''),
  n => n.split('').map(c => '✪'+c).join(''),
  n => n.split('').map(c => c+'❖').join(''),
  n => n.split('').map(c => '✦'+c).join('')
];

document.getElementById('generateBtn').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim() || 'Touseef Malik';
  const resultsEl = document.getElementById('results');
  resultsEl.innerHTML = '';
  for(let i=0;i<20;i++){
    const styled = styles[i % styles.length](name);
    const card = document.createElement('div');
    card.className = 'name-card';
    card.textContent = styled;
    card.onclick = () => {
      navigator.clipboard.writeText(styled);
      alert('Copied: ' + styled);
    };
    resultsEl.appendChild(card);
  }
});
