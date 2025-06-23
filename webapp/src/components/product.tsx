import Image from "next/image";

interface ProductProps {
  item: {
    id: number;
    title: string;
    icon: string;
    description: string;
  };
}

const Product: React.FC<ProductProps> = ({ item }) => {
  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="w-full text-left p-4 bg-gray-50">
        <span className="text-lg font-semibold text-gray-900">
          {item.title}
        </span>
      </div>
      <div id={`product-description-${item.id}`} className="p-4 bg-white">
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={48}
              height={48}
            />
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      </div>
    </article>
  );
};

export default Product;
