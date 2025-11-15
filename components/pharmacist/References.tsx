import { REFERENCES } from "@/constant";

const References = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-8 py-12">
      <h2 className={`big-texts mb-6 text-3xl font-semibold text-gray-800`}>
        References
      </h2>
      <ol className="w-full space-y-8 px-4 md:px-8">
        {REFERENCES.map((reference) => (
          <li
            key={reference.name}
            className="list-none rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <h3 className=" text-xl font-bold text-primary">
              {reference.name}
            </h3>
            <p className="mb-1 text-lg font-medium text-gray-700">
              {reference.title}
            </p>
            <p className="text-gray-600">{reference.company}</p>
            <p className="text-sm text-gray-500">{reference.location}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default References;
