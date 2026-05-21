Instructions

1. Create variables for:
   a. primary color
   b. secondary color
   c. card background
   d. text color
   e. border radius
   f.shadow

   using
   --primary-color: #00bcd4;
   --secondary-color: #7c4dff;
   --card-bg: rgba(255, 255, 255, 0.08);
   --text-color: #ffffff;
   --border-radius: 20px;
   --shadow:
   0 10px 30px rgba(0, 0, 0, 0.25);

2. Target the div with the attribute data-role='frontend' using the attribute selector method and style it using {border: 2px solid var(--primary-color);}.
3. Target the direct h1 child of the class selector .card and style it using {border: 2px solid var(--primary-color);}.
4. Target the adjacent p sibling of h2 elements and style using
   { margin-top: 10px;
   line-height: 1.7;
   opacity: 0.8;}
5. Target the hover state of the class selector .card and style using
   {
   transform: translateY(-12px);
   box-shadow: 0 20px 40px rgba(0, 188, 212, 0.3);}.
   What kind of selector is this?
6. Target the pseudo before element of the class selector .tag and style using
   {
   transform: translateY(-12px);
   box-shadow: 0 20px 40px rgba(0, 188, 212, 0.3);
   }.

<style>
  /* =========================
   GLOBAL STYLES
========================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;

  font-family: Arial, sans-serif;

  color: var(--text-color);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px;

  /* =========================
     GRADIENT BACKGROUND
  ========================= */

  background: linear-gradient(
    135deg,
    #0f172a,
    #1e293b,
    #0f766e
  );
}

/* =========================
   TEAM SECTION
========================= */

.team-section {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

/* =========================
   CARD
========================= */

.card {
  width: 320px;

  padding: 24px;

  border-radius: var(--border-radius);

  background: var(--card-bg);

  backdrop-filter: blur(12px);

  box-shadow: var(--shadow);

  border: 1px solid rgba(255, 255, 255, 0.1);

  position: relative;

  overflow: hidden;

  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;


/* =========================
   IMAGE
========================= */

.card img {
  width: 100%;
  height: 250px;

  object-fit: cover;

  border-radius: 14px;

  transition: transform 0.4s ease;
}

/* =========================
   TAG
========================= */

.tag {
  display: inline-block;

  padding: 8px 14px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.1);

  font-size: 14px;

  margin-bottom: 18px;

  position: relative;
}

/* =========================
   BUTTON
========================= */

button {
  margin-top: 20px;

  width: 100%;

  padding: 14px;

  border: none;

  border-radius: 12px;

  background: var(--primary-color);

  color: white;

  cursor: pointer;

  font-size: 16px;

  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

{
  transform: translateY(-12px);

  box-shadow:
    0 20px 40px rgba(0, 188, 212, 0.3);
}

/* CODE HERE */
}
</style>
<section class="team-section">
  <div class="card featured" data-role="frontend">
    <span class="tag">Frontend Developer</span>

    <img
      src="https://picsum.photos/300"
      alt="developer profile"
    />

    <h2>Tochi</h2>

    <p>
      Passionate about building beautiful user interfaces
      with HTML and CSS.
    </p>

    <button>View Portfolio</button>

  </div>

  <div class="card" data-role="backend">
    <span class="tag">Backend Developer</span>

    <img
      src="https://picsum.photos/301"
      alt="developer profile"
    />

    <h2>Jane Smith</h2>

    <p>
      Loves scalable APIs, databases and distributed systems.
    </p>

    <button>View Portfolio</button>

  </div>
</section>
