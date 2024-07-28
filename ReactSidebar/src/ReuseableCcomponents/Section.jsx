import React from "react";

function Section({ component }) {
  return (
    <section className="p-2 md:p-3 lg:p-4 xl-p-6 bg-gray-400 min-h-screen max-h-fit w-full rounded-xl">
      {component}
    </section>
  );
}

export default Section;
