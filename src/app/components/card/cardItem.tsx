import Link from "next/link";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CardItem(props: any) {
  const { image, title, description, link } = props;
  return (
    <>
      <div className="">
        <Link href={link}>
          <div className="w-full aspect-square rounded-[15px] truncate mb-[10px] relative">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="font-[700] text-[14px] text-white mb-[10px] line-clamp-1">
            {title}
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80] line-clamp-1">
            {description}
          </div>
        </Link>
      </div>
    </>
  );
}
