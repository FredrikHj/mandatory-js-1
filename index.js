/*   Labb 1 i Javarscript
    Ändrar namn på title och <h1>, title och ändrar  href banan till Vegetables både i href och dess namn */
    let getMainElement = document.querySelector('main');

    let getH1element = document.querySelector('h1');
    let getStrForH1 = "Fruits & Vegetables Corp";
        getH1element.textContent = getStrForH1;

      document.title = getStrForH1;

    let getAElement = document.querySelectorAll('a');
    let getLastAElement = getAElement[2];

    //UC = UpperCase | UL = LowerCase
    let strToLastAElementUC = 'Vegetables';
    let strToLastAElementLC = 'vegetables';
        getLastAElement.textContent = strToLastAElementUC;
        getLastAElement.setAttribute('href', strToLastAElementLC);

//---------------------------------------------------------------------
  // Sektions hantering | i koden S = Sektion, C = Contact, A = About & P = p tag
    let getSCElement = document.querySelector('#contact');
    let getPInCElement = document.querySelector('#contact p');

    let getSAElement = document.querySelector('#about');
    let createdPInAElement = document.createElement('p');

        getSCElement.remove();
        getSAElement.remove();
        getMainElement.appendChild(getSAElement);
        getMainElement.appendChild(getSCElement);

  // Rensar texten innan jag adderar den inom en <p> tagg.
        getSAElement.textContent = "";
        createdPInAElement.textContent = "We're the best in fruits & vegetables";
        getSAElement.appendChild(createdPInAElement);

  // Implementerar en <h2> tagg till varje sektion med passande namn
    let createdH2ForAElement = document.createElement('h2');
        createdH2ForAElement.textContent = 'About';

        getSAElement.appendChild(createdH2ForAElement);

    let createdH2ForCElement = document.createElement('h2');
        createdH2ForCElement.textContent = 'Contact';
        getSCElement.appendChild(createdH2ForCElement);

  // Flytar h2 till respektive position
    let getAH2 = document.querySelector('#about h2');
        getSAElement.insertBefore(createdH2ForAElement, createdPInAElement);

    let getCH2 = document.querySelector('#contact h2');
        getSCElement.insertBefore(createdH2ForCElement, getPInCElement);
//---------------------------------------------------------------------
  //Ändrar till <th> i <thead> istället för <td>  på två ställen
    let getTagsInTheadElement = document.querySelectorAll('thead td');
    let insurThElement = document.querySelector('thead tr');

    let createReplecamentThElement;
    let getTdElement;

    for (let i = 0; i < getTagsInTheadElement.length; i++) {
      getTdElement = document.querySelector('td');

      let strFromTd = getTdElement.textContent;
          createReplecamentThElement = document.createElement('th');
          createReplecamentThElement.textContent = strFromTd;
          getTdElement.replaceWith(createReplecamentThElement);
    }

  // Implementerar main.css till head
    let getHeadElement = document.querySelector('head');
    let createdLinkElement = document.createElement('link');
        createdLinkElement.setAttribute('rel', 'stylesheet');
        createdLinkElement.setAttribute('type', 'text/css');
        createdLinkElement.setAttribute('href', 'main.css');
        getHeadElement.appendChild(createdLinkElement);
