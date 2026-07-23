import { use } from "react";
import ModelCard from "./ModelCard";

const Model = ({ modelPromise }) => {
  const models = use(modelPromise);

  console.log(models);

  return (
    <div className="mx-auto w-[80%]">
      <div className="mx-auto items-center my-6">
        <h1 className="  text-4xl  text-center font-bold ">
          Chose Your AI Model
        </h1>
        <h1 className="  text-gray-300 text-center my-3">
          One Subscription Gives You Access To All frointier AI Model
        </h1>
      </div>

     <div className="grid grid-cols-3 gap-4">
       { models.map(model=>
            <div>
                <ModelCard model={model} />
            </div>
        ) }
     </div>
    </div>
  );
};

export default Model;
