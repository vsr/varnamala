const alphabets = {
  english: { name: "English", get: () => import("./english") },
  hindi: { name: "हिन्दी (Hindi)", get: () => import("./hindi") },
  kannada: { name: "ಕನ್ನಡ (Kannada)", get: () => import("./kannada") },
};

export default alphabets;
