
interface RecipeTwoProps {
    title: string | number;
}

export function RecipeTwo({ title }: RecipeTwoProps) {
    return (
        <h1>{title}</h1>
    )
}   