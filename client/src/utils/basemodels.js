//list of basemodels used

const data = [
  {
    id: 1,
    name: "EroDeira",
    description: "EroDeira",
    authorName: "EroForce",
    imageUrl:
      "https://api.vrchat.cloud/api/1/file/file_56d5999d-f0cc-487c-86d9-0d9b1636c4ec/2/file",
    thumbnailImageUrl:
      "https://api.vrchat.cloud/api/1/image/file_56d5999d-f0cc-487c-86d9-0d9b1636c4ec/2/256",
    alt: "thumbnail of avatar",
    collage: [
      {
        id: 1,
        src: require("../images/LargerStompers.PNG"),
        src2: require("../images/LargerStompers.PNG"),
        alt: "bean",
        title: "Bean changes",
      },
      {
        id: 2,
        src: require("../images/LargerStompers2.PNG"),
        src2: require("../images/LargerStompers2.PNG"),
        alt: "paws",
        title: "Paw changes",
      },
      {
        id: 3,
        src: require("../images/BoobComp.PNG"),
        src2: require("../images/BoobComp.PNG"),
        alt: "breast",
        title: "Breast reworks",
      },
      {
        id: 4,
        src: require("../images/thiccness.gif"),
        src2: require("../images/thiccness.gif"),
        alt: "clothing changes",
        title: "Clothing/Blendshapes",
      },
      {
        id: 5,
        src: require("../images/Final_Diera.png"),
        src2: require("../images/Final_Diera.png"),
        alt: "clothing changes",
        title: "Finished/Front",
      },
      {
        id: 6,
        src: require("../images/Final_Diera2.png"),
        src2: require("../images/Final_Diera2.png"),
        alt: "clothing changes",
        title: "Finished/Back",
      },
    ],
    modifications: [
      "A remodel of the breast, beans on feet, added replacement shapekeys. ",
      "Made new textures to represent an older model that is my main. ",
      "Added new animations (still adding more toggles/sliders in the vrc menu. ",
    ],
    baseUsed: "Deira",
  },
  {
    id: 2,
    name: "Hyenid",
    description: "Hyenid",
    authorName: "EroForce",
    imageUrl:
      "https://api.vrchat.cloud/api/1/file/file_d6fe6acb-a639-4747-b508-1e6537459f1b/3/file",
    thumbnailImageUrl:
      "https://api.vrchat.cloud/api/1/image/file_d6fe6acb-a639-4747-b508-1e6537459f1b/3/256",
    collage: [
      {
        id: 1,
        src: require("../images/hyenid_face.webp"),
        src2: require("../images/hyenid_face.png"),
        alt: "hyenid_face",
        title: "Rawwwr!",
      },
      {
        id: 2,
        src: require("../images/hyenid_side.webp"),
        src2: require("../images/hyenid_side.png"),
        alt: "hyenid_side",
        title: "Side pose",
      },
      {
        id: 3,
        src: require("../images/hyenid_side2.webp"),
        src2: require("../images/hyenid_side2.png"),
        alt: "Alt hyenid_side",
        title: "Alt Side pose",
      },
    ],
    modifications: [
      "Breasts were changed/larger. ",
      "Remodeled/sculpted butt. ",
      "Added blush mesh to the face",
      "Added shape keys to turn on and off the blush. ",
      "Remodeled the feet/beans. ",
      "Added shape keys for controlling the size of the feet/beans. ",
    ],
    baseUsed: "Hyenid",
  },
  {
    id: 3,
    name: "Azura Fox",
    description: "Azura_Fox_Bikini",
    authorName: "EroForce",
    imageUrl:
      "https://api.vrchat.cloud/api/1/file/file_58e6a450-23db-4746-8321-382d0d95043f/2/file",
    thumbnailImageUrl:
      "https://api.vrchat.cloud/api/1/image/file_58e6a450-23db-4746-8321-382d0d95043f/2/256",
    collage: [
      {
        id: 1,
        src: require("../images/ero_face.webp"),
        src2: require("../images/ero_face.png"),
        alt: "ero_face",
        title: "Erochi's face!",
      },
      {
        id: 2,
        src: require("../images/ero_side.webp"),
        src2: require("../images/ero_side.png"),
        alt: "ero_side",
        title: "Side pose",
      },
      {
        id: 3,
        src: require("../images/ero_booty.webp"),
        src2: require("../images/ero_booty.png"),
        alt: "ero_rear",
        title: "Rear pose ;)",
      },
    ],
    modifications: [
      "Breast Changes, ",
      "Resculpted body, ",
      "Thigh physics, ",
      "retextures, ",
      "Weight paint fixes. ",
    ],
    baseUsed: "EroChi",
  },
  {
    id: 4,
    name: "Silent Femboi",
    description: "Silent_Femboi",
    authorName: "EroForce",
    imageUrl:
      "https://api.vrchat.cloud/api/1/file/file_8337f717-a354-4eb8-8eca-96c7cf8b3c21/3/file",
    thumbnailImageUrl:
      "https://api.vrchat.cloud/api/1/image/file_8337f717-a354-4eb8-8eca-96c7cf8b3c21/3/256",
    collage: [
      {
        id: 1,
        src: require("../images/silent_front.webp"),
        src2: require("../images/silent_front.png"),
        alt: "silent front",
        title: "Silent v2",
      },
      {
        id: 2,
        src: require("../images/silent_full.webp"),
        src2: require("../images/silent_full.png"),
        alt: "silent full body",
        title: "Silent front pose",
      },
      {
        id: 3,
        src: require("../images/silent_rear.webp"),
        src2: require("../images/silent_rear.png"),
        alt: "silent rear view",
        title: "Silent rear pose",
      },
    ],
    modifications: [
      "Resculpted the booty, ",
      "Resculpted the thighs, ",
      "Added bones to the butt and thighs, ",
      "Retextured for Silent, ",
      "Custom hoodie.",
    ],
    baseUsed: "EroChi",
  },
  {
    id: 5,
    name: "Femboy EroCh Skirt",
    description: "Femboy_EroChi_Skirt",
    authorName: "EroForce",
    imageUrl:
      "https://api.vrchat.cloud/api/1/file/file_f0024ba8-6985-4dc5-a341-ee69a155d7ad/1/file",
    thumbnailImageUrl:
      "https://api.vrchat.cloud/api/1/image/file_f0024ba8-6985-4dc5-a341-ee69a155d7ad/1/256",
    collage: [
      {
        id: 1,
        src: require("../images/erofem.webp"),
        src2: require("../images/erofem.png"),
        alt: "femboy erochi",
        title: "Femboy Erochi",
      },
    ],
    modifications: [
      "Resculpted the booty, ",
      "Resculpted the thighs, ",
      "Added bones to the butt and thighs, ",
      "Retextured to Ero, ",
      "Added outfits.",
    ],
    baseUsed: "EroChi",
  },
];

export default data;
