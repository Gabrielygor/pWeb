interface RecipeTwoProps {
    title: string | number;
  }
  
  export function TitleProp({ title }: RecipeTwoProps) {
    return (
      <h1>{title}</h1>
    );
  }