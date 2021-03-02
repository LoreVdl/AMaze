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
          description: 'Scan de QR-code die je terugvindt op één van de postkaarten',
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
          description: 'De naam van de man die we zoeken op het portret is Sir Winston Churchill\n',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'De alfabetslang',
      tips: [
        {
          description: 'In het raster zoeken we 13 beroepen in één lijn, waarvan de laatste letter van het vorige beroep ook de eerste letter is van het volgende beroep',
          canShow: false
        },
        {
          description: 'De letters die daarna overblijven in het raster ga je zoeken op de tekening van de slang, op dezelfde positie als waar die letters op de tekening staan, duid je de vakjes aan op de slang online',
          canShow: false
        },
        {
          description: 'De letters die overblijven in het raster en die je moet aanduiden op de slang zijn U - E - G - S - M -T',
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
          description: 'De zeshoeken moeten zo in de figuur geplaatst worden dat er één doorlopende kring ontstaat',
          canShow: false
        },
        {
          description: 'Op elke zeshoek staat ook een tekening, elke tekening verwijst naar een Maya-god, net zoals de namen onder de drie knoppen online',
          canShow: false
        },
        {
          description: 'Tenslotte worden de drie knoppen online in de juiste volgorde aangeklikt, beginnend bij de dood en in de richting van de pijlen',
          canShow: false
        },
        {
          description: 'De juiste volgorde waarin je de knoppen moet aanklikken is \n 2 - 1 - 3 - 3 - 3 - 2 - 3 - 3 - 1 - 3 of 2 - 3 - 3 - 1 - 3 - 2 - 1 - 3 - 3 - 3',
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
          description: 'Wanneer je alle vogels met de juiste vertaling van het woord vleugel verbind, vorm je een woord met de letters op de kruispunten',
          canShow: false
        },
        {
          description: 'Het woord dat je kan vormen met de letters op de kruispunten is migratie',
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
          description: 'De volgorde van de getallen die je uit de doolhoven haalt, wordt aangegeven door de postzegels',
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
          description: 'De waarde van de diamant en van de fles zijn al gegeven en staan geschreven op de postkaarten, aan de hand van die waarden kan je de andere berekenen',
          canShow: false
        },
        {
          description: 'De waarden van elk individueel voorwerp',
          canShow: false,
          extra: [
            {
              name: 'Goud',
              description: '1 goudstaaf = 3',
              canShow: false
            },
            {
              name: 'Diamant',
              description: '1 diamant = 6',
              canShow: false
            },
            {
              name: 'Schaal',
              description: '1 schaal = 4',
              canShow: false
            },
            {
              name: 'Parelsnoer',
              description: '1 parelsnoer = 2',
              canShow: false
            },
            {
              name: 'Banaan',
              description: '1 banaan = 5',
              canShow: false
            },
            {
              name: 'Druif',
              description: '1 druif = 2',
              canShow: false
            },
            {
              name: 'Stro',
              description: '1 bundel stro = 7',
              canShow: false
            },
            {
              name: 'Fles',
              description: '1 glazen fles = 3',
              canShow: false
            },
          ]
        },
        {
          description: 'Als je de waarde weet van elk individueel voorwerp moet je de grote weegschaal in balans brengen, de waarde van de rechterkant van de weegschaal voer je online in',
          canShow: false
        },
        {
          description: 'Om de balans in evenwicht te brengen zorg je dat je in totaal een waarde van 52 in de weegschaal legt, zoals bijvoorbeeld 8 diamanten en 1 schaal',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'Sterrenbeelden',
      tips: [
        {
          description: 'Bereken van elk sterrenbeeld zijn waarde aan de hand van de zes formules op de postkaarten en de zes sterrenbeelden die in de kamer verstopt zijn',
          canShow: false
        },
        {
          description: 'Wanneer elk sterrenbeeld op het juiste uur (de juiste waarde) ligt, geven de grote wijzers van de uurwerken de juiste letter aan en de kleine wijzers de positie van die letter in het woord dat we zoeken',
          canShow: false
        },
        {
          description: 'De letters waar de wijzers van de klokken naar wijzen zijn S - T - R - A - L',
          canShow: false
        }
      ]
    },
    {
      name: 'painting',
      title: 'De zeven verschillen',
      tips: [
        {
          description: 'Ga opzoek naar zeven verschillen met de werkelijkheid',
          canShow: false
        },
        {
          description: 'Beschrijf online één voor één de verschillen met de werkelijkheid die je ziet op de postkaart',
          canShow: false
        },
        {
          description: 'De zeven verschillen met de werkelijkheid zijn (bijvoorbeeld) \n dromedaris - spiegel - jupiter - datum - zwart - geel - cirkel',
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
          description: ' De juiste volgorde is 2 - 4 - 3 - 7 - 5 - 8 - 6 - 1',
          canShow: false
        }
      ]
    }
  ];

  toggleArrow(tip: Tips): void {
    tip.canShow = !tip.canShow;
  }

  toggleExtra(extra: any): void {
    extra.canShow = !extra.canShow;
  }
}
