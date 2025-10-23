export const CONTACT_INFO = {
  email: "kranthi.julakanti@gmail.com",
  phone: "+91 9491267523",
  linkedin: "https://www.linkedin.com/in/julakantikranthikumar/",
  stackoverflow: "https://stackoverflow.com/users/7670618/kranthi",
  github: "https://github.com/kranthijulakantiwork/",
} as const

export const SOCIAL_LINKS = [
  {
    name: "Email",
    url: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    name: "LinkedIn",
    url: CONTACT_INFO.linkedin,
    href: CONTACT_INFO.linkedin,
  },
  {
    name: "StackOverflow",
    url: CONTACT_INFO.stackoverflow,
    href: CONTACT_INFO.stackoverflow,
  },
  {
    name: "GitHub",
    url: CONTACT_INFO.github,
    href: CONTACT_INFO.github,
  },
] as const
