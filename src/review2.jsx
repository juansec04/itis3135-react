import React from "react";
import "./review1.css";

function Review2() {
  return (
    <>
      <header className="peer-header">
        <h1>Peer Review 2</h1>
      </header>

      <main className="peer-main">
        <h2>Student Evaluated</h2>
        <p><strong>Gharzai, Mashal</strong></p>

        <figure className="peer-figure">
          <img
            src="/screenshot2.jpg"
            alt="Screenshot of classmate website"
          />
          <figcaption>
            Website reviewed:{" "}
            <a
              href="https://webpages.charlotte.edu/mgharzai/mehr_projects.html/index.html"
              target="_blank"
              rel="noreferrer"
            >
              https://webpages.charlotte.edu/mgharzai/mehr_projects.html/index.html
            </a>
          </figcaption>
        </figure>

        <h2 className="section-title">Evaluation (Checklist + Feedback)</h2>

        <ul>
          <li><strong>Submission:</strong> The page link loads directly to the site being reviewed.</li>

          <li><strong>File Naming:</strong> The page appears organized, though the folder naming structure may need clarification.</li>

          <li><strong>Design - Readability:</strong> The site is easy to read overall with clear titles and descriptions.</li>

          <li><strong>Design - Colors & Fonts:</strong> The visual style matches the fashion theme and supports branding well.</li>

          <li><strong>CRAP Principles:</strong></li>
          <li>• <strong>Contrast:</strong> Could be stronger in some areas.</li>
          <li>• <strong>Repetition:</strong> Consistent product cards and styling.</li>
          <li>• <strong>Alignment:</strong> Clean and organized layout.</li>
          <li>• <strong>Proximity:</strong> Related items are grouped effectively.</li>

          <li><strong>Page Structure:</strong> Clear flow with featured and recommendation sections.</li>

          <li><strong>Header:</strong> Strong headline with clear purpose.</li>

          <li><strong>Main Content:</strong> Focused and relevant with calls to action.</li>

          <li><strong>Footer:</strong> Could be improved or expanded.</li>

          <li><strong>Navigation:</strong> Could benefit from a fuller navigation menu.</li>

          <li><strong>Main Starts with h2:</strong> Good heading structure overall.</li>

          <li><strong>Branding / Tagline:</strong> Strong branding and identity.</li>

          <li><strong>Validation:</strong> No validation links visible.</li>

          <li><strong>Overall Requirements:</strong> Solid structure and niche presentation.</li>

          <li><strong>Suggestions:</strong></li>
          <li>• Add a full navigation menu</li>
          <li>• Add a footer with useful info</li>
          <li>• Include more sections (about, contact, categories)</li>
          <li>• Improve spacing/contrast slightly</li>

          <li><strong>The Good, The Bad, The Ugly:</strong></li>
          <li>• <strong>The Good:</strong> Strong branding and consistency</li>
          <li>• <strong>The Bad:</strong> Needs more navigation/structure</li>
          <li>• <strong>The Ugly:</strong> No major issues</li>

          <li><strong>Overall:</strong> A well-branded and visually strong page that can improve with more structure and supporting content.</li>
        </ul>
      </main>
    </>
  );
}

export default Review2;