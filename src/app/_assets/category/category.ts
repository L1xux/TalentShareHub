const category = [
  // language
  {
    id: 1,
    name: "언어",
    icon: `${process.env.NEXT_PUBLIC_TEST_URL}/image/icon/language.png`,
  },
  // mathematics
  {
    id: 2,
    name: "수학",
    icon: `/image/icon/mathematics.png`,
  },
  // develop
  {
    id: 3,
    name: "개발",
    icon: `${process.env.NEXT_PUBLIC_TEST_URL}/image/icon/develop.png`,
  },
];

export type CategoryState = (typeof category)[0];
export default category;
