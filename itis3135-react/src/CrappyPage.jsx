export default function CrappyPage() {
    return (
        <main>
            <h2
        style={{
          marginLeft: "80px",
          marginTop: "1px",
          fontFamily: "Papyrus",
        }}
      >
        This is an H2 before H1 "Accidentaly"
      </h2>

      <h1
        style={{
          marginLeft: "5px",
          marginTop: "40px",
          fontFamily: "Comic Sans MS",
        }}
      >
        NOW HERE'S THE H1 (late)
      </h1>

      <p
        style={{
          textAlign: "center",
          marginLeft: "120px",
          marginRight: "3px",
          fontFamily: "serif",
        }}
      >
        This paragraph is centered even though it doesn’t need to be.
      </p>

      <p
        style={{
          fontSize: "48px",
          margin: "2px",
          fontFamily: "Comic Sans MS",
          textDecoration: "underline",
        }}
      >
        This is HUGE text and it’s underlined even though it’s not a link.
      </p>

      <p
        style={{
          marginLeft: "200px",
          marginTop: "2px",
          marginBottom: "60px",
          backgroundColor: "yellow",
          fontFamily: "Papyrus",
        }}
      >
        This text has a background color because why not.
      </p>

      <p
        style={{
          color: "#EEEEEE",
          backgroundColor: "white",
          marginLeft: "9px",
          marginRight: "250px",
        }}
      >
        Poor contrast text (light gray on white) that’s annoying to read.
      </p>

      <div
        style={{
          marginLeft: "33px",
          marginTop: "18px",
          borderTop: "20px dotted red",
          borderRight: "20px dashed blue",
          borderBottom: "20px double green",
          borderLeft: "20px solid purple",
          padding: "12px",
          fontFamily: "serif",
        }}
      >
        <p style={{ marginLeft: "1px", marginTop: "2px" }}>
          This box has a huge border and every side is different.
        </p>

        <p
          style={{
            marginLeft: "70px",
            marginTop: "35px",
            fontFamily: "Papyrus",
          }}
        >
          Papyrus is used here.
        </p>

        <p
          style={{
            marginLeft: "7px",
            marginTop: "1px",
            fontFamily: "Comic Sans MS",
          }}
        >
          Comic Sans is used here.
        </p>

        <p
          style={{
            marginLeft: "160px",
            marginTop: "1px",
            fontFamily: "serif",
          }}
        >
          And a serif font is used here.
        </p>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29"
        width="400"
        height="400"
        alt="THIS ALT TEXT IS EXTREMELY LONG AND AWFUL AND DOES NOT HELP ANYONE AND JUST KEEPS GOING AND GOING AND GOING AND GOING AND GOING AND GOING AND GOING AND GOING FOR NO REASON AT ALL AND IT'S BAD PRACTICE AND IT IS ANNOYING AND MEANINGLESS"
        style={{ marginLeft: "250px", marginTop: "10px" }}
      />

      <h3
        style={{
          marginLeft: "10px",
          fontFamily: "Comic Sans MS",
        }}
      >
        My Favorite Sandwich Ingredients (totally unrelated)
      </h3>

      <p style={{ marginLeft: "5px" }}>
        Here is a normal paragraph with{" "}
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
          a link
        </a>{" "}
        so it uses default link colors.
      </p>

      <ul
        style={{
          textAlign: "center",
          listStylePosition: "inside",
          marginLeft: "300px",
          marginRight: "10px",
        }}
      >
        <li style={{ marginLeft: "1px" }}>Centered bullet 1</li>
        <li style={{ marginLeft: "90px" }}>Centered bullet 2 with random margin</li>
        <li style={{ marginLeft: "12px" }}>Centered bullet 3</li>
      </ul>

      <h4
        style={{
          marginLeft: "2px",
          marginTop: "70px",
          textDecoration: "underline",
        }}
      >
        Underlined heading that is not a link
      </h4>
        </main>
    );
}