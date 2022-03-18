//list of avatars their name, creator and where to find them.

const data = [
  {
    id: 1,
    avatarName: "Deira",
    author: "MariVR",
    notes:
      "This is an original 3D model compatible with Unity's Humanoid format and designed for VRChat.",
    price: "$45",
    images: [
      {
        src: "https://public-files.gumroad.com/lgxz7rx4ci3w3pyw5pylevnusedz",
        alt: "Deira Avatar",
      },
      {
        src: "https://public-files.gumroad.com/zk3ieg55rv4codpny4yn87uaz581",
        alt: "Deira Avatar",
      },
      {
        src: "https://public-files.gumroad.com/sbxgcjy9xr44yvb0zhwzocd07b5b",
        alt: "Deira Avatar",
      },
    ],
  },
  {
    id: 2,
    avatarName: "Hyenid",
    author: "alber",
    notes:
      "A highly customizable 3D avatar base developed for use on social VR platforms. Optimized for VRChat and Neos.",
    price: "$40",
    images: [
      {
        src: "https://public-files.gumroad.com/maphyzxj1h8sm5vxrugso0f3r8iq",
        alt: "Hyenid avatar",
      },
      {
        src: "https://public-files.gumroad.com/bszgtgdih49b4ng9j9neo39v1sxa",
        alt: "Hyenid avatar",
      },
      {
        src: "https://public-files.gumroad.com/ijxp9xvtc8uyo5drdwmmouivyzgw",
        alt: "Hyenid avatar",
      },
    ],
  },
  {
    id: 3,
    avatarName: "Coppouchi",
    author: "Coppou",
    notes:
      "Avatar is a bit difficult to get now, Coppou has closed commissions... Pictures are of my avatar as there is no gumroad info.",
    price: "$60 for both male and female, $40 for individual.",
    images: [
      {
        src: require("../images/Coppou1.png"),
        alt: "Hyenid avatar",
      },
      {
        src: require("../images/Coppou2.png"),
        alt: "Hyenid avatar",
      },
      {
        src: require("../images/Coppou3.png"),
        alt: "Hyenid avatar",
      },
    ],
  },
];

export default data;
