const normalizeKey = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/&/g, " and ")
    .replace(/\s*ft\.?\s.+$/i, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "");

const buildMap = (pairs: Array<[string, string]>) =>
  Object.fromEntries(
    pairs.map(([name, fileName]) => [normalizeKey(name), fileName]),
  );

const mcsImageMap = buildMap([
  ["MC Kingten", "kingten.jpg"],
  ["MC Tubbie", "MC tubbie.jpg"],
  ["Crownless I", "crownless.jpg"],
]);

const crewImageMap = buildMap([
  ["Guiding Youth", "guiding youth.jpg"],
  ["Break Bread", "break bread.jpeg"],
  ["Break Bread Soundsystem", "break bread.jpeg"],
  ["Creativ Dubs", "creative dubs.jpg"],
  ["Selah Techniques", "selah techniques.jpg"],
  ["Guiding Youth & Selah Techniques", "selah techniques.jpg"],
  ["Crucial", "crucial.jpg"],
  ["Deliverance", "deliverance.jpg"],
  ["Della", "della.jpeg"],
  ["DJ Dede", "dj dédé.jpg"],
  ["DJ Seductive", "dj seductive.jpg"],
  ["DJ Ceductive", "dj seductive.jpg"],
  ["Dreadical Warriors", "dredical warriors.jpg"],
  ["Drijfkracht", "drijfkracht.jpg"],
  ["Fishermen", "fishermen.jpg"],
  ["Ital Brew", "ital brew.jpg"],
  ["Jahmateur Hi Power", "jahmateur hipower.jpg"],
  ["Little Man", "little man.jpg"],
  ["Lowie", "lowie.jpg"],
  ["MITCH and Paleo", "mitch&paleo.jpg"],
  ["Mitch", "mitch.jpg"],
  ["Paleo", "paleo.jpg"],
  ["MUDA @ Living Dub", "muda livingdub.png"],
  ["MUDA", "muda livingdub.png"],
  ["Moksha Vibrations", "moshka vibrations.jpg"],
  ["Pathseeker", "pathseeker.jpg"],
  ["Poa Annua", "poa anua.jpg"],
  ["Saga Sound Station", "saga sound.jpg"],
  ["Sotabosc", "sotobosc.jpg"],
  ["Sotobosc", "sotobosc.jpg"],
  ["Steppin Ground", "steppin ground.png"],
  ["Suncharm", "suncharm.jpg"],
  ["Tune", "tune.jpg"],
  ["UFO Collective", "ufo collective.jpg"],
  ["Unification", "unification.jpg"],
  ["Untzslag", "untzslag.jpg"],
  ["Ventus", "ventus.png"],
  ["Bloodhound", "bloodhound.jpg"],
  ["Not Surrender", "not surrender.jpg"],
  ["Indica Dubs", "indica dubs.jpg"],
]);

const soundsystemImageMap = buildMap([
  ["Break Bread Soundsystem", "Break bread soundsystem.jpg"],
  ["Crucial Soundsystem", "crucial soundsystem.jpg"],
  ["Dreadical Warriors Soundsystem", "dreadical warriors soundsystem.jpg"],
  ["Drijfkracht Soundsystem", "drijfkracht soundsystem.png"],
  ["Guiding Youth Soundsystem", "guiding youth soundsystem.jpg"],
  ["Ital Brew Soundsystem", "ital brew soundsystem.jpg"],
  ["Jahmateur Hi Power Soundsystem", "jahmateur hipower soundsystem.jpg"],
  ["Moksha Vibrations Soundsystem", "moshka vibrations soundsystem.png"],
  ["Moshka Vibrations Soundsystem", "moshka vibrations soundsystem.png"],
  ["Not Surrender Soundsystem", "not surrender soundsystem.jpg"],
  ["Saga Sound Station", "saga sound soundsystem.jpg"],
  ["Steppin Ground Soundsystem", "steppin ground soundsystem.png"],
  ["Tune Soundsystem", "tune soundsystem.jpeg"],
  ["Unification Soundsystem", "unification soundsystem.jpg"],
  ["Untzslag Soundsystem", "untzslag soundsystem.jpg"],
]);

const workshopImageMap = buildMap([
  ["Ecstatic Dance", "ecstatic dance.png"],
  ["Airbrush and Kids Facepainting", "airbrush.png"],
  ["Airbrush & Kindergrime", "airbrush.png"],
  ["Graffiti Workshop", "grafitti.png"],
  ["Roots and Colors: Graffiti Workshop", "grafitti.png"],
  ["Henna Workshop", "henna.png"],
  ["Henna Tattoos", "henna zetten.png"],
  ["Living Art", "living art.jpg"],
  ["Mindfulness / Meditation", "mindfulness.jpg"],
  ["Mindfulness & Meditatie", "mindfulness.jpg"],
  ["Natural Shapes", "natural shapes.jpg"],
  ["Organic farming and human care", "organic farming.png"],
  ["Needle felting", "needle felting.jpeg"],
  ["Fortune teller: free card reading", "fortune teller.png"],
  ["Performance Rodkint", "rodkindt performance.jpg"],
  ["Performance by Rodkint", "rodkindt performance.jpg"],
  ["Rodkint", "rodkindt performance.jpg"],
  ["Fire Dance", "vuurdans.jpg"],
  ["Fire show", "vuurdans.jpg"],
  ["Integrale Yoga", "yoga.png"],
  ["Yoga Flow", "yoga.png"],
]);

export function getCrewImage(name: string): string | null {
  const normalizedName = normalizeKey(name);

  const mcFileName = mcsImageMap[normalizedName];
  if (mcFileName) {
    return `/images/mcs/${mcFileName}`;
  }

  const fileName = crewImageMap[normalizedName];
  if (fileName) {
    return `/images/crews/${fileName}`;
  }

  // Safety fallback for merged card labels that still include Selah Techniques.
  if (normalizedName.includes(normalizeKey("Selah Techniques"))) {
    return "/images/crews/selah techniques.jpg";
  }

  return null;
}

export function getSoundsystemImage(name: string): string | null {
  const fileName = soundsystemImageMap[normalizeKey(name)];
  return fileName ? `/images/soundsystems/${fileName}` : null;
}

export function getWorkshopImage(name: string): string | null {
  const fileName = workshopImageMap[normalizeKey(name)];
  return fileName ? `/images/workshops/${fileName}` : null;
}
