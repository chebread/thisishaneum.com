declare interface Contact {
  category: string;
  link: string;
}

declare interface Skill {
  category: string;
  details: string[];
}

declare interface Award {
  name: string;
  projectUrl: string;
  description: string;
  detail: string;
  projectStacks: string[];
}

declare interface Project {
  name: string;
  projectUrl: string;
  description: string;
  projectStacks: string[];
}

declare interface Education {
  title: string;
  details: string[];
}
