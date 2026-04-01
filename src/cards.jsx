import cs2 from './images2/cs2.jpg';
import valorant from './images2/valorant.jpg';
import fifa from './images2/fifa.jpg';
import minecraft from './images2/minecraft.jpg';
import fortnite from './images2/fortnite.jpg';
import rocketleague from './images2/rocketleague.jpg';

export default function Cards() {
    return (
        <main>
             <h2>Raven Gaming Lounge Game Cards</h2>
      <p>Explore some of the most popular games available at Raven Gaming Lounge.</p>

      <section className="card-container">
        <article className="card">
          <img src={cs2} alt="Counter Strike 2" />
          <h3 className="card-title">Counter-Strike 2</h3>
          <p>A competitive FPS where teamwork and strategy determine victory.</p>
        </article>

        <article className="card">
          <img src={valorant} alt="Valorant" />
          <h3>Valorant</h3>
          <p>A tactical shooter combining precise gunplay with unique character abilities.</p>
        </article>

        <article className="card">
          <img src={fifa} alt="FIFA Soccer" />
          <h3>FIFA Soccer</h3>
          <p>Play competitive soccer matches with friends using the latest FIFA game.</p>
        </article>

        <article className="card">
          <img src={minecraft} alt="Minecraft" />
          <h3>Minecraft</h3>
          <p>Build, explore, and survive in an open sandbox world with endless creativity.</p>
        </article>

        <article className="card">
          <img src={fortnite} alt="Fortnite" />
          <h3>Fortnite</h3>
          <p>A fast-paced battle royale where players compete to be the last one standing.</p>
        </article>

        <article className="card">
          <img src={rocketleague} alt="Rocket League" />
          <h3>Rocket League</h3>
          <p>A high-speed mix of soccer and cars with exciting competitive gameplay.</p>
        </article>
      </section>
        </main>
    );
}