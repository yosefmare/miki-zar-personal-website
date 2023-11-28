import {images} from '../ts/images-objects'


const Glairy = () => {
  return (
    <div className="text-center h-[100vh] flex justify-center items-center">
      <div className="grid gap-16 lg:grid-cols-3 grid-rows-2 md:grid-cols-2 sm:grid-cols-1 text-white">
        {
          images.map((card) => {
            return (
              <div className="w-[470px] h-[220px] bg-slate-800 grid grid-cols-2 shadow-2xl rounded-md cursor-pointer pop-transition">
                <div className="overflow-hidden rounded-l-md">
                  <img className="h-full w-full rounded-l-md" src={card.path} alt="" />
                </div>
                <div className=" overflow-hidden">
                  <h2 className="lg:text-3xl">{card.title}</h2>
                  <hr />
                  <div className=" flex items-center justify-center h-full w-full">
                    <h3 className="lg:text-xl mb-6">{card.year}</h3>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Glairy;

