import artistJakubRezler from "../../img/artistsProfile/artistJakubRezler.jpg";
import artistHubertWalkowski from "../../img/artistsProfile/artistHubertWalkowski.jpg";
import artistDanielOfner from "../../img/artistsProfile/artistDanielOfner.jpg";
import artistSzymonMichalek from "../../img/artistsProfile/artistSzymonMichalek.jpg";

export const artists: Artist[] = [
  {
    name: "Jakub Rezler",
    description: `Founder of Wavetrace, composer, and software developer. He holds a 
    Master’s degree in Composition from the Karol Lipiński Academy of Music in Wrocław. 
    Jakub creates music for films and video games and develops his own games in C#. With a strong understanding 
    of the theatre industry, he collaborates effectively with directors and adapts well to 
    creative teamwork. His work is mainly orchestral, often combined with modern electronic 
    textures to craft a distinctive sound.`,
    img: artistJakubRezler,
    musicLink: "",
  },
  {
    name: "Hubert Walkowski",
    description: `A first-place laureate of the film music competition at FMF Kraków in 2019 and the 
    composer behind soundtracks for Polish films and series including "Strachy", "Dziewczyna z Kolonii", 
    and "Życie dla początkujących". He graduated from the Academy of Music in Wrocław with a master's degree. 
    His compositional work spans a diverse spectrum of styles, ranging from electronic and pop to full 
    symphonic orchestra.`,
    img: artistHubertWalkowski,
    musicLink: "",
  },
  {
    name: "Daniel Ofner",
    description: `Daniel Ofner is a composer, producer, and violinist with over a decade of 
    experience creating cinematic, orchestral, and hybrid music for film, games, and media. 
    A graduate of the Jerusalem Academy of Music and Dance, with additional studies at the Franz 
    Liszt Academy in Budapest, Daniel blends classical training with modern production to craft 
    emotionally driven, high-impact tracks. His work combines expressive orchestration, immersive 
    sound design, and a unique sonic signature that brings stories to life.`,
    img: artistDanielOfner,
    musicLink: "",
  },
  {
    name: "Szymon Michałek",
    description: `19-year-old composer and music producer who specializes in fantasy-electronic music, 
    crafting exquisite hybrids that seamlessly blend synthesizers with prepared classical and orchestral 
    instruments. His work can be found on Spotify and SoundCloud under the name Simon MichMaxx.`,
    img: artistSzymonMichalek,
    musicLink: "",
  },
];
export type Artist = {
  name: string;
  description: string;
  img: string;
  musicLink: string;
};
