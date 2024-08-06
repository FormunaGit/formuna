import Image from "next/image";

export default function ItemConstructor({image}: {image: string}) {
    return (
        <div className="w-full h-full">
            <Image className="w-full h-full object-cover" src={image} alt="wallpaper" height={2048} width={1080}/>
        </div>
    );
}

