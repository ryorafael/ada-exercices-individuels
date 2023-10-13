function askName() {
    const nom = prompt('quel est ton nom ?');
    const bonjour = `👋 Bonjour ${nom}`;
    
    document.body.innerHTML += `<h1>${bonjour}</h1>`;
  }
  
  function askBirthYear() {
    const anneeNaissance = prompt('quelle est ton annee de naissance ?');
    let age = 2023 - anneeNaissance;
    const moisNaissance = prompt('quelle est ton mois de naissance ?');
    const dateDuJour = new Date();
    const moisActuel = dateDuJour.getMonth()+1
  
    if (moisNaissance > moisActuel) {
      age = age - 1;
    }
    
    document.body.innerHTML += `<h1>${anneeNaissance}</h1>`;
    document.body.innerHTML += `<h1>mois actuel : ${moisActuel}</h1>`;
    document.body.innerHTML += `<h3>Vous avez ${age} ans</h3>`;
  }
  
  askName();
  askBirthYear();