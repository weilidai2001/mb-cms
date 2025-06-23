import Image from "next/image";
import styles from "./product.module.css";

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
    <article>
      <div id={`product-description-${item.id}`}>
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
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      </div>
    </article>
  );
};

export default Product;
