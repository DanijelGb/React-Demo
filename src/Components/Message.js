import '../App.css';
import React, { forwardRef } from 'react';

const Message = forwardRef((props, ref) => {
  return <div className='text'>
Som student i mitt sista år på yrkeshögskolan Jensen i Malmö söker jag en LIA-plats (Lärande i Arbete)
på ett företag för att slutföra min utbildning.
<br/><br/>
Relevanta datum:<div className='datum'>29/10 2024 - 25/04 2025</div> 
<br/>
Detta är ett krav från skolan, som förväntar sig att 
jag ska lära mig mitt nya yrke på bästa möjliga sätt genom att praktisera tillsammans med erfarna 
yrkesverksamma. 
<br/><br/>
<strong>Mina förväntningar</strong>
<br/><br/>
Jag hoppas få en djupgående inblick i hur programmering fungerar i praktiken, utanför 
klassrummets teoretiska ram. Jag ser fram emot att bli utmanad och att känna mig redo att ta mig an 
min första tjänst efter utbildningen.
<br/><br/>
<br/><br/>

<div section id='about' ref={ref}></div>
<p>Om mig</p>
Mitt "modersmål" är C# och jag har även använt Java som jag lärt mig genom
en online kurs på eget initiativ. Jag har även använt mig av JavaScript till
React och individuellt. Jag har också lärt mig att använda GitHub Actions och Postman
för testning. Dessutom har utbildningen säkerhet som inriktning.
<br/><br/>
<strong>Bakgrundshistoria</strong>
<br/><br/>
Mitt inträde i detta yrke har varit något okonventionellt. Jag har alltid varit nyfiken på 
hur programmering fungerar och all den mystik som ligger bakom applikationer och de spel 
jag har spelat sedan jag var ung.
<br/><br/>
Jag bokade en tvåmånaders resa till Thailand för att ta lite tid för mig själv och träna 
kampsport, eftersom det är så populärt där. Jag började fundera på vad jag skulle göra 
mellan träningarna och andra aktiviteter. Då fick jag idén att det kunde vara kul att 
prova att lära mig Java genom en onlinekurs.
<br/><br/>
Jag insåg snabbt att det var ganska utmanande, men när jag övervann ett hinder fick jag 
en härlig dopaminkick. Jag fortsatte att avsätta ett par timmar om dagen för att lära mig 
mer och kände att detta verkligen var något för mig.
<br/><br/>
När jag väl var tillbaka i Sverige ville jag fortsätta min programmeringsresa och 
hittade jag Jensen Yrkeshögskola. Jag ansökte till utbildningen och kom in. Sedan dess 
har det varit full fart i programmeringsvärlden och det fortsätter ännu. Det är fantastiskt 
hur mycket man kan lära sig på kort tid.
<br/><br/>
I skolan träffade jag många likasinnade människor och några passionerade och inspirerande 
lärare. Jag har lätt för att arbeta med andra och tycker om att dela idéer tillsammans.
<br/><br/>
</div>
  }
)

export default Message;
  
