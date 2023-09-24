import Image from "next/image";

interface Props {
  title: string;
  body: string;
  image: string;
};

export default function CardPost({ title, body, image }: Props) {
  return (
    <div className="w-full my-4">
      <div className="flex items-start flex-row w-full border-gray-400 border-[1px] rounded-md p-3 gap-3">
        <div className="p-2 rounded-md flex-none">
          <Image
            alt={title}
            src={image}
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-3 text-black dark:text-white h-full">
          <div className="">
            {title}
          </div>
          <div className="text-xs">
            {body}
          </div>
        </div>
      </div>
    </div>
  );
};

