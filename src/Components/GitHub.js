import menuTwo from "./Pics/menu1.png"
import menuOne from "./Pics/menu4.png"
import quiz from './Pics/quiz.jpg'

import ToggleImages from "./Toggle"
import '../App.css';

export default function GitHub() {

    return <div className="text"><p>Projekt</p>
        <strong>YungDev</strong>
        <section id='start'>
        <br/><br/>
        Detta är ett terminalbaserat spel som jag och tre klasskamrater har skapat. Spelet
        använder SQLite för att lagra data, C# som programmeringsspråk inom .NET ramverket. 
        Du navigerar genom olika platser och utför handlingar i spelet med hjälp av REST API.
        <br/><br/>
        Spelet handlar om en ung utvecklare som samlar poäng baserat på din skicklighetsnivå 
        och hur mycket pengar du har tjänat innan 10-dagarsgränsen. Du börjar med 5 uthållighetspoäng 
        som du kan använda antingen för att gå till jobbet (för pengar), skolan (för färdigheter) 
        eller för att hacka andra spelare. Det är verkligen en tuff värld i YungDev-universumet. Det 
        finns även en affär där du kan köpa olika saker som ger dig någon attribut. Varje 
        gång du vilar finns det en 50% chans att en slumpmässig händelse utlöses med både 
        positiva och negativa effekter. Förutom dessa effekter vaknar du varje dag med 5 
        nya uthållighetspoäng.
        <br/><br/>

        <ToggleImages first={menuOne} second={menuTwo} link="https://github.com/DanijelGb/YungDev" />
        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <strong>Säkerhetstentan</strong>
        <br/><br/>
        En app som jag skapade för att hjälpa till med plugget inför vår säkerhetstenta. En rolig
        liten app som gör pluggandet lite mer njutbart och som man kan repetera många gånger
        tills det verkligen sitter.
        <br/><br/>
        Det är helt enkelt en samling av frågor och svar som visas i slumpmässig ordning. Samma 
        fråga dyker aldrig upp två gånger. 
        <br/><br/>
        <a href='https://github.com/DanijelGb/security-quiz' target="_blank" rel="noopener noreferrer">
          <img src={quiz} alt='Quiz bild' className='quiz'/>
       <br/> 
        PS. Jag klarade tentan!
       </a>
      </section>
    </div>
}

