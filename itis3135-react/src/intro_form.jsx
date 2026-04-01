export default function Intro_Form() {
    return (
        <main>
            <h2 id="page-title">Introduction Form</h2>
      <h3>Please submit the form below.</h3>

      <form id="intro-form" noValidate autoComplete="off">
        <fieldset>
          <legend>Personal Information</legend>

          <label htmlFor="first-name">First Name (required)</label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            required
            placeholder="Juan"
            defaultValue="Juan"
          />

          <label htmlFor="middle-name">Middle Name / Initial (optional)</label>
          <input
            id="middle-name"
            name="middleName"
            type="text"
            placeholder="D"
            defaultValue="D"
          />

          <label htmlFor="preferred-name">
            Nickname / Preferred Name (optional)
          </label>
          <input
            id="preferred-name"
            name="preferredName"
            type="text"
            placeholder="JR"
            defaultValue="JR"
          />

          <label htmlFor="last-name">Last Name (required)</label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            required
            placeholder="Ramirez"
            defaultValue="Ramirez"
          />
        </fieldset>

        <fieldset>
          <legend>Introduction Details</legend>

          <div className="compact-row">
            <div>
              <label htmlFor="ack-statement">
                Acknowledgment Statement (required)
              </label>
              <textarea
                id="ack-statement"
                name="ackStatement"
                required
                placeholder="I acknowledge this form reflects my own work..."
                defaultValue="I acknowledge this form reflects my own work and the data is accurate."
              />
            </div>

            <div>
              <label htmlFor="ack-date">Acknowledgment Date (required)</label>
              <input
                id="ack-date"
                name="ackDate"
                type="text"
                required
                defaultValue="2026-03-23"
              />
            </div>
          </div>

          <div className="compact-row">
            <div>
              <label htmlFor="mascot-adjective">
                Mascot Adjective (required)
              </label>
              <input
                id="mascot-adjective"
                name="mascotAdjective"
                type="text"
                required
                placeholder="Jazzy"
                defaultValue="Jazzy"
              />
            </div>

            <div>
              <label htmlFor="mascot-animal">Mascot Animal (required)</label>
              <input
                id="mascot-animal"
                name="mascotAnimal"
                type="text"
                required
                placeholder="Raven"
                defaultValue="Raven"
              />
            </div>
          </div>

          <label htmlFor="divider">Divider (required)</label>
          <input
            id="divider"
            name="divider"
            type="text"
            required
            placeholder="~"
            defaultValue="~"
          />

          <label htmlFor="picture">
            Picture (optional file upload, defaults provided)
          </label>
          <input id="picture" name="picture" type="file" accept="image/*" />
          <img
            id="picture-preview"
            src="/images/headshot.jpeg"
            alt="Default headshot"
            style={{ maxWidth: "100px", display: "block", margin: ".5em 0" }}
          />

          <label htmlFor="picture-caption">Picture Caption (required)</label>
          <input
            id="picture-caption"
            name="pictureCaption"
            type="text"
            required
            placeholder="My CS profile picture"
            defaultValue="My CS profile picture"
          />

          <label htmlFor="personal-statement">
            Personal Statement (required)
          </label>
          <textarea
            id="personal-statement"
            name="personalStatement"
            required
            placeholder="I love web development..."
            defaultValue="I’m a UNC Charlotte CS student building secure full-stack experiences."
          />
        </fieldset>

        <fieldset>
          <legend>7 Main Bullets (required)</legend>

          <label htmlFor="personal-background">Personal Background</label>
          <textarea
            id="personal-background"
            name="personalBackground"
            required
            placeholder="Grew up in Charlotte..."
            defaultValue="Grew up in Charlotte and have a passion for security engineering."
          />

          <label htmlFor="professional-background">
            Professional Background
          </label>
          <textarea
            id="professional-background"
            name="professionalBackground"
            required
            placeholder="Worked as a TA/IT assistant..."
            defaultValue="Worked as an IT support technician and teaching assistant in cybersecurity courses."
          />

          <label htmlFor="academic-background">Academic Background</label>
          <textarea
            id="academic-background"
            name="academicBackground"
            required
            placeholder="Junior CS student..."
            defaultValue="Junior at UNC Charlotte in Computer Science with Cybersecurity concentration."
          />

          <label htmlFor="subject-background">Subject Background</label>
          <textarea
            id="subject-background"
            name="subjectBackground"
            required
            placeholder="This course helps me..."
            defaultValue="ITIS provides hands-on practical cybersecurity and infrastructure skills."
          />

          <label htmlFor="primary-computer">Primary Computer</label>
          <textarea
            id="primary-computer"
            name="primaryComputer"
            required
            placeholder='MacBook Pro 14"'
            defaultValue={'MacBook Pro 16" with M2 Max, plus gaming PC with Linux dual-boot.'}
          />

          <label htmlFor="funny-thing">Funny Thing (optional)</label>
          <textarea
            id="funny-thing"
            name="funnyThing"
            placeholder="I once..."
            defaultValue="I once renamed all my friend’s machine hosts to mythical creatures for April Fool’s."
          />

          <label htmlFor="share-something">
            Something I would like to share (optional)
          </label>
          <textarea
            id="share-something"
            name="shareSomething"
            placeholder="I’d like to share..."
            defaultValue="I enjoy mountain biking, sketching, and learning Japanese."
          />
        </fieldset>

        <fieldset>
          <legend>Courses (start with one; add more)</legend>
          <div id="courses-wrapper"></div>
          <button type="button" id="add-course">
            Add Course
          </button>
        </fieldset>

        <fieldset>
          <legend>Quote and Links</legend>

          <label htmlFor="quote">Quote (required)</label>
          <textarea
            id="quote"
            name="quote"
            required
            placeholder="The only way to do great work..."
            defaultValue="The only way to do great work is to love what you do."
          />

          <label htmlFor="quote-author">Quote author (required)</label>
          <input
            id="quote-author"
            name="quoteAuthor"
            type="text"
            required
            placeholder="Steve Jobs"
            defaultValue="Steve Jobs"
          />

          <label htmlFor="link1">Link 1 (required)</label>
          <input
            id="link1"
            name="link1"
            type="url"
            required
            placeholder="https://www.linkedin.com/..."
            defaultValue="https://www.linkedin.com/in/juan-ramirez-982ba7385/"
          />

          <label htmlFor="link2">Link 2 (required)</label>
          <input
            id="link2"
            name="link2"
            type="url"
            required
            placeholder="https://github.com/..."
            defaultValue="https://github.com/juansec04"
          />

          <label htmlFor="link3">Link 3 (required)</label>
          <input
            id="link3"
            name="link3"
            type="url"
            required
            placeholder="https://github.com/"
            defaultValue="https://github.com/"
          />

          <label htmlFor="link4">Link 4 (required)</label>
          <input
            id="link4"
            name="link4"
            type="url"
            required
            placeholder="https://..."
            defaultValue="https://www.freecodecamp.org/juansec04"
          />

          <label htmlFor="link5">Link 5 (required)</label>
          <input
            id="link5"
            name="link5"
            type="url"
            required
            placeholder="https://webpages.charlotte.edu/jramir62/"
            defaultValue="https://webpages.charlotte.edu/jramir62/"
          />
        </fieldset>

        <div className="button-row">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button type="button" id="clear-btn">
            Clear
          </button>
          <button type="button" id="generate-html-btn">
            Generate HTML
          </button>
          <button type="button" id="generate-json-btn">
            Generate JSON
          </button>
        </div>
      </form>

      <section id="output-area" aria-live="polite">
        <h2 className="visually-hidden">Generated Output</h2>
      </section>
        </main>
    );

}