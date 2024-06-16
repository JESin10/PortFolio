export interface ProjectLink {
  github: string;
  blog?: string;
  depo?: string;
}

export interface ProjectSkill {
  fe_skill: string;
  be_skill?: string | null;
}

export interface ProjectDesc {
  content: string;
}

export interface ProjectProps {
  id: number;
  projectscale: string;
  title: string;
  date: string;
  link: ProjectLink;
  summary: string;
  img: string[];
  skill: ProjectSkill;
  desc: ProjectDesc[];
}

export interface Skills {
  id: number;
  skill: string;
  skillType: "FE" | "ETC";
  desc: string[];
}

// export interface ProjectProps {
//   id: number;
//   projectscale: string;
//   title: string;
//   date: string;
//   link: {
//     github: string;
//     blog?: string;
//     depo?: string;
//   };
//   summary: string;
//   img: string[];
//   skill: {
//     fe_skill: string;
//     be_skill?: string | null; // Allow null here
//   };
//   desc: {
//     content: string;
//   }[];
// }
