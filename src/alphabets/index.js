const alphabets = {
  english: { name: "English", get: () => import("./english") },
};

export default alphabets;
