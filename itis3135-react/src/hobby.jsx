import { useState } from 'react';
import './hobby.css';

export default function Hobby() {
    const [active, setActive] = useState("what");
    return (
        <div className="hobby-page">
            <header>
                <h1>Soccer</h1>
                <p>A one-page site about one of my favorite hobbies.</p>

                <nav>
                    <button onClick={() => setActive("what")}>What</button> ⚽
                    <button onClick={() => setActive("who")}>Who</button> ⚽
                    <button onClick={() => setActive("when")}>When</button> ⚽
                    <button onClick={() => setActive("where")}>Where</button> ⚽
                    <button onClick={() => setActive("how")}>How</button> ⚽
                    <button onClick={() => setActive("why")}>Why</button> ⚽
                    <button onClick={() => setActive("ai-prompts")}>AI Prompts</button>
                </nav>
            </header>

            <main>
                {active === "what" && (
                    <section id="what">
                        <h2>What</h2>
                        <p>Soccer is my favorite hobby because it is exciting, competitive, and fun to play or watch.</p>
                        <p>It mixes skill, teamwork, speed, and strategy in a way that keeps every game interesting.</p>
                        <p>I enjoy soccer because there is always something to improve, from passing to shooting to movement.</p>

                        <div className="cards">
                            <div className="card">It keeps me active.</div>
                            <div className="card">It is fun with friends or teammates.</div>
                            <div className="card">It is one of the most popular sports in the world.</div>
                        </div>

                        <figure>
                            <img src="/images/soccer-home.jpg" alt="Soccer ball on a field" />
                            <figcaption>Soccer as an exciting hobby</figcaption>
                        </figure>
                        <p><em>This image matches the main idea of the hobby page.</em></p>
                    </section>
                )}

                {active === "who" && (
                    <section id="who">
                        <h2>Who</h2>
                        <p>Soccer is for people of all ages and skill levels, from beginners to professionals.</p>
                        <p>I enjoy it because it gives me a way to compete, improve, and have fun at the same time.</p>
                        <p>It also helps bring people together through teams, clubs, and pickup games.</p>

                        <div className="cards">
                            <div className="card">Players</div>
                            <div className="card">Teams</div>
                            <div className="card">Fans</div>
                        </div>

                        <figure>
                            <img src="/images/soccer-team.jpg" alt="Soccer team standing together" />
                            <figcaption>Soccer is built around teamwork</figcaption>
                        </figure>
                        <p><em>This image fits the section by showing players together.</em></p>
                    </section>
                )}

                {active === "when" && (
                    <section id="when">
                        <h2>When</h2>
                        <p>Soccer can be played all year, but spring and fall are usually the best outdoor seasons.</p>
                        <p>Evenings and weekends are also great times because more people are free to play.</p>
                        <p>Training regularly is one of the best ways to improve.</p>

                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Spring</td>
                                    <td>Nice weather and good field conditions</td>
                                </tr>
                                <tr>
                                    <td>Fall</td>
                                    <td>Cooler temperatures for longer games</td>
                                </tr>
                                <tr>
                                    <td>Weekends</td>
                                    <td>Best for games and practice</td>
                                </tr>
                            </tbody>
                        </table>

                        <figure>
                            <img src="/images/soccer-schedule.jpg" alt="Soccer practice at sunset" width="350" />
                            <figcaption>Practice sessions at the best times</figcaption>
                        </figure>
                        <p><em>This image represents a good time to train and play.</em></p>
                    </section>
                )}

                {active === "where" && (
                    <section id="where">
                        <h2>Where</h2>
                        <p>Soccer can be played on grass fields, turf fields, indoor courts, or even open parks.</p>
                        <p>That flexibility makes it one of the easiest hobbies to enjoy almost anywhere.</p>
                        <p>Different places can help develop different parts of the game.</p>

                        <div className="cards">
                            <div className="card">Grass fields</div>
                            <div className="card">Turf fields</div>
                            <div className="card">Indoor courts</div>
                        </div>

                        <figure>
                            <img src="/images/soccer-location.jpg" alt="Outdoor soccer field" width="400" />
                            <figcaption>A great place to play soccer</figcaption>
                        </figure>
                        <p><em>This image matches the section by showing a soccer field.</em></p>
                    </section>
                )}

                {active === "how" && (
                    <section id="how">
                        <h2>How</h2>
                        <p>Getting started with soccer is simple. All you need is a ball, basic gear, and space to practice.</p>
                        <p>Beginners can focus on dribbling, passing, first touch, and shooting.</p>
                        <p>Improvement comes from repetition, consistency, and playing real matches.</p>

                        <div className="cards">
                            <div className="card">Practice ball control</div>
                            <div className="card">Work on passing and shooting</div>
                            <div className="card">Play often to improve</div>
                        </div>

                        <figure>
                            <img src="/images/soccer-how.jpg" alt="Player practicing soccer drills" />
                            <figcaption>Practicing the basics</figcaption>
                        </figure>
                        <p><em>This image shows the kind of training used to improve.</em></p>
                    </section>
                )}

                {active === "why" && (
                    <section id="why">
                        <h2>Why</h2>
                        <p>I like soccer because it is competitive, exciting, and rewarding.</p>
                        <p>It helps with fitness, discipline, teamwork, and confidence.</p>
                        <p>It is also a hobby that creates great memories with other people.</p>

                        <div className="cards">
                            <div className="card">Good exercise</div>
                            <div className="card">Builds teamwork</div>
                            <div className="card">Very fun and exciting</div>
                        </div>

                        <figure>
                            <img src="/images/soccer-why.jpg" alt="Soccer player celebrating a goal" />
                            <figcaption>The energy of the sport</figcaption>
                        </figure>
                        <p><em>This image reflects the excitement that makes soccer enjoyable.</em></p>
                    </section>
                )}

                {active === "ai-prompts" && (
                    <section id="ai-prompts">
                        <h2>AI Prompts</h2>
                        <p>I only used AI for images.</p>
                        <p>This section is included because it is required in the assignment.</p>
                        <p>The rest of the page content is organized as a hobby site about soccer.</p>

                        <figure>
                            <img src="/images/soccer-ai.jpg" alt="Soccer image for AI prompts section" />
                            <figcaption>Soccer themed image</figcaption>
                        </figure>
                        <p><em>This image was included to match the topic and style of the page.</em></p>
                    </section>
                )}
            </main>

            <footer>
                <p>Designed by <a href="../juanrdesigns.com/index.html">Juan Designs</a> &copy; 2026</p>
                <p>
                    <a href="https://lint.page/kit/4d0fe3.js">HTML Validation</a> |
                    <a href="https://lint.page/kit/4d0fe3.js">CSS Validation</a> |
                    <a href="https://lint.page/kit/4d0fe3.js">Accessibility Check</a>
                </p>
            </footer>
        </div>
    );
}