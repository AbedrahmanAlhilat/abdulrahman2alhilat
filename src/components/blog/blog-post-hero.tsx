
interface BlogPostHeroProps {
  image: string;
}

export function BlogPostHero({ image }: BlogPostHeroProps) {
  return (
    <div 
      className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}
