import artistJakubRezler from "../../img/artistsProfile/artistJakubRezler.jpg";

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
];
export type Artist = {
  name: string;
  description: string;
  img: string;
  musicLink: string;
};
