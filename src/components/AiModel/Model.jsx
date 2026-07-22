import { use } from "react";

const Model = ({ modelPromise }) => {
  const models = use(modelPromise);

  console.log(models);

  return (
    <div>
      Hi
    </div>
  );
};

export default Model;