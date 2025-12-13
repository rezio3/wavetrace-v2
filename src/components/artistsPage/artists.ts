import artistJakubRezler from "../../img/artistsProfile/artistJakubRezler.jpg";
import artistDanielOfner from "../../img/artistsProfile/artistDanielOfner.jpg";

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
];
export type Artist = {
  name: string;
  description: string;
  img: string;
  musicLink: string;
};
