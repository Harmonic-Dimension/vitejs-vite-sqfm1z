<script>
  import { Button } from 'sveltestrap';
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();

  const behandelplanText = `Behandelplan:

Fase 1: Pijncontrole en mobilisatie
- Tractiemanipulatie van de heup om bewegingsbeperking op te heffen
- Manuele therapie om mobilisatie van de heup te verbeteren
- Massage en rektechnieken om myofasciale triggerpoints in de gluteus medius en adductoren te behandelen

Fase 2: Houdingscorrectie en oefentherapie
- Instructies voor de patiënt om het zitgedrag aan te passen om zo afwisseling te krijgen tussen zitten en staan
- Het geven van oefeningen om de heup te versterken en de spierbalans te herstellen
- Het opstellen van een oefenschema om dagelijks uit te voeren

Fase 3: Evaluatie en onderhoud
- Het evalueren van de voortgang 
- Het geven van advies m.b.t. onderhoud en preventie 
- Indien nodig vervolgbehandelingen afspreken om resultaten bij te houden en te onderhouden. 

Opmerking: De behandelplan kan onderhevig zijn aan verandering afhankelijk van de reactie en voortgang van de patiënt.`;
  
  const beperkingenText = `De patiënt ervaart beperkingen bij het fietsen als gevolg van aanhoudende pijn aan de buitenkant van het dijbeen. De klachten doen zich voor als de patiënt zit met zijn benen over elkaar of op de bank ligt op de verkeerde manier. De pijn straalt soms uit naar de lies en de buitenkant van de knie, maar de patiënt heeft tegenwoordig geen last meer van de lies. De klachten zijn wisselend en niet erg als de patiënt stil zit.`;
  
  const conclusiesText = `Na het uitvoeren van het functieonderzoek, concludeert de fysiotherapeut dat de patiënt een atrogene bewegingsbeperking heeft in de endorotatie van de heup met 90 graden flexie. Daarnaast heeft de patiënt myofasciale triggerpoints in de gluteus medius en de tractus iliotibialis, evenals een combinatie van agonisten en antagonisten van de heup abductoren en adductoren. De fysiotherapeut stelt vast dat deze stoornissen mogelijk zijn ontstaan door eenzijdige houdings- en bewegingsactiviteiten, zoals te veel zitten met het ene been over het andere. De behandeling omvat het wegnemen van triggerpoints door middel van massage- en rektechnieken en het opheffen van de bewegingsbeperking door middel van tractiemanipulatie en mobiliserende technieken van de heup. De fysiotherapeut adviseert de patiënt om zijn houdingsgedrag aan te passen en bijvoorbeeld vaker af te wisselen tussen zitten en staan.`;
  
  const historieText = `De patiënt heeft al ruim een jaar last van pijn aan de bovenkant van het rechter dijbeen, voornamelijk aan de buitenkant. Het begon mogelijk door de verkeerde afstelling van de bakfiets waar de patiënt veel op zit. Een jaar geleden werd de oorzaak van de klachten vastgesteld als de adductorspier en behandeld door een fysiotherapeut, maar de pijn aan de buitenkant van het dijbeen is gebleven. De pijn straalt soms uit naar de lies en de buitenkant van de knie. De patiënt heeft voornamelijk last van de klachten tijdens het fietsen. Er zijn geen rugklachten aanwezig. De patiënt heeft een zittend beroep en zit veel met het rechterbeen over het linkerbeen. De klachten zijn wisselend van aard en zijn niet ernstig als er niks mee wordt gedaan. Er zijn meerdere myofasciale triggerpoints aanwezig in de gluteus medius en adductoren waarbij de oorzaak ligt in eenzijdig houdings- en bewegingsgedrag. De behandeling bestaat uit tractiemanipulatie van de heup, manuele therapie, massage- of dry needlingtechnieken om de triggerpoints op te heffen en het aanpassen van het zitgedrag. De patiënt zal hierbij 3 tot 4 behandelingen nodig hebben.`;
  
  const patientbehoeftenText = `De patiënt heeft last van pijn aan de buitenkant van het dijbeen, voornamelijk bij het fietsen en heeft een hulpvraag om hiervan af te komen. De patiënt heeft reeds een jaar last van deze klacht en is eerder behandeld door een fysiotherapeut voor klachten aan de binnenkant van het dijbeen, waarbij het probleem in de adductorspier lag. De patiënt is bereid en op zoek naar behandeling om deze klachten te verlichten.`;
  
  const soepText = `SOEP-rapportage:

Subjectief: De patiënt heeft last van pijn aan de buitenkant van het dijbeen sinds een jaar, voornamelijk bij het zitten met haar rechterbeen over het linkerbeen. Pijn straalt soms uit naar de lies en de buitenkant van de knie. De pijn veroorzaakt problemen bij het fietsen. De patiënt voelt zich verder in orde.

Objectief: Beperking in endorotatie van de heup en myofasciale triggerpoints in de gluteus medius en adductoren zijn vastgesteld. Kvadranttest was dubieus. Een combinatie van drie factoren: bewegingsbeperking, myofasciale triggerpoints en problemen met agonisten en antagonisten de heup, abductoren, adductoren. Dit wordt mogelijk veroorzaakt door het eenzijdige houdings- en bewegingsgedrag van de patiënt.

Evaluatie: De behandeling lijkt effectief, maar het houdingsgedrag van de patiënt moet worden aangepast om toekomstige problemen te voorkomen.

Plan: De fysiotherapeut adviseert de patiënt om de myofasciale triggerpoints te verminderen en de bewegingsbeperking op te heffen middels manuele therapie, tractiemanipulatie van de heup en rektechnieken of dry needling. De patiënt moet haar zitgedrag aanpassen door afwisselend staan en zitten en regelmatig te bewegen. De patiënt moet dit patroon aanpassen door een afwisselende houding aan te nemen en regelmatig te bewegen en dus de spierspanningen te verminderen. De fysiotherapeut stelt een behandeling van 3 tot 4 sessies voor en zal verder informeren over hoe zitgedrag aan te passen.`;
  
  const stoornissenText = `De fysiotherapeut heeft een functieonderzoek uitgevoerd bij de patient, waarbij gekeken is naar de beweging en beperking in de endorotatie van de heup, de kvadranttest en de spieren van het bovenbeen en de heup. Uit het onderzoek blijkt dat de patient een functiestoornis heeft door eenzijdig houdings- en bewegingsgedrag. Er zijn myofasciale triggerpoints in de gluteus medius, adductoren en tractus iliotibialis gevonden, wat kan leiden tot een disbalans in de spierspanning en vermoeidheid tijdens het fietsen. Ook is er sprake van bewegingsbeperking in de heup die middels tractiemanipulatie en mobiliserende technieken kan worden opgeheven. De fysiotherapeut adviseert de patient om zijn houdingsgedrag aan te passen en alternatieven te zoeken voor het vele zitten. Er moeten mogelijk meerdere behandelingen plaatsvinden, zoals massage en dry needling, en de patient zal moeten blijven werken aan het verbeteren van zijn houding en bewegingsgedrag.`;
	
	function setDemoText() {
		dispatch('message', {
      behandelplanMessage: behandelplanText,
      beperkingenMessage: beperkingenText,
      conclusiesMessage: conclusiesText,
      historieMessage: historieText,
      patientbehoeftenMessage: patientbehoeftenText,
			soepMessage: soepText,
      stoornissenMessage: stoornissenText
		});
	}
</script>

<Button on:click={setDemoText} outline>
	Demo
</Button>