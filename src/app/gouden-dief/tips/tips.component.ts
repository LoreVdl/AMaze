import { Component } from '@angular/core';
import {Puzzle} from './puzzle.model';
import {Tips} from './tips.model';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent {
  puzzles: Array<Puzzle> = [
    {
      name: 'QR_code',
      title: 'QR code',
      tips: [
        {
          description: 'Ga op zoek naar de QR-code',
          canShow: false
        },
        {
          description: 'Scan de QR-code die je terugvindt op één van de postkaarten',
          canShow: false
        },
        {
          description: 'De code die je krijgt wanneer je de QR-code scant is Sch8tt2nJ8g2r',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'Het schilderij zonder naam',
      tips: [
        {
          description: 'De naam van de man die we zoeken, kom je te weten door het geheime schrift te vertalen dat je terugvindt op de piramide',
          canShow: false
        },
        {
          description: 'Het geheime schrift is afgeleid van het Rozenkruisersgeheimschrift',
          canShow: false
        },
        {
          description: 'De naam van de man die we zoeken op het portret is Sir Winston Churchill',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'De alfabetslang',
      tips: [
        {
          description: 'In het raster zoeken we 13 beroepen in één lijn, waarvan de laatste letter van het vorige beroep ook de eerste letter is van het volgende beroep',
          canShow: false
        },
        {
          description: 'De letters die overblijven in het raster ga je zoeken op de tekening van de slang, op dezelfde positie als waar die letters op de tekening staan, duid je de vakjes aan op de slang online',
          canShow: false
        },
        {
          description: 'De letters die overblijven in het raster en die je moet aanduiden op de slang zijn U-E-G-S-M-T',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'De kringloop van het water',
      tips: [
        {
          description: 'Om deze kamer op te lossen heb je de figuur op het extra blad nodig',
          canShow: false
        },
        {
          description: 'De zeshoeken moeten zo in de figuur geplaatst worden dat er één doorlopende kring ontstaat',
          canShow: false
        },
        {
          description: 'Vervolgens worden de zeshoeken omgedraaid, elke tekening verwijst naar een Maya-god net zoals de namen onder de drie knoppen online',
          canShow: false
        },
        {
          description: 'De juiste volgorde waarin je de knoppen moet aanklikken is 2-1-3-3-3-2-3-3-1-3 of 2-3-3-1-3-2-1-3-3-3',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'Vogels en vlaggen',
      tips: [
        {
          description: 'Elke vogel verbergt een vlag van een land in zijn veren',
          canShow: false
        },
        {
          description: 'Verbind de juiste wetenschappelijke naam van elke vogel (links) met de juiste vertaling van het woord vleugel (rechts) aan de hand van de taal die in dat land gesproken wordt',
          canShow: false
        },
        {
          description: 'Wanneer je alle vogels met de juiste vertaling van het woord vleugel verbind, maak je een woord van de letters op de kruispunten',
          canShow: false
        },
        {
          description: 'Het woord dat je kan maken met de letters op de kruispunten is migratie',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'Vier maal het juiste pad',
      tips: [
        {
          description: 'Leg elk doolhof op de juiste postkaart (aan de hand van de voorgedrukte lijnen) en teken het doolhof op de kaart',
          canShow: false
        },
        {
          description: 'Neem nu het doolhof weg, teken een lijn van kruis naar kruis door het getekende doolhof en ontdek zo vier getallen',
          canShow: false
        },
        {
          description: 'Wanneer je vier maal het juiste pad door het doolhof tekent, krijg je de code 2 - 3 - 9 - 4',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'De juiste balans',
      tips: [
        {
          description: 'Bereken de waarde van de verschillende voorwerpen in de weegschalen aan de hand van de kleine weegschalen die je terugvindt doorheen de postkaarten',
          canShow: false
        },
        {
          description: 'De waarden van de diamant en van de fles zijn al gegeven en staan geschreven op de postkaarten, aan de hand van die waarden kan je de andere berekenen',
          canShow: false
        },
        {
          description: 'Als je de waarde weet van elk voorwerp moet je de grote weegschaal in balans brengen, de waarde van de rechterkant voer je online in',
          canShow: false
        },
        {
          description: 'Om de balans in evenwicht te brengen zorg je dat je in totaal een waarde van 52 in de weegschaal legt, zoals 8 diamanten en 1 schaal',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'Sterrenbeelden',
      tips: [
        {
          description: 'Bereken van elk sterrenbeeld zijn waarde aan de hand van de zes formules op de postkaarten en de zes sterrenbeelden die in de tekening verstopt zijn',
          canShow: false
        },
        {
          description: 'Wanneer elk sterrenbeeld op het juiste uur (de juiste waarde) ligt, geeft de grote wijzer van de klokken de juiste letter aan en de kleine wijzer de positie van die letter in het woord dat we zoeken',
          canShow: false
        },
        {
          description: 'De letters waar de klokken naar wijzen zijn S - T - R - A - L',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'De zeven verschillen',
      tips: [
        {
          description: 'Ga opzoek naar zeven verschillen met de waarheid',
          canShow: false
        },
        {
          description: 'Beschrijf online één voor één de verschillen met de waarheid die je ziet op de postkaart',
          canShow: false
        },
        {
          description: 'De zeven verschillen met de werkelijkheid zijn dromedaris - spiegel - jupiter - datum - zwart - geel - cirkel',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'De uitweg',
      tips: [
        {
          description: 'Elk symbool stelt een puzzel voor die je onderweg bent tegengekomen',
          canShow: false
        },
        {
          description: 'De uitweg vind je door de volgorde aan te duiden waarin je de puzzels bent tegengekomen tijdens het spel',
          canShow: false
        },
        {
          description: 'De juiste volgorde is 2 - 4 - 3 - 7 - 5 - 8 - 6 - 1',
          canShow: false
        }
      ]
    }
  ];

  toggleArrow(tip: Tips): void {
    tip.canShow = !tip.canShow;
  }
}
