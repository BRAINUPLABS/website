import React from "react";
import Hero from "../../components/SchoolProgram/TeacherTraining/Hero";
import Programs from "../../components/SchoolProgram/TeacherTraining/Programs";
import ProcessAndPerks from "../../components/SchoolProgram/TeacherTraining/ProcessAndPerks";
import SchoolsAndTeachers from "../../components/SchoolProgram/TeacherTraining/SchoolsAndTeachers";
import FormAndGallery from "../../components/SchoolProgram/TeacherTraining/FormAndGallery";

export default function TeacherTraining() {
  return (
    <div className="bg-white font-main text-brand-bg-dark">
      <Hero />
      <Programs />
      <ProcessAndPerks />
      <SchoolsAndTeachers />
      <FormAndGallery />
    </div>
  );
}