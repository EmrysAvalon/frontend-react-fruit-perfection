import React from 'react';
import './App.css';
import Product from './Product';

function App() {
  return (
    <main>
        <Product
            image="https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/uploads/2012/09/lemons.jpg?itok=1nQYq8D2"
            title="Citroen"
            description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
        />
        <Product
            image="https://www.ahealthylife.nl/wp-content/uploads/2017/06/limoen_voedingswaarde.jpg"
            title="Limoen"
            description="Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."
        />
        <Product
            image="https://yoors-media-uploads-adsfairbv.netdna-ssl.com/39229/photos/waarom-zit-er-vaak-een-gat-in-ijsblokjes-die-je-in-de-horeca-krijgt1528067711.jpg"
            title="Ijsblokjes"
            description="Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."
        />
    </main>
  );
}

export default App;
