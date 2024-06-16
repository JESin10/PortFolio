import { child, get, ref } from "firebase/database";
import { rtd } from "../Firebase";

export const MyProjectData = async () => {
  const RtdRefProjects = ref(rtd);
  try {
    const snapshot = await get(child(RtdRefProjects, "/Projects"));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const MySkillData = async () => {
  const RtdRefSkills = ref(rtd);
  try {
    const snapshot = await get(child(RtdRefSkills, "/Skills"));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
