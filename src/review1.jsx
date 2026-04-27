import React from "react";
import './review1.css';
import screenshot1 from './images2/screenshot1.jpg';

function PeerReview1() {
  return (
    <>
      <header className="peer-header">
        <h1>Peer Review 1</h1>
      </header>

      <main className="peer-main">
        <h2>Student Evaluated</h2>
        <p>
          <strong>Chernoivan, Sasha</strong>
        </p>

        <figure>
          <img
            src={screenshot1}
            alt="Screenshot of classmate website"
          />
          <figcaption>
            Website reviewed:{" "}
            <a
              href="https://webpages.charlotte.edu/achernoi/client/"
              target="_blank"
              rel="noreferrer"
            >
              https://webpages.charlotte.edu/achernoi/client/
            </a>
          </figcaption>
        </figure>

        <h2 className="section-title">Evaluation Checklist + Feedback</h2>

        <ul>
          <li><strong>Submission:</strong> The link leads directly to the correct page being reviewed.</li>
          <li><strong>File Naming:</strong> File and folder names appear consistent and appropriate with no visible issues.</li>
          <li><strong>Design - Readability:</strong> The page is readable overall, but some text sections could benefit from increased spacing and slightly larger font sizes.</li>
          <li><strong>Design - Colors & Fonts:</strong> Colors and fonts are mostly consistent, though improving contrast in some areas would enhance accessibility.</li>

          <li><strong>CRAP Principles:</strong></li>
          <li>• Contrast: Some contrast is present, but certain elements could stand out more.</li>
          <li>• Repetition: Design elements are fairly consistent across the page.</li>
          <li>• Alignment: Content is mostly aligned well and visually organized.</li>
          <li>• Proximity: Related items are grouped, though spacing could be improved in some sections.</li>

          <li><strong>Page Structure:</strong> The page includes a header, main section, and footer.</li>
          <li><strong>Header:</strong> A header is present and includes navigation.</li>
          <li><strong>Main Content:</strong> The main section clearly presents the purpose of the site.</li>
          <li><strong>Footer:</strong> A footer exists, but could include more useful information.</li>
          <li><strong>Navigation:</strong> Navigation is present and functional.</li>
          <li><strong>Main Starts with h2:</strong> The structure mostly follows proper heading hierarchy.</li>
          <li><strong>Branding / Tagline:</strong> The site has some identity, but a stronger tagline could improve branding.</li>
          <li><strong>Validation:</strong> No validation tools are visible; adding validation would improve quality.</li>
          <li><strong>Overall Requirements:</strong> The project meets most of the requirements for this stage.</li>

          <li><strong>Suggestions:</strong></li>
          <li>• Improve spacing between sections for better readability</li>
          <li>• Increase contrast in certain areas</li>
          <li>• Add more detailed content to strengthen the site</li>
          <li>• Enhance footer with more useful information</li>

          <li><strong>Stop, Start, Continue:</strong></li>
          <li>• Stop: Avoid overcrowding sections with too much text</li>
          <li>• Start: Improving visual hierarchy and spacing</li>
          <li>• Continue: Maintaining a clear structure and navigation</li>

          <li><strong>Overall:</strong> This is a solid project with a good structure and clear direction. With a few improvements, it can become more polished and user-friendly.</li>
        </ul>
      </main>
    </>
  );
}

export default PeerReview1;